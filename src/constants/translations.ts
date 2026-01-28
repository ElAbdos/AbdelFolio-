export const translations = {
    FR: {
        nav: {
            home: 'Accueil',
            skills: 'Compétences',
            projects: 'Projets',
            contact: 'Contact'
        },

        hero: {
            name_highlight: 'El Haroria',
            subtitle_prefix: 'Je suis',
            subtitle_highlight: 'Passionné d\'informatique',
            internship_badge: 'Recherche stage 12-16 semaines (Mars 2026)',
            typewriter_texts: [
                "Passionné d'informatique",
                "Développeur Full Stack",
                "Créatif & Rigoureux",
                "Autonome & Proactif"
            ],
            bio: 'Étudiant passionné d\'informatique, j\'ai pu acquérir une vision globale du domaine grâce à mon cursus diversifié. De l\'infrastructure aux bases de données, du développement à l\'intelligence artificielle, en passant par la sécurité informatique. Cette approche pluridisciplinaire me permet de créer des solutions numériques innovantes en combinant créativité, performance technique et professionnalisme.',
            cta_primary: 'Télécharger CV',
            cta_secondary: 'Voir mes projets',
            quote: '"L\'informatique n\'est pas qu\'une science, c\'est un art de résoudre des problèmes."',
            social: {
                connect: 'Me retrouver',
                available: 'Disponible pour opportunités'
            },
            stats: {
                years: "Années d'études",
                projects: "Projets réalisés",
                tech: "Technologies maitrisés",
                internship: "Semaines de stage"
            }
        },

        skills: {
            tag: 'Compétences',
            title: 'Compétences & Stack Technique',
            subtitle: 'Un ensemble de technologies et d’outils mis en pratique à travers des projets concrets et collaboratifs.',
            sectionLabels: {
                technologies: 'Technologies',
                frameworks: 'Méthodes & Frameworks',
                libraries: 'Bibliothèques IA',
                architectures: 'Architecture',
                tests: 'Tests',
                methods: 'Méthodes',
                tools: 'Outils'
            },
            categories: {
                realiser: {
                    title: 'Réaliser',
                    subtitle: 'Concevoir, coder, développer',
                    description: 'Développement d\'applications informatiques complexes (Web, Mobile, Bureau). Maîtrise des langages et frameworks.',
                    full_title: 'RÉALISER'
                },
                optimiser: {
                    title: 'Optimiser',
                    subtitle: 'Performance & Algorithmique',
                    description: 'Analyse des performances, optimisation du code, choix des structures de données et algorithmes avancés.',
                    full_title: 'OPTIMISER'
                },
                administrer: {
                    title: 'Administrer',
                    subtitle: 'Système, Réseaux & Sécurité',
                    description: 'Installation, configuration et sécurisation des systèmes d\'exploitation et réseaux (Linux, Windows, Cisco).',
                    full_title: 'ADMINISTRER'
                },
                gerer: {
                    title: 'Gérer',
                    subtitle: 'Données & Patrimoine Informatique',
                    description: 'Conception et exploitation des bases de données (SQL, NoSQL), RGPD, et gestion des actifs informatiques.',
                    full_title: 'GÉRER'
                },
                conduire: {
                    title: 'Conduire',
                    subtitle: 'Gestion de Projet',
                    description: 'Pilotage de projets, méthodes Agiles (Scrum), analyse des besoins et planification.',
                    full_title: 'CONDUIRE'
                },
                collaborer: {
                    title: 'Collaborer',
                    subtitle: 'Travail d\'équipe & Communication',
                    description: 'Communication professionnelle (Français/Anglais), travail collaboratif et management d\'équipe.',
                    full_title: 'COLLABORER'
                }
            }
        },

        timeline: {
            tag: 'Parcours',
            title: 'Ma Progression',
            subtitle: 'Mon itinéraire d\'acquisition de compétences depuis le BUT 1.',
            experiences_label: 'Expériences professionnelles',
            status_completed: 'Terminé',
            status_in_progress: 'En cours',
            status_searching: 'En recherche',
            steps: [
                {
                    year: '2023 - 2024',
                    title: 'BUT 1 : La Découverte',
                    description: 'Acquisition des fondamentaux du développement (Algo, C, HTML/CSS). Premiers pas en administration système (Linux) et bases de données.',
                    icon: 'Compass'
                },
                {
                    year: '2024 - 2025',
                    title: 'BUT 2 : L\'Approfondissement',
                    description: 'Développement d\'applications complexes, optimisation des structures de données et administration système avancée (Services réseaux, Virtualisation). Gestion de projets en méthode Agile.',
                    icon: 'Cpu',
                    experiences: [
                        {
                            company: 'Stage au sein de l\'entreprise LIDR Solutions',
                            position: 'Stagiaire - Développement IA',
                            duration: 'Avril - Juillet 2025',
                            description: 'Développement d’un agent intelligent et mise en place de workflows d’automatisation.\n' +
                                'Conception de solutions d’IA appliquées à des cas d’usage métiers, intégration d’API et orchestration de processus via N8N, en collaboration avec une équipe technique agile.',
                            status: 'completed'
                        }
                    ]
                },
                {
                    year: '2025 - 2026',
                    title: 'BUT 3 : La Professionnalisation',
                    description: 'Approfondissement des compétences en conception et développement d’applications, administration systèmes Linux, gestion de bases de données, virtualisation et méthodes de gestion de projet (Agile/Scrum), à travers des projets pratiques et collaboratifs',
                    icon: 'Rocket',
                    experiences: [
                        {
                            company: 'En recherche',
                            position: 'Stage de BUT 3',
                            duration: '2026',
                            description: 'À la recherche d\'une entreprise pour un stage de (12-16 semaines) dans le domaine de l\'informatique.',
                            status: 'searching'
                        }
                    ]
                }
            ]
        },

        projects: {
            tag: 'Portfolio',
            title: 'Réalisations & Preuves',
            subtitle: 'Projets démontrant l\'acquisition concrète des compétences.',
            view_skills: 'Voir les compétences liées',
            technicalStack: 'Stack technique',
            skillsUsed: 'Compétences utilisées',
            items: [
                {
                    id: 1,
                    title: 'AbdelFolio',
                    category: 'Développement Web',
                    description: 'Portfolio étudiant en React regroupant mes projets personnels et académiques, ainsique que mes compétences .',
                    year: '2026',
                    color: '#8f7aff',
                    tags: ['React', 'TypeScript', 'Vite', 'EmailJS'],
                    linkedSkills: ['realiser', 'gerer'],
                    github: 'https://github.com/ElAbdos/AbdelFolio',
                    demo: 'https://demo.com', //TODO : A faire une fois que je l'aurais mis sur vercel
                    image: '/images/projects/abdelfolio.webp'
                },
                {
                    id: 2,
                    title: 'Spring-Blog',
                    category: 'API & Backend',
                    description: 'API Spring Boot pour la gestion d’articles de blog (TP Spring IUT Informatique R5.A05).',
                    year: '2025',
                    color: '#16a34a',
                    tags: ['Spring Boot', 'Java', 'API REST', 'CRUD'],
                    linkedSkills: ['realiser', 'administrer', 'gerer'],
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
                    linkedSkills: ['realiser', 'optimiser'],
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
                    linkedSkills: ['realiser', 'collaborer', 'conduire'],
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
                    linkedSkills: ['realiser', 'collaborer', 'conduire' ,'optimiser'],
                    github: 'https://github.com/fortwoone/SmartBites',
                    demo: '#',
                    image: '/images/projects/smartbites.png'
                },
                {
                    "id": 6,
                    "title": "BlumBat — Gestion immobilière",
                    "category": "Application de bureau (Java)",
                    "description": "Application Java de gestion immobilière (biens, locataires, travaux, facturation) avec interface Swing et persistance MySQL.",
                    "year": "2024-2025",
                    "color": "#2E7D32",
                    "tags": ["Java", "Swing", "Maven", "MySQL", "JDBC", "MVC", "DAO", "JUnit"],
                    "linkedSkills": ["realiser", "collaborer", "conduire", "optimiser"],
                    "github": "https://github.com/ElAbdos/BlumBat",
                    "demo": "#",
                    "image": "/images/projects/blumbat.png"
                },
                {
                    "id": 7,
                    "title": "Système de recommandation collaborative (Python)",
                    "category": "Script / Analyse de données (Python)",
                    "description": "Prototype de recommandation collaborative (user/item) — similarités Cosinus/Pearson, prédictions par k‑NN, évaluation et visualisation (pandas, NumPy, matplotlib).",
                    "year": "2024-2025",
                    "color": "#1976D2",
                    "tags": [ "Python", "Pandas", "NumPy", "Matplotlib", "Filtrage collaboratif", "Cosinus", "Pearson", "Évaluation" ],
                    "linkedSkills": [ "realiser", "collaborer", "conduire", "optimiser" ],
                    "github": "https://github.com/ElAbdos/systeme-de-recommandation",
                    "demo": "#",
                    "image": "/images/projects/Python.svg.png"
                }
            ]
        },

        contact: {
            tag: 'Contact',
            title_start: 'Démarrons un',
            title_highlight: 'Projet Ensemble',
            subtitle: 'Une proposition ? Une question ? Ou juste pour dire bonjour. Je suis toujours à l\'écoute.',
            email_label: 'M\'écrire directement',
            nav: {
                home: 'Accueil',
                skills: 'Compétences',
                projects: 'Projets'
            },
            form: {
                name: 'Nom',
                name_ph: 'Exemple Exemple',
                email: 'Email',
                email_ph: 'exemple@example.com',
                subject: 'Objet',
                subject_ph: 'Proposition de stage / projet...',
                message: 'Votre message',
                message_ph: 'Bonjour, j\'aimerais discuter de...',
                send: 'Envoyer le message',
                sent: 'Message envoyé !',
                error: 'Erreur, réessayez.'
            }
        }
    },

    /* =========================================================================
       TRADUCTIONS ANGLAISES
       ========================================================================= */
    EN: {
        nav: {
            home: 'Home',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact'
        },

        hero: {
            name_highlight: 'El Haroria',
            subtitle_prefix: 'I am',
            subtitle_highlight: 'Passionate about IT',
            internship_badge: 'Seeking 12-16 week internship (March 2026)',
            typewriter_texts: [
                "Passionate about IT",
                "Full Stack Developer",
                "Creative & Rigorous",
                "Autonomous & Proactive"
            ],
            bio: 'Passionate computer science student, I have acquired a global vision of the field through my diversified curriculum. From infrastructure to databases, from development to artificial intelligence, including IT security. This multidisciplinary approach allows me to create innovative digital solutions by combining creativity, technical performance, and professionalism.',
            cta_primary: 'Download CV',
            cta_secondary: 'View my projects',
            quote: '"Computer science is not just a science, it is an art of solving problems."',
            social: {
                connect: 'Connect with me',
                available: 'Open for opportunities'
            },
            stats: {
                years: "Years of study",
                projects: "Projects completed",
                tech: "Technologies mastered",
                internship: "Weeks of internship"
            }
        },

        skills: {
            tag: 'Skills',
            title: 'Tech Stack & Skills',
            subtitle: 'A set of technologies and tools applied through hands-on and collaborative projects.',
            sectionLabels: {
                technologies: 'Technologies',
                frameworks: 'Methods & Frameworks',
                libraries: 'AI Libraries',
                architectures: 'Architecture',
                tests: 'Tests',
                methods: 'Methods',
                tools: 'Tools'
            },
            categories: {
                realiser: {
                    title: 'Develop',
                    subtitle: 'Design, code, build',
                    description: 'Development of complex IT applications (Web, Mobile, Desktop). Mastery of languages and frameworks.',
                    full_title: 'DEVELOP'
                },
                optimiser: {
                    title: 'Optimize',
                    subtitle: 'Performance & Algorithmic',
                    description: 'Performance analysis, code optimization, choice of data structures and advanced algorithms.',
                    full_title: 'OPTIMIZE'
                },
                administrer: {
                    title: 'Administer',
                    subtitle: 'System, Networks & Security',
                    description: 'Installation, configuration and security of operating systems and networks (Linux, Windows, Cisco).',
                    full_title: 'ADMINISTER'
                },
                gerer: {
                    title: 'Manage',
                    subtitle: 'Data & IT Assets',
                    description: 'Design and operation of databases (SQL, NoSQL), GDPR, and IT asset management.',
                    full_title: 'MANAGE'
                },
                conduire: {
                    title: 'Lead',
                    subtitle: 'Project Management',
                    description: 'Project steering, Agile methods (Scrum), requirements analysis and planning.',
                    full_title: 'LEAD'
                },
                collaborer: {
                    title: 'Collaborate',
                    subtitle: 'Teamwork & Communication',
                    description: 'Professional communication (French/English), collaborative work and team management.',
                    full_title: 'COLLABORATE'
                }
            }
        },

        timeline: {
            tag: 'Pathway',
            title: 'My Progression',
            subtitle: 'My journey of skill acquisition since Year 1.',
            experiences_label: 'Professional Experiences',
            status_completed: 'Completed',
            status_in_progress: 'In Progress',
            status_searching: 'Searching',
            steps: [
                {
                    year: '2023 - 2024',
                    title: 'Year 1: Discovery',
                    description: 'Acquiring development fundamentals (Algo, C, HTML/CSS). First steps in system administration (Linux) and databases.',
                    icon: 'BookOpen'
                },
                {
                    year: '2024 - 2025',
                    title: 'Year 2: Deepening',
                    description: 'Skill enhancement on modern frameworks (React, Symfony). Realizing complex projects in teams (Agile).',
                    icon: 'Code',
                    experiences: [
                        {
                            company: 'Internship at LIDR Solutions',
                            position: 'Intern - AI Development',
                            duration: 'April - July 2025',
                            description: 'Development of an intelligent agent and implementation of automation workflows. Design of AI solutions applied to business use cases, API integration and process orchestration via N8N, in collaboration with an agile technical team.',
                            status: 'completed'
                        }
                    ]
                },
                {
                    year: '2025 - 2026',
                    title: 'Towards Expertise',
                    description: 'Advanced training in application design and development, Linux system administration, database management, virtualization, and project management methodologies (Agile/Scrum), through hands-on and collaborative projects.',
                    icon: 'Briefcase',
                    experiences: [
                        {
                            company: 'Looking for',
                            position: 'End-of-studies Internship',
                            duration: '2026',
                            description: 'Looking for a company for my end-of-studies internship (12-16 weeks) in the IT field.',
                            status: 'searching'
                        }
                    ]
                }
            ]
        },

        projects: {
            tag: 'Portfolio',
            title: 'Achievements & Proofs',
            subtitle: 'Projects demonstrating concrete skill acquisition.',
            view_skills: 'View related skills',
            technicalStack: 'Tech Stack',
            skillsUsed: 'Skills Used',
            items: [
                {
                    id: 1,
                    title: 'AbdelFolio',
                    category: 'Web Development',
                    description: 'Student portfolio in React bringing together my personal and academic projects, as well as my skills.',
                    year: '2026',
                    color: '#8f7aff',
                    tags: ['React', 'TypeScript', 'Vite', 'EmailJS'],
                    linkedSkills: ['realiser', 'gerer'],
                    github: 'https://github.com/ElAbdos/AbdelFolio',
                    demo: 'https://demo.com',
                    image: '/images/projects/abdelfolio.webp'
                },
                {
                    id: 2,
                    title: 'Spring-Blog',
                    category: 'API & Backend',
                    description: 'Spring Boot API for blog articles management (Spring TP IUT Informatique R5.A05).',
                    year: '2025',
                    color: '#16a34a',
                    tags: ['Spring Boot', 'Java', 'API REST', 'CRUD'],
                    linkedSkills: ['realiser', 'administrer', 'gerer'],
                    github: 'https://github.com/ElAbdos/spring-blog',
                    demo: '#',
                    image: '/images/projects/spring.png'
                },
                {
                    id: 3,
                    title: 'Tempest',
                    category: 'Mobile Development',
                    description: 'Weather mobile app (React Native/Expo) displaying forecasts via API.',
                    year: '2026',
                    color: '#ffd166',
                    tags: ['TypeScript', 'React Native', 'Expo', 'NativeWind', 'Tailwind CSS', 'REST API', 'Geolocation'],
                    linkedSkills: ['realiser', 'optimiser'],
                    github: 'https://github.com/ElAbdos/tempest',
                    demo: '#',
                    image: '/images/projects/tempest.png'
                },
                {
                    id: 4,
                    title: 'Echoo Messaging',
                    category: 'Web Development',
                    description: 'Real-time messaging web application in PHP and JavaScript — user management, private conversations, friends list and asynchronous exchanges via AJAX.',
                    year: '2024-2025',
                    color: '#0077ff',
                    tags: ['PHP', 'JavaScript', 'MySQL', 'AJAX', 'Tailwind CSS'],
                    linkedSkills: ['realiser', 'collaborer', 'conduire'],
                    github: 'https://github.com/ElAbdos/Echoo_Messagerie-2024--2025-',
                    demo: '#',
                    image: '/images/projects/Logo_Echoo.png'
                },
                {
                    id: 5,
                    title: 'SmartBites',
                    category: 'Mobile Application',
                    description: 'Flutter mobile app for managing grocery lists and recipes, with meal planning.',
                    year: '2025-2026',
                    color: '#ff9f1c',
                    tags: ['Flutter', 'Dart', 'Supabase', 'Riverpod', 'shared_preferences', 'image_picker', 'intl'],
                    linkedSkills: ['realiser', 'collaborer', 'conduire', 'optimiser'],
                    github: 'https://github.com/fortwoone/SmartBites',
                    demo: '#',
                    image: '/images/projects/smartbites.png'
                },
                {
                    "id": 6,
                    "title": "BlumBat — Property Management",
                    "category": "Desktop Application (Java)",
                    "description": "Java application for property management (properties, tenants, maintenance, billing) with Swing interface and MySQL persistence.",
                    "year": "2024-2025",
                    "color": "#2E7D32",
                    "tags": ["Java", "Swing", "Maven", "MySQL", "JDBC", "MVC", "DAO", "JUnit"],
                    "linkedSkills": ["realiser", "collaborer", "conduire", "optimiser"],
                    "github": "https://github.com/ElAbdos/BlumBat",
                    "demo": "#",
                    "image": "/images/projects/blumbat.png"
                },
                {
                    "id": 7,
                    "title": "Collaborative Recommendation System (Python)",
                    "category": "Script / Data Analysis (Python)",
                    "description": "Collaborative recommendation prototype (user/item) — Cosine/Pearson similarities, k-NN predictions, evaluation and visualization (pandas, NumPy, matplotlib).",
                    "year": "2024-2025",
                    "color": "#1976D2",
                    "tags": ["Python", "Pandas", "NumPy", "Matplotlib", "Collaborative filtering", "Cosine", "Pearson", "Evaluation"],
                    "linkedSkills": ["realiser", "collaborer", "conduire", "optimiser"],
                    "github": "https://github.com/ElAbdos/systeme-de-recommandation",
                    "demo": "#",
                    "image": "/images/projects/Python.svg.png"
                }
            ]
        },

        contact: {
            tag: 'Contact',
            title_start: 'Let\'s start a',
            title_highlight: 'Project Together',
            subtitle: 'A proposal? A question? Or just to say hello. I am always listening.',
            email_label: 'Write me directly',
            nav: {
                home: 'Home',
                skills: 'Skills',
                projects: 'Projects'
            },
            form: {
                name: 'Name',
                name_ph: 'Exemple Example',
                email: 'Email',
                email_ph: 'Exemple@exemple.com',
                subject: 'Subject',
                subject_ph: 'Internship proposal / project...',
                message: 'Your message',
                message_ph: 'Hi, I would like to discuss...',
                send: 'Send Message',
                sent: 'Message sent!',
                error: 'Error, try again.'
            }
        }
    }
};
