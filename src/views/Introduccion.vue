<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/intro/1.png', alt='', style="width: 290px").m-auto
      .col-lg-9
        p El Tratado de Libre Comercio entre Colombia y Estados Unidos representa una oportunidad estratégica para que los productos colombianos accedan a mercados internacionales en condiciones preferenciales. Sin embargo, su aprovechamiento no depende únicamente de la reducción de aranceles, sino del cumplimiento de requisitos normativos, logísticos y comerciales que garantizan el ingreso efectivo de los bienes al mercado estadounidense.

        .row.align-items-center.justify-content-center
          .col-lg-12
            .row.justify-content-center.mt-2
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-center.bg-base.p-3(data-aos="fade-right")
                  .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/intro/2.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                  .col-lg
                    p En este componente formativo se abordan los fundamentos necesarios para comprender el funcionamiento del TLC, incluyendo los acuerdos comerciales, el trato nacional, la normativa aduanera, las reglas de origen y los Incoterms. Estos elementos permiten interpretar el acuerdo no solo desde lo teórico, sino desde su aplicación práctica en procesos de comercio exterior.



    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/intro/3.png', alt='', style="width: 390px").m-auto
      .col-lg-8
        p El desarrollo del contenido se presenta de manera progresiva, iniciando con los conceptos básicos de los acuerdos comerciales, continuando con el análisis del marco normativo y finalizando con herramientas operativas que facilitan la toma de decisiones en operaciones de exportación. De esta forma, se promueve una comprensión integral que fortalece las capacidades del aprendiz para participar en procesos de internacionalización.

        p Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:


    .row.justify-content-center.align-items-center.mt-4           
          .col-lg-12
            figure(data-aos="fade-down")
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
export default {
  name: 'Introduccion',
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
