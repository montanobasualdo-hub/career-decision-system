// Estado global
let currentQuestion = 0;
let scores = {};
let userAnswers = {};

// Inicializar scores
function initializeScores() {
    scores = {};
    careers.forEach(career => {
        scores[career.id] = 0;
    });
}

// Mostrar sección
function showSection(sectionId) {
    // Ocultar todas las secciones
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Mostrar la sección seleccionada
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('active');
    }
    
    // Acciones específicas por sección
    if (sectionId === 'careers') {
        displayCareers();
    }
    
    // Scroll al inicio
    window.scrollTo(0, 0);
}

// Iniciar cuestionario
function startQuiz() {
    initializeScores();
    userAnswers = {};
    currentQuestion = 0;
    displayQuestion();
    showSection('quiz');
}

// Mostrar pregunta actual
function displayQuestion() {
    if (currentQuestion >= questions.length) {
        calculateResults();
        showSection('results');
        return;
    }
    
    const question = questions[currentQuestion];
    document.getElementById('questionTitle').textContent = `Pregunta ${currentQuestion + 1}`;
    document.getElementById('questionText').textContent = question.question;
    document.getElementById('currentQuestion').textContent = currentQuestion + 1;
    document.getElementById('totalQuestions').textContent = questions.length;
    
    // Actualizar barra de progreso
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    
    // Mostrar opciones de respuesta
    const answersContainer = document.getElementById('answersContainer');
    answersContainer.innerHTML = '';
    
    question.answers.forEach((answer, index) => {
        const div = document.createElement('div');
        div.className = 'answer-option';
        if (userAnswers[currentQuestion] === index) {
            div.classList.add('selected');
        }
        div.textContent = answer.text;
        div.onclick = () => selectAnswer(index);
        answersContainer.appendChild(div);
    });
    
    // Actualizar botones de navegación
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (currentQuestion === 0) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';
    }
    
    if (currentQuestion === questions.length - 1) {
        nextBtn.textContent = 'Ver Resultados';
    } else {
        nextBtn.textContent = 'Siguiente →';
    }
}

// Seleccionar respuesta
function selectAnswer(answerIndex) {
    userAnswers[currentQuestion] = answerIndex;
    const question = questions[currentQuestion];
    const answer = question.answers[answerIndex];
    
    // Agregar puntos a las carreras
    for (const careerId in answer.score) {
        scores[careerId] += answer.score[careerId];
    }
    
    // Actualizar visualización
    document.querySelectorAll('.answer-option').forEach((option, index) => {
        option.classList.remove('selected');
        if (index === answerIndex) {
            option.classList.add('selected');
        }
    });
}

// Pregunta anterior
function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
}

// Siguiente pregunta
function nextQuestion() {
    if (userAnswers[currentQuestion] === undefined) {
        alert('Por favor, selecciona una respuesta');
        return;
    }
    
    currentQuestion++;
    displayQuestion();
}

// Calcular resultados
function calculateResults() {
    // Ordenar carreras por puntuación
    const sortedCareers = careers.map(career => ({
        ...career,
        score: scores[career.id] || 0
    })).sort((a, b) => b.score - a.score);
    
    // Mostrar top carrera
    const topCareer = sortedCareers[0];
    const maxScore = sortedCareers[0].score;
    const percentage = maxScore > 0 ? Math.round((maxScore / (questions.length * 5)) * 100) : 0;
    
    document.getElementById('topCareer').textContent = topCareer.name;
    document.getElementById('topScore').style.width = percentage + '%';
    document.getElementById('topScoreText').textContent = `Compatibilidad: ${percentage}%`;
    
    // Mostrar ranking completo
    const rankingContainer = document.getElementById('rankingContainer');
    rankingContainer.innerHTML = '';
    
    sortedCareers.forEach((career, index) => {
        const percent = maxScore > 0 ? Math.round((career.score / maxScore) * 100) : 0;
        const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index + 1}.`;
        
        const div = document.createElement('div');
        div.className = 'ranking-item';
        div.innerHTML = `
            <div class="ranking-position">${medal}</div>
            <div class="ranking-info">
                <div class="ranking-name">${career.name}</div>
                <div class="ranking-mini-bar">
                    <div class="ranking-mini-fill" style="width: ${percent}%"></div>
                </div>
            </div>
            <div class="ranking-score">${percent}%</div>
        `;
        div.onclick = () => showCareerModal(career);
        rankingContainer.appendChild(div);
    });
}

// Mostrar carreras
function displayCareers() {
    const careersGrid = document.getElementById('careersGrid');
    careersGrid.innerHTML = '';
    
    careers.forEach(career => {
        const div = document.createElement('div');
        div.className = 'career-card';
        div.innerHTML = `
            <div class="career-icon">${career.icon}</div>
            <h3>${career.name}</h3>
            <p>${career.shortDescription}</p>
        `;
        div.onclick = () => showCareerModal(career);
        careersGrid.appendChild(div);
    });
}

// Mostrar modal de carrera
function showCareerModal(career) {
    const modal = document.getElementById('careerModal');
    document.getElementById('modalCareerName').textContent = career.name;
    document.getElementById('modalCareerDetails').innerHTML = career.fullDescription;
    modal.classList.add('active');
}

// Cerrar modal
function closeModal() {
    const modal = document.getElementById('careerModal');
    modal.classList.remove('active');
}

// Reiniciar cuestionario
function resetQuiz() {
    showSection('welcome');
}

// Cerrar modal si se hace clic fuera
window.onclick = function(event) {
    const modal = document.getElementById('careerModal');
    if (event.target === modal) {
        modal.classList.remove('active');
    }
}

// Inicializar la página
document.addEventListener('DOMContentLoaded', function() {
    initializeScores();
});
