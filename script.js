const projectsDb = {
    'hydroponics': {
        title: "Hydroponic Farming System",
        domain: "Java, SQL & Web Application",
        timeline: "Academic Capstone (CSE Core)",
        overview: "An interactive agricultural network application designed for urban/city farmers exploring hydroponics. It features tools to learn cultivation, coordinate marketplace supplies, share thoughts, and seek real-time AI crop diagnostics.",
        architecture: [
            "<strong>Farming Community Feed:</strong> Login and bulletin board where city farmers write queries and post crop status updates.",
            "<strong>Marketplace Linkage:</strong> Redirect links routing checkouts of nutrients and pipes to external suppliers.",
            "<strong>AI Grow Helper:</strong> Guided dialog boxes to help troubleshoot root rot and select compatible crops.",
            "<strong>Java & SQL Backend:</strong> Structured tables mapping user accounts, crop guidelines, and board replies."
        ],
        tags: ["Java", "SQL Database", "HTML/CSS/JS", "AI Helper"]
    },
    'health-tracker': {
        title: "Health Tracker & Routine Planner",
        domain: "Java, SQL & Web Application",
        timeline: "Academic Semester Project",
        overview: "A personal health diagnostics portal where users manage physical profile metrics. The system calculates body mass indicators and immediately constructs dietary advice, food restrictions, and home-based workouts.",
        architecture: [
            "<strong>BMI Calculator Engine:</strong> Computes BMI instantly from user height/weight records using backend methods.",
            "<strong>Diagnostic Planner:</strong> Generates structured diet reports indicating food recommendations and workout cards.",
            "<strong>SQL Progress Logs:</strong> Relational tables storing daily logs of weight and routines."
        ],
        tags: ["Java", "SQL Database", "HTML/CSS/JS"]
    },
    'qr-generator': {
        title: "Python QR Code Generator",
        domain: "Python Scripting Utility",
        timeline: "1st Year Mini Project (2023)",
        overview: "A lightweight scripting utility created in my first year of college to generate customized, shareable QR codes from text or URLs.",
        architecture: [
            "<strong>Python Scripting Library:</strong> Uses standard libraries to convert string parameters into matrix grids.",
            "<strong>Vector Export:</strong> Generates clean PNG vectors directly to the local file directory."
        ],
        tags: ["Python", "CLI Scripting"]
    },
    'personal-portfolio': {
        title: "Personal Portfolio Website",
        domain: "HTML5, CSS3 & JavaScript",
        timeline: "Completed in 4th Year (2026)",
        overview: "A custom-crafted developer profile built to present my engineering projects, database designs, and AWS virtual internships. Features a clean, single-page top-navigation structure.",
        architecture: [
            "<strong>Translucent Navigation:</strong> Sticky header menu built with translucent backdrop blur filters for a modern styling feel.",
            "<strong>System details popup modals:</strong> Interactive query triggers built using JavaScript objects to inject detailed specifications without page reloads.",
            "<strong>Platform Integration:</strong> Links solved LeetCode challenges, social networks, and email clients directly.",
            "<strong>Postcard Contact Widget:</strong> Client-side message dispatcher featuring customized validation and successful delivery animations."
        ],
        tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            navToggle.classList.toggle('active');
            
            const bars = navToggle.querySelectorAll('.bar');
            if (navToggle.classList.contains('active')) {
                bars[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }

    const links = document.querySelectorAll('.nav-link, .nav-btn');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('open')) {
                navLinks.classList.remove('open');
                navToggle.classList.remove('active');
                const bars = navToggle.querySelectorAll('.bar');
                bars.forEach(bar => bar.style.transform = 'none');
                bars[1].style.opacity = '1';
            }
        });
    });
});

function openModal(projectId) {
    const modal = document.getElementById('details-modal');
    const contentArea = document.getElementById('modal-content-area');
    const project = projectsDb[projectId];

    if (!modal || !contentArea || !project) return;

    const architectureHTML = project.architecture.map(a => `<li>${a}</li>`).join('');
    const tagsHTML = project.tags.map(t => `<span class="tag">${t}</span>`).join('');

    contentArea.innerHTML = `
        <div class="modal-section-title">${project.domain}</div>
        <h3 class="project-title" style="font-size: 1.5rem; margin-top: 4px; margin-bottom: 8px;">${project.title}</h3>
        <p style="font-size: 0.8rem; color: #64748B; margin-bottom: 20px;"><strong>Timeline:</strong> ${project.timeline}</p>

        <div style="margin-bottom: 20px;">
            <div class="modal-section-title">Overview</div>
            <p style="font-size: 0.9rem; line-height: 1.6; color: #475569; margin-top: 5px;">${project.overview}</p>
        </div>

        <div style="margin-bottom: 20px;">
            <div class="modal-section-title">Core Architecture</div>
            <ul style="font-size: 0.88rem; line-height: 1.6; padding-left: 20px; color: #475569; margin-top: 5px;">
                ${architectureHTML}
            </ul>
        </div>

        <div style="margin-bottom: 25px;">
            <div class="modal-section-title">Technologies Used</div>
            <div style="margin-top: 8px; display: flex; flex-wrap: wrap; gap: 6px;">
                ${tagsHTML}
            </div>
        </div>

        <div style="display: flex; gap: 12px; border-top: 1px solid #E5E7EB; padding-top: 20px;">
            <button class="btn btn-primary" onclick="closeModal()" style="padding: 8px 16px; font-size: 0.85rem;">Close Details</button>
            <a href="#" class="btn btn-secondary" target="_blank" rel="noopener" style="padding: 8px 16px; font-size: 0.85rem;">Code Repository ↗</a>
        </div>
    `;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('details-modal');
    if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }
}

document.getElementById('details-modal').addEventListener('click', (e) => {
    if (e.target.id === 'details-modal') {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

function submitForm(event) {
    event.preventDefault();
    const form = document.getElementById('contact-form');
    const submitBtn = form.querySelector('.submit-btn');
    const successCard = document.getElementById('form-success');

    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>Sending message... ⏳</span>';
    submitBtn.style.opacity = '0.7';
    submitBtn.style.pointerEvents = 'none';

    setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.style.opacity = '1';
        submitBtn.style.pointerEvents = 'auto';

        form.reset();
        successCard.classList.add('show');
    }, 1200);
}

function resetForm() {
    const successCard = document.getElementById('form-success');
    if (successCard) {
        successCard.classList.remove('show');
    }
}
