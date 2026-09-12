// ========================================
// Liste des Projets GitHub - dictino67
// JavaScript
// ========================================

console.log('🚀 Script chargé !');
const projects = [
    {
        name: "liste",
        description: "liste GitHub",
        language: null,
        updated_at: "Sep 12, 2026",
        html_url: "https://github.com/dictino67/liste",
        has_agent_file: true,
        agent_content: {
            title: "🤖 AGENT.md - Documentation de l'Agent AI",
            project: "Liste des Projets GitHub",
            description: "Application web interactive qui liste et affiche tous les projets GitHub d'un utilisateur (dictino67), avec une fonctionnalité de recherche dynamique et l'affichage automatique du contenu des fichiers AGENT.md lorsqu'ils sont disponibles.",
            features: [
                "Affichage de 6 repositories publics de dictino67",
                "Recherche en temps réel par nom, description, langage",
                "Détection automatique des fichiers AGENT.md",
                "Design responsive (3 colonnes desktop / 1 mobile)",
                "Effets hover et animations fluides"
            ],
            stack: {
                html: "Structure HTML5 sémantique",
                css: "Design moderne avec Grid/Flexbox",
                javascript: "Logique de recherche dynamique ES6+"
            }
        },
        visibility: "private"
    },
    {
        name: "projet",
        description: "new projet",
        language: "JavaScript",
        updated_at: "Sep 10, 2026",
        html_url: "https://github.com/dictino67/projet",
        has_agent_file: true,
        agent_content: {
            title: "🤖 AGENT.md - Documentation de l'Agent AI",
            project: "Jeu de Sudoku Web",
            description: "Application web interactive permettant de jouer au Sudoku dans un navigateur. L'application génère des grilles aléatoires et offre une interface utilisateur moderne et responsive.",
            features: [
                "Génération de grille avec algorithme de backtracking",
                "Difficulté variable (30 à 59 cases vides)",
                "Sélection de case modifiable",
                "Entrée des chiffres via pavé numérique ou clavier",
                "Feedback visuel pour erreurs/succès",
                "Bouton Nouvelle Partie et Vérifier",
                "Design responsive mobile/desktop"
            ],
            stack: {
                html: "Structure de la page",
                css: "Design, animations, responsive design",
                javascript: "Logique du jeu, génération de grilles"
            }
        },
        visibility: "private"
    },
    {
        name: "terrain",
        description: "joueur hiver",
        language: "HTML",
        updated_at: "Sep 10, 2026",
        html_url: "https://github.com/dictino67/terrain",
        has_agent_file: false,
        agent_content: null,
        visibility: "public"
    },
    {
        name: "Mycompta",
        description: "m a compta avec facture vente achat chargement facture",
        language: null,
        updated_at: "Sep 5, 2026",
        html_url: "https://github.com/dictino67/Mycompta",
        has_agent_file: false,
        agent_content: null,
        visibility: "public"
    },
    {
        name: "web",
        description: "application test web application",
        language: "JavaScript",
        updated_at: "Aug 28, 2026",
        html_url: "https://github.com/dictino67/web",
        has_agent_file: false,
        agent_content: null,
        visibility: "public"
    },
    {
        name: "dictino67",
        description: "Config files for my GitHub profile",
        language: "JavaScript",
        updated_at: "Aug 25, 2026",
        html_url: "https://github.com/dictino67/dictino67",
        has_agent_file: false,
        agent_content: null,
        visibility: "public"
    }
];


// Fonction pour formater la date
function formatDate(dateStr) {
    return dateStr; // Déjà formaté depuis l'API GitHub
}

