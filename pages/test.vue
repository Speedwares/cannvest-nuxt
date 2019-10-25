<template>
  <div>
    <h1>{{ campaignDetails }}</h1>
    <button @click="showData">Console</button>
    <!-- <ul v-for="campaign in campaignDetailses" :key="campaign.id">
      <li>{{ campaign.id }}</li>
    </ul> -->
  </div>
</template>

<script>
import gql from 'graphql-tag'

const campaign = gql`
  query {
    campaignDetails(where: { id: "ck227vicv0eau0a30gmwkem40" }) {
      id
      title
      description
      image {
        url
      }
    }
  }
`
export default {
  data: () => ({
    campaignDetails: null,
    title: null
  }),
  methods: {
    showData() {
      console.log(this.campaignDetails.title)
    }
  },
  apollo: {
    campaignDetails: {
      query: campaign
    }
  }
}
</script>
