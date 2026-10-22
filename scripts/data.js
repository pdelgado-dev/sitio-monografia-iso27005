const chapters = [
  {id:'fundamentos',number:'01',title:'Fundamentos',hint:'Información, CIA y riesgo'},
  {id:'norma',number:'02',title:'La norma 27005',hint:'Función y evolución'},
  {id:'proceso',number:'03',title:'El proceso',hint:'Contexto a seguimiento'},
  {id:'metodos',number:'04',title:'Metodologías',hint:'Siete enfoques comparados'},
  {id:'precedentes',number:'05',title:'Casos previos',hint:'Equifax y SolarWinds'},
  {id:'caso',number:'06',title:'Caso Interbank',hint:'Ejercicio R1–R5'},
  {id:'tendencias',number:'07',title:'Tendencias',hint:'Desafíos de revisión'},
  {id:'analisis',number:'08',title:'Análisis crítico',hint:'Decisiones y límites'}
];

const steps = [
  {title:'Contexto',body:'Se delimita el alcance, se identifican las partes interesadas y se definen los criterios para estimar y aceptar el riesgo. Los objetivos y los activos relevantes se describen antes de asignar valores.'},
  {title:'Apreciación',body:'Se identifican escenarios, amenazas, condiciones facilitadoras y consecuencias. Después se estima el nivel de riesgo y se compara con los criterios establecidos. El resultado orienta la prioridad.'},
  {title:'Tratamiento',body:'Se decide entre modificar, evitar, compartir o retener el riesgo según el escenario. Los controles propuestos deben corresponder al mecanismo que se desea reducir y quedar en un plan verificable.'},
  {title:'Comunicación',body:'Los supuestos, resultados y decisiones se consultan con quienes conocen el proceso y con quienes pueden aceptar sus consecuencias. Esta actividad acompaña todas las etapas.'},
  {title:'Seguimiento',body:'Se revisan los cambios del contexto, el desempeño de las medidas, los incidentes y los riesgos residuales. Un cambio relevante puede motivar una nueva apreciación.'}
];

const methods = [
  {name:'OCTAVE Allegro',tag:'Activos de información',detail:'Relaciona activos críticos con sus contenedores y consecuencias; requiere participación de negocio y tecnología.'},
  {name:'MAGERIT v3',tag:'Dependencias',detail:'Examina activos, amenazas y salvaguardas mediante un modelo de relaciones y catálogos.'},
  {name:'NIST SP 800-30 Rev. 1',tag:'Apreciación',detail:'Estructura preparación, ejecución, comunicación y mantenimiento; admite escalas adaptadas.'},
  {name:'MEHARI',tag:'Servicios de seguridad',detail:'Analiza escenarios y la calidad de servicios de seguridad con apoyo de bases de conocimiento.'},
  {name:'CRAMM',tag:'Activos y contramedidas',detail:'Método histórico británico que relaciona activos, amenazas y vulnerabilidades con medidas.'},
  {name:'EBIOS Risk Manager',tag:'Escenarios',detail:'Organiza cinco talleres desde el marco y las fuentes de riesgo hasta el tratamiento.'},
  {name:'FAIR',tag:'Cuantificación',detail:'Modela frecuencia y magnitud de pérdidas; necesita datos o estimaciones calibradas.'}
];

const probability = [
  ['1 · Muy baja','No se espera que ocurra en el periodo.'],
  ['2 · Baja','Improbable; solo en condiciones excepcionales.'],
  ['3 · Media','Puede ocurrir en el periodo.'],
  ['4 · Alta','Es probable; hay antecedentes en la entidad o en el sector.'],
  ['5 · Muy alta','Se espera que ocurra o ya está ocurriendo.']
];
const impact = [
  ['1 · Insignificante','Sin afectación de datos personales','Sin interrupción','Sin efecto'],
  ['2 · Menor','Datos no sensibles de pocas personas','Interrupción menor de 1 hora','Reclamos aislados'],
  ['3 · Moderado','Datos personales ordinarios de un grupo de clientes','Interrupción de 1 a 8 horas de un canal','Requerimientos de información de una autoridad'],
  ['4 · Mayor','Datos personales de muchos clientes o credenciales de acceso','Interrupción mayor de 8 y hasta 24 horas de canales críticos','Supervisión formal, riesgo de sanción, cobertura nacional'],
  ['5 · Severo','Exposición masiva que comprende credenciales o información financiera, con fraude consumado','Interrupción de más de 24 horas','Sanciones graves y pérdida significativa de confianza']
];
const classes = [
  ['Bajo','1 a 4','Se acepta con registro.'],
  ['Moderado','5 a 9','Se acepta con aprobación del propietario del riesgo y revisión semestral.'],
  ['Alto','10 a 16','Requiere tratamiento. Solo se acepta temporalmente por decisión de la dirección, con plazo.'],
  ['Crítico','17 a 25','Requiere tratamiento inmediato. No se acepta.']
];

