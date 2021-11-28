<template>
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
  <link href="recent-news-boxes.css" rel="stylesheet">
  <div class="container">
    <div v-if="error" class="row">
      <p class="text-danger">{{ error }}</p>
    </div>
    <form @submit.prevent="onSubmit">

      <div class="row">
        <p>Title</p>
        <input type="text" v-model="title">
      </div>
      <div class="row">
        <p>Content</p>
        <input type="text" v-model="content">
      </div>
      <div class="row">
        <p>Detail</p>
        <textarea v-model="detail" style="width:500px; height:200px;"/>
      </div>
      <div class="row">
        <date-picker v-model="date" valueType="format" format="YYYY-MM-DD" type="date"></date-picker>
        <date-picker v-model="time" valueType="format" format="HH:mm" type="time"></date-picker>
      </div>
      <div class="row">
        <img :src="image" class="uploading-image" height="150"/>
      </div>
      <input type="file" accept="image/jpeg" @change="onImageSelect">
      <input type="submit"/>
    </form>
    <div class="row">
      <p v-if="success">Success</p>
    </div>
  </div>
</template>
<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
  name: 'UpdateNews',
  components: {DatePicker},
  data() {
    return {
      detail: null,
      content: null,
      title: null,
      image: null,
      date: null,
      time: null,
      timezone: null,
      success: false,
      imagePicked: false,
      url: "http://127.0.0.1:8000/api/news/",
      error: null
    }
  },
  methods: {
    setDate(date) {
      const newDate = new Date(date * 1000)
      const year = newDate.getFullYear().toString().length === 1 ? "0" + newDate.getFullYear() : newDate.getFullYear()
      const tempMonth = newDate.getMonth() + 1
      const month = tempMonth.toString().length === 1 ? "0" + tempMonth : tempMonth
      const day = newDate.getDate().toString().length === 1 ? "0" + newDate.getDate() : newDate.getDate()
      this.date = year + "-" + month + "-" + day
      const hours = newDate.getHours().toString().length === 1 ? "0" + newDate.getHours() : newDate.getHours()
      const minutes = newDate.getMinutes().toString().length === 1 ? "0" + newDate.getMinutes() : newDate.getMinutes()
      this.time = hours + ":" + minutes
    },
    fetchData() {
      const id = this.$route.params.id;
      const url = this.url + id + "/"
      this.error = this.news = null
      this.loading = true
      // replace `getPost` with your data fetching util / API wrapper
      fetch(url).then((res) => res.json()).then((res) => {
        // make sure this request is the last one we did, discard otherwise
        this.title = res.title
        this.detail = res.detail
        this.image = res.image
        this.content = res.content
        this.loading = false;
        this.setDate(res.timestamp)
      }).catch((err) => {
        this.error = err;
      })
    },
    createTimezone() {
      let split = new Date().toString().split(" ")
      let timezone = split[split.length - 2] + " " + split[split.length - 1]
      this.timezone = timezone.slice(3, 6) + ":" + timezone.slice(6, 8)
    },
    onImageSelect(e) {
      if (e.target != null) {
        const image = e.target.files[0]
        const reader = new FileReader();
        reader.onload = e => {
          this.image = e.target.result;
          this.imagePicked = true;
        }
        reader.readAsDataURL(image);
      }
    },
    onSubmit() {
      if (this.time === null || this.date === null || this.title === null || this.content === null || this.detail === null || this.image === null)
      {
        this.error = "All fields should be filled!"
        return
      }

      const id = this.$route.params.id;
      let data = new FormData();
      let fulltime = this.date + "T" + this.time + ":00" + this.timezone
      data.append('title', this.title);
      data.append('content', this.content);
      data.append('detail', this.detail);
      if (this.imagePicked) data.append('image', this.image);
      data.append('date', fulltime);

      let options = {
        method: 'PATCH',
        body: data
      }

      const url = this.url + id + "/"
      fetch(url, options).then(async(res) => {
        if (res.ok !== true) {
          this.error = await res.json()
          return
        }
        this.$router.back()
      })
    }
  },
  created() {
    this.fetchData()
    this.createTimezone()
  },
}
</script>