// Fonction pour échapper les caractères HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Fonction pour créer une carte de projet
function createProjectCard(project) {
    const card = document.createElement('article');
    card.className = 'project-card';
    
    // Badge couleur langage
    let languageBadgeHtml = '';
    if (project.language) {
        const langClass = project.language.toLowerCase();
        languageBadgeHtml = `
            <span class="language-badge">
                <span class="language-dot ${langClass}"></span>
                ${project.language}
            </span>
        `;
    }
    
    // Contenu AGENT.md si disponible
    let agentContentHtml = '';
    if (project.has_agent_file && project.agent_content) {
        const agentData = project.agent_content;
        agentContentHtml = `
            <div class="agent-section">
                <div class="agent-title">📄 AGENT.md - ${agentData.project}</div>
                <div class="agent-content markdown-text">
                    <p><strong>Description:</strong> ${agentData.description}</p>
                    <h3>⭐ Fonctionnalités Principales</h3>
                    <ul>
                        ${agentData.features.map(f => `<li>${f}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    } else if (project.has_agent_file) {
        agentContentHtml = `
            <div class="agent-section">
                <div class="agent-title">📄 AGENT.md disponible</div>
                <div class="agent-content markdown-text">
                    <p>Ce projet contient un fichier AGENT.md avec documentation détaillée.</p>
                </div>
            </div>
        `;
    }
    
    card.innerHTML = `
        <div class="card-header">
            <h2 class="card-title">${escapeHtml(project.name)}</h2>
            <p class="card-desc">${escapeHtml(project.description || 'Aucune description')}</p>
            <div class="card-meta">
                ${languageBadgeHtml}
                ${project.visibility ? `<span class="visibility-badge ${project.visibility}">${project.visibility === 'private' ? '🔒 Privé' : '🌐 Public'}</span>` : ''}
                <span class="updated-date">Mis à jour : ${formatDate(project.updated_at)}</span>
            </div>
        </div>
        <div class="card-body">
            ${agentContentHtml}
        </div>
        <div class="card-footer">
            <a href="${project.html_url}" target="_blank" rel="noopener" class="github-link">
                Voir sur GitHub →
            </a>
        </div>
    `;
    
    return card;


// Fonction pour créer un élément de liste rapide
function createProjectListItem(project) {
    const item = document.createElement('div');
    item.className = 'project-item-card';
    if (project.visibility) {
        item.classList.add(project.visibility);
    }
    
    const hasAgent = project.has_agent_file || project.agent_content;
    
    // Préparer le bouton ou le message
    let agentActionHTML = '';
    if (hasAgent) {
        const safeName = project.name.replace(/'/g, "\\'");
        agentActionHTML = `
            <button class="agent-button" onclick="viewAgentFile('${safeName}')">
                + Voir AGENT.md
            </button>
        `;
    } else {
        agentActionHTML = `<span class="no-agent-text">⚠️ Pas de AGENT.md</span>`;
    }
    
    // Préparer le badge de visibilité
    const visibilityClass = project.visibility || 'public';
    const visibilityLabel = project.visibility === 'private' ? 'Privé' : 'Public';
    const icon = project.visibility === 'private' ? '🔒' : '🌐';
    
    item.innerHTML = `
        <div class="project-item-name">
            ${icon} 
            ${escapeHtml(project.name)}
        </div>
        <div class="project-item-description">${escapeHtml(project.description || 'Aucune description')}</div>
        <div class="project-item-meta">
            <div class="project-item-actions">
                ${agentActionHTML}
            </div>
            <span class="visibility-badge ${visibilityClass}">
                ${visibilityLabel}
            </span>
        </div>
    `;
    
    return item;
}

// Fonction pour afficher le contenu AGENT.md dans un popup élégant
function viewAgentFile(projectName) {
    const project = projects.find(p => p.name === projectName);
    
    if (!project || !project.agent_content) {
        alert(`❌ Aucun fichier AGENT.md disponible pour le projet "${projectName}".`);
        console.warn('⚠️ Pas de contenu AGENT.md pour', projectName);
        return;
    }
    
    const agentData = project.agent_content;
    
    // Générer le HTML des fonctionnalités
    const featuresHTML = agentData.features ? 
        '<h3 style="margin:15px 0 10px 0;color:#2563eb;">✨ Fonctionnalités</h3><ul style="line-height:1.8;color:#444;padding-left:20px;">' + 
        agentData.features.map(f => `<li>${f}</li>`).join('') + '</ul>' : '';
    
    // Générer le HTML de la stack technique
    let stackHTML = '';
    if (agentData.stack) {
        stackHTML = '<h3 style="margin:15px 0 10px 0;color:#2563eb;">🛠️ Stack Technique</h3><div style="display:grid;gap:8px;margin-top:10px;">' +
            Object.entries(agentData.stack).map(([tech, desc]) => 
                `<div style="background:#f1f3f4;border-left:3px solid #2563eb;padding:10px;border-radius:4px;"><span style="font-weight:bold;color:#2563eb;">${tech}:</span> ${desc}</div>`
            ).join('') + '</div>';
    }
    
    // Remplacer tout le body par le popup
    document.body.innerHTML = `
        <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:linear-gradient(135deg,#f6f8fa 0%,#e9ecef 100%);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:20px;">
            <div style="max-width:700px;margin:20px auto;padding:40px;background:white;border-radius:16px;box-shadow:0 8px 30px rgba(0,0,0,0.15);">
                <h1 style="color:#2563eb;margin-bottom:10px;font-size:32px;">${agentData.title}</h1>
                <p style="color:#6a737d;margin-bottom:25px;font-size:14px;"><strong>Projet:</strong> ${agentData.project || project.name}</p>
                
                <div style="background:#f8f9fa;padding:20px;border-radius:10px;margin-bottom:20px;">
                    <h3 style="margin-top:0;color:#2563eb;">📝 Description</h3>
                    <p style="line-height:1.6;color:#4a5568;white-space:pre-line;">${agentData.description}</p>
                </div>
                
                ${featuresHTML}
                ${stackHTML}
                
                <button onclick="closeAgentPopup('${projectName}')" style="margin-top:30px;width:100%;padding:14px 24px;background:linear-gradient(135deg,#2563eb 0%,#1e40af 100%);color:white;border:none;border-radius:8px;font-size:16px;cursor:pointer;font-weight:bold;transition:all 0.3s;" onmouseover="this.style.background='linear-gradient(135deg,#1d4ed8 0%,#1e3a8a 100%)" onmouseout="this.style.background='linear-gradient(135deg,#2563eb 0%,#1e40af 100%)">
                    ← Retour à la liste des projets
                </button>
            </div>
        </div>
    `;
}

// Fonction pour fermer le popup et revenir à la liste
function closeAgentPopup(projectName) {
    window.location.href = 'index.html';
}


// Variables globales
let filteredProjects = [...projects];
const searchInput = document.getElementById('searchInput');
const projectsContainer = document.getElementById('projectsContainer');
const projectCount = document.getElementById('projectCount');
let currentVisibilityFilter = 'all';


// Fonction pour afficher les projets
function renderProjects(projectsToRender) {
    projectsContainer.innerHTML = '';
    
    if (projectsToRender.length === 0) {
        projectsContainer.innerHTML = `
            <div class="no-results">
                <h3>Aucun projet trouvé 🤷</h3>
                <p>Essayez de modifier votre recherche pour afficher d'autres résultats.</p>
            </div>
        `;
        projectCount.textContent = '0';
        return;
    }
    
    projectsToRender.forEach(project => {
        const card = createProjectCard(project);
        projectsContainer.appendChild(card);
    });
    
    projectCount.textContent = projectsToRender.length;
}

// Fonction de recherche avec filtrage par visibilité
function filterProjects(searchTerm, visibilityFilter = 'all') {
    const lowerSearch = searchTerm.toLowerCase().trim();
    
    filteredProjects = projects.filter(project => {
        // Filtrage par visibilité
        if (visibilityFilter !== 'all' && project.visibility !== visibilityFilter) {
            return false;
        }
        
        // Si pas de recherche, retourner tous les projets qui passent le filtre de visibilité
        if (!lowerSearch) {
            return true;
        }
        
        // Filtrage par recherche
        return (
            project.name.toLowerCase().includes(lowerSearch) ||
            (project.description && project.description.toLowerCase().includes(lowerSearch)) ||
            (project.language && project.language.toLowerCase().includes(lowerSearch)) ||
            (project.has_agent_file && lowerSearch.includes('agent')) ||
            (project.visibility === 'private' && lowerSearch.includes('privé')) ||
            (project.visibility === 'public' && lowerSearch.includes('public'))
        );
    });
    
    renderProjects(filteredProjects);
}

// Event listener pour la recherche
searchInput.addEventListener('input', (e) => {
    filterProjects(e.target.value, currentVisibilityFilter);
});

// Event listener pour le filtre de visibilité
document.querySelectorAll('input[name="visibilityFilter"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        currentVisibilityFilter = e.target.value;
        // Re-filter with current search term
        const searchTerm = searchInput.value;
        filterProjects(searchTerm, currentVisibilityFilter);
    });
});

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    // Afficher tous les projets au chargement (grille classique)
    renderProjects(projects);
    
    // Générer la liste rapide des projets
    const projectsListContainer = document.getElementById('projectsListContainer');
    if (projectsListContainer) {
        projects.forEach(project => {
            const listItem = createProjectListItem(project);
            projectsListContainer.appendChild(listItem);
        });
    }
    
    // Mettre à jour le compteur initial
    projectCount.textContent = projects.length;
    
    console.log(`📊 ${projects.length} projets GitHub de dictino67 chargés`);
});

// Fin du script
console.log('✅ Script exécuté avec succès !');

