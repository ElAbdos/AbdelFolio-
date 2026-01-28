export interface ProjectSkillLink {
  categoryId: string;
}

export interface ProjectData {
  id: number;
  title: string;
  category: string;
  description: string;
  year: string;
  color: string;
  tags: string[];
  skills: ProjectSkillLink[];
  github: string;
  demo: string;
  image: string;
}

export const PROJECTS_DATA: ProjectData[] = [
  {
    id: 1,
    title: 'AbdelFolio',
    category: 'Développement Web',
    description: 'Portfolio étudiant en React regroupant mes projets personnels et académiques, ainsi que mes compétences.',
    year: '2026',
    color: '#8f7aff',
    tags: ['React', 'TypeScript', 'Vite', 'EmailJS'],
    skills: [
      { categoryId: 'realiser' },
      { categoryId: 'gerer' },
    ],
    github: 'https://github.com/ElAbdos/AbdelFolio',
    demo: 'https://demo.com',
    image: '/images/projects/abdelfolio.webp'
  },
  {
    id: 2,
    title: 'Spring-Blog',
    category: 'API & Backend',
    description: 'API Spring Boot pour la gestion d\'articles de blog (TP Spring IUT Informatique R5.A05).',
    year: '2025',
    color: '#16a34a',
    tags: ['Spring Boot', 'Java', 'API REST', 'CRUD'],
    skills: [
      { categoryId: 'realiser' },
      { categoryId: 'administrer' },
      { categoryId: 'gerer' },
    ],
    github: 'https://github.com/ElAbdos/spring-blog',
    demo: '#',
    image: '/images/projects/spring.png'
  },
  {
    id: 3,
    title: 'Tempest',
    category: 'Développement mobile',
    description: 'Application météo mobile (React Native/Expo) affichant les prévisions via API.',
    year: '2026',
    color: '#ffd166',
    tags: ['TypeScript', 'React Native', 'Expo', 'NativeWind', 'Tailwind CSS', 'REST API', 'Geolocation'],
    skills: [
      { categoryId: 'realiser' },
      { categoryId: 'optimiser' },
    ],
    github: 'https://github.com/ElAbdos/tempest',
    demo: '#',
    image: '/images/projects/tempest.png'
  },
  {
    id: 4,
    title: 'Echoo Messagerie',
    category: 'Développement Web',
    description: 'Application web de messagerie en temps réel en PHP et JavaScript — gestion des utilisateurs, conversations privées, liste d\'amis et échanges asynchrones via AJAX.',
    year: '2024-2025',
    color: '#0077ff',
    tags: ['PHP', 'JavaScript', 'MySQL', 'AJAX', 'Tailwind CSS'],
    skills: [
      { categoryId: 'realiser' },
      { categoryId: 'collaborer' },
      { categoryId: 'conduire' },
    ],
    github: 'https://github.com/ElAbdos/Echoo_Messagerie-2024--2025-',
    demo: '#',
    image: '/images/projects/Logo_Echoo.png'
  },
  {
    id: 5,
    title: 'SmartBites',
    category: 'Application mobile',
    description: 'Application mobile Flutter pour gérer listes de courses et recettes, avec planification de repas.',
    year: '2025-2026',
    color: '#ff9f1c',
    tags: ['Flutter', 'Dart', 'Supabase', 'Riverpod', 'shared_preferences', 'image_picker', 'intl'],
    skills: [
      { categoryId: 'realiser' },
      { categoryId: 'collaborer' },
      { categoryId: 'conduire' },
      { categoryId: 'optimiser' },
    ],
    github: 'https://github.com/fortwoone/SmartBites',
    demo: '#',
    image: '/images/projects/smartbites.png'
  },
  {
    id: 6,
    title: 'BlumBat — Gestion immobilière',
    category: 'Application de bureau (Java)',
    description: 'Application Java de gestion immobilière (biens, locataires, travaux, facturation) avec interface Swing et persistance MySQL.',
    year: '2024-2025',
    color: '#2E7D32',
    tags: ['Java', 'Swing', 'Maven', 'MySQL', 'JDBC', 'MVC', 'DAO', 'JUnit'],
    skills: [
      { categoryId: 'realiser' },
      { categoryId: 'collaborer' },
      { categoryId: 'conduire' },
      { categoryId: 'optimiser' },
    ],
    github: 'https://github.com/ElAbdos/BlumBat',
    demo: '#',
    image: '/images/projects/blumbat.png'
  },
  {
    id: 7,
    title: 'Système de recommandation collaborative (Python)',
    category: 'Script / Analyse de données (Python)',
    description: 'Prototype de recommandation collaborative (user/item) — similarités Cosinus/Pearson, prédictions par k‑NN, évaluation et visualisation (pandas, NumPy, matplotlib).',
    year: '2024-2025',
    color: '#1976D2',
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Filtrage collaboratif', 'Cosinus', 'Pearson', 'Évaluation'],
    skills: [
      { categoryId: 'realiser' },
      { categoryId: 'collaborer' },
      { categoryId: 'conduire' },
      { categoryId: 'optimiser' },
    ],
    github: 'https://github.com/ElAbdos/systeme-de-recommandation',
    demo: '#',
    image: '/images/projects/Python.svg.png'
  }
];

// Informations sur les catégories de compétences
export const CATEGORY_INFO: Record<string, { color: string; nameFR: string; nameEN: string }> = {
  realiser: { color: '#8f7aff', nameFR: 'Réaliser', nameEN: 'Develop' },
  optimiser: { color: '#ffd93d', nameFR: 'Optimiser', nameEN: 'Optimize' },
  administrer: { color: '#00d4ff', nameFR: 'Administrer', nameEN: 'Administer' },
  gerer: { color: '#ff6b6b', nameFR: 'Gérer', nameEN: 'Manage' },
  conduire: { color: '#a855f7', nameFR: 'Conduire', nameEN: 'Lead' },
  collaborer: { color: '#ec4899', nameFR: 'Collaborer', nameEN: 'Collaborate' },
};

// Fonction pour obtenir la couleur d'une catégorie
export const getCategoryColor = (categoryId: string): string => {
  return CATEGORY_INFO[categoryId]?.color || '#8f7aff';
};

// Fonction pour obtenir le nom d'une catégorie dans la langue souhaitée
export const getCategoryName = (categoryId: string, language: 'FR' | 'EN' = 'FR'): string => {
  const info = CATEGORY_INFO[categoryId];
  if (!info) return categoryId;
  return language === 'FR' ? info.nameFR : info.nameEN;
};
