<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Anatomía de la madera

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La madera es un material orgánico formado por tres compuestos básicos: celulosa, hemicelulosa, y lignina; además de otros compuestos secundarios como taninos, gomas, aceites, colorantes, y resinas. Presenta en su estructura células huecas que permiten el transporte de agua y nutrientes a las hojas cuando el árbol se encuentra vivo, al cumplir con esta función las células de la madera las cuales son denominadas longitudinales y transversales le confieren a la misma un aspecto poroso y elevada resistencia.
          br
          br
          | Es importante notar que la estructura de la madera no es la misma en todas las especies, pues su disposición y tejidos varían anatómicamente de una especie a otra, resultando en características físico mecánicas diferentes y por tanto en distintos métodos y procesos para su transformación (Giménez, 2014).

    .row.justify-content-center.gy-4
      .col-12.my-4
        p.text-center.mt-5
          strong A continuación se conocerán las distintas células que conforman la madera.

      .col-12
        ImagenInfografica.color-acento-contenido.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/img02.png', alt='Células que conforman la madera')
        
          .tarjeta.bgTarjetaInfografia.p-3(x='88.5%' y='13%' numero='1')
            p.text-center 
              strong Fibras: 
              | estas células constituyen el elemento principal de la madera, ya que de ellas depende caracterizas primordiales como: la densidad, resistencia mecánica, contracción e hinchamiento, capacidad de aislamiento acústico y eléctrico, y flexibilidad. Las fibras se orientan en sentido paralelo al eje longitudinal del tronco.

          .tarjeta.bgTarjetaInfografia.p-3(x='88.4%' y='52.7%' numero='2')
            p.text-center 
              strong Vasos o poros: 
              | estas células con forma tubular cumplen la función del transporte de agua y sustancias desde la raíz a las hojas y se orientan en sentido paralelo al eje longitudinal del tronco.

          .tarjeta.bgTarjetaInfografia.p-3(x='87.5%' y='67%' numero='3')
            p.text-center 
              strong Radios: 
              | en estas células se realiza el transporte horizontal y reserva de sustancias y se encuentran orientadas en sentido perpendicular al eje del árbol. Van de la médula hacia la corteza.
        
          .tarjeta.bgTarjetaInfografia.p-3(x='88.5%' y='81%' numero='4')
            p.text-center 
              strong Parénquima: 
              | son células más cortas y por lo general más claras que las fibras. Cumplen las funciones de conducción y reserva de sustancias. Se orientan en sentido paralelo al eje longitudinal del tronco (Sentido longitudinal).
      .col-12  
        strong Partes del tronco
        p.my-4 El tronco en el árbol es la parte donde se encuentra concentrada la madera, esta madera compuesta de células longitudinales y transversales se sitúa debajo de la corteza de los tallos leñosos y cumple con la función de constituir el esqueleto del árbol. Se verá cómo se estructuran las partes del tronco desde la más externa denominada corteza hasta llegar a la médula que es el centro del árbol:
        .row
          .col-12.position-relative
            TabsA.color-acento-contenido
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.bgTarjetaTab.mb-0.p-4(titulo="La corteza y el floema")
                h4 La corteza y el floema
                p son las capas más exteriores del tronco, su función es la protección de la madera nueva, al igual que el transporte de la savia enriquecida, de forma tanto ascendente como descendente.
       
              .tarjeta.bgTarjetaTab.p-4(titulo="El <i>cambium</i> vascular")
                h4 El 
                  i cambium 
                  | vascular
                p es una fina película que se encarga de producir las nuevas capas de madera que se originan en cada época de crecimiento.
       
              .tarjeta.bgTarjetaTab.p-4(titulo="La xilema")
                h4 La xilema
                p conjunto de células que conforman el tejido leñoso y está constituido por 3 capas llamadas: albura, duramen y médula.
       
              .tarjeta.bgTarjetaTab.p-4(titulo="La albura")
                h4 La albura
                p generalmente de color más claro que el duramen. Sus células están, permanentemente, llenas de agua y sustancias alimenticias. Es susceptible de ser atacada por hongos e insectos.
       
              .tarjeta.bgTarjetaTab.p-4(titulo="El duramen")
                h4 El duramen
                p está formado por células duras de madera muerta, que aportan al árbol resistencia a las plagas y un soporte firme.
       
              .tarjeta.bgTarjetaTab.p-4(titulo="La médula")
                h4 La médula
                p consta de células muertas o debilitadas y se encuentra en el centro exacto del árbol. Es muy oscura y puede ser de diferentes texturas según el árbol en concreto y la edad de este (Areatecnologia, s.f.).
       
            img.imgTab(src='@/assets/curso/tema1/img03.png', alt='Partes del tronco', class='img-fluid')

          .col-12.py-4
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            .cajon.cajon-transparente.color-primario.p-4.mb-4
              .h5 Planos de corte
              p Según Chavesta (2006), se conoce como planos o sección de corte en la madera a las superficies que resultan al cortar una pieza de madera en diferentes planos. Debido a la manera como crece el árbol y el arreglo de las células xilemáticas dentro del tallo, se reconocen tres planos principales en los cuales la madera es examinada ordinariamente. Estos planos o superficies son: transversal y longitudinal.

          .col-12
            .row.mb-5
              .col.col-12.col-md-6
                picture
                  img(src='@/assets/curso/tema1/img04.jpg', alt='Planos de corte', class='img-fluid')
              .col.col-12.col-md-6
                ol.lista-ol--cuadro.lista-ol--separador
                  li
                    .lista-ol--cuadro__vineta
                      span 1
                    p 
                      strong Sección transversal: 
                      br
                      | Cara perpendicular al eje del tronco. Es la superficie observable en el extremo de una troza.

                  p 
                    strong Sección longitudinal: 
                    br
                    | superficie paralela al eje del tronco, que a su vez puede ser:


                ol.lista-ol--cuadro.lista-ol--separador
                  li
                    .lista-ol--cuadro__vineta
                      span 2
                    p 
                      strong Radial: 
                      br
                      | Resultante de un corte longitudinal paralelo a los radios, desde la corteza hasta la médula.

                  li
                    .lista-ol--cuadro__vineta
                      span 3
                    p 
                      strong Tangencial: 
                      br
                      | Si el plano de corte sigue una dirección perpendicular a los radios o tangente a los anillos de crecimiento.
                  li


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
