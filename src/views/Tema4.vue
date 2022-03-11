<template lang="pug">
.curso-main-container.pb-3.animated.fadeIn
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Metrología

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La metrología hace referencia a la medición, unidades de medida y herramientas o equipos utilizados en la cubicación de la madera aserrada.
        br
        br
        p.fuente-color-acento-contenido.fw-bold En este proceso se obtiene el volumen de las piezas mediante la medición de: ancho, largo y espesor con ayuda de la cinta métrica o flexómetros.

    br
    #t_4_1.titulo-segundo.color-acento-contenido.mt-4
      h2 4.1 Sistema métrico (área, longitud y volumen) 

    p El sistema métrico es un sistema de medida ampliamente utilizado cuya unidad básica es el metro como medida universal de longitud. Se pueden ver las medidas que se emplean para cubicar madera entre ellas se encuentran de longitud (lineales) de superficie (área) y de volumen:    

    .row.my-5.align-items-center
      .col.col-12.col-lg-4
        picture
          img(src='@/assets/curso/tema4/img02.png', alt='El sistema métrico', class='img-fluid')
      .col.col-12.col-lg-8
        ul.lista-ul--color
          li
            i.fas.fa-check
            p
              span.fuente-color-acento-contenido.fw-bold Medidas lineales: 
              | cuando se utilizan en una sola dimensión o en superficies planas, son llamadas medidas lineales, las mismas se expresan en milímetros, centímetros, metros, kilómetros, etc.
  
          li
            i.fas.fa-check
            p
              span.fuente-color-acento-contenido.fw-bold Medidas de área: 
              | cuando se utilizan dos dimensiones para medir se está hallando el área de un objeto y se está haciendo uso de las que se llaman medidas de área. Esta medida se obtiene multiplicando los dos lados y se expresa en metros cuadrados.

          li
            i.fas.fa-check
            p
              span.fuente-color-acento-contenido.fw-bold Medidas de volumen: 
              | si se combinan las tres dimensiones, el largo, ancho y espesor de un objeto, se tiene una medida llamada volumen. Esta medida será la más utilizada para el cálculo de madera como tablas, cuartones, árbol en pie y árbol tumbado (Mamani, 2017).

    .bg-tablas-conversion
      .row.justify-content-center
        #t_4_2.titulo-segundo.color-acento-contenido.mt-4
          h2 4.2 Tablas de conversión

        .col-12
          p Las tablas de conversión son especialmente útiles para realizar la transformación de unidades entre un mismo sistema de medida o entre diferentes sistemas. Para realizar las mediciones sobre la pieza de madera se pueden utilizar dos sistemas de medidas, el sistema métrico y el sistema inglés.

        .col-10.col-lg-4.mb-4.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/tema4/metro-marron.svg' alt='AvatarTop')
            .tarjeta.bg-color-tarjeta-medidas.p-4
                h4.text-center Sistema métrico
                p.text-center.pb-4 En el sistema métrico se utiliza el metro como unidad en donde un metro equivale a cien centímetros.
        .col-10.col-lg-4.mb-4.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/tema4/metro-naranja.svg' alt='AvatarTop')
            .tarjeta.bg-color-tarjeta-medidas.p-4
                h4.text-center Sistema inglés
                p.text-center.pb-4 En el sistema inglés se utiliza el pie el cual equivale a 30 centímetros y la pulgada que equivale a 2.5 centímetros.

        .col-12.mt-4
          p Para calcular el volumen de una pieza se puede utilizar cualquiera de los dos sistemas en el sistema métrico, el volumen resultante sería en metros cúbicos y en el sistema inglés en pies tablares.

    .row.mt-4
      .col-12
        #t_4_3.titulo-segundo.color-acento-contenido.mt-4
          h2 4.3 Técnicas e instrumentos de medida 

        p Para la medición de la madera se pueden utilizar flexómetros o cintas métricas las cuales nos darán las dimensiones de la pieza medida en milímetros, centímetros, metros, pulgadas o pies.
        br
        .row.justify-content-center.mt-4
          .col-10
            .bloque-texto-f.bg-caja-instrumentos.pt-4.px-5.mb-5
              .bloque-texto-f__comillas
                i.fas.fa-quote-left
                i.fas.fa-quote-right
              h5.text-regular.bloque-texto-f__texto.text-center.lh-lg Si se desea conocer el volumen de madera aserrada como: vigas, listones, cuartones y otras maderas dimensionadas, se debe tomar las mediciones del ancho, el espesor y el largo en las unidades que desee trabajar y luego proceder a multiplicarlas entre sí para obtener su volumen. V= Largo X Ancho X Espesor.
              .bloque-texto-f__autor.mb-3
                h3.mb-0 
              .bloque-texto-f__avatar
                .img-caja-instrumentos
                  img.img90(src='@/assets/curso/tema4/img03.svg', alt='Texto que describa la imagen')
        
        p Entre los tipos de medidas que más comúnmente se encuentran en las piezas de madera están:

        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Madera procesada")
            .col-md-3
              figure
                img(src='@/assets/curso/tema4/a01.jpg', alt='Madera procesada')
            .col-md-9.mb-4.mb-md-0
              p Esta madera es la que ha sufrido algún tipo de transformación y podemos encontrarla en el mercado como: bloque, madera en tablas o regla según su almacenamiento. Igualmente, para la cubicación de maderas procesada es común hablar de pie tablar, pulgada comercial o pulgada vara, pero si queremos unificar criterios es en metro cúbico que debemos expresar el volumen (Posicionamiento de la gobernanza forestal en Colombia).

          .row(titulo="Pulgada comercial")
            .col-md-3
              figure
                img(src='@/assets/curso/tema4/a02.jpg', alt='Pulgada comercial')
            .col-md-9.mb-4.mb-md-0
              p Es una forma común de encontrar la madera en bloque en el mercado y equivaldría a una pieza con las siguientes dimensiones:  1 pulgada de ancho por una pulgada de espesor por 3 metros de largo.
              p Fórmula:
                br 
                | Volumen (“PC”): Ancho en Pulgadas x Alto en Pulgada s x (Largo en mt / 3 mt) para pasar este volumen de “Pulgadas Comerciales” a metros cúbicos, se multiplicaría por 0,001935 m
                sup 3
                |.

          .row(titulo="Pie tablar")
            .col-md-3
              figure
                img(src='@/assets/curso/tema4/a03.jpg', alt='Pie tablar')
            .col-md-9.mb-4.mb-md-0
              p Unidad comúnmente encontrada y equivale a la madera aserrada con dimensiones 1 pulgada de ancho por un pie de alto por un pie de largo.
              p Fórmula:
                br 
                | Volumen (PT): Ancho en Pulgadas (in) x 1 pie(ft) de alto x 1 pie(ft) de largo.

          .row(titulo="Pulgada vara")
            .col-md-3
              figure
                img(src='@/assets/curso/tema4/a04.jpg', alt='Pulgada vara')
            .col-md-9.mb-4.mb-md-0
              p Es la forma de cubicar madera principalmente en Europa y corresponde a las siguientes dimensiones en la pieza: 1 pulgada de ancho por una pulgada de espesor por 1 vara de largo.
              p Fórmula:
                br 
                | Volumen (PV): Ancho en Pulgadas x Alto en Pulgadas x Longitud en Varas  
                | Una pulgada vara equivaldría a 0,0005387 m
                sup 3 
                | para pasar este volumen de Pulgadas Vara a metros cúbicos, se multiplicaría por 1856,32 m
                sup 3
                |.


</template>

<script>
export default {
  name: 'Tema4',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.nextTick(() => {
      this.aosRefresh()
    })
  },
  updated() {
    this.aosRefresh()
  },
}
</script>

<style lang="sass"></style>
