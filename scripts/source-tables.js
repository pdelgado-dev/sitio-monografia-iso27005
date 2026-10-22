window.SiteTables = [
  [
    [
      "Término",
      "Significado",
      "Ejemplo"
    ],
    [
      "Activo",
      "Elemento que tiene valor para la organización",
      "Base de datos de clientes"
    ],
    [
      "Amenaza o fuente de riesgo",
      "Causa potencial de un incidente no deseado",
      "Un atacante externo que busca datos para extorsionar"
    ],
    [
      "Vulnerabilidad",
      "Debilidad de un activo o de un control que una amenaza puede aprovechar",
      "Un servicio expuesto sin autenticación multifactor"
    ],
    [
      "Evento",
      "Ocurrencia o cambio de circunstancias",
      "Descarga masiva de registros fuera del horario habitual"
    ],
    [
      "Consecuencia o impacto",
      "Resultado de un evento sobre los objetivos",
      "Multas, reclamos, pérdida de confianza"
    ],
    [
      "Probabilidad",
      "Posibilidad de que algo ocurra",
      "Alta, media o baja según una escala definida"
    ],
    [
      "Control",
      "Medida que modifica el riesgo",
      "Cifrado, segmentación de red, revisión de accesos"
    ],
    [
      "Riesgo inherente",
      "Riesgo antes de considerar medidas; exige declarar la línea de base",
      "Diferente del inicial antes de medidas adicionales"
    ],
    [
      "Riesgo residual",
      "Riesgo que permanece después del tratamiento",
      "Estimado si el tratamiento todavía es una propuesta"
    ],
    [
      "Propietario del riesgo",
      "Persona o entidad con responsabilidad y autoridad para gestionarlo",
      "Gerente del área dueña del proceso"
    ],
    [
      "Criterios de riesgo",
      "Términos de referencia para valorar la importancia del riesgo",
      "Escala de impacto y umbral de aceptación"
    ]
  ],
  [
    [
      "Nivel",
      "Descripción"
    ],
    [
      "1. Muy baja",
      "No se espera que ocurra en el periodo."
    ],
    [
      "2. Baja",
      "Improbable; solo en condiciones excepcionales."
    ],
    [
      "3. Media",
      "Puede ocurrir en el periodo."
    ],
    [
      "4. Alta",
      "Es probable; hay antecedentes en la entidad o en el sector."
    ],
    [
      "5. Muy alta",
      "Se espera que ocurra o ya está ocurriendo."
    ]
  ],
  [
    [
      "Nivel",
      "Personas y datos",
      "Operación",
      "Legal y reputacional"
    ],
    [
      "1. Insignificante",
      "Sin afectación de datos personales",
      "Sin interrupción",
      "Sin efecto"
    ],
    [
      "2. Menor",
      "Datos no sensibles de pocas personas",
      "Interrupción menor de 1 hora",
      "Reclamos aislados"
    ],
    [
      "3. Moderado",
      "Datos personales ordinarios de un grupo de clientes",
      "Interrupción de 1 a 8 horas de un canal",
      "Requerimientos de información de una autoridad"
    ],
    [
      "4. Mayor",
      "Datos personales de muchos clientes o credenciales de acceso",
      "Interrupción mayor de 8 y hasta 24 horas de canales críticos",
      "Supervisión formal, riesgo de sanción, cobertura nacional"
    ],
    [
      "5. Severo",
      "Exposición masiva que comprende credenciales o información financiera, con fraude consumado",
      "Interrupción de más de 24 horas",
      "Sanciones graves y pérdida significativa de confianza"
    ]
  ],
  [
    [
      "Clase",
      "Rango (P × I)",
      "Criterio de aceptación"
    ],
    [
      "Bajo",
      "1 a 4",
      "Se acepta con registro."
    ],
    [
      "Moderado",
      "5 a 9",
      "Se acepta con aprobación del propietario del riesgo y revisión semestral."
    ],
    [
      "Alto",
      "10 a 16",
      "Requiere tratamiento. Solo se acepta de forma temporal por decisión de la dirección, con plazo."
    ],
    [
      "Crítico",
      "17 a 25",
      "Requiere tratamiento inmediato. No se acepta."
    ]
  ],
  [
    [
      "ID y activo",
      "Escenario y condición facilitadora propuesta",
      "Consecuencia y vínculo documental"
    ],
    [
      "R1 · A-01; Datos personales y de contacto; Confidencialidad",
      "Atacante externo extrae registros mediante acceso excesivo o elusión de restricciones.",
      "Divulgación no autorizada y consecuencias organizacionales. El comunicado reconoce exposición; el mecanismo es un supuesto (Interbank, 2024)."
    ],
    [
      "R2 · A-02; Credenciales y autenticación; Confidencialidad e integridad",
      "Credenciales capturadas o reutilizadas permiten acceso indebido. La condición es autenticación o recuperación susceptible de abuso.",
      "Acceso a cuentas y fraude hipotético. La exposición de claves no está confirmada por el comunicado; el escenario es preventivo."
    ],
    [
      "R3 · A-03; Aplicación, Plin y banca web; Disponibilidad",
      "Falla o contención hipotética interrumpe un canal de 1 a 8 horas; recuperación o redundancia insuficiente en el escenario.",
      "Interrupción del servicio. Los reportes de fallas justifican estudiarlo, sin probar duración ni causalidad (Panamericana Televisión, 2024)."
    ],
    [
      "R4 · A-01 y A-04; Datos; respuesta y comunicación; Confidencialidad, integridad y disponibilidad",
      "Hallazgos hipotéticos sobre protección de datos, seguridad o evidencia motivan medidas correctivas o sanciones.",
      "Consecuencias regulatorias y reputacionales. Las actuaciones de autoridades justifican el escenario, no prueban infracción (América TV, 2024; Indecopi, 2024; Ricci, 2024)."
    ],
    [
      "R5 · A-01; Datos personales; Confidencialidad",
      "Un tercero redistribuye información o la utiliza para extorsión o ingeniería social. La condición supuesta es disponer de datos utilizables.",
      "Perjuicio futuro a clientes y entidad. La intención de extorsión procede de una declaración atribuida al ejecutivo (América TV, 2024)."
    ]
  ],
  [
    [
      "ID",
      "P",
      "I",
      "R y clase",
      "Fundamento de la categoría"
    ],
    [
      "R1",
      "4",
      "4",
      "16 · Alto",
      "P4: antecedente de exposición como referencia de plausibilidad, sin asumir repetición estadística. I4: dimensión legal y reputacional mayor. No se asigna I5 porque no se acredita la combinación con fraude consumado."
    ],
    [
      "R5",
      "4",
      "4",
      "16 · Alto",
      "P4: exposición y declaración de intención de extorsión. I4: consecuencias organizacionales del escenario de difusión. No equivale a extorsión consumada contra clientes."
    ],
    [
      "R2",
      "3",
      "5",
      "15 · Alto",
      "P3: acceso abusivo posible bajo captura hipotética de credenciales. I5: escenario condicionado a información financiera o credenciales con fraude consumado; no es un hecho del incidente."
    ],
    [
      "R4",
      "3",
      "4",
      "12 · Alto",
      "P3: los hallazgos futuros son posibles y su resultado no se conoce. I4: consecuencias de supervisión y eventual sanción, sin afirmar sanción impuesta."
    ],
    [
      "R3",
      "4",
      "3",
      "12 · Alto",
      "P4: reportes previos de indisponibilidad. I3: escenario delimitado a un canal durante 1–8 horas; no representa duración real medida."
    ]
  ],
  [
    [
      "Riesgo y acciones",
      "Controles propuestos del Anexo A",
      "Funciones y plazo propuestos",
      "Indicador y prueba de cierre"
    ],
    [
      "R1; Restringir consultas y exportación; enmascarar campos; cifrar con gestión separada de claves; registrar y alertar consultas masivas.",
      "A.8.3 Restricción de acceso a la información; A.8.12 Prevención de fugas de datos; A.8.11 Enmascaramiento de datos; A.8.24 Uso de criptografía; A.8.15 Registro; A.8.16 Actividades de monitoreo; A.5.34 Privacidad y protección de información personal",
      "Seguridad de la información y tecnología.; Plan: 30 días.; Hito: 90 días.",
      "Campos protegidos / campos definidos en alcance × 100. Consultas masivas de prueba detectadas o bloqueadas / pruebas ejecutadas × 100. Evidencia: permisos revisados, configuración de claves, exportaciones de prueba y registros correlacionados."
    ],
    [
      "R5; Ensayar respuesta y escalamiento; analizar amenazas; coordinar comunicaciones y contacto con autoridades; impedir nuevas salidas de datos.",
      "A.5.24 Planificación y preparación para gestionar incidentes de seguridad de la información; A.5.26 Respuesta a incidentes de seguridad de la información; A.5.27 Aprendizaje de incidentes de seguridad de la información; A.5.7 Inteligencia de amenazas; A.5.5 Contacto con autoridades; A.8.12 Prevención de fugas de datos",
      "Seguridad de la información y riesgos.; Plan: 30 días.; Hito: 120 días.",
      "Tiempo desde validación de alerta hasta escalamiento; ejercicios realizados por año. Evidencia: cronología del ejercicio, decisiones, comunicación aprobada y lecciones con acciones cerradas. El seguro eventual comparte costos, no elimina responsabilidad."
    ],
    [
      "R2; Reforzar autenticación y recuperación; revisar identidades y secretos; formar al personal; detectar sesiones anómalas.",
      "A.8.5 Autenticación segura; A.5.16 Gestión de identidades; A.5.17 Información de autenticación; A.6.3 Concienciación, educación y formación en seguridad de la información; A.8.16 Actividades de monitoreo",
      "Canales digitales y seguridad de la información.; Plan: 30 días.; Hito: 90 días.",
      "Accesos cubiertos por verificación reforzada / accesos dentro del alcance × 100. Casos de prueba anómalos detectados / casos ejecutados × 100. Evidencia: políticas de autenticación y pruebas de suplantación, sesión y recuperación."
    ],
    [
      "R4; Contrastar obligaciones por fecha; reunir evidencia; revisar brechas y someter las medidas a evaluación independiente.",
      "A.5.31 Requisitos legales, estatutarios, regulatorios y contractuales; A.5.34 Privacidad y protección de información personal; A.5.35 Revisión independiente de la seguridad de la información; A.5.36 Conformidad con políticas, reglas y normas de seguridad de la información",
      "Cumplimiento y auditoría interna.; Plan: 90 días.; Hito: 180 días.",
      "Hallazgos abiertos y cerrados con evidencia; revisiones independientes efectuadas. Evidencia: matriz de obligaciones aplicables, informes de revisión y comprobantes de corrección. No presupone infracciones detectadas."
    ],
    [
      "R3; Ensayar redundancia y restauración; controlar cambios y reversión; relacionar recuperación con continuidad del servicio.",
      "A.8.14 Redundancia de instalaciones de procesamiento de información; A.8.32 Gestión de cambios; A.5.30 Preparación de las TIC para la continuidad del negocio; A.8.13 Copias de seguridad de la información",
      "Tecnología y operaciones.; Plan: 90 días.; Hito: 180 días.",
      "Tiempo disponible / tiempo comprometido del canal × 100; tiempo de recuperación medido en ejercicio. Evidencia: informes de conmutación, restauración y reversión. Las metas requieren una definición interna del servicio."
    ]
  ],
  [
    [
      "ID",
      "Inicial P × I",
      "Residual P × I",
      "Clase residual",
      "Decisión académica condicionada"
    ],
    [
      "R1",
      "4 × 4 = 16",
      "2 × 3 = 6",
      "Moderado",
      "Candidato a aceptación por propietario tras pruebas; revisión semestral."
    ],
    [
      "R2",
      "3 × 5 = 15",
      "2 × 5 = 10",
      "Alto",
      "No aceptar; continuar tratamiento y pruebas de autenticación y recuperación."
    ],
    [
      "R3",
      "4 × 3 = 12",
      "2 × 3 = 6",
      "Moderado",
      "Candidato a aceptación tras pruebas; revisión semestral o ante cambios mayores."
    ],
    [
      "R4",
      "3 × 4 = 12",
      "2 × 4 = 8",
      "Moderado",
      "Candidato a aceptación con aprobación; revisar ante resultados de las actuaciones y, como mínimo, semestralmente."
    ],
    [
      "R5",
      "4 × 4 = 16",
      "3 × 3 = 9",
      "Moderado",
      "Candidato a aceptación tras ejercicios y evidencia de contención; revisión trimestral."
    ]
  ],
  [
    [
      "Riesgo",
      "Base P × I",
      "P − 1",
      "P + 1",
      "I − 1",
      "I + 1"
    ],
    [
      "R1",
      "2 × 3 = 6",
      "3 bajo",
      "9 moderado",
      "4 bajo",
      "8 moderado"
    ],
    [
      "R2",
      "2 × 5 = 10",
      "5 moderado",
      "15 alto",
      "8 moderado",
      "-"
    ],
    [
      "R3",
      "2 × 3 = 6",
      "3 bajo",
      "9 moderado",
      "4 bajo",
      "8 moderado"
    ],
    [
      "R4",
      "2 × 4 = 8",
      "4 bajo",
      "12 alto",
      "6 moderado",
      "10 alto"
    ],
    [
      "R5",
      "3 × 3 = 9",
      "6 moderado",
      "12 alto",
      "6 moderado",
      "12 alto"
    ]
  ],
  [
    [
      "Campo",
      "Qué se registra",
      "Ejemplo: R1"
    ],
    [
      "ID",
      "Identificador único",
      "R1"
    ],
    [
      "Escenario",
      "Quién actúa, qué hace, qué debilidad aprovecha y con qué consecuencia",
      "Un atacante externo extrae registros personales de clientes aprovechando permisos excesivos o saltándose las restricciones de acceso. Consecuencia: divulgación de datos personales con efecto mayor sobre la organización. El mecanismo es un supuesto (apartado 6.8)."
    ],
    [
      "Activo y propietario",
      "Activo afectado y responsable",
      "A-01, datos personales y de contacto de clientes. Propietario propuesto: gobierno de datos."
    ],
    [
      "Propiedad afectada",
      "Confidencialidad, integridad o disponibilidad",
      "Confidencialidad"
    ],
    [
      "Controles existentes",
      "Medidas vigentes y su evidencia",
      "El comunicado menciona medidas adicionales y monitoreo (Interbank, 2024). Su alcance y su eficacia no son públicos."
    ],
    [
      "Probabilidad e impacto",
      "Valores según las escalas definidas",
      "P = 4; I = 4"
    ],
    [
      "Nivel y clase",
      "Producto y categoría",
      "16, alto"
    ],
    [
      "Decisión",
      "Modificar, retener, evitar o compartir",
      "Modificar"
    ],
    [
      "Controles de tratamiento",
      "Controles del Anexo A de ISO/IEC 27001:2022",
      "A.8.3, A.8.11, A.8.12, A.8.15, A.8.16, A.8.24, A.5.34"
    ],
    [
      "Riesgo residual",
      "Valores tras el tratamiento",
      "P = 2; I = 3; 6, moderado. Depende de que las restricciones de acceso, el enmascaramiento y el cifrado con claves protegidas funcionen."
    ],
    [
      "Propietario y aceptación",
      "Responsable y fecha de aprobación",
      "Propietarios propuestos: proceso de datos y seguridad. Sin fecha de aprobación; el nivel 6 es una propuesta de aceptación."
    ],
    [
      "Revisión",
      "Fecha y eventos que reabren el registro",
      "Registro revisado cada trimestre. La aceptación moderada se revisa al menos cada semestre y se reabre ante un incidente, un cambio o la falla de un control."
    ],
    [
      "Horizonte y criterio",
      "Ventana de análisis y fórmula",
      "Doce meses desde el incidente. I = máximo entre dimensiones; R = P × I (Tablas 2 a 4)."
    ],
    [
      "Plan y prueba",
      "Acción, plazo, indicador y evidencia",
      "Tabla 7, fila R1: plan a 30 días e hito a 90. Pruebas de exportación, permisos, claves, alertas y registros."
    ],
    [
      "Fuente y estado",
      "Hecho, supuesto o propuesta",
      "Hecho: comunicado del 30 de octubre (Interbank, 2024). Supuesto: mecanismo de extracción. Propuesta: tratamiento y riesgo residual."
    ]
  ],
  [
    [
      "Pregunta",
      "Evidencia que se espera",
      "Resultado en este estudio"
    ],
    [
      "¿El método está definido y aprobado por la autoridad competente?",
      "Método y decisión de aprobación",
      "Método descrito en 6.2. No hay aprobación corporativa."
    ],
    [
      "¿Los criterios de probabilidad, impacto y aceptación se fijaron antes de valorar?",
      "Versión de los criterios y registro de la valoración",
      "Las Tablas 2 a 4 preceden a la Tabla 6 y las mismas escalas sirven para el riesgo residual. No existe fecha de aprobación interna."
    ],
    [
      "¿El alcance y los roles son coherentes con el SGSI?",
      "Alcance institucional y responsabilidades",
      "Alcance y horizonte definidos. Los roles de la Tabla 7 son propuestos; el SGSI del banco no se evaluó."
    ],
    [
      "¿Cada riesgo describe escenario, activo y consecuencia?",
      "Registro con la cadena completa y sus fuentes",
      "Tabla 5: R1 a R5, activos A-01 a A-04 y condiciones facilitadoras. Los supuestos están en 6.8."
    ],
    [
      "¿Las escalas se aplican con justificación?",
      "Cálculos y fundamento de probabilidad e impacto",
      "Tabla 6 y apartado 6.6. Productos iniciales de R1 a R5: 16, 15, 12, 12 y 16. Residuales: 6, 10, 6, 8 y 9."
    ],
    [
      "¿La evaluación compara con los criterios y prioriza?",
      "Decisiones y regla de desempate",
      "Tabla 4 y apartado 6.4: R1, R5, R2, R4, R3. Ningún escenario inicial es crítico."
    ],
    [
      "¿Los controles se contrastan con el Anexo A?",
      "Justificaciones y declaración de aplicabilidad",
      "La Tabla 7 vincula cada acción con sus controles (PQAL, 2022). La declaración de aplicabilidad del banco no es pública."
    ],
    [
      "¿El plan fija acciones, responsables, recursos, plazos y pruebas?",
      "Plan autorizado y evidencia de ejecución",
      "La Tabla 7 propone funciones, plazos, indicadores y pruebas. No hay presupuesto, autorización ni ejecución verificados."
    ],
    [
      "¿El propietario decide sobre el riesgo residual?",
      "Acta o aprobación con condiciones y revisión",
      "Tabla 8: cuatro residuales moderados quedan como candidatos a aceptación; R2 sigue alto y no se acepta. No consta aceptación institucional."
    ],
    [
      "¿Hay seguimiento, revisión y comunicación?",
      "Indicadores, historial, incidentes y decisiones",
      "El apartado 6.7 propone indicadores mensuales y revisión trimestral, con eventos de reapertura definidos. El banco no publicó historial de aplicación."
    ]
  ]
];
