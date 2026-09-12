# 🤖 AGENT.md - Documentation de l'Agent AI

## Projet : Liste des Projets GitHub

### Description
Application web interactive qui liste et affiche tous les projets GitHub d'un utilisateur (dictino67), avec une fonctionnalité de recherche dynamique et l'affichage automatique du contenu des fichiers AGENT.md lorsqu'ils sont disponibles.

---

## 📋 Stack Technique

| Composant | Technologie | Usage |
|-----------|-------------|-------|
| **HTML** | HTML5 | Structure de la page, sémantique web |
| **CSS** | CSS3 + Grid/Flexbox | Design moderne, responsive design, animations |
| **JavaScript** | ES6+ | Logique de recherche dynamique, rendu des données |

---

## 🎮 Fonctionnalités Principales

### 1. Liste des Projets GitHub
- Affichage de tous les repositories publics de dictino67 (6 projets)
- Chaque projet est présenté dans une carte stylisée avec :
  - Nom du projet
  - Description
  - Langage de programmation
  - Date de dernière mise à jour
  - Lien vers le repository GitHub

### 2. Barre de Recherche Dynamique
- **Recherche en temps réel** sans rechargement de page
- Filtrage par :
  - Nom du projet
  - Description
  - Langage de programmation
  - Présence d'un fichier AGENT.md
  - Visibilité (public/privé)
- Indicateur du nombre de projets trouvés

### 3. Filtre de Visibilité 🔒
- **Filtrer par type de repository** : Tous, Publics ou Privés
- **Détection automatique** des repositories privés via la propriété `visibility`
- **Badge visuel** indiquant le statut de chaque projet (🔒 Privé / 🌐 Public)

### 4. Affichage de AGENT.md
- Détection automatique des fichiers AGENT.md dans chaque projet
- Rendu du contenu formaté :
  - Titre et description du projet
  - Liste des fonctionnalités principales
  - Format Markdown supporté (gras, listes, etc.)

### 5. Design Responsive
- **Desktop** : Grille de 3 colonnes adaptative
- **Mobile** : 1 colonne pour une expérience optimisée
- Effets hover sur les cartes avec élévation et ombre

---

## 📁 Structure du Projet

```
liste/
├── AGENT.md          # Ce fichier de documentation
├── index.html        # Page principale HTML
├── style.css         # Styles CSS (design & responsive)
└── script.js         # Logique JavaScript (données + recherche)
```

---

## 🔧 Architecture

### Classe Principale : Données des Projets (`projects`)

| Propriété | Type | Description |
|-----------|------|-------------|
| `name` | String | Nom du repository |
| `description` | String | Description du projet |
| `language` | String\|null | Langage de programmation |
| `updated_at` | String | Date de dernière mise à jour |
| `html_url` | String | URL GitHub du repository |
| `has_agent_file` | Boolean | Indique la présence d'AGENT.md |
| `agent_content` | Object\|null | Contenu structuré de AGENT.md |

### Fonctions Principales

| Fonction | Description |
|----------|-------------|
| `createProjectCard(project)` | Génère le HTML d'une carte de projet |
| `renderProjects(projectsToRender)` | Affiche la liste des projets dans le DOM |
| `filterProjects(searchTerm)` | Filtre les projets selon la recherche |
| `escapeHtml(text)` | Échappe les caractères HTML pour éviter l'injection |

---

## 🎯 Comment Utiliser l'Application

1. **Ouvrir l'application** : Charger [index.html](file:///Volumes/Mac%20Mini%202T/Documents%202T/PROJETS%20VISUAL%20STUDIO%20CODE/list%20gihub/liste/index.html) dans un navigateur
2. **Voir les projets** : Tous les 6 repositories de dictino67 s'affichent automatiquement
3. **Rechercher** :
   - Tapez dans la barre de recherche en haut
   - La liste se filtre instantanément
4. **Explorer AGENT.md** : Les projets avec un fichier AGENT.md affichent leur contenu directement dans la carte
5. **Accéder à GitHub** : Cliquez sur "Voir sur GitHub →" pour ouvrir le repository

---

## 🎨 Design Guidelines

### Couleurs Principales
- **Fond principal** : `#ffffff` (blanc)
- **Fond secondaire** : `#f6f8fa` (gris très clair)
- **Texte primaire** : `#24292e` (noir)
- **Texte secondaire** : `#586069` (gris foncé)
- **Couleur d'accent** : `#58a6ff` (bleu GitHub)

### Couleurs de Header des Cartes
- **Dégradé** : `#24292e` → `#6e5494` (noir vers violet)
- **Texte** : Blanc avec opacité ajustée

### Badges de Langage
- **JavaScript** : Jaune (`#f1e05a`)
- **HTML** : Rouge/Orange (`#e34c26`)
- **Config** : Bleu (`#007ec6`)

---

## 📊 Métriques Techniques

| Fichier | Taille | Lignes | Rôle |
|---------|--------|--------|------|
| index.html | ~1.6 KB | ~55 | Structure HTML |
| style.css | ~7.1 KB | ~360 | Styles et responsive |
| script.js | ~7.4 KB | ~225 | Logique et données |

---

## 📈 Données des Projets Répertoriés

| Projet | Langage | AGENT.md | Visibilité | Date Mise à Jour |
|--------|---------|----------|------------|------------------|
| **liste** 🔒 | - | ✅ Oui (ce fichier) | Privé | Sep 12, 2026 |
| **projet** 🔒 | JavaScript | ✅ Oui | Privé | Sep 10, 2026 |
| terrain | HTML | ❌ Non | Public | Sep 10, 2026 |
| Mycompta | - | ❌ Non | Public | Sep 5, 2026 |
| web | JavaScript | ❌ Non | Public | Aug 28, 2026 |
| dictino67 | JavaScript | ❌ Non | Public | Aug 25, 2026 |

**Total** : 6 projets (2 privés 🔒 + 4 publics 🌐), dont 2 avec AGENT.md documentés

**Clé SSH utilisée** : `MxRyldAKhqW4d7rsJGUU8KueqdTMd/AMoMIXx1vLg2s`

---

## 🚀 Améliorations Futures Possibles

- [ ] Connexion directe à l'API GitHub en temps réel avec authentification SSH
- [ ] Chargement dynamique des fichiers AGENT.md depuis GitHub
- [ ] Affichage complet de AGENT.md dans une modale au clic
- [ ] Filtres supplémentaires (par langage, par date)
- [ ] Mode sombre/clair basculable
- [ ] Pagination si nombre de projets > 10
- [ ] Export des données en JSON
- [ ] Intégration d'animations plus poussées
- [ ] **Utilisation de la clé SSH pour authentifier l'accès aux repositories privés**

---

## 📝 Notes de Développement

- **Framework CSS** : Grid Layout pour la grille responsive + Flexbox pour l'alignement
- **Algorithme de recherche** : Filtrage côté client avec `Array.filter()` et `String.includes()`
- **Performance** : Chargement instantané (tout dans un seul fichier HTML)
- **Compatibilité** : Moderne (ES6+, CSS Grid, variables CSS)
- **UX** : Recherche en temps réel pour une interaction fluide

---

*Document généré le 12/09/2026 par l'Agent AI du projet Liste GitHub* 📁
