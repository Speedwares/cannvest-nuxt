<template>
  <div class="section">
    <div class="row">
      <div class="col-md-8 ml-auto mr-auto text-center mr-5">
        <h2 class="title">El proyecto</h2>
      </div>
    </div>
    <div class="section-story-overview container-fluid">
      <div class="row">
        <div class="col-md-4 ml-auto mr-auto">
          <div
            class="image-container image-left"
            :style="{ 'background-image' : 'url(' + project_photos[0].url + ' )' }"
          >
            <!-- First image on the left side -->
          </div>

          <div
            class="image-container middle-image"
            :style="{ 'background-image' : 'url(' + project_photos[1].url + ' )' }"
          ></div>

          <!-- Second image on the left side of the article -->
          <div
            class="image-container"
            :style="{ 'background-image' : 'url(' + project_photos[2].url + ' )' }"
          ></div>
        </div>
        <div class="col-md-4 ml-auto mr-auto">
          <!-- First image on the right side, above the article -->
          <div
            class="image-container image-right"
            :style="{ 'background-image' : 'url(' + project_photos[3].url + ' )' }"
          ></div>
          <h3>{{ projectTitle }}</h3>
          <p>{{ project_description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
@media screen and (max-width: 768px) {
  .image-left {
    margin-bottom: 0 !important;
  }
  .middle-image {
    margin-left: 0 !important;
    margin-top: 0 !important;
  }
  .image-right {
    margin-top: 20px;
  }
}
</style>


<style scoped>
.middle-image {
  margin-top: 40px !important;
  margin-bottom: 20px !important;
}
</style>

<script>
export default {
  props: ["campaign"],
  data: function() {
    return {
      projectTitle: this.campaign.projectTitle,
      project_description: this.campaign.projectDetailedDescription,
      project_photos: this.campaign.projectPhotos,
      company_description: this.campaign.company.description,
      company_highlights: this.campaign.company.highlights,
      facebook: this.campaign.company.facebook,
      instagram: this.campaign.company.instagram,
      linkedin: this.campaign.company.linkedin,
      twitter: this.campaign.company.twitter,

      website: this.campaign.company.website,
      logo: this.campaign.company.logo.url
    };
  }
};
</script>