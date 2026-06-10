export default {
  global: {
    Name: 'Marco normativo y generalidades del TLC',
    Description:
      'El programa TLC Colombia con Estados Unidos fortalece competencias en comercio exterior mediante el análisis del acuerdo, sus normas y oportunidades. A través de una metodología práctica con TIC y simulaciones, el aprendiz desarrolla habilidades para aplicar procesos de importación, exportación y estrategias comerciales, logrando tomar decisiones efectivas y desempeñarse con éxito en entornos internacionales competitivos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'Acuerdos comerciales del TLC entre Colombia y Estados Unidos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto y tipos de acuerdos comerciales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Vigencia y aplicación del TLC',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Sectores económicos: beneficios y desafíos',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Trato nacional y normativa aduanera',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Trato nacional y acceso al mercado',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Marco normativo del TLC',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Procedimientos y cooperación aduanera',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Reglas de origen e Incoterms',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Criterios y tipos de origen',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Certificación y verificación de origen',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Incoterms 2020 en operaciones del TLC',
            hash: 't_3_3',
          },
        ],
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
        download: 'downloads/12270048_CFA1_DU.pdf',
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
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Acuerdo de Promoción Comercial (APC)',
      significado:
        'pacto firmado entre Colombia y Estados Unidos en 2012 para facilitar el comercio entre los dos países. Permite que los productos colombianos ingresen al mercado estadounidense pagando menos o ningún arancel, y viceversa.',
    },
    {
      termino: 'Arancel',
      significado:
        'impuesto que se paga cuando una mercancía entra a otro país. Por ejemplo, si Colombia exporta flores a Estados Unidos y existe un arancel del 5 %, ese porcentaje se aplica sobre el valor de la carga al momento de ingresar.',
    },
    {
      termino: 'Balanza comercial',
      significado:
        'comparación entre lo que un país vende al exterior y lo que compra del exterior. Si vende más de lo que compra, hay superávit; si compra más de lo que vende, hay déficit.',
    },
    {
      termino: 'Canasta de desgravación',
      significado:
        'grupo en el que se clasifica cada producto para indicar en cuánto tiempo desaparece su arancel. Algunos productos quedan sin arancel de inmediato y otros lo hacen de forma gradual durante varios años.',
    },
    {
      termino: 'Certificación de origen',
      significado:
        'documento en el que el exportador declara que su producto fue elaborado en Colombia y cumple las reglas del acuerdo. En el TLC con Estados Unidos, el mismo exportador la firma sin necesidad de un sello oficial.',
    },
    {
      termino: 'Desgravación arancelaria',
      significado:
        'reducción progresiva del impuesto que se cobra a una mercancía importada, hasta llegar a cero. Funciona como un plan a la inversa: cada año el arancel baja un poco hasta desaparecer por completo.',
    },
    {
      termino: 'Incoterms',
      significado:
        'reglas internacionales que indican quién paga el transporte, el seguro y los trámites aduaneros en una exportación. Evitan malentendidos entre el vendedor y el comprador al dejar claro hasta dónde llega la responsabilidad de cada uno.',
    },
    {
      termino: 'Reglas de origen',
      significado:
        'condiciones que debe cumplir un producto para demostrar que fue fabricado o transformado en Colombia y así aprovechar los descuentos arancelarios del acuerdo. Si no las cumple, debe pagar el arancel normal.',
    },
  ],
  referencias: [
    {
      referencia:
        'Balassa, B. (1961). <em>The theory of economic integration</em>. Richard D. Irwin.',
      link: '',
    },
    {
      referencia:
        'Banco de la República de Colombia. (2014). <em>Efectos del TLC Colombia–Estados Unidos sobre la estructura exportadora colombiana</em>.',
      link: '',
    },
    {
      referencia:
        'Banco de la República de Colombia. (2025). <em>Comercio exterior colombiano con Estados Unidos: evolución de la balanza comercial 2012–2024</em>. Subgerencia de Estudios Económicos.',
      link: '',
    },
    {
      referencia:
        'Cámara de Comercio de Bogotá. (2020). <em>Guía práctica Incoterms 2020: aplicación en operaciones de comercio exterior para empresas colombianas</em>.',
      link: '',
    },
    {
      referencia:
        'Cámara de Comercio Internacional [CCI]. (2020). <em>Incoterms® 2020: reglas de la CCI para el uso de términos comerciales nacionales e internacionales</em>. ICC Publishing.',
      link: '',
    },
    {
      referencia:
        'Comisión Económica para América Latina y el Caribe [CEPAL]. (2023). <em>Panorama de la inserción internacional de América Latina y el Caribe</em>.',
      link: '',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales [DIAN]. (2019). <em>Decreto 1165 de 2019: por el cual se dicta el régimen de aduanas de Colombia</em>. Ministerio de Hacienda y Crédito Público.',
      link: '',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales [DIAN]. (2023). <em>Guía del usuario: trámites de exportación en el sistema Muisca</em>. Ministerio de Hacienda y Crédito Público.',
      link: '',
    },
    {
      referencia:
        'Federación Colombiana de Ganaderos [Fedegán]. (2024). <em>Informe de impacto del TLC Colombia–Estados Unidos en el sector ganadero y lácteo</em>.',
      link: '',
    },
    {
      referencia:
        'Función Pública. (2019). <em>Guía de normas y procedimientos aduaneros en Colombia</em>. Departamento Administrativo de la Función Pública.',
      link: '',
    },
    {
      referencia:
        'Jiménez, N. y Montoya, J. (2020). <em>Tratado de Libre Comercio Colombia–Estados Unidos: análisis de los efectos en el sector confecciones del municipio de Dosquebradas, Risaralda</em> [Informe de investigación]. Fundación Universitaria del Área Andina.',
      link: '',
    },
    {
      referencia:
        'Manyoma, P. (2021). <em>[Título pendiente de completar por el experto temático]</em>. [Editorial o institución]. <em>(Dato incompleto en el CF01 — debe verificarse y completarse antes de la entrega final.)</em>',
      link: '',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo [MinCIT]. (2012). <em>Acuerdo de Promoción Comercial entre la República de Colombia y los Estados Unidos de América. texto oficial en español</em>.',
      link: '',
    },
    {
      referencia:
        'Organización Mundial del Comercio [OMC]. (2024). <em>Acuerdos comerciales regionales: información y recursos</em>.',
      link: '',
    },
    {
      referencia:
        'ProColombia. (2023). <em>Guía práctica de reglas de origen para exportadores colombianos en el marco del TLC con Estados Unidos</em>.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez ',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
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
          nombre: 'Norma Constanza Morales Cruz ',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
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
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
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
