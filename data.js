// Base de datos de carreras FINI Yapacaní
const careers = [
    {
        id: 1,
        name: "Administración de Empresas",
        icon: "📊",
        shortDescription: "Gestiona empresas y organizaciones de manera eficiente.",
        fullDescription: `
            <h3>Descripción General</h3>
            <p>La Administración de Empresas forma profesionales capacitados para gestionar, organizar y dirigir empresas y organizaciones de todo tipo.</p>
            
            <h3>Competencias Principales</h3>
            <ul>
                <li>Gestión empresarial y organizacional</li>
                <li>Liderazgo y toma de decisiones</li>
                <li>Gestión financiera básica</li>
                <li>Planificación estratégica</li>
                <li>Recursos humanos</li>
            </ul>
            
            <h3>Áreas de Desempeño</h3>
            <ul>
                <li>Empresas públicas y privadas</li>
                <li>Consultorías empresariales</li>
                <li>Emprendimiento</li>
                <li>Recursos humanos</li>
                <li>Gestión de proyectos</li>
            </ul>
            
            <h3>Perfil del Estudiante</h3>
            <p>Ideales para personas con liderazgo, habilidades de comunicación, visión estratégica y capacidad de análisis.</p>
        `,
        requirements: ["Liderazgo", "Comunicación", "Análisis", "Organización"],
        salary: "Moderado a Alto",
        workFields: ["Gestión empresarial", "Recursos humanos", "Consultoría"],
        matchingQuestions: [2, 4, 7, 10, 15]
    },
    {
        id: 2,
        name: "Ingeniería Comercial",
        icon: "💼",
        shortDescription: "Especialista en análisis comercial y negocios internacionales.",
        fullDescription: `
            <h3>Descripción General</h3>
            <p>Ingeniería Comercial forma profesionales expertos en análisis de negocios, comercio internacional y estrategias comerciales.</p>
            
            <h3>Competencias Principales</h3>
            <ul>
                <li>Análisis comercial y de mercados</li>
                <li>Comercio internacional</li>
                <li>Matemáticas aplicadas a negocios</li>
                <li>Gestión de proyectos comerciales</li>
                <li>Negociación y relaciones comerciales</li>
            </ul>
            
            <h3>Áreas de Desempeño</h3>
            <ul>
                <li>Empresas comerciales e importadoras</li>
                <li>Comercio internacional</li>
                <li>Análisis de mercados</li>
                <li>Gestión de ventas</li>
                <li>Logística y distribución</li>
            </ul>
            
            <h3>Perfil del Estudiante</h3>
            <p>Para personas con aptitud matemática, interés en negocios internacionales, capacidad analítica y espíritu comercial.</p>
        `,
        requirements: ["Matemáticas", "Análisis", "Negociación", "Visión global"],
        salary: "Moderado a Alto",
        workFields: ["Comercio exterior", "Análisis de mercados", "Ventas"],
        matchingQuestions: [2, 5, 8, 11, 16]
    },
    {
        id: 3,
        name: "Ingeniería Financiera",
        icon: "💰",
        shortDescription: "Especialista en análisis y gestión financiera avanzada.",
        fullDescription: `
            <h3>Descripción General</h3>
            <p>Ingeniería Financiera prepara profesionales para analizar, diseñar e implementar soluciones financieras complejas.</p>
            
            <h3>Competencias Principales</h3>
            <ul>
                <li>Análisis financiero avanzado</li>
                <li>Gestión de portafolios e inversiones</li>
                <li>Matemática financiera</li>
                <li>Gestión del riesgo</li>
                <li>Derivados financieros</li>
            </ul>
            
            <h3>Áreas de Desempeño</h3>
            <ul>
                <li>Instituciones financieras</li>
                <li>Asesoría en inversiones</li>
                <li>Fondos de inversión</li>
                <li>Banca de negocios</li>
                <li>Gestión de activos</li>
            </ul>
            
            <h3>Perfil del Estudiante</h3>
            <p>Ideal para personas con excelente aptitud en matemáticas, pensamiento lógico y alto interés en finanzas.</p>
        `,
        requirements: ["Matemáticas avanzadas", "Análisis cuantitativo", "Lógica", "Precisión"],
        salary: "Alto",
        workFields: ["Banca", "Inversiones", "Análisis financiero"],
        matchingQuestions: [1, 3, 6, 9, 12]
    },
    {
        id: 4,
        name: "Contaduría Pública",
        icon: "📝",
        shortDescription: "Profesional experto en contabilidad, auditoría y gestión fiscal.",
        fullDescription: `
            <h3>Descripción General</h3>
            <p>Contaduría Pública prepara especialistas en contabilidad, auditoría, impuestos y gestión financiera empresarial.</p>
            
            <h3>Competencias Principales</h3>
            <ul>
                <li>Contabilidad financiera</li>
                <li>Auditoría y asuntos fiscales</li>
                <li>Gestión tributaria</li>
                <li>Análisis de estados financieros</li>
                <li>Normativas contables internacionales</li>
            </ul>
            
            <h3>Áreas de Desempeño</h3>
            <ul>
                <li>Ejercicio independiente</li>
                <li>Empresas de auditoría</li>
                <li>Departamentos contables</li>
                <li>Asesoría fiscal</li>
                <li>Administración pública</li>
            </ul>
            
            <h3>Perfil del Estudiante</h3>
            <p>Para personas detallistas, con facilidad para números, orden, responsabilidad y capacidad de análisis.</p>
        `,
        requirements: ["Atención al detalle", "Matemáticas", "Orden", "Responsabilidad"],
        salary: "Moderado a Alto",
        workFields: ["Auditoría", "Fiscalidad", "Contabilidad empresarial"],
        matchingQuestions: [1, 4, 7, 13, 17]
    },
    {
        id: 5,
        name: "Derecho",
        icon: "⚖️",
        shortDescription: "Profesional experto en la aplicación de la ley y justicia.",
        fullDescription: `
            <h3>Descripción General</h3>
            <p>Derecho forma abogados capacitados para administrar justicia, asesorar en asuntos legales y defender derechos.</p>
            
            <h3>Competencias Principales</h3>
            <ul>
                <li>Conocimiento de leyes y normativas</li>
                <li>Argumentación y oratoria</li>
                <li>Investigación jurídica</li>
                <li>Ética profesional</li>
                <li>Negociación y mediación</li>
            </ul>
            
            <h3>Áreas de Desempeño</h3>
            <ul>
                <li>Ejercicio privado de la abogacía</li>
                <li>Administración de justicia</li>
                <li>Asesoría legal empresarial</li>
                <li>Derecho laboral y mercantil</li>
                <li>Administración pública</li>
            </ul>
            
            <h3>Perfil del Estudiante</h3>
            <p>Ideal para personas con capacidad argumentativa, sentido de justicia, pensamiento crítico y excelente comunicación.</p>
        `,
        requirements: ["Argumentación", "Lectura y análisis", "Ética", "Comunicación"],
        salary: "Moderado a Alto",
        workFields: ["Ejercicio forense", "Asesoría legal", "Justicia"],
        matchingQuestions: [5, 8, 11, 14, 18]
    },
    {
        id: 6,
        name: "Ingeniería Agropecuaria",
        icon: "🌾",
        shortDescription: "Especialista en agricultura, ganadería y recursos naturales.",
        fullDescription: `
            <h3>Descripción General</h3>
            <p>Ingeniería Agropecuaria prepara profesionales para mejorar la producción agrícola y ganadera de manera sostenible.</p>
            
            <h3>Competencias Principales</h3>
            <ul>
                <li>Producción agrícola y ganadera</li>
                <li>Tecnología e innovación agraria</li>
                <li>Gestión de recursos naturales</li>
                <li>Sostenibilidad ambiental</li>
                <li>Mejora genética y sanidad animal</li>
            </ul>
            
            <h3>Áreas de Desempeño</h3>
            <ul>
                <li>Explotaciones agrícolas</li>
                <li>Ganadería intensiva y extensiva</li>
                <li>Investigación agrícola</li>
                <li>Conservación ambiental</li>
                <li>Empresas agropecuarias</li>
            </ul>
            
            <h3>Perfil del Estudiante</h3>
            <p>Para personas apasionadas por la naturaleza, con capacidad técnica, responsabilidad ambiental e innovación.</p>
        `,
        requirements: ["Ciencias naturales", "Innovación técnica", "Sostenibilidad", "Trabajo en campo"],
        salary: "Moderado",
        workFields: ["Agricultura", "Ganadería", "Consultoría agrícola"],
        matchingQuestions: [3, 6, 9, 14, 19]
    },
    {
        id: 7,
        name: "Ingeniería en Sistemas",
        icon: "💻",
        shortDescription: "Especialista en desarrollo de software y sistemas informáticos.",
        fullDescription: `
            <h3>Descripción General</h3>
            <p>Ingeniería en Sistemas forma profesionales capaces de diseñar, desarrollar e implementar soluciones informáticas.</p>
            
            <h3>Competencias Principales</h3>
            <ul>
                <li>Programación y desarrollo de software</li>
                <li>Análisis y diseño de sistemas</li>
                <li>Bases de datos</li>
                <li>Redes y seguridad informática</li>
                <li>Tecnologías emergentes</li>
            </ul>
            
            <h3>Áreas de Desempeño</h3>
            <ul>
                <li>Desarrollo de software</li>
                <li>Empresas de tecnología</li>
                <li>Consultoría IT</li>
                <li>Seguridad informática</li>
                <li>Administración de sistemas</li>
            </ul>
            
            <h3>Perfil del Estudiante</h3>
            <p>Ideal para personas con lógica matemática, pasión por la tecnología, resolución de problemas e innovación.</p>
        `,
        requirements: ["Lógica matemática", "Pensamiento analítico", "Programación", "Innovación"],
        salary: "Alto",
        workFields: ["Desarrollo de software", "IT", "Telecomunicaciones"],
        matchingQuestions: [1, 4, 7, 10, 20]
    },
    {
        id: 8,
        name: "Enfermería",
        icon: "⚕️",
        shortDescription: "Profesional dedicado al cuidado y bienestar de la salud.",
        fullDescription: `
            <h3>Descripción General</h3>
            <p>Enfermería prepara profesionales para el cuidado integral de la salud en diferentes contextos sanitarios.</p>
            
            <h3>Competencias Principales</h3>
            <ul>
                <li>Cuidado del paciente</li>
                <li>Administración de tratamientos</li>
                <li>Procedimientos médico-quirúrgicos</li>
                <li>Educación en salud</li>
                <li>Ética y compasión humanitaria</li>
            </ul>
            
            <h3>Áreas de Desempeño</h3>
            <ul>
                <li>Hospitales y clínicas</li>
                <li>Centros de salud</li>
                <li>Medicina preventiva</li>
                <li>Cuidados domiciliarios</li>
                <li>Enfermería comunitaria</li>
            </ul>
            
            <h3>Perfil del Estudiante</h3>
            <p>Para personas con vocación de servicio, empatía, paciencia, capacidad técnica y responsabilidad en salud.</p>
        `,
        requirements: ["Vocación de servicio", "Empatía", "Capacidad técnica", "Responsabilidad"],
        salary: "Moderado",
        workFields: ["Hospitales", "Clínicas", "Salud comunitaria"],
        matchingQuestions: [2, 5, 11, 15, 21]
    },
    {
        id: 9,
        name: "Medicina Veterinaria y Zootécnica",
        icon: "🐾",
        shortDescription: "Especialista en salud animal y producción zootécnica.",
        fullDescription: `
            <h3>Descripción General</h3>
            <p>Medicina Veterinaria y Zootécnica prepara profesionales para la prevención, diagnóstico y tratamiento de enfermedades animales.</p>
            
            <h3>Competencias Principales</h3>
            <ul>
                <li>Diagnóstico y tratamiento veterinario</li>
                <li>Producción y mejora zootécnica</li>
                <li>Sanidad animal</li>
                <li>Farmacología veterinaria</li>
                <li>Gestión de explotaciones pecuarias</li>
            </ul>
            
            <h3>Áreas de Desempeño</h3>
            <ul>
                <li>Clínicas y hospitales veterinarios</li>
                <li>Explotaciones ganaderas</li>
                <li>Sanidad animal oficial</li>
                <li>Investigación veterinaria</li>
                <li>Industria alimentaria animal</li>
            </ul>
            
            <h3>Perfil del Estudiante</h3>
            <p>Para personas que aman los animales, con capacidad técnica, responsabilidad y vocación de bienestar animal.</p>
        `,
        requirements: ["Amor por animales", "Ciencias naturales", "Capacidad técnica", "Vocación"],
        salary: "Moderado",
        workFields: ["Clínica veterinaria", "Ganadería", "Sanidad animal"],
        matchingQuestions: [3, 6, 12, 16, 22]
    },
    {
        id: 10,
        name: "Ciencias de la Educación",
        icon: "📚",
        shortDescription: "Especialista en procesos educativos e innovación pedagógica.",
        fullDescription: `
            <h3>Descripción General</h3>
            <p>Ciencias de la Educación forma profesionales capacitados para diseñar, implementar y mejorar procesos educativos.</p>
            
            <h3>Competencias Principales</h3>
            <ul>
                <li>Diseño curricular</li>
                <li>Pedagogía e innovación educativa</li>
                <li>Evaluación educativa</li>
                <li>Orientación educativa</li>
                <li>Gestión educativa</li>
            </ul>
            
            <h3>Áreas de Desempeño</h3>
            <ul>
                <li>Docencia en niveles básico y superior</li>
                <li>Capacitación corporativa</li>
                <li>Gestión educativa</li>
                <li>Diseño instruccional</li>
                <li>Educación especial y orientación</li>
            </ul>
            
            <h3>Perfil del Estudiante</h3>
            <p>Ideal para personas con vocación docente, capacidad comunicativa, paciencia, pasión por enseñanza y compromiso social.</p>
        `,
        requirements: ["Vocación docente", "Comunicación", "Paciencia", "Compromiso social"],
        salary: "Moderado",
        workFields: ["Docencia", "Capacitación", "Orientación educativa"],
        matchingQuestions: [2, 8, 13, 18, 23]
    }
];

