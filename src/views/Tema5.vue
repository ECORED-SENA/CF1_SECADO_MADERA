<template lang="pug">
.curso-main-container.pb-3.animated.fadeIn
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Apilado
    .row.bg-tablas-conversion.d-flex.justify-content-center
      .col-12
        p El apilado es la forma como se distribuye la madera aserrada de forma tal que facilite al operador su manipulación de manera segura al igual que los procesos de inmunizado, secado y embalaje. Para garantizar un exitoso proceso de secado es importante seleccionar y separar las piezas en pilas; para ello, es necesario tener en cuenta los siguientes criterios:
      .col-10
        //- Pasos
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row
            .col-12.mb-4
              h3 Especie
              p Con esta selección se logra optimizar la duración y la calidad del proceso, es la primera selección que se debe efectuar.

          .row
            .col-12.mb-4
              h3 Dimensiones
              p El espesor es importante ya que la duración en el proceso de secado es exponencial al espesor de las piezas, además algunos defectos que se presentan en el secado surgen debido al espesor.

          .row
            .col-12.mb-4
              h3 El ancho y el largo
              p Se deben considerar al clasificar la madera para el momento de apilar (Ortiz y Ortiz, 1994, p. 90-94).

          .row
            .col-12.mb-4
              h3 Tipo de corte
              p Presente la madera al momento de secar (radial, tangencial).

          .row
            .col-12.mb-4
              h3 Nivel de humedad inicial
              p la variabilidad en el contenido de humedad inicial dificulta el secado, lo conveniente es seleccionar lotes homogéneos (verde, húmeda, secada al aire).

          .row
            .col-12.mb-4
              h3 Contenido de humedad final deseado
              p Es dependiente del uso final de la madera e indicadora del proceso de secado en el horno (Viscarra, 1998).

    separador

    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1 Técnicas de apilado 

    .row.mb-5
      .col.col-12.col-md-5
        p Para realizar un apilado técnico de la madera y garantizar que el aire se desplace uniformemente sobre la pila de manera uniforme se deben seleccionar los separadores que irán entre las piezas de madera; para ello, se deben tener en cuenta las siguientes especificaciones:
      .col.col-12.col-md-7
        picture
          img(src='@/assets/curso/tema5/tablones.jpg', alt='Técnicas de apilado', class='img-fluid')

    .row.mb-5
      .col.col-12.col-md-5
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        LineaTiempoD.color-acento-botones.mb-4.mb-lg-1
          .row(numero="1" titulo="Especificación 1")
            .col-12.mb-4.mb-md-0
              p.text-small Preferiblemente no usar separadores de maderas resinosas.
          .row(numero="2" titulo="Especificación 2")
            .col-12.mb-4.mb-md-0
              p.text-small Deben ser elaborados de maderas secas o en su defecto materiales como aluminio o contrachapados.
          .row(numero="3" titulo="Especificación 3")
            .col-12.mb-4.mb-md-0
              p.text-small Su espesor debe ser uniforme, el espesor de los separadores tiene que ver con el espesor de la madera a secar, usualmente se utilizan separadores entre 16 mm (5/8") y 25 mm (1"), y el ancho de los separadores será un 50% mayor que el espesor elegido.

      .col.col-12.col-md-7
        table.tabla-apilado
          thead
            tr
              th Espesor madera
                br
                | (mm)
              th Espesor separador
                br
                | (mm)
              th Distancia entre separadores
                br
                | (mm)
          tbody
            tr
              td < 20
              td 20-30
              td 300-400
            tr
              td 20-25
              td 20-30
              td 400-500
            tr
              td 25-40
              td 20-30
              td 500-600
            tr
              td 40-65
              td 30-40
              td 700-800
            tr
              td 65-80
              td 40
              td 900
    
    br
    .row.my-4
      .col-12
        ul.lista-ul--color
          li
            i.fas.fa-check
            | Deben estar alineados verticalmente y con una separación entre sí de 60 cm como máximo, en la misma.
          li
            i.fas.fa-check
            | Camada, la correcta colocación de los separadores reduce las grietas, deformaciones y rajaduras en la madera.
          li
            i.fas.fa-check
            | En la primera y la última fila deben ubicarse tablas formando un solo plano con las caras transversales de esta forma se reduce la velocidad de secado longitudinal y la tendencia a abarquillado y agrietamiento (Ortiz y Ortiz, 1994).
        br
        p.fw-bold Teniendo en cuenta eso, se puede conocer la siguiente información sobre el armado:

      .col-12
        .row.justify-content-center
          .col-12.col-lg-5.p-0.m-1.tarjeta-apilado.curuba
            img(src='@/assets/curso/tema5/img01.png', alt='', class='img-fluid')
            p.p-4 El armado de las pilas: Requiere de unos apropiados alineamientos en los pisos de los listones separadores ya que evitan defectos por torceduras en las piezas inferiores de la pila; por tanto, es recomendable utilizar dispositivos que faciliten el alineamiento correcto de los separadores. 
          .col-12.col-lg-5.p-0.m-1.tarjeta-apilado.verde
            img(src='@/assets/curso/tema5/img02.png', alt='', class='img-fluid')
            p.p-4 En lo posible se debe evitar que las piezas sobresalgan de los extremos de la pila, igualmente se deben ubicar contrapesos o tensores en la parte superior para evitar torceduras en las piezas superiores.
    
    separador

    .row.justify-content-center
      .col-12
        #t_5_2.titulo-segundo.color-acento-contenido
          h2 5.2 Tipos de apilado

        p Existen cuatro tipos de apilado de madera: horizontal, vertical, en caballete y en triángulo, todos favoreciendo la circulación del aire de manera homogénea sobre las piezas.

      .col-10.my-4
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema5/img03.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Cuando se habla de secado industrial se recomienda utilizar el apilado horizontal, ya que en los hornos de secado es más fácil de instalar, optimizar el espacio y evitar torceduras y curvaturas en las piezas además de ser más seguro para los trabajadores.

      .col-12
        p Apilar madera aserrada en los hornos de secado también obedece a: el tipo de piezas, especie, el coeficiente de humedad similar, entre otros factores; ya que al tener en cuenta estas características al momento de armar las pilas se busca un secado de la madera aserrada más uniforme y se evitan defectos que suelen aparecer en esta fase en la madera como: torceduras, encorvaduras, abarquillado y arqueaduras, así como agrietamientos y rajaduras.
    
    separador

    .row.justify-content-center
      .col-12
        #t_5_3.titulo-segundo.color-acento-contenido
          h2 5.3 Procedimientos de apilado

        p Lo primero que se debe tener en cuenta cuando la madera está lista para realizar el proceso de secado es el llenado del horno el cual indicará el volumen de la carga dependiendo de su capacidad, para ello se debe leer cuidadosamente las indicaciones establecidas por el fabricante, considerando el ancho, profundidad y altura de cámara, ya que estas medidas garantizan la correcta circulación del aire y, por ende, un efectivo secado (Moscoso, 2009).
      .col-10
        //- Pasos
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row
            .col-12.col-lg-6.mb-4
              h3 Paso 1
              p Seguidamente es necesario instalar los sensores de humedad los cuales se ubicarán en las filas y en las columnas; tratando de tomar, a manera de muestra, todos los puntos de la cámara y teniendo especial cuidado de que la madera no presione los cables ya que estos son los encargados del control en la variación del secado.
            .col-12.col-lg-6.mb-4
              img(src='@/assets/curso/tema5/img04.jpg', alt='', class='img-fluid')
          .row
            .col-12.col-lg-6.mb-4
              img(src='@/assets/curso/tema5/img05.jpg', alt='', class='img-fluid')
            .col-12.col-lg-6.mb-4
              h3 Paso 2
              p Para continuar con el proceso se debe revisar que las pilas de madera estén completamente alineadas tanto vertical como horizontalmente para evitar deformaciones por cargas muertas, manteniendo un ángulo de 90º y si se están secando maderas susceptibles al alabeo, se debe colocar contrapesos encima de la última fila de la pila, para estabilizar la carga.

</template>

<script>
export default {
  name: 'Tema5',
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
