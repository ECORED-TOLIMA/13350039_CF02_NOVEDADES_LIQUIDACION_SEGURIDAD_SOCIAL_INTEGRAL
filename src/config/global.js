export default {
  global: {
    Name:
      'Liquidación y registro en la Planilla Integrada de Seguridad Social (PILA)',
    Description:
      'Este componente formativo aborda los fundamentos técnicos para calcular el Ingreso Base de Cotización (IBC), aplicar los porcentajes según el régimen de afiliación y diligenciar la Planilla Integrada de Liquidación de Aportes (PILA). Desarrolla también las competencias para gestionar novedades de nómina, aplicar los plazos de pago vigentes y registrar contablemente los aportes al Sistema de Seguridad Social Integral.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Ingreso Base de Cotización (IBC)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto e importancia del IBC',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Elementos que integran y excluyen el IBC',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Cálculo del IBC: trabajadores dependientes',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Cálculo del IBC: trabajadores independientes y contratistas',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Topes mínimos y máximos del IBC',
            hash: 't_1_5',
          },
          { numero: '1.6', titulo: 'Variaciones del IBC', hash: 't_1_6' },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Regímenes de afiliación y cotización',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Régimen contributivo de salud',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Regímenes pensionales: RPM y RAIS',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Sistema General de Riesgos Laborales',
            hash: 't_2_3',
          },
          { numero: '2.4', titulo: 'Aportes parafiscales', hash: 't_2_4' },
          {
            numero: '2.5',
            titulo: 'Exoneraciones para pequeñas empresas',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'PILA: medios de pago y liquidación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Definición, tipos y operadores',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Elaboración y diligenciamiento',
            hash: 't_3_2',
          },
          { numero: '3.3', titulo: 'Plazos de pago', hash: 't_3_3' },
          {
            numero: '3.4',
            titulo: 'Verificación, corrección y anulación de planillas',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Registro contable de los aportes al sistema',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Casos prácticos de liquidación en la PILA',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  complementario: [],
  glosario: [
    {
      termino: 'Clase de riesgo del SGRL',
      significado:
        'clasificación de la actividad económica de la empresa en cinco niveles según su peligrosidad. Determina la tarifa de cotización al Sistema General de Riesgos Laborales, que oscila entre 0,522 % (clase I — riesgo mínimo) y 6,960 % (clase V — riesgo máximo).',
    },
    {
      termino: 'Fondo de Solidaridad Pensional (FSP)',
      significado:
        'aporte adicional a cargo del trabajador destinado a subsidiar las pensiones de cotizantes de menores ingresos. Oscila entre el 1 % y el 2 % del IBC para trabajadores con IBC superior a 4 SMLMV.',
    },
    {
      termino: 'Ingreso Base de Cotización (IBC)',
      significado:
        'valor mensual sobre el que se aplican los porcentajes de cotización al Sistema de Seguridad Social Integral. Para trabajadores dependientes equivale al salario devengado (mínimo 1 SMLMV, máximo 25 SMLMV); para independientes corresponde al 40 % del valor mensualizado del contrato.',
    },
    {
      termino: 'Operador de Información PILA (OI)',
      significado:
        'persona jurídica autorizada por el Ministerio de Salud y Protección Social para procesar las planillas, validar la información reportada por los aportantes, distribuir los recursos entre las entidades del sistema y generar los comprobantes de pago.',
    },
    {
      termino: 'Parafiscales',
      significado:
        'aportes del empleador sobre el total de la nómina mensual destinados a la Caja de Compensación Familiar (4 %), el SENA (2 %) y el ICBF (3 %). Los aportes al SENA y al ICBF aplican únicamente para nóminas iguales o superiores a 10 SMLMV.',
    },
    {
      termino: 'Planilla Integrada de Liquidación de Aportes (PILA)',
      significado:
        'mecanismo electrónico obligatorio mediante el cual empleadores, contratantes y trabajadores independientes reportan y pagan en una sola transacción los aportes a salud, pensión, ARL y parafiscales.',
    },
    {
      termino: 'Planilla tipo E',
      significado:
        'tipo de planilla PILA utilizado por los empleadores con trabajadores dependientes vinculados mediante contrato laboral. Permite reportar todas las novedades del período: ingresos, retiros, variaciones salariales, incapacidades y licencias.',
    },
    {
      termino: 'Planilla tipo T',
      significado:
        'tipo de planilla PILA para contratistas independientes con contrato de prestación de servicios de duración igual o superior a un mes. El IBC corresponde al 40 % del valor mensualizado del contrato.',
    },
    {
      termino: 'Salario constitutivo (art. 127 CST)',
      significado:
        'todo pago que el trabajador recibe habitualmente como retribución directa del servicio, entre ellos el salario básico, las horas extras habituales, las comisiones regulares y las primas habituales.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de la República de Colombia. (1963). Ley 1 de 1963, por la cual se establece el subsidio de transporte. Diario Oficial n.° 31.014.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1993). Ley 100 de 1993, por la cual se crea el sistema de seguridad social integral y se dictan otras disposiciones. Diario Oficial N.° 41.148.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2012). Ley 1607 de 2012, por la cual se expiden normas en materia tributaria y se dictan otras disposiciones. Diario Oficial n.° 48.655.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2016). Ley 1780 de 2016, por medio de la cual se promueve el empleo y el emprendimiento juvenil y se dictan otras disposiciones. Diario Oficial n.° 49.861.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2019). Ley 1955 de 2019, por el cual se expide el plan nacional de desarrollo 2018-2022 "Pacto por Colombia, Pacto por la Equidad". Diario Oficial n.° 50.964.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud. (1999). Decreto 1406 de 1999, por el cual se adoptan unas disposiciones reglamentarias de la Ley 100 de 1993. Diario Oficial n.° 43.686.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud. (2002). Decreto 1703 de 2002, por el cual se adoptan medidas para promover y controlar la afiliación y el pago de aportes en el Sistema General de Seguridad Social en Salud. Diario Oficial n.° 44.901.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2016). Decreto 780 de 2016, por medio del cual se expide el decreto único reglamentario del sector salud y protección social. Diario Oficial n.° 49.865.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Trabajo y Seguridad Social. (2002). Decreto 1607 de 2002, por el cual se modifica la tabla de clasificación de actividades económicas para el Sistema General de Riesgos Profesionales. Diario Oficial n.° 44.892.',
      link: '',
    },
    {
      referencia:
        'Ministerio del Trabajo. (2015). Decreto 1072 de 2015, por medio del cual se expide el decreto único reglamentario del sector trabajo. Diario Oficial n.° 49.523.',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1950). Decreto-Ley 2663 de 1950, código sustantivo del trabajo. Diario Oficial n.° 27.622.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturistico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gustavo Ernesto Mariño Puentes',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gloria Lida Alzate Suárez',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
          cargo: 'Desarrollador <em>full stack</em>',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña  ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
