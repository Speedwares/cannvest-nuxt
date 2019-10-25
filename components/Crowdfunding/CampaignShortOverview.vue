<template>
  <card type="profile">
    <img slot="avatar" class="img img-raised" src="https://demos.creative-tim.com/vue-now-ui-kit-pro/img/mike.jpg">
    <div class="card-body">
      <h4 class="card-title">Alec Mike</h4>
      <h6 class="category text-gray">
        Designer
      </h6>
      <p class="card-description">
        One of the co-founders. Alec drives the technical strategy of the platform, customer
        support and brand.
      </p>
      <div class="card-footer">
        <a href="#pablo" class="btn btn-icon btn-twitter btn-round"><i
          class="fab fa-twitter"></i></a>
        <a href="#pablo" class="btn btn-icon btn-facebook btn-round"><i
          class="fab fa-facebook-square"></i></a>
        <a href="#pablo" class="btn btn-icon btn-google btn-round"><i class="fab fa-google"></i></a>
      </div>
    </div>
  </card>
</template>
<script>
  import { Card } from '@/components';

export default {
	components: {
		Card
	}
}
</script>