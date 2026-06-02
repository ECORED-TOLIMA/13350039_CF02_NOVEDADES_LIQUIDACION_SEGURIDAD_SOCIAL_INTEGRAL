<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 PILA: medios de pago y liquidación
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img1.png', alt='')
      .col-lg-9
        p El proceso de liquidación y pago de los aportes al Sistema de Seguridad Social Integral culmina con el registro, la validación, la transmisión y el pago de la información mediante la Planilla Integrada de Liquidación de Aportes (PILA). Este mecanismo permite reportar en una sola transacción los aportes a salud, pensión, riesgos laborales y parafiscales, para que los recursos sean distribuidos a las entidades administradoras correspondientes.
        .row.justify-content-center.align-items-center.p-4.bgf1
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema3/img2.svg', alt='')
          .col-lg-10
            p.mb-0 La PILA integra la información de empleadores, trabajadores dependientes, contratistas e independientes, por lo que exige una revisión previa de los datos registrados en la nómina. Antes de transmitir la planilla, el profesional responsable debe verificar el tipo de cotizante, el Ingreso Base de Cotización (IBC), las novedades del período, los porcentajes aplicables y las entidades a las que se dirigirán los aportes.
    p.mb-4
      | Para evitar errores en la liquidación, el profesional de nómina debe aplicar controles antes de transmitir la planilla. Estos controles permiten revisar la consistencia entre los valores calculados internamente, los datos cargados en el operador y los aportes que finalmente serán pagados a las entidades del sistema.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .p-4.bgfI01
          ul.lista-ul
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0
                b Verificar el IBC: 
                | revisar que la base reportada corresponda al salario, honorarios o período cotizado de cada trabajador o contratista.
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0
                b Confirmar las novedades: 
                | validar ingresos, retiros, incapacidades, licencias, variaciones salariales y demás eventos del período.
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0
                b Revisar entidades afiliadas: 
                | comprobar que EPS, AFP, ARL y caja de compensación correspondan a la afiliación vigente.
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0
                b Comparar valores: 
                | contrastar los aportes calculados en nómina con los generados por el operador de información.
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0
                b Conservar soportes: 
                | guardar comprobantes, planillas, reportes de novedades y documentos que respalden la liquidación.
    .row.justify-content-center
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img3.svg', alt='')
      .col-lg-8
        p La aplicación de estos controles reduce inconsistencias, facilita la corrección oportuna de errores y fortalece la trazabilidad del proceso. Además, permite responder de manera ordenada ante revisiones internas, auditorías o requerimientos de entidades de control.
        p.mb-0
          | Una vez comprendida la función general de la PILA dentro del proceso de liquidación, es necesario revisar su definición, los tipos de planilla y los operadores autorizados. Esta información permite seleccionar el mecanismo adecuado según el tipo de cotizante, la naturaleza del vínculo y la obligación que debe reportarse en cada período.
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.1 Definición, tipos y operadores
    .row.justify-content-center.mb-4
      .col-lg-8.order-2.order-lg-1
        p La Planilla Integrada de Liquidación de Aportes (PILA) es el mecanismo electrónico mediante el cual los aportantes reportan y pagan los aportes al Sistema de Seguridad Social Integral y a los aportes parafiscales, cuando correspondan. A través de este medio se integran, en una sola transacción, los pagos destinados a salud, pensión, riesgos laborales, cajas de compensación familiar, SENA e ICBF.
        p.mb-0 Este mecanismo fue creado para simplificar y unificar el pago de aportes, evitando que cada obligación se gestionara por separado ante diferentes entidades. Por ello, la PILA cumple una función técnica y administrativa: permite liquidar, validar, pagar y dejar trazabilidad del cumplimiento de las obligaciones del aportante frente al sistema.
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema3/img4.png', alt='')
    p.mb-4 Para comprender su funcionamiento, es necesario identificar los actores que intervienen en el proceso:
    .BG02.px-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-10
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-4
            .row(titulo="Aportante") 
              p.mb-0
                | persona natural o jurídica responsable de reportar y pagar los aportes. Puede ser un empleador, un trabajador independiente, un contratante o un cotizante voluntario.
            .row(titulo="Operador de información PILA") 
              p.mb-4
                | persona jurídica autorizada para procesar la planilla, validar la información registrada, generar el comprobante de pago y distribuir los recursos a las entidades correspondientes.
            .row(titulo="Entidades administradoras") 
              p.mb-4
                | instituciones que reciben los aportes, como EPS, AFP, ARL, cajas de compensación familiar, SENA e ICBF, según el tipo de cotizante y la obligación reportada.
            .row(titulo="Entidades de control") 
              p.mb-4
                | organismos que verifican el cumplimiento de las obligaciones, entre ellos la Unidad de Gestión Pensional y Parafiscal (UGPP), que puede revisar inconsistencias, omisiones o diferencias en los aportes.
     
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.order-2.order-lg-1
        p Estos actores permiten que la información registrada en la planilla llegue a las entidades del sistema de forma organizada y trazable. Por esta razón, el profesional de nómina debe revisar que los datos cargados sean coherentes con la nómina, los contratos, las novedades y los soportes del período.
        p.mb-0.p-4.bgf1
          b El proceso de transmisión puede realizarse mediante dos modalidades: 
          | planilla asistida y planilla electrónica. La primera se diligencia con apoyo del operador, especialmente cuando el aportante requiere acompañamiento en el registro de la información. La segunda permite cargar archivos desde el sistema de nómina, por lo que se utiliza con frecuencia en empresas que manejan un mayor volumen de trabajadores y novedades.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema3/img5.svg', alt='')
    p.mb-4
      | Antes de enviar la planilla al operador de información, se deben revisar los siguientes aspectos:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .p-4.bgf1.mb-4
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span A
              p.mb-0
                b Tipo de cotizante: 
                | permite identificar si se trata de trabajador dependiente, independiente, contratista, pensionado, aprendiz u otro perfil reconocido por el sistema.
            li 
              .lista-ol--cuadro__vineta
                span B
              p.mb-0
                b Tipo de planilla: 
                | define el formato que debe usarse según la obligación que se va a reportar, como empleador, independiente, corrección o anulación.
            li 
              .lista-ol--cuadro__vineta
                span C
              p.mb-0
                b IBC reportado: 
                | corresponde a la base sobre la cual se calculan los aportes y debe coincidir con la realidad salarial o contractual del período.
            li 
              .lista-ol--cuadro__vineta
                span D
              p.mb-0
                b Novedades del período: 
                | incluyen ingresos, retiros, variaciones salariales, incapacidades, licencias, suspensiones u otros eventos que modifican la cotización.
            li 
              .lista-ol--cuadro__vineta
                span F
              p.mb-0
                b Entidades receptoras: 
                | corresponden a la EPS, AFP, ARL, caja de compensación familiar y demás entidades a las que se trasladan los aportes.
    p.mb-4
      | La revisión de estos aspectos reduce errores antes del pago y facilita la corrección oportuna de inconsistencias. En consecuencia, la PILA debe entenderse como una herramienta de liquidación, control y soporte documental dentro de la gestión de nómina.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.png', alt='Imagen decorativa')
      h5 Tipos de planilla PILA
    p.mb-4
      | La PILA cuenta con diferentes tipos de planilla, definidos según las características del aportante, el cotizante y la obligación que se reporta. Seleccionar el tipo correcto es fundamental, porque un error puede afectar la distribución de los recursos, el registro de novedades y la actualización de la historia de aportes del trabajador o contratista.
    p.mb-4
      | Para facilitar su comprensión, se presentan los tipos de planilla más utilizados en la gestión de nómina y seguridad social:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img6.svg', alt='')
      .col-lg-7
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Planilla tipo E — Empleador")
            .col-md-12.mb-4.mb-md-0
              p.mb-0
                | aplica para empleadores con trabajadores dependientes vinculados mediante contrato laboral. Permite reportar el IBC, las entidades de afiliación, los aportes y las novedades del período.
          .row(numero="2" titulo="Planilla tipo T — Independiente con contrato")
            .col-md-12.mb-4.mb-md-0
              p.mb-0
                | se utiliza para contratistas independientes con contrato de prestación de servicios. En esta modalidad, el IBC corresponde al 40 % del valor mensualizado del contrato, respetando los topes legales.
          .row(numero="3" titulo="Planilla tipo Y — Independiente sin contrato")
            .col-md-12.mb-4.mb-md-0
              p.mb-0
                | aplica para trabajadores independientes que no tienen contrato de prestación de servicios, como rentistas, comerciantes o profesionales que ejercen su actividad de manera autónoma.
          .row(numero="4" titulo="Planilla tipo X — Cotizante voluntario")
            .col-md-12.mb-4.mb-md-0
              p.mb-0
                | se utiliza cuando una persona sin vínculo laboral busca mantener la cobertura en salud de forma voluntaria, de acuerdo con las condiciones permitidas por el sistema.
          .row(numero="5" titulo="Planilla tipo N — Empleador nuevo")
            .col-md-12.mb-4.mb-md-0
              p.mb-0
                | aplica para empleadores que realizan su primer pago y aún no cuentan con historial previo en el sistema.
          .row(numero="6" titulo="Planilla tipo A — Corrección")
            .col-md-12.mb-4.mb-md-0
              p.mb-0
                | permite ajustar información de planillas ya transmitidas, cuando se detectan errores en el IBC, las novedades, los datos del cotizante o los valores liquidados.
          .row(numero="7" titulo="Planilla de anulación")
            .col-md-12.mb-4.mb-md-0
              p.mb-4
                | se usa para dejar sin efecto una planilla incorrecta, siempre que el caso cumpla las condiciones y los plazos definidos por el operador y la normativa aplicable.
    .BG06.px-5
      p.mb-4
        | Estas planillas permiten atender diferentes situaciones de pago y corrección. Por ello, antes de seleccionar una opción, el profesional de nómina debe verificar el tipo de vinculación, la obligación que se reporta y las instrucciones vigentes del operador de información.
      p.mb-4
        | Con el propósito de profundizar en el funcionamiento de los mecanismos de pago de aportes al Sistema de Seguridad Social Integral, se propone el siguiente recurso de audio sobre los tipos de planilla PILA y su correcta selección según el vínculo del cotizante. Este material aborda, de manera clara y contextualizada, las diferencias entre cada tipo de planilla, las situaciones en que aplica cada una y los procedimientos disponibles para corregir o anular una planilla cuando se detectan errores en la información transmitida al sistema.
      
      .row.justify-content-center.mb-4
        .col-lg-10
          figure
            img(src='@/assets/curso/temas/tema3/img7.svg', alt='')
          .tarjeta.p-4(style="background-color:#F9CE5D; border-radius: 0 0 20px 20px;")
            .tarjeta.bg-white.p-4.custom-audio-card
              TarjetaAudio.color-acento-botones(
                texto="POSTCAT"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
    p.mb-0
      | Una vez identificados los tipos de planilla y los actores que intervienen en el proceso, el siguiente paso consiste en revisar cómo se elabora y diligencia la PILA. Este procedimiento exige verificar la nómina del período, calcular el IBC, registrar las novedades, validar los aportes y confirmar que la información transmitida sea completa, correcta y oportuna.
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.2 Elaboración y diligenciamiento
    p.mb-4
      | La elaboración y el diligenciamiento de la Planilla Integrada de Liquidación de Aportes (PILA) constituyen una etapa operativa clave en la gestión de nómina. En este proceso se registra la información del período, se calculan los aportes, se validan los datos y se realiza el pago mediante el operador de información. Por esta razón, cada dato ingresado debe corresponder con la nómina, las afiliaciones, las novedades y los soportes del período.
    p.mb-4
      | Este procedimiento exige una revisión ordenada antes del envío de la planilla al operador de información. Para ello, el profesional de nómina debe confirmar que:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .p-4.bgfI01
          ul.lista-ul
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0
                | Los trabajadores activos estén incluidos en la planilla del período.
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0
                | Los ingresos y retiros estén reportados con la fecha correcta.
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0
                | El Ingreso Base de Cotización (IBC) corresponda al período cotizado.
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0
                | Las novedades del período estén registradas con el código correspondiente.
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0
                | Las entidades administradoras se encuentren vigentes.
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0
                | Los valores liquidados coincidan con los cálculos internos de nómina.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img8.svg', alt='')
      .col-lg-9
        p Esta verificación reduce errores de liquidación y evita inconsistencias ante las entidades del sistema. Además, permite revisar la información antes del pago y conservar soportes claros frente a posibles auditorías o requerimientos de la Unidad de Gestión Pensional y Parafiscal (UGPP).
        p.mb-0
          | Para elaborar correctamente la planilla, se recomienda seguir una revisión que permita controlar la información antes del pago. Esta organización facilita la trazabilidad del proceso y reduce el riesgo de inconsistencias entre la nómina, el operador de información, las entidades administradorasy la validación de los siguientes aspectos:
    SlyderF(columnas="col-lg-6 col-xl-4").mb-4
      .tarjeta.p-4.BG04
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema3/img9.svg' alt='AvatarTop')
        h5.text-center Verificar la nómina del período
        p.text-center Confirmar que la información registrada corresponda con los trabajadores activos, los salarios pagados y las novedades reportadas.
      .tarjeta.p-4.BG04
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema3/img10.svg' alt='AvatarTop')
        h5.text-center Determinar el IBC individual
        p.text-center Calcular la base de cotización según el salario, los días cotizados, el tipo de vinculación y las novedades del período.
      .tarjeta.p-4.BG04
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema3/img11.svg' alt='AvatarTop')
        h5.text-center Aplicar los porcentajes de cotización
        p.text-center Liquidar los aportes a salud, pensión, riesgos laborales y parafiscales, de acuerdo con el tipo de cotizante y las reglas vigentes.
      .tarjeta.p-4.BG04
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema3/img11_2.svg' alt='AvatarTop')
        h5.text-center Registrar la información en el operador
        p.text-center Ingresar los datos en la plataforma o cargar el archivo generado desde el sistema de nómina.
      .tarjeta.p-4.BG04
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema3/img11_3.svg' alt='AvatarTop')
        h5.text-center Validar los datos antes del pago
        p.text-center Revisar identificaciones, entidades administradoras, valores liquidados, topes del IBC y códigos de novedad.
      .tarjeta.p-4.BG04
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema3/img11_4.svg' alt='AvatarTop')
        h5.text-center Conservar los soportes
        p.text-center Guardar la planilla pagada, el comprobante de pago, la nómina liquidada y los documentos que respalden las novedades del período.
    p.mb-4
      | Esta secuencia permite que la elaboración de la PILA sea un proceso ordenado, verificable y documentado. Además, facilita la detección de errores antes del pago y fortalece la capacidad de respuesta de la organización ante auditorías internas o requerimientos de la Unidad de Gestión Pensional y Parafiscal (UGPP).
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .p-4.bgf2-1
          .row.justify-content-center.align-items-center
            .col-lg-1.d-none.d-lg-block.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema3/img12.svg', style="width:70px", alt='Texto que describa la imagen').mb-2
            .col-lg-12
              p.text-center.mb-0 Una planilla bien elaborada no depende solo del cálculo de aportes; requiere verificar la nómina, el IBC, las novedades y las entidades administradoras antes del pago.
    p.mb-4 Durante el registro de la información, el operador realiza validaciones automáticas sobre los datos cargados. Estas revisiones pueden alertar sobre documentos de identidad incorrectos, entidades no vigentes, IBC fuera de los topes permitidos o novedades incompatibles con el período reportado. Si se presentan alertas, deben corregirse antes de confirmar el pago.
    .row.justify-content-center.align-items-center
      .col-lg-10
        .row.justify-content-center.align-items-center.p-4.bgf4.mb-4
          .col-lg-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema3/img13.svg', alt='')
          .col-lg-9
            p.text-bold Ejemplo aplicado: validación antes del pago
            p Una empresa carga la planilla del mes y el operador advierte que un trabajador aparece afiliado a una EPS diferente de la registrada en la nómina. Antes de pagar, el profesional de nómina debe verificar el soporte de afiliación, corregir la entidad si corresponde y comparar nuevamente los valores liquidados. Esta revisión evita inconsistencias en la historia de aportes del trabajador.
            p La verificación final consiste en comparar el valor total calculado por el sistema de nómina con el valor generado por el operador de información. Si existe una diferencia, se debe revisar su causa antes del pago, porque puede deberse a un IBC mal calculado, una novedad omitida, una entidad incorrecta o una configuración distinta entre los sistemas.
            p.mb-0 Una vez revisada, validada y pagada la planilla dentro del plazo correspondiente, el comprobante generado por el operador se convierte en soporte del cumplimiento. Este documento debe conservarse junto con la nómina, los reportes de novedades y la conciliación de valores, ya que puede ser requerido en procesos de auditoría o fiscalización.
    p.mb-0
      | La elaboración correcta de la PILA permite registrar la información del período con precisión; sin embargo, este proceso solo se completa cuando el pago se realiza dentro de los plazos establecidos. Por ello, el siguiente subtema aborda las fechas límite de pago, los criterios para determinar el vencimiento y las consecuencias del pago extemporáneo de aportes.
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.3 Plazos de pago
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1
        p Los plazos de pago de la Planilla Integrada de Liquidación de Aportes (PILA) establecen la fecha límite en la que el aportante debe liquidar y pagar los aportes al Sistema de Seguridad Social Integral y los aportes parafiscales, cuando correspondan. Estos vencimientos se determinan según los dos últimos dígitos del NIT o del documento de identificación del aportante, sin incluir el dígito de verificación en el caso de las personas jurídicas.
        .row.justify-content-center.p-4.bgf4
          .col-lg-1.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema3/img14.svg', alt='')
          .col-lg-11
            p.mb-0
              | El cumplimiento oportuno de estos plazos es fundamental para evitar intereses moratorios, inconsistencias en la historia de aportes y posibles requerimientos de las entidades de control. Por esta razón, el profesional de nómina debe consultar el calendario vigente, verificar la fecha límite aplicable y programar el pago con anticipación, especialmente cuando existan cierres contables, festivos o novedades que requieran revisión adicional.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema3/img15.svg', alt='')
    p.mb-4
      | Para gestionar correctamente los plazos de pago, se deben tener en cuenta los siguientes aspectos:
    .row.justify-content-center.mb-4
      .col-lg-10
        .row.justify-content-center
          .col-lg-8.p-0
            .bgf1.p-3
              p.mb-0
                b Identificar al aportante: 
                | verificar si el pago corresponde a una empresa, una persona natural, un independiente o un contratante.
            .bgf4.p-3
              p.mb-0
                b Revisar los dos últimos dígitos: 
                | tomar los dos últimos dígitos del NIT o documento de identificación para ubicar el día hábil de vencimiento.
            .bgf1.p-3
              p.mb-0
                b Confirmar el período de liquidación: 
                | validar que la planilla corresponda al mes que se está pagando.
            .bgf4.p-3
              p.mb-2
                b Consultar el calendario: 
                | revisar si el vencimiento coincide con fines de semana o festivos, para programar el pago en el día hábil correspondiente.
            .bgf1.p-3
              p.mb-1
                b Conservar el comprobante: 
                | guardar el soporte emitido por el operador, ya que certifica la fecha y hora del pago realizado.
          .col-lg-4.p-0.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema3/img16.png', alt='')
    p.mb-4
      | Estos controles permiten que el pago de la PILA se realice dentro del plazo establecido y con información verificable. Además, facilitan la trazabilidad del proceso y reducen el riesgo de pagos extemporáneos, errores de período o diferencias frente a los valores liquidados.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .p-4.bgf2-1
          .row.justify-content-center.align-items-center
            .col-lg-1.d-none.d-lg-block.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema3/img17.svg', style="width:70px", alt='Texto que describa la imagen').mb-2
            .col-lg-12
              p.text-center.mb-0 El pago oportuno de la PILA evita intereses de mora, protege la historia de aportes del trabajador y demuestra el cumplimiento de las obligaciones del aportante.
    .row.justify-content-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img18.png', alt='')
      .col-lg-9
        p.p-4.bgf3 El pago anticipado de la PILA es una práctica preventiva que ayuda a evitar incumplimientos por fallas técnicas, errores de validación o interrupciones bancarias. Cuando la nómina del período ya está cerrada y los valores han sido revisados, el aportante puede realizar el pago antes de la fecha límite y conservar el comprobante como evidencia del cumplimiento.
        p.mb-0
          | En la siguiente tabla se presentan los plazos generales de pago de la PILA, definidos según los dos últimos dígitos del NIT o documento de identificación del aportante, de acuerdo con el Decreto 1990 de 2016. Esta información permite consultar el día hábil de vencimiento y planificar el pago oportuno de los aportes al Sistema de Seguridad Social Integral y parafiscales.
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6.
          span Plazos de pago de la PILA según identificación del aportante
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tabla-a.color-acento-contenido.mb-4
          .tabla-a
            table
              thead
                tr
                  th Dos últimos dígitos del NIT o documento de identidad
                  th Día hábil máximo de pago
              tbody
                tr(style="background-color: #FBF7F1;")
                  td 00 al 07
                  td Segundo día hábil.
                tr
                  td 08 al 14
                  td Tercer día hábil.
                tr(style="background-color: #FBF7F1;")
                  td 15 al 21
                  td Cuarto día hábil.
                tr
                  td 22 al 28
                  td Quinto día hábil.
                tr(style="background-color: #FBF7F1;")
                  td 29 al 35
                  td Sexto día hábil.
                tr
                  td 36 al 42
                  td Séptimo día hábil.
                tr(style="background-color: #FBF7F1;")
                  td 43 al 49
                  td Octavo día hábil.
                tr
                  td 50 al 56
                  td Noveno día hábil.
                tr(style="background-color: #FBF7F1;")
                  td 57 al 63
                  td Décimo día hábil.
                tr
                  td 64 al 69
                  td Undécimo día hábil.
                tr(style="background-color: #FBF7F1;")
                  td 70 al 75
                  td Duodécimo día hábil.
                tr
                  td 76 al 81
                  td Decimotercer día hábil.
                tr(style="background-color: #FBF7F1;")
                  td 82 al 87
                  td Decimocuarto día hábil.
                tr
                  td 88 al 93
                  td Decimoquinto día hábil.
                tr(style="background-color: #FBF7F1;")
                  td 94 al 99
                  td Decimosexto día hábil.
        p.mb-0.p-4.bgf4
          | Nota. Información tomada del Decreto 1990 de 2016, por el cual se modifican los artículos 3.2.1 y 3.2.2 del Decreto 780 de 2016 y se fijan plazos y condiciones para la autoliquidación y pago de los aportes al Sistema de Seguridad Social Integral y parafiscales. Para personas jurídicas, se toman los dos últimos dígitos del NIT sin incluir el dígito de verificación.
    p.mb-4
      | La información presentada permite identificar el día hábil máximo para realizar el pago de la PILA según la identificación del aportante. Esta consulta facilita la planeación del proceso de nómina, reduce el riesgo de pagos extemporáneos y ayuda a conservar la evidencia del cumplimiento ante posibles revisiones de las entidades de control.
    p.mb-4
      | Además de conocer el plazo de pago, es necesario verificar que la planilla haya sido elaborada con datos correctos antes de enviarla al operador de información. Si después del envío se detectan errores en el IBC, las novedades, el período o las entidades administradoras, deben aplicarse los procedimientos de verificación, corrección o anulación correspondientes.
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.4 Verificación, corrección y anulación de planillas
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1
        p Aunque la planilla se elabore con controles previos, puede ocurrir que, después del envío al operador de información, se identifiquen errores en los datos reportados. Estos errores pueden estar relacionados con el Ingreso Base de Cotización (IBC), las novedades del período, la entidad administradora, el tipo de cotizante, el período de liquidación o los datos de identificación del aportante o del trabajador.
        p Por esta razón, el profesional de nómina debe conocer los mecanismos de verificación, corrección y anulación de planillas. Su aplicación permite ajustar la información cuando sea necesario, evitar que las inconsistencias se acumulen en períodos posteriores y conservar la trazabilidad del proceso ante posibles revisiones de las entidades de control.
        p.mb-0
          | Para comprender este procedimiento, es necesario diferenciar tres acciones:
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img(src='@/assets/curso/temas/tema3/img19.svg', alt='')
    .row.justify-content-center.mb-4
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img20.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Verificación de la planilla
            p.mb-0 Consiste en revisar la información enviada o pagada para confirmar si coincide con la nómina, los soportes del período, las novedades, las entidades administradoras y los valores liquidados.
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img21.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Corrección de la planilla
            p.mb-0 Aplica cuando se detectan errores que pueden ajustarse sin cancelar completamente la planilla, como un IBC incorrecto, una novedad mal registrada, una entidad equivocada o un trabajador omitido.
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img22.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Anulación de la planilla
            p.mb-0 Procede en situaciones excepcionales, cuando la planilla contiene errores que afectan elementos fundamentales y no pueden corregirse de manera parcial, como el período de liquidación o la identificación del aportante.
    p.mb-4
      | Estas acciones no deben realizarse de forma improvisada. Antes de corregir o anular una planilla, se debe consultar el estado del pago en la plataforma del operador, identificar el tipo de error, revisar los soportes y confirmar el procedimiento aplicable para evitar nuevos registros incorrectos.
    .row.justify-content-center.mb-4
      .col-lg-10
        p.mb-0.p-4.bgf4
          | La corrección o anulación de una planilla debe realizarse con soporte documental, revisión previa y trazabilidad, para evitar nuevos errores en la historia de aportes.
    .bloque-texto-gg.tarjeta.bgfI01.mb-4
          .bloque-texto-gg__texto.p-4
            p La corrección de una planilla puede generar diferencias a favor o en contra del aportante. Cuando el valor pagado fue inferior al correcto, puede requerirse el pago de aportes adicionales e intereses moratorios, según el caso. Si el valor fue superior, el ajuste debe gestionarse conforme al procedimiento definido por el operador de información y las entidades administradoras.
            p.mb-0
              | Una situación frecuente es la duplicidad de un trabajador en la planilla. Este error puede generar doble descuento al trabajador o doble pago al sistema, lo que dificulta la conciliación posterior. Por ello, antes de aplicar cualquier ajuste, es necesario revisar la planilla original, validar si ya fue pagada y confirmar con el operador el procedimiento más adecuado.
          .bloque-texto-gg__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img23.png')})`}"
          )
    p.mb-4
      | Para reducir riesgos en la corrección o anulación, se recomienda aplicar los siguientes controles:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .d-none.d-lg-block.mb-4
          ImagenInfografica.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema3/img23.svg', alt='Texto que describa la imagen')
            .tarjeta.color-acento-botones.p-3(x="13%" y="45%" numero="+")
              p Verificar el período, el número de planilla, el estado del pago y los trabajadores incluidos.
            .tarjeta.color-acento-botones.p-3(x="28%" y="17%" numero="+")
              p Determinar si la inconsistencia corresponde al IBC, la novedad, la entidad administradora, el tipo de cotizante o el período.
            .tarjeta.color-acento-botones.p-3(x="50%" y="9%" numero="+")
              p Confirmar con el operador de información si procede una corrección, una planilla adicional o la anulación.
            .tarjeta.color-acento-botones.p-3(x="70.5%" y="17%" numero="+")
              p Establecer si existen valores adicionales por pagar, saldos a favor o intereses moratorios.
            .tarjeta.color-acento-botones.p-3(x="86.5%" y="45%" numero="+")
              .h5.mb-2 titulo
              p Guardar la planilla inicial, la planilla corregida, los comprobantes de pago, las comunicaciones con el operador y los documentos que justifican el ajuste.
        .d-block.d-lg-none
          figure
            img(src='@/assets/curso/temas/tema3/img23_1.svg', alt='Matriz RACI para dispositivos móviles')
    p.mb-4
      | Estos controles ayudan a corregir la información con orden y evitan que una inconsistencia inicial genere errores posteriores. Además, permiten demostrar que la organización aplicó un procedimiento razonable y documentado para cumplir sus obligaciones frente al sistema.
    .row.justify-content-center.align-items-center
      .col-lg-10
        p.p-4.bgf4 Una vez gestionada la verificación, corrección o anulación de una planilla, el ciclo operativo de la liquidación continúa con el registro contable de los aportes. Este proceso permite relacionar los valores reportados y pagados al sistema con la información financiera de la organización, garantizando coherencia entre la nómina, la PILA y la contabilidad.
    Separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.5 Registro contable de los aportes al sistema
    p.mb-4
      | El registro contable de los aportes al Sistema de Seguridad Social Integral permite relacionar la nómina liquidada, los valores reportados en la PILA y la información financiera de la organización. Este proceso es necesario para reconocer correctamente los gastos a cargo del empleador, las retenciones realizadas al trabajador y las obligaciones pendientes de pago frente a las entidades administradoras del sistema.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img24.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En este registro intervienen diferentes tipos de cuentas contables. Los aportes a cargo del empleador se reconocen como gasto cuando se causa la nómina; los aportes descontados al trabajador se registran como una obligación por pagar, y los valores anticipados o compensables, como licencias o incapacidades reconocidas por una EPS o una ARL, deben controlarse con los soportes correspondientes. Esta organización favorece la coherencia entre nómina, contabilidad y planilla.
    p.mb-4
      | Para comprender el registro contable de los aportes, se deben diferenciar tres elementos:
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/img25.svg', alt='Texto que describa la imagen')
          
        h5.text-center Aportes a cargo del trabajador
        p.mb-0.text-center Corresponden a los valores que asume la organización por salud patronal, pensión, riesgos laborales y aportes parafiscales, cuando apliquen.
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/img26.svg', alt='Texto que describa la imagen')
          
        h5.text-center Valores compensables o por recuperar
        p.mb-0.text-center Corresponden a los valores descontados del salario, como el 4 % de salud, el 4 % de pensión y el aporte al Fondo de Solidaridad Pensional, cuando corresponda.
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/img27.svg', alt='Texto que describa la imagen')
          
        h5.text-center Pensionados  
        p.mb-0.text-center Corresponden a pagos anticipados por el empleador que pueden ser reconocidos o compensados por la entidad administradora, según la normativa y los soportes exigidos.
    p.mb-4
      | Estos elementos permiten identificar si el valor registrado corresponde a un gasto de la empresa, una retención al trabajador o una cuenta por cobrar a una entidad del sistema. Por ello, el área de nómina debe entregar a contabilidad la información clara, completa y conciliada con la planilla pagada.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .p-4.bgf2-1
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema2/img28.svg', style="width:70px", alt='Texto que describa la imagen').mb-2
            .col-lg-12
              p.text-center.mb-0 El registro contable de los aportes garantiza coherencia entre la nómina, la PILA y la información financiera de la organización.
    p.mb-4
      | Los aportes a cargo del empleador se registran en el período en que se causa la nómina, aunque el pago se realice posteriormente mediante la PILA. Esta aplicación responde al principio de acumulación o devengo, según el cual las partidas se reconocen cuando cumplen los criterios de reconocimiento contable, no únicamente cuando se realiza el pago.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1
        p.p-4.bgf4 Los aportes a cargo del trabajador se registran como valores retenidos de la nómina. Aunque estos recursos se descuentan del salario, el empleador tiene la responsabilidad de trasladarlos oportunamente al sistema mediante la planilla. Por esta razón, deben quedar registrados como obligaciones por pagar hasta el momento en que se realice el pago correspondiente.
        p La compensación de incapacidades y licencias exige un control documental especial. Cuando el empleador reconoce valores al trabajador que posteriormente deben ser asumidos o compensados por la EPS o la ARL, se requiere conservar incapacidades, licencias, comprobantes de pago, planillas y soportes de la entidad administradora. Estos documentos permiten sustentar el valor registrado y facilitan la conciliación posterior.
        p.mb-0
          | Para fortalecer el control del proceso, se recomienda aplicar las siguientes verificaciones:
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema3/img29.png', alt='')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .p-4.bgfI01
          ul.lista-ul
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0
                b Conciliar nómina y PILA: 
                | comprobar que los aportes liquidados en nómina coincidan con los valores pagados en la planilla.
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0
                b Separar gastos y retenciones: 
                | diferenciar los valores asumidos por el empleador de los aportes descontados al trabajador.
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0
                b Revisar compensaciones: 
                | verificar que las licencias, incapacidades o valores por recuperar cuenten con soporte de la entidad correspondiente.
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb0
                b Registrar obligaciones pendientes: 
                | reconocer como pasivo los aportes causados que aún no han sido pagados.
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0
                b Conservar soportes contables: 
                | guardar nómina, comprobante de pago de la PILA, conciliaciones, incapacidades, licencias y documentos de respaldo.
    .row.justify-content-center
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img30.svg', alt='')
      .col-lg-9
        p Estas verificaciones permiten mantener trazabilidad entre la liquidación de nómina, la planilla pagada y los registros contables. Además, facilitan la atención de auditorías internas, revisiones financieras o requerimientos de entidades de control.
        .bgfI02.p-4
          p.mb-0
            | El dominio del IBC, los regímenes de cotización, la PILA y el registro contable adquiere sentido cuando se aplica a situaciones laborales concretas. Por ello, el siguiente apartado presenta casos prácticos de liquidación, en los que se integran el cálculo de aportes, el registro de novedades, la selección de planilla y la validación de la información antes del pago.

</template>

<script>
export default {
  name: 'Tema3',
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
