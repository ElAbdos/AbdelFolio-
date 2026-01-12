export const translations = {
    FR: {
        nav: {
            home: 'Accueil',
            skills: 'Compétences',
            projects: 'Projets',
            contact: 'Contact'
        },

        hero: {
            subtitle_prefix: 'Je suis',
            subtitle_highlight: 'Passionné d\'informatique',
            bio: 'Étudiant passionné d\'informatique, j\'ai pu acquérir une vision globale du domaine grâce à mon cursus diversifié. De l\'infrastructure aux bases de données, du développement à l\'intelligence artificielle, en passant par la sécurité informatique. Cette approche pluridisciplinaire me permet de créer des solutions numériques innovantes en combinant créativité, performance technique et professionnalisme.',
            cta_primary: 'Télécharger CV',
            cta_secondary: 'Voir mes projets',
            quote: '"L\'informatique n\'est pas qu\'une science, c\'est un art de résoudre des problèmes."',
            social: {
                connect: 'Me retrouver',
                available: 'Disponible pour opportunités'
            }
        },

        skills: {
            tag: 'Compétences',
            title: 'Mon expertise',
            subtitle: 'Une approche pluridisciplinaire de l\'informatique.',
            tools: 'Outils maîtrisés',
            categories: {
                dev: {
                    title: 'Développement',
                    description: 'Conception et développement d\'applications web et mobiles robustes, évolutives et centrées sur l\'expérience utilisateur.'
                },
                network: {
                    title: 'Réseau & Infra',
                    description: 'Architecture réseau, administration système et virtualisation pour des infrastructures performantes.'
                },
                database: {
                    title: 'Données',
                    description: 'Modélisation, gestion et optimisation de bases de données pour garantir l\'intégrité et la rapidité d\'accès.'
                },
                security: {
                    title: 'Cybersécurité',
                    description: 'Analyse des vulnérabilités, tests d\'intrusion et mise en place de stratégies de défense.'
                },
                ai: {
                    title: 'I.A. & Data',
                    description: 'Exploration des données et développement de modèles d\'apprentissage automatique pour l\'aide à la décision.'
                }
            }
        },

        projects: {
            tag: 'Projets',
            title: 'Réalisations',
            subtitle: 'Une sélection de mes travaux académiques et personnels.',
            items: [
                {
                    id: 1,
                    title: 'E-Commerce Platform',
                    category: 'Développement Web',
                    description: 'Une plateforme de vente en ligne complète avec gestion de panier, paiement Stripe et tableau de bord administrateur.',
                    year: '2025',
                    color: '#8f7aff',
                    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
                    github: 'https://github.com',
                    demo: 'https://demo.com'
                },
                {
                    id: 2,
                    title: 'Secure Network Infra',
                    category: 'Réseau & Sécurité',
                    description: 'Architecture réseau d\'entreprise simulée avec VLANs, VPN site-à-site et firewall pfSense configuré.',
                    year: '2024',
                    color: '#00d4ff',
                    tags: ['Cisco', 'pfSense', 'VPN', 'VLAN'],
                    github: 'https://github.com',
                    demo: '#'
                },
                {
                    id: 3,
                    title: 'AI Image Classifier',
                    category: 'Intelligence Artificielle',
                    description: 'Modèle de Deep Learning capable de classifier des images médicales avec une précision de 95% utilisant CNN.',
                    year: '2024',
                    color: '#6bcb77',
                    tags: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
                    github: 'https://github.com',
                    demo: '#'
                },
                {
                    id: 4,
                    title: 'Task Manager App',
                    category: 'Développement Mobile',
                    description: 'Application mobile de productivité permettant la gestion de tâches collaboratives en temps réel.',
                    year: '2023',
                    color: '#ff6b6b',
                    tags: ['Flutter', 'Firebase', 'Dart'],
                    github: 'https://github.com',
                    demo: '#'
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
                name_ph: 'John Doe',
                email: 'Email',
                email_ph: 'john@example.com',
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
            subtitle_prefix: 'I am',
            subtitle_highlight: 'Passionate about IT',
            bio: 'Passionate computer science student, I have acquired a global vision of the field through my diversified curriculum. From infrastructure to databases, from development to artificial intelligence, including IT security. This multidisciplinary approach allows me to create innovative digital solutions by combining creativity, technical performance, and professionalism.',
            cta_primary: 'Download CV',
            cta_secondary: 'View my projects',
            quote: '"Computer science is not just a science, it is an art of solving problems."',
            social: {
                connect: 'Connect with me',
                available: 'Open for opportunities'
            }
        },

        skills: {
            tag: 'Skills',
            title: 'My expertise',
            subtitle: 'A multidisciplinary approach to IT.',
            tools: 'Mastered Tools',
            categories: {
                dev: {
                    title: 'Development',
                    description: 'Design and development of robust, scalable web and mobile applications focused on user experience.'
                },
                network: {
                    title: 'Network & Infra',
                    description: 'Network architecture, system administration and virtualization for high-performance infrastructures.'
                },
                database: {
                    title: 'Data',
                    description: 'Modeling, management and optimization of databases to ensure integrity and speed of access.'
                },
                security: {
                    title: 'Cybersecurity',
                    description: 'Vulnerability analysis, penetration testing and implementation of defense strategies.'
                },
                ai: {
                    title: 'A.I. & Data',
                    description: 'Data mining and development of machine learning models for decision support.'
                }
            }
        },

        projects: {
            tag: 'Projects',
            title: 'Portfolio',
            subtitle: 'A selection of my academic and personal works.',
            items: [
                {
                    id: 1,
                    title: 'E-Commerce Platform',
                    category: 'Web Development',
                    description: 'A complete online sales platform with cart management, Stripe payment and administrator dashboard.',
                    year: '2025',
                    color: '#8f7aff',
                    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
                    github: 'https://github.com',
                    demo: 'https://demo.com'
                },
                {
                    id: 2,
                    title: 'Secure Network Infra',
                    category: 'Network & Security',
                    description: 'Simulated enterprise network architecture with VLANs, site-to-site VPN and configured pfSense firewall.',
                    year: '2024',
                    color: '#00d4ff',
                    tags: ['Cisco', 'pfSense', 'VPN', 'VLAN'],
                    github: 'https://github.com',
                    demo: '#'
                },
                {
                    id: 3,
                    title: 'AI Image Classifier',
                    category: 'Artificial Intelligence',
                    description: 'Deep Learning model capable of classifying medical images with 95% accuracy using CNN.',
                    year: '2024',
                    color: '#6bcb77',
                    tags: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
                    github: 'https://github.com',
                    demo: '#'
                },
                {
                    id: 4,
                    title: 'Task Manager App',
                    category: 'Mobile Development',
                    description: 'Mobile productivity application allowing real-time collaborative task management.',
                    year: '2023',
                    color: '#ff6b6b',
                    tags: ['Flutter', 'Firebase', 'Dart'],
                    github: 'https://github.com',
                    demo: '#'
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
                name_ph: 'Abdel El Haroria',
                email: 'Email',
                email_ph: 'abdeloffipro@gmail.com',
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
