<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Casos prácticos de liquidación en la PILA
    p.mb-4
      | Los casos prácticos que se presentan a continuación integran todos los conceptos desarrollados en este componente formativo, el IBC, porcentajes, novedades, tipos de planilla y plazos, en situaciones laborales completas que el profesional de nómina puede encontrar en su práctica diaria. Cada caso está diseñado para ilustrar una combinación específica de variables que afectan la liquidación y para mostrar el proceso paso a paso que debe seguirse para llegar a una planilla correcta y completa.
    p.mb-4
      | La resolución de cada caso sigue una secuencia metodológica estructurada que permite abordar con precisión cualquier situación de liquidación, incluso aquellas que combinan múltiples variables de forma simultánea. Los pasos que la conforman son:
    p.mb-4
      b Identificar el tipo de vinculación y el régimen de cotización aplicable: 
      | determinar si el cotizante es trabajador dependiente, contratista independiente o aprendiz, y establecer los porcentajes correspondientes a salud, pensión y riesgos laborales.
    p.mb-4
      b Determinar el IBC del período con sus particularidades: 
      | aplicar el método de cálculo según el tipo de remuneración, el número de días cotizados y las novedades que afectan el salario del período.
    p.mb-4
      b Identificar las novedades y sus códigos en la PILA: 
      | reconocer las novedades presentes en el período, como ingresos, retiros, incapacidades o licencias, y asignar el código correcto para cada una en la planilla.
    p.mb-4
      b Calcular los aportes y verificar el total liquidado: 
      | determinar el valor de los aportes a cada componente del sistema y confirmar que el total calculado en el sistema de nómina coincide con el generado por el operador de la PILA antes de realizar el pago.
    p.mb-4
      | La aplicación sistemática de esta secuencia en cada período de liquidación reduce significativamente el riesgo de errores en la PILA, garantiza que los aportes de cada cotizante lleguen con exactitud a las entidades del sistema y protege a la organización frente a posibles investigaciones de la Unidad de Gestión Pensional y Parafiscal (UGPP). El profesional que interioriza y aplica estos cuatro pasos de manera habitual desarrolla una competencia técnica que le permite enfrentar con confianza, en cualquier situación de liquidación, independientemente de la complejidad de la estructura de contratación de la organización.
    p.mb-4
      | Los cuatro casos que se presentan a continuación ilustran las situaciones de liquidación más frecuentes en la práctica profesional, una empresa con trabajadores dependientes de diferente tipo de remuneración, novedades de incapacidad y licencia de maternidad, contratistas independientes con contratos de distinto valor y duración, y la corrección de una planilla con IBC subdeclarado. Cada caso integra los conceptos desarrollados en este componente formativo y muestra el proceso de cálculo paso a paso, desde la determinación del IBC hasta la transmisión de la planilla y el pago oportuno de los aportes al sistema.
    h3.mb-4 Caso 1: empresa con trabajadores dependientes
    p.mb-4
      | La empresa El Progreso S.A.S., con NIT terminado en 5, liquida los aportes de octubre de 2024 con tres trabajadores de diferentes tipos de remuneración. Pedro Gómez, auxiliar administrativo con salario fijo de $1.800.000, tiene un IBC igual a su salario. María López, vendedora con salario variable, tiene un IBC de $2.067.000, calculado como promedio de los tres meses anteriores: julio $2.200.000, agosto $1.900.000 y septiembre $2.100.000. Carlos Rueda, mensajero con salario mínimo de $1.300.000, tiene ese mismo valor como IBC; el auxilio de transporte de $162.000 se excluye. La nómina total de $5.200.000 equivale a 4 SMLMV: la empresa está exonerada del SENA e ICBF y paga únicamente la Caja de Compensación Familiar ($208.000). La fecha límite de pago es el 19 de noviembre de 2024.
    h3.mb-4 Caso 2: incapacidad y licencia de maternidad
    p.mb-4
      | La empresa Distribuciones del Centro Ltda. presenta dos novedades en noviembre de 2024 que requieren un tratamiento diferenciado en la PILA. Alejandra Castro (salario $3.500.000) inicia licencia de maternidad el 1 de noviembre: los aportes a pensión y ARL continúan sobre el IBC de $3.500.000; la cotización a salud no se paga en la PILA porque la EPS la asume directamente. Se reporta la novedad LAM. Rodrigo Peña (salario $2.000.000) presenta incapacidad del 10 al 25 de noviembre (16 días): los dos primeros días los asume el empleador al 100 % del IBC diario ($66.667 × 2 = $133.333); los 14 días restantes los asume la EPS al 66,67 % del IBC diario ($44.445 × 14 = $622.222). Se reporta la novedad ING. Los IBC para salud y para pensión y ARL deben reportarse por separado en la PILA.
    h3.mb-4 Caso 3: contratistas independientes
    p.mb-4
      | La empresa Consultores Asociados S.A.S. verifica los aportes de tres contratistas activos en octubre de 2024 antes de cancelar sus honorarios. Andrés Morales tiene un contrato por $6.000.000 a tres meses: el valor mensualizado es $2.000.000 y el 40 % es $800.000, que resulta inferior al SMLMV; por tanto, el IBC definitivo es $1.300.000. Lucía Fernández tiene un contrato mensual de $4.500.000: el 40 % es $1.800.000, que supera el SMLMV y se aplica como IBC. Felipe Ríos tiene un contrato de un mes por $1.000.000: el 40 % es $400.000, inferior al SMLMV; el IBC definitivo es $1.300.000. Los tres contratistas asumen el 100 % de sus aportes mediante planilla tipo T. La empresa verifica el comprobante de pago de la PILA antes de realizar cada desembolso de honorarios, protegiendo su responsabilidad solidaria ante la UGPP.
    h3.mb-4 Caso 4: corrección de la planilla
    p.mb-4
      | La empresa Manufacturas del Tolima S.A.S. detecta en diciembre de 2024 que declaró el IBC de Sandra Cifuentes sobre $1.800.000 en agosto, septiembre y octubre, cuando el salario real era de $2.200.000 desde agosto, tras un incremento que no fue reportado como novedad VSP. La diferencia de $400.000 mensual generó aportes subdeclarados en salud, pensión y ARL durante tres períodos consecutivos. El total subdeclarado asciende aproximadamente a $342.000 sin ARL, más los intereses moratorios calculados desde el vencimiento de cada planilla original. Para corregir la situación, la empresa tramita las planillas tipo A ante el operador de la PILA para los tres períodos afectados, reportando el IBC correcto de $2.200.000 para Sandra. El operador calcula las diferencias y genera los valores adicionales a pagar. La detección oportuna del error reduce significativamente el costo total de la corrección.
    p.mb-4
      | El análisis conjunto de los cuatro casos permite cerrar la sección con una síntesis de los errores más frecuentes en la práctica profesional y que concentran la mayoría de las investigaciones de la UGPP, junto con las estrategias de control que permiten prevenirlos de manera sistemática.
    h3.mb-4 Síntesis de los casos prácticos y errores frecuentes
    p.mb-4
      | El análisis de los casos prácticos presentados permite identificar los errores más frecuentes que cometen los profesionales en el proceso de liquidación de la seguridad social y que, de manera acumulada, representan la mayoría de las investigaciones de la UGPP. El primer error frecuente es la omisión de trabajadores en la PILA, ya sea por descuido, por sistemas de nómina mal configurados o por la incorporación tardía de nuevos empleados al sistema, la omisión de un trabajador en la planilla es una de las infracciones que la UGPP detecta con mayor facilidad al cruzar los registros laborales con los aportes reportados.
    p.mb-4
      | El segundo error frecuente es la subdeclaración del IBC, que puede producirse por incluir conceptos no salariales en la base de cotización, lo que resulta en sobrepago, más frecuentemente, por excluir conceptos salariales, lo que resulta en subdeclaración. La incorrecta clasificación de las horas extras habituales como no salariales, la omisión de comisiones recurrentes en el IBC o el no reporte de incrementos salariales como novedades VSP son las causas más comunes de subdeclaración que la UGPP investiga y sanciona. Una revisión semestral de la coherencia entre los conceptos salariales pagados y el IBC reportado en la PILA es una práctica preventiva altamente recomendable.
    p.mb-4
      | El tercer error frecuente es el manejo incorrecto de las novedades, especialmente las de incapacidad y licencia. Confundir los días a cargo del empleador con los días a cargo de la EPS en las incapacidades por enfermedad común, no reportar la novedad ING cuando corresponde, o no segregar correctamente el IBC para salud del IBC para pensión y ARL durante los períodos de novedad, son errores que afectan tanto al empleador que puede pagar valores incorrectos, como al trabajador, cuyo historial de cotizaciones puede quedar incompleto o incorrecto. El dominio técnico de las novedades y sus códigos en la PILA es una competencia central que diferencia al profesional experto del operador de nómina básico.
    p.mb-4
      | Finalmente, el cuarto error frecuente es el pago tardío de la PILA. Los intereses moratorios que genera el pago fuera de plazo pueden parecer menores en el corto plazo, pero se acumulan y pueden representar un costo significativo a lo largo del año. Además, el historial de pagos tardíos es un indicador de riesgo para la UGPP, que puede priorizar las empresas con incumplimientos frecuentes para sus procesos de fiscalización. La implementación de un calendario de vencimientos, la automatización del proceso de pago mediante débito automático y la definición clara de responsabilidades internas son las medidas más eficaces para garantizar el pago oportuno de la PILA en todas las situaciones, incluso en los meses con festivos o cierres de período simultáneos.

</template>

<script>
export default {
  name: 'Tema4',
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
