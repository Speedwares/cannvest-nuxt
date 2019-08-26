<template>
  <div
    class="team-5 section-image"
    style="background-image: url('img/home-page/team-background.jpg')"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-8 ml-auto mr-auto text-center">
          <h2 class="title">{{ $t('message.title') }}</h2>
          <!-- <h4 class="description">{{ $t('message.description') }}</h4> -->
        </div>
      </div>
      <div class="row">
        <div class="col ml-auto mr-auto text-center pills-custom">
          <tabs centered tabNavClasses="pills-content">
            <tab-pane :label="$t('message.team')">
              <div class="row team">
                <div class="col-lg-6 col-md-6">
                  <HomeTeamCards
                    name="David Carvajal"
                    job="CEO"
                    :description="$t('message.ceo_description')"
                    linkedIn="https://www.linkedin.com/in/dacarva/"
                    email="mailto:david.c@cannvest.co"
                    picture="img/home-page/team/david.jpg"
                  />
                </div>
                <div class="col-lg-6 col-md-6">
                  <HomeTeamCards
                    name="Rafael Donado"
                    job="COO"
                    :description="$t('message.coo_description')"
                    linkedIn="https://www.linkedin.com/in/jose-rafael-donado-vallejo-2a90a1b0/"
                    email="mailto:rafael.d@cannvest.co"
                    picture="img/home-page/team/rafael.jpg"
                  />
                </div>
                <div class="col-lg-6 col-md-6">
                  <HomeTeamCards
                    name="Andrés Rojas"
                    job="CTO"
                    :description="$t('message.cto_description')"
                    linkedIn="https://www.linkedin.com/in/acrm/"
                    email="mailto:andres.r@cannvest.co"
                    picture="img/home-page/team/andres.jpeg"
                  />
                </div>
                <div class="col-lg-6 col-md-6">
                  <HomeTeamCards
                    name="Katherine Briceño"
                    :job="$t('message.data_scientist')"
                    :description="$t('message.data_scientist_description')"
                    linkedIn="https://www.linkedin.com/in/katherine-briceno/"
                    email="mailto:bg.katherine@gmail.com"
                    picture="img/home-page/team/katherine.jpeg"
                  />
                </div>
              </div>
            </tab-pane>
            <tab-pane :label="$t('message.advisors')">
              <div class="row advisors">
                <div class="col-md-4">
                  <HomeTeamCards
                    name="Benjamin Riggan"
                    :job="$t('message.industrial_advisor')"
                    :description="$t('message.industrial_advisor_description')"
                    email="mailto:ben@phytropica.com"
                    picture="img/home-page/team/ben.jpg"
                  />
                </div>
                <div class="col-md-4">
                  <HomeTeamCards
                    name="Francisco Córdoba"
                    :job="$t('message.startup_advisor')"
                    :description="$t('message.startup_advisor_description')"
                    linkedIn="https://www.linkedin.com/in/franciscojosecordoba/"
                    email="mailto:f@pachoman.com"
                    picture="img/home-page/team/pacho.jpg"
                  />
                </div>
                <div class="col-md-4">
                  <HomeTeamCards
                    name="Carolina Velásquez"
                    :job="$t('message.blockchain_consultant')"
                    :description="
                      $t('message.blockchain_consultant_description')
                    "
                    linkedIn="https://www.linkedin.com/in/nathalia-carolina-vel%C3%A1squez/"
                    picture="img/home-page/team/caro.jpg"
                  />
                </div>
              </div>
            </tab-pane>
          </tabs>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Tabs, TabPane } from "@/components";
import HomeTeamCards from "@/components/pages/components/Cards/HomeTeamCards.vue";
export default {
  name: "Team",
  components: {
    Tabs,
    TabPane,
    HomeTeamCards
  },
  i18n: {
    messages: {
      en: {
        message: {
          title: "Our Team and Advisors",
          description: "This is the description",
          team: "Team",
          advisors: "Advisors",
          ceo_description:
            "MSc. Mechanical, Electronics Engineer & Consultant. Experienced in Technology Development for the Oil & Gas and Software Industries",
          coo_description:
            "MSc. Industrial Engineer with over 8 years of exprience as Impact Investor for agriculture, pharmaceutical and education projects",
          cto_description:
            "MSc. Systems Engineer with experience in development, implementation and deployment of blockchain based platforms",
          data_scientist: "Analytics Consultant",
          data_scientist_description:
            "MSc. Industrial Engineer & Data Scientist with experience in predictive models design for the financial industry",
          industrial_advisor: "Industrial Advisor",
          industrial_advisor_description:
            "Co-founder of Phytropica. Master Grower with over 30 years of experience in the cannabis industry",
          startup_advisor: "Startup Advisor",
          startup_advisor_description:
            "Co-founder of WeSend. MIT 35 under 35 Innovators",
          blockchain_consultant: "Blockchain Consultant",
          blockchain_consultant_description:
            "Co-founder of Blockchain Academy. Senior Hyperledger & Corda Developer"
        }
      },
      es: {
        message: {
          title: "Nuestro Equipo y Asesores",
          description: "Esta es la descripción",
          team: "Equipo",
          advisors: "Asesores",
          ceo_description:
            "MSc. Ingeniero Mecánico, Electrónico y Consultor. Con experiencia en Desarrollo de Tecnología en la Industria Energética y Software",
          coo_description:
            "MSc. Ingeniero Industrial con más de 8 años de experiencia como Inversionista de Impacto en proyectos de agricultura, de educación y de salud",
          cto_description:
            "MSc. Ingeniero de Sistemas con experiencia en desarrollo, implementación y despliegue de plataformas en blockchain",
          data_scientist: "Consultora en Analítica de Datos",
          data_scientist_description:
            "MSc. Ingeniera Industrial y Científica de Datos con experiencia en diseño de modelos predictivos para la industria financiera",
          industrial_advisor: "Asesor Industrial",
          industrial_advisor_description:
            "Co-fundador de Phytropica. Master Grower con más de 30 años de experiencia en la industria del cannabis",
          startup_advisor: "Asesor de Startups",
          startup_advisor_description:
            "Co-fundador de WeSend. Innovador MIT: 35 menores de 35",
          blockchain_consultant: "Consultora en Blockchain",
          blockchain_consultant_description:
            "Co-fundadora de Blockchain Academy. Desarrolladora Senior en Corda y Hyperledger"
        }
      }
    }
  }
};
</script>

<style scoped>
.team-5 [class*="col-md-"]:nth-child(2) {
  margin-top: 50px;
}

.section-image::after {
  background-color: rgba(0, 0, 0, 0);
}

.pills-custom {
  font-weight: 700 !important;
}

.team .card-profile {
  /* min-height: 400px; */
}

@media screen and (min-width: 768px) {
  .team .card-profile {
    min-height: 400px;
  }
  .advisors .card-profile {
    min-height: 480px;
  }
  .advisors .card-description {
  }
}
@media screen and (min-width: 1024px) {
  .team .card-profile {
    min-height: 370px;
  }
  .team .card-description {
    min-height: 100px !important;
  }
  .advisors .card-profile {
    min-height: 380px;
  }
}
</style>
