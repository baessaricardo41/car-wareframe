// Smooth scrolling for anchor links
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}

// Interactive Cards
function toggleCard(card) {
    // Fechar outros cards abertos
    const allCards = document.querySelectorAll('.service-card');
    allCards.forEach(c => {
        if (c !== card && c.classList.contains('active')) {
            c.classList.remove('active');
        }
    });
    
    // Alternar o card atual
    card.classList.toggle('active');
}

// Diagnostic Tool Data
const diagnosticData = {
    'motor': {
        title: 'Análise do Motor',
        desc: 'Sintomas comuns: Barulhos anormais, perda de potência, luz de injeção acesa. Recomendamos um diagnóstico computadorizado para verificar velas, bobinas e sensores.'
    },
    'pneu': {
        title: 'Suspensão e Pneus',
        desc: 'Sintomas comuns: Vibração no volante, desgaste irregular dos pneus, carro puxando para um lado. Pode ser necessário alinhamento, balanceamento ou troca de amortecedores.'
    },
    'escapamento': {
        title: 'Sistema de Escapamento',
        desc: 'Sintomas comuns: Ruído excessivo, fumaça escura, cheiro forte de combustível. Verificação do catalisador, silenciador e sondas lambda é indicada.'
    }
};

// Diagnostic Tool Functions
function showDiagnostic(part, element) {
    const panel = document.getElementById('diagnostic-panel');
    const title = document.getElementById('diag-title');
    const desc = document.getElementById('diag-desc');
    
    const data = diagnosticData[part];
    
    if (data) {
        title.innerText = data.title;
        desc.innerText = data.desc;
        panel.classList.remove('hidden');
        
        // Remove active state from all hotspots
        document.querySelectorAll('.hotspot').forEach(h => {
            h.style.background = 'var(--primary)';
        });
        
        // Set active state to clicked hotspot
        element.style.background = 'white';
    }
}

function closeDiagnostic() {
    const panel = document.getElementById('diagnostic-panel');
    panel.classList.add('hidden');
    
    document.querySelectorAll('.hotspot').forEach(h => {
        h.style.background = 'var(--primary)';
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '1rem 5%';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.padding = '1.5rem 5%';
        navbar.style.boxShadow = 'none';
    }
});

// Simple animation on scroll for elements
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
