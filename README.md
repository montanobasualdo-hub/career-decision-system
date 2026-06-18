# Sistema de Orientación de Carrera - FINI Yapacaní

## 🎓 Descripción

Este es un sistema web interactivo que ayuda a estudiantes a elegir la carrera más adecuada para ellos utilizando **teoría de decisiones**. El sistema analiza las aptitudes, intereses y preferencias del estudiante a través de un cuestionario personalizado y proporciona recomendaciones basadas en análisis cuantitativo.

## 📚 Carreras Disponibles

El sistema ofrece orientación para las 10 carreras de la FINI Yapacaní:

1. **Administración de Empresas** - Gestión empresarial y organizacional
2. **Ingeniería Comercial** - Análisis comercial y negocios internacionales
3. **Ingeniería Financiera** - Gestión financiera avanzada
4. **Contaduría Pública** - Contabilidad y auditoría
5. **Derecho** - Administración de justicia
6. **Ingeniería Agropecuaria** - Producción agrícola y ganadera
7. **Ingeniería en Sistemas** - Desarrollo de software
8. **Enfermería** - Cuidado de la salud
9. **Medicina Veterinaria y Zootécnica** - Salud animal
10. **Ciencias de la Educación** - Procesos educativos

## 🎯 Características

### ✅ Cuestionario Inteligente
- 25 preguntas diseñadas según teoría de decisiones
- Cubre aptitudes, intereses, valores y preferencias
- Interfaz intuitiva y fácil de usar
- Progreso visual de la encuesta

### ✅ Sistema de Puntuación
- Algoritmo basado en criterios múltiples
- Análisis de compatibilidad carrera-estudiante
- Ponderación automática de respuestas
- Resultados normalizados (0-100%)

### ✅ Recomendaciones Personalizadas
- Ranking de carreras según compatibilidad
- Carrera más recomendada con justificación
- Visualización clara de resultados
- Posibilidad de repetir el cuestionario

### ✅ Información Detallada
- Descripción completa de cada carrera
- Competencias principales requeridas
- Áreas de desempeño profesional
- Perfil del estudiante ideal
- Perspectivas salariales

### ✅ Interfaz Moderna
- Diseño responsive (móvil, tablet, desktop)
- Colores atractivos y gradientes
- Animaciones suaves
- Navegación intuitiva

## 🚀 Cómo Usar

### Para el Usuario (Estudiante)

1. **Inicia el sistema** en tu navegador
2. **Lee la bienvenida** y entiende el proceso
3. **Completa el cuestionario** respondiendo 25 preguntas
4. **Revisa tus resultados** con el ranking de compatibilidad
5. **Explora las carreras** en detalle
6. **Repite el proceso** si deseas refinar tus respuestas

### Para el Desarrollador

```bash
# Clonar el repositorio
git clone https://github.com/montanobasualdo-hub/career-decision-system.git

# Navegar al directorio
cd career-decision-system

# Abrir en navegador
# Simplemente abre index.html en tu navegador favorito
```

## 📁 Estructura del Proyecto

```
career-decision-system/
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos CSS y responsive
├── script.js           # Lógica de la aplicación
├── data.js             # Bases de datos de carreras y preguntas
└── README.md           # Este archivo
```

## 🔧 Tecnologías Utilizadas

- **HTML5** - Estructura y semántica
- **CSS3** - Estilos, gradientes y animaciones
- **JavaScript Vanilla** - Lógica e interactividad (sin dependencias)

## 💡 Teoría de Decisiones Aplicada

El sistema utiliza los siguientes principios:

### 1. **Matriz de Decisión Multicriterio**
- Cada pregunta representa un criterio de decisión
- Las carreras se puntúan según su alineación con cada criterio
- Los puntajes se normalizan para comparabilidad

### 2. **Ponderación de Preferencias**
- Cada respuesta tiene un valor asociado (1-5 puntos)
- Las carreras reciben puntos basados en la afinidad con cada respuesta
- Se acumulan puntos a lo largo del cuestionario

### 3. **Ranking por Compatibilidad**
- Las carreras se ordenan por puntuación total
- Se calcula un porcentaje de compatibilidad (0-100%)
- Se visualiza el resultado en un ranking claro

## 📊 Ejemplo de Funcionamiento

```
Estudiante responde:
- Pregunta 1: "Me encanta resolver problemas matemáticos"
  → Ingeniería en Sistemas +5 puntos
  → Ingeniería Financiera +5 puntos

- Pregunta 2: "Empatía y ayudar a otros"
  → Enfermería +5 puntos
  → Ciencias de la Educación +4 puntos

... (continúa con 23 preguntas más)

Resultado Final:
1. Ingeniería en Sistemas: 78% compatibilidad 🥇
2. Ingeniería Financiera: 72% compatibilidad 🥈
3. Administración de Empresas: 65% compatibilidad 🥉
```

## 🎨 Personalización

### Cambiar Colores
Edita `styles.css`:
```css
/* Cambiar gradiente principal */
background: linear-gradient(135deg, #NUEVO_COLOR_1 0%, #NUEVO_COLOR_2 100%);
```

### Agregar Nuevas Carreras
Edita `data.js` y añade un nuevo objeto en el array `careers`:
```javascript
{
    id: 11,
    name: "Nueva Carrera",
    icon: "🎓",
    shortDescription: "Descripción breve",
    fullDescription: "Descripción completa con HTML",
    requirements: ["Req1", "Req2"],
    salary: "Rango salarial",
    workFields: ["Campo1", "Campo2"],
    matchingQuestions: [1, 5, 10, 15, 20]
}
```

### Modificar Preguntas
Edita `data.js` y actualiza el array `questions` con nuevas preguntas o respuestas.

## 📱 Compatibilidad

- ✅ Chrome/Chromium 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Navegadores móviles (iOS Safari, Chrome Mobile)

## 🔒 Privacidad

- Todos los datos se procesan **localmente** en el navegador
- No se envía información a servidores externos
- No se almacenan datos personales
- El usuario puede cerrar la página sin dejar registros

## 🐛 Reporte de Problemas

Si encuentras algún problema:
1. Abre un issue en GitHub
2. Describe el problema detalladamente
3. Incluye capturas de pantalla si es posible
4. Especifica tu navegador y sistema operativo

## 💬 Sugerencias y Mejoras

¿Tienes ideas para mejorar el sistema?
- Abre una discusión en el repositorio
- Proporciona detalles de tu sugerencia
- Explica cómo mejoraría la experiencia del usuario

## 📄 Licencia

Este proyecto está disponible para uso educativo y sin fines de lucro.

## 👨‍💻 Autor

Desarrollado para FINI Yapacaní como herramienta de orientación vocacional.

## 🙏 Agradecimientos

- FINI Yapacaní por proporcionar la información de carreras
- Teoría de decisiones multicriterio (MCDM)
- La comunidad de desarrollo web

---

**¡Ayuda a los estudiantes a encontrar su carrera ideal!** 🎓