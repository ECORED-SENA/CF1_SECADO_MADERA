<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span i
      h1 Introducción
    p Este material de formación permitirá conocer procedimientos y técnicas apropiadas industriales para el secado y apilado correcto de madera aserrada; se debe visualizar el siguiente video para ampliar esta introducción y conocer un poco lo que se tratará.
 
    figure
      .video
        iframe(width='560' height='315' src='https://www.youtube.com/embed/2L91WMqw96A' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
