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
}

export const PROJECTS_DATA: ProjectData[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Développement Web',
    description: 'Plateforme complète prouvant la capacité à "Réaliser" et "Gérer" des données transactionnelles.',
    year: '2025',
    color: '#8f7aff',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    skills: [
      { categoryId: 'realiser' },
      { categoryId: 'gerer' },
      { categoryId: 'collaborer' },
    ],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    id: 2,
    title: 'Secure Network Infra',
    category: 'Réseau & Sécurité',
    description: 'Architecture réseau validant la compétence "Administrer" et la sécurisation des échanges.',
    year: '2024',
    color: '#00d4ff',
    tags: ['Cisco', 'pfSense', 'VPN', 'VLAN'],
    skills: [
      { categoryId: 'administrer' },
      { categoryId: 'conduire' },
    ],
    github: 'https://github.com',
    demo: '#'
  },
  {
    id: 3,
    title: 'AI Image Classifier',
    category: 'Intelligence Artificielle',
    description: 'Projet d\'IA illustrant la capacité à "Optimiser" des algorithmes complexes.',
    year: '2024',
    color: '#6bcb77',
    tags: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
    skills: [
      { categoryId: 'realiser' },
      { categoryId: 'optimiser' },
      { categoryId: 'gerer' },
    ],
    github: 'https://github.com',
    demo: '#'
  },
  {
    id: 4,
    title: 'Task Manager App',
    category: 'Mobile Development',
    description: 'App mobile collaborative, preuve de "Collaborer" et "Conduire" un projet agile.',
    year: '2023',
    color: '#ff6b6b',
    tags: ['Flutter', 'Firebase', 'Dart'],
    skills: [
      { categoryId: 'realiser' },
      { categoryId: 'collaborer' },
      { categoryId: 'conduire' },
    ],
    github: 'https://github.com',
    demo: '#'
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
