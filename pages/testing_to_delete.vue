<template>
  <div class="site-main">
    <div class="page-title background-campaign">
      <div class="container">
        <h1>{{ id }}</h1>
        <h1>TESTING</h1>

      </div>
    </div>
    <!-- .page-title -->
  </div>
  <!-- .site-main -->
</template>
<style scoped>
</style>
<script>
import gql from "graphql-tag";

// const campaign = gql`
//   query campaignDetails($id: ID!) {
//     campaignDetails(where: { id: $id }) {
//       id
//     }
//   }
// `;
export default {
  components: {},
  data() {
    // campaignDetails: null,
    return {
      id: this.$route.params.id
    }
  },
  // apollo: {
  //   campaignDetails: {
  //     query: campaign,
  //     variables() {
  //       return {
  //         id: this.$route.params.id
  //       };
  //     }
  //   }
  // }
};
</script>
