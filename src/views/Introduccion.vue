<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1
        p La liquidación y el registro de los aportes al Sistema de Seguridad Social Integral mediante la Planilla Integrada de Liquidación de Aportes (PILA) constituyen competencias técnicas esenciales para la gestión de la nómina y el cumplimiento de las obligaciones laborales en el contexto colombiano. Un error en el cálculo del Ingreso Base de Cotización (IBC), en la aplicación de los porcentajes de cotización o en el registro de las novedades puede generar consecuencias que van desde diferencias menores hasta investigaciones formales de la Unidad de Gestión Pensional y Parafiscal (UGPP) con sanciones económicas significativas.
        .p-4.bgfI02
          p.mb-0 El IBC es el eje central de todo el proceso de liquidación. Su correcta determinación depende del dominio de los conceptos de salario y remuneración establecidos en el Código Sustantivo del Trabajo, la identificación de los pagos que constituyen salario y los que expresamente no lo constituyen, y la aplicación de las reglas especiales para trabajadores independientes, aprendices y trabajadores con períodos de cotización incompletos. El componente incluye además el análisis de los medios de pago disponibles, los tipos de planilla PILA según el cotizante, los plazos de pago diferenciados, los procedimientos de corrección de errores y el registro contable de los aportes.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/intro/img1.png', alt='')
    .p-4.bgfI01.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-auto.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/intro/img2.svg', alt='')
        .col-lg-10
          p.mb-0 La incorporación de casos prácticos completos de liquidación permite al aprendiz integrar todos los conceptos en situaciones reales que simulan el entorno de trabajo, consolidando así las habilidades para desempeñarse con rigor y responsabilidad en cualquier organización del sector productivo colombiano.
    p Para ampliar la comprensión de los conceptos abordados y contextualizar su aplicación en la liquidación y el registro de aportes al sistema de seguridad social, se recomienda acceder al recurso audiovisual que acompaña esta sección.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({}),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
