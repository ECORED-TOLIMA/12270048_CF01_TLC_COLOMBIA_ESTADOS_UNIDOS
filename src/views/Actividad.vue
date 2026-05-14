<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
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
      tema: 'El reto del exportador',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la comprensión de los conceptos fundamentales del APC Colombia con Estados Unidos, las reglas de origen y los Incoterms 2020.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es un acuerdo comercial?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un impuesto cobrado al momento de importar mercancías.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un pacto entre países para reducir barreras al comercio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Una política para regular el sistema tributario interno.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un tratado orientado a la protección del medio ambiente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: 'El APC Colombia–EE. UU. se clasifica como:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una unión económica con política fiscal y monetaria común.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un mercado común con libre circulación de personas y capital.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una zona de libre comercio con disciplinas de nueva generación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Una integración total con autoridades políticas supranacionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿En qué fecha entró en vigor el TLC Colombia con Estados Unidos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El 15 de mayo de 2012, mediante el Decreto 993 de ese año.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El 22 de noviembre de 2010, tras su aprobación legislativa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El 1 de enero de 2015, al concluir el período de negociación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El 18 de mayo de 2008, al firmarse el texto en Washington.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué entidad administra las aduanas en Colombia?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La Organización Mundial del Comercio (OMC).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El Departamento Administrativo Nacional de Estadística (DANE).',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El Ministerio de Comercio, Industria y Turismo (MinCIT).',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La Dirección de Impuestos y Aduanas Nacionales (DIAN).',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: 'El principio de trato nacional en el APC implica:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Priorizar las exportaciones nacionales sobre las importaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Igualar los precios de los productos en ambos mercados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Otorgar trato no menos favorable a los productos importados.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Cobrar mayores impuestos a los bienes de procedencia externa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué organismo controla el ingreso de mercancías en EE. UU.?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La Administración de Alimentos y Medicamentos (FDA).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La Oficina de Aduanas y Protección Fronteriza (CBP).',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La Organización Mundial del Comercio (OMC).',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La Comisión Económica para América Latina (CEPAL).',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Cuál es un criterio de origen reconocido en el APC?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El precio de venta del producto en el mercado de destino.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El tipo de cambio aplicado en la operación de exportación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El nivel de inflación del país en el año de la exportación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El criterio de producto totalmente obtenido en el territorio.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué significa la sigla VCR en el marco de las reglas de origen?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Valor comercial reducido por acuerdo entre las partes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Valor de contenido regional aportado al producto final.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Variable de comercio regulado por normas aduaneras internas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Volumen de carga real transportada en la operación comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Quién emite la certificación de origen en el marco del APC?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La DIAN, mediante sello oficial y formulario institucional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La Cámara de Comercio, mediante el formulario EUR.1.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El exportador, mediante el sistema de autocertificación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La DIAN, mediante sello oficial y formulario institucional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué consecuencia tiene incumplir las reglas de origen del APC?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No se genera ninguna consecuencia para el exportador.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se reduce el impuesto aplicado a la mercancía afectada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se eliminan definitivamente las exportaciones del país.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Se pagan aranceles plenos, intereses y posibles sanciones.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué son los Incoterms 2020?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Impuestos especiales cobrados en operaciones de importación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Normas contables aplicadas al registro del comercio exterior.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reglas que definen costos, riesgos y responsabilidades comerciales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Tipos de cambio oficiales para operaciones de comercio exterior.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Cuál es el Incoterm que implica mayor responsabilidad para el vendedor?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'DDP: el vendedor asume costos, flete e impuestos en destino.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'EXW: la entrega ocurre en las instalaciones del vendedor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'FOB: el riesgo se transfiere al colocar la carga a bordo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'FCA: la entrega se realiza al primer transportista designado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué Incoterm se usa con mayor frecuencia en exportaciones marítimas colombianas?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'DAP: entrega en el lugar acordado sin descarga ni impuestos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'CIP: el vendedor paga transporte y seguro de cobertura amplia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'FOB: el riesgo termina al colocar la carga a bordo del buque.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'EXW: la responsabilidad del vendedor termina en su fábrica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué entidad regula la inocuidad alimentaria en EE. UU.?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La Oficina de Aduanas y Protección Fronteriza (CBP).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La Dirección de Impuestos y Aduanas Nacionales (DIAN).',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La Organización de los Estados Americanos (OEA).',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La Administración de Alimentos y Medicamentos (FDA).',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué es la desgravación arancelaria en el marco del APC?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El aumento progresivo de impuestos sobre los productos importados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La reducción gradual de aranceles según un cronograma pactado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El control que ejerce el Estado sobre los productos de exportación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La regulación del sistema financiero en el comercio bilateral.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Cuál de los siguientes sectores ha obtenido beneficios claros con el TLC?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El sector tecnológico, por su alto nivel de innovación interna.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El sector de transporte público y movilidad urbana nacional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El sector minero exclusivamente, por sus condiciones especiales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El sector de flores y café, con acceso preferencial al mercado.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué implica el acceso efectivo al mercado en el marco del TLC?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Únicamente la reducción de aranceles pactada en el acuerdo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Cumplir normas técnicas, sanitarias y administrativas exigidas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Exportar mercancías sin necesidad de documentación aduanera.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar todos los impuestos internos de ambos países firmantes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Qué es el Operador Económico Autorizado (OEA)?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un impuesto especial aplicado a las exportaciones nacionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una norma contable exigida en el comercio internacional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una certificación aduanera que agiliza trámites comerciales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un tipo de arancel preferencial establecido en el APC.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Qué protege la propiedad intelectual en el marco del APC?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los precios de exportación negociados entre las partes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los procedimientos aduaneros aplicados en la frontera.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El transporte y la logística de las mercancías exportadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Las marcas, patentes, denominaciones de origen y derechos de autor.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es uno de los principales desafíos del TLC para Colombia?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La falta de productos disponibles para exportar al exterior.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La eliminación total de todos los impuestos al comercio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La presión competitiva en sectores agrícolas sensibles.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El exceso de acuerdos comerciales vigentes en el país.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
