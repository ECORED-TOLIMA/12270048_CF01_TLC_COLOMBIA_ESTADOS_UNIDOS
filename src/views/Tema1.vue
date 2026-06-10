<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Acuerdos comerciales del TLC entre Colombia y Estados Unidos

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema1/1.png', alt='', style="width: 290px").m-auto
      .col-lg-9
        p El comercio internacional se articula a través de acuerdos que los países negocian para facilitar el intercambio de bienes, servicios e inversiones. Colombia ha construido, a lo largo de las últimas décadas, una red de dieciocho acuerdos comerciales vigentes que cubren cerca del 70 % del comercio exterior nacional. El más relevante, por el peso económico de su contraparte y la profundidad de sus disposiciones, es el Acuerdo de Promoción Comercial (APC) con Estados Unidos, vigente desde 2012. 

        .row.align-items-center.justify-content-center
          .col-lg-12
            .row.justify-content-center.mt-2
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-center.bg-base2.p-3(data-aos="fade-right")
                  .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/tema1/2.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                  .col-lg
                    p Comprender la naturaleza de este instrumento, su historia y sus efectos diferenciados sobre los sectores productivos colombianos es el punto de partida indispensable para quienes ejercen actividades en el ámbito del comercio exterior.

    p.mt-4 Para facilitar la comprensión progresiva del tratado, se abordan sus principales componentes conceptuales, históricos y económicos, los cuales permiten interpretar su alcance y aplicación en el contexto del comercio internacional.

    SlyderF.mt-4(columnas="col-lg-6 col-xl-4")
      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema1/3.svg', style="width:128px ").img100.m-auto
        p.text-center
            b Concepto de acuerdo comercial
        p.text-center.mb-0 Se analiza como un pacto entre países que facilita el intercambio de bienes, servicios e inversiones. 
              
      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema1/4.svg', style="width:128px ").img100.m-auto
        p.text-center
            b Tipología de acuerdos comerciales
        p.text-center.mb-0 Se clasifican según el nivel de integración económica entre los países participantes. 
              
      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema1/5.svg', style="width:128px ").img100.m-auto
        p.text-center
            b Historia del APC
        p.text-center.mb-0 Se revisa el proceso de negociación, firma y evolución del tratado entre Colombia y Estados Unidos. 
              
      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema1/6.svg', style="width:128px ").img100.m-auto
        p.text-center
            b Vigencia del APC
        p.text-center.mb-0 Se identifica su entrada en vigor y su aplicación en el comercio bilateral. 
              
      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema1/7.svg', style="width:128px ").img100.m-auto
        p.text-center
            b Beneficios del tratado
        p.text-center.mb-0 Se reconocen las oportunidades generadas para sectores productivos colombianos. 
              
      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema1/8.svg', style="width:128px ").img100.m-auto
        p.text-center
            b Desafíos del tratado
        p.text-center.mb-0 Se analizan las dificultades y retos que enfrentan algunos sectores económicos. 
              
      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema1/9.svg', style="width:128px ").img100.m-auto
        p.text-center
            b Comprensión integral del acuerdo
        p.text-center.mb-0 Se construye una visión global que facilita interpretar sus normas y su aplicación práctica.  
              

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/10.png', alt='', style="width: 290px").m-auto
      .col-lg-9
        .row.align-items-start.mt-4
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema1/11.svg', style='width: 100px').m-auto
          
          .col
            p En conjunto, estos elementos permiten comprender el Tratado de Libre Comercio entre Colombia y Estados Unidos desde una perspectiva integral. Asimismo, facilitan la interpretación de sus disposiciones y su aplicación en situaciones reales del comercio internacional, fortaleciendo la toma de decisiones en los procesos de importación y exportación. 
    
 
        p.mt-2 En este contexto, resulta fundamental comprender qué es un acuerdo comercial y cómo se clasifica, con el fin de interpretar su alcance dentro del comercio internacional.   

    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Concepto y tipos de acuerdos comerciales

    .bloque-texto-g.bloque-texto-g--inverso.bg-base4.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/12.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Un acuerdo comercial es un pacto vinculante celebrado entre dos o más países con el objetivo de eliminar o reducir las barreras arancelarias y no arancelarias al intercambio de bienes, servicios e inversiones. La Organización Mundial del Comercio (OMC, 2024) define los acuerdos comerciales regionales (ACR) como tratados recíprocos suscritos entre dos o más socios, los cuales pueden adoptar la forma de acuerdos de libre comercio o uniones aduaneras y deben notificarse a la Secretaría de la OMC. El propósito fundamental de estos instrumentos es otorgar a los países firmantes condiciones de acceso más favorables que las ofrecidas al resto del mundo, generando seguridad jurídica y predictibilidad para los operadores económicos.


    p.mt-4 El sistema mundial de comercio reposa sobre principios que la OMC estableció en el Acuerdo General sobre Aranceles Aduaneros y Comercio (GATT, 1994) y que los tratados bilaterales como el APC recogen y amplían. Conocer estos principios permite entender por qué las reglas del tratado son vinculantes y cuál es el margen de acción de cada país para proteger sus sectores productivos.


    .row.justify-content-center.mt-4
      .col-lg-3.d-none.d-lg-block
        figure(data-aos="fade-up")
          img(src='@/assets/curso/tema1/13.png', alt='', style="width: 100%").m-auto
      .col-lg-7
        LineaTiempoD.color-primario.linea-bold
          .row(numero="1" titulo="Nación más favorecida (NMF)")
            .col-md-12.mb-4.mb-md-0
              p Obliga a cada país miembro de la OMC a extender automáticamente a todos sus socios comerciales cualquier ventaja arancelaria que conceda a un tercero. Los tratados de libre comercio son la excepción autorizada a este principio, siempre que cubran sustancialmente todo el comercio entre las partes.
    
          .row(numero="2" titulo="Trato nacional")
            .col-md-12.mb-4.mb-md-0
              p Prohíbe aplicar a los productos importados impuestos internos, reglamentos técnicos o procedimientos administrativos más restrictivos que los aplicados a los productos nacionales similares, una vez que la mercancía ha superado los controles aduaneros de ingreso.
                
    
          .row(numero="3" titulo="Consolidación arancelaria")
            .col-md-12.mb-4.mb-md-0
              p Compromiso por el cual un país se obliga a no elevar un arancel por encima del nivel pactado en sus Listas de Concesiones ante la OMC o en el cronograma de un tratado bilateral. Otorga certeza jurídica a los exportadores sobre los costos de acceso al mercado.

          .row(numero="4" titulo="Transparencia")
            .col-md-12.mb-4.mb-md-0
              p Exige que cada país notifique a la OMC sus medidas comerciales, aranceles, cuotas, normas técnicas, subsidios y las publique de forma accesible. En el APC, este principio se desarrolla en el capítulo 18 y obliga a publicar las resoluciones anticipadas de clasificación arancelaria y origen.

          .row(numero="5" titulo="Reciprocidad")
            .col-md-12.mb-4.mb-md-0
              p En los acuerdos bilaterales como el APC, implica que ambas partes asumen compromisos equivalentes de desgravación y acceso, aunque los cronogramas pueden ser asimétricos para proteger sectores sensibles de cada economía. 
    

    .row.bg-04
      .col-12
        .p-5
          .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
            .col-lg-3.d-none.d-lg-block.order-2
              figure
                img(src='@/assets/curso/tema1/15.svg', alt='', style="width: 290px").m-auto
            .col-lg-8
              p El APC entre Colombia y Estados Unidos supera el modelo clásico de los tratados de libre comercio de primera generación, que se limitaban a reducir aranceles. Este acuerdo incorpora disciplinas propias de los denominados acuerdos de nueva generación, que regulan ámbitos que antes se consideraban exclusivos de la política interna de cada Estado.   

              .row.align-items-center.justify-content-center
                .col-lg-12
                  .row.justify-content-center.mt-2
                    .col-lg-12(data-aos="fade-down")
                      .row.d-flex.align-items-center.bg-1.p-3(data-aos="fade-right")
                        .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                          figure.m-0.p-0.w-100.h-100.d-flex
                            img(src='@/assets/curso/tema1/14.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                        .col-lg
                          p Las siguientes características se derivan de los capítulos del Acuerdo de Promoción Comercial (APC) entre Colombia y Estados Unidos y permiten comprender su alcance más allá de la reducción arancelaria. En este sentido, evidencian cómo el tratado regula diversos ámbitos del comercio internacional y establece compromisos que inciden en la operación económica entre ambos países.

          .row.mt-4.justify-content-center
            .col-10
              ul.lista-ul--color.bg-base.p-3.bg-r8
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 #[b Liberalización de servicios (Capítulo 11):] permite el acceso a mercados de servicios como telecomunicaciones, transporte y servicios profesionales, bajo el principio de lista negativa, donde se liberalizan todos los servicios no excluidos. 
          
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 #[b Protección de inversiones (Capítulo 10):] garantiza al inversionista extranjero trato justo y equitativo, protección frente a expropiación sin indemnización y acceso a mecanismos de solución de controversias. 

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 #[b Estándares laborales y ambientales (Capítulos 17 y 18):] establecen el compromiso de cumplir la legislación laboral y ambiental, con mecanismos de cooperación y sanción en caso de incumplimiento. 
          
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 #[b Compras públicas (Capítulo 9):] permite la participación de empresas en procesos de contratación estatal, siempre que se cumplan los umbrales definidos en el acuerdo. 

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 #[b Propiedad intelectual (Capítulo 16):] establece estándares de protección superiores a los mínimos internacionales en marcas, patentes, derechos de autor y datos de prueba. 

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 #[b Comercio electrónico (Capítulo 15):] regula las transacciones digitales, prohíbe aranceles a productos digitales y promueve la confianza en el entorno electrónico.


    p.mt-4 En conjunto, estos elementos permiten comprender que el APC entre Colombia y Estados Unidos es un acuerdo de nueva generación que trasciende la desgravación arancelaria. Asimismo, facilitan su análisis dentro de la tipología de integración económica y orientan la interpretación de sus implicaciones en el comercio internacional.

    p La siguiente tabla presenta las etapas de integración económica y ubica el Acuerdo de Promoción Comercial entre Colombia y Estados Unidos dentro de esta clasificación.


    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 1. 
          span Etapas de integración económica según Balassa y ejemplos vigentes 

        .tabla-a.color-acento-contenido
          table
            caption(style="margin-top: 0px !important") Nota. Adaptada de Balassa (1961), CEPAL (2023) y OMC (2024). El APC Colombia–EE. UU. se clasifica como zona de libre comercio bilateral de nueva generación, con disciplinas que trascienden la desgravación arancelaria.

            thead(style="background-color: #D3E7E9")
              tr
                th Etapa
                th Características
                th Ejemplos vigentes (2025)

            tbody
              tr(style="background-color: #FBF7F1")
                td.text-start 
                  b Acuerdo de Alcance Parcial (AAP)
                td.text-start Reducción arancelaria sobre una lista limitada de productos. No compromete la totalidad del universo arancelario. Es la forma más básica de integración bilateral.
                td.text-start AAP Colombia–Cuba; AAP Colombia–Nicaragua; convenios de comercio en el marco de ALADI.

              tr
                td.text-start 
                  b Zona de Libre Comercio (ZLC)
                td.text-start Eliminación de aranceles sobre prácticamente la totalidad del comercio entre las partes. Cada país conserva su política arancelaria frente a terceros. El APC Colombia–EE. UU. corresponde a esta etapa, con disciplinas adicionales propias de los acuerdos de nueva generación.
                td.text-start APC Colombia–EE. UU. (2012); USMCA (2020); TLC Colombia–Canadá (2011); TLC Colombia–UE (2013).

              tr(style="background-color: #FBF7F1")
                td.text-start
                  b Unión aduanera
                td.text-start Además de la desgravación interna, los miembros adoptan un Arancel Externo Común (AEC) frente a terceros países y armonizan instrumentos de defensa comercial.
                td.text-start Mercosur (con AEC desde 1995); Comunidad Andina (CAN) cuenta con AEC parcial; Unión Aduanera del África Austral (SACU).

              tr
                td.text-start 
                  b Mercado común
                td.text-start Suma a la unión aduanera la libre circulación de personas, capitales y servicios, con armonización regulatoria progresiva.
                td.text-start CAN permite la libre movilidad con cédula nacional; el Mercosur ha avanzado parcialmente; el modelo más consolidado fue la Comunidad Económica Europea hasta 1993.

              tr(style="background-color: #FBF7F1")
                td.text-start
                  b Unión económica y monetaria
                td.text-start Implica la armonización de políticas macroeconómicas, fiscales y, eventualmente, la adopción de una moneda única y un banco central supranacional.
                td.text-start Unión Europea con la zona euro (1999); 20 países de los 27 miembros utilizan el euro como moneda común.

              tr
                td.text-start 
                  b Integración total
                td.text-start Etapa máxima propuesta por Balassa: unificación de políticas económicas, sociales y, en última instancia, políticas. Implica autoridades supranacionales con poder vinculante.
                td.text-start No existe ejemplo plenamente realizado; la UE se aproxima parcialmente en ámbitos como la política comercial común.


    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema1/16.png', alt='', style="width: 390px").m-auto
      .col-lg-8
        p La tabla anterior permite ubicar el Acuerdo de Promoción Comercial (APC) dentro de las etapas de integración económica y comprender la importancia de las reglas de origen. Estas reglas evitan que mercancías de terceros países ingresen con aranceles más bajos y se reexporten sin cumplir las condiciones del acuerdo. Este fenómeno, conocido como desviación del comercio, representa uno de los principales riesgos que las reglas de origen buscan prevenir.

        .row.align-items-center.justify-content-center
          .col-lg-12
            .row.justify-content-center.mt-2
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-center.bg-1.p-3.bg-r8(data-aos="fade-right")
                  .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/tema1/17.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                  .col-lg
                    p A 2025, Colombia cuenta con dieciocho acuerdos comerciales vigentes entre zonas de libre comercio bilaterales y multilaterales, que cubren cerca del 70 % del comercio exterior nacional. El APC con Estados Unidos es, en valor, el más importante de todos, dado el peso del mercado estadounidense en las exportaciones colombianas. El conocimiento de la tipología expuesta permite situar correctamente el APC dentro de este entramado y comprender el alcance diferencial de sus compromisos respecto a otros tratados suscritos por el país.


    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Vigencia y aplicación del TLC


    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/18.png', alt='', style="width: 290px").m-auto
      .col-lg-9
        p El Acuerdo de Promoción Comercial entre Colombia y Estados Unidos representa un hito en la política de comercio exterior colombiana. Su negociación formal se inició el 18 de mayo de 2004 en Cartagena, con la participación original de Colombia, Perú y Ecuador. Tras veintiún meses de negociación y quince rondas de trabajo técnico, el texto fue concluido en febrero de 2006 y firmado el 22 de noviembre de ese mismo año en Washington D. C.

        .row.align-items-center.justify-content-center
          .col-lg-12
            .row.justify-content-center.mt-2
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-center.bg-2.p-3.bg-r8(data-aos="fade-right")
                  .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/tema1/19.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                  .col-lg
                    p Uno de sus antecedentes más relevantes fue el ATPDEA (Andean Trade Promotion and Drug Eradication Act — Ley de Preferencias Arancelarias Andinas y Erradicación de Drogas), que otorgaba a Colombia acceso preferencial a cerca de 6.300 subpartidas de forma unilateral y temporal. El APC convirtió esas ventajas en compromisos jurídicos estables y recíprocos, aportando la seguridad de largo plazo que la inversión exportadora requería. 

    p.mt-4 Para comprender la trayectoria del acuerdo desde su negociación hasta los retos actuales, la siguiente tabla sintetiza sus hitos más significativos.


    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 2. 
          span Hitos históricos del APC Colombia – EE. UU.

        .tabla-a.color-acento-contenido
          table
            caption(style="margin-top: 0px !important") Nota. Elaboración con base en fuentes de Ministerio de Comercio, Industria y Turismo (2018, 2024a), Oficina del Representante Comercial de los Estados Unidos (2012), Sistema de Información sobre Comercio Exterior de la OEA (2012) y Banco de la República (2025).

            thead(style="background-color: #D3E7E9")
              tr
                th Hito
                th Fecha clave
                th Significado

            tbody
              tr(style="background-color: #FBF7F1")
                td.text-start 
                  b Inicio de negociaciones
                td.text-start Mayo de 2004
                td.text-start Primer paso hacia la integración comercial profunda con la mayor economía del mundo. Colombia, Perú y Ecuador inician las rondas conjuntas con Estados Unidos.

              tr
                td.text-start 
                  b Conclusión de la negociación
                td.text-start Febrero de 2006
                td.text-start Cierre técnico del texto del acuerdo tras quince rondas de negociación.

              tr(style="background-color: #FBF7F1")
                td.text-start
                  b Firma del acuerdo
                td.text-start 22 de noviembre de 2006
                td.text-start Suscripción oficial del texto en Washington D. C.

              tr
                td.text-start 
                  b Aprobación en Colombia
                td.text-start Ley 1143 de 2007 / Sentencia C-750 de 2008
                td.text-start Aprobación legislativa y declaratoria de exequibilidad por la Corte Constitucional.

              tr(style="background-color: #FBF7F1")
                td.text-start
                  b Plan de Acción Laboral
                td.text-start Abril de 2011
                td.text-start Compromisos de Colombia en derechos laborales como precondición para la ratificación estadounidense.

              tr
                td.text-start 
                  b Entrada en vigor
                td.text-start 15 de mayo de 2012 (Decreto 993 de 2012)
                td.text-start Inicio del calendario de desgravación arancelaria.

              tr(style="background-color: #FBF7F1")
                td.text-start
                  b Arancel base 10 % (IEEPA)
                td.text-start Abril de 2025
                td.text-start Imposición de arancel base de 10 % por parte de la administración Trump a importaciones desde Colombia, con coexistencia parcial de las preferencias del APC.

        p.mt-4 Los hitos registrados en la tabla anterior ilustran que el APC no es un instrumento estático, su aplicación ha evolucionado conforme a los cambios en las administraciones de ambos países y a las condiciones del comercio internacional. El conocimiento de esta trayectoria es clave para interpretar el estado actual del acuerdo y anticipar los ajustes normativos que puedan surgir en los próximos años, especialmente en un contexto de revisión de las políticas comerciales de Estados Unidos.


    .bloque-texto-g.bloque-texto-g--inverso.bg-base4.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/20.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La estructura exportadora colombiana evidencia una concentración en productos primarios y mineroenergéticos. En 2024, los combustibles y minerales representaron cerca del 50 % de las exportaciones hacia Estados Unidos, seguidos por café, flores, banano y manufacturas industriales. En contraste, las importaciones desde ese país se concentraron en maquinaria, productos químicos, plásticos y bienes agroindustriales. Esta asimetría ha sido analizada por el Banco de la República (2014, 2025), que la atribuye, entre otros factores, a las brechas de productividad, las dificultades de admisibilidad sanitaria y la limitada diversificación productiva del país.




    .row.align-items-start.mt-4
      .col-lg-1.mb-lg-0.mb-4
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema1/21.svg', style='width: 100px').m-auto
      
      .col
        p En el contexto actual (2025–2026), el Tratado de Libre Comercio (TLC) entre Colombia y Estados Unidos enfrenta nuevos desafíos asociados a su revisión y a los cambios en la política comercial internacional. En este sentido, se destacan algunos aspectos clave que permiten comprender los temas en discusión y su impacto en el comercio bilateral:

    .row.justify-content-center.mt-4
      .col-lg-9
        .row.mt-4.bg-base.p-3.bg-r8
          .col-12
            ul.lista-ul--color
              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 #[b Revisión del acuerdo:] el gobierno colombiano ha manifestado interés en analizar y ajustar algunos capítulos del TLC para mejorar su funcionamiento y equidad. 
        
              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 #[b Materia agropecuaria:] se revisan aspectos relacionados con la protección de la producción nacional, el acceso a mercados y la competencia con productos importados. 

              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 #[b Propiedad intelectual:] se analizan normas sobre protección de marcas, patentes y datos, especialmente en relación con su impacto en sectores como el farmacéutico y el agroindustrial. 
        
              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 #[b Política comercial internacional:] se consideran las decisiones de otros países, como la aplicación de medidas arancelarias por parte de Estados Unidos, que pueden afectar el comercio. 

              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 #[b Impacto en el comercio bilateral:] estos factores influyen en las condiciones de acceso al mercado y en las oportunidades para exportadores colombianos. 

      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/22.png', alt='', style="width: 290px").m-auto


    p.mt-4 En conjunto, estos aspectos permiten comprender los principales temas que actualmente se analizan en el Tratado de Libre Comercio entre Colombia y Estados Unidos. Asimismo, facilitan identificar cómo las decisiones en materia agropecuaria, de propiedad intelectual y de política comercial inciden en las condiciones de acceso a los mercados y en las oportunidades para los actores del comercio internacional.

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color2.p-4
              p.text-center China se ha consolidado como principal fuente de importaciones para Colombia, mientras Estados Unidos continúa siendo el principal destino de las exportaciones. Esta dinámica resalta la importancia de comprender el TLC en su evolución y en su impacto actual en el comercio internacional.

    p.mt-4 En este contexto, comprender la evolución y las dinámicas actuales del Tratado de Libre Comercio permite analizar sus efectos en la economía nacional. Por ello, resulta pertinente examinar cómo este acuerdo ha generado beneficios y desafíos en los diferentes sectores económicos de Colombia.


    separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Sectores económicos: beneficios y desafíos

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema1/23.png', alt='', style="width: 290px").m-auto
      .col-lg-9
        p El Tratado de Libre Comercio (TLC) entre Colombia y Estados Unidos ha generado efectos diferenciados en los distintos sectores de la economía nacional. Su análisis requiere reconocer tanto las oportunidades aprovechadas como los retos estructurales que persisten más de trece años después de su entrada en vigor. En este contexto, Jiménez y Montoya (2020) señalan que los efectos del acuerdo varían según la capacidad de cada sector para adaptarse a las exigencias técnicas, sanitarias y logísticas del mercado estadounidense.

        .row.align-items-center.justify-content-center
          .col-lg-12
            .row.justify-content-center.mt-2
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-center.bg-base2.p-3.bg-r8(data-aos="fade-right")
                  .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/tema1/24.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                  .col-lg
                    p Estos efectos no se presentan de manera uniforme. Mientras algunos sectores han aprovechado las oportunidades derivadas del acceso a nuevos mercados, otros enfrentan retos asociados a la competencia internacional y a las exigencias productivas. En este sentido, resulta pertinente analizar cómo el acuerdo incide en las dinámicas económicas del país, a partir de los siguientes aspectos:

    .row.justify-content-center.mt-4
      .col-lg-9
        LineaTiempoD.color-primario.linea-bold
          .row(numero="1" titulo="Comercio")
            .col-md-12.mb-4.mb-md-0
              p El sector comercial agrupa las actividades de intercambio de bienes y servicios entre los dos países. En el marco del TLC, es el ámbito donde se aplican directamente las preferencias arancelarias y se evidencian los efectos de la apertura económica.

              p #[b Beneficio:] eliminación de aranceles para más del 99 % de los productos industriales desde la entrada en vigor del acuerdo. 
              p #[b Desafío:] concentración de exportaciones en bienes primarios, como combustibles y minerales, y limitada diversificación productiva.

              
    
          .row(numero="2" titulo="Consumidores")
            .col-md-12.mb-4.mb-md-0
              p Los consumidores son las personas y empresas que adquieren bienes y servicios en el mercado. El TLC les genera efectos directos al modificar los precios, la oferta disponible y la competencia entre productos nacionales e importados. 
              p #[b Beneficio:] acceso a tecnología, maquinaria e insumos a mejores precios, lo que amplía la oferta de bienes finales. 
              p #[b Desafío:] mayor competencia para sectores sensibles como lácteos, granos y oleaginosas. 

   
          .row(numero="3" titulo="Institucional")
            .col-md-12.mb-4.mb-md-0
              p El ámbito institucional comprende el conjunto de reglas, normas y entidades que regulan el funcionamiento del acuerdo. El TLC fortalece estándares en materia de propiedad intelectual, transparencia y derechos laborales, pero también limita ciertos márgenes de la política interna. 
              p #[b Beneficio:] fortalecimiento de estándares en propiedad intelectual, transparencia y derechos laborales. 
              p #[b Desafío:] limitación del margen de maniobra del Estado para aplicar ciertas políticas industriales y agropecuarias.



          .row(numero="4" titulo="Agropecuario")
            .col-md-12.mb-4.mb-md-0
              p El sector agropecuario abarca las actividades agrícolas, ganaderas y agroindustriales del país. Sus resultados frente al TLC son heterogéneos: algunos productos han ampliado su acceso al mercado estadounidense, mientras otros enfrentan mayor presión competitiva por las importaciones. 
              p #[b Beneficio:] acceso preferencial para productos como flores, café y frutas tropicales (aguacate Hass, gulupa y uchuva). 
              p #[b Desafío:] presión sobre productores de maíz amarillo, arroz, soya y lácteos debido a importaciones con arancel cero. 

              
    
          .row(numero="5" titulo="Inversión")
            .col-md-12.mb-4.mb-md-0
              p La inversión hace referencia a los recursos destinados a financiar actividades productivas en el país. El TLC ha contribuido al aumento de la inversión extranjera directa proveniente de Estados Unidos, aunque su distribución sectorial presenta concentraciones que limitan el encadenamiento productivo nacional. 
              p #[b Beneficio:] aumento de la inversión extranjera directa, con cifras destacadas provenientes de Estados Unidos. 
              p #[b Desafío:] concentración de la inversión en sectores extractivos y financieros, con menor encadenamiento productivo. 

              
    
          .row(numero="6" titulo="Empleo")
            .col-md-12.mb-4.mb-md-0
              p El empleo refleja los efectos del acuerdo sobre la generación y pérdida de puestos de trabajo en los diferentes sectores económicos. Su comportamiento varía según la capacidad de cada actividad para adaptarse a las nuevas condiciones del mercado internacional. 
              p #[b Beneficio:] generación de empleo formal en sectores exportadores no tradicionales. 
              p #[b Desafío:] pérdida de empleos en sectores agrícolas tradicionales por la competencia de importaciones. 
              
        p.mt-4.bg-5.p-3 Información basada en: MinCIT, Analdex, DANE, Banco de la República y estudios académicos sobre el TLC.

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/25.png', alt='', style="width: 290px").m-auto
      .col-lg-9
        p En conjunto, estos aspectos permiten comprender que los efectos del TLC no son homogéneos, sino que dependen de las condiciones y capacidades de cada sector económico para aprovechar las oportunidades y enfrentar los retos del comercio internacional.

        .row.align-items-start.mt-4
          .col-lg-1.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema1/26.svg', style='width: 100px').m-auto
          
          .col
            p El impacto del Tratado de Libre Comercio entre Colombia y Estados Unidos se refleja de manera diferenciada en los sectores económicos del país, según sus niveles de competitividad y capacidad de adaptación al mercado internacional. Mientras algunos sectores han logrado fortalecer su presencia en el comercio exterior, otros enfrentan retos asociados a la competencia, las exigencias técnicas y las condiciones productivas. Estas diferencias evidencian la importancia de analizar el comportamiento sectorial del acuerdo, con el fin de identificar sus principales efectos en la economía nacional y orientar estrategias de aprovechamiento:


    .row.bg-06.mt-4
      .col-12
        .p-5
          SlyderA.p-4.bg-6.bg-r8(tipo="b")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-6.mb-4.mb-lg-0
                p #[b Sector industrial:] el sector industrial agrupa las actividades relacionadas con la transformación de materias primas en bienes elaborados y representa un componente clave en la diversificación productiva del país. En el marco del TLC, este sector ha mostrado avances en competitividad y acceso a mercados.

                p En este contexto, se destacan los siguientes aspectos:
                p #[b - Acceso a mercados:] apertura inmediata para la mayoría de los productos industriales. 
                p #[b - Sectores destacados:] textiles, confecciones, calzado, materiales de construcción y agroindustria. 
                p #[b - Reducción de costos:] acceso a insumos importados a menores precios. 
                p #[b - Impacto empresarial:] mejora en productividad y competitividad.
              
              .col-lg-6
                figure(data-aos="fade-down")
                  img(src='@/assets/curso/tema1/27.png', style='width: 572px')
          
            .row.justify-content-center.align-items-center.p-4
              .col-lg-6.mb-4.mb-lg-0
                p #[b Pymes:] las pequeñas y medianas empresas son fundamentales en la economía nacional; sin embargo, presentan limitaciones para integrarse plenamente al comercio internacional.

                p En este contexto, se identifican las siguientes limitaciones:
                p #[b - Baja participación:] reducido número de pymes exportadoras. 
                p #[b - Limitaciones técnicas:] dificultades para cumplir certificaciones y estándares internacionales. 
                p #[b - Barreras logísticas:] costos elevados y procesos de exportación complejos. 
                p #[b - Necesidad de fortalecimiento:] acceso a capacitación, financiamiento y acompañamiento institucional. 
              
              .col-lg-6
                figure(data-aos="fade-down")
                  img(src='@/assets/curso/tema1/28.png', style='width: 572px')
          
            .row.justify-content-center.align-items-center.p-4
              .col-lg-6.mb-4.mb-lg-0
                p #[b Sector agropecuario:] el sector agropecuario presenta resultados heterogéneos, con productos que han ampliado su acceso al mercado estadounidense y otros que enfrentan mayor competencia externa.

                p En este contexto, se evidencian los siguientes efectos:
                p #[b - Productos favorecidos:] flores, café, banano, aguacate Hass y frutas tropicales. 
                p #[b - Acceso al mercado:] incremento de exportaciones hacia Estados Unidos. 
                p #[b - Productos sensibles:] maíz, arroz, soya y lácteos. 
                p #[b - Competencia externa:] aumento de importaciones con reducción arancelaria. 
                p #[b - Alerta gremial:] preocupaciones de organizaciones como Fedegán (2024).
              
              .col-lg-6
                figure(data-aos="fade-down")
                  img(src='@/assets/curso/tema1/29.png', style='width: 572px')

            .row.justify-content-center.align-items-center.p-4
              .col-lg-6.mb-4.mb-lg-0
                p #[b Otros sectores productivos:] en otros sectores, los efectos del acuerdo dependen de la capacidad de adaptación empresarial y del nivel de competitividad frente al mercado internacional.

                p En este contexto, se identifican las siguientes situaciones:
                p #[b - Sector arrocero:] impactos negativos y necesidad de reconversión productiva. 
                p #[b - Pequeños productores:] requieren asistencia técnica y apoyo institucional. 
                p #[b - Sector confecciones:] posicionamiento en nichos de mayor valor mediante innovación y calidad. 
                p #[b - Empresas no adaptadas:] pérdida de participación frente a competidores internacionales.
              
              .col-lg-6
                figure(data-aos="fade-down")
                  img(src='@/assets/curso/tema1/30.png', style='width: 572px')

            .row.justify-content-center.align-items-center.p-4
              .col-lg-6.mb-4.mb-lg-0
                p #[b Bioeconomía:] la bioeconomía se configura como una oportunidad estratégica para diversificar la oferta exportadora y generar valor a partir de los recursos biológicos del país.

                p En este contexto, se destacan los siguientes elementos:
                p #[b - Ventaja competitiva:] biodiversidad como recurso estratégico. 
                p #[b - Nuevos mercados:] bioproductos, biotecnología y servicios ambientales. 
                p #[b - Retos:] fortalecimiento regulatorio e institucional.
              
              .col-lg-6
                figure(data-aos="fade-down")
                  img(src='@/assets/curso/tema1/31.png', style='width: 572px')


            .row.justify-content-center.align-items-center.p-4
              .col-lg-6.mb-4.mb-lg-0
                p #[b Política pública:] el aprovechamiento del TLC requiere la articulación con políticas públicas orientadas al desarrollo productivo, la innovación y la sostenibilidad.

                p En este contexto, se consideran los siguientes aspectos:
                p #[b - Misión Bioeconomía 2030:] metas de exportación de bioproductos. 
                p #[b - Articulación estratégica:] innovación, propiedad intelectual y acceso a recursos genéticos. 
                p #[b - Enfoque de desarrollo:] fortalecimiento más allá del acceso arancelario. 
              
              .col-lg-6
                figure(data-aos="fade-down")
                  img(src='@/assets/curso/tema1/32.png', style='width: 572px')
                     

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/33.png', alt='', style="width: 290px").m-auto
      .col-lg-9
        p En conjunto, estos elementos permiten comprender que los efectos del Tratado de Libre Comercio no son homogéneos, sino que varían según las condiciones y capacidades de cada sector económico. Asimismo, evidencian la importancia de fortalecer la competitividad, la innovación y la articulación institucional para aprovechar las oportunidades del comercio internacional y enfrentar sus desafíos.

        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color3.p-4
                  p El análisis del sector agropecuario evidencia que, aunque el Tratado de Libre Comercio ha generado oportunidades de acceso a mercados internacionales, también ha incrementado la presión competitiva sobre algunos productores nacionales. De acuerdo con ProColombia (2024) y gremios como la Federación Colombiana de Ganaderos (Fedegán), resulta necesario fortalecer las capacidades productivas y la articulación institucional para mejorar el aprovechamiento del acuerdo en este sector.


    p.mt-4 A continuación, se presentan los principales aspectos identificados:

    .row.align-items-center.justify-content-center
      .col-lg-10
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center.bg-base.bg-r8(data-aos="fade-right")
              .col-lg.p-4
                .row.mt-4.bg-base.p-3.bg-r8
                  .col-12
                    ul.lista-ul--color
                      li.d-flex.align-items-start
                        span.icono-img
                        p.mb-0 #[b Acceso a mercados:] incremento de exportaciones en productos con ventajas competitivas. 
              
                      li.d-flex.align-items-start
                        span.icono-img
                        p.mb-0 #[b Competencia externa:] aumento de importaciones en productos sensibles. 

                      li.d-flex.align-items-start
                        span.icono-img
                        p.mb-0 #[b Sector lácteo:] presión por reducción de aranceles y mayor ingreso de productos importados. 

      
                      li.d-flex.align-items-start
                        span.icono-img
                        p.mb-0 #[b Productores rurales:] necesidad de asistencia técnica y apoyo institucional. 

                      li.d-flex.align-items-start
                        span.icono-img
                        p.mb-0 #[b Reconversión productiva:] adaptación a nuevas condiciones del mercado internacional.


              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema1/34.svg', alt='', class="w-100 h-100 object-fit-cover" style="margin-left:-20px")

        p.mt-4 El sector floricultor colombiano se ha consolidado como uno de los principales beneficiarios del Tratado de Libre Comercio, gracias a su capacidad exportadora y a su posicionamiento en el mercado estadounidense. Este sector representa un ejemplo de aprovechamiento exitoso del acuerdo, impulsado por la calidad del producto, el cumplimiento de estándares internacionales y el desarrollo de capacidades logísticas.

    p.mt-4 A continuación, se presentan los principales factores que explican este comportamiento:

    .row.bg-04
      .col-12
        .p-5
          .row.justify-content-center
            .col-lg-10
              .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
                .col-lg-4.d-none.d-lg-block
                  figure
                    img(src='@/assets/curso/tema1/35.png', alt='', style="width: 290px").m-auto
                .col-lg-8
                  .row.align-items-center.bg-base.bg-r8.p-4
                    .col-12
                      ol.lista-ol--cuadro
                        li 
                          .lista-ol--cuadro__vineta
                            span.text-black A
                          p.mb-0 Liderazgo exportador: alta participación en el mercado de Estados Unidos. 
                  
                        li 
                          .lista-ol--cuadro__vineta
                            span.text-black B
                          p.mb-0 Ventaja competitiva: calidad, variedad y cumplimiento de estándares internacionales. 
                  
                        li 
                          .lista-ol--cuadro__vineta
                            span.text-black C
                          p.mb-0 Acceso preferencial: eliminación de aranceles para exportaciones. 

                        li 
                          .lista-ol--cuadro__vineta
                            span.text-black D
                          p.mb-0 Generación de empleo: impacto positivo en zonas rurales. 

                        li 
                          .lista-ol--cuadro__vineta
                            span.text-black E
                          p.mb-0 Capacidad logística: eficiencia en transporte y distribución internacional.  


            .row.justify-content-center.mt-4
              .col-lg-10
                .row.align-items-center
                  .col-lg-12
                    .cajon.color2.p-4
                      p En conjunto, los aspectos identificados en el sector agropecuario y los factores que explican el desempeño del sector floricultor evidencian que el aprovechamiento del Tratado de Libre Comercio es diferencial entre actividades productivas. Mientras algunos sectores han logrado consolidar su presencia en los mercados internacionales, otros requieren fortalecer sus capacidades productivas, técnicas e institucionales. En este sentido, resulta fundamental promover estrategias de adaptación, innovación y articulación institucional que permitan mejorar la competitividad y ampliar la participación en el comercio exterior.


    .row.justify-content-center.mt-2
      .col-lg-10
        .row.justify-content-center
          .col-10.col-md-6.col-lg-10.mb-4.mb-md-0(data-aos="fade-right")
            .tarjeta-avatar
              img(src='@/assets/curso/tema1/36.svg' style="width: 100px").m-auto
              .tarjeta.color-primario.shadow
                .p-4
                  .row.justify-content-center.mb-3
                    .col-auto
                      .py-2.px-3
                        p.mb-0 #[b El Tratado de Libre Comercio ha generado efectos diferenciados en los sectores económicos del país. Mientras la industria y el sector floricultor han fortalecido su competitividad, el ámbito agropecuario enfrenta mayores desafíos por la competencia externa. Su aprovechamiento depende de la capacidad productiva, la articulación institucional y la diversificación económica.]
        
        
    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema1/37.png', alt='', style="width: 290px").m-auto
      .col-lg-9
        p A partir del análisis de los efectos del Tratado de Libre Comercio en los sectores económicos, se identifican factores clave que influyen en su aprovechamiento. Estos factores permiten comprender las condiciones necesarias para que los actores productivos accedan de manera efectiva a los mercados internacionales y fortalezcan su competitividad en el contexto del comercio exterior.  

        p A continuación, se presentan los principales factores que determinan el aprovechamiento sectorial del acuerdo: 

        ul.lista-ul--color.bg-base2.bg-r8.p-4
          li
            i.lista-ul__vineta
            p.mb-0 #[b Capacidad empresarial:] cumplimiento de exigencias técnicas, sanitarias y de calidad requeridas por el mercado estadounidense. 

          li
            i.lista-ul__vineta
            p.mb-0 #[b Políticas públicas de apoyo:] disponibilidad de instrumentos financieros, asistencia técnica e infraestructura logística que faciliten la actividad exportadora. 

          li
            i.lista-ul__vineta
            p.mb-0 #[b Articulación institucional:] coordinación entre el sector privado, las autoridades aduaneras y las entidades formadoras, como el SENA.

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/38.svg', alt='', style="width: 290px").m-auto
      .col-lg-9
        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color2.p-4
                  p En conjunto, estos factores evidencian que el aprovechamiento del acuerdo no depende únicamente del acceso preferencial a los mercados, sino de la capacidad de los sectores para adaptarse a sus exigencias. Asimismo, resaltan la importancia de fortalecer la competitividad, la innovación y la articulación institucional como elementos clave para consolidar la participación del país en el comercio internacional.

        .row.align-items-center.mt-4
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema1/39.svg', style='width: 83px').m-auto
          
          .col
            p En este contexto, el aprovechamiento efectivo del Tratado de Libre Comercio no solo depende de las capacidades productivas y de la articulación institucional, sino también del conocimiento y cumplimiento de las normas que regulan su aplicación. Por ello, resulta necesario analizar los principios y disposiciones que orientan el trato nacional y los procedimientos aduaneros en el marco del acuerdo.
























</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
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
