<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    #Actividad
      Actividad(:cuestionario="cuestionario")

</template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Liquidación y registro en la Planilla Integrada de Seguridad Social (PILA)',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> desarrollar la competencia para calcular el IBC, aplicar los porcentajes de cotización a cada componente del sistema y diligenciar correctamente la Planilla Integrada de Liquidación de Aportes (PILA), mediante la resolución del cuestionario.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Sobre qué valor se calcula el Ingreso Base de Cotización (IBC) para un contratista independiente?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El 100% del valor mensualizado del contrato.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El 50% del valor mensualizado del contrato.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El 40% del valor mensualizado del contrato.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El 30% del valor mensualizado del contrato.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Para un contratista independiente, el IBC corresponde al 40 % del valor mensualizado del contrato.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es el límite máximo del IBC expresado en salarios mínimos mensuales legales vigentes (SMLMV)?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '10 SMLMV.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '15 SMLMV.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '20 SMLMV.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '25 SMLMV.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El IBC no puede superar, de manera general, los 25 salarios mínimos mensuales legales vigentes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Qué concepto NO hace parte del IBC para efectos de cotización a seguridad social?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Salario básico mensual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Comisiones habituales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Auxilio de transporte.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Horas extras permanentes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El auxilio de transporte no hace parte del IBC para efectos de cotización a seguridad social.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'Un trabajador devenga $2.500.000 de salario básico y recibe un bono de alimentación no salarial de $400.000. ¿Cuál es su IBC?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '$2.900.000.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '$2.500.000.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '$2.100.000.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '$400.000.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El bono de alimentación no salarial se excluye del IBC; por eso, la base corresponde al salario básico de $2.500.000.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'Para un trabajador con salario variable, ¿sobre qué base se calcula el IBC según el Decreto 1406 de 1999?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El salario del mes inmediatamente anterior.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El promedio del salario devengado en el trimestre anterior.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El salario mínimo legal vigente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El salario pactado en el contrato inicial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Para salario variable, el IBC se calcula con el promedio del salario devengado en el trimestre anterior.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Cómo se calcula el IBC para un período incompleto cuando un trabajador ingresa el día 16 del mes con un salario de $3.000.000?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '$3.000.000 completos, pues el mes ya empezó.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '$1.500.000, equivalente a la mitad del salario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '($3.000.000 ÷ 30) × 15 días = $1.500.000.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '$3.000.000 ÷ 2 meses = $1.500.000.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Cuando el período es incompleto, el IBC se calcula de forma proporcional a los días efectivamente laborados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es el porcentaje total de cotización al Sistema General de Salud para un trabajador dependiente?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '8,5%.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '10%.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '12,5%.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '16%.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El aporte total al Sistema General de Salud corresponde al 12,5 % del IBC.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'En el Sistema General de Salud, ¿cómo se distribuye el aporte del 12,5% entre empleador y trabajador?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Empleador 8,5% — Trabajador 4%.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Empleador 6% — Trabajador 6,5%.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Empleador 10% — Trabajador 2,5%.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Empleador 12,5% — Trabajador 0%.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! En salud, el empleador aporta el 8,5 % y el trabajador aporta el 4 % del IBC.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es el porcentaje total de cotización al Sistema General de Pensiones?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '12%.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '14%.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '16%.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '20%.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El aporte total al Sistema General de Pensiones corresponde al 16 % del IBC.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Quién paga el 100% del aporte al Sistema General de Riesgos Laborales (ARL) para un trabajador dependiente?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El trabajador.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El empleador.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Se divide en partes iguales entre empleador y trabajador.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El Estado a través del SENA.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! En trabajadores dependientes, el empleador asume el 100 % del aporte al Sistema General de Riesgos Laborales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Qué entidades reciben los aportes parafiscales de una empresa con más de 10 trabajadores que NO está exonerada?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo la Caja de Compensación Familiar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'SENA, ICBF y Caja de Compensación Familiar.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'SENA, ICBF, Caja de Compensación y EPS.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo SENA e ICBF.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los aportes parafiscales se destinan al SENA, al ICBF y a la caja de compensación familiar, cuando la empresa no está exonerada.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Qué empresas están exoneradas del pago de aportes al SENA e ICBF sobre los salarios inferiores a 10 SMLMV?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Todas las empresas sin excepción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo las empresas del sector agrícola.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Las personas jurídicas y naturales empleadoras que liquidan el impuesto sobre la renta.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Solo las microempresas con menos de 5 trabajadores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Las personas jurídicas y naturales empleadoras que liquidan impuesto sobre la renta pueden estar exoneradas de aportes al SENA e ICBF sobre salarios inferiores a 10 SMLMV, según la normativa aplicable.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Qué es la Planilla Integrada de Liquidación de Aportes (PILA)?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un formato físico que se entrega en las oficinas de las EPS.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El mecanismo electrónico mediante el cual se liquidan y pagan los aportes al sistema de seguridad social.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Un formulario de la DIAN para declarar los costos laborales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El recibo de nómina mensual que se entrega al trabajador.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La PILA es el mecanismo electrónico mediante el cual se liquidan y pagan los aportes al Sistema de Seguridad Social Integral.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Cuántos tipos de planilla PILA existen para los diferentes cotizantes?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo un tipo de planilla para todos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Dos tipos: dependientes e independientes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Múltiples tipos según la categoría del cotizante: tipo E, T, Y, X, N, A y anulación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Tres tipos: empresas, independientes y pensionados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El componente aborda los tipos de planilla E, T, Y, X, N, A y la planilla de anulación, según el cotizante y la situación reportada.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Qué deben hacer los empleadores para corregir una planilla PILA ya pagada con errores en el IBC de un trabajador?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ignorar el error si la diferencia es menor al 1% del valor pagado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Presentar una planilla de corrección ante el operador de información PILA.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Notificar directamente al trabajador para que haga el trámite.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Esperar a que la UGPP detecte el error en la siguiente auditoría.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Para corregir errores en una planilla ya pagada, se debe presentar una planilla de corrección ante el operador de información PILA.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Qué plazo tienen los empleadores grandes (más de 200 trabajadores) para pagar la PILA mensualmente?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los primeros 5 días del mes siguiente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los primeros 10 días del mes siguiente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Hasta el día 7 del mes siguiente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El plazo varía según el último dígito del NIT, entre los días 7 y 22 del mes siguiente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El plazo de pago de la PILA varía según el último dígito del NIT y el tipo de aportante.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿En qué cuenta contable se registra el gasto del empleador por aportes a seguridad social?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ingresos por servicios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Gastos de nómina, aportes patronales (cuentas del grupo 51 en el PUC).',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cuentas por cobrar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Pasivos financieros a largo plazo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El gasto del empleador por aportes patronales se registra en gastos de nómina, de acuerdo con las cuentas contables aplicables.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Qué información mínima debe contener una planilla PILA correctamente diligenciada?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo el nombre del empleador y el valor total a pagar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'NIT del empleador, período de cotización, número de identificación de cada cotizante, IBC, número de días cotizados y valor de cada aporte por el subsistema.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo el nombre y cédula de cada trabajador.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El contrato de trabajo y el recibo de pago de salarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Una planilla PILA debe contener datos del empleador, período de cotización, identificación del cotizante, IBC, días cotizados y valores por subsistema.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            'Una empresa paga a un contratista $8.000.000 en honorarios mensuales. ¿Cuál es el IBC y el aporte total a pensión que debe pagar el contratista?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'IBC = $8.000.000; aporte pensión = $1.280.000.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'IBC = $3.200.000 (40%); aporte pensión = $512.000 (16%).',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'IBC = $4.000.000 (50%); aporte pensión = $640.000.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'IBC = $2.400.000 (30%); aporte pensión = $384.000.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El IBC del contratista es $3.200.000, equivalente al 40 % de $8.000.000; el aporte a pensión es $512.000, correspondiente al 16 %.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'Una trabajadora estuvo incapacitada 15 días en el mes. ¿Cómo se reporta esta novedad en la PILA?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Se reporta el mes completo como si hubiera trabajado normalmente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'No se reporta; la EPS se encarga directamente sin necesidad de PILA.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Se reporta la novedad IGE con los días de incapacidad, ajustando el IBC de forma proporcional a los días laborados.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Se elimina al trabajador de la planilla y se vuelve a incluir el mes siguiente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La incapacidad por enfermedad general se reporta con la novedad IGE y los días correspondientes, ajustando la liquidación según el período laborado y la novedad registrada.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
