<template>
  <div class="features-1" id="solutions">
    <div class="container">
      <div class="row">
        <div class="col-md-8 ml-auto mr-auto">
          <h2 class="title">{{ $t('message.solution') }}</h2>
          <h4 class="description">{{ $t('message.description') }}</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-sm-6">
          <div class="info info-hover">
            <div class="icon icon-info">
              <img
                src="img/icons/crowdfunding.svg"
                alt="Crowdfunding"
                class="img-solution"
              />
            </div>
            <h4 class="info-title">{{ $t('message.crowdfunding') }}</h4>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="info info-hover">
            <div class="icon icon-info">
              <img
                src="img/icons/investment.svg"
                alt="Investment"
                class="img-solution"
              />
            </div>
            <h4 class="info-title">{{ $t('message.investment') }}</h4>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="info info-hover">
            <div class="icon icon-info">
              <img
                src="img/icons/agro-tech.svg"
                alt="Agrotech"
                class="img-solution"
              />
            </div>
            <h4 class="info-title">{{ $t('message.agro_tech') }}</h4>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="info info-hover">
            <div class="icon icon-info">
              <img
                src="img/icons/cannabis-growth.svg"
                alt="Cannabis Growth"
                class="img-solution"
              />
            </div>
            <h4 class="info-title">{{ $t('message.cannabis_growth') }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Solutions',
  i18n: {
    messages: {
      en: {
        message: {
          solution: 'Our Solution',
          description:
            'Investing in cannabis has never been so easy. Our permissioned blockchain technology keeps track of every transaction on the field, providing real time information on the crop development',
          crowdfunding: 'Crowdfunding Platform',
          investment:
            'Connecting investors with infrastructure for agriculture projects',
          agro_tech: 'Backed by crop traceability technology on the blockchain',
          cannabis_growth: 'Increasing the crop productivity and its valuation'
        }
      },
      es: {
        message: {
          solution: 'Nuestra Solución',
          description:
            'Invertir en la industria del cannabis nunca ha sido tan sencillo. Nuestra tecnología de trazabilidad, construida sobre un blockchain privado, mantiene registro de cada actividad en el cultivo, brindando información en tiempo real acerca del estado de desarrollo del proyecto',
          crowdfunding: 'Platforma de crowdfunding',
          investment:
            'Conectando inversionistas con proyectos de infraestructura en agricultura',
          agro_tech:
            'Soportada por tecnología de trazabilidad de cultivos en blockchain',
          cannabis_growth:
            'Incrementando la productividad del cultivo y su valoración'
        }
      }
    }
  }
}
</script>

<style scoped>
.img-solution {
  max-width: 160px;
}
.info-hover:hover {
  color: red;
}
</style>
