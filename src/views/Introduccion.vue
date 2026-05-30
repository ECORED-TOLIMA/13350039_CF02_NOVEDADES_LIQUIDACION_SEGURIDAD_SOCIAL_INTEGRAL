<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-4
      | La liquidación y el registro de los aportes al Sistema de Seguridad Social Integral mediante la Planilla Integrada de Liquidación de Aportes (PILA) constituyen competencias técnicas esenciales para la gestión de la nómina y el cumplimiento de las obligaciones laborales en el contexto colombiano. Un error en el cálculo del Ingreso Base de Cotización (IBC), en la aplicación de los porcentajes de cotización o en el registro de las novedades puede generar consecuencias que van desde diferencias menores hasta investigaciones formales de la Unidad de Gestión Pensional y Parafiscal (UGPP) con sanciones económicas significativas.
    p.mb-4
      | El IBC es el eje central de todo el proceso de liquidación. Su correcta determinación depende del dominio de los conceptos de salario y remuneración establecidos en el Código Sustantivo del Trabajo, la identificación de los pagos que constituyen salario y los que expresamente no lo constituyen, y la aplicación de las reglas especiales para trabajadores independientes, aprendices y trabajadores con períodos de cotización incompletos. El componente incluye además el análisis de los medios de pago disponibles, los tipos de planilla PILA según el cotizante, los plazos de pago diferenciados, los procedimientos de corrección de errores y el registro contable de los aportes.
    p.mb-4
      | La incorporación de casos prácticos completos de liquidación permite al aprendiz integrar todos los conceptos en situaciones reales que simulan el entorno de trabajo, consolidando así las habilidades para desempeñarse con rigor y responsabilidad en cualquier organización del sector productivo colombiano.
    p.mb-4
      | Para ampliar la comprensión de los conceptos abordados y contextualizar su aplicación en la liquidación y el registro de aportes al sistema de seguridad social, se recomienda acceder al recurso audiovisual que acompaña esta sección.

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
