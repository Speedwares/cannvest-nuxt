<template>
  <div class="info-horizontal row">
    <div class="col-3 icon-container">
      <div class="icon-circle text-center">
        <img :src="image" class="img-fluid" />
      </div>
    </div>
    <div class="col-9 description">
      <h5 class="info-title">{{ title }}</h5>
      <p class="description feature-card">{{ description }}</p>
      <h5 class="info-title">{{ text_wide }}</h5>
      <p class="description feature-card">{{ text_small }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeatureCards",
  props: ["image", "title", "description", "text_wide", "text_small"]
};
</script>

<style scoped>
.icon-circle {
  background-color: white;
  border-radius: 50%;
  padding: 1em;
  max-width: 130px;
}
.icon-container {
  padding-right: 0;
}

h2,
h5,
p {
  color: #2c2c2c !important;
}

@media screen and (min-width: 768px) {
}
</style>