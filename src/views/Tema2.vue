<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Propiedades de la madera    

    .row.mb-5
      .col.col-12.col-md-7
        p.mb-3 En el mundo se encuentra una gran cantidad de maderas, las cuales varían de un lugar a otro dependiendo de su lugar de origen, donde:

        ul.lista-ul
          li
            i.fas.fa-check.fuente-color-acento-contenido
            | Cada tipo de madera tiene propiedades individuales que son ventajosas según el propósito y el área de aplicación.

          li
            i.fas.fa-check.fuente-color-acento-contenido
            | Es fundamental e importantísimo conocer la madera y sus propiedades.

          li
            i.fas.fa-check.fuente-color-acento-contenido
            | “Las propiedades nos brindan información útil para su posterior procesamiento, posibilidad de usos, técnicas y métodos que serán necesarios realizar durante su trabajo” (Godinez, 2013).

      .col.col-12.col-md-5
        picture
          img(src='@/assets/curso/tema2/img01.png', alt='Propiedades de la madera', class='img-fluid')

    .row 
      .col-12
        p.text-center
          strong A continuación se presentan algunas de estas propiedades y sus principales características:
      .col-12
        //- Propiedad Física
        img.img250.my-4(src='@/assets/curso/tema2/imgFisicas.svg', alt='Propiedad Física', class='img-fluid')

        p Las propiedades físicas de la madera son aquellas que determinan su comportamiento frente a los distintos factores del medio natural como: la iluminación, el agua, el calor, las vibraciones acústicas entre otras, sin producir ninguna modificación mecánica o química. Se conocerán a continuación:

        //- LineaTiempoA
        LineaTiempoA.color-acento-contenido.mb-5(:datos="datosLineaTiempoA")
        
        //- Propiedad Mecánica
        img.img250.my-4(src='@/assets/curso/tema2/imgMecanica.svg', alt='Propiedad Mecánica', class='img-fluid')

        p Las propiedades mecánicas son muy importantes ya que son aquellas que influyen en el comportamiento estructural de la madera y son:

        ImagenInfografica.color-acento-contenido.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/img02.png', alt='Propiedades Mecánicas')
        
          .tarjeta.bg-tarjeta-infografia.p-3(x='77%' y='5%' numero='1')
            p Cuando la madera es sometida a una fuerza que tiende a aplastar las fibras en sentido axial o perpendicular a ellas la resistencia será mayor en el primer caso.
        
          .tarjeta.bg-tarjeta-infografia.p-3(x='15%' y='50%' numero='2')
            p Trabajo impuesto a una pieza que se coloca sobre dos apoyos y que está sometida al peso en uno o más puntos de apoyo en su longitud.
        
          .tarjeta.bg-tarjeta-infografia.p-3(x='59%' y='41%' numero='3')
            p Acción de fuerzas paralelas que tienden a cortar la sección transversal de la madera.

          .tarjeta.bg-tarjeta-infografia.p-3(x='67.5%' y='72%' numero='4')
            p Resistencia que opone una pieza fija en uno de sus extremos a la formación producida por un giro de su eje que obra con un brazo de palanca en su extremo libre.

        //- Propiedad Organoléptica
        img.img250.my-4(src='@/assets/curso/tema2/imgOrganolepticas.svg', alt='Propiedad Organoléptica', class='img-fluid')

        p Son aquellas percibidas por los órganos sensoriales y su importancia está estrechamente ligada a la parte ornamental y decorativa de la misma.
      .col-8.mx-auto
        ImagenInfografica.color-acento-contenido.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/img03.png', alt='Propiedades Organolépticas')
        
          .tarjeta.bg-tarjeta-infografia.p-3(x='17%' y='2%' numero='1')
            p Variable de blancos a negros dependiente de la especie, por lo general las maderas duras presentan colores más oscuros.
        
          .tarjeta.bg-tarjeta-infografia.p-3(x='-2%' y='34%' numero='2')
            p Es de importancia dependiendo de la utilización de la madera.
        
          .tarjeta.bg-tarjeta-infografia.p-3(x='-2%' y='66%' numero='3')
            p Tamaño y espaciamiento de las células en la madera.

          .tarjeta.bg-tarjeta-infografia.p-3(x='35%' y='92.5%' numero='4')
            p Figura que se aprecia en las fibras, es una característica muy apetecida comercialmente.

          .tarjeta.bg-tarjeta-infografia.p-3(x='100%' y='66%' numero='5')
            p Capacidad que posee la madera de reflejar la luz.

          .tarjeta.bg-tarjeta-infografia.p-3(x='100%' y='34%' numero='6')
            p Es la disposición y dirección de los elementos constituyentes del leño en relación al eje del árbol.

          .tarjeta.bg-tarjeta-infografia.p-3(x='81%' y='2%' numero='7')
            p Dependiendo de la especie se presentan olores a sustancias volátiles

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosLineaTiempoA: [
      {
        ano: 'Higros-\ncopicidad',
        texto:
          'La madera tiende a absorber o perder agua según las condiciones del ambiente (humedad relativa y temperatura del aire). Por lo tanto, a cada estado ambiental corresponde un grado de humedad de la madera, al cual se le denomina humedad de equilibrio higroscópico.',
      },
      {
        ano: 'Hendibilidad',
        texto:
          'Facilidad que tiene para partirse o rajarse en sentido de la fibra.',
      },
      {
        ano: 'Dureza',
        texto: 'Resistencia que presenta la pieza al corte.',
      },
      {
        ano: 'Flexibilidad',
        texto:
          'Propiedad de la madera joven para ser curvada en sentido longitudinal a la fibra sin romperse ni deformarse ejemplo: pino, eucalipto.',
      },
      {
        ano: 'Densidad',
        texto:
          'Es la relación entre el peso y el volumen que ocupa la muestra medidos con el mismo grado de humedad.',
      },
      {
        ano: 'Retractilidad',
        texto: 'Contracción que presenta la madera cuando se seca.',
      },
    ],
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