// Preguntas del cuestionario
const questions = [
    {
        id: 1,
        question: "¿Cuál es tu relación con las matemáticas?",
        answers: [
            { text: "Me encanta resolver problemas matemáticos", score: { 3: 5, 1: 3, 2: 3, 7: 5 } },
            { text: "Me resulta fácil pero no es mi pasión", score: { 3: 3, 1: 2, 2: 2, 4: 2 } },
            { text: "Me cuesta trabajo", score: { 5: 3, 8: 2, 10: 2 } },
            { text: "No la entiendo bien", score: { 5: 2, 8: 1, 10: 1 } }
        ]
    },
    {
        id: 2,
        question: "¿Cuál es tu fortaleza principal?",
        answers: [
            { text: "Liderazgo y gestión de personas", score: { 1: 5, 5: 3, 10: 2 } },
            { text: "Empatía y ayudar a otros", score: { 8: 5, 10: 4, 5: 2 } },
            { text: "Organización y planificación", score: { 1: 4, 4: 4, 10: 3 } },
            { text: "Creatividad e innovación", score: { 7: 3, 10: 3, 6: 2 } }
        ]
    },
    {
        id: 3,
        question: "¿Qué tipo de ambiente te motiva más?",
        answers: [
            { text: "Oficinas, números y análisis", score: { 3: 5, 4: 5, 1: 3 } },
            { text: "Campo, naturaleza y animales", score: { 6: 5, 9: 4 } },
            { text: "Laboratorios y tecnología", score: { 7: 4, 3: 2 } },
            { text: "Comunidad y contacto humano", score: { 8: 5, 10: 4, 5: 2 } }
        ]
    },
    {
        id: 4,
        question: "¿Cómo eres con los detalles?",
        answers: [
            { text: "Muy detallista y meticuloso", score: { 4: 5, 7: 4, 1: 2 } },
            { text: "Cuido los detalles importantes", score: { 4: 3, 7: 3, 2: 2 } },
            { text: "Me enfoco en lo general", score: { 1: 3, 2: 3, 5: 2 } },
            { text: "No me preocupan mucho", score: { 6: 2, 9: 1 } }
        ]
    },
    {
        id: 5,
        question: "¿Qué te atrae más profesionalmente?",
        answers: [
            { text: "Argumentar y defender ideas", score: { 5: 5, 2: 3, 1: 2 } },
            { text: "Comunicar y enseñar", score: { 10: 5, 8: 3, 5: 2 } },
            { text: "Analizar datos y tendencias", score: { 3: 4, 2: 4, 4: 2 } },
            { text: "Resolver problemas prácticos", score: { 7: 4, 6: 3, 9: 2 } }
        ]
    },
    {
        id: 6,
        question: "¿Cuál es tu interés en ciencias naturales?",
        answers: [
            { text: "Alto, me apasiona", score: { 6: 5, 9: 5, 8: 3 } },
            { text: "Moderado, me interesa", score: { 6: 3, 9: 3, 8: 2 } },
            { text: "Bajo", score: { 1: 2, 2: 2, 7: 1 } },
            { text: "No me interesa", score: { 1: 1, 2: 1, 3: 1 } }
        ]
    },
    {
        id: 7,
        question: "¿Cómo trabajas mejor?",
        answers: [
            { text: "En equipo, coordinando a otros", score: { 1: 5, 10: 4, 2: 3 } },
            { text: "Solo o en parejas", score: { 7: 4, 4: 3, 3: 3 } },
            { text: "En proyectos con autonomía", score: { 7: 3, 6: 2, 2: 2 } },
            { text: "En atención directa a personas", score: { 8: 5, 10: 3, 5: 2 } }
        ]
    },
    {
        id: 8,
        question: "¿Cuál es tu visión de carrera ideal?",
        answers: [
            { text: "Impacto social y ayuda a comunidades", score: { 10: 5, 8: 4, 5: 3 } },
            { text: "Independencia y emprendimiento", score: { 1: 4, 2: 4, 5: 3 } },
            { text: "Especialización técnica y expertise", score: { 7: 5, 3: 4, 4: 2 } },
            { text: "Estabilidad y progresión en empresa", score: { 4: 4, 1: 3, 2: 3 } }
        ]
    },
    {
        id: 9,
        question: "¿Cuál es tu capacidad analítica?",
        answers: [
            { text: "Muy buena, me encanta analizar", score: { 3: 5, 7: 4, 2: 4 } },
            { text: "Buena, puedo analizar bien", score: { 3: 3, 7: 3, 4: 3 } },
            { text: "Media, depende del tema", score: { 1: 2, 10: 2, 6: 1 } },
            { text: "Baja, prefiero otras habilidades", score: { 8: 2, 10: 1, 6: 2 } }
        ]
    },
    {
        id: 10,
        question: "¿Cómo es tu interés en tecnología?",
        answers: [
            { text: "Muy alto, es mi pasión", score: { 7: 5, 3: 3 } },
            { text: "Alto, me gusta", score: { 7: 4, 1: 2, 2: 2 } },
            { text: "Moderado, la uso cuando necesito", score: { 1: 1, 6: 1 } },
            { text: "Bajo, me cuesta", score: { 8: 1, 10: 1, 6: 1 } }
        ]
    },
    {
        id: 11,
        question: "¿Cuál es tu habilidad en negociación?",
        answers: [
            { text: "Excelente, persuado fácilmente", score: { 2: 5, 1: 4, 5: 3 } },
            { text: "Buena, puedo negociar", score: { 2: 3, 1: 3, 5: 2 } },
            { text: "Media, depende", score: { 1: 1, 10: 2 } },
            { text: "Me cuesta negociar", score: { 4: 2, 10: 1 } }
        ]
    },
    {
        id: 12,
        question: "¿Qué tan importante es el dinero en tu carrera?",
        answers: [
            { text: "Muy importante, quiero buen salario", score: { 3: 5, 2: 4, 1: 3 } },
            { text: "Importante, pero no lo principal", score: { 3: 2, 2: 2, 1: 3 } },
            { text: "Menos importante que la satisfacción", score: { 8: 4, 10: 4, 6: 3 } },
            { text: "Lo principal es ayudar", score: { 8: 5, 10: 5, 5: 3 } }
        ]
    },
    {
        id: 13,
        question: "¿Cómo ves tu futuro laboral?",
        answers: [
            { text: "Siendo empresario/emprendedor", score: { 1: 5, 2: 4 } },
            { text: "Como profesional independiente", score: { 5: 4, 4: 3, 2: 2 } },
            { text: "En empresa formal", score: { 7: 3, 3: 3, 4: 3 } },
            { text: "En educación o servicio público", score: { 10: 5, 8: 3, 6: 2 } }
        ]
    },
    {
        id: 14,
        question: "¿Qué tan importante es la ética en tu trabajo?",
        answers: [
            { text: "Fundamental, es lo primero", score: { 5: 5, 10: 4, 4: 3 } },
            { text: "Muy importante", score: { 5: 4, 10: 3, 1: 2 } },
            { text: "Importante", score: { 1: 2, 2: 2, 4: 1 } },
            { text: "Menos importante que resultados", score: { 2: 1, 3: 1 } }
        ]
    },
    {
        id: 15,
        question: "¿Cuál es tu relación con la responsabilidad?",
        answers: [
            { text: "Me encanta tener responsabilidad", score: { 1: 5, 4: 4, 5: 3 } },
            { text: "Me gusta pero con apoyo", score: { 1: 3, 8: 3, 10: 2 } },
            { text: "Prefiero libertad que responsabilidad", score: { 7: 3, 6: 2 } },
            { text: "Me estresa", score: { 6: 1, 9: 1 } }
        ]
    },
    {
        id: 16,
        question: "¿Cuál es tu interés en política y administración pública?",
        answers: [
            { text: "Alto, quiero cambiar la sociedad", score: { 5: 5, 1: 3, 10: 3 } },
            { text: "Moderado", score: { 5: 2, 1: 1, 4: 2 } },
            { text: "Bajo", score: { 7: 2, 3: 1, 6: 1 } },
            { text: "No me interesa", score: { 7: 1, 3: 1 } }
        ]
    },
    {
        id: 17,
        question: "¿Cómo maneja el estrés y la presión?",
        answers: [
            { text: "Muy bien, trabajo bajo presión", score: { 3: 4, 1: 4, 7: 3 } },
            { text: "Bien, pero necesito pausas", score: { 4: 3, 10: 3, 8: 2 } },
            { text: "Me afecta, necesito ambientes calmos", score: { 10: 3, 8: 3, 6: 2 } },
            { text: "Mucho, prefiero ritmo lento", score: { 6: 4, 9: 3 } }
        ]
    },
    {
        id: 18,
        question: "¿Cuál es tu visión sobre justicia y derecho?",
        answers: [
            { text: "Me interesa mucho, quiero justicia", score: { 5: 5, 1: 2, 10: 2 } },
            { text: "Me interesa moderadamente", score: { 5: 2, 1: 1, 4: 1 } },
            { text: "Poco interés", score: { 7: 1, 3: 1 } },
            { text: "No me interesa", score: { 7: 1 } }
        ]
    },
    {
        id: 19,
        question: "¿Qué tan importante es para ti la sostenibilidad ambiental?",
        answers: [
            { text: "Muy importante, es mi pasión", score: { 6: 5, 9: 4, 10: 3 } },
            { text: "Importante", score: { 6: 3, 9: 2, 1: 1 } },
            { text: "Algo importante", score: { 6: 1, 2: 1 } },
            { text: "No es importante", score: { 3: 1 } }
        ]
    },
    {
        id: 20,
        question: "¿Cuál es tu facilidad con idiomas?",
        answers: [
            { text: "Excelente, aprendo fácil", score: { 2: 4, 5: 3, 10: 2 } },
            { text: "Buena", score: { 2: 2, 5: 2 } },
            { text: "Media", score: { 7: 1, 1: 1 } },
            { text: "Difícil para mí", score: { 7: 1 } }
        ]
    },
    {
        id: 21,
        question: "¿Cuál es tu capacidad para trabajar con grupos vulnerables?",
        answers: [
            { text: "Excelente, me apasiona", score: { 8: 5, 10: 4, 5: 2 } },
            { text: "Buena", score: { 8: 3, 10: 3, 5: 1 } },
            { text: "Moderada", score: { 10: 1, 1: 1 } },
            { text: "Baja o nula", score: { 7: 1, 3: 1 } }
        ]
    },
    {
        id: 22,
        question: "¿Cuál es tu interés en medicina y salud?",
        answers: [
            { text: "Alto, es mi vocación", score: { 8: 5, 9: 4 } },
            { text: "Moderado", score: { 8: 3, 9: 2, 10: 1 } },
            { text: "Bajo", score: { 7: 1, 3: 1 } },
            { text: "No me interesa", score: { 1: 1 } }
        ]
    },
    {
        id: 23,
        question: "¿Qué tan importante es la creatividad en tu trabajo ideal?",
        answers: [
            { text: "Muy importante, quiero crear", score: { 10: 5, 7: 3, 1: 2 } },
            { text: "Importante", score: { 10: 3, 7: 2, 2: 1 } },
            { text: "Moderadamente", score: { 4: 1, 3: 1 } },
            { text: "No es importante", score: { 4: 2, 3: 1 } }
        ]
    },
    {
        id: 24,
        question: "¿Cuál es tu experiencia laboral actual?",
        answers: [
            { text: "Sin experiencia", score: {} },
            { text: "Experiencia parcial", score: {} },
            { text: "Alguna experiencia relacionada", score: {} },
            { text: "Experiencia significativa", score: {} }
        ]
    },
    {
        id: 25,
        question: "¿Cuál de las siguientes te atrae más?",
        answers: [
            { text: "Resolver problemas complejos", score: { 7: 4, 3: 4, 1: 2 } },
            { text: "Ayudar a personas", score: { 8: 5, 10: 4, 5: 2 } },
            { text: "Crear valor económico", score: { 2: 4, 1: 3, 3: 2 } },
            { text: "Preservar la naturaleza", score: { 6: 5, 9: 3, 10: 1 } }
        ]
    }
];