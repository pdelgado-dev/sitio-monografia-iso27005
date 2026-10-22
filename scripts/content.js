(function(){
  const concepts={
    confidencialidad:{title:'Confidencialidad',question:'¿Quién puede ver la información?',explain:'Solo las personas autorizadas deben poder consultar los datos. R1 y R5 permiten examinar qué ocurriría si esa información se expusiera o volviera a difundirse.',example:'R1 · Datos personales y de contacto',signal:'Accesos y exportaciones revisables'},
    integridad:{title:'Integridad',question:'¿La información sigue siendo confiable?',explain:'Los datos y procesos deben mantenerse libres de cambios indebidos. R2 considera esta propiedad al plantear un posible acceso no autorizado a cuentas.',example:'R2 · Credenciales y autenticación',signal:'Autenticación y sesiones verificables'},
    disponibilidad:{title:'Disponibilidad',question:'¿El servicio está accesible cuando se necesita?',explain:'Los canales y la información que utilizan deben estar disponibles cuando se necesitan. En R3 se supone, para el análisis, que un canal deja de funcionar entre 1 y 8 horas.',example:'R3 · Aplicación, Plin y banca web',signal:'Recuperación y redundancia ensayadas'}
  };
  const standards={
    '27001':{name:'ISO/IEC 27001:2022',role:'Establece requisitos del sistema de gestión de seguridad de la información (SGSI).',link:'La apreciación y el tratamiento del riesgo se integran en la planificación y operación del sistema.'},
    '27005':{name:'ISO/IEC 27005:2022',role:'Orienta el proceso de gestión de riesgos de seguridad de la información.',link:'Ayuda a establecer contexto, apreciar riesgos, tratarlos, comunicar y revisar las decisiones.'},
    '27002':{name:'ISO/IEC 27002:2022',role:'Desarrolla el catálogo de controles de seguridad.',link:'El Anexo A de ISO/IEC 27001 corresponde a estos controles; su selección depende de los riesgos.'},
    '31000':{name:'ISO 31000:2018',role:'Ofrece principios y un marco general para gestionar riesgos.',link:'Permite situar la seguridad de la información en la gestión de riesgos de la organización.'}
  };
  const editions=[
    {year:'2006',name:'BS 7799-3',detail:'Antecedente británico. No cuenta como edición de ISO/IEC 27005.'},
    {year:'2008',name:'1.ª edición',detail:'Primera edición internacional de ISO/IEC 27005.'},
    {year:'2011',name:'2.ª edición',detail:'Revisión internacional de la guía.'},
    {year:'2018',name:'3.ª edición',detail:'Information security risk management.'},
    {year:'2022',name:'4.ª edición',detail:'Guidance on managing information security risks; diez cláusulas y un anexo informativo.'}
  ];
  const methodDetails={
    'OCTAVE Allegro':{lens:'Activos de información y contenedores',needs:'Personas de negocio y tecnología que conozcan los activos importantes y las consecuencias de perderlos.',use:'Conviene cuando se sabe qué información es prioritaria y dónde se almacena o utiliza.',source:'Caralli et al. (2007)'},
    'MAGERIT v3':{lens:'Activos, dependencias y salvaguardas',needs:'Un inventario que muestre cómo se relacionan los procesos, recursos y activos.',use:'Conviene cuando hay información suficiente para representar esas dependencias.',source:'Ministerio de Hacienda y Administraciones Públicas (2012)'},
    'NIST SP 800-30 Rev. 1':{lens:'Preparación, ejecución, comunicación y mantenimiento',needs:'Criterios y escalas definidos para la organización y el riesgo que se analiza.',use:'Permite organizar análisis cualitativos, semicuantitativos o cuantitativos.',source:'Joint Task Force Transformation Initiative (2012)'},
    'MEHARI':{lens:'Escenarios y servicios de seguridad',needs:'Datos que permitan valorar cómo funcionan los servicios de seguridad examinados.',use:'Ayuda a analizar cuánto podrían cambiar los escenarios después de aplicar medidas.',source:'CLUSIF (s. f.)'},
    'CRAMM':{lens:'Activos, amenazas, vulnerabilidades y contramedidas',needs:'Un inventario y la herramienta de apoyo descrita por la fuente histórica consultada.',use:'Sirve para comparar enfoques; la fuente consultada no confirma si sigue disponible.',source:'ENISA (2006)'},
    'EBIOS Risk Manager':{lens:'Cinco talleres y escenarios de amenaza',needs:'Participantes que conozcan la misión, el entorno y las dependencias externas.',use:'Resulta útil para examinar amenazas intencionales y posibles rutas de ataque.',source:'ANSSI (2018)'},
    'FAIR':{lens:'Frecuencia y magnitud de pérdidas',needs:'Datos o estimaciones calibradas con los que construir rangos y distribuciones.',use:'Conviene para comparar riesgos económicos cuando hay datos suficientes.',source:'The Open Group (s. f.)'}
  };
  const cases={
    equifax:{name:'Equifax',year:'2017',fact:'Un acceso no autorizado comprometió datos personales de alrededor de 147 millones de personas. Los informes citados documentan una vulnerabilidad conocida de Apache Struts con parche disponible y problemas de detección.',reading:'Contar con un parche no basta: hay que comprobar que se aplicó al sistema afectado y que funciona.',sources:'FTC (2019); GAO (2018)'},
    solarwinds:{name:'SolarWinds',year:'2020',fact:'Se distribuyó código malicioso mediante una actualización de Orion. GAO documentó el compromiso de nueve agencias federales; recibir la actualización no equivale a sufrir un compromiso posterior.',reading:'Al valorar el riesgo también hay que examinar la confianza depositada en proveedores y actualizaciones.',sources:'CISA (2020); GAO (2022)'}
  };
  const timeline=[
    {date:'29 oct. 2024',title:'Reportes de fallas',body:'Usuarios reportaron problemas en canales digitales desde la noche anterior al comunicado.',source:'Panamericana Televisión (2024)',type:'reporte'},
    {date:'30 oct. 2024',title:'Comunicado de Interbank',body:'La entidad reconoció que un tercero había expuesto datos de un grupo de clientes e informó medidas adicionales y monitoreo.',source:'Interbank (2024)',type:'institucional'},
    {date:'30–31 oct.',title:'Protección de datos e Indecopi',body:'Se reportó el inicio de una fiscalización de oficio de la ANPD. Indecopi anunció monitoreo el 30 y comunicó una investigación preliminar el 31.',source:'Ricci (2024); Indecopi (2024)',type:'autoridad'},
    {date:'2 nov. 2024',title:'Supervisión de la SBS',body:'La cobertura citada informó labores de supervisión y recogió una declaración sobre una intención de extorsión.',source:'América TV (2024)',type:'autoridad'},
    {date:'5–6 nov.',title:'Sesión parlamentaria',body:'La sesión fue el 5 de noviembre; la nota del Congreso se publicó el 6 y presenta una fecha interna inconsistente.',source:'Torres (2024); Congreso (2024)',type:'autoridad'}
  ];
  const controls={
    'A.8.3':'Restricción de acceso a la información','A.8.12':'Prevención de fugas de datos','A.8.11':'Enmascaramiento de datos','A.8.24':'Uso de criptografía','A.8.15':'Registro','A.8.16':'Actividades de monitoreo','A.5.34':'Privacidad y protección de información personal','A.8.5':'Autenticación segura','A.5.16':'Gestión de identidades','A.5.17':'Información de autenticación','A.6.3':'Concienciación, educación y formación en seguridad de la información','A.8.14':'Redundancia de instalaciones de procesamiento de información','A.8.32':'Gestión de cambios','A.5.30':'Preparación de las TIC para la continuidad del negocio','A.8.13':'Copias de seguridad de la información','A.5.31':'Requisitos legales, estatutarios, regulatorios y contractuales','A.5.35':'Revisión independiente de la seguridad de la información','A.5.36':'Conformidad con políticas, reglas y normas de seguridad de la información','A.5.24':'Planificación y preparación para gestionar incidentes de seguridad de la información','A.5.26':'Respuesta a incidentes de seguridad de la información','A.5.27':'Aprendizaje de incidentes de seguridad de la información','A.5.7':'Inteligencia de amenazas','A.5.5':'Contacto con autoridades'
  };
  const findings=[
    'ISO/IEC 27005 orienta la gestión del riesgo; ISO/IEC 27001 establece requisitos del SGSI y ISO/IEC 27002 desarrolla controles.',
    'La edición 2022 organiza la guía en diez cláusulas y un anexo informativo. La identificación puede partir de eventos o de activos.',
    'El método depende de los datos disponibles y de la decisión que se quiere sustentar. La matriz ordinal utilizada no estima frecuencias ni pérdidas monetarias.',
    'Equifax muestra la necesidad de verificar una corrección disponible. SolarWinds exige examinar dependencias y actualizaciones de proveedores.',
    'Los cinco escenarios iniciales de Interbank son altos. Los residuales estimados son cuatro moderados y R2 alto; no hay prueba de reducción real.'
  ];
  const recommendations=[
    {ids:'R1 · R5',title:'Proteger y contener la información',body:'Ensayar exportaciones con distintos privilegios, enmascarar y cifrar datos; practicar escalamiento, contención y comunicación.',proof:'Permisos, claves, alertas y ejercicios registrados.'},
    {ids:'R2',title:'Mantener el tratamiento abierto',body:'Probar autenticación y recuperación de cuentas frente a suplantación e ingeniería social. El residual de 10 sigue alto.',proof:'Pruebas de acceso, sesión y recuperación.'},
    {ids:'R4',title:'Revisar obligaciones con evidencia',body:'Contrastar disposiciones según su fecha de vigencia y reunir documentos que permitan una revisión independiente.',proof:'Matriz de obligaciones, informes y correcciones.'},
    {ids:'R3',title:'Ensayar la continuidad',body:'Verificar redundancia, restauración y reversión de cambios para el canal definido en el escenario.',proof:'Informes de conmutación y recuperación.'}
  ];
  window.SiteContent={concepts,standards,editions,methodDetails,cases,timeline,controls,findings,recommendations};
})();
