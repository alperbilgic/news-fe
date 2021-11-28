<template>
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
  <link href="recent-news-boxes.css" rel="stylesheet">
  <div class="container">
    <div class="row">
      <div class="col-4 d-flex justify-content-center text-center">
        <img v-if="!image" src="@/assets/empty.jpg" height="250">
        <img v-if="image" :src=image height="250">
        <p>{{getDate(date)}}</p>
        <h1>{{ title }}</h1>
        <h3>{{ content }}</h3>
        <p>{{ detail }}</p>
      </div>
    </div>
    <div class="row">
      <button class="btn" name="Update" type="button" v-on:click="handleUpdate">Update</button>
      <button class="btn btn-danger end first" name="Delete" type="button" v-on:click="handleDelete" >Delete</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NewsDetail',
  data() {
    return {
      detail: null,
      title: null,
      content: null,
      image: null,
      url: "http://127.0.0.1:8000/api/news/"
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    getDate(date) {
      const newDate = new Date(date * 1000)
      const year = newDate.getFullYear().toString().length === 1 ? "0" + newDate.getFullYear() : newDate.getFullYear()
      const tempMonth = newDate.getMonth() + 1
      const month = tempMonth.toString().length === 1 ? "0" + tempMonth : tempMonth
      const day = newDate.getDate().toString().length === 1 ? "0" + newDate.getDate() : newDate.getDate()
      const hours = newDate.getHours().toString().length === 1 ? "0" + newDate.getHours() : newDate.getHours()
      const minutes = newDate.getMinutes().toString().length === 1 ? "0" + newDate.getMinutes() : newDate.getMinutes()
      this.time = hours + ":" + minutes
      return year + "-" + month + "-" + day + " " + hours + ":" + minutes
    },
    fetchData() {
      const id = this.$route.params.id;
      const url = this.url + id + "/"
      this.error = this.news = null
      this.loading = true
      // replace `getPost` with your data fetching util / API wrapper
      fetch(url).then((res) => res.json()).then((res) => {
        // make sure this request is the last one we did, discard otherwise
        this.date = res.timestamp
        this.title = res.title
        this.detail = res.detail
        this.image = res.image
        this.content = res.content
        this.loading = false;
      }).catch((err) => {
        this.error = err;
      })
    },
    handleDelete() {
      const id = this.$route.params.id
      const url = this.url + id + "/"
      const options = {
        method: "DELETE"
      }
      fetch(url, options).then(() => {
        this.$router.back()
      })
    },
    handleUpdate() {
      const id = this.$route.params.id
      this.$router.push("/update/" + id)
    }
  }
}
</script>
