<template>
    <div class="container">
      <h2 class="news-title">Recent News</h2>
      <div class="row">
        <div class="ct-blog col-sm-6 col-md-4">
          <div class="inner">
            <div class="fauxcrop">
              <a href="#"><img alt="News Entry" src="https://www.solodev.com/assets/recent-news/news-entry-1.jpg"></a>
            </div>
            <div class="ct-blog-content">
              <div class="ct-blog-date">
                <span>March</span><strong>1</strong>
              </div>
              <h3 class="ct-blog-header">
                WebCorpCo Will Be Visiting a Number of Upcoming Conferences
              </h3>
            </div>
          </div>
        </div>
        <div class="ct-blog col-sm-6 col-md-4">
          <div class="inner">
            <div class="fauxcrop">
              <a href="#"><img alt="News Entry" src="https://www.solodev.com/assets/recent-news/news-entry-2.jpg"></a>
            </div>
            <div class="ct-blog-content">
              <div class="ct-blog-date">
                <span>February</span><strong>27</strong>
              </div>
              <h3 class="ct-blog-header">
                WebCorpCo Has Been Named to Inc. 5000
              </h3>
            </div>
          </div>
        </div>
        <div class="ct-blog col-sm-6 col-md-4">
          <div class="inner">
            <div class="fauxcrop">
              <a href="#"><img alt="News Entry" src="https://www.solodev.com/assets/recent-news/news-entry-3.jpg"></a>
            </div>
            <div class="ct-blog-content">
              <div class="ct-blog-date">
                <span>February</span><strong>25</strong>
              </div>
              <h3 class="ct-blog-header">
                7 Crtical Factors when Choosing a CMS
              </h3>
            </div>
          </div>
        </div>
        <div class="ct-blog col-sm-6 col-md-4">
          <div class="inner">
            <div class="fauxcrop">
              <a href="#"><img alt="News Entry" src="https://www.solodev.com/assets/recent-news/news-entry-4.jpg"></a>
            </div>
            <div class="ct-blog-content">
              <div class="ct-blog-date">
                <span>February</span><strong>23</strong>
              </div>
              <h3 class="ct-blog-header">
                The Best Ways to Leverage Data and Deliver on Your Investment
              </h3>
            </div>
          </div>
        </div>
        <div class="ct-blog col-sm-6 col-md-4">
          <div class="inner">
            <div class="fauxcrop">
              <a href="#"><img alt="News Entry" src="https://www.solodev.com/assets/recent-news/news-entry-5.jpg"></a>
            </div>
            <div class="ct-blog-content">
              <div class="ct-blog-date">
                <span>February</span><strong>20</strong>
              </div>
              <h3 class="ct-blog-header">
                Latest API Integrations Available through CMS 8
              </h3>
            </div>
          </div>
        </div>
        <div class="ct-blog col-sm-6 col-md-4">
          <div class="inner">
            <div class="fauxcrop">
              <a href="#"><img alt="News Entry" src="https://www.solodev.com/assets/recent-news/news-entry-6.jpg"></a>
            </div>
            <div class="ct-blog-content">
              <div class="ct-blog-date">
                <span>February</span><strong>16</strong>
              </div>
              <h3 class="ct-blog-header">
                WebCorpCo's Latest Release (CMS 8) Available Today
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-news btn-contests">
        <a href="#">VIEW ALL NEWS</a>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.recentNews {
  background-color: rgb(20, 117, 175)
}
.recentNews .news-title {
  text-align:center;
  padding-top:30px;
  padding-bottom:30px;
  font-family: 'nimbus-sans-condensed', sans-serif;
  font-size:55px;
  font-weight:bold;
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
