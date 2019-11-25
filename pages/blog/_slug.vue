<template>
  <div>
    <h1>{{ blogPosts[0].title }}</h1>
    <img :src="blogPosts[0].coverImage.url" alt />
    <vue-markdown>{{ blogPosts[0].content.markdown }}</vue-markdown>
    <h2>{{ blogPosts }}</h2>
  </div>
</template>

<script>
import gql from "graphql-tag";
import VueMarkdown from "vue-markdown";

const posts = gql`
  query {
    blogPosts {
      id
      title
      slug
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
  layout: "white-nav",

  components: { VueMarkdown },

  data: () => ({
    blogPosts: null
  }),

  apollo: {
    blogPosts: {
      query: posts
    }
  }
};
</script>