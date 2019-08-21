<template>
  <card type="profile">
    <img slot="avatar" class="img img-raised" :src="picture" />

    <h3 class="card-title">{{ name }}</h3>
    <h6 class="category text-success">{{ job }}</h6>
    <p class="card-description">{{ description }}</p>
    <div class="card-footer">
      <a
        v-if="linkedIn"
        :href="linkedIn"
        class="btn btn-icon btn-neutral btn-round"
        ><i class="fab fa-linkedin"></i
      ></a>
      <a v-if="email" :href="email" class="btn btn-icon btn-neutral btn-round"
        ><i class="fas fab fa-envelope"></i
      ></a>
    </div>
  </card>
</template>

<script>
import { Card } from '@/components'

export default {
  name: 'TeamCard',
  props: ['name', 'job', 'description', 'linkedIn', 'email', 'picture'],
  components: {
    Card
  }
}
</script>
