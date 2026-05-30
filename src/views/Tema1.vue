<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Ingreso Base de Cotización (IBC)
    p.mb-4
      | El Ingreso Base de Cotización (IBC) es el valor mensual sobre el cual se aplican los porcentajes de cotización al Sistema de Seguridad Social Integral para obtener el valor de los aportes que deben pagarse a cada componente del sistema. Su correcta determinación es el primer y más crítico paso en el proceso de liquidación, pues un IBC incorrecto produce automáticamente aportes incorrectos a salud, pensión, riesgos laborales y parafiscales. El IBC es, en esencia, la traducción de la remuneración del trabajador a la base técnica que el sistema utiliza para calcular las cotizaciones y las prestaciones económicas derivadas de ellas.
    p.mb-4
      | La legislación colombiana ha establecido con precisión qué conceptos integran el IBC y cuáles deben excluirse de él, diferenciando entre los pagos que tienen naturaleza salarial y por tanto son base de cotización, y los que el legislador ha catalogado expresamente como no salariales. Esta distinción es fundamental porque la tendencia histórica de algunos empleadores a inflar los pagos no salariales para reducir la base de cotización ha sido objeto de control por parte de la UGPP, que cuenta con herramientas de fiscalización sofisticadas para detectar estas prácticas.
    p.mb-4
      | El tipo de vinculación contractual del trabajador determina el método que debe aplicarse para calcular el IBC, pues cada modalidad tiene reglas propias establecidas en la normativa colombiana:
    p.mb-4
      b Trabajador dependiente: 
      | el IBC corresponde al salario devengado en el período, incluyendo el salario básico y los pagos de naturaleza salarial habitual, con un mínimo de 1 SMLMV y un máximo de 25 SMLMV.
    p.mb-4
      b Contratista independiente con contrato de prestación de servicios: 
      | el IBC equivale al 40 % del valor mensualizado del contrato, reconociendo que el contratista asume costos de operación que el trabajador dependiente no tiene.
    p.mb-4
      b Aprendiz SENA en fase productiva: 
      | el IBC se determina según la disponibilidad de certificación: 75 % del SMLMV sin certificación o 100 % del SMLMV con certificación de disponibilidad.
    p.mb-4
      b Trabajador con período incompleto o novedad salarial: 
      | el IBC se calcula de manera proporcional mediante la fórmula: (IBC mensual ÷ 30) × número de días cotizados en el período.
    p.mb-4
      | El reconocimiento de estas cuatro modalidades de cálculo del IBC permite al profesional de nómina abordar con precisión cualquier situación de liquidación, independientemente de la estructura de contratación de la organización, y garantizar que los aportes reportados en la PILA reflejen con exactitud la realidad salarial de cada cotizante.
    p.mb-4
      | A continuación, se presenta una tabla que sintetiza las principales situaciones en las que varía el método de cálculo del IBC, proporcionando una guía de referencia rápida para la liquidación de casos con características particulares.
    p.mb-2.fw-bold Tabla 1. Métodos de cálculo del IBC según tipo de vinculación
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th Tipo de vinculación
            th Método de cálculo del IBC
        tbody
          tr
            td Trabajador dependiente — salario fijo.
            td IBC = salario mensual pactado + pagos de naturaleza salarial habituales. Límite mínimo: 1 SMLMV. Límite máximo: 25 SMLMV.
          tr
            td Trabajador dependiente — salario variable.
            td IBC = promedio del salario variable de los tres meses anteriores o del período cotizado si es inferior. Nunca inferior a 1 SMLMV.
          tr
            td Trabajador dependiente — período incompleto.
            td IBC proporcional: (salario mensual ÷ 30) × días laborados. Se reporta el número de días en la PILA.
          tr
            td Contratista independiente.
            td IBC = 40 % del valor mensualizado del contrato. Mínimo 1 SMLMV, máximo 25 SMLMV.
          tr
            td Trabajador independiente sin contrato.
            td IBC declarado por el trabajador sobre sus ingresos netos. Mínimo 1 SMLMV.
          tr
            td Aprendiz SENA — fase productiva.
            td IBC = 75% del SMLMV (sin certificación de disponibilidad) o 100% del SMLMV (con certificación). Solo salud y ARL en fase lectiva.
          tr
            td Pensionado activo.
            td Cotiza solo a salud: 12 % sobre el valor de la pensión. No cotiza a pensión ni a ARL.
    p.mb-4
      | La tabla evidencia que no existe un único método de cálculo del IBC aplicable a todos los cotizantes, cada tipo de vinculación tiene sus propias reglas, y el profesional de nómina debe identificar con precisión la modalidad contractual de cada trabajador antes de determinar la base sobre la que se liquidarán los aportes al sistema, pues un método aplicado incorrectamente produce automáticamente aportes incorrectos a todos los componentes del sistema de seguridad social.
    p.mb-4
      | Antes de aplicar cualquier fórmula de cálculo, es necesario comprender qué representa el IBC dentro del sistema de seguridad social y por qué su determinación precisa protege simultáneamente al trabajador, al empleador y a las entidades del sistema.
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.1 Concepto e importancia del IBC
    p.mb-4
      | El Índice Base de Cotización es la medida monetaria que el sistema de seguridad social utiliza como referencia para calcular tanto las obligaciones de cotización como las prestaciones económicas a las que tiene derecho el afiliado. Esta dualidad es fundamental, el IBC no solo determina cuánto debe pagar el empleador y el trabajador al sistema, sino que también define cuánto recibirá el trabajador cuando tenga derecho a una prestación económica como una incapacidad, una licencia de maternidad o, en el largo plazo, el monto de su pensión. Por ello, un IBC subdeclarado no solo es un incumplimiento normativo sino una afectación directa a los derechos presentes y futuros del trabajador.
    p.mb-4
      | Desde la perspectiva del empleador, el IBC es la base sobre la cual se construye el presupuesto de los costos laborales no salariales relacionados con la seguridad social. Un IBC correctamente calculado permite proyectar con precisión el costo total de la nómina, incluyendo los aportes del empleador a salud (8,5 %), pensión (12 %), ARL (variable) y parafiscales (9 %), lo que representa en promedio entre el 30 % y el 40 % del salario bruto del trabajador. Este porcentaje de carga prestacional es una variable crítica en la toma de decisiones de contratación y en la gestión del presupuesto del área de talento humano. La siguiente figura ilustra los cuatro componentes del sistema sobre los cuales se aplican los porcentajes de cotización a partir del IBC.
    p.mb-4.fst-italic Figura 1. Impacto del IBC en los costos laborales del empleador
    p.mb-4
      | Para las entidades del sistema, el IBC es la información de entrada que permite calcular correctamente los subsidios de incapacidad, los aportes a las cuentas individuales de pensión, la base para determinar la mesada pensional y el valor de las indemnizaciones por invalidez o muerte. Una declaración incorrecta del IBC por parte del empleador genera inconsistencias en los registros de las entidades que pueden afectar al trabajador años después de ocurrida la liquidación. La UGPP ha desarrollado modelos analíticos sofisticados que detectan estas inconsistencias cruzando la información de la PILA con las declaraciones de renta, los contratos laborales reportados al Ministerio del Trabajo y otros registros administrativos.
    p.mb-4
      | Finalmente, es importante comprender que el IBC tiene una dimensión dinámica, cambia con cada variación salarial, con cada novedad que afecta el número de días cotizados y con los incrementos anuales del SMLMV. El profesional de nómina debe establecer rutinas de actualización del IBC en el sistema de información de la empresa, verificando que los cambios se reflejen oportunamente en la PILA del período correspondiente. El uso de software especializado facilita esta tarea, pero no elimina la necesidad del criterio experto para validar que las actualizaciones sean correctas y completas.
    p.mb-4
      | Una consecuencia práctica de la importancia del IBC es que su cálculo debe documentarse adecuadamente para cada trabajador y cada período de liquidación. El área de nómina debe ser capaz de explicar los siguientes elementos:
    p.mb-4
      b Método de determinación del IBC: 
      | procedimiento aplicado para calcular la base de cotización del trabajador en el período, según su tipo de vinculación y remuneración.
    p.mb-4
      b Conceptos salariales incluidos: 
      | pagos de naturaleza salarial habitual que se incorporaron al IBC conforme al artículo 127 del CST, como el salario básico, las horas extras habituales y las comisiones regulares.
    p.mb-4
      b Conceptos excluidos y su justificación: 
      | pagos expresamente catalogados como no salariales que se restaron del IBC conforme al artículo 128 del CST, con el fundamento normativo que respalda cada exclusión.
    p.mb-4
      b Cálculo de proporcionales en períodos incompletos: 
      | resultado de aplicar la fórmula (IBC mensual ÷ 30) × días cotizados, con indicación del número de días reportados en la PILA.
    p.mb-4
      | Esta documentación es la evidencia de soporte que el empleador presentará ante la UGPP en caso de una investigación y que le permitirá demostrar que la liquidación se realizó de acuerdo con la normativa vigente.
    p.mb-4
      | Establecida la importancia del IBC, el siguiente paso es identificar con exactitud qué conceptos salariales lo integran y cuáles deben excluirse de él, pues esta distinción es la que permite construir una base de cotización correcta desde el inicio del proceso de liquidación.
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.2 Elementos que integran y excluyen el IBC
    p.mb-4
      | La determinación de los conceptos que integran el IBC se fundamenta en el concepto legal de salario establecido en los artículos 127 y 128 del Código Sustantivo del Trabajo. El artículo 127 establece que constituye salario todo lo que recibe el trabajador en dinero o en especie como contraprestación directa del servicio, incluyendo el salario básico, las horas extras, los recargos nocturnos, los recargos dominicales y festivos, las comisiones habituales, las primas habituales, los viáticos permanentes y las demás sumas que habitual y regularmente reciba el trabajador como retribución directa de los servicios prestados. Todos estos conceptos deben incluirse en el IBC.
    p.mb-4
      | El artículo 128 del CST establece los pagos que no constituyen el salario y que, por tanto, deben excluirse del IBC. Estos pagos no salariales incluyen:
    p.mb-4
      b Pagos ocasionales por liberalidad del empleador: 
      | sumas que el empleador entrega de manera esporádica y sin obligación contractual, como primas, bonificaciones o gratificaciones ocasionales.
    p.mb-4
      b Recargos y horas extras no habituales: 
      | valores recibidos por concepto de trabajo nocturno, horas extras y recargos cuando son excepcionales y no forman parte de la remuneración regular del trabajador.
    p.mb-4
      b Auxilios de cesantías e intereses sobre cesantías: 
      | prestaciones sociales establecidas en la ley que no corresponden a una retribución directa del servicio y, por tanto, no integran el IBC.
    p.mb-4
      b Subsidios de alimentación, transporte y vivienda: 
      | auxilios que el empleador otorga como ayuda al trabajador cuando no constituyen contraprestación directa del servicio prestado.
    p.mb-4
      b Beneficios pactados expresamente como no salariales: 
      | pagos acordados entre las partes en el contrato o en la convención colectiva como no constitutivos de salario, siempre que el total de estos acuerdos no supere el 40 % de la remuneración total.
    p.mb-4
      | El dominio de estos cinco conceptos no salariales protege al empleador de dos riesgos opuestos, incluirlos indebidamente en el IBC genera un sobrepago de aportes, y excluirlos cuando sí constituyen salario, genera una subdeclaración que la UGPP detecta y sanciona. La correcta clasificación de cada pago es, por tanto, una responsabilidad técnica que exige criterio normativo y revisión permanente de la estructura salarial de la organización.
    p.mb-4
      | Un concepto que frecuentemente genera confusión en la determinación del IBC es el auxilio de transporte. Este auxilio, fijado anualmente por el Gobierno Nacional, no constituye salario y por tanto no hace parte del IBC para efectos de cotización a seguridad social.Sin embargo, sí debe incluirse en la base de liquidación de las prestaciones sociales prima de servicios, cesantías y vacaciones, pues el artículo 7 de la Ley 1 de 1963 así lo establece expresamente. Esta diferencia de tratamiento entre la base de cotización a seguridad social y la base de liquidación de prestaciones sociales es una de las confusiones más frecuentes en la práctica y debe ser claramente comprendida por el profesional de nómina.
    p.mb-4
      | Los viáticos merecen un análisis particular porque su tratamiento depende de su naturaleza. Los viáticos que el trabajador recibe para sufragar gastos de alojamiento, alimentación y transporte cuando debe desplazarse por razones del servicio, y que se liquidan con base en los gastos reales incurridos, no constituyen salario y no se incluyen en el IBC. Por el contrario, los viáticos que de manera permanente y regular recibe el trabajador como complemento de su salario independientemente de si se desplaza o no sí constituyen salario y deben incluirse en el IBC. La habitualidad y la retribución directa del servicio son los criterios que definen si un viático es salarial o no.
    p.mb-4
      | Un pago integra el IBC cuando el trabajador lo recibe de manera regular como retribución directa de su trabajo. Cuando el pago es ocasional, obedece a la liberalidad del empleador o constituye una ayuda sin relación directa con el servicio prestado, se excluye del IBC y no genera obligación de cotización sobre ese valor.
    p.mb-4
      | Las horas extras y los recargos nocturnos, dominicales y festivos deben incluirse en el IBC cuando son habituales. Su tratamiento frente a la base de cotización depende de la regularidad con que se paguen:
    p.mb-4
      b Horas extras habituales: 
      | el trabajador las recibe de manera regular y permanente como parte de su remuneración normal; por tanto, integran el IBC y generan obligación de cotización sobre ese valor.
    p.mb-4
      b Horas extras eventuales o excepcionales: 
      | no forman parte de la remuneración regular del trabajador; por tanto, pueden acordarse como no constitutivas de salario y excluirse del IBC.
    p.mb-4
      | En la práctica, cuando las horas extras se pagan todos los meses de manera consistente, la UGPP las considera habituales y exige que se incluyan en el IBC, independientemente de lo que establezca el contrato. Por esta razón, el profesional de nómina debe monitorear los patrones de pago y ajustar el IBC en el período en que detecte que se han convertido en un componente regular de la remuneración del trabajador.
    p.mb-4
      | La siguiente tabla sintetiza los principales conceptos salariales y no salariales con su tratamiento frente al IBC y el fundamento normativo que respalda cada determinación, con el propósito de facilitar la identificación rápida de los elementos que deben incluirse o excluirse de la base de cotización.
    p.mb-2.fw-bold Tabla 2. Conceptos que integran y excluyen el IBC
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th Concepto
            th ¿Integra o excluye el IBC? — Fundamento legal
        tbody
          tr
            td Salario básico mensual.
            td Integra. Es el componente principal del IBC. Art. 127 CST.
          tr
            td Horas extras y recargos habituales.
            td Integra. Si son regulares y permanentes, son salario. Art. 127 CST.
          tr
            td Comisiones y primas habituales.
            td Integra. Todo pago habitual como retribución directa es salario. Art. 127 CST.
          tr
            td Auxilio de transporte.
            td Excluye del IBC. No es salario, aunque sí base de prestaciones. Ley 1 de 1963.
          tr
            td Viáticos para desplazamiento (gastos reales).
            td Excluye. No son retribución del servicio sino reembolso de gastos. Art. 130 CST.
          tr
            td Bonificaciones ocasionales.
            td Excluye. Son pagos por liberalidad, no retribución directa. Art. 128 CST.
          tr
            td Beneficios no salariales pactados (hasta 40 % remuneración).
            td Excluye. Solo si están expresamente pactados como no salariales en el contrato o convención. Art. 128 CST.
          tr
            td Prima de servicios legal.
            td Excluye del IBC (se excluye como base de cotización). Art. 306 CST.
          tr
            td Cesantías e intereses sobre cesantías.
            td Excluye. No son salario sino prestaciones sociales. Art. 128 CST.
    p.mb-4
      | El dominio de los artículos 127 y 128 del CST y la aplicación correcta de sus distinciones, especialmente en los casos de mayor confusión como el auxilio de transporte, los viáticos y las horas extras habituales, constituyen la habilidad fundamental para calcular un IBC preciso. El subtema siguiente traduce estos conceptos en los procedimientos concretos de cálculo para los trabajadores dependientes.
    p.mb-4
      | Con los conceptos que integran y excluyen el IBC claramente identificados, es posible avanzar hacia los procedimientos concretos de cálculo, comenzando por los trabajadores dependientes, que representan la mayor parte de los cotizantes en cualquier organización.
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.3 Cálculo del IBC: trabajadores dependientes
    p.mb-4
      | Para los trabajadores dependientes con salario fijo, el cálculo del IBC es relativamente directo, se toma el salario mensual pactado en el contrato y se le suman todos los pagos que tengan naturaleza salarial recibidos en el período, como horas extras habituales, comisiones regulares y primas habituales. A este total se le restan los pagos expresamente catalogados como no salariales: el auxilio de transporte, los bonos de alimentación no salariales, los bonos de recreación y cualquier otro beneficio acordado como no constitutivo de salario en el contrato. El resultado es el IBC del período, que debe verificarse frente al límite mínimo de un SMLMV y el máximo de 25 SMLMV.
    p.mb-4
      | Para los trabajadores con salario variable como los vendedores a comisión, trabajadores por destajo o con bonificaciones variables, el cálculo del IBC requiere un procedimiento adicional. El artículo 19 del Decreto 1406 de 1999 establece que, para los trabajadores con salario variable, el IBC de cada período se calcula con base en el promedio del salario devengado en el trimestre anterior. Si el trabajador lleva menos de tres meses laborando, el promedio se calcula sobre el tiempo efectivamente trabajado. Esta regla del promedio trimestral tiene como propósito suavizar las variaciones entre períodos y garantizar que los aportes reflejen de manera más equilibrada la remuneración real del trabajador a lo largo del tiempo.
    p.mb-4
      | El cálculo del IBC para períodos incompletos, cuando el trabajador ingresa o se retira en una fecha diferente al primer o último día del mes, requiere la aplicación de la proporcionalidad por días. La fórmula es:
    p.mb-4
      | IBC del período = (IBC mensual ÷ 30) × número de días trabajados.
    p.mb-4
      | Esta proporcionalidad se calcula sobre 30 días independientemente del número real de días del mes 28, 29, 30 o 31, por lo que el denominador siempre es 30. El número de días cotizados que se reporta en la PILA corresponde a los días calendarios del período de vinculación, sin descontar los días de descanso remunerado.
    p.mb-4
      | Una situación especial que el profesional de nómina debe manejar correctamente es la del trabajador que recibe en el mismo período pagos salariales y no salariales. En este caso, debe segregar con precisión cuál porción de los pagos recibidos es base de cotización y cuál está excluida. Por ejemplo, si un trabajador recibe en el mes un salario básico de $2.000.000, un bono de alimentación no salarial de $300.000 y horas extras habituales por $400.000, el IBC será $2.000.000 + $400.000 = $2.400.000, excluyendo el bono de alimentación. Documentar esta segregación en la liquidación de nómina es fundamental para poder sustentarla ante la UGPP en caso de una investigación.
    p.mb-4
      | El límite máximo del IBC de 25 SMLMV es especialmente relevante para los trabajadores con altos ingresos. Para el año 2026, con un SMLMV de $1.750.905, el IBC máximo es $1.750.905 × 25 = $43.772.625. Este tope tiene implicaciones concretas en tres aspectos de la gestión de nómina:
    p.mb-4
      b Tope del IBC para cotización: 
      | un trabajador que devenga un salario superior al IBC máximo solo cotiza sobre $43.772.625, independientemente de cuánto devengue realmente.
    p.mb-4
      | Ejemplo:la gerente Laura Gómez devenga $55.000.000 mensuales. Su IBC para liquidar los aportes a salud no es $55.000.000 sino $43.772.625. El empleador calcula: $43.772.625 × 8,5 % = $3.720.673 de aporte patronal a salud. Si se calculara sobre el salario real, el aporte sería $55.000.000 × 8,5 % = $4.675.000, es decir, $954.327 más. El tope le representa al empleador un ahorro real en el costo laboral.
    p.mb-4
      b Aportes iguales para salarios distintos: 
      | dos trabajadores con salarios diferentes pero ambos superiores al IBC máximo pagan exactamente el mismo valor de aportes al sistema.
    p.mb-4
      | Ejemplo: el director Carlos Medina devenga $45.000.000 y el vicepresidente Andrés Torres devenga $90.000.000. Los dos cotizan sobre $43.772.625. Aportes a pensión de cada uno: $43.772.625 × 16 % = $7.003.620. Carlos y Andrés generan el mismo costo de seguridad social al empleador, a pesar de que Andrés gana el doble.
    p.mb-4
      b Impacto en la proyección del costo laboral: 
      | en los paquetes de compensación ejecutiva, el costo de seguridad social no crece proporcionalmente con el salario a partir del IBC máximo, lo que debe reflejarse correctamente en el presupuesto de personal.
    p.mb-4
      | Ejemplo: la empresa proyecta contratar un gerente con salario de $50.000.000. El área financiera calcula erróneamente la carga prestacional sobre $50.000.000 × 30 % = $15.000.000. El valor correcto es $43.772.625 × 30 % = $13.131.788. La diferencia de $1.868.212 mensuales representa $22.418.544 de sobrestimación del costo laboral al año.
    p.mb-4
      | El conocimiento preciso del IBC máximo evita tanto el sobrecálculo en la proyección presupuestal como el error opuesto de calcular aportes sobre el salario real cuando este supera el tope, situación que produciría un descuento indebido al trabajador y un pago en exceso al sistema que deberá gestionarse como una corrección ante el operador de la PILA.
    p.mb-4
      | El dominio de los métodos de cálculo para trabajadores dependientes cubre la mayoría de los casos de la operación diaria; sin embargo, las organizaciones con estructuras de contratación diversas también vinculan contratistas independientes, cuya base de cotización se determina mediante una regla específica establecida en la normativa colombiana.
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.4 Cálculo del IBC: trabajadores independientes y contratistas
    p.mb-4
      | Para los trabajadores independientes con contrato de prestación de servicios, el IBC se calcula sobre el 40 % del valor mensualizado del contrato. La mensualización consiste en dividir el valor total del contrato por el número de meses de duración y aplicar el 40% a ese resultado. Por ejemplo, si un contrato tiene un valor de $15.000.000 y una duración de tres meses, el valor mensualizado es $5.000.000 y el IBC es $5.000.000 × 40 % = $2.000.000. Si el contrato tiene un valor mensual ya establecido en el documento, se aplica directamente el 40 % sin necesidad de mensualizar.
    p.mb-4
      | El fundamento de la base del 40 % radica en reconocer que el contratista independiente tiene costos de operación asociados a la prestación de sus servicios que el trabajador dependiente no tiene:
    p.mb-4
      | Arrendamiento o adecuación de la oficina de trabajo.
    p.mb-4
      | Adquisición y mantenimiento de equipos y herramientas.
    p.mb-4
      | Servicios de conectividad, internet y comunicaciones.
    p.mb-4
      | Pago de seguros y pólizas de responsabilidad profesional.
    p.mb-4
      | Cumplimiento de obligaciones tributarias propias de su actividad.
    p.mb-4
      | Compra de insumos y materiales para ejecutar el contrato.
    p.mb-4
      | Otros gastos operativos necesarios para cumplir el objeto contratado.
    p.mb-4
      | El 60% restante de los honorarios se entiende destinado a cubrir estos costos, y solo el 40 % se asimila a la remuneración neta del contratista. Esta regla fue establecida mediante el Decreto 1703 de 2002 y ha sido ratificada por las normas posteriores, incluida la Ley 1955 de 2019.
    p.mb-4
      | Para los trabajadores independientes sin contrato, el IBC se determina sobre los ingresos netos del mes. Este grupo comprende tres perfiles:
    p.mb-4
      b Rentistas: 
      | personas que obtienen ingresos por arrendamiento de bienes, dividendos o rendimientos financieros, sin que exista un contrato de servicios con un contratante específico.
    p.mb-4
      b Propietarios de negocio: 
      | personas naturales que generan ingresos propios a través de una actividad comercial o empresarial independiente, como tenderos, comerciantes y microempresarios.
    p.mb-4
      b Profesionales liberales: 
      | personas que ejercen una profesión de forma autónoma sin contrato de prestación de servicios vigente, como médicos, abogados, contadores o arquitectos con consultorios o estudios propios.
    p.mb-4
      | Los tres perfiles declaran autónomamente sus ingresos netos en la PILA a través de la planilla tipo Y, y la UGPP tiene facultades para verificar la veracidad de los ingresos declarados mediante estados financieros y declaraciones de renta.
    p.mb-4
      | El IBC se determina sobre los ingresos netos del mes, definidos como los ingresos brutos menos los costos y gastos necesarios para generarlos. El trabajador independiente debe hacer esta determinación de manera autónoma y declararla en la PILA a través de la planilla tipo Y o tipo E, según corresponda. La UGPP tiene facultades para revisar la veracidad de los ingresos declarados y puede exigir documentación soporte, estados financieros y declaraciones de rentapara verificar que el IBC declarado corresponde a los ingresos reales.
    p.mb-4
      | Una situación frecuente en la práctica es la de los contratistas que tienen simultáneamente varios contratos de prestación de servicios con diferentes contratantes. Para estos casos, es necesario tener en cuenta las siguientes reglas:
    p.mb-4
      b IBC sobre el total de los contratos: 
      | el IBC se calcula sobre el 40 % de la suma del valor mensualizado de todos los contratos activos en el período, sin que el total pueda superar el límite de 25 SMLMV.
    p.mb-4
      b Responsabilidad de cada contratante: 
      | cada contratante debe verificar que el contratista esté cotizando correctamente sobre la base que le corresponde, incluyendo los demás contratos vigentes.
    p.mb-4
      b Riesgo de subdeclaración: 
      | si el contratista tiene contratos con múltiples entidades y la verificación de uno solo de ellos arroja un IBC inferior al correcto, puede existir una subdeclaración que la UGPP detectará al cruzar la información de todos los operadores de la PILA.
    p.mb-4
      | Esta situación es frecuente con contratistas que prestan servicios puntuales y debe manejarse con precisión para evitar aportes incorrectos. Por ejemplo, si Felipe Ríos firma un contrato por $800.000 con duración de 15 días, la mensualización es ($800.000 ÷ 15) × 30 = $1.600.000, y el IBC resultante es $1.600.000 × 40 % = $640.000; como este valor es inferior al SMLMV de $1.750.905 vigente en 2026, Felipe debe cotizar sobre el tope mínimo, independientemente del valor real del contrato.
    p.mb-4
      | Conocida la regla del 40 % aplicable a los contratistas independientes y los métodos de cálculo para los trabajadores dependientes, el siguiente criterio que debe verificarse en toda liquidación es que el IBC resultante se encuentre dentro del rango permitido por la normativa vigente.
    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.5 Topes mínimos y máximos del IBC
    p.mb-4
      | El sistema de seguridad social colombiano ha establecido límites mínimos y máximos para el IBC con el propósito de garantizar por un lado que todos los trabajadores coticen sobre una base suficiente que les asegure prestaciones mínimas adecuadas, y por otro que el sistema no se convierta en una carga desproporcionada para las personas con altos ingresos. Estos topes son de obligatorio cumplimiento y el profesional de nómina debe verificarlos en cada liquidación para garantizar que el IBC de cada cotizante se encuentre dentro del rango permitido.
    p.mb-4
      | El límite mínimo del IBC es de un SMLMV para todos los cotizantes sin excepción. Un trabajador con salario inferior al mínimo por jornada reducida debe cotizar al menos sobre un SMLMV completo cuando trabaja en jornada completa para un solo empleador.
    p.mb-4
      | Sin embargo, los trabajadores de tiempo parcial que tienen múltiples empleos pueden distribuir el pago de aportes entre los distintos empleadores, siempre que la suma total de los IBC declarados alcance al menos un SMLMV. Esta regla de la agregación de IBC en múltiples empleos es técnicamente compleja y genera frecuentes errores en la práctica.
    p.mb-4
      | El límite máximo del IBC es de 25 SMLMV. Para el año 2026, con un SMLMV de $1.750.905, el IBC máximo es $1.750.905 × 25 = $43.772.625. Ningún cotizante, independientemente de cuánto devengue, debe pagar aportes sobre una base superior a este monto. El empleador que descuenta del salario del trabajador una suma superior a la que correspondería con el IBC máximo incurre en una retención indebida que puede ser reclamada por el trabajador ante las autoridades laborales competentes. Es importante señalar que el límite de los 25 SMLMV aplica de manera independiente para cada contrato o relación laboral, por lo que un trabajador con múltiples contratos podría cotizar en cada uno de ellos sobre hasta $43.772.625, aunque esta situación es poco frecuente en la práctica.
    p.mb-4
      | Los cambios anuales en el valor del SMLMV implican que los topes mínimos y máximos del IBC se actualizan cada año. Para 2026, el Decreto 0159 del 19 de febrero fijó transitoriamente el SMLMV en $1.750.905. El profesional de nómina debe tener en cuenta los siguientes aspectos:
    p.mb-4
      b Decreto vigente para 2026: 
      | el Gobierno Nacional fijó el SMLMV en $1.750.905 mediante el Decreto 1469 del 29 de diciembre de 2025, ratificado por el Decreto 0159 del 19 de febrero de 2026, con un incremento del 23 % respecto del año anterior.
    p.mb-4
      b Tope mínimo del IBC para 2026: 
      | ningún cotizante puede declarar un IBC inferior a $1.750.905, independientemente del valor real de su salario o contrato.
    p.mb-4
      b Tope máximo del IBC para 2026: 
      | ningún cotizante debe pagar aportes sobre una base superior a $43.772.625, equivalente a 25 SMLMV.
    p.mb-4
      b Actualización en el sistema de nómina: 
      | los nuevos valores del SMLMV deben registrarse en el sistema de información desde el 1 de enero para garantizar que los IBC del año reflejen los topes correctos desde el primer período de liquidación.
    p.mb-4
      b Riesgo por no actualización oportuna: 
      | calcular aportes sobre el SMLMV del año anterior produce diferencias acumuladas en todos los períodos del año que la UGPP detecta con facilidad al cruzar los registros de la PILA con los valores oficiales vigentes.
    p.mb-4
      | La actualización oportuna de los topes del IBC al inicio de cada año es una tarea crítica del cierre y apertura de nómina que debe estar documentada como parte del proceso de gestión de la seguridad social de la organización.
    p.mb-4
      | Verificados los topes normativos del IBC, la práctica profesional presenta situaciones en las que, la base de cotización varía dentro del mismo período como consecuencia de novedades salariales, incapacidades, licencias o cambios en la remuneración, variaciones que requieren un tratamiento técnico específico para garantizar la precisión de la liquidación.
    Separador
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.6 Variaciones del IBC
    p.mb-4
      | Los trabajadores con salario variable presentan uno de los mayores retos en el cálculo del IBC porque su remuneración fluctúa de un mes a otro, haciendo que la base de cotización varíe también. La regla del promedio trimestral establece que el IBC del período actual se calcula con base en el promedio del salario variable de los tres meses anteriores. Esta regla tiene una lógica redistributiva, en los meses de altos ingresos el IBC real puede ser superior al promedio, y en los meses bajos puede ser inferior, pero en el conjunto del trimestre los aportes se equilibran alrededor de la remuneración real del trabajador.
    p.mb-4
      | Cuando un trabajador con salario variable ingresa o cuando el sistema de remuneración cambia de fijo a variable, el período de promediación se adapta al tiempo disponible según las siguientes reglas:
    p.mb-4
      b Primer mes laborado: 
      | el IBC se calcula sobre el salario devengado en ese único mes, pues no existen meses anteriores para promediar.
    p.mb-4
      | Ejemplo: Andrea ingresa en octubre y devenga $2.500.000. Su IBC de octubre es $2.500.000.
    p.mb-4
      b Segundo mes laborado: 
      | el IBC se calcula sobre el promedio de los dos meses disponibles.
    p.mb-4
      | Ejemplo: en noviembre Andrea devenga $2.800.000. Su IBC es ($2.500.000 + $2.800.000) ÷ 2 = $2.650.000.
    p.mb-4
      b Tercer mes laborado: 
      | el IBC se calcula sobre el promedio de los tres meses disponibles.
    p.mb-4
      | Ejemplo: en diciembre Andrea devenga $3.000.000. Su IBC es ($2.500.000 + $2.800.000 + $3.000.000) ÷ 3 = $2.766.667.
    p.mb-4
      b Cuarto mes laborado: 
      | se aplica plenamente la regla del promedio de los tres meses anteriores, con independencia del tiempo que lleve el trabajador en la empresa.
    p.mb-4
      | Este período de transición debe manejarse con cuidado en el sistema de nómina para garantizar que los IBC iniciales sean correctos y no generen inconsistencias que la UGPP detecte en períodos posteriores.
    p.mb-4
      | Las variaciones temporales del IBC requieren que el profesional de nómina calcule bases de cotización diferenciadas según los días efectivamente laborados y los días en que aplica una novedad. Las situaciones más frecuentes son:
    p.mb-4
      b Licencia de maternidad: 
      | el IBC corresponde al valor de la licencia pagada por la EPS, equivalente al 100 % del salario de la trabajadora. Los aportes a pensión y ARL continúan sobre este IBC; la cotización a salud la asume directamente la EPS.
    p.mb-4
      b Incapacidad por enfermedad general: 
      | el IBC se segrega entre los días laborados, calculados sobre el salario proporcional, y los días de incapacidad, calculados sobre el valor del subsidio pagado por la EPS al 66,67 %.
    p.mb-4
      b Suspensión del contrato: 
      | durante los días de suspensión no hay obligación de cotizar, pues no existe remuneración ni subsidio. El IBC del período se calcula únicamente sobre los días efectivamente laborados antes y después de la suspensión.
    p.mb-4
      | Ejemplo: un trabajador labora 10 días del mes y los 20 días restantes está incapacitado. El IBC de los 10 días laborados se calcula sobre el salario proporcional; el IBC de los 20 días de incapacidad es el valor del subsidio pagado por la EPS. Los dos IBC son diferentes y deben reportarse por separado en la PILA con los códigos de novedad correspondientes.
    p.mb-4
      | La correcta segregación de estos IBC en la PILA garantiza que las entidades del sistema reciban la información exacta del período y que el historial de cotizaciones del trabajador refleje fielmente su situación laboral real.
    p.mb-4
      | Una variación especial que requiere manejo técnico preciso es la del trabajador que recibe en el mismo mes un pago extraordinario de naturaleza salarial, como una bonificación habitual no prevista en el contrato, pero pagada de manera regular por varios años, que incrementa significativamente el IBC del período. La UGPP puede cuestionar que esta bonificación no se haya incluido en el IBC de meses anteriores cuando la evidencia muestre que era habitual, generando una liquidación retroactiva que incluya los meses en que se omitió. Por esta razón, el profesional de nómina debe analizar con criterio la habitualidad de cada pago salarial y ajustar el IBC oportunamente cuando detecte que un concepto ha adquirido carácter regular.
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
