<template>
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
  <link href="recent-news-boxes.css" rel="stylesheet">
  <div class="container">
    <form @submit.prevent="onSubmit">
      <div v-if="error" class="row">
        <p class="text-danger">{{ error }}</p>
      </div>
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
        <textarea v-model="detail" style="width:500px; height:200px;" />
      </div>
      <date-picker v-model="date" valueType="format" format="YYYY-MM-DD" type="date"></date-picker>
      <date-picker v-model="time" valueType="format" format="HH:mm" type="time" @change="createTimezone"></date-picker>
      <img :src="image" class="uploading-image" height="150"/>
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
  name: 'CreateNews',
  components: { DatePicker },
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
      url: "http://127.0.0.1:8000/api/news/",
      error: null
    }
  },
  methods: {
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
      let data = new FormData();
      let fulltime = this.date + "T" + this.time + ":00" + this.timezone
      data.append('title', this.title);
      data.append('content', this.content);
      data.append('detail', this.detail);
      data.append('image', this.image);
      data.append('date', fulltime);

      let options = {
        method: 'POST',
        body: data
      }
      fetch(this.url, options).then(async (res) => {
        if (res.ok !== true) {
          this.error = await res.json()
          return
        }
        this.success = true
        this.image = null
        this.title = null
        this.content = null
        this.detail = null
        this.date = null
        this.time = null
        this.error = null
      }).catch((err) => {
        this.error = "Something went wrong!"
      })
    }
  }
}
</script>
