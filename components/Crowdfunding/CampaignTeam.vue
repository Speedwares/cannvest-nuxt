<template>
  <div class="cd-section team-5 section-image" style="background-image: url('img/project9.jpg')">
    <div class="container">
      <div class="row">
        <div class="col-md-8 ml-auto mr-auto text-center">
          <h2 class="title">El equipo</h2>
          <!-- <h4 class="description">
            This is the paragraph where you can write more details about your team.
            Keep you user engaged by providing meaningful information.
          </h4>-->
        </div>
      </div>

      <div class="row">
        <div class="col-md-4" v-for="member in team" :key="member.id">
          <card type="profile">
            <img slot="avatar" class="img img-raised" :src="member.picture.url" />

            <h3 class="card-title">{{member.name}}</h3>
            <h6 class="category text-info member-position">{{member.position}}</h6>
            <p class="card-description">{{member.description}}</p>
            <div class="card-footer">
              <a href="#pablo" class="btn btn-icon btn-neutral btn-round">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#pablo" class="btn btn-icon btn-neutral btn-round">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#pablo" class="btn btn-icon btn-neutral btn-round">
                <i class="fas fab fa-envelope"></i>
              </a>
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.member-position {
  color: #00809d !important;
}

.card-description {
  font-weight: 500;
}
.fab {
  color: #00809d;
}

@media screen and (max-width: 768px) {
  .image-left {
    display: none !important;
  }

  .image-container.middle-image {
    margin-left: 0 !important;
  }
}
</style>
<script>
import { Card } from "@/components";

export default {
  components: {
    Card
  },
  props: ["campaign"],
  data: function() {
    return {
      team: this.campaign.teamMembers
    };
  }
};
</script>