const risks = [
  {id:'R1',priority:1,title:'Exposición de datos',asset:'A-01 · Datos personales y de contacto',property:'Confidencialidad',scenario:'Extracción de registros mediante acceso excesivo o elusión de restricciones.',consequence:'Divulgación no autorizada y consecuencias organizacionales.',evidence:'El comunicado institucional reconoce exposición; el mecanismo es un supuesto.',basis:'P4: antecedente de exposición como plausibilidad, sin frecuencia estadística. I4: dimensión legal y reputacional mayor; no se acredita fraude consumado.',initial:{p:4,i:4},residual:{p:2,i:3},action:'Restringir consultas y exportación; enmascarar campos; cifrar con gestión separada de claves; registrar y alertar consultas masivas.',controls:['A.8.3','A.8.12','A.8.11','A.8.24','A.8.15','A.8.16','A.5.34'],role:'Seguridad de la información y tecnología',plan:'30 días',milestone:'90 días',proof:'Permisos revisados, configuración de claves, exportaciones de prueba y registros correlacionados.'},
  {id:'R2',priority:3,title:'Acceso indebido a cuentas',asset:'A-02 · Credenciales y autenticación',property:'Confidencialidad e integridad',scenario:'Credenciales capturadas o reutilizadas permiten acceso indebido; la recuperación o autenticación sería susceptible de abuso.',consequence:'Acceso a cuentas y fraude hipotético.',evidence:'La exposición de claves no está confirmada por el comunicado; es un escenario preventivo.',basis:'P3: acceso abusivo posible bajo captura hipotética. I5: condicionado a credenciales o información financiera con fraude consumado; no es un hecho del incidente.',initial:{p:3,i:5},residual:{p:2,i:5},action:'Reforzar autenticación y recuperación; revisar identidades y secretos; formar al personal; detectar sesiones anómalas.',controls:['A.8.5','A.5.16','A.5.17','A.6.3','A.8.16'],role:'Canales digitales y seguridad de la información',plan:'30 días',milestone:'90 días',proof:'Políticas de autenticación y pruebas de suplantación, sesión y recuperación.'},
  {id:'R3',priority:5,title:'Interrupción de canal',asset:'A-03 · Aplicación, Plin y banca web',property:'Disponibilidad',scenario:'Falla o contención hipotética interrumpe un canal de 1 a 8 horas; recuperación o redundancia insuficiente.',consequence:'Interrupción del servicio.',evidence:'Existen reportes públicos de fallas; no prueban duración ni causalidad.',basis:'P4: reportes previos de indisponibilidad. I3: escenario delimitado a un canal por 1–8 horas; no representa duración real medida.',initial:{p:4,i:3},residual:{p:2,i:3},action:'Ensayar redundancia y restauración; controlar cambios y reversión; vincular recuperación con continuidad.',controls:['A.8.14','A.8.32','A.5.30','A.8.13'],role:'Tecnología y operaciones',plan:'90 días',milestone:'180 días',proof:'Informes de conmutación, restauración y reversión; metas definidas internamente.'},
  {id:'R4',priority:4,title:'Consecuencias regulatorias',asset:'A-01 / A-04 · Datos; respuesta y comunicación',property:'Confidencialidad, integridad y disponibilidad',scenario:'Hallazgos hipotéticos sobre protección de datos, seguridad o evidencia motivan medidas correctivas o sanciones.',consequence:'Consecuencias regulatorias y reputacionales hipotéticas.',evidence:'Las actuaciones de autoridades justifican examinar el escenario; no prueban infracción.',basis:'P3: hallazgos futuros posibles, resultado desconocido. I4: supervisión y eventual sanción, sin afirmar sanción impuesta.',initial:{p:3,i:4},residual:{p:2,i:4},action:'Contrastar obligaciones por fecha; reunir evidencia; revisar brechas y someter las medidas a evaluación independiente.',controls:['A.5.31','A.5.34','A.5.35','A.5.36'],role:'Cumplimiento y auditoría interna',plan:'90 días',milestone:'180 días',proof:'Matriz de obligaciones aplicables, informes de revisión y comprobantes de corrección.'},
  {id:'R5',priority:2,title:'Redistribución o extorsión',asset:'A-01 · Datos personales',property:'Confidencialidad',scenario:'Un tercero redistribuye información o la utiliza para extorsión o ingeniería social; se supone disponibilidad de datos utilizables.',consequence:'Perjuicio futuro a clientes y entidad.',evidence:'La intención de extorsión procede de una declaración atribuida al ejecutivo; no implica extorsión consumada.',basis:'P4: exposición y declaración de intención de extorsión. I4: consecuencias organizacionales de la difusión, sin equivaler a extorsión consumada.',initial:{p:4,i:4},residual:{p:3,i:3},action:'Ensayar respuesta y escalamiento; analizar amenazas; coordinar comunicaciones y contacto con autoridades; impedir nuevas salidas de datos.',controls:['A.5.24','A.5.26','A.5.27','A.5.7','A.5.5','A.8.12'],role:'Seguridad de la información y riesgos',plan:'30 días',milestone:'120 días',proof:'Cronología del ejercicio, decisiones, comunicación aprobada y lecciones con acciones cerradas.'}
];

function score(point){return point.p*point.i}
function level(value){return value<=4?'Bajo':value<=9?'Moderado':value<=16?'Alto':'Crítico'}
function levelClass(value){return level(value).toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu,'')}
window.SiteData={chapters,steps,methods,probability,impact,classes,risks,score,level,levelClass};
