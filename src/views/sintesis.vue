<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4
      | La liquidación y el registro de los aportes al Sistema de Seguridad Social Integral mediante la Planilla Integrada de Liquidación de Aportes (PILA) constituyen competencias técnicas esenciales para la gestión de la nómina y el cumplimiento de las obligaciones laborales en el contexto colombiano. A lo largo de los contenidos se analizan el Ingreso Base de Cotización (IBC), los regímenes de afiliación y los porcentajes de cotización a salud, pensión y riesgos laborales, los aportes parafiscales, los tipos de planilla PILA, los plazos de pago, los mecanismos de corrección y el registro contable de los aportes, como elementos interrelacionados que determinan la precisión de cada liquidación y la protección de los derechos del trabajador. La comprensión y la aplicación de estos elementos permiten desarrollar habilidades para calcular el IBC, seleccionar el tipo de planilla correcto, gestionar las novedades de nómina y garantizar el cumplimiento normativo frente a las entidades del sistema. El mapa conceptual presenta, de manera visual, la organización de los contenidos y la relación entre sus ejes temáticos.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual del componente Liquidación y registro en la Planilla Integrada de Seguridad Social (PILA), con sus ejes temáticos: IBC, regímenes de afiliación, PILA, novedades, corrección, plazos de pago y registro contable.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
