<template>
  <div class="site-main">
    <div class="page-title background-campaign">
      <div class="container">
        <h1>{{ campaignDetails.title }}</h1>
      </div>
    </div>
    <!-- .page-title -->

  </div>
  <!-- .site-main -->
</template>
<style scoped>

</style>
<script>
import gql from 'graphql-tag'

const campaign = gql`
  query campaignDetails($id: ID!) {
    campaignDetails(where: { id: $id }) {
      id
      title
      category
      author
      description
      city
      fundingGoal
      pledgedFunds
      backersNumber
      daysSincePublished
      ideaDescription
      ideaVideoUrl
      teamMembers {
        id
        name
        position
        description
        picture {
          url
        }
      }
      image {
        url
      }
    }
  }
`
export default {
  components: {
  },
  data: () => ({
    campaignDetails: null
  }),
  apollo: {
    campaignDetails: {
      query: campaign,
      variables() {
        return {
          id: this.$route.params.id
        }
      }
    }
  }
}
</script>
