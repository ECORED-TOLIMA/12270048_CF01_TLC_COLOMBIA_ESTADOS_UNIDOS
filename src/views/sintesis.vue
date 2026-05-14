<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo aborda los fundamentos del Acuerdo de Promoción Comercial entre Colombia y Estados Unidos, vigente desde 2012, instrumento que representa la principal herramienta de política comercial exterior de Colombia con la economía más grande del mundo. Se estudian los tipos de acuerdos comerciales, el impacto del tratado en sectores productivos colombianos como las flores, el café, el aguacate y las confecciones, el principio de trato nacional y las normas aduaneras colombianas que regulan las operaciones de importación y exportación. Así mismo, se analizan las reglas de origen que determinan si un producto elaborado en Colombia puede acceder a las preferencias arancelarias del acuerdo, el proceso de certificación a cargo del exportador colombiano y los Incoterms 2020, que establecen las responsabilidades y los costos entre las partes de la operación comercial. A continuación, el mapa conceptual presenta, de manera visual, la organización de los contenidos y la relación entre sus ejes temáticos.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El mapa conceptual titulado “Marco normativo y generalidades del TLC” organiza el tema central en tres ejes temáticos: acuerdos comerciales TLC con Estados Unidos, trato nacional y normatividad aduanera, y reglas de origen e Incoterms. Cada eje temático desarrolla sus aspectos clave, desde el concepto, funciones, operatividad y requisitos para ambos países vinculados en este acuerdo binacional.")
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
  data: () => ({
    // variables de vue
  }),
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
