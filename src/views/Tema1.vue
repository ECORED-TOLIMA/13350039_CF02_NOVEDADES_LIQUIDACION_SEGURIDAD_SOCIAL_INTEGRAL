<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Ingreso Base de Cotización (IBC)

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema1/img1.png', alt='')
      .col-lg-8
        p El Ingreso Base de Cotización (IBC) es el valor mensual sobre el cual se aplican los porcentajes de cotización al Sistema de Seguridad Social Integral para obtener el valor de los aportes que deben pagarse a cada componente del sistema. Su correcta determinación es el primer y más crítico paso en el proceso de liquidación, pues un IBC incorrecto produce automáticamente aportes incorrectos a salud, pensión, riesgos laborales y parafiscales. El IBC es, en esencia, la traducción de la remuneración del trabajador a la base técnica que el sistema utiliza para calcular las cotizaciones y las prestaciones económicas derivadas de ellas.
        .p-4.bgf3
          p.mb-0 La legislación colombiana ha establecido con precisión qué conceptos integran el IBC y cuáles deben excluirse de él, diferenciando entre los pagos que tienen naturaleza salarial y por tanto son base de cotización, y los que el legislador ha catalogado expresamente como no salariales. Esta distinción es fundamental porque la tendencia histórica de algunos empleadores a inflar los pagos no salariales para reducir la base de cotización ha sido objeto de control por parte de la UGPP, que cuenta con herramientas de fiscalización sofisticadas para detectar estas prácticas.
    p.mb-4 El tipo de vinculación contractual del trabajador determina el método que debe aplicarse para calcular el IBC, pues cada modalidad tiene reglas propias establecidas en la normativa colombiana:
    .row.justify-content-center.mb-4
      .col-lg-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img2.svg' alt='AvatarTop')
          .tarjeta.bgfI02.w-100
            .p-4
              p.text-center #[b Trabajador dependiente:]
              p.text-center El IBC corresponde al salario devengado en el período, incluyendo el salario básico y los pagos de naturaleza salarial habitual, con un mínimo de 1 SMLMV y un máximo de 25 SMLMV.
      .col-lg-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img3.svg' alt='AvatarTop')
          .tarjeta.bgfI02.w-100
            .p-4
              p.text-center #[b Contratista independiente con contrato de prestación de servicios:]
              p.text-center El IBC equivale al 40 % del valor mensualizado del contrato, reconociendo que el contratista asume costos de operación que el trabajador dependiente no tiene.
      .col-lg-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img4.svg' alt='AvatarTop')
          .tarjeta.bgfI02.w-100
            .p-4
              p.text-center #[b Aprendiz SENA en fase productiva:]
              p.text-center El IBC se determina según la disponibilidad de certificación: 75 % del SMLMV sin certificación o 100 % del SMLMV con certificación de disponibilidad.
      .col-lg-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img5.svg' alt='AvatarTop')
          .tarjeta.bgfI02.w-100
            .p-4
              p.text-center #[b Trabajador con período incompleto o novedad salarial:]
              p.text-center El IBC se calcula de manera proporcional mediante la fórmula: (IBC mensual ÷ 30) × número de días cotizados en el período.
    .row.justify-content-center.mb-4
      .col-lg-9.order-2.order-lg-1
        .row.justify-content-center.align-items-center.p-4.bgfI01
          .col-lg-auto.d-none.d-lg-block.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema1/img6.svg', alt='')
          .col-lg-10
            p El reconocimiento de estas cuatro modalidades de cálculo del IBC permite al profesional de nómina abordar con precisión cualquier situación de liquidación, independientemente de la estructura de contratación de la organización, y garantizar que los aportes reportados en la PILA reflejen con exactitud la realidad salarial de cada cotizante.
            p.mb-0 A continuación, se presenta una tabla que sintetiza las principales situaciones en las que varía el método de cálculo del IBC, proporcionando una guía de referencia rápida para la liquidación de casos con características particulares.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema1/img7.svg', alt='')
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Métodos de cálculo del IBC según tipo de vinculación
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tabla-a.color-acento-contenido 
          .tabla-a
            table
              thead
                tr
                  th Tipo de vinculación
                  th Método de cálculo del IBC
              tbody
                tr(style="background-color: #FBF7F1;")
                  td Trabajador dependiente — salario fijo.
                  td IBC = salario mensual pactado + pagos de naturaleza salarial habituales. Límite mínimo: 1 SMLMV. Límite máximo: 25 SMLMV.
                tr
                  td Trabajador dependiente — salario variable.
                  td IBC = promedio del salario variable de los tres meses anteriores o del período cotizado si es inferior. Nunca inferior a 1 SMLMV.
                tr(style="background-color: #FBF7F1;")
                  td Trabajador dependiente — período incompleto.
                  td IBC proporcional: (salario mensual ÷ 30) × días laborados. Se reporta el número de días en la PILA.
                tr
                  td Contratista independiente.
                  td IBC = 40 % del valor mensualizado del contrato. Mínimo 1 SMLMV, máximo 25 SMLMV.
                tr(style="background-color: #FBF7F1;")
                  td Trabajador independiente sin contrato.
                  td IBC declarado por el trabajador sobre sus ingresos netos. Mínimo 1 SMLMV.
                tr
                  td Aprendiz SENA — fase productiva.
                  td IBC = 75% del SMLMV (sin certificación de disponibilidad) o 100% del SMLMV (con certificación). Solo salud y ARL en fase lectiva.
                tr(style="background-color: #FBF7F1;")
                  td Pensionado activo.
                  td Cotiza solo a salud: 12 % sobre el valor de la pensión. No cotiza a pensión ni a ARL.
    .row.justify-content-center.align-items-center
      .col-lg-9
        p La tabla evidencia que no existe un único método de cálculo del IBC aplicable a todos los cotizantes, cada tipo de vinculación tiene sus propias reglas, y el profesional de nómina debe identificar con precisión la modalidad contractual de cada trabajador antes de determinar la base sobre la que se liquidarán los aportes al sistema, pues un método aplicado incorrectamente produce automáticamente aportes incorrectos a todos los componentes del sistema de seguridad social.
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema1/img8.svg', alt='')
          .col-lg-10
            p.mb-0 Antes de aplicar cualquier fórmula de cálculo, es necesario comprender qué representa el IBC dentro del sistema de seguridad social y por qué su determinación precisa protege simultáneamente al trabajador, al empleador y a las entidades del sistema.
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema1/img9.png', alt='')
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.1 Concepto e importancia del IBC
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img10.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El Índice Base de Cotización es la medida monetaria que el sistema de seguridad social utiliza como referencia para calcular tanto las obligaciones de cotización como las prestaciones económicas a las que tiene derecho el afiliado. Esta dualidad es fundamental, el IBC no solo determina cuánto debe pagar el empleador y el trabajador al sistema, sino que también define cuánto recibirá el trabajador cuando tenga derecho a una prestación económica como una incapacidad, una licencia de maternidad o, en el largo plazo, el monto de su pensión. Por ello, un IBC subdeclarado no solo es un incumplimiento normativo sino una afectación directa a los derechos presentes y futuros del trabajador.
    p.mb-4
      | Desde la perspectiva del empleador, el IBC es la base sobre la cual se construye el presupuesto de los costos laborales no salariales relacionados con la seguridad social. Un IBC correctamente calculado permite proyectar con precisión el costo total de la nómina, incluyendo los aportes del empleador a salud (8,5 %), pensión (12 %), ARL (variable) y parafiscales (9 %), lo que representa en promedio entre el 30 % y el 40 % del salario bruto del trabajador. Este porcentaje de carga prestacional es una variable crítica en la toma de decisiones de contratación y en la gestión del presupuesto del área de talento humano. La siguiente figura ilustra los cuatro componentes del sistema sobre los cuales se aplican los porcentajes de cotización a partir del IBC.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figure 1.
          span Impacto del IBC en los costos laborales del empleador
        .d-none.d-lg-block.mb-4
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema1/img11.svg', alt='Figura 1. Impacto del IBC en los costos laborales del empleador. Esquema que explica los componentes del Ingreso Base de Cotización (IBC). En el centro se ubica el concepto central, IBC, del cual se desprenden cuatro categorías de aportes: 1. Aportes a Salud, referidos a la contribución del empleador al sistema de salud. 2. Aportes a Pensión, que son la inversión en el futuro financiero de los empleados. 3. Aportes a ARL, enfocados en la protección contra accidentes laborales y enfermedades profesionales. 4. Aportes a Parafiscales, destinados al financiamiento de programas sociales y educativos.')
        .d-block.d-lg-none
          figure
            img(src='@/assets/curso/temas/tema1/img12.svg', alt='Figura 1. Impacto del IBC en los costos laborales del empleador. Esquema que explica los componentes del Ingreso Base de Cotización (IBC). En el centro se ubica el concepto central, IBC, del cual se desprenden cuatro categorías de aportes: 1. Aportes a Salud, referidos a la contribución del empleador al sistema de salud. 2. Aportes a Pensión, que son la inversión en el futuro financiero de los empleados. 3. Aportes a ARL, enfocados en la protección contra accidentes laborales y enfermedades profesionales. 4. Aportes a Parafiscales, destinados al financiamiento de programas sociales y educativos.')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema1/img13.png', alt='')
      .col-lg-9
        p Para las entidades del sistema, el IBC es la información de entrada que permite calcular correctamente los subsidios de incapacidad, los aportes a las cuentas individuales de pensión, la base para determinar la mesada pensional y el valor de las indemnizaciones por invalidez o muerte. Una declaración incorrecta del IBC por parte del empleador genera inconsistencias en los registros de las entidades que pueden afectar al trabajador años después de ocurrida la liquidación. La UGPP ha desarrollado modelos analíticos sofisticados que detectan estas inconsistencias cruzando la información de la PILA con las declaraciones de renta, los contratos laborales reportados al Ministerio del Trabajo y otros registros administrativos.
        .row.justify-content-center.align-items-center.p-4.bgfI02
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema1/img14.svg', alt='')
          .col-lg-10
            p.mb-0 Finalmente, es importante comprender que el IBC tiene una dimensión dinámica, cambia con cada variación salarial, con cada novedad que afecta el número de días cotizados y con los incrementos anuales del SMLMV. El profesional de nómina debe establecer rutinas de actualización del IBC en el sistema de información de la empresa, verificando que los cambios se reflejen oportunamente en la PILA del período correspondiente. El uso de software especializado facilita esta tarea, pero no elimina la necesidad del criterio experto para validar que las actualizaciones sean correctas y completas.
    p.mb-4
      | Una consecuencia práctica de la importancia del IBC es que su cálculo debe documentarse adecuadamente para cada trabajador y cada período de liquidación. El área de nómina debe ser capaz de explicar los siguientes elementos:
    .row.mb-4
      .col-lg-3.mb-4.mb-lg-0
        .bgf3.p-4.tarjeta.w-100.h-100
          img(src='@/assets/curso/temas/tema1/img15.svg', style="width:50px", alt='').mb-2
          p.mb-0 #[b Método de determinación del IBC:]
          p Procedimiento aplicado para calcular la base de cotización del trabajador en el período, según su tipo de vinculación y remuneración.
      .col-lg-3.mb-4.mb-lg-0
        .bgf3.p-4.tarjeta.w-100.h-100
          img(src='@/assets/curso/temas/tema1/img16.svg', style="width:50px", alt='').mb-2
          p.mb-0 #[b Conceptos salariales incluidos:]
          p Pagos de naturaleza salarial habitual que se incorporaron al IBC conforme al artículo 127 del CST, como el salario básico, las horas extras habituales y las comisiones regulares.
      .col-lg-3.mb-4.mb-lg-0    
        .bgf3.p-4.tarjeta.w-100.h-100
          img(src='@/assets/curso/temas/tema1/img17.svg', style="width:50px", alt='').mb-2
          p.mb-0 #[b Conceptos excluidos y su justificación:]
          p Pagos expresamente catalogados como no salariales que se restaron del IBC conforme al artículo 128 del CST, con el fundamento normativo que respalda cada exclusión.
      .col-lg-3.mb-4.mb-lg-0  
        .bgf3.p-4.tarjeta.w-100.h-100
          img(src='@/assets/curso/temas/tema1/img18.svg', style="width:50px", alt='').mb-2
          p.mb-0 #[b Cálculo de proporcionales en períodos incompletos:]
          p resultado de aplicar la fórmula (IBC mensual ÷ 30) × días cotizados, con indicación del número de días reportados en la PILA.
    p.mb-4
      | Esta documentación es la evidencia de soporte que el empleador presentará ante la UGPP en caso de una investigación y que le permitirá demostrar que la liquidación se realizó de acuerdo con la normativa vigente.
    p.mb-0
      | Establecida la importancia del IBC, el siguiente paso es identificar con exactitud qué conceptos salariales lo integran y cuáles deben excluirse de él, pues esta distinción es la que permite construir una base de cotización correcta desde el inicio del proceso de liquidación.
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.2 Elementos que integran y excluyen el IBC
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema1/img19.png', alt='')
      .col-lg-9
        p La determinación de los conceptos que integran el IBC se fundamenta en el concepto legal de salario establecido en los artículos 127 y 128 del Código Sustantivo del Trabajo. El artículo 127 establece que constituye salario todo lo que recibe el trabajador en dinero o en especie como contraprestación directa del servicio, incluyendo el salario básico, las horas extras, los recargos nocturnos, los recargos dominicales y festivos, las comisiones habituales, las primas habituales, los viáticos permanentes y las demás sumas que habitual y regularmente reciba el trabajador como retribución directa de los servicios prestados. Todos estos conceptos deben incluirse en el IBC.
        p.mb-0 El artículo 128 del CST establece los pagos que no constituyen el salario y que, por tanto, deben excluirse del IBC. Estos pagos no salariales incluyen:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .p-4.bgfI01
          ul.lista-ul
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0
                b Pagos ocasionales por liberalidad del empleador: 
                | sumas que el empleador entrega de manera esporádica y sin obligación contractual, como primas, bonificaciones o gratificaciones ocasionales.
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0
                b Recargos y horas extras no habituales: 
                | valores recibidos por concepto de trabajo nocturno, horas extras y recargos cuando son excepcionales y no forman parte de la remuneración regular del trabajador.
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0
                b Auxilios de cesantías e intereses sobre cesantías: 
                | prestaciones sociales establecidas en la ley que no corresponden a una retribución directa del servicio y, por tanto, no integran el IBC.
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0
                b Subsidios de alimentación, transporte y vivienda: 
                | auxilios que el empleador otorga como ayuda al trabajador cuando no constituyen contraprestación directa del servicio prestado.
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0
                b Beneficios pactados expresamente como no salariales: 
                | pagos acordados entre las partes en el contrato o en la convención colectiva como no constitutivos de salario, siempre que el total de estos acuerdos no supere el 40 % de la remuneración total.
    p.mb-4 El dominio de estos cinco conceptos no salariales protege al empleador de dos riesgos opuestos, incluirlos indebidamente en el IBC genera un sobrepago de aportes, y excluirlos cuando sí constituyen salario, genera una subdeclaración que la UGPP detecta y sanciona. La correcta clasificación de cada pago es, por tanto, una responsabilidad técnica que exige criterio normativo y revisión permanente de la estructura salarial de la organización.
    .bloque-texto-gg.tarjeta.bgf4.mb-4
          .bloque-texto-gg__texto.p-4
            p Un concepto que frecuentemente genera confusión en la determinación del IBC es el auxilio de transporte. Este auxilio, fijado anualmente por el Gobierno Nacional, no constituye salario y por tanto no hace parte del IBC para efectos de cotización a seguridad social.Sin embargo, sí debe incluirse en la base de liquidación de las prestaciones sociales prima de servicios, cesantías y vacaciones, pues el artículo 7 de la Ley 1 de 1963 así lo establece expresamente. Esta diferencia de tratamiento entre la base de cotización a seguridad social y la base de liquidación de prestaciones sociales es una de las confusiones más frecuentes en la práctica y debe ser claramente comprendida por el profesional de nómina.
          .bloque-texto-gg__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img20.png')})`}"
          )
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1
        p Los viáticos merecen un análisis particular porque su tratamiento depende de su naturaleza. Los viáticos que el trabajador recibe para sufragar gastos de alojamiento, alimentación y transporte cuando debe desplazarse por razones del servicio, y que se liquidan con base en los gastos reales incurridos, no constituyen salario y no se incluyen en el IBC. Por el contrario, los viáticos que de manera permanente y regular recibe el trabajador como complemento de su salario independientemente de si se desplaza o no sí constituyen salario y deben incluirse en el IBC. La habitualidad y la retribución directa del servicio son los criterios que definen si un viático es salarial o no.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema1/img21.svg', alt='')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .p-4.bgf2-1
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema1/img22.svg', style="width:70px", alt='Texto que describa la imagen').mb-2
            .col-lg-12
              p.text-center.mb-0 Un pago integra el IBC cuando el trabajador lo recibe de manera regular como retribución directa de su trabajo. Cuando el pago es ocasional, obedece a la liberalidad del empleador o constituye una ayuda sin relación directa con el servicio prestado, se excluye del IBC y no genera obligación de cotización sobre ese valor.
    p.mb-4
      | Las horas extras y los recargos nocturnos, dominicales y festivos deben incluirse en el IBC cuando son habituales. Su tratamiento frente a la base de cotización depende de la regularidad con que se paguen:
    .row.justify-content-center.mb-4
      .col-lg-5
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img23.svg' alt='AvatarTop')
          .tarjeta.bgf4.w-100
            .p-4
              p.text-center #[b Horas extras habituales:]
              p.text-center El trabajador las recibe de manera regular y permanente como parte de su remuneración normal; por tanto, integran el IBC y generan obligación de cotización sobre ese valor.
      .col-lg-5
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img24.svg' alt='AvatarTop')
          .tarjeta.bgf4.w-100
            .p-4
              p.text-center #[b Horas extras eventuales o excepcionales:] 
              p.text-center No forman parte de la remuneración regular del trabajador; por tanto, pueden acordarse como no constitutivas de salario y excluirse del IBC.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1
        p En la práctica, cuando las horas extras se pagan todos los meses de manera consistente, la UGPP las considera habituales y exige que se incluyan en el IBC, independientemente de lo que establezca el contrato. Por esta razón, el profesional de nómina debe monitorear los patrones de pago y ajustar el IBC en el período en que detecte que se han convertido en un componente regular de la remuneración del trabajador.
        p.mb-0 La siguiente tabla sintetiza los principales conceptos salariales y no salariales con su tratamiento frente al IBC y el fundamento normativo que respalda cada determinación, con el propósito de facilitar la identificación rápida de los elementos que deben incluirse o excluirse de la base de cotización.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema1/img25.svg', alt='')
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Conceptos que integran y excluyen el IBC
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tabla-a.color-acento-contenido 
          .tabla-a
            table
              thead
                tr
                  th Concepto
                  th ¿Integra o excluye el IBC? — Fundamento legal
              tbody
                tr(style="background-color: #FBF7F1;")
                  td Salario básico mensual.
                  td Integra. Es el componente principal del IBC. Art. 127 CST.
                tr
                  td Horas extras y recargos habituales.
                  td Integra. Si son regulares y permanentes, son salario. Art. 127 CST.
                tr(style="background-color: #FBF7F1;")
                  td Comisiones y primas habituales.
                  td Integra. Todo pago habitual como retribución directa es salario. Art. 127 CST.
                tr
                  td Auxilio de transporte.
                  td Excluye del IBC. No es salario, aunque sí base de prestaciones. Ley 1 de 1963.
                tr(style="background-color: #FBF7F1;")
                  td Viáticos para desplazamiento (gastos reales).
                  td Excluye. No son retribución del servicio sino reembolso de gastos. Art. 130 CST.
                tr
                  td Bonificaciones ocasionales.
                  td Excluye. Son pagos por liberalidad, no retribución directa. Art. 128 CST.
                tr(style="background-color: #FBF7F1;")
                  td Beneficios no salariales pactados (hasta 40 % remuneración).
                  td Excluye. Solo si están expresamente pactados como no salariales en el contrato o convención. Art. 128 CST.
                tr
                  td Prima de servicios legal.
                  td Excluye del IBC (se excluye como base de cotización). Art. 306 CST.
                tr(style="background-color: #FBF7F1;")
                  td Cesantías e intereses sobre cesantías.
                  td Excluye. No son salario sino prestaciones sociales. Art. 128 CST.
    .row.justify-content-center.align-items-center
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema1/img26.svg', alt='')
      .col-lg-9
        p El dominio de los artículos 127 y 128 del CST y la aplicación correcta de sus distinciones, especialmente en los casos de mayor confusión como el auxilio de transporte, los viáticos y las horas extras habituales, constituyen la habilidad fundamental para calcular un IBC preciso. El subtema siguiente traduce estos conceptos en los procedimientos concretos de cálculo para los trabajadores dependientes.
        p.mb-0.p-4.bgf1 Con los conceptos que integran y excluyen el IBC claramente identificados, es posible avanzar hacia los procedimientos concretos de cálculo, comenzando por los trabajadores dependientes, que representan la mayor parte de los cotizantes en cualquier organización.
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.3 Cálculo del IBC: trabajadores dependientes
    .bloque-texto-gg.tarjeta.bgf3.mb-4
          .bloque-texto-gg__texto.p-4
            p Para los trabajadores dependientes con salario fijo, el cálculo del IBC es relativamente directo, se toma el salario mensual pactado en el contrato y se le suman todos los pagos que tengan naturaleza salarial recibidos en el período, como horas extras habituales, comisiones regulares y primas habituales. A este total se le restan los pagos expresamente catalogados como no salariales: el auxilio de transporte, los bonos de alimentación no salariales, los bonos de recreación y cualquier otro beneficio acordado como no constitutivo de salario en el contrato. El resultado es el IBC del período, que debe verificarse frente al límite mínimo de un SMLMV y el máximo de 25 SMLMV.
          .bloque-texto-gg__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img27.png')})`}"
          )
    p.mb-4
      | Para los trabajadores con salario variable como los vendedores a comisión, trabajadores por destajo o con bonificaciones variables, el cálculo del IBC requiere un procedimiento adicional. El artículo 19 del Decreto 1406 de 1999 establece que, para los trabajadores con salario variable, el IBC de cada período se calcula con base en el promedio del salario devengado en el trimestre anterior. Si el trabajador lleva menos de tres meses laborando, el promedio se calcula sobre el tiempo efectivamente trabajado. Esta regla del promedio trimestral tiene como propósito suavizar las variaciones entre períodos y garantizar que los aportes reflejen de manera más equilibrada la remuneración real del trabajador a lo largo del tiempo.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .p-4.bgf4.mb-2
          p El cálculo del IBC para períodos incompletos, cuando el trabajador ingresa o se retira en una fecha diferente al primer o último día del mes, requiere la aplicación de la proporcionalidad por días. La fórmula es:
          .p-4.bgf2 
            p.mb-0.text-center IBC del período = (IBC mensual ÷ 30) × número de días trabajados.
        p.mb-0 Esta proporcionalidad se calcula sobre 30 días independientemente del número real de días del mes 28, 29, 30 o 31, por lo que el denominador siempre es 30. El número de días cotizados que se reporta en la PILA corresponde a los días calendarios del período de vinculación, sin descontar los días de descanso remunerado.
    p.mb-4
      | Una situación especial que el profesional de nómina debe manejar correctamente es la del trabajador que recibe en el mismo período pagos salariales y no salariales. En este caso, debe segregar con precisión cuál porción de los pagos recibidos es base de cotización y cuál está excluida. Por ejemplo, si un trabajador recibe en el mes un salario básico de $2.000.000, un bono de alimentación no salarial de $300.000 y horas extras habituales por $400.000, el IBC será $2.000.000 + $400.000 = $2.400.000, excluyendo el bono de alimentación. Documentar esta segregación en la liquidación de nómina es fundamental para poder sustentarla ante la UGPP en caso de una investigación.
    p.mb-4
      | El límite máximo del IBC de 25 SMLMV es especialmente relevante para los trabajadores con altos ingresos. Para el año 2026, con un SMLMV de $1.750.905, el IBC máximo es $1.750.905 × 25 = $43.772.625. Este tope tiene implicaciones concretas en tres aspectos de la gestión de nómina:
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img28.svg', alt='Texto que describa la imagen')
          
        h5.text-center Tope del IBC para cotización: 
        p Un trabajador que devenga un salario superior al IBC máximo solo cotiza sobre $43.772.625, independientemente de cuánto devengue realmente.
        p Ejemplo:la gerente Laura Gómez devenga $55.000.000 mensuales. Su IBC para liquidar los aportes a salud no es $55.000.000 sino $43.772.625. El empleador calcula: $43.772.625 × 8,5 % = $3.720.673 de aporte patronal a salud. Si se calculara sobre el salario real, el aporte sería $55.000.000 × 8,5 % = $4.675.000, es decir, $954.327 más. El tope le representa al empleador un ahorro real en el costo laboral.
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img29.svg', alt='Texto que describa la imagen')
          
        h5.text-center Aportes iguales para salarios distintos: 
        p Dos trabajadores con salarios diferentes pero ambos superiores al IBC máximo pagan exactamente el mismo valor de aportes al sistema.
        p Ejemplo: el director Carlos Medina devenga $45.000.000 y el vicepresidente Andrés Torres devenga $90.000.000. Los dos cotizan sobre $43.772.625. Aportes a pensión de cada uno: $43.772.625 × 16 % = $7.003.620. Carlos y Andrés generan el mismo costo de seguridad social al empleador, a pesar de que Andrés gana el doble.
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img30.svg', alt='Texto que describa la imagen')
          
        h5.text-center Impacto en la proyección del costo laboral: 
        p En los paquetes de compensación ejecutiva, el costo de seguridad social no crece proporcionalmente con el salario a partir del IBC máximo, lo que debe reflejarse correctamente en el presupuesto de personal.
        p Ejemplo: la empresa proyecta contratar un gerente con salario de $50.000.000. El área financiera calcula erróneamente la carga prestacional sobre $50.000.000 × 30 % = $15.000.000. El valor correcto es $43.772.625 × 30 % = $13.131.788. La diferencia de $1.868.212 mensuales representa $22.418.544 de sobrestimación del costo laboral al año.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema1/img31.png', alt='')
      .col-lg-8
        p El conocimiento preciso del IBC máximo evita tanto el sobrecálculo en la proyección presupuestal como el error opuesto de calcular aportes sobre el salario real cuando este supera el tope, situación que produciría un descuento indebido al trabajador y un pago en exceso al sistema que deberá gestionarse como una corrección ante el operador de la PILA.
        p.mb-0.p-4.bgf1 El dominio de los métodos de cálculo para trabajadores dependientes cubre la mayoría de los casos de la operación diaria; sin embargo, las organizaciones con estructuras de contratación diversas también vinculan contratistas independientes, cuya base de cotización se determina mediante una regla específica establecida en la normativa colombiana.
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.4 Cálculo del IBC: trabajadores independientes y contratistas
    p.mb-4
      | Para los trabajadores independientes con contrato de prestación de servicios, el IBC se calcula sobre el 40 % del valor mensualizado del contrato. La mensualización consiste en dividir el valor total del contrato por el número de meses de duración y aplicar el 40% a ese resultado. Por ejemplo, si un contrato tiene un valor de $15.000.000 y una duración de tres meses, el valor mensualizado es $5.000.000 y el IBC es $5.000.000 × 40 % = $2.000.000. Si el contrato tiene un valor mensual ya establecido en el documento, se aplica directamente el 40 % sin necesidad de mensualizar.
    p.mb-4
      | El fundamento de la base del 40 % radica en reconocer que el contratista independiente tiene costos de operación asociados a la prestación de sus servicios que el trabajador dependiente no tiene:
    .row.justify-content-center.mb-4
      .col-lg-9.order-2.order-lg-1
        .p-4.bgf1.mb-4
          ul.lista-ul.mb-0
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0
                | Arrendamiento o adecuación de la oficina de trabajo.
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0
                | Adquisición y mantenimiento de equipos y herramientas.
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0
                | Servicios de conectividad, internet y comunicaciones.
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0
                | Pago de seguros y pólizas de responsabilidad profesional.
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0
                | Cumplimiento de obligaciones tributarias propias de su actividad.
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0
                | Compra de insumos y materiales para ejecutar el contrato.
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0
                | Otros gastos operativos necesarios para cumplir el objeto contratado.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema1/img32.svg', alt='')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema1/img33.png', alt='')
      .col-lg-9
        p.mb-4
          | El 60% restante de los honorarios se entiende destinado a cubrir estos costos, y solo el 40 % se asimila a la remuneración neta del contratista. Esta regla fue establecida mediante el Decreto 1703 de 2002 y ha sido ratificada por las normas posteriores, incluida la Ley 1955 de 2019.
        p.mb-4
          | Para los trabajadores independientes sin contrato, el IBC se determina sobre los ingresos netos del mes. Este grupo comprende tres perfiles:
        .row
          .col-lg-4.mb-4.mb-lg-0
            .bgf3.p-4.tarjeta.w-100.h-100
              img(src='@/assets/curso/temas/tema1/img34.svg', style="width:50px", alt='').mb-2
              p.mb-0
                b Rentistas: 
                | personas que obtienen ingresos por arrendamiento de bienes, dividendos o rendimientos financieros, sin que exista un contrato de servicios con un contratante específico.
          .col-lg-4.mb-4.mb-lg-0  
            .bgf3.p-4.tarjeta.w-100.h-100
              img(src='@/assets/curso/temas/tema1/img35.svg', style="width:50px", alt='').mb-2
              p.mb-0
                b Propietarios de negocio: 
                | personas naturales que generan ingresos propios a través de una actividad comercial o empresarial independiente, como tenderos, comerciantes y microempresarios.
          .col-lg-4.mb-4.mb-lg-0  
            .bgf3.p-4.tarjeta.w-100.h-100
              img(src='@/assets/curso/temas/tema1/img36.svg', style="width:50px", alt='').mb-2
              p.mb-0
                b Profesionales liberales: 
                | personas que ejercen una profesión de forma autónoma sin contrato de prestación de servicios vigente, como médicos, abogados, contadores o arquitectos con consultorios o estudios propios.
    p.mb-4
      | Los tres perfiles declaran autónomamente sus ingresos netos en la PILA a través de la planilla tipo Y, y la UGPP tiene facultades para verificar la veracidad de los ingresos declarados mediante estados financieros y declaraciones de renta.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .row.justify-content-center.align-items-center.p-4.bgf4
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema1/img37.svg', alt='')
          .col-lg-9
            p.mb-0 El IBC se determina sobre los ingresos netos del mes, definidos como los ingresos brutos menos los costos y gastos necesarios para generarlos. El trabajador independiente debe hacer esta determinación de manera autónoma y declararla en la PILA a través de la planilla tipo Y o tipo E, según corresponda. La UGPP tiene facultades para revisar la veracidad de los ingresos declarados y puede exigir documentación soporte, estados financieros y declaraciones de rentapara verificar que el IBC declarado corresponde a los ingresos reales.
    p.mb-4
      | Una situación frecuente en la práctica es la de los contratistas que tienen simultáneamente varios contratos de prestación de servicios con diferentes contratantes. Para estos casos, es necesario tener en cuenta las siguientes reglas:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .p-4.bgf1.mb-4
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span A
              p.mb-0
                b IBC sobre el total de los contratos: 
                | el IBC se calcula sobre el 40 % de la suma del valor mensualizado de todos los contratos activos en el período, sin que el total pueda superar el límite de 25 SMLMV.
            li 
              .lista-ol--cuadro__vineta
                span B
              p.mb-0
                b Responsabilidad de cada contratante: 
                | cada contratante debe verificar que el contratista esté cotizando correctamente sobre la base que le corresponde, incluyendo los demás contratos vigentes.
            li 
              .lista-ol--cuadro__vineta
                span C
              p.mb-0
                b Riesgo de subdeclaración: 
                | si el contratista tiene contratos con múltiples entidades y la verificación de uno solo de ellos arroja un IBC inferior al correcto, puede existir una subdeclaración que la UGPP detectará al cruzar la información de todos los operadores de la PILA.
    .row.justify-content-center.align-items-center
      .col-lg-8.order-2.order-lg-1
        p Esta situación es frecuente con contratistas que prestan servicios puntuales y debe manejarse con precisión para evitar aportes incorrectos. Por ejemplo, si Felipe Ríos firma un contrato por $800.000 con duración de 15 días, la mensualización es ($800.000 ÷ 15) × 30 = $1.600.000, y el IBC resultante es $1.600.000 × 40 % = $640.000; como este valor es inferior al SMLMV de $1.750.905 vigente en 2026, Felipe debe cotizar sobre el tope mínimo, independientemente del valor real del contrato.
        p.mb-0 Conocida la regla del 40 % aplicable a los contratistas independientes y los métodos de cálculo para los trabajadores dependientes, el siguiente criterio que debe verificarse en toda liquidación es que el IBC resultante se encuentre dentro del rango permitido por la normativa vigente.
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema1/img38.svg', alt='')
    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.5 Topes mínimos y máximos del IBC
    .bloque-texto-gg.tarjeta.bgfI01.mb-4
          .bloque-texto-gg__texto.p-4
            p El sistema de seguridad social colombiano ha establecido límites mínimos y máximos para el IBC con el propósito de garantizar por un lado que todos los trabajadores coticen sobre una base suficiente que les asegure prestaciones mínimas adecuadas, y por otro que el sistema no se convierta en una carga desproporcionada para las personas con altos ingresos. Estos topes son de obligatorio cumplimiento y el profesional de nómina debe verificarlos en cada liquidación para garantizar que el IBC de cada cotizante se encuentre dentro del rango permitido.
          .bloque-texto-gg__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img39.png')})`}"
          )
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .p-4.bgf2-1
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema1/img40.svg', style="width:70px", alt='Texto que describa la imagen').mb-2
            .col-lg-12
              p.text-center.mb-0 El límite mínimo del IBC es de un SMLMV para todos los cotizantes sin excepción. Un trabajador con salario inferior al mínimo por jornada reducida debe cotizar al menos sobre un SMLMV completo cuando trabaja en jornada completa para un solo empleador.
    p.mb-4
      | Sin embargo, los trabajadores de tiempo parcial que tienen múltiples empleos pueden distribuir el pago de aportes entre los distintos empleadores, siempre que la suma total de los IBC declarados alcance al menos un SMLMV. Esta regla de la agregación de IBC en múltiples empleos es técnicamente compleja y genera frecuentes errores en la práctica.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1
        p.p-4.bgf1 El límite máximo del IBC es de 25 SMLMV. Para el año 2026, con un SMLMV de $1.750.905, el IBC máximo es $1.750.905 × 25 = $43.772.625. Ningún cotizante, independientemente de cuánto devengue, debe pagar aportes sobre una base superior a este monto. El empleador que descuenta del salario del trabajador una suma superior a la que correspondería con el IBC máximo incurre en una retención indebida que puede ser reclamada por el trabajador ante las autoridades laborales competentes. Es importante señalar que el límite de los 25 SMLMV aplica de manera independiente para cada contrato o relación laboral, por lo que un trabajador con múltiples contratos podría cotizar en cada uno de ellos sobre hasta $43.772.625, aunque esta situación es poco frecuente en la práctica.
        p.mb-0 Los cambios anuales en el valor del SMLMV implican que los topes mínimos y máximos del IBC se actualizan cada año. Para 2026, el Decreto 0159 del 19 de febrero fijó transitoriamente el SMLMV en $1.750.905. El profesional de nómina debe tener en cuenta los siguientes aspectos:
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema1/img41_1.svg', alt='')
    SlyderF(columnas="col-lg-6 col-xl-4").mb-4
      .tarjeta.p-5.BG04
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/img41.svg' alt='AvatarTop')
        h5.text-center Decreto vigente para 2026
        p.text-center El Gobierno Nacional fijó el SMLMV en $1.750.905 mediante el Decreto 1469 del 29 de diciembre de 2025, ratificado por el Decreto 0159 del 19 de febrero de 2026, con un incremento del 23 % respecto del año anterior.
      .tarjeta.p-5.BG04
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/img42.svg' alt='AvatarTop')
        h5.text-center Tope mínimo del IBC para 2026
        p.text-center Ningún cotizante puede declarar un IBC inferior a $1.750.905, independientemente del valor real de su salario o contrato.
      .tarjeta.p-5.BG04
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/img43.svg' alt='AvatarTop')
        h5.text-center Tope máximo del IBC para 2026
        p.text-center Ningún cotizante debe pagar aportes sobre una base superior a $43.772.625, equivalente a 25 SMLMV.
      .tarjeta.p-5.BG04
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/img44.svg' alt='AvatarTop')
        h5.text-center Actualización en el sistema de nómina: 
        p.text-center Los nuevos valores del SMLMV deben registrarse en el sistema de información desde el 1 de enero para garantizar que los IBC del año reflejen los topes correctos desde el primer período de liquidación.
      .tarjeta.p-5.BG04
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/img45.svg' alt='AvatarTop')
        h5.text-center Riesgo por no actualización oportuna: 
        p.text-center Calcular aportes sobre el SMLMV del año anterior produce diferencias acumuladas en todos los períodos del año que la UGPP detecta con facilidad al cruzar los registros de la PILA con los valores oficiales vigentes.
    p.mb-4
      | La actualización oportuna de los topes del IBC al inicio de cada año es una tarea crítica del cierre y apertura de nómina que debe estar documentada como parte del proceso de gestión de la seguridad social de la organización.
    p.mb-4
      | Verificados los topes normativos del IBC, la práctica profesional presenta situaciones en las que, la base de cotización varía dentro del mismo período como consecuencia de novedades salariales, incapacidades, licencias o cambios en la remuneración, variaciones que requieren un tratamiento técnico específico para garantizar la precisión de la liquidación.
    Separador
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.6 Variaciones del IBC
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema1/img46.png', alt='')
      .col-lg-9
        p Los trabajadores con salario variable presentan uno de los mayores retos en el cálculo del IBC porque su remuneración fluctúa de un mes a otro, haciendo que la base de cotización varíe también. La regla del promedio trimestral establece que el IBC del período actual se calcula con base en el promedio del salario variable de los tres meses anteriores. Esta regla tiene una lógica redistributiva, en los meses de altos ingresos el IBC real puede ser superior al promedio, y en los meses bajos puede ser inferior, pero en el conjunto del trimestre los aportes se equilibran alrededor de la remuneración real del trabajador.
        p.mb-0 Cuando un trabajador con salario variable ingresa o cuando el sistema de remuneración cambia de fijo a variable, el período de promediación se adapta al tiempo disponible según las siguientes reglas:
    .row.justify-content-center.mb-4
      .col-lg-3.mb-4.mb-lg-0
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle
            figure
              img(src="@/assets/curso/temas/tema1/img47.svg", alt="alt")
          h5.text-center Primer mes laborado: 
          p El IBC se calcula sobre el salario devengado en ese único mes, pues no existen meses anteriores para promediar. 
          p Ejemplo: Andrea ingresa en octubre y devenga $2.500.000. Su IBC de octubre es $2.500.000.
      .col-lg-3.mb-4.mb-lg-0
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle
            figure
              img(src="@/assets/curso/temas/tema1/img48.svg", alt="alt")
          h5.text-center Segundo mes laborado: 
          p El IBC se calcula sobre el promedio de los dos meses disponibles.
          p Ejemplo: en noviembre Andrea devenga $2.800.000. Su IBC es ($2.500.000 + $2.800.000) ÷ 2 = $2.650.000.
      .col-lg-3.mb-4.mb-lg-0
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle
            figure
              img(src="@/assets/curso/temas/tema1/img49.svg", alt="alt")
          h5.text-center Tercer mes laborado: 
          p El IBC se calcula sobre el promedio de los tres meses disponibles.
          p Ejemplo: en diciembre Andrea devenga $3.000.000. Su IBC es ($2.500.000 + $2.800.000 + $3.000.000) ÷ 3 = $2.766.667.
      .col-lg-3.mb-4.mb-lg-0
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle
            figure
              img(src="@/assets/curso/temas/tema1/img50.svg", alt="alt")
          h5.text-center Cuarto mes laborado: 
          p Se aplica plenamente la regla del promedio de los tres meses anteriores, con independencia del tiempo que lleve el trabajador en la empresa.
    p.mb-4
      | Este período de transición debe manejarse con cuidado en el sistema de nómina para garantizar que los IBC iniciales sean correctos y no generen inconsistencias que la UGPP detecte en períodos posteriores.
    p.mb-4
      | Las variaciones temporales del IBC requieren que el profesional de nómina calcule bases de cotización diferenciadas según los días efectivamente laborados y los días en que aplica una novedad. Las situaciones más frecuentes son:
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img51.svg', alt='Texto que describa la imagen')
          
        h5.text-center Licencia de maternidad: 
        p El IBC corresponde al valor de la licencia pagada por la EPS, equivalente al 100 % del salario de la trabajadora. Los aportes a pensión y ARL continúan sobre este IBC; la cotización a salud la asume directamente la EPS.
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img52.svg', alt='Texto que describa la imagen')
          
        h5.text-center Incapacidad por enfermedad general: 
        p El IBC se segrega entre los días laborados, calculados sobre el salario proporcional, y los días de incapacidad, calculados sobre el valor del subsidio pagado por la EPS al 66,67 %.
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img53.svg', alt='Texto que describa la imagen')
          
        h5.text-center Suspensión del contrato: 
        p Durante los días de suspensión no hay obligación de cotizar, pues no existe remuneración ni subsidio. El IBC del período se calcula únicamente sobre los días efectivamente laborados antes y después de la suspensión.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        p.mb-0.p-4.bgf4 Ejemplo: un trabajador labora 10 días del mes y los 20 días restantes está incapacitado. El IBC de los 10 días laborados se calcula sobre el salario proporcional; el IBC de los 20 días de incapacidad es el valor del subsidio pagado por la EPS. Los dos IBC son diferentes y deben reportarse por separado en la PILA con los códigos de novedad correspondientes.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-2.order-lg-1
        p La correcta segregación de estos IBC en la PILA garantiza que las entidades del sistema reciban la información exacta del período y que el historial de cotizaciones del trabajador refleje fielmente su situación laboral real.
        p.mb-0 Una variación especial que requiere manejo técnico preciso es la del trabajador que recibe en el mismo mes un pago extraordinario de naturaleza salarial, como una bonificación habitual no prevista en el contrato, pero pagada de manera regular por varios años, que incrementa significativamente el IBC del período. La UGPP puede cuestionar que esta bonificación no se haya incluido en el IBC de meses anteriores cuando la evidencia muestre que era habitual, generando una liquidación retroactiva que incluya los meses en que se omitió. Por esta razón, el profesional de nómina debe analizar con criterio la habitualidad de cada pago salarial y ajustar el IBC oportunamente cuando detecte que un concepto ha adquirido carácter regular.
    
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema1/img54.png', alt='')
    p.mb-4
      | Determinado el IBC para cada cotizante, el proceso de liquidación avanza hacia el segundo paso fundamental, establecer qué porcentaje debe aplicarse sobre esa base para calcular el valor de los aportes a cada componente del sistema. Esa respuesta la ofrecen los regímenes de afiliación y los porcentajes de cotización vigentes.

</template>

<script>
export default {
  name: 'Tema1',
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
