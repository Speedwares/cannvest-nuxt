<template>
  <div class="wrapper blog-posts">
    <!-- HEADER SECTION -->
    <div class="page-header page-header-small rellax-header">
      <div class="page-header-image" style="background-image: url('img/bushes.jpg') ;"></div>
      <div class="content-center">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Todas las historias de Cannvest</h2>
            <a href="https://facebook.com/cannvest" class="btn btn-info btn-round btn-icon">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com/cannvest" class="btn btn-info btn-round btn-icon">
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/cannvest"
              class="btn btn-info btn-round btn-icon"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/cannvst/" class="btn btn-info btn-round btn-icon">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="projects-4">
      <div class="container-fluid">
        <div v-if="blogPosts.length == 1" class="row">
          <div class="col-md-6 px-0 ml-auto mr-auto text-center single-post">
            <card
              type="background"
              class="card-fashion"
              :style="{ 'background-image' : 'url(' + blogPosts[0].coverImage.url + ' )' }"
            >
              <div class="card-title text-left">
                <h2>
                  <nuxt-link :to="'/blog/' + blogPosts[0].slug ">{{ blogPosts[0].title }}</nuxt-link>
                </h2>
              </div>
              <div class="card-footer text-left">
                <div class="stats">
                  <span>
                    <i class="now-ui-icons users_circle-08"></i>
                    {{ blogPosts[0].author }}
                  </span>
                  <span>
                    <i class="now-ui-icons tech_watch-time"></i>
                    {{ blogPosts[0].createdAt }}
                  </span>
                </div>
                <div v-if="blogPosts[0].keywords.length > 0" class="stats-link pull-right">
                  <a href="#">{{blogPosts[0].keywords[0]}}</a>&sbquo;
                  <a href="#">{{blogPosts[0].keywords[1]}}</a>
                </div>
              </div>
            </card>
          </div>
        </div>

        <div v-if="blogPosts.length > 1" class="row">
          <div class="col-md-6 px-0">
            <card
              type="background"
              class="card-fashion"
              :style="{ 'background-image' : 'url(' + blogPosts[0].coverImage.url + ' )' }"
            >
              <div class="card-title text-left">
                <h2>
                  <nuxt-link :to="'/blog/' + blogPosts[0].slug ">{{ blogPosts[0].title }}</nuxt-link>
                </h2>
              </div>
              <div class="card-footer text-left">
                <div class="stats">
                  <span>
                    <i class="now-ui-icons users_circle-08"></i>
                    {{ blogPosts[0].author }}
                  </span>
                  <span>
                    <i class="now-ui-icons tech_watch-time"></i>
                    {{ blogPosts[0].createdAt.slice(0, 10) }}
                  </span>
                </div>
                <div v-if="blogPosts[0].keywords.length > 0" class="stats-link pull-right">
                  <a href="#">{{blogPosts[0].keywords[0]}}</a>&sbquo;
                  <a href="#">{{blogPosts[0].keywords[1]}}</a>
                </div>
              </div>
            </card>
          </div>
          <div class="col-md-3 px-0">
            <div class="card card-fashion">
              <div class="card-title">
                <h4>
                  <nuxt-link :to="'/blog/' + blogPosts[1].slug ">{{ blogPosts[1].title }}</nuxt-link>
                </h4>
              </div>
              <div class="card-body">
                <div class="card-footer">
                  <div class="stats">
                    <span>
                      <i class="now-ui-icons users_circle-08"></i>
                      {{ blogPosts[1].author }}
                    </span>
                    <span>
                      <i class="now-ui-icons tech_watch-time"></i>
                      {{ blogPosts[1].createdAt.slice(0, 10) }}
                    </span>
                  </div>
                  <div v-if="blogPosts[1].keywords.length > 0" class="stats-link pull-right">
                    <a href="#">{{blogPosts[1].keywords[0]}}</a>&sbquo;
                    <a href="#">{{blogPosts[1].keywords[1]}}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 px-0">
            <card
              type="background"
              class="card-fashion"
              :style="{ 'background-image' : 'url(' + blogPosts[1].coverImage.url + ' )' }"
            ></card>
          </div>
        </div>
        <div v-if="blogPosts.length > 2" class="row">
          <div class="col-md-3 px-0">
            <card
              type="background"
              class="card-fashion"
              :style="{ 'background-image' : 'url(' + blogPosts[2].coverImage.url + ' )' }"
            ></card>
          </div>
          <div class="col-md-3 px-0">
            <div class="card card-fashion">
              <div class="card-title">
                <h4>
                  <nuxt-link :to="'/blog/' + blogPosts[2].slug ">{{ blogPosts[2].title }}</nuxt-link>
                </h4>
              </div>
              <div class="card-body">
                <div class="card-footer">
                  <div class="stats">
                    <span>
                      <i class="now-ui-icons users_circle-08"></i>
                      {{ blogPosts[2].author }}
                    </span>
                    <span>
                      <i class="now-ui-icons tech_watch-time"></i>
                      {{ blogPosts[2].createdAt.slice(0, 10) }}
                    </span>
                  </div>
                  <div v-if="blogPosts[2].keywords.length > 0" class="stats-link pull-right">
                    <a href="#">{{blogPosts[2].keywords[0]}}</a>&sbquo;
                    <a href="#">{{blogPosts[2].keywords[1]}}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 px-0">
            <card
              type="background"
              class="card-fashion"
              :style="{ 'background-image' : 'url(' + blogPosts[3].coverImage.url + ' )' }"
            >
              <div class="card-title text-left">
                <h2>
                  <nuxt-link :to="'/blog/' + blogPosts[3].slug ">{{ blogPosts[3].title }}</nuxt-link>
                </h2>
              </div>
              <div class="card-footer text-left">
                <div class="stats">
                  <span>
                    <i class="now-ui-icons users_circle-08"></i>
                    {{ blogPosts[3].author }}
                  </span>
                  <span>
                    <i class="now-ui-icons tech_watch-time"></i>
                    {{ blogPosts[3].createdAt.slice(0, 10) }}
                  </span>
                </div>
                <div v-if="blogPosts[3].keywords.length > 0" class="stats-link pull-right">
                  <a href="#">{{blogPosts[3].keywords[0]}}</a>&sbquo;
                  <a href="#">{{blogPosts[3].keywords[1]}}</a>
                </div>
              </div>
            </card>
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="container">
        <!-- //Sección de otros posts -->
        <!-- <div class="section">
                    <h3 class="title text-center">You may also be interested in</h3>
                    <br/>
                    <div class="row">
                        <div class="col-md-4">
                            <card type="blog" plain>
                                <img slot="image" class="img rounded img-raised" src="img/bg5.jpg"/>
                                <h6 class="category text-info">Enterprise</h6>
                                <h4 class="card-title">
                                    <a href="#">Autodesk looks to future of 3D printing with Project Escher</a>
                                </h4>
                                <p class="card-description">
                                    Like so many organizations these days, Autodesk is a company in transition. It
                                    was until recently a traditional boxed software company selling licenses.
                                    <a href="#"> Read More </a>
                                </p>
                                <div class="author">
                                    <img v-lazy="'img/olivia.jpg'" alt="..." class="avatar img-raised">
                                    <span>Anna Spark</span>
                                </div>
                            </card>
                        </div>
                        <div class="col-md-4">
                            <card type="blog" plain>
                                <img slot="image" class="img rounded img-raised" src="img/bg27.jpg"/>
                                <h6 class="category text-success">
                                    Startups
                                </h6>
                                <h4 class="card-title">
                                    <a href="#">Lyft launching cross-platform service this week</a>
                                </h4>
                                <p class="card-description">
                                    Like so many organizations these days, Autodesk is a company in transition. It was
                                    until recently a traditional boxed software company selling licenses.
                                    <a href="#"> Read More </a>
                                </p>
                                <div class="author">
                                    <img v-lazy="'img/michael.jpg'" alt="..." class="avatar img-raised">
                                    <span>John Black</span>
                                </div>
                            </card>
                        </div>
                        <div class="col-md-4">
                            <div class="card card-plain card-blog">
                                <div class="card-image">
                                    <a href="#">
                                        <img class="img rounded img-raised" src="img/bg21.jpg"/>
                                    </a>
                                </div>
                                <div class="card-body">
                                    <h6 class="category text-danger">
                                        <i class="now-ui-icons media-2_sound-wave"></i> Enterprise
                                    </h6>
                                    <h4 class="card-title">
                                        <a href="#">6 insights into the French Fashion landscape</a>
                                    </h4>
                                    <p class="card-description">
                                        Like so many organizations these days, Autodesk is a company in transition. It
                                        was until recently a traditional boxed software company selling licenses.
                                        <a href="#"> Read More </a>
                                    <div class="author">
                                        <img v-lazy="'img/james.jpg'" alt="..." class="avatar img-raised">
                                        <span>James Newman</span>
                                    </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>-->
      </div>
      <!-- <div class="subscribe-line subscribe-line-white">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <h4 class="title">Get Tips &amp; Tricks every Week!</h4>
                            <p class="description">
                                Join our newsletter and get news in your inbox every week! We hate spam too, so no
                                worries about this.
                            </p>
                        </div>
                        <div class="col-md-6">
                            <card plain class="card-form-horizontal">
                                <div class="row">
                                    <div class="col-sm-8">
                                        <fg-input addon-left-icon="now-ui-icons ui-1_email-85"
                                                  placeholder="Email Name...">
                                        </fg-input>
                                    </div>
                                    <div class="col-sm-4">
                                        <n-button type="success" round block>Subscribe
                                        </n-button>
                                    </div>
                                </div>
                            </card>
                        </div>
                    </div>
                </div>
      </div>-->
    </div>
    <!-- <footer class="footer " data-background-color="black">
            <div class="container">
                <div class="content">
                    <div class="row">
                        <div class="col-md-2">
                            <h5>About Us</h5>
                            <ul class="links-vertical">
                                <li>
                                    <a href="#" class="text-muted">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-muted">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-muted">
                                        Presentation
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-muted">
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-2">
                            <h5>Market</h5>
                            <ul class="links-vertical">
                                <li>
                                    <a href="#" class="text-muted">
                                        Sales FAQ
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-muted">
                                        How to Register
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-muted">
                                        Sell Goods
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-muted">
                                        Receive Payment
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-muted">
                                        Transactions Issues
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-muted">
                                        Affiliates Program
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <h5>Social Feed</h5>
                            <div class="social-feed">
                                <div class="feed-line">
                                    <i class="fab fa-twitter"></i>
                                    <p>How to handle ethical disagreements with your clients.</p>
                                </div>
                                <div class="feed-line">
                                    <i class="fab fa-twitter"></i>
                                    <p>The tangible benefits of designing at 1x pixel density.</p>
                                </div>
                                <div class="feed-line">
                                    <i class="fab fa-facebook-square"></i>
                                    <p>A collection of 25 stunning sites that you can use for inspiration.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <h5>Follow Us</h5>
                            <ul class="social-buttons">
                                <li>
                                    <a href="#" class="btn btn-icon btn-neutral btn-twitter btn-round">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                    &nbsp;
                                </li>
                                <li>
                                    <a href="#" class="btn btn-icon btn-neutral btn-facebook btn-round">
                                        <i class="fab fa-facebook-square"></i>
                                    </a>
                                    &nbsp;
                                </li>
                                <li>
                                    <a href="#" class="btn btn-icon btn-neutral btn-dribbble btn-round">
                                        <i class="fab fa-dribbble"></i>
                                    </a>
                                    &nbsp;
                                </li>
                                <li>
                                    <a href="#" class="btn btn-icon btn-neutral btn-google btn-round">
                                        <i class="fab fa-google-plus"></i>
                                    </a>
                                    &nbsp;
                                </li>
                                <li>
                                    <a href="#" class="btn btn-icon btn-neutral btn-instagram btn-round">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                    &nbsp;
                                </li>
                            </ul>
                            <h5>
                                <small>Numbers Don't Lie</small>
                            </h5>
                            <h5>14.521
                                <small class="text-muted">Freelancers</small>
                            </h5>
                            <h5>1.423.183
                                <small class="text-muted">Transactions</small>
                            </h5>
                        </div>
                    </div>
                </div>
                <hr/>
                <div class="copyright">
                    Copyright &copy;
                    {{year}} Creative Tim All Rights Reserved.
                </div>
            </div>
    </footer>-->
  </div>
</template>

<style scoped>
.single-post {
  margin-top: 2em;
}
</style>

<script>
import gql from "graphql-tag";

import { Card, Button, FormGroupInput } from "@/components";
import initParallax from "@/utils/initParallax";

const posts = gql`
  query {
    blogPosts {
      id
      slug
      title
      subtitle
      author
      coverImage {
        id
        url
      }
      content {
        markdown
      }
      createdAt
      keywords
    }
  }
`;

export default {
  name: "blog-posts",
  layout: "white-nav",
  components: {
    Card,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data: () => ({
    blogPosts: null
  }),
  apollo: {
    blogPosts: {
      query: posts
    }
  },
  computed: {
    hours: function() {
      const dt = Date.parse(this.blogPosts[0].createdAt);
      return this.blogPosts[0].createdAt.slice(0, 10);
    }
  },
  mounted() {
    initParallax();
  }
};
</script>

