<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Reglas de origen e Incoterms

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/1.svg', alt='', style="width: 290px").m-auto
      .col-lg-9
        p El aprovechamiento efectivo del APC entre Colombia y Estados Unidos no depende únicamente de la eliminación de aranceles, sino del cumplimiento de dos instrumentos técnicos que determinan las condiciones reales bajo las cuales una mercancía puede ingresar al mercado estadounidense con trato preferencial. Estos instrumentos operan en ámbitos distintos, el normativo-aduanero y el contractual-logístico, pero se articulan estrechamente en la práctica, pues la elección del término de negociación incide directamente en el valor utilizado para calcular el contenido regional y, por tanto, en la verificación del cumplimiento de las reglas de origen. Por ello, el operador de comercio exterior debe conocerlos y aplicarlos de manera integrada. A continuación, se describen cada uno de ellos:

    .row.justify-content-center.mt-4
      .col-lg-10
        .tarjeta--container.row.mb-5.mt-4
          .col-md.tarjeta.bg-1.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/tema3/2.svg', alt='Texto que describa la imagen')
              
            h4.text-center Reglas de origen
            p Disposiciones del capítulo 4 del APC que establecen los criterios que debe cumplir un producto para acceder a las preferencias arancelarias del acuerdo. Su verificación está a cargo del CBP en Estados Unidos y de la DIAN en Colombia. 

          .col-md.tarjeta.bg-7.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/tema3/3.svg', alt='Texto que describa la imagen')
              
            h4.text-center Incoterms 2020
            p Términos internacionales publicados por la Cámara de Comercio Internacional (CCI) que definen la distribución de responsabilidades, costos y riesgos entre el exportador y el importador en cada operación de comercio exterior. 


    p.mt-4 El dominio articulado de estos dos instrumentos permite al operador de comercio exterior planear cada operación con precisión, reducir contingencias jurídicas y logísticas, y garantizar el acceso efectivo a las condiciones preferenciales del APC. Con el fin de profundizar en su aplicación práctica, a continuación, se analizan los criterios y tipos de origen establecidos en el acuerdo.


    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Criterios y tipos de origen

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema3/4.png', alt='', style="width: 390px").m-auto
      .col-lg-8
        p Las reglas de origen son las disposiciones del APC que establecen los requisitos que debe cumplir un producto para ser considerado originario de Colombia o de Estados Unidos y, en consecuencia, beneficiarse de las preferencias arancelarias del tratado. No todo producto exportado desde Colombia hacia Estados Unidos accede automáticamente al arancel preferencial; debe demostrarse que cumple con los criterios definidos en el capítulo 4 y en el Anexo 4.1 del acuerdo, los cuales detallan reglas específicas para cada subpartida arancelaria del Sistema Armonizado (SA).

        p El APC define tres criterios principales de origen, cuya aplicación varía según las características productivas de cada bien. A continuación, se describen cada uno de ellos:


    TabsC.color-acento-botones.mt-4
      .py-3.py-md-4.bg-base(titulo="Totalmente obtenido o producido (<em>Wholly Obtained</em>)")
        .row.p-4
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3/5.png', alt='', style="width: 390px").m-auto

          .col-md-8.mb-4.mb-md-0
            p Aplica a los productos que nacen, crecen, se extraen o se cosechan íntegramente en el territorio de una de las partes. Este criterio cubre principalmente productos minerales extraídos del subsuelo, vegetales cosechados, animales nacidos y criados en el territorio, y productos derivados de estos. 


      .py-3.py-md-4.bg-base(titulo="Cambio de clasificación arancelaria (salto arancelario, CTH/CTSH)")
        .row.p-4
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3/6.png', alt='', style="width: 390px").m-auto

          .col-md-8.mb-4.mb-md-0
            p Se aplica cuando los insumos importados de terceros países se transforman de tal manera que el producto final clasifica en una partida arancelaria distinta a la de los insumos utilizados. Es el criterio más empleado en productos manufacturados, pues evalúa la transformación productiva a través del sistema de clasificación arancelaria del SA. 


      .py-3.py-md-4.bg-base(titulo="Valor de Contenido Regional (VCR)")
        .row.p-4
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3/7.png', alt='', style="width: 390px").m-auto

          .col-md-8.mb-4.mb-md-0
            p Exige que el porcentaje de valor agregado en Colombia o en Estados Unidos alcance un mínimo definido por el acuerdo, generalmente entre el 35 % y el 45 %, según la metodología de cálculo seleccionada. 



    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema3/8.png', alt='', style="width: 290px").m-auto
      .col-lg-9
        p Los tres criterios descritos determinan si un producto colombiano califica para acceder a las preferencias arancelarias del APC y no son excluyentes entre sí; el Anexo 4.1 del acuerdo permite que un mismo bien acredite el origen mediante más de uno de ellos, lo que otorga al exportador flexibilidad para elegir el que mejor se adapte a su estructura de costos y a la composición de sus insumos. En el caso específico del Valor de Contenido Regional, su verificación exige un cálculo preciso que puede realizarse mediante dos métodos reconocidos por el acuerdo.

        .row.align-items-start.mt-4
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema3/9.svg', style='width: 100px').m-auto
          
          .col
            p El cálculo del Valor de Contenido Regional (VCR), entendido como el porcentaje mínimo de valor agregado que debe generarse en el territorio de una de las partes del acuerdo para que el producto sea considerado originario, puede realizarse mediante dos métodos, cuya elección corresponde al exportador según las características de su proceso productivo (USTR, 2012, Art. 4.2 del APC): 


    .row.justify-content-center.mt-4
      .col-lg-5
        .crd.bg-10.bg-r8.p-4.h-100
          p.mb-0 #[b Método de reducción del valor (build-down):] el VCR se calcula dividiendo la diferencia entre el valor ajustado de la mercancía y el valor de los materiales no originarios, sobre el valor ajustado, multiplicado por cien. Este método requiere generalmente un VCR mínimo del 45 %.
    
      .col-lg-5.mt-lg-0.mt-4
        .crd.bg-10.bg-r8.p-4.h-100
          p.mb-0 #[b Método de aumento del valor (build-up):] el VCR se obtiene dividiendo el valor de los materiales originarios entre el valor ajustado de la mercancía, multiplicado por cien. Este método requiere generalmente un VCR mínimo del 35 %.
    
    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center.bg-1(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema3/10.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg
                p Ambos métodos producen resultados equivalentes cuando se aplican correctamente, pero parten de enfoques distintos, donde el primero mide cuánto valor no originario contiene el producto, mientras que el segundo mide cuánto valor originario aporta. La elección del método corresponde al exportador según la composición de sus insumos y la disponibilidad de información de costos. La siguiente tabla presenta de manera comparativa los criterios de origen del APC con su descripción operativa y ejemplos de aplicación en productos representativos de la oferta exportadora colombiana.        


    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 6. 
          span Criterios de origen en el Acuerdo de Promoción Comercial entre Colombia y Estados Unidos

        .tabla-a.color-acento-contenido
          table
            caption(style="margin-top: 0px !important") Nota. Adaptada de USTR (2012, Capítulo 4 y Anexo 4.1 del APC) y DIAN (2019).

            thead(style="background-color: #D3E7E9")
              tr
                th Criterio de origen
                th Descripción
                th Ejemplo aplicado

            tbody
              tr(style="background-color: #FBF7F1")
                td.text-start 
                  b Totalmente obtenido
                td.text-start Productos que nacen, crecen o se extraen íntegramente en Colombia o en Estados Unidos.
                td.text-start Café, flores cortadas, carbón, frutas tropicales, banano, aguacate Hass.

              tr
                td.text-start 
                  b Salto arancelario (CTH/CTSH)
                td.text-start Los insumos importados se transforman de modo que el producto final clasifica en una partida arancelaria distinta.
                td.text-start Mermelada de mango elaborada en Colombia con frascos de vidrio importados de China y pectina alemana.

              tr(style="background-color: #FBF7F1")
                td.text-start
                  b Valor de Contenido Regional (VCR)
                td.text-start Porcentaje de valor agregado en Colombia o Estados Unidos. (35 % <em>build-up to 45 % build-down</em>).
                td.text-start Confecciones que utilizan tela importada, pero con corte, costura, etiquetado y acabado en Colombia.
              tr
                td.text-start 
                  b Reglas específicas por producto
                td.text-start Reglas establecidas en el Anexo 4.1 del APC para subpartidas particulares.
                td.text-start <em>Yarn forward</em> rule para textiles: el hilo debe ser originario de una de las partes.

              tr(style="background-color: #FBF7F1")
                td.text-start
                  b De minimis
                td.text-start Cláusula que permite considerar originario un producto cuando los materiales no originarios representan menos del 10 % del valor ajustado.
                td.text-start Producto agroindustrial con un aditivo importado que representa menos del 10 % del valor.

    p.mt-4 Los cinco criterios sistematizados en la tabla anterior permiten al exportador colombiano identificar, según la naturaleza y composición de cada bien, el fundamento de origen aplicable y los documentos que debe conservar como soporte ante una eventual verificación por parte de las autoridades aduaneras. Su correcta aplicación determina si el producto accede al mercado estadounidense con las preferencias arancelarias del APC o si, por el contrario, queda sujeto al pago del arancel pleno. Con el fin de ilustrar cómo operan estos criterios en situaciones reales, a continuación, se presentan dos casos de exportación colombiana:

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.justify-content-center 
          AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul").color-primario
            //-1ra pestaña
            .row(titulo="Caso 1. Mermelada de mango exportada hacia Miami")
              p Una empresa colombiana produce mermelada de mango utilizando mango y azúcar de origen colombiano; sin embargo, los frascos de vidrio provienen de China y la pectina, de Alemania. El producto cumple las reglas de origen mediante el criterio de salto arancelario, puesto que la transformación industrial realizada en Colombia cambia la partida arancelaria de los insumos al producto terminado, clasificado en el capítulo 20 del SA como una preparación alimenticia. El origen extranjero de los frascos de vidrio no afecta la elegibilidad arancelaria del producto final, dado que estos se clasifican como envases bajo la misma partida arancelaria que la mermelada. 
    
            //-2da pestaña  
            .row(titulo="Caso 2. Camisas de algodón exportadas hacia Estados Unidos")
              p Caso 2. Camisas de algodón exportadas hacia Estados Unidos: una empresa de confecciones colombiana exporta camisas de algodón cuya tela es importada de Perú. El corte, la costura, el etiquetado y el empaque se realizan íntegramente en Colombia. En este caso, debe verificarse la regla específica del Anexo 4.1 del APC, conocida como yarn forward rule, que exige que el hilo y la tela sean originarios de una de las partes del acuerdo. Si el hilo proviene de Perú y no cumple la condición exigida por el APC, el producto podría no calificar como originario, incluso si el porcentaje de valor agregado en Colombia es elevado.
            

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center.justify-content-center
          .col-lg-12
            .row.justify-content-center.mt-4
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-center.bg-1.p-3.bg-r8(data-aos="fade-right")
                  .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/tema3/11.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                  .col-lg
                    p Los dos casos descritos evidencian que el cumplimiento de las reglas de origen no depende únicamente del lugar donde se realiza el proceso productivo, sino del conocimiento preciso de la partida arancelaria de los insumos y del producto terminado, así como de las reglas específicas del Anexo 4.1 del APC para cada categoría de productos. Para facilitar esta gestión, la DIAN pone a disposición de los exportadores el sistema Muisca, que permite consultar las subpartidas arancelarias y las medidas aplicables; adicionalmente, ProColombia ofrece servicios de orientación y diagnóstico de origen para los exportadores que requieran acompañamiento técnico especializado.



    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Certificación y verificación de origen

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema3/12.png', alt='', style="width: 290px").m-auto
      .col-lg-8
        p El conocimiento de los criterios de origen analizados en el apartado anterior resulta indispensable, pero insuficiente por sí solo, el exportador debe también acreditar su cumplimiento ante las autoridades aduaneras mediante una certificación de origen. A continuación, se examinan los elementos que debe contener dicho documento, el modelo de autocertificación adoptado por el APC y los procedimientos de verificación que pueden activarse durante o después del despacho de la mercancía.

        .row.align-items-center.justify-content-center
          .col-lg-12
            .row.justify-content-center.mt-4
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-center.bg-2(data-aos="fade-right")
                  .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/tema3/13.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                  .col-lg
                    p En el marco del APC, el sistema de certificación de origen se basa en la autocertificación del exportador. A diferencia de otros acuerdos comerciales que exigen un certificado emitido por una entidad gubernamental o una cámara de comercio, como el EUR.1 utilizado en la Unión Europea o el Formulario A del Sistema Generalizado de Preferencias, el APC permite que sea el propio exportador quien emita y firme la certificación, asumiendo la responsabilidad legal de su veracidad conforme al artículo 4.15 del acuerdo.



    p.mt-4 La certificación de origen debe contener, como mínimo, los siguientes elementos establecidos en el artículo 4.15 del APC:


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.mt-4.bg-base.p-3.bg-r8
          .col-12
            ul.lista-ul--color
              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Datos del exportador o productor: nombre, dirección y número de identificación tributaria de quien emite la certificación. 
     
              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Datos del importador: nombre, dirección y datos de contacto del importador en Estados Unidos. 


              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Descripción de la mercancía: información suficientemente precisa para identificar el bien en relación con la factura comercial correspondiente. 
        
              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Clasificación arancelaria: subpartida arancelaria de la mercancía a seis dígitos del Sistema Armonizado (SA). 

              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Criterio de origen aplicable: totalmente obtenido (A), cambio de clasificación arancelaria (B), valor de contenido regional (C) o regla específica por producto (D). 

              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Período cubierto: en caso de tratarse de una certificación general para múltiples embarques de productos idénticos, el período no puede exceder doce meses. 

              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Declaración de cumplimiento: firma autógrafa o digital del exportador o productor, certificando que la mercancía cumple las reglas de origen del APC.


    p.mt-4 La certificación puede redactarse en español o en inglés, aunque se recomienda el formato bilingüe para facilitar los trámites ante el CBP. No requiere sello ni aprobación de la DIAN; únicamente la firma del exportador o productor. 

    .row.bg-04
      .col-12
        .p-5
          .row.justify-content-center
            .col-lg-11
              .row.align-items-center.justify-content-center(data-aos="fade-down")
                .col-lg-4.d-none.d-lg-block
                  figure
                    img(src='@/assets/curso/tema3/14.svg', alt='', style="width: 390px").m-auto
                .col-lg-8
                  p Sin embargo, el exportador debe conservar todos los documentos soporte como facturas de materias primas, guías de transporte, registros de producción, contratos, hojas de ruta por un período mínimo de cinco años desde la fecha de la transacción, dado que el CBP puede solicitar una verificación o auditoría dentro de ese plazo estipulado en el artículo 4.18 del APC.

                  p El procedimiento de verificación del origen, regulado en el artículo 4.19 del APC, se activa cuando el CBP o la DIAN tienen razones fundadas para dudar de la veracidad de una certificación. En ese caso, la autoridad competente puede adelantar las siguientes acciones:


          .row.justify-content-center.mt-4
            .col-lg-10
              .row.align-items-center.justify-content-center
                .col-lg-12
                  .row.justify-content-center.mt-4
                    .col-lg-12(data-aos="fade-down")
                      .row.d-flex.align-items-center.bg-10.bg-r8.p-3(data-aos="fade-right")
                        .col-lg.p-4
                          .row.align-items-center
                            .col-12
                              ol.lista-ol--cuadro
                                li 
                                  .lista-ol--cuadro__vineta
                                    span.text-black A
                                  p.mb-0 #[b Solicitud de información al importador:] requerimiento de documentos adicionales que soporten la declaración de origen presentada. 
                          
                                li 
                                  .lista-ol--cuadro__vineta
                                    span.text-black B
                                  p.mb-0 #[b Envío de cuestionarios al exportador o productor:] formularios específicos que indagan sobre el proceso productivo, la composición de insumos y los registros contables del bien certificado
                          
                                li 
                                  .lista-ol--cuadro__vineta
                                    span.text-black C
                                  p.mb-0 #[b Visitas de verificación a las instalaciones del productor:] inspecciones realizadas por funcionarios de la autoridad aduanera, previa notificación y consentimiento de las partes. 

                                li 
                                  .lista-ol--cuadro__vineta
                                    span.text-black D
                                  p.mb-0 #[b Acuerdo de otros procedimientos de verificación:] mecanismos adicionales acordados entre las autoridades competentes de Colombia y Estados Unidos para casos de mayor complejidad.


                        .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                          figure.m-0.p-0.w-100.h-100.d-flex
                            img(src='@/assets/curso/tema3/15.png', alt='', class="w-100 h-100 object-fit-cover")


    p.mt-4 Las cuatro acciones descritas configuran un proceso de verificación escalonado que avanza desde la solicitud documental hasta la inspección directa en las instalaciones del productor, según el nivel de complejidad del caso y la gravedad de las dudas que presente la certificación. La autoridad competente debe emitir una resolución dentro de los ciento veinte días siguientes al inicio de la verificación, plazo prorrogable por noventa días adicionales en casos excepcionales debidamente justificados.


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center.justify-content-center
          .col-lg-12
            .row.justify-content-center.mt-4
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-center.bg-2.bg-r8.p-3(data-aos="fade-right")
                  .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/tema3/16.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                  .col-lg
                    p La autocertificación implica una mayor responsabilidad para el exportador, pero también una mayor agilidad operativa frente a otros sistemas de certificación. El incumplimiento de cualquiera de los aspectos que regula el APC en materia de origen y etiquetado genera consecuencias jurídicas y económicas específicas según el tipo de error y el actor responsable. La siguiente tabla resume los principales aspectos sujetos a la responsabilidad, los actores que responden ante las autoridades competentes y las consecuencias de cada tipo de incumplimiento.


    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 7. 
          span Responsabilidades y consecuencias en los procedimientos de origen y etiquetado

        .tabla-a.color-acento-contenido
          table
            caption(style="margin-top: 0px !important") Nota. Adaptada de USTR (2012, capítulo 4 y Anexo 4.1), DIAN (2019), FDA (2024) y 19 U.S.C. § 1592.

            thead(style="background-color: #D3E7E9")
              tr
                th Aspecto
                th Quién responde
                th Consecuencia de error

            tbody
              tr(style="background-color: #FBF7F1")
                td.text-start
                  b Etiquetado (FDA y FTC)
                td.text-start Exportador o fabricante.
                td.text-start Reetiquetado a costo del exportador en el puerto de ingreso, retención de la mercancía o destrucción si el error no es subsanable (FDA, 2024).
              tr
                td.text-start 
                  b Origen (APC, capítulo 4)
                td.text-start Exportador, quien emite la autocertificación, e importador, de manera solidaria (USTR, 2012, Art. 4.15).
                td.text-start Cobro retroactivo del arancel pleno, intereses y multas por fraude aduanero de hasta el 200 % del valor del bien.

              tr(style="background-color: #FBF7F1")
                td.text-start
                  b Registro sanitario (FDA e INVIMA)
                td.text-start Exportador o productor.
                td.text-start Retención o destrucción de la carga en el puerto de ingreso; rechazo automático de futuras importaciones del mismo proveedor mediante <em>Import Alert</em> (FDA, 2024).

              tr
                td.text-start 
                  b Aviso previo (<em>Prior Notice</em>, FDA)
                td.text-start Exportador o agente de aduanas
                td.text-start Devolución del envío al puerto de origen y asunción de los costos de flete y almacenamiento por parte del exportador FDA.

              tr(style="background-color: #FBF7F1")
                td.text-start
                  b Conservación de documentos
                td.text-start Exportador y productor.
                td.text-start Imposibilidad de ejercer defensa en un proceso de verificación y pérdida retroactiva de las preferencias arancelarias obtenidas (USTR, 2012, Art. 4.18).

    p.mt-4 El incumplimiento de las reglas de origen puede generar consecuencias jurídicas y económicas de considerable gravedad para el exportador y el importador. Entre las más relevantes se destacan las siguientes:

    .tarjeta--container.row.mb-5.mt-4
      .col-md.tarjeta.bg-1.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema3/17.svg', alt='Texto que describa la imagen')
          
        h4.text-center Cobro retroactivo de aranceles
        p Si el CBP detecta que una mercancía ingresó con preferencias arancelarias sin cumplir los requisitos del APC, puede exigir al importador el pago del arancel pleno aplicable, más los intereses generados desde la fecha de importación.

      .col-md.tarjeta.bg-7.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema3/18.svg', alt='Texto que describa la imagen')
          
        h4.text-center Multas por fraude aduanero
        p Conforme a la sección 1592 del título 19 del U.S. Code, las sanciones pueden alcanzar hasta el 200 % del valor de la mercancía en casos de fraude grave.

      .col-md.tarjeta.bg-11.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema3/19.svg', alt='Texto que describa la imagen')
          
        h4.text-center Pérdida retroactiva de preferencias
        p Las preferencias arancelarias obtenidas pueden ser desconocidas con efecto retroactivo si se comprueba que la certificación de origen era incorrecta o fraudulenta.

      .col-md.tarjeta.bg-base2.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema3/20.svg', alt='Texto que describa la imagen')
          
        h4.text-center Inhabilitación del proveedor
        p El incumplimiento reiterado puede derivar en la emisión de una <em>Import Alert</em> por parte de la FDA o en la suspensión de los beneficios del APC para el exportador infractor.


    .row.justify-content-center
      .col-lg-10
        p.mt-4.bg-r8.bg-base.p-4 Por ello, el exportador debe verificar meticulosamente el origen de sus insumos, calcular con precisión el valor de contenido regional cuando aplique y conservar los soportes documentales durante el período mínimo establecido en el artículo 4.18 del APC.



    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema3/21.png', alt='', style="width: 390px").m-auto
      .col-lg-8
        p La autocertificación implica una mayor responsabilidad para el exportador, pero también una mayor agilidad operativa. Frente a otros sistemas como el EUR.1 de la Unión Europea o el Formulario A del Sistema Generalizado de Preferencias, el modelo del APC reduce los costos de transacción y los tiempos de gestión documental, siempre que el exportador disponga de un sistema interno de gestión del origen que incluya procedimientos documentados, registros actualizados y personal capacitado. ProColombia ofrece programas de orientación y diagnóstico de origen especialmente diseñados para las pequeñas y medianas empresas que se inician en la exportación hacia el mercado estadounidense.

        .row.align-items-center.justify-content-center
          .col-lg-12
            .row.justify-content-center.mt-4
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-center.bg-10.bg-r8.p-3(data-aos="fade-right")
                  .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/tema3/22.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                  .col-lg
                    p El dominio de las reglas de origen y la certificación garantizan el acceso preferencial al mercado estadounidense, pero el exportador debe también definir las condiciones logísticas y contractuales de la entrega. Estos aspectos son regulados por los Incoterms 2020, cuya correcta selección determina quién asume los costos, los riesgos y los trámites aduaneros en cada operación amparada por el APC.




    separador
    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3 Incoterms 2020 en operaciones del TLC

    p El dominio de las reglas de origen y la certificación garantizan el acceso preferencial al mercado estadounidense, pero el exportador debe también definir las condiciones logísticas y contractuales de la entrega. Estos aspectos son regulados por los Incoterms 2020, cuya correcta selección determina quién asume los costos, los riesgos y los trámites aduaneros en cada operación amparada por el APC.

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/23.svg', alt='', style="width: 390px").m-auto
      .col-lg-9
        p Los Incoterms, del inglés International Commercial Terms, son once reglas publicadas por la Cámara de Comercio Internacional (CCI) que definen la distribución de responsabilidades, costos y riesgos entre el vendedor y el comprador en una operación de comercio exterior. Su versión vigente fue publicada el 10 de septiembre de 2019 y entró en aplicación el 1 de enero de 2020. Aunque su uso es voluntario, constituyen el estándar global para la interpretación de los términos de entrega en contratos de compraventa internacional (CCI, 2020).

        .row.align-items-start.mt-4
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema3/24.svg', style='width: 100px').m-auto
          
          .col
            p Es importante precisar que los Incoterms no determinan el precio de la mercancía ni regulan la transferencia de propiedad. Su función específica es definir el punto geográfico en que se transfieren el riesgo y los costos del vendedor al comprador. Su correcta aplicación incide directamente en el cálculo del valor en aduana, el flete internacional, el seguro de la carga y la distribución de las obligaciones de despacho aduanero en ambos países.

    p.mt-4 La versión 2020 introdujo cuatro cambios relevantes frente a la edición anterior de 2010, que el exportador colombiano debe conocer:


    .row.justify-content-center.mt-4
      .col-lg-7
        LineaTiempoD.color-primario.linea-bold
          .row(numero="1" titulo="Sustitución del término DAT por DPU")
            .col-md-12.mb-4.mb-md-0
              p El término Delivered at Terminal fue reemplazado por Delivered at Place Unloaded (DPU), que ofrece mayor flexibilidad geográfica al no limitarse a terminales de transporte.
              
    
          .row(numero="2" titulo="Modificación del término FCA")
            .col-md-12.mb-4.mb-md-0
              p Modificación del término FCA: este término admite ahora la emisión de un Bill of Lading con anotación "a bordo" cuando el comprador lo requiere para abrir una carta de crédito, facilitando el uso de este Incoterm en operaciones con financiación bancaria.
              
    
          .row(numero="3" titulo="Ampliación de la cobertura del seguro en CIP")
            .col-md-12.mb-4.mb-md-0
              p Ampliación de la cobertura del seguro en CIP: el término Carriage and Insurance Paid To exige ahora un seguro con cobertura tipo A, la más amplia según las cláusulas del instituto asegurador, mientras que CIF mantiene la cobertura tipo C, que es la mínima.


          .row(numero="3" titulo="Reorganización de los costos")
            .col-md-12.mb-4.mb-md-0
              p Reorganización de los costos: las cláusulas A9 y B9 de todos los términos fueron reorganizadas para mayor claridad operativa en la asignación de gastos entre las partes (CCI, 2020).
              
    
      .col-lg-3.d-none.d-lg-block
        figure(data-aos="fade-up")
          img(src='@/assets/curso/tema3/25.png', alt='', style="width: 100%").m-auto


    p.mt-4 La siguiente tabla presenta los once términos Incoterms 2020, con su nombre completo, traducción al español y el punto geográfico en que se transfieren el riesgo y los costos del vendedor al comprador.

    .row.bg-04
      .col-12
        .p-5
          .row.justify-content-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 8. 
                span Incoterms 2020 aplicables a operaciones con Estados Unidos

              .tabla-a.color-acento-contenido
                table
                  caption(style="margin-top: 0px !important") Nota. Adaptada de la Cámara de Comercio Internacional (2020). Los términos FAS, FOB, CFR y CIF son de uso exclusivo para transporte marítimo o por vías navegables interiores; los demás aplican a cualquier modo de transporte.

                  thead(style="background-color: #D3E7E9")
                    tr
                      th Término
                      th Nombre completo
                      th Punto de transferencia de riesgo

                  tbody
                    tr(style="background-color: #FBF7F1")
                      td.text-start
                        b EXW
                      td.text-start Ex Works (En fábrica)
                      td.text-start En las instalaciones del vendedor en Colombia. Mínima obligación para el vendedor.

                    tr
                      td.text-start
                        b FCA
                      td.text-start Free Carrier (Libre transportista)
                      td.text-start Al entregar la carga al transportista designado por el comprador, en un lugar acordado en Colombia.

                    tr(style="background-color: #FBF7F1")
                      td.text-start
                        b CPT
                      td.text-start Carriage Paid To (Transporte pagado hasta)
                      td.text-start Al entregar al primer transportista; el vendedor paga el flete hasta el destino acordado.

                    tr
                      td.text-start
                        b CIP
                      td.text-start Carriage and Insurance Paid To (Transporte y seguro pagados hasta)
                      td.text-start Igual que CPT, pero el vendedor paga seguro de carga con cobertura tipo A.

                    tr(style="background-color: #FBF7F1")
                      td.text-start
                        b DAP
                      td.text-start Delivered at Place (Entregado en lugar)
                      td.text-start En el lugar acordado en EE. UU., sin descarga ni pago de impuestos.

                    tr
                      td.text-start
                        b <em>DPU</em>
                      td.text-start Delivered at Place Unloaded (Entregado en lugar con descarga)
                      td.text-start En el lugar acordado, incluida la descarga (sustituye al antiguo DAT).

                    tr(style="background-color: #FBF7F1")
                      td.text-start
                        b DDP
                      td.text-start Delivered Duty Paid (Entregado con derechos pagados)
                      td.text-start Máxima responsabilidad del vendedor: flete, seguro e impuestos en EE. UU.

                    tr
                      td.text-start
                        b FAS
                      td.text-start Free Alongside Ship (Libre al costado del buque)
                      td.text-start Al costado del buque en el puerto de embarque (uso exclusivo marítimo).

                    tr(style="background-color: #FBF7F1")
                      td.text-start
                        b FOB
                      td.text-start Free On Board (Libre a bordo)
                      td.text-start Al colocar la mercancía a bordo del buque en el puerto colombiano. Término más usado en exportaciones marítimas colombianas.

                    tr
                      td.text-start
                        b CFR
                      td.text-start Cost and Freight (Costo y flete)
                      td.text-start Riesgo del comprador desde el embarque en Colombia; el vendedor paga el flete marítimo.

                    tr(style="background-color: #FBF7F1")
                      td.text-start
                        b CIF
                      td.text-start Cost, Insurance and Freight (Costo, seguro y flete)
                      td.text-start Igual que CFR, pero el vendedor paga el seguro de la mercancía con cobertura mínima (tipo C).


          .row.justify-content-center.mt-4
            .col-lg-10
              .row.align-items-center
                .col-lg-12
                  .cajon.color2.p-4
                    p Los once términos presentados en la tabla anterior ofrecen al exportador colombiano un conjunto de opciones que deben seleccionarse según el nivel de experiencia, el volumen de operaciones y la disponibilidad de agentes en el país de destino. Para las empresas que inician operaciones de exportación, los términos FOB y FCA resultan los más adecuados, dado que limitan la responsabilidad del vendedor al territorio colombiano. Las empresas con mayor experiencia y operaciones consolidadas pueden emplear CFR, CIF, CPT o CIP para ofrecer un servicio logístico integrado. Los términos DAP, DPU y DDP solo deben emplearse cuando el exportador dispone de un agente o filial en Estados Unidos, dado el nivel de responsabilidades que conllevan en ese territorio.

    .titulo-tres.mt-5: h3 Implicaciones del Incoterm en el valor en aduana

    .bloque-texto-g.bg-base4.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/26.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Desde la perspectiva del APC, la elección del Incoterm tiene implicaciones directas en la determinación del valor en aduana de la mercancía en Estados Unidos, que sirve de base para el cálculo de los aranceles aplicables. Un exportador colombiano que negocia con DDP asume el pago de los aranceles estadounidenses, lo que puede ser ventajoso comercialmente para el comprador, pero exige un conocimiento profundo de la normativa aduanera del país de destino. En contraste, un exportador que negocia con EXW transfiere al comprador todas las responsabilidades desde las instalaciones de producción, lo que simplifica su gestión, pero le hace perder el control sobre la cadena logística y la relación con el cliente final.


    .titulo-tres.mt-5: h3 Recomendaciones para la selección del Incoterm

    p.mt-4 La selección del Incoterm adecuado debe responder a la capacidad operativa del exportador y al tipo de relación comercial establecida con el comprador. A continuación, se presentan las recomendaciones generales para las operaciones bilaterales en el marco del APC:


    .row.justify-content-center
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/27.svg' alt='AvatarTop').m-auto
          .tarjeta.bg-10.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0 #[b Exportadores que inician operaciones]
                    p Los términos FOB o FCA resultan los más adecuados, pues limitan la responsabilidad del vendedor al territorio colombiano y reducen la exposición a riesgos en el tránsito internacional.
    
    
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/28.svg' alt='AvatarTop').m-auto
          .tarjeta.bg-10.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0 #[b Exportadores con experiencia y volúmenes consolidados]
                    p Los términos CFR, CIF, CPT y CIP permiten ofrecer un servicio logístico integrado al comprador y mejorar la competitividad de la oferta exportadora.
    
    
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/29.svg' alt='AvatarTop').m-auto
          .tarjeta.bg-10.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0 #[b Exportadores con presencia en Estados Unidos]
                    p Los términos DAP, DPU y DDP solo deben emplearse cuando el exportador dispone de un agente o filial en ese territorio, dado el nivel de responsabilidades logísticas, aduaneras y tributarias que conllevan.
    

    p.mt-4 En todos los casos, el contrato de compraventa debe especificar con precisión el lugar geográfico de entrega y la versión 2020 de los Incoterms de la Cámara de Comercio Internacional, con el fin de evitar interpretaciones divergentes que puedan derivar en disputas legales entre las partes.

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color2.p-4
              p El dominio articulado de las reglas de origen y los Incoterms 2020 permite al operador de comercio exterior construir competencias profesionales sólidas para la ejecución práctica del intercambio internacional. Las primeras determinan la elegibilidad arancelaria del producto bajo el APC; los segundos definen las condiciones logísticas, los costos y los riesgos asumidos por las partes. La integración de ambos elementos en la planeación de cada operación de exportación es lo que permite optimizar márgenes, reducir contingencias y consolidar relaciones comerciales sostenibles con el mercado estadounidense.


    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/30.png', alt='', style="width: 290px").m-auto
      .col-lg-9
        p La selección del Incoterm adecuado no es una decisión arbitraria, sino el resultado de evaluar la capacidad operativa del exportador, el tipo de relación comercial con el comprador y el nivel de control que se desea mantener sobre la cadena logística internacional. A continuación, se presentan las recomendaciones generales para la selección del término de negociación en operaciones bilaterales en el marco del APC:

        .row.mt-4.bg-base.p-4.bg-r8
          .col-12
            ul.lista-ul--color
              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 #[b Exportadores que inician operaciones:] los términos FOB o FCA resultan los más adecuados, pues limitan la responsabilidad del vendedor al territorio colombiano y reducen la exposición a riesgos durante el tránsito internacional hacia Estados Unidos. 
        
              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 #[b Exportadores con experiencia y volúmenes consolidados:] los términos CFR, CIF, CPT y CIP permiten ofrecer un servicio logístico integrado al comprador, lo que fortalece la competitividad de la oferta exportadora y facilita la fidelización del cliente en el mercado de destino. 

              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 #[b Exportadores con presencia en Estados Unidos]: los términos DAP, DPU y DDP solo deben emplearse cuando el exportador dispone de un agente o filial en ese territorio, dado el nivel de responsabilidades logísticas, aduaneras y tributarias que conllevan en el país de destino.


    p.mt-4 En todos los casos, el contrato de compraventa debe especificar con precisión el lugar geográfico de entrega y la versión 2020 de los Incoterms de la Cámara de Comercio Internacional, con el fin de evitar interpretaciones divergentes que puedan derivar en disputas legales entre las partes. El dominio articulado de las reglas de origen y los Incoterms 2020 permite al operador de comercio exterior construir competencias profesionales sólidas para la ejecución práctica del intercambio internacional, optimizar márgenes, reducir contingencias y consolidar relaciones comerciales sostenibles con el mercado estadounidense.
















</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
