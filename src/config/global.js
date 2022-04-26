export default {
  global: {
    componenteFormativo: 'Técnicas y procedimiento de apilado de madera',
    descripcionCurso:
      'El secado de la madera es el proceso que ha sido el causante de más defectos y deformaciones de la pieza. Siendo hoy el mercado más competitivo y exigente es indispensable conocer las técnicas industriales que permitan al trabajador mejorar la calidad en el producto.',
    fondoBannerPrincipal: require('@/assets/curso/banner/fondo-banner-principal.png'),
    imagenBannerPrincipal: require('@/assets/curso/banner/imagen-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Anatomía de la madera',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Propiedades de la madera',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Preservación de la madera',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Secado',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Inmunizado',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Sanitizado',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Metrología',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Sistema métrico',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Tablas de conversión',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Técnicas e instrumentos de medida',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Apilado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Técnicas de apilado',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Tipos de apilado',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Procedimientos de apilado',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Normas de seguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Elementos de protección personal',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Riesgos y peligros asociados a la labor',
            hash: 't_6_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'AFAMID. (2016). Almacenamiento seguro en el sector de la madera.',
      link:
        'https://studylib.es/doc/6293378/almacenamiento-seguro-en-el-sector-de-la-madera',
    },
    {
      referencia:
        'Ardanuy, T. (1988). NTP 220: Seguridad en el almacenamiento de madera.',
      link:
        'https://www.insst.es/documents/94886/326853/ntp_220.pdf/fad8c9cd-1916-4897-b0bb-baa72ca3d867?version=1.0&t=1614698420494',
    },
    {
      referencia: 'Areatecnologia. (s.f.). Partes del tronco de un árbol.',
      link:
        'https://www.areatecnologia.com/materiales/partes-del-tronco-de-un-arbol.html',
    },
    {
      referencia: 'Calderón, A. (2016). Preservación de maderas.',
      link:
        'https://dasonomia.files.wordpress.com/2016/11/preservacion-de-la-madera-apuntes.pdf',
    },
    {
      referencia: 'Certicalia. (2021). ¿Qué es cubicar madera?.',
      link: 'https://www.certicalia.com/cubicar-madera/que-es-cubicar-madera',
    },
    {
      referencia:
        'Chavesta. (2006). Manual para la identificación de especies maderables.',
      link:
        'https://dl-manual.com/doc/manual-para-la-identificacion-de-especies-maderables5doc-6vj3dkx301oe',
    },
    {
      referencia: 'Definición.de. (2021). Flexómetro.',
      link: 'https://definicion.de/flexometro/',
    },
    {
      referencia: 'FAO. (s.f.). Glosario de términos.',
      link: 'https://www.fao.org/3/j5484s/j5484s12.htm',
    },
    {
      referencia:
        'Giménez, A., Moglia, J., Hernández, P. & Gerez, R. (2014). Anatomía de madera - Facultad de ciencias forestales.',
      link:
        'https://fcf.unse.edu.ar/archivos/series-didacticas/sd-1-anatomia-de-madera.pdf',
    },
    {
      referencia: 'Glosario bosques. (12015). Apilado de madera.',
      link: 'https://glosarios.servidor-alicante.com/bosques/apilado-de-madera',
    },
    {
      referencia:
        'Godinez, O. M. (2013). Manual de madera y carpintería para la integración a la arquitectura.',
      link: 'http://132.248.9.195/ptd2013/enero/0688067/0688067_A10.pdf',
    },
    {
      referencia: 'Instruments™, P. (2021). Detect. humedad madera.',
      link:
        'https://www.pce-instruments.com/colombia/instrumento-medida/medidor/detect.-humedad-madera-kat_72377.htm',
    },
    {
      referencia:
        'Mamani, R. (2017). Cómo ubicamos nuestra madera. Proyecto Jatun Sach´a.',
      link: '',
    },
    {
      referencia:
        'Moscoso, J. (2009). Técnicas de secado de la madera. 1° Edición. Centro de Innovación Tecnológico de la Madera (CITE madera).',
      link: '',
    },
    {
      referencia:
        'Ortiz, F. y Ortiz, G. (1994). Cálculo y diseño de un cuarto de secado de madera.',
      link:
        'https://red.uao.edu.co/bitstream/handle/10614/4738/T0002548.pdf?sequence=1',
    },
    {
      referencia:
        'Posicionamiento de la Gobernanza Forestal en Colombia. (s.f.). Guía de cubicación de madera.',
      link:
        'https://docplayer.es/18505591-Guia-practica-para-la-cubicacion-de-maderas.html',
    },
    {
      referencia: 'Rodríguez, E. (2013). Guía de la madera Daniel Rivas.',
    },
    {
      referencia:
        'Valle, H. (2019). 5 fases del secado de madera industrial que debes conocer.',
      link: 'https://maquinariaymaderas.com/secado-de-madera-industrial/',
    },
    {
      referencia:
        'Viscarra, S. (1998). Guía práctica para el secado de la madera en hornos. El País.',
    },
  ],
  glosario: [
    {
      termino: 'Apilado',
      significado:
        'Forma de colocar la madera aserrada, para facilitar su manipulación, secado, curado y almacenaje. (Glosario bosques, 2015).',
    },
    {
      termino: 'Cubicar madera',
      significado:
        'La cubicación de la madera es un proceso que se lleva a cabo con el fin de determinar el volumen de los árboles y productos forestales que se encuentran en una determinada parcela o terreno. (Certicalia, 2021).',
    },
    {
      termino: 'Especie forestal',
      significado:
        'Todo vegetal perenne y de estructura leñosa que proporciona madera (Norma Venezolana COVENIN 320-90,1990).',
    },
    {
      termino: 'Flexómetro',
      significado:
        'Se utiliza para la medición de longitudes. La cinta metálica se divide en milímetros, centímetros u otras unidades, de manera tal que el usuario pueda medir con precisión. (Definición.de, 2021).',
    },
    {
      termino: 'Madera bruto',
      significado:
        'Madera en estado natural tal como se corta y se cosecha, con o sin corteza, rolliza, partida, escuadrada, en bruto. Abarca toda la madera extraída dentro y fuera de los bosques naturales y plantaciones industriales durante el año civil (calendario), e incluye las rolas para aserrar y para chapa, rolas para pulpa y otra madera rolliza industrial, Se incluye la leña y las astillas partículas de desechos o de residuos industriales idóneos para la fabricación de tableros y pulpa. (MARN-SEFORVEN, 1990, tomado de FAO, s.f.).',
    },
    {
      termino: 'Secado industrial',
      significado:
        'Este proceso consiste en elevar la temperatura dentro de la masa de madera a la temperatura de secado del arranque inicial, sin secar la superficie de la tabla. (VALLE, 2019).',
    },
    {
      termino: 'Sensores de humedad',
      significado:
        'Instrumento de precisión electrónico que se utiliza para medir el contenido de humedad absoluta en la madera. (Instruments™, 2021).',
    },
    {
      termino: 'Separadores',
      significado:
        'Piezas generalmente de madera de espesor variable que se encargan de dar una estabilidad a la pila de madera, además influyen sobre las deformaciones de las piezas y eventualmente sobre la aparición de manchas superficiales.',
    },
  ],
  complementario: [
    {
      texto: 'Benito. P. (s.f.). Secado de la madera',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=N8FUFYKblFw&ab_channel=PedroBenitoUrbina',
    },
    {
      texto: 'Eroski, Consumer. (2018). Humedad en la madera',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=fB4RNKE3oFc&ab_channel=EroskiConsumer',
    },
    {
      texto:
        'Rodríguez, E., Moreno, R. y Villota, N. (2013). Cubicación y conversión de unidades',
      tipo: 'Documento',
      link: 'http://www.rivasdaniel.com/pdf/GUIA_DE_CUBICACION_MADERA.pdf',
    },
    {
      texto:
        'Ardanuy, T. (1988). NTP 220: Seguridad en el almacenamiento de madera',
      tipo: 'Documento',
      link:
        'https://www.insst.es/documents/94886/326853/ntp_220.pdf/fad8c9cd-1916-4897-b0bb-baa72ca3d867?version=1.0&t=1614698420494',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Erika Barrera Montañez',
        cargo: 'Experta temática',
        centro:
          'Centro para el Desarrollo Rural y Minero CEDRUM Regional Norte de Santander',
      },
      {
        nombre: 'Beatriz Eugenia Agudelo Vásquez',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial Regional - Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Centro de Gestión Industrial Regional - Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Edison Eduardo Mantilla Cuadros'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Carmen Alicia Martínez Torres'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ['Gilberto Junior Rodriguez Rodriguez'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ['John Jairo Arciniegas González'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ['Lady Adriana Ariza Luque'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ['Laura Ximena Hurtado Villalba'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ['Wilson Andrés Arenales Caceres'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ['Yicelly Estefania Mesa Silva'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Deivy Giovanni Fonseca Bermúdez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Melina Tatiana Quintero Rodriguez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
