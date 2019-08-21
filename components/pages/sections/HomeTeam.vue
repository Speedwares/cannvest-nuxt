<template>
  <div
    class="team-5 section-image"
    style="background-image: url('img/project9.jpg')"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-8 ml-auto mr-auto text-center">
          <h2 class="title">{{ $t('message.title') }}</h2>
          <h4 class="description">
            This is the paragraph where you can write more details about your
            team. Keep you user engaged by providing meaningful information.
          </h4>
        </div>
      </div>
      <div class="row">
        <div class="col ml-auto mr-auto text-center">
          <tabs pills type="success" centered>
            <tab-pane :label="$t('message.team')">
              <div class="row">
                <div class="col-lg-3 col-md-6">
                  <HomeTeamCards
                    name="David Carvajal"
                    job="CEO"
                    :description="$t('message.ceo_description')"
                    linkedIn="https://www.linkedin.com/in/dacarva/"
                    email="mailto:david.c@cannvest.co"
                    picture="img/home-page/team/david.jpg"
                  />
                </div>
                <div class="col-lg-3 col-md-6">
                  <HomeTeamCards
                    name="Rafael Donado"
                    job="COO"
                    :description="$t('message.coo_description')"
                    linkedIn="https://www.linkedin.com/in/jose-rafael-donado-vallejo-2a90a1b0/"
                    email="mailto:rafael.d@cannvest.co"
                    picture="img/home-page/team/rafael.jpg"
                  />
                </div>
                <div class="col-lg-3 col-md-6">
                  <HomeTeamCards
                    name="Andrés Rojas"
                    job="CTO"
                    :description="$t('message.cto_description')"
                    linkedIn="https://www.linkedin.com/in/acrm/"
                    email="mailto:andres.r@cannvest.co"
                    picture="img/home-page/team/andres.jpeg"
                  />
                </div>
                <div class="col-lg-3 col-md-6">
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
              <div class="row">
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
import { Card, Tabs, TabPane } from '@/components'
import HomeTeamCards from '@/components/pages/components/Cards/HomeTeamCards.vue'
export default {
  name: 'Team',
  components: {
    Card,
    Tabs,
    TabPane,
    HomeTeamCards
  },
  i18n: {
    messages: {
      en: {
        message: {
          title: 'Our Team and Advisors',
          team: 'Team',
          advisors: 'Advisors',
          ceo_description: 'CEO Nuestro Equipo y Asesores',
          coo_description: 'COO Nuestro Equipo y Asesores',
          cto_description: 'CTO Nuestro Equipo y Asesores',
          data_scientist: 'Analytics Consultant',
          data_scientist_description: 'Analytics Consultant',
          industrial_advisor: 'Industrial Advisor',
          industrial_advisor_description: 'Industrial Advisor',
          startup_advisor: 'Startup Advisor',
          startup_advisor_description: 'Startup Advisor',
          blockchain_consultant: 'Blockchain Consultant',
          blockchain_consultant_description: 'Blockchain Consultant'
        }
      },
      es: {
        message: {
          title: 'Nuestro Equipo y Asesores',
          team: 'Equipo',
          advisors: 'Asesores',
          ceo_description: 'CEO Nuestro Equipo y Asesores',
          coo_description: 'COO Nuestro Equipo y Asesores',
          cto_description: 'CTO Nuestro Equipo y Asesores',
          data_scientist: 'Consultora en Analítica de Datos',
          data_scientist_description: 'Analytics Consultant',
          industrial_advisor: 'Asesor Industrial',
          industrial_advisor_description: 'Industrial Advisor',
          startup_advisor: 'Asesor de Startups',
          startup_advisor_description: 'Startup Advisor',
          blockchain_consultant: 'Consultora en Blockchain',
          blockchain_consultant_description: 'Blockchain Consultant'
        }
      }
    }
  }
}
</script>

<style scoped>
.team-5 [class*='col-md-']:nth-child(2) {
  margin-top: 50px;
}
</style>
