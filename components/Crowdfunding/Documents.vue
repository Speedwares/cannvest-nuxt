<template>
  <div class="section related-products" data-background-color="black">
    <div class="container">
      <h3 class="title text-center">Documentos de interés</h3>
      <div class="row">
        <div class="col-sm-6 col-md-3" v-for="document in documents" :key="document.id">
          <card type="product">
            <div class="text-center">
              <img slot="image" class="img rounded pdf-icon" src="img/icons/pdf.png" />
            </div>
            <h4 class="card-title">
              <a href="#pablo" class="card-link">{{document.title}}</a>
            </h4>
            <div class="card-description">{{document.description}}</div>
          </card>
        </div>
      </div>
      <div class="row">
        <div class="col text-center">
          <n-button type="default" size="lg" class="invest-button">Invest</n-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pdf-icon {
  max-width: 60px;
}
.card-description {
  font-weight: 500;
}
.invest-button {
  background-color: #00809d;
}
.invest-button:hover {
  background-color: #005f9b;
}
</style>

<script>
import { Button, Card } from "@/components";

export default {
  components: {
    Card,
    [Button.name]: Button
  },
  data: function() {
    return {
      documents: [
        {
          title: "Documento 1",
          description: "Este es un documento importante"
        },
        {
          title: "Documento 2",
          description: "Este es un documento importante"
        },
        {
          title: "Documento 3",
          description: "Este es un documento importante"
        },
        { title: "Documento 4", description: "Este es un documento importante" }
      ]
    };
  }
};
</script>