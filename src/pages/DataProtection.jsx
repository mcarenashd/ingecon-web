import React from 'react';
import styles from "../styles/DataP.module.css";
import dataPolicyBanner from '../assets/data-banner.png'; // Asegúrate de que el nombre sea correcto

function DataProtection() {
  const policyText = (
    <> 
      <h2>POLÍTICA DE PROTECCIÓN DE DATOS PERSONALES</h2>

      <h3>1. INTRODUCCIÓN</h3>
      <p>En cumplimiento de la ley 1581 de 2012, por la cual se dictan disposiciones generales para la protección de datos personales, INGENIERIA Y CONSULTORIA INGECON S.A. estableció esta política con el fin de implementar claramente el procedimiento y tratamiento de datos personales de cualquier información relacionada con la recolección, actualización, clasificación y circulación de los datos personales de sus empleados, exempleados, especialistas, proveedores, clientes y terceros.</p>
      <br/>

      <h3>2. RESPONSABLE DE LA INFORMACIÓN</h3>
      <p>INGENIERIA Y CONSULTORIA INGECON S.A.S es una sociedad anónima simplificada legalmente constituida, identificada con NIT 810.002.747-0, su domicilio principal en Bogotá – Colombia en calle 148 no 7G - 42, teléfono 4672384 - 4672385, su correo electrónico <a href="mailto:info@ingecon.com.co">info@ingecon.com.co</a>.</p>
      <p>INGECON SAS establecerá los mecanismos necesarios para hacerle saber al titular de la información, acerca de las políticas de protección de datos personales, así mismo los procesos correspondientes para actualización, rectificación o eliminación de los mismos en sus bases de datos.</p>
      <br/>

      <h3>3. ALCANCE</h3>
      <p>Este procedimiento aplica como procedimiento interno del tratamiento de información de protección de datos estipulada en la ley Estatutaria 1521 de 2012.</p>
      <br/>

      <h3>4. DEFINICIONES Y ABREVIATURAS</h3>
      <p><strong>Dato personal:</strong> Cualquier información vinculada o que pueda asociarse a una o varias personas naturales determinadas o determinables.</p>
      <p><strong>Bases de datos:</strong> Conjunto organizado de datos personales que sea objeto de Tratamiento.</p>
      <p><strong>Autorización:</strong> Consentimiento previo, expreso e informado del Titular para llevar a cabo el Tratamiento de datos personales.</p>
      <p><strong>Tratamiento:</strong> Cualquier operación o conjunto de operaciones sobre datos personales, tales como recolección, procesamiento, almacenamiento, uso, circulación, actualización, transmisión y/o transferencia, supresión.</p>
      <p><strong>Titular:</strong> Persona natural cuyos datos personales sean objeto del tratamiento.</p>
      <p><strong>Encargado del Tratamiento:</strong> Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, realice el tratamiento de datos personales por cuenta del Responsable del Tratamiento.</p>
      <p><strong>Responsable del Tratamiento:</strong> Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, decida sobre la base de datos y/o el tratamiento de los datos.</p>
      <p><strong>Datos sensibles:</strong> Se entiende por datos sensibles aquellos que afectan la intimidad del Titular o cuyo uso indebido puede generar su discriminación, tales como aquellos que revelen el origen racial o étnico, la orientación política, las convicciones religiosas o filosóficas, la pertenencia a sindicatos, organizaciones sociales, de derechos humanos o que promueva intereses de cualquier partido político o que garanticen los derechos y garantías de partidos políticos de oposición, así como los datos relativos a la salud, a la vida sexual, y datos biométricos.</p>
      <p><strong>Dato Semiprivado:</strong> Es el dato que no tiene naturaleza íntima, reservada ni pública y cuyo conocimiento o divulgación puede interesar no solo a su titular sino a cierto sector o grupo de personas, o a la sociedad.</p>
      <br/>

      <h3>5. Principios para el tratamiento de los datos personales</h3>
      <p>a. <strong>Principio de legalidad en materia de Tratamiento de datos:</strong> El Tratamiento a que se refiere la ley 1581 de 2012 es una actividad reglada que debe sujetarse a lo establecido en ella y en las demás disposiciones que la desarrollen.</p>
      <p>b. <strong>Principio de finalidad:</strong> El Tratamiento obedece a una finalidad legítima de acuerdo con la Constitución y la Ley, la cual debe ser informada al Titular.</p>
      <p>c. <strong>Principio de libertad:</strong> El Tratamiento sólo puede ejercerse con el consentimiento, previo, expreso e informado del Titular. Los datos personales no podrán ser obtenidos o divulgados sin previa autorización, o en ausencia de mandato legal o judicial que releve el consentimiento.</p>
      <p>d. <strong>Principio de veracidad o calidad:</strong> La información sujeta a Tratamiento debe ser veraz, completa, exacta, actualizada, comprobable y comprensible. Se prohíbe el Tratamiento de datos parciales, incompletos, fraccionados o que induzcan a error.</p>
      <p>e. <strong>Principio de transparencia:</strong> En el Tratamiento debe garantizarse el derecho del Titular a obtener del Responsable del Tratamiento o del Encargado del Tratamiento, en cualquier momento y sin restricciones, información acerca de la existencia de datos que le conciernan.</p>
      <p>f. <strong>Principio de acceso y circulación restringida:</strong> El Tratamiento se sujeta a los límites que se derivan de la naturaleza de los datos personales, de las disposiciones de la presente ley y la Constitución. En este sentido, el Tratamiento sólo podrá hacerse por personas autorizadas por el Titular y/o por las personas previstas en la presente Ley.</p>
      <p>Los datos personales, salvo la información pública, no podrán estar disponibles en Internet u otros medios de divulgación o comunicación masiva, salvo que el acceso sea técnicamente controlable para brindar un conocimiento restringido sólo a los Titulares o terceros autorizados conforme a la presente ley.</p>
      <p>g. <strong>Principio de seguridad:</strong> La información sujeta a Tratamiento por el Responsable del Tratamiento o Encargado del Tratamiento, deberá manejarse con las medidas técnicas, humanas y administrativas que sean necesarias para otorgar seguridad a los registros evitando su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento.</p>
      <p>h. <strong>Principio de confidencialidad:</strong> Todas las personas que intervengan en el Tratamiento de datos personales que no tengan la naturaleza de públicos están obligadas a garantizar la reserva de la información, inclusive después de finalizada su relación con alguna de las labores que comprende el tratamiento, pudiendo sólo realizar suministro o comunicación de datos personales cuando ello corresponda al desarrollo de las actividades autorizadas por ley 1581 de 2012 y en los términos de la misma.</p>
      <br/>

      <h3>6. DERECHOS DE LOS TITULARES</h3>
      <p>INGECON SAS garantiza a los titulares de la información recolectada legítimamente en la base de datos, el ejercicio de los siguientes derechos:</p>
      <p>Conocer, actualizar, rectificar y exigir sus datos personales se podrá ejercer frente a datos parciales, inexactos, incompletos, fraccionados, que induzcan al error, los expresamente prohibidos o que falte su autorización expresa al correo del responsable arriba indicado.</p>
      <p>Solicitar copia del formato de autorización en cualquier momento, mediante los protocolos y procesos establecidos para la protección de datos personales.</p>
      <p>Ser notificado por Ingecon SAS, dada previa solicitud expresa, respecto al tratamiento, administración y gestión de sus datos personales.</p>
      <p>Presentar directamente ante la empresa o Superintendencia de Industria y Comercio, las respectivas quejas por infracciones a lo dispuesto en la Ley 1581 de 2012 y demás normatividad vigente.</p>
      <p>Revocar, previa solicitud expresa, la autorización y/o solicitar la supresión de los datos personales, cuando en el tratamiento, administración y gestión no se cumplan ni respeten los principios, derechos, garantías constitucionales y normativos en los términos descritos en la Ley 1581 de 2012 y demás regulación colombiana vigente.</p>
      <br/>

      <h3>7. Autorizaciones y Clausulado</h3>
      <p>Con el ánimo de brindar cumplimiento a la normatividad sobre la protección de datos personales, la empresa implementará al menos los siguientes clausulados:</p>
      <p><strong>7.1. Autorización Tratamiento Datos Personales para empleados:</strong> Corresponde al texto incorporado en los formatos estimados en los procesos de selección, vinculación, asignación de roles, perfiles y atribuciones, planes de beneficios otorgados directamente o por convenio con terceros, entre otros. No obstante, se debe incluir autorización para transferir los datos a terceras personas ubicadas en el país como en el extranjero.</p>
      <p><strong>7.2. Autorización Datos Personales para Visitantes:</strong> Corresponde al texto incorporado en los formatos de acceso de visitantes en ciertas áreas comunes, sobre el cual el visitante autoriza que sean recopilados y administrados sus datos personales por parte de INGECON tales como datos de ARL, EPS entre otros.</p>
      <p><strong>7.3. Autorización Recepción de Datos Personales Suministrados por Terceros:</strong> Corresponde al texto incorporado en documentos, contratos de todo tipo, hojas de vida para propuestas o licitaciones, alianzas comerciales y estratégicas, acuerdos, convenios con terceros, etc., que la Compañía suscriba con las demás entidades, empresas o personas, donde estas instituciones certifican que, en caso de entregar datos personales de terceros a INGECON, esas instancias han autorizado previamente la entrega de datos a la Compañía. En todo caso, la Compañía deberá garantizar que la finalidad para lo cual el tercero recibió los datos se enmarca dentro de la actividad establecida por la Compañía.</p>
      <p><strong>7.4. Autorizaciones Adicionales:</strong> Corresponde al texto incorporado en documentos y autorizaciones emanadas de proveedores, socios, miembros de la Junta Directiva y demás instancias de los miembros de gobierno de la Ingenieria y Consultoria Ingecon SAS, deberán autorizar de manera expresa a la Compañía para que haga tratamiento y protección de sus datos personales para los fines que respecto a cada uno de tales grupos de interés así se requiera.</p>
      <p><strong>7.5. Información en las Autorizaciones:</strong> Corresponde a los datos capturados, no obstante, se entenderán como mínimos, teniendo en cuenta la normatividad vigente aplicable para conocimiento de los grupos de interés, a considerarse regulatorios para la Compañía: Fecha, Nombre completo del titular, Tratamiento de los datos personales, Texto de autorización para recolección y tratamiento de datos personales, Datos de contacto, Lineamientos para las preguntas, quejas, reclamos y solicitudes.</p>
      <br/>

      <h3>8. Excepciones</h3>
      <p>Casos en que no es necesaria la autorización. La autorización del titular no será necesaria cuando se trate de:</p>
      <p><strong>8.1.</strong> Información requerida por una entidad pública o administrativa en ejercicio de sus funciones legales o por orden judicial.</p>
      <p><strong>8.2.</strong> Datos de naturaleza pública.</p>
      <p><strong>8.3.</strong> Casos de urgencia médica o sanitaria.</p>
      <p><strong>8.4.</strong> Tratamiento de información autorizado por la ley para fines históricos, estadísticos o científicos.</p>
      <br/>

      <h3>9. Marco General para Protección de Datos Personales</h3>
      <p>A continuación, se establecen los lineamientos generales para la protección de datos personales, así mismo las precauciones y niveles de seguridad de las bases de datos correspondientes que contengan dicho carácter de la información:</p>
      <p>Se debe propender por la autenticidad, confidencialidad e integridad de la información.</p>
      <p>Las juntas Directivas, Comités y otras reuniones donde se recopile información personal tendrán como objetivo adicional el diseño, ajuste, aprobación y seguimiento de las políticas de protección de datos personales.</p>
      <p>Es responsabilidad de las Direcciones velar por el cumplimiento de la política de protección de datos personales en los procesos de la cadena de valor.</p>
      <p>Se debe asegurar la seguridad de la información en los dispositivos, infraestructura, canales, bases de datos y demás medios de almacenamiento y distribución de datos, estableciendo todos los protocolos, herramientas, mejores prácticas y estándares correspondientes.</p>
      <p>El Oficial de Cumplimiento de la Compañía establecerá verificaciones de cumplimiento de manera periódica acorde con lo establecido en la Ley 1581 de 2012 y demás normas reglamentarias.</p>
      <p>Las transferencias y/o transmisiones de información internacional deberán contar con los lineamientos de la Ley 1581 de 2012, cualquier consulta deberá ser escalada al Oficial de Cumplimiento.</p>
      <p>Todos los grupos de interés identificados sin excepción alguna, deberán aplicar los lineamientos de la política de protección de datos personales, Ley 1581 de 2012 y demás decretos reglamentarios vigentes.</p>
      <br/>

      <h3>10. Avisos de Privacidad</h3>
      <p>INGECON se compromete a incorporar los avisos de privacidad en todos los casos y medios que así se requiera, para la adhesión y correcta implementación de la protección de datos personales.</p>
      <p>Estos avisos de privacidad deberán cumplir con lo emanado de la Ley 1581 de 2012 y sus normas reglamentarias vigentes. Los avisos de privacidad deben contemplar en todo caso y medio la recopilación, tratamiento, gestión y seguimiento de los datos personales.</p>
      <p>El Oficial de Cumplimiento y la Gerencia propenderán por el cumplimiento, contenido, actualización y seguimiento de los avisos de privacidad, dispuestos en los siguientes casos y medios: Sitio WEB, Correo electrónico corporativo, Procesos de selección, vinculación y contratación interna con empleado, contratistas, especialistas, proveedores, convenios, uniones y alianzas con terceros, Uso de los servidores internos, Acceso a las instalaciones de la Compañía, Uso de videocámaras para fines de seguridad de la Compañía.</p>
      <br/>

      <h3>11. Reporte y Gestión Incidentes de la Información</h3>
      <p>Cuando se presente incidentes de seguridad de información en cuanto al deterioro y errado manejo de los datos personales, se establecen los siguientes lineamientos de obligatorio cumplimiento:</p>
      <p>Todas las preguntas, quejas, reclamos y solicitudes deberán ser tramitadas a través de los protocolos y procesos para su recepción, análisis, gestión, seguimiento y cierre.</p>
      <p>En su totalidad las quejas o reclamos de datos personales se considera un evento de riesgo operacional cuando sus respuestas sean a favor del titular de la información.</p>
      <p>En todos los casos que se requiera, la Compañía deberá actualizar, rectificar o eliminar el dato personal.</p>
      <p>Los incidentes identificados y reportados por el manejo de datos personales deberán ser reportados acorde con los protocolos, programas y procesos establecidos en esta política.</p>
      <p>Se aplicaran todos los efectos administrativos sobre el empleado que incumpla esta política colaborador una vez comprobada su responsabilidad en la protección de los datos personales, de igual manera aplicará las medidas tipificadas en el régimen penal colombiano.</p>
      <br/>

      <h3>12. Finalidad de los Datos Personales</h3>
      <p><strong>12.1. Lineamientos Generales</strong></p>
      <p>INGECON SAS ha establecido los lineamientos generales para enmarcar la finalidad de tratamiento y gestión de los datos personales:</p>
      <p><strong>Colaboradores:</strong> La Compañía podrá efectuar tratamiento de los datos personales suministrados por sus colaboradores, para potenciar sus habilidades, experiencia y conocimiento, por medio de formación, cursos, talleres, seminarios, etc., y para incorporarlos a los planes de bienestar, procesos administrativos y disciplinarios, estudios de seguridad y análisis de riesgos según el caso.</p>
      <p>La Compañía podrá aplicar instrumentos y herramientas en pro del conocimiento y validación de identidad de sus colaboradores. podrá suministrar la información de los socios a entidades nacionales o extranjeras que se relacionen de composición accionaria y a las compañías a las cuales estén vinculadas sus socios.</p>
      <p>A través de la Gerencia, deberá garantizar la incorporación, custodia, administración y disponibilidad de la información de las hojas de vida de todos los colaboradores, estableciendo los canales de consulta a las instancias autorizadas para tales efectos.</p>
      <p><strong>Clientes, Proveedores y Terceros:</strong> La Compañía podrá efectuar tratamiento de los datos personales suministrados por sus clientes, proveedores y terceros, teniendo en cuenta las siguientes finalidades: Validar la identidad y conocimiento, Validar el cumplimiento de las políticas para compras o abastecimiento, Verificar el estado de las obligaciones, Satisfacer los intereses legítimos derivados de la relación con la Compañía, Soportar las referencias comerciales y/o financieras, Administrar y operar el producto o servicio contratado con la Compañía, Manejo y registro contable de las operaciones durante la vigencia contractual con la Compañía, Terminación, cierre o liquidación de contratos con la Compañía, Remitir información comercial sobre los productos y/o servicios que presta en virtud de su razón y objeto social, Suministrar la información de los proveedores o terceros a entidades nacionales o extranjeras, que se relacionen de composición accionaria y a las compañías a las cuales estén vinculadas a través de consorcio o uniones temporales como socios o consorciados.</p>
      <p><strong>12.2. Consideraciones Adicionales</strong></p>
      <p>Ingenieria y Consultoria Ingecon SAS debe garantizar los documentos físicos y archivos magnéticos que contengan o sean datos personales, acorde con las políticas definidas en este documento y sistemas de gestión enmarcados para tal fin.</p>
      <p>En el evento que se considere la destrucción de documentos con datos personales, esta actividad deberá contar con aprobación de las instancias superiores tales como Consejos, Oficial de Cumplimiento y Gerencia, para garantizar el cumplimiento normativo.</p>
      <p>Aún el transporte de información deberá garantizar confidencialidad e integridad de la información y documentos con datos personales.</p>
      <br/>

      <h3>13. Registro Nacional de Bases de Datos</h3>
      <p>Se considera todo el conjunto de datos personales almacenados en bases de datos o sus réplicas. Todas las bases de datos son considerados activos de información de la Compañía y a partir de ello se deberán aplicar de manera estricta toda la normatividad interna y externa vigente para la protección de datos personales.</p>
      <p>Para efectos del inventario de las bases de datos, en el evento que se administre en medio electrónico y tenga respaldo, se debe listar como independiente, es decir, como dos bases de datos diferentes.</p>
      <br/>

      <h3>14. Contexto General</h3>
      <p>Todas las bases de datos que contengan datos personales, deben contar con sus especificaciones técnicas documentadas, para revisar e identificar su versionamiento e historial de control de cambios para ello deberá contar con los siguientes lineamientos mínimos:</p>
      <p><strong>Información Almacenada:</strong> Almacenamiento clasificado de datos personales en la base de datos.</p>
      <p><strong>Seguridad de la Información:</strong> Controles sobre los activos de la información.</p>
      <p><strong>Origen de los Datos Personales:</strong> Flujo del dato personal, suministrado por el titular o tercero, así mismo contando con su autorización previa expresa.</p>
      <p><strong>Transferencia y Transmisión de Datos Personales:</strong> Remisión de la base de datos al extranjero, también se refiere a la transmisión a un encargado puntual en el exterior.</p>
      <p><strong>Cesión o Transferencia de Responsabilidad:</strong> Toda vez que se transfiera la responsabilidad del tratamiento de la información de las bases de datos identificadas, registradas y administradas por la Compañía, en todo caso, se deberá identificar plenamente al cesionario, fecha y demás datos relevantes para el historial.</p>
      <br/>

      <h3>15. Cumplimiento Entes de Control</h3>
      <p>Como parte de los lineamientos de la Compañía se deberá notificar a la Superintendencia de Industria y Comercio los casos relacionados a continuación:</p>
      <p>Los primeros diez (10) días hábiles de cada mes los cambios sustanciales a las bases de datos o en los términos indicados por la normatividad vigente.</p>
      <p>Dentro de los quince (15) días hábiles siguientes de la detección de incidentes de seguridad de la información, acorde con los lineamientos normativos para tal efecto.</p>
      <p>Anualmente dentro de los tres (3) primeros meses del año, los demás cambios sobre el inventario de las bases de datos que contengan datos personales.</p>
      <p>Dentro de los primeros quince (15) días hábiles de los meses de febrero y agosto de cada año, a partir de la inscripción, todos los reclamos (se excluyen peticiones) presentados por los titulares de la información de forma directa a la Compañía y a los responsables del tratamiento.</p>
      <p>Con el fin de mantener el cumplimiento normativo y la mitigación de los riesgos, la empresa atenderá los requerimientos de los entes de control internos y externos, así como gestión de visitas en este sentido, para lo cual establece los siguientes lineamientos:</p>
      <p>En todo momento comprobará la identidad de los entes de control que llevaran a cabo inspección y vigilancia.</p>
      <p>Comprobar la habilitación de los funcionarios de los entes de control.</p>
      <p>El Oficial de Cumplimiento y la Gerencia son responsables por atención de la visita y requerimientos por parte de los entes de control.</p>
      <p>Toda la información a ser entregada a los entes de control debe ser canalizada y autorizada por el Oficial de Cumplimiento y la Gerencia.</p>
      <br/>

      <h3>16. Sensibilización y Capacitación</h3>
      <p>Debido a la importancia de esta política y su aplicación la empresa considera relevante la formación en materia de protección de datos personales, así como el cumplimiento normativo de las leyes 1266 de 2008 y 1581 de 2012. La Gerencia.</p>
      <p>La Gerencia de la Compañía debe propender por el uso de los medios establecidos para la formación de los colaboradores y divulgación de información a los grupos de interés en general.</p>
      <br/>
    </>
  );

  return (
    <div className={styles.dataPolicyPage}>
      <div 
        className={styles.bannerImage} 
        style={{ backgroundImage: `url(${dataPolicyBanner})` }}
      ></div>
      <div className={styles.policyContent}>
        {policyText}
      </div>
    </div>
  );
}

export default DataProtection;