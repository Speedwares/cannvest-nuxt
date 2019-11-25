<template>
  <div class="wrapper blog-post">
    <div class="page-header page-header-small rellax-header">
      <div
        class="page-header-image"
        :style="{ 'background-image' : 'url(' +  blogPost.coverImage.url  + ' )' }"
      ></div>
      <div class="content-center">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">{{ blogPost.title }}</h2>
            <h4>{{ blogPost.subtitle }}</h4>
          </div>
        </div>
      </div>
    </div>
    <!-- Sección de social media para compartir -->
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="button-container">
              <a href="https://twitter.com" class="btn btn-icon btn-lg btn-twitter btn-round">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://twitter.com" class="btn btn-icon btn-lg btn-facebook btn-round">
                <i class="fab fa-facebook-square"></i>
              </a>
              <a href="https://twitter.com" class="btn btn-icon btn-lg btn-linkedin btn-round">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- Sección de contenido -->

      <div class="section">
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto">
              <h1>{{ blogPost }}</h1>

              <vue-markdown>{{ blogPost.content.markdown }}</vue-markdown>

              <!-- <h3 class="title">The Castle Looks Different at Night...</h3>
              <p>
                This is the paragraph where you can write more details about your product. Keep you user
                engaged by providing meaningful information. Remember that by this time, the user is
                curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to
                see more. We are here to make life better.
                <br />
                <br />And now I look and look around and there’s so many Kanyes I've been trying to
                figure out the bed design for the master bedroom at our Hidden Hills compound... and
                thank you for turning my personal jean jacket into a couture piece.
              </p>-->
              <!-- <p class="blockquote blockquote-primary">
                                “And thank you for turning my personal jean jacket into a couture piece.”
                                <br>
                                <br>
                                <small>
                                    Kanye West, Producer.
                                </small>
              </p>-->
            </div>
          </div>
        </div>
      </div>

      <!-- Sección de otras historias. A dinamizar una vez tengamos más posts -->
      <!-- <div class="section">
        <div class="container">
          <div class="col-md-12">
            <h2 class="title text-center">Similar Stories</h2>
            <br />
            <div class="blogs-1" id="blogs-1">
              <div class="row">
                <div class="col-md-10 ml-auto mr-auto">
                  <card type="blog" plain>
                    <template slot="raw-content">
                      <div class="row">
                        <div class="col-md-5">
                          <div class="card-image">
                            <img
                              class="img img-raised rounded"
                              src="img/examples/card-blog4.jpg"
                              alt
                            />
                          </div>
                        </div>
                        <div class="col-md-7">
                          <h6 class="category text-info">Enterprise</h6>
                          <h3 class="card-title">
                            <a href="#pablo">
                              Warner Music Group buys concert discovery
                              service Songkick
                            </a>
                          </h3>
                          <p class="card-description">
                            Warner Music Group announced today it’s acquiring the selected
                            assets of the music platform Songkick, including its app for
                            finding concerts and the company’s trademark.
                          </p>
                          <p class="author">
                            by
                            <a href="#pablo">
                              <b>Sarah Perez</b>
                            </a>, 2 days ago
                          </p>
                        </div>
                      </div>
                    </template>
                  </card>
                  <card type="blog" plain>
                    <div class="row">
                      <div class="col-md-7">
                        <h6 class="category text-danger">
                          <i class="now-ui-icons now-ui-icons media-2_sound-wave"></i> Startup
                        </h6>
                        <h3 class="card-title">
                          <a href="#pablo">Insticator raises $5.2M to help publishers</a>
                        </h3>
                        <p class="card-description">
                          Insticator is announcing that it has raised $5.2 million in Series A
                          funding. The startup allows online publishers to add quizzes, polls
                          and other interactive elements...
                        </p>
                        <p class="author">
                          by
                          <a href="#pablo">
                            <b>Anthony Ha</b>
                          </a>, 5 days ago
                        </p>
                      </div>
                      <div class="col-md-5">
                        <div class="card-image">
                          <img class="img img-raised rounded" src="img/examples/card-blog6.jpg" />
                        </div>
                      </div>
                    </div>
                  </card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>-->
    </div>
  </div>
</template>
<script>
import gql from "graphql-tag";
import VueMarkdown from "vue-markdown";
import {
  Card
  // Button,
  // Comment,
  // Badge,
  // InfoSection,
  // Checkbox
} from "@/components";
import initParallax from "@/utils/initParallax";

const post = gql`
  query {
    blogPost(where: { slug: "primer-post" }) {
      id
      slug
      title
      subtitle
      coverImage {
        id
        url
      }
      content {
        markdown
      }
      date
    }
  }
`;

export default {
  name: "blog-post",
  layout: "white-nav",

  components: {
    Card,
    VueMarkdown
    // InfoSection,
    // Badge,
    // Comment,
    // [Button.name]: Button,
    // [Checkbox.name]: Checkbox
  },
  data() {
    return {
      blogPost: null
    };
  },
  apollo: {
    blogPost: {
      query: post
    }
  },
  mounted() {
    initParallax();
  }
};
</script>
<style>
</style>
