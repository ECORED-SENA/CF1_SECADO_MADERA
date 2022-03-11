<template lang="pug">
.curso-main-container.pb-3.animated.fadeIn
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Preservación de la madera

    .row.mb-5
      .col.col-12.col-md-7
        p Para que la madera obtenga una buena preservación se deben aplicar una serie de técnicas y productos o sustancias que impidan el ataque de agentes destructores de esta, una correcta preservación permite aprovechar aquellas maderas de menor valor y aumentar la vida útil de maderas más valiosas lo que ayudará a la conservación de los bosques y por ende mayores servicios ambientales. 
        p Cotidianamente la madera se ve enfrentada a una serie de agentes biológicos (hongos, bacterias, insectos, pájaros) y no biológicos (calor temperatura, desgaste mecánico); por tanto, es necesario identificar correctos procesos de secado, inmunizado y sanitizado que nos permitan obtener piezas de buena calidad.
      .col.col-12.col-md-5
        picture
          img(src='@/assets/curso/tema3/img01.png', alt='Preservación de la madera', class='img-fluid') 

    .row
      .col
        #t_3_1.titulo-segundo.color-acento-contenido
          h2 3.1 Secado

        p El secado en la madera es el proceso mediante el cual se extrae el exceso de agua de la misma, hasta llegar a un punto de estabilización el cual permitirá su trabajabilidad de manera óptima. 
        p Los tipos de secado que se pueden llevar a cabo en la madera son: 

        //- Pasos
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row
            .col-12.mb-4
              h3 Secado natural
              p.pt-3 El cual se realiza al aire libre y depende de las condiciones ambientales del lugar (viento, humedad, calor) las cuales influirán en la calidad del secado.

          .row
            .col-12.mb-4
              h3 Secado industrial
              p.pt-3 En este proceso la madera es secada mediante cámaras u hornos en donde se controla la temperatura y el tiempo para obtener un grado de humedad requerido en la madera según la especie y su posterior transformación, al ser un proceso controlado se pueden obtener las siguientes ventajas:
              p.mb-0 - Un secado más rápido.
              p.mb-0 - Una humedad uniforme y requerida.
              p.mb-0 - Disminución de defectos durante el proceso.
              p.mb-0 - Control del proceso.

        p Al iniciar este proceso que permitirá alcanzar en la madera un grado de preservación es necesario conocer y tener en cuenta dos tipos de factores, pues ellos influyen en la calidad del producto.

    .bg-factores
      .row.p-3
        .col-12.my-4
          h3 Factores internos que determinan un secado:
        .col-lg-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema3/tarjeta01.png' alt='Especie')
            .tarjeta.bg-color-tarjeta
              .p-4
                h4 Especie
                p Las maderas son de diferentes especies por tanto es imprescindible su identificación y separación antes de realizar el proceso, pues cada una de ellas obedece a un secado diferente.

        .col-lg-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema3/tarjeta02.png' alt='Espesor')
            .tarjeta.bg-color-tarjeta
              .p-4
                h4 Espesor
                p El espesor de la madera debe ser el mismo dentro de las pilas a secar o caso contrario puede haber una diferencia en espesor no mayor a ½" en las tablas a secar.

        .col-lg-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema3/tarjeta03.png' alt='Contenido de humedad inicial')
            .tarjeta.bg-color-tarjeta
              .p-4
                h4 Contenido de humedad inicial
                p Se debe prestar especial atención en este aspecto ya que las tablas a secar deben tener en lo posible el mismo contenido de humedad para garantizar un proceso de secado exitoso.

        .col-lg-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema3/tarjeta04.png' alt='Contenido de humedad final')
            .tarjeta.bg-color-tarjeta
              .p-4
                h4 Contenido de humedad final
                p Este contenido está determinado por el uso que se le dará a la madera.

        .col-12.my-4
          h3 Factores externos que determinan un secado:

        .col-lg-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema3/tarjeta05.png' alt='Temperatura')
            .tarjeta.bg-color-tarjeta
              .p-4
                h4 Temperatura
                p Esta variable está ligada al grado de evaporación del agua en la madera, a mayor temperatura mayor movimiento del agua en la pieza a secar.

        .col-lg-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema3/tarjeta06.png' alt='Humedad relativa')
            .tarjeta.bg-color-tarjeta
              .p-4
                h4 Humedad relativa
                p Es la cantidad de vapor de agua presente en el aire, determinando la velocidad de secado de la madera.

        .col-lg-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema3/tarjeta07.png' alt='Circulación de aire')
            .tarjeta.bg-color-tarjeta
              .p-4
                h4 Circulación de aire
                p La velocidad con la que se mueve el aire permite generar energía para calentar el agua contenida en la madera facilitando así su evaporación.

    .row.mt-4
      .col.py-4
        #t_3_2.titulo-segundo.color-acento-contenido
          h2 3.2 Inmunizado
        p Cuando se habla de inmunizar la madera, se hace referencia al proceso mediante el cual la madera es impregnada de sustancias químicas mediante la utilización de diferentes métodos (inmersión, vacío presión) para lograr su preservación, durabilidad en el tiempo y resistencia a ataques por hongos, insectos y perforadores marinos. Por ello, es importante tener en cuenta lo siguiente:

    .row.justify-content-center
      .col-lg-5.m-1.bg-tarjeta-infografia-3.tarjeta-inmunizado.p-0.m-4
        img(src='@/assets/curso/tema3/flip2.png', alt='Texto que describa la imagen' )
        p.text-center.p-4 Estas sustancias que son aplicadas a la madera deben cumplir con ciertos requisitos como: ser tóxicas para los agentes patógenos, no ser tóxicas para las personas y animales.

      .col-lg-5.m-1.bg-color-tarjeta-inmunizado.tarjeta-inmunizado.p-0.m-4
        img(src='@/assets/curso/tema3/flip1.png', alt='Texto que describa la imagen' )
        p.text-center.p-4 Sustancias que no sean corrosivas ni combustibles y sean relativamente económicas, la selección del preservante debe ser realizada pensando en el tipo de servicio que prestará la madera, y su éxito dependerá del grado de penetración que se logre.

    .row.my-5
      .col.col-12.col-md-7
        p.my-3.fw-bold Algunos de los preservantes más conocidos son:
        ul.lista-ul--color
          li
            i.fas.fa-check
            | Oleosos: como la creosota de consistencia viscosa y olor fuerte a fenol
          li
            i.fas.fa-check
            | Óleo solubles: como el pentaclorofenol que es un producto químico de olor penetrante y alta toxicidad, también se pueden encontrar en este grupo el Naftenato de Cu, de apariencia cerosa y color verde oscuro y el Óxido de Tri – n – butil estaño, producto altamente tóxico efectivo contra perforadores marinos.
          li
            i.fas.fa-check
            | Hidrosolubles: aquellos solubles en agua como las Sales de Cobre, Cromo, Boro el Cloruro de Zn (ClZn) y el Fluoruro de Na (FNa). (Calderón, 2016)
      .col.col-12.col-md-5
        picture
          img(src='@/assets/curso/tema3/img02.png', alt='', class='img-fluid')

    separador
    
    #t_3_3.titulo-segundo.color-acento-contenido.mb-0
      h2 3.3 Sanitizado

    img(src='@/assets/curso/tema3/sanitizar.png', alt='Sanitizado', class='img-fluid')

    p.py-4 Este proceso al igual que el inmunizado busca preservar la madera mediante el uso de calor o productos químicos evitando el ataque por hongos o bacterias y se exige para maderas utilizadas en productos de embalaje, el proceso es regulado por la Norma Internacional de Medidas Fitosanitarias 
      strong NIMF 15.

    .row.justify-content-center
      .col-10
        .tarjeta.bg-archivo-norma.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema3/norma-nimf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h3.mb-1 Norma NIMF
                  p.text-small Norma Internacional de Medidas Fitosanitarias.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.fao.org/sustainable-forest-management/toolbox/tools/tools-details/es/c/233067/" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    .row
      .col-12.col-lg-4
        p En ella se describe las medidas fitosanitarias que disminuyen el riesgo de introducción y/o dispersión de plagas cuarentenarias asociadas con la movilización en el comercio internacional de embalaje de madera fabricado de madera en bruto.
      .col-12.col-lg-8
        .cajon.color-primario.p-4.mb-4
          p Las medidas fitosanitarias aprobadas que disminuyen considerablemente el riesgo de introducción y dispersión de plagas a través del embalaje, consisten en el uso de madera descortezada y en la aplicación de tratamientos aprobados.
</template>

<script>
export default {
  name: 'Tema3',
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
