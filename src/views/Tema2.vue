<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Regímenes de afiliación y cotización
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1
        .row.justify-content-center.align-items-center.p-4.bgf1.mb-4
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema2/img1.svg', alt='')
          .col-lg-10
            p.mb-0 Los regímenes de afiliación al Sistema de Seguridad Social Integral determinan el marco dentro del cual el cotizante realiza sus aportes y tiene derecho a las prestaciones del sistema. Cada componente del sistema de salud, pensiones y riesgos laboralestiene sus propios regímenes, con características, porcentajes de cotización y beneficios diferenciados. El conocimiento preciso de estos regímenes es indispensable para calcular correctamente los aportes de cada cotizante y garantizar que la PILA refleje la realidad de las afiliaciones vigentes.
        p.mb-0 La determinación de los porcentajes aplicables a cada cotizante depende de múltiples variables que el profesional de nómina debe identificar con precisión antes de iniciar cualquier liquidación. Cada variable incide de manera directa en el valor de los aportes y en la distribución de la obligación entre el empleador y el trabajador. Las variables que determinan el perfil de cotización de cada cotizante son:
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema2/img2.png', alt='')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-4
          .row(titulo="El tipo de contrato") 
            p Define si el cotizante es trabajador dependiente, contratista independiente o aprendiz, y determina quién asume los aportes y sobre qué base se calculan.
            p.mb-0 #[b Ejemplo:] un trabajador dependiente comparte el aporte a salud con su empleador (8,5 % el empleador y 4 % el trabajador), mientras que un contratista independiente asume el 100 % de sus aportes.
          .row(titulo="El régimen de salud al que está afiliado") 
            p Determina la EPS que recibe los aportes y la cobertura a la que tiene derecho el cotizante y su núcleo familiar.
            p.mb-0 #[b Ejemplo:] un trabajador afiliado a Sura cotiza el 12,5 % de su IBC; el 8,5 % lo paga el empleador y el 4 % se descuenta del salario del trabajador.
          .row(titulo="El régimen pensional elegido") 
            p Define si los aportes van a Colpensiones o a una AFP privada, aunque el porcentaje de cotización del 16 % es idéntico en los dos regímenes.
            p.mb-0 #[b Ejemplo:] Carlos cotiza a Colpensiones y Lucía a Protección S.A. Los dos aportan $1.750.905 × 16 % = $280.145 si su IBC equivale al SMLMV 2026, pero el destino y la acumulación de sus recursos son completamente diferentes.
          .row(titulo="El nivel de ingresos") 
            p Determina si el cotizante debe aportar al Fondo de Solidaridad Pensional (FSP), que aplica de manera adicional para trabajadores con IBC superior a 4 SMLMV.
            p.mb-0 #[b Ejemplo:] un trabajador con IBC de $8.000.000 supera los 4 SMLMV ($7.003.620); por tanto, aporta el 1 % adicional al FSP: $8.000.000 × 1 % = $80.000 mensuales a cargo del trabajador.
          .row(titulo="La clase de riesgo asignada a la actividad económica de la empresa") 
            p Determina la tarifa de cotización al SGRL, que va desde el 0,522 % para actividades de riesgo mínimo hasta el 6,960 % para actividades de riesgo máximo.
            p.mb-0 #[b Ejemplo:] una empresa de consultoría (clase I) paga $1.750.905 × 0,522 % = $9.140 por trabajador con SMLMV. Una empresa de construcción en altura (clase V) pagaría $1.750.905 × 6,960 % = $121.863 por el mismo trabajador.
    .row.justify-content-center.align-items-center
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema2/img3.svg', alt='')
      .col-lg-9
        p Esta combinación de variables puede producir perfiles de cotización muy diferentes entre trabajadores de la misma empresa, lo que exige que el sistema de nómina esté configurado para manejar estas particularidades de manera individualizada y garantizar la precisión de cada liquidación.
        p.mb-0.p-4.bgf4 El análisis de los regímenes de cotización comienza con el Sistema General de Seguridad Social en Salud, que es el componente al que están afiliados todos los cotizantes con capacidad de pago y cuya estructura de porcentajes diferencia claramente la participación del empleador y del trabajador según el tipo de vinculación.
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.1 Régimen contributivo de salud
    p.mb-4
      | El régimen contributivo del Sistema General de Seguridad Social en Salud está dirigido a las personas con capacidad de pago, es decir, aquellas que cuentan con ingresos suficientes para contribuir al sistema y acceder a la cobertura en salud para ellas y sus beneficiarios. Este régimen diferencia el tratamiento de los aportes según el tipo de vinculación del cotizante, pues cada modalidad tiene reglas específicas sobre quién asume el aporte, sobre qué base se calcula y a qué entidad se traslada. Los cotizantes que pertenecen a este régimen son:
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img4.svg', alt='Texto que describa la imagen')
          
        h5.text-center Trabajadores dependientes  
        p.mb-0.text-center Son quienes tienen un contrato laboral vigente con un empleador. El aporte total a salud es del 12,5 % del IBC, distribuido entre el empleador (8,5 %) y el trabajador (4 %). El empleador retiene la parte del trabajador de su salario y traslada el total a la EPS a través de la PILA.
        p.mb-0.text-center Ejemplo: trabajador con IBC de $3.000.000. Empleador paga: $3.000.000 × 8,5 % = $255.000. Trabajador aporta: $3.000.000 × 4 % = $120.000. Total a la EPS: $375.000.
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img5.svg', alt='Texto que describa la imagen')
          
        h5.text-center Trabajadores independientes   
        p.mb-0.text-center Son quienes tienen contratos de prestación de servicios o ejercen su actividad de forma autónoma con ingresos iguales o superiores a un SMLMV. Asumen el 100 % del aporte a salud (12,5 %) sobre el IBC correspondiente al 40 % del valor mensualizado del contrato o sobre sus ingresos netos declarados.
        p.mb-0.text-center Ejemplo: contratista con contrato mensual de $4.000.000. IBC = $4.000.000 × 40 % = $1.600.000. Aporte total a salud: $1.600.000 × 12,5 % = $200.000, asumido íntegramente por el contratista.
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img6.svg', alt='Texto que describa la imagen')
          
        h5.text-center Pensionados  
        p.mb-0.text-center Son quienes reciben una mesada pensional y deben continuar cotizando al sistema de salud sobre el valor de su pensión. La tarifa es del 12 % de la mesada pensional, sin distribución entre empleador y trabajador, pues el pensionado asume el total del aporte.
        p.mb-0.text-center Ejemplo: pensionado con mesada de $2.500.000. Aporte a salud: $2.500.000 × 12 % = $300.000, descontados directamente de la mesada por la entidad pagadora de la pensión.
    p.mb-4
      | Los tres perfiles de cotizante comparten la misma EPS como entidad receptora de los aportes, pero difieren en la base de cotización, el porcentaje aplicable y el responsable del pago, diferencias que el profesional de nómina debe conocer con precisión para garantizar que cada planilla PILA refleje correctamente la realidad de las afiliaciones vigentes.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema2/img7.svg', alt='')
      .col-lg-9
        p.mb-0.p-4.bgf1 La cotización total en este régimen es del 12,5 % del IBC, distribuida entre el empleador (8,5 %) y el trabajador (4 %). Esta distribución significa que por cada $1.750.905 de IBC (equivalente a 1 SMLMV en 2026), el empleador debe pagar $148.827 a la EPS y el trabajador debe asumir $70.036, valor que el empleador retiene de su salario y traslada al sistema a través de la PILA.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-1.order-lg-2
        p El pago del 12,5 % da derecho al afiliado y a sus beneficiarios (cónyuge o compañero permanente e hijos menores de 18 años, o hasta 25 años si estudian y dependen económicamente del afiliado) a los servicios incluidos en el Plan de Beneficios en Salud (PBS). El PBS es el catálogo de servicios, medicamentos, procedimientos y tecnologías en salud que las EPS deben garantizar a sus afiliados, definido mediante resolución del Ministerio de Salud. Desde 2022, el PBS es igual para los regímenes contributivo y subsidiado, aunque las condiciones de acceso pueden diferir.
        .row.justify-content-center.align-items-center.p-4.bgf4.mb-4
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema2/img8.svg', alt='')
          .col-lg-10
            p.mb-0 Un aspecto técnico importante para la liquidación es la diferencia entre la cotización de los trabajadores activos y la de los pensionados. Los pensionados activos que reciben su mesada, pero continúan laborando deben cotizar a salud sobre el valor de la pensión y sobre el salario simultáneamente, pero en la práctica existe un mecanismo de coordinación entre las entidades para evitar la doble cotización. El pensionado que no trabaja cotiza únicamente sobre su mesada pensional a una tarifa del 12 %, sin distribución entre empleador y trabajador, pues no existe empleador en esa relación.
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema2/img9.png', alt='')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema2/img10.svg', alt='')
      .col-lg-9
        p.mb-0 Para los trabajadores independientes, la cotización a salud es del 12,5 % sobre el IBC (40 % de los honorarios). Como no tienen empleador, el 100 % de este porcentaje es asumido por el contratista. Por ejemplo, un contratista con honorarios mensuales de $4.000.000 tiene un IBC de $4.000.000 × 40 % = $1.600.000 y un aporte a salud de $1.600.000 × 12,5 % = $200.000, asumido íntegramente por el contratista. Para contratistas con honorarios altos, el IBC puede alcanzar el tope de 25 SMLMV ($43.772.625 en 2026) y el aporte mensual a salud sería de $43.772.625 × 12,5 % = $5.471.578. El contratista realiza este pago a través de la PILA tipo T o tipo E, según la duración del contrato.
    p.mb-4
      | La siguiente tabla presenta de manera consolidada los porcentajes de cotización al Sistema General de Seguridad Social en Salud según el tipo de cotizante, con el fin de identificar con claridad la distribución de la obligación entre el empleador y el trabajador en cada modalidad de vinculación y facilitar la aplicación correcta de los porcentajes en el proceso de liquidación de la nómina.
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Porcentajes de cotización al SGSSS según tipo de cotizante
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tabla-a.color-acento-contenido 
          .tabla-a
            table
              thead
                tr
                  th Tipo de cotizante
                  th Empleador
                  th Trabajador / Total
              tbody
                tr(style="background-color: #FBF7F1;")
                  td Trabajador dependiente con salario.
                  td 8,5% del IBC.
                  td 4% del IBC / Total: 12,5%.
                tr
                  td Trabajador independiente con contrato.
                  td 0% (no hay empleador).
                  td 12,5% sobre IBC (40% honorarios).
                tr(style="background-color: #FBF7F1;")
                  td Pensionado activo (sin trabajar).
                  td 0%.
                  td 12% sobre mesada pensional.
                tr
                  td Pensionado que trabaja simultáneamente.
                  td 8,5% sobre salario.
                  td 4% sobre salario + cotización sobre pensión.
                tr(style="background-color: #FBF7F1;")
                  td Aprendiz (fase productiva).
                  td 8,5% sobre apoyo de sostenimiento.
                  td 4% sobre apoyo de sostenimiento.
    p.mb-4
      | Establecidos los porcentajes de cotización al sistema de salud, el proceso de liquidación continúa con el cálculo de los aportes al Sistema General de Pensiones, que comparte la misma base de cotización, pero tiene una estructura de distribución propia y, para los trabajadores de ingresos más altos, un aporte adicional destinado a la solidaridad del sistema.
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.2 Regímenes pensionales: RPM y RAIS
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img11.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La cotización al Sistema General de Pensiones es del 16 % del IBC, distribuida en un 12 % a cargo del empleador y un 4 % a cargo del trabajador. El sistema colombiano ofrece dos regímenes entre los cuales el trabajador elige al momento de vincularse: el Régimen de Prima Media con Prestación Definida (RPM), administrado por Colpensiones, en el que los aportes van a un fondo común y la pensión es pagada por el Estado al cumplir los requisitos de edad y semanas cotizadas; y el Régimen de Ahorro Individual con Solidaridad (RAIS), administrado por las AFP privadas (Protección, Porvenir, Colfondos, Skandia), en el que cada afiliado acumula su propio capital en una cuenta individual y el valor de la pensión futura depende del monto acumulado.
    p.mb-4
      | Independientemente del régimen elegido, los porcentajes de cotización son idénticos, la diferencia no está en cuánto se cotiza sino en cómo se administran y acumulan los recursos para generar la futura pensión del trabajador.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .row.justify-content-center.align-items-center.p-4.bgf4
          .col-lg-3
            figure
              img(src='@/assets/curso/temas/tema2/img12.png', alt='')
          .col-lg-9
            p.mb-0 Para los trabajadores con IBC superior a 4 SMLMV, se genera un aporte adicional al Fondo de Solidaridad Pensional (FSP), que tiene como propósito subsidiar las pensiones de los trabajadores de menores ingresos que no alcanzan a cumplir los requisitos para pensionarse. Este aporte adicional es del 1 % del IBC para los trabajadores con IBC entre 4 y 16 SMLMV, y puede incrementarse progresivamente para trabajadores con IBC superior a 16 SMLMV, llegando hasta el 2 % para IBC superiores a 20 SMLMV. Este aporte es asumido íntegramente por el trabajador y se descuenta de su salario.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1
        p Para los trabajadores independientes, la cotización a pensión es del 16 % sobre el IBC (40 % de los honorarios), y el 100 % es asumido por el contratista pues no existe empleador. Este porcentaje puede resultar significativo para contratistas con honorarios medios, si los honorarios mensuales son de $5.000.000, el IBC es $2.000.000 y el aporte a pensión es $2.000.000 × 16 % = $320.000 mensuales, lo que representa el 6,4 % de los honorarios brutos. Esta carga debe considerarse en la negociación del valor de los contratos.
        p.mb-0 Una situación especial en materia pensional es la del trabajador que tiene semanas cotizadas en ambos regímenes, RPM y RAIS, como consecuencia de traslados realizados a lo largo de su vida laboral. Para gestionar correctamente esta situación, es necesario tener en cuenta los siguientes aspectos:
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema2/img13.png', alt='')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema2/img14.png', alt='')
      .col-lg-7
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Totalización de semanas")
            .col-md-12.mb-4.mb-md-0
              p Al momento de cumplir los requisitos de pensión, el trabajador puede solicitar la suma de todas las semanas cotizadas en ambos regímenes, independientemente de cuándo y en cuál de los dos las haya aportado.
          .row(numero="2" titulo="Régimen de afiliación vigente")
            .col-md-12.mb-4.mb-md-0
              p La totalización se aplica en el régimen en que el trabajador se encuentre afiliado al momento de solicitar la pensión, siempre que se cumplan las condiciones establecidas por la ley.
          .row(numero="3" titulo="Impacto en la liquidación de nómina")
            .col-md-12.mb-4.mb-md-0
              p Esta situación no afecta directamente el cálculo ni el pago de los aportes mensuales, pues los porcentajes y la base de cotización son idénticos en los dos regímenes.
          .row(numero="4" titulo="Orientación al trabajador")
            .col-md-12.mb-4.mb-md-0
              p Aunque el profesional de nómina no define la estrategia pensional del trabajador, debe estar preparado para orientar las consultas que se generen y remitir al trabajador a las entidades competentes cuando la situación lo requiera.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1
        p El conocimiento de estas particularidades del sistema pensional complementa la competencia técnica del profesional de nómina y le permite acompañar al trabajador con criterio ante situaciones que, aunque no afectan la liquidación mensual, tienen consecuencias significativas en el largo plazo.
        .row.justify-content-center.align-items-center.p-4.bgf4
          .col-lg-9.order-2.order-lg-1
            p La siguiente tabla presenta la escala progresiva de aportes al Sistema General de Pensiones y al Fondo de Solidaridad Pensional (FSP) según el rango del IBC del trabajador. Su consulta permite identificar con precisión el porcentaje total de cotización a pensión que corresponde a cada trabajador según su nivel de ingresos, así como el momento en que se activa el aporte adicional de solidaridad y el porcentaje que se incrementa a medida que aumenta el IBC.
          .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/tema2/img15.svg', alt='')
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema2/img16.png', alt='')
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Aportes al Sistema general de pensiones y al Fondo de solidaridad
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tabla-a.color-acento-contenido 
          .tabla-a
            table
              thead
                tr
                  th Rango de IBC
                  th Aporte total y distribución
              tbody
                tr(style="background-color: #FBF7F1;")
                  td Hasta 4 SMLMV.
                  td 16 % del IBC: 12 % empleador + 4 % trabajador. Sin aporte adicional al FSP.
                tr
                  td Entre 4 y 16 SMLMV.
                  td 16 % del IBC + 1% adicional del trabajador al FSP. Total, trabajador: 5%.
                tr(style="background-color: #FBF7F1;")
                  td Entre 16 y 17 SMLMV.
                  td 16 % del IBC + 1,2% adicional del trabajador al FSP.
                tr
                  td Entre 17 y 18 SMLMV.
                  td 16 % del IBC + 1,4 % adicional del trabajador al FSP.
                tr(style="background-color: #FBF7F1;")
                  td Entre 18 y 19 SMLMV.
                  td 16 % del IBC + 1,6% adicional del trabajador al FSP.
                tr
                  td Entre 19 y 20 SMLMV.
                  td 16 % del IBC + 1,8% adicional del trabajador al FSP.
                tr(style="background-color: #FBF7F1;")
                  td Más de 20 SMLMV.
                  td 16 % del IBC + 2% adicional del trabajador al FSP. Total, trabajador: 6%.
    p.mb-4
      | A diferencia de los sistemas de salud y pensiones, cuya cotización se distribuye entre el empleador y el trabajador, el Sistema General de Riesgos Laborales establece un porcentaje que recae íntegramente en el empleador y que varía según la actividad económica de la empresa, lo que exige un conocimiento preciso de la clasificación de riesgos vigente.
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.3 Sistema General de Riesgos Laborales
    p.mb-4
      | El Sistema General de Riesgos Laborales (SGRL) protege al trabajador frente a los accidentes de trabajo y las enfermedades laborales que puedan presentarse por causa o con ocasión de la actividad que desarrolla. A diferencia de la salud y la pensión, su cotización está a cargo del empleador y no se descuenta del salario del trabajador. Esta obligación exige identificar correctamente la actividad económica de la empresa, la clase de riesgo y la tarifa aplicable en la liquidación de aportes.
    .bloque-texto-gg.tarjeta.bgf5.mb-4
          .bloque-texto-gg__texto.p-4
            img(src='@/assets/curso/temas/tema2/img18.svg', style="width:70px", alt='').mb-2
            p La clasificación de riesgos laborales se determina con base en la actividad económica registrada y en la exposición a peligros propios del trabajo. Para ello, debe consultarse la tabla vigente adoptada por el Decreto 768 de 2022, norma que actualizó la clasificación de actividades económicas del SGRL y derogó el Decreto 1607 de 2002. Esta precisión es importante, porque una clasificación incorrecta puede generar aportes mal liquidados, inconsistencias en la PILA y posibles requerimientos de las entidades de control.
          .bloque-texto-gg__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img17.png')})`}"
          )
    p.mb-4
      | Para comprender la cotización al Sistema General de Riesgos Laborales, es necesario tener en cuenta tres aspectos básicos:
    .row.justify-content-center.mb-4
      .col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img19.svg' alt='AvatarTop')
          .tarjeta.bgf4.w-100
            .p-4
              h5.text-center Actividad económica
              p Corresponde a la labor principal que desarrolla la empresa y sirve como punto de partida para definir la clase de riesgo aplicable.
      .col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img20.svg' alt='AvatarTop')
          .tarjeta.bgf4.w-100
            .p-4
              h5.text-center Clase de riesgo
              p Identifica el nivel de exposición del trabajador a peligros laborales. Se organiza en cinco clases, desde riesgo mínimo hasta riesgo máximo.
      .col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img21.svg' alt='AvatarTop')
          .tarjeta.bgf4.w-100
            .p-4
              h5.text-center Tarifa de cotización
              p Es el porcentaje que se aplica sobre el Ingreso Base de Cotización (IBC) del trabajador para calcular el aporte a riesgos laborales.
    p.mb-4
      | Estos tres aspectos permiten liquidar el aporte de manera coherente con la actividad real de la empresa y con las condiciones de exposición del trabajador. Por ello, el profesional de nómina debe verificar que la clase de riesgo registrada en la Administradora de Riesgos Laborales (ARL) corresponda a la actividad económica vigente y a los centros de trabajo reportados.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        p.mb-4.p-4.bgf1
          | Las empresas con más de un centro de trabajo pueden tener diferentes clases de riesgo cuando exista una diferenciación clara en la actividad desarrollada, las instalaciones y la exposición a peligros. Esta posibilidad permite reconocer que no todos los trabajadores enfrentan el mismo nivel de riesgo, especialmente en organizaciones que combinan actividades administrativas, operativas, logísticas o productivas.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .p-4.bgf2-1
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema2/img22.svg', style="width:70px", alt='Texto que describa la imagen').mb-2
            .col-lg-12
              p.text-center.mb-0 La cotización al SGRL depende de la actividad económica, la clase de riesgo y el IBC del trabajador; por ello, su correcta clasificación evita errores en la liquidación de aportes y fortalece la prevención laboral.
    p.mb-4
      | En la siguiente tabla se presenta la clasificación general de los riesgos laborales y las tarifas iniciales de cotización aplicables según el nivel de exposición. Esta información facilita la consulta, la comparación y la identificación de la clase de riesgo que debe verificarse antes de liquidar los aportes en la planilla.
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span Clasificación de riesgos laborales y tarifas de cotización
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tabla-a.color-acento-contenido 
          .tabla-a
            table
              thead
                tr
                  th Clase de riesgo
                  th Tarifa de cotización
                  th Ejemplos de actividades
              tbody
                tr(style="background-color: #FBF7F1;")
                  td Clase I — Riesgo mínimo.
                  td 0,522%
                  td Oficinas, bancos, seguros, colegios, consultorios médicos.
                tr
                  td Clase II — Riesgo bajo.
                  td Hasta 1,044%
                  td Comercio al detal, hoteles, restaurantes, manufactura ligera.
                tr(style="background-color: #FBF7F1;")
                  td Clase III — Riesgo medio.
                  td Hasta 2,436%
                  td Industrias manufactureras, transporte, construcción liviana.
                tr
                  td Clase IV — Riesgo alto.
                  td Hasta 4,350%
                  td Industria química, minería superficial, transporte de carga.
                tr(style="background-color: #FBF7F1;")
                  td Clase V — Riesgo máximo.
                  td Hasta 6,960%
                  td Minería subterránea, manejo de explosivos, construcción en altura.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-3 
        p La tabla permite reconocer que la tarifa de riesgos laborales aumenta según el nivel de exposición de la actividad económica. Por esta razón, no basta con aplicar un porcentaje general, es necesario revisar la clasificación asignada por la ARL, validar la actividad económica y confirmar si existen centros de trabajo con riesgos diferenciados.
        .row.justify-content-center.align-items-center
          .col-lg-3.d-none.d-lg-block 
            figure
              img(src='@/assets/curso/temas/tema2/img23.svg', alt='')
          .col-lg-9
            p En la práctica, una empresa puede tener personal administrativo en clase I y personal operativo en una clase superior, siempre que la actividad, las instalaciones y la exposición al peligro estén claramente diferenciadas. Esta revisión favorece una liquidación más precisa y evita que la organización pague aportes inferiores o superiores a los que corresponden.
            p.mb-0 Una vez identificados los aportes a salud, pensión y riesgos laborales, el proceso de liquidación continúa con los aportes parafiscales. Estos no se calculan sobre el riesgo de la actividad, sino sobre la nómina del empleador, y financian servicios asociados a las cajas de compensación familiar como el SENA y el ICBF.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2 
        figure
          img(src='@/assets/curso/temas/tema2/img24.png', alt='')
    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.4 Aportes parafiscales
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1
        p Los aportes parafiscales son contribuciones obligatorias a cargo del empleador, destinadas a financiar servicios sociales, educativos y de bienestar familiar. Estos aportes se liquidan sobre la nómina mensual de salarios y se pagan mediante la Planilla Integrada de Liquidación de Aportes (PILA), junto con los demás aportes al Sistema de Seguridad Social Integral.
        p A diferencia de los aportes a salud, pensión y riesgos laborales, que se calculan sobre el Ingreso Base de Cotización (IBC) individual de cada trabajador, los aportes parafiscales tienen una base asociada a la nómina del empleador. Por esta razón, el profesional de nómina debe diferenciar la base de seguridad social y la base parafiscal antes de liquidar la planilla.
        p.mb-0 Para comprender su aplicación, se deben tener en cuenta los siguientes aportes:
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema2/img25.png', alt='')
    .row.justify-content-center.mb-4
      .col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img26.svg' alt='AvatarTop')
          .tarjeta.bgf4.w-100
            .p-4
              h5.text-center Caja de Compensación Familiar
              p Corresponde al 4 % de la nómina mensual de salarios. Este aporte es obligatorio para los empleadores con trabajadores vinculados mediante contrato laboral y financia servicios de bienestar, subsidio familiar, recreación, turismo, deporte, educación y programas sociales.
      .col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img27.svg' alt='AvatarTop')
          .tarjeta.bgf4.w-100
            .p-4
              h5.text-center Servicio Nacional de Aprendizaje (SENA)
              p Corresponde al 2 % de la nómina mensual de salarios, cuando el empleador no se encuentra cobijado por una exoneración legal. Este aporte contribuye a financiar la formación profesional integral.
      .col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img28.svg' alt='AvatarTop')
          .tarjeta.bgf4.w-100
            .p-4
              h5.text-center Instituto Colombiano de Bienestar Familiar (ICBF)
              p Corresponde al 3 % de la nómina mensual de salarios, cuando no aplica exoneración. Su finalidad es apoyar programas de atención, protección y bienestar dirigidos a la niñez, la adolescencia y las familias.
    p.mb-4
      | Estos aportes cumplen una función social dentro del sistema colombiano, pero no se aplican de manera idéntica en todos los casos. Por ello, antes de liquidarlos se debe revisar el tipo de empleador, la naturaleza del vínculo laboral, el valor devengado por cada trabajador y las exoneraciones vigentes.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .p-4.bgf2-1
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema2/img29.svg', style="width:70px", alt='Texto que describa la imagen').mb-2
            .col-lg-12
              p.text-center.mb-0 La liquidación de parafiscales exige diferenciar la base de seguridad social y la base parafiscal, porque cada una responde a reglas y finalidades distintas dentro del sistema de aportes.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.png', alt='Imagen decorativa')
      h5 Exoneración aplicable
    p.mb-4
      | De acuerdo con el artículo 114-1 del Estatuto Tributario, los empleadores que cumplan las condiciones legales pueden estar exonerados del pago de aportes al SENA, al ICBF y de la cotización patronal a salud respecto de trabajadores que devenguen menos de 10 SMMLV. Esta exoneración no elimina el aporte a la Caja de Compensación Familiar, que se mantiene como obligación del empleador.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .row.justify-content-center.align-items-center.p-4.bgf4
          .col-lg-3.col-8.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema2/img30.svg', alt='')
          .col-lg-9
            p
              b Ejemplo práctico de aportes parafiscales
            p.mb-0 Una empresa tiene un trabajador con salario mensual de $2.000.000 y cumple las condiciones legales para aplicar la exoneración. En este caso, el empleador debe liquidar el 4 % correspondiente a la Caja de Compensación Familiar: $2.000.000 × 4 % = $80.000. Si la exoneración aplica, no liquida SENA, ICBF ni el aporte patronal a salud por ese trabajador. Si no aplica, debe calcular también el 2 % para SENA, el 3 % para ICBF y la parte patronal de salud.
    p.mb-4
      | Este ejemplo permite reconocer que la liquidación de parafiscales no debe realizarse de forma automática, sino mediante una revisión previa de la base salarial, las condiciones del empleador y el valor devengado por cada trabajador. Una aplicación incorrecta de la exoneración puede generar diferencias en la PILA, requerimientos de la UGPP e intereses moratorios; por ello, el profesional de nómina debe validar cada caso con criterio normativo y conservar los soportes que respalden la liquidación.
    p.mb-4
      | Para reducir estos riesgos, es necesario aplicar controles antes de transmitir y pagar la planilla. Estos controles permiten verificar la coherencia entre la nómina, la base parafiscal, las exoneraciones aplicadas y los valores reportados en la PILA.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.png', alt='Imagen decorativa')
      h5 Controles para la liquidación
    p.mb-4
      | Los controles para la liquidación son verificaciones previas que permiten revisar la coherencia entre la nómina, la base parafiscal, las exoneraciones aplicadas y los valores registrados en la PILA. Su aplicación ayuda a prevenir errores de cálculo, pagos indebidos, subdeclaraciones y posibles requerimientos de la UGPP.
    p.mb-4
      | Para evitar inconsistencias en la planilla, el área de nómina debe aplicar controles básicos en cada período:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .p-4.bgfI01
          ul.lista-ul
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0
                b Verificar la base parafiscal: 
                | revisar que la nómina mensual de salarios coincida con los conceptos que deben integrar la base de liquidación.
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0
                b Confirmar la exoneración: 
                | validar si el empleador cumple las condiciones legales para aplicar el beneficio.
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0
                b Revisar el salario individual: 
                | comprobar si cada trabajador devenga menos de 10 SMMLV antes de aplicar la exoneración.
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0
                b Conservar soportes: 
                | guardar nómina, comprobantes de pago, planillas y documentos que respalden la base liquidada.
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0
                b Conciliar la PILA: 
                | comparar los valores liquidados en el sistema de nómina con los registrados en la planilla antes del pago.
    p.mb-4
      | Estos controles permiten reducir errores entre la nómina, la PILA y los registros contables. Además, fortalecen la trazabilidad del proceso y facilitan la respuesta ante una revisión de la UGPP.
    .row.justify-content-center.align-items-center
      .col-lg-10
        .row.justify-content-center.align-items-center.p-4.bgf4
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema2/img32.svg', alt='')
          .col-lg-10
            p.mb-0 El conocimiento de los aportes parafiscales debe complementarse con el análisis de las exoneraciones previstas por la ley para determinados empleadores y trabajadores. Esta revisión permite aplicar los beneficios de forma correcta, evitar pagos indebidos y prevenir sanciones por el uso inadecuado de exoneraciones. Por ello, el siguiente subtema profundiza en las condiciones que deben verificarse antes de aplicar estos beneficios en la liquidación de la nómina.
    Separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.5 Exoneraciones para pequeñas empresas
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1
        p El marco legal colombiano contempla exoneraciones y beneficios en materia de aportes a seguridad social y parafiscales, con el propósito de reducir algunas cargas laborales y promover la formalización del empleo. Su aplicación exige una revisión cuidadosa, porque no todos los empleadores ni todos los trabajadores cumplen las condiciones para acceder a estos beneficios.
        p.mb-0.p-4.bgf1 De acuerdo con la normativa vigente, las exoneraciones deben analizarse según el tipo de empleador, el valor devengado por cada trabajador y el aporte que se pretende excluir de la liquidación. Por ello, el profesional de nómina debe verificar los requisitos antes de aplicar cualquier beneficio en la Planilla Integrada de Liquidación de Aportes (PILA), ya que una aplicación incorrecta puede generar diferencias, intereses moratorios y requerimientos de fiscalización.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2 
        figure
          img(src='@/assets/curso/temas/tema2/img33.png', alt='')
    p.mb-4
      | Para comprender mejor este tema, es necesario diferenciar dos tipos de beneficios:
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img34.svg', alt='Texto que describa la imagen')
          
        h5.text-center Exoneración general de aportes:   
        p.mb-0.text-center aplica a determinados empleadores respecto de trabajadores que devenguen, individualmente considerados, menos de 10 SMLMV. Cuando se cumplen los requisitos legales, puede excluirse el pago de aportes al SENA, al ICBF y la cotización patronal a salud, según el artículo 114-1 del Estatuto Tributario.
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img35.svg', alt='Texto que describa la imagen')
          
        h5.text-center Beneficios asociados al empleo joven: 
        p.mb-0.text-center corresponden a incentivos previstos para promover la vinculación laboral de jóvenes y la creación de empresas jóvenes. Su aplicación exige revisar los requisitos específicos de la Ley 1780 de 2016 y la reglamentación vigente.
    p.mb-4
      | Estas dos figuras no deben confundirse, porque responden a finalidades y condiciones distintas. La primera se relaciona con la estructura tributaria y parafiscal del empleador; la segunda busca incentivar la generación de empleo juvenil y el emprendimiento. En ambos casos, la aplicación del beneficio debe estar soportada con documentos verificables.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .p-4.bgf2-1
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema2/img36.svg', style="width:70px", alt='Texto que describa la imagen').mb-2
            .col-lg-12
              p.text-center.mb-0 Las exoneraciones reducen algunos aportes, pero no eliminan la obligación de verificar la base de liquidación, conservar soportes y reportar correctamente la información en la PILA.
    .row.justify-content-center.align-items-center.bgfI02.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema2/img37.svg', alt='')
      .col-lg-9
        p
          b Ejemplo aplicado: 
          | validación de una exoneración
        p.mb-0
          | Una empresa declarante del impuesto sobre la renta tiene un trabajador con salario mensual de $2.000.000. Si cumple las condiciones legales del artículo 114-1 del Estatuto Tributario, no liquida aportes al SENA, al ICBF ni la cotización patronal a salud por ese trabajador, porque su salario individual es inferior a 10 SMLMV. Sin embargo, debe mantener los aportes que no estén cobijados por la exoneración, como los correspondientes a pensión, riesgos laborales y Caja de Compensación Familiar, según aplique.
    p.mb-4
      | Este ejemplo muestra que la exoneración no se aplica de forma automática ni general a toda la nómina. Antes de usarla, se debe revisar el tipo de empleador, el ingreso individual del trabajador y el aporte específico que se pretende excluir. Esta verificación protege a la organización frente a inconsistencias en la liquidación y posibles revisiones de la UGPP.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.png', alt='Imagen decorativa')
      h5 Controles para aplicar exoneraciones
    p.mb-4
      | Los controles para aplicar exoneraciones son verificaciones previas que permiten confirmar si el empleador y el trabajador cumplen las condiciones legales del beneficio. Su aplicación ayuda a evitar pagos omitidos, liquidaciones incompletas y sanciones derivadas de una interpretación incorrecta de la norma.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .p-4.bgfI01
          ul.lista-ul
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0
                b Verificar el tipo de empleador: 
                | confirmar si la empresa o entidad cumple las condiciones legales para aplicar la exoneración.
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0
                b Revisar el salario individual: 
                | comprobar si cada trabajador devenga menos de 10 SMLMV antes de excluir aportes al SENA, al ICBF o salud patronal.
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0
                b Identificar el aporte exonerado: 
                | diferenciar si el beneficio aplica a SENA, ICBF, salud patronal o Caja de Compensación Familiar, según la norma correspondiente.
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0
                b Conservar soportes: 
                | guardar nómina, planillas, comprobantes, contratos y documentos que demuestren el cumplimiento de los requisitos.
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0
                | Conciliar la PILA:verificar que los valores liquidados en la planilla coincidan con la nómina, la contabilidad y las exoneraciones aplicadas.
    .row.justify-content-center.align-items-center
      .col-lg-6.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema2/img38.png', alt='')
      .col-lg-6
        p La aplicación de estos controles permite que las exoneraciones se usen como un beneficio legal y no como una omisión de aportes. Por esta razón, el área de nómina debe documentar cada decisión y revisar periódicamente si las condiciones que dieron origen al beneficio se mantienen vigentes.
        p.mb-0
          | Una vez determinados el IBC, los porcentajes aplicables, los aportes parafiscales y las exoneraciones procedentes, el proceso de liquidación avanza hacia su etapa operativa, el registro, la transmisión y el pago de la información mediante la Planilla Integrada de Liquidación de Aportes (PILA). Este paso exige seleccionar el tipo de planilla adecuado, registrar las novedades del período y validar los valores antes de realizar el pago.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({}),
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
