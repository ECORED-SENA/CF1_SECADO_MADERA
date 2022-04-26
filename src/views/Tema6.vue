<template lang="pug">
.curso-main-container.pb-3.animated.fadeIn
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.justify-content-center
      .col-12
        .titulo-principal.color-acento-contenido
          .titulo-principal__numero
            span 6
          h1 Normas de seguridad  

      .col-10.mb-5
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema6/img01.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En el proceso de secado de la madera se llevan a cabo una serie de procedimientos como cargar, descargar, apilar, manipular equipos y herramientas los cuales al no ser desarrollados en condiciones de limpieza, orden y medidas de seguridad pueden generar una serie de riesgos y peligros para la salud.

      .col-12
        #t_6_1.titulo-segundo.color-acento-contenido
          h2 6.1 Elementos de protección personal

        p Los riesgos y peligros para los trabajadores que laboran en la manipulación y secado de la madera, pueden ser evitados o disminuidos con el uso de 
          span.fw-bold.fuente-color-acento-contenido Elementos de Protección Personal (EPP); 
          | estos corresponden a cualquier equipo, aparato o dispositivo especialmente diseñado y fabricado para resguardar al cuerpo de cualquier daño provocado por accidentes del trabajo o enfermedades profesionales.

        p.fw-bold Los elementos de protección básicos que se deben tener en cuenta son los siguientes:

      .col-6.mt-4
        ImagenInfografica#elementos.color-acento-contenido.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema6/img02.jpg', alt='Elementos de protección personal')
        
          .tarjeta.bg-tarjeta-infografia.p-3(x='65%' y='0%' numero='1')
            p.text-center Protección cabeza: casco.
        
          .tarjeta.bg-tarjeta-infografia.p-3(x='45%' y='15%' numero='2')
            p.text-center Protección visual: gafas para el cuidado de los ojos.
        
          .tarjeta.bg-tarjeta-infografia.p-3(x='71%' y='20%' numero='3')
            p.text-center Protección auditiva: para operarios de maquinaria.

          .tarjeta.bg-tarjeta-infografia.p-3(x='60%' y='30%' numero='4')
            p.text-center Protección respiratoria: cuando se manipulen sustancias químicas.

          .tarjeta.bg-tarjeta-infografia.p-3(x='95%' y='24%' numero='5')
            p.text-center Protección manos: guantes para la protección contra sustancias químicas, astillas.

          .tarjeta.bg-tarjeta-infografia.p-3(x='42%' y='50%' numero='6')
            p.text-center Accesorios para levantamiento de cargas: especial para presionar y evitar desgarres.

          .tarjeta.bg-tarjeta-infografia.p-3(x='68%' y='70%' numero='7')
            p.text-center Ropa de protección: cubre todo el cuerpo y tela espacial.

          .tarjeta.bg-tarjeta-infografia.p-3(x='25%' y='92%' numero='8')
            p.text-center Protección para pies: botas de seguridad. Barrera de protección contra caídas y lesiones.

      .col-12
        #t_6_2.titulo-segundo.color-acento-contenido
          h2  6.2 Riesgos y peligros asociados a la labor 

        p Para finalizar el recorrido por este componente formativo es momento de tener muy presente los riesgos y peligros al momento de apilar la madera; es donde las operaciones forestales exigen manipulación de herramientas, procedimientos peligrosos y sobreesfuerzos en los trabajadores, estas actividades pueden llegar a causar desórdenes músculo esqueléticos o accidentes que comprometan la vida del operario en cuestión. En el proceso de apilado de madera  se pueden identificar algunos que revisten importancia y que se deben tener en cuenta durante su ejecución:

        TabsB.color-acento-contenido.my-5
          .py-4.py-md-5(titulo="Apilado de madera" :icono="require('@/assets/curso/tema6/t01.svg')")
            .row
              .col-md-6.mb-4.mb-md-0
                h4 Apilado de madera
                p Es importante que se establezcan medidas de seguridad que generen estabilidad en las pilas, evitando alturas que comprometan la seguridad de los trabajadores en el lugar.
              .col-md-6
                figure
                  img(src='@/assets/curso/tema6/img-t01.svg', alt='Apilado de madera')

          .py-4.py-md-5(titulo="Principal riesgo" :icono="require('@/assets/curso/tema6/t02.svg')")
            .row
              .col-md-6
                h4 Principal riesgo
                p Uno de los principales riesgos asociados a la labor de apilado de madera es el derrumbe de la pila, por tanto es necesario usar superficies firmes y resistentes en  la carga de madera, realizar en lo posible apilados horizontales, si es necesario hacer apilados verticales es importante que se encuentren sujetos  para evitar derribamientos, cuando se manipulen cargas con ayuda de  vehículos es necesario revisar bien el lugar donde será descargadas las piezas, realizar el procedimiento lentamente y evitar personal ajeno a la operación en el área de trabajo.
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema6/img-t02.jpg', alt='Principal riesgo')

          .py-4.py-md-5(titulo="Manipulación manual de cargas" :icono="require('@/assets/curso/tema6/t03.svg')")
            .row
              .col-md-6
                h4 Manipulación manual de cargas
                p En las labores cotidianas es posible que se realicen sobreesfuerzos al manipular cargas dentro del área de trabajo; por tanto, es importante conocer la posición correcta al levantar cargas pesadas, para evitar problemas de salud y desordenes musculo esqueléticos.
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema6/img-t03.jpg', alt='Manipulación manual de cargas')

          .py-4.py-md-5(titulo="Medidas preventivas" :icono="require('@/assets/curso/tema6/t04.svg')")
            .row
              .col-md-6
                h4 Medidas preventivas
                p Un solo operario no debe levantar ni debe mover pesos excesivos y siempre debe atender las instrucciones de la manipulación manual de Cargas.
                p Debe estar utilizando los elementos de protección personal propios de la labor que está ejerciendo calzado de seguridad, casco para operaciones de descarga de vehículos, guantes que faciliten el agarre y protejan de aristas y astillas de la madera, y cinturón contra lumbalgias, siempre bajo prescripción médica (AFAMID, 2016). 
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema6/img-t04.jpg', alt='Medidas preventivas')

          .py-4.py-md-5(titulo="Almacenamiento seguro en el sector de la madera" :icono="require('@/assets/curso/tema6/t05.svg')")
            .row
              .col-md-6
                h4 Almacenamiento seguro en el sector de la madera
                p Al ser la madera un material propenso al ataque de hongos e insectos es muy probable que dentro de los procesos que se realizan durante el trabajo de la madera el personal tenga contacto con una serie de sustancias químicas como fungicidas e insecticidas para protección de la madera disolventes para dilución de barnices y limpieza máquinas y herramientas. Aditivos (acelerantes, retardantes, ignífugos, hidrófugos, catalizadores, secantes, decapantes para tratamiento y corrección de la madera, entre otros) que representan un peligro para la salud ya sea por procesos de inhalación, contacto o mal almacenamiento que genere explosiones o incendios. (AFAMID, 2016)
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema6/img-t05.svg', alt='Almacenamiento seguro en el sector de la madera')

          .py-4.py-md-5(titulo="Seguridad en el proceso de secado" :icono="require('@/assets/curso/tema6/t06.svg')")
            .row
              .col-md-6
                h4 Seguridad en el proceso de secado
                p Durante el proceso de secado es importante que el lugar destinado a este proceso cuente con señalización de las áreas de trabajo, al igual con espacios libres para el transito seguro del personal, equipos, sensores y cables deben ser revisados constantemente para verificar su correcto funcionamiento y buen estado.
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema6/img-t06.jpg', alt='Seguridad en el proceso de secado')

</template>

<script>
export default {
  name: 'Tema6',
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
