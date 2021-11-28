<template>
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
  <link href="recent-news-boxes.css" rel="stylesheet">
  <div class="container">
    <div class="row">
      <div class="ct-blog col-sm-6 col-md-4">
        <button v-on:click="fetchAll">Home</button>
        <label>Search</label>
        <input type="text" v-model="search" v-on:keyup.enter="onEnter">
      </div>
    </div>
    <div class="row">
      <div v-for="(result,i) in news" :key="i" class="ct-blog col-sm-6 col-md-4">
        <div class="inner">
          <div class="fauxcrop">
            <img v-if="!result.image" src="@/assets/empty.jpg">
            <img v-if="result.image" :src=result.image>
          </div>
          <div class="ct-blog">
            <h2 class="ct-blog-header">{{ result.title }}</h2>
            <p class="ct-blog-header">
              {{ result.content }}
            </p>
            <p>{{ getDate(result.timestamp) }}</p>
            <router-link :to=result.id>see more</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="ct-blog col-sm-6 col-md-4">
        <button class="btn start" name="Previous" type="button" v-on:click="handlePrevious" :disabled="!previous">
          Previous
        </button>
        <button class="btn" name="Create" type="button" v-on:click="navigateToCreate">Create</button>
        <button class="btn end" name="Next" type="button" v-on:click="handleNext" :disabled="!next">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: null,
      url: 'http://127.0.0.1:8000/api/news/',
      news: null,
      loading: false,
      offset: 0,
      limit: 10,
      previous: null,
      next: null
    }
  },
  methods: {
    fetchAll() {
      this.search = null;
      const url = this.url + "?limit=" + this.limit + "&offset=" + this.offset
      this.fetchData(url)
    },
    navigateToCreate() {
      this.$router.push("/create/")
    },
    fetchData(url) {
      this.error = this.news = null
      this.loading = true
      // replace `getPost` with your data fetching util / API wrapper
      fetch(url).then((res) => res.json()).then((res) => {
        // make sure this request is the last one we did, discard otherwise
        this.news = res["results"]
        this.next = res["next"]
        this.previous = res["previous"]
        this.loading = false;
      }).catch((err) => {
        this.error = err;
      })
    },
    handleNext() {
      this.fetchData(this.next);
    },
    handlePrevious() {
      this.fetchData(this.previous);
    },
    onEnter() {
      if (this.search) {
        const url = this.url + "?limit=" + this.limit + "&offset=0" + "&title=" + this.search
        this.fetchData(url)
      }
    },
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
    }
  },
  created() {
    this.fetchAll()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.recentNews {
  background-color: rgb(20, 117, 175)
}

.recentNews .news-title {
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
  font-family: 'nimbus-sans-condensed', sans-serif;
  font-size: 55px;
  font-weight: bold;
  color: #fff;
}

.recentNews .row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 30px;
}

.recentNews .ct-blog {
  margin-bottom: 30px;
}

.ct-blog .inner {
  background-color: #FFF;
  padding: 10px;
  transition: all 0.2s ease-in-out 0s;
  cursor: pointer;
  height: 100%;
}

.ct-blog .inner:hover {
  background-color: #e6e6e6;
}

.ct-blog .fauxcrop {
  height: 180px;
  overflow: hidden;
}

.ct-blog .fauxcrop img {
  width: 100%;
}

.ct-blog-content {
  display: table;
  padding: 30px 0 28px;
}

.ct-blog-content .ct-blog-date {
  border-right: 1px solid #95A5A6;
  display: table-cell;
  font-family: "Lato", sans-serif;
  padding: 0px 18px 0px 15px;
  text-align: center;
}

.ct-blog-content .ct-blog-date span {
  font-size: 16px;
  color: rgb(20, 117, 175);
  font-weight: 700;
  display: block;
  line-height: 1;
}

.ct-blog-content .ct-blog-date strong {
  font-size: 25px;
  color: rgb(20, 117, 175);
}

.ct-blog-content .ct-blog-header {
  color: #000;
  display: table-cell;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.2px;
  line-height: 1.1;
  padding: 0 20px;
  vertical-align: top;
}

.btn-news {
  color: #333;
  font-size: 14px;
  font-weight: bold;
  padding-bottom: 30px;
  text-align: center;
}

.btn-news.btn-contests a {
  color: #fff;
  font-family: 'nimbus-sans-condensed', sans-serif;
  font-size: 24px;
  transition: all 0.2s ease-in-out 0s;
}

.btn-news.btn-contests a:hover {
  color: #000;
}
</style>
