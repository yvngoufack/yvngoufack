// Language configuration and translations
const translations = {
    it: {
        // Navigation
        nav: {
            home: "Home",
            portfolio: "Portfolio",
            experience: "Esperienze",
            contact: "Contatti",
            services: "Servizi",
            skills: "Competenze",
            projects: "Progetti"
        },
        
        // Intro page
        intro: {
            tag: "// CYBERSECURITY ARCHITECT",
            title: "Architetto di",
            titleGradient: "Sicurezza Digitale",
            subtitle: "Zero Trust · Cloud Security · Enterprise Architecture",
            cta: "Esplora il Portfolio →",
            skills: ["SABSA", "Zero Trust", "AWS/Azure/GCP", "Kubernetes", "NIST CSF"]
        },
        
        // Portfolio page
        portfolio: {
            heroTag: "// Cybersecurity Architect",
            heroTitle: "Progetto",
            heroTitleGradient: "Architetture",
            heroTitleEnd: "Sicure per Infrastrutture Critiche",
            heroDescription: "Security Architect specializzato in Zero Trust, cloud security e architetture enterprise. Trasformo i requisiti di sicurezza in soluzioni scalabili che proteggono i tuoi asset più critici.",
            ctaPrimary: "Consulenza Architettuale",
            ctaSecondary: "Architetture Realizzate",
            
            servicesTag: "// Cosa faccio",
            servicesTitle: "Servizi",
            servicesDescription: "Soluzioni complete di cybersecurity per proteggere la tua azienda dalle minacce moderne",
            
            services: [
                {
                    icon: "🏛️",
                    title: "Security Architecture Design",
                    description: "Progettazione di architetture di sicurezza enterprise-grade. Zero Trust frameworks, segmentazione di rete, defense in depth, e security by design per applicazioni cloud-native."
                },
                {
                    icon: "☁️",
                    title: "Cloud Security Architecture",
                    description: "Architetture multi-cloud e hybrid-cloud sicure. Landing zones AWS/Azure/GCP, workload isolation, identity federation, secrets management, e compliance automation."
                },
                {
                    icon: "🔐",
                    title: "Identity & Access Management",
                    description: "Progettazione di sistemi IAM enterprise: SSO, MFA, privileged access management (PAM), identity governance, e implementazione di least privilege at scale."
                },
                {
                    icon: "🛡️",
                    title: "Threat Modeling & Risk Assessment",
                    description: "Analisi sistematica delle minacce con STRIDE, PASTA, e MITRE ATT&CK. Quantificazione del rischio con metodologie FAIR e prioritizzazione degli investimenti in sicurezza."
                },
                {
                    icon: "📊",
                    title: "Security Operations Architecture",
                    description: "Design di SOC moderni: SIEM/SOAR, threat intelligence platforms, detection engineering, automated response, e integration con security orchestration."
                },
                {
                    icon: "📋",
                    title: "Security Governance & Compliance",
                    description: "Framework di governance: policy architecture, security controls mapping (NIST CSF, ISO 27001), compliance as code, e integration con DevSecOps pipelines."
                }
            ],
            
            skillsTag: "// Stack tecnico",
            skillsTitle: "Competenze",
            
            projectsTag: "// Case studies",
            projectsTitle: "Progetti Recenti",
            projectsDescription: "Alcuni esempi di come ho aiutato le aziende a migliorare la loro sicurezza informatica",
            
            contactTitle: "Progettiamo Insieme la Tua Security Architecture",
            contactDescription: "Consulenza architettuale per infrastrutture critiche, cloud security, Zero Trust, e security transformation. Discutiamo le tue sfide architetturali.",
            
            footer: "Tutti i diritti riservati.",
            footerTagline: "Security by design, architected for resilience"
        },
        
        // Experience page
        experience: {
            pageTag: "// Il mio percorso",
            pageTitle: "Esperienze",
            pageTitleGradient: "Professionali",
            pageDescription: "Oltre [X] anni di esperienza nella progettazione e implementazione di architetture di sicurezza enterprise",
            
            responsibilities: "Responsabilità principali:",
            achievements: "Risultati chiave:",
            downloadCV: "Scarica il mio CV completo"
        },
        
        // Common
        common: {
            readMore: "Leggi di più",
            learnMore: "Scopri di più",
            getInTouch: "Contattami",
            scroll: "SCROLL"
        }
    },
    
    en: {
        // Navigation
        nav: {
            home: "Home",
            portfolio: "Portfolio",
            experience: "Experience",
            contact: "Contact",
            services: "Services",
            skills: "Skills",
            projects: "Projects"
        },
        
        // Intro page
        intro: {
            tag: "// CYBERSECURITY ARCHITECT",
            title: "Digital Security",
            titleGradient: "Architect",
            subtitle: "Zero Trust · Cloud Security · Enterprise Architecture",
            cta: "Explore Portfolio →",
            skills: ["SABSA", "Zero Trust", "AWS/Azure/GCP", "Kubernetes", "NIST CSF"]
        },
        
        // Portfolio page
        portfolio: {
            heroTag: "// Cybersecurity Architect",
            heroTitle: "Designing",
            heroTitleGradient: "Secure Architectures",
            heroTitleEnd: "for Critical Infrastructure",
            heroDescription: "Security Architect specialized in Zero Trust, cloud security, and enterprise architectures. I transform security requirements into scalable solutions that protect your most critical assets.",
            ctaPrimary: "Architectural Consulting",
            ctaSecondary: "View Architectures",
            
            servicesTag: "// What I do",
            servicesTitle: "Services",
            servicesDescription: "Complete cybersecurity solutions to protect your business from modern threats",
            
            services: [
                {
                    icon: "🏛️",
                    title: "Security Architecture Design",
                    description: "Design of enterprise-grade security architectures. Zero Trust frameworks, network segmentation, defense in depth, and security by design for cloud-native applications."
                },
                {
                    icon: "☁️",
                    title: "Cloud Security Architecture",
                    description: "Secure multi-cloud and hybrid-cloud architectures. AWS/Azure/GCP landing zones, workload isolation, identity federation, secrets management, and compliance automation."
                },
                {
                    icon: "🔐",
                    title: "Identity & Access Management",
                    description: "Design of enterprise IAM systems: SSO, MFA, privileged access management (PAM), identity governance, and implementation of least privilege at scale."
                },
                {
                    icon: "🛡️",
                    title: "Threat Modeling & Risk Assessment",
                    description: "Systematic threat analysis with STRIDE, PASTA, and MITRE ATT&CK. Risk quantification with FAIR methodologies and prioritization of security investments."
                },
                {
                    icon: "📊",
                    title: "Security Operations Architecture",
                    description: "Modern SOC design: SIEM/SOAR, threat intelligence platforms, detection engineering, automated response, and integration with security orchestration."
                },
                {
                    icon: "📋",
                    title: "Security Governance & Compliance",
                    description: "Governance frameworks: policy architecture, security controls mapping (NIST CSF, ISO 27001), compliance as code, and DevSecOps pipeline integration."
                }
            ],
            
            skillsTag: "// Tech stack",
            skillsTitle: "Skills",
            
            projectsTag: "// Case studies",
            projectsTitle: "Recent Projects",
            projectsDescription: "Examples of how I've helped companies improve their cybersecurity posture",
            
            contactTitle: "Let's Design Your Security Architecture Together",
            contactDescription: "Architectural consulting for critical infrastructure, cloud security, Zero Trust, and security transformation. Let's discuss your architectural challenges.",
            
            footer: "All rights reserved.",
            footerTagline: "Security by design, architected for resilience"
        },
        
        // Experience page
        experience: {
            pageTag: "// My journey",
            pageTitle: "Professional",
            pageTitleGradient: "Experience",
            pageDescription: "Over [X] years of experience designing and implementing enterprise security architectures",
            
            responsibilities: "Key responsibilities:",
            achievements: "Key achievements:",
            downloadCV: "Download my complete CV"
        },
        
        // Common
        common: {
            readMore: "Read more",
            learnMore: "Learn more",
            getInTouch: "Get in touch",
            scroll: "SCROLL"
        }
    },
    
    fr: {
        // Navigation
        nav: {
            home: "Accueil",
            portfolio: "Portfolio",
            experience: "Expériences",
            contact: "Contact",
            services: "Services",
            skills: "Compétences",
            projects: "Projets"
        },
        
        // Intro page
        intro: {
            tag: "// ARCHITECTE CYBERSÉCURITÉ",
            title: "Architecte de",
            titleGradient: "Sécurité Numérique",
            subtitle: "Zero Trust · Cloud Security · Architecture Enterprise",
            cta: "Explorer le Portfolio →",
            skills: ["SABSA", "Zero Trust", "AWS/Azure/GCP", "Kubernetes", "NIST CSF"]
        },
        
        // Portfolio page
        portfolio: {
            heroTag: "// Architecte Cybersécurité",
            heroTitle: "Conception d'",
            heroTitleGradient: "Architectures",
            heroTitleEnd: "Sécurisées pour Infrastructures Critiques",
            heroDescription: "Architecte sécurité spécialisé en Zero Trust, cloud security et architectures enterprise. Je transforme les exigences de sécurité en solutions évolutives qui protègent vos actifs critiques.",
            ctaPrimary: "Conseil Architectural",
            ctaSecondary: "Voir les Architectures",
            
            servicesTag: "// Ce que je fais",
            servicesTitle: "Services",
            servicesDescription: "Solutions complètes de cybersécurité pour protéger votre entreprise contre les menaces modernes",
            
            services: [
                {
                    icon: "🏛️",
                    title: "Conception d'Architecture Sécurité",
                    description: "Conception d'architectures de sécurité enterprise. Frameworks Zero Trust, segmentation réseau, défense en profondeur, et security by design pour applications cloud-native."
                },
                {
                    icon: "☁️",
                    title: "Architecture Cloud Sécurisée",
                    description: "Architectures multi-cloud et hybrid-cloud sécurisées. Landing zones AWS/Azure/GCP, isolation des workloads, fédération d'identité, gestion des secrets, et automatisation de la conformité."
                },
                {
                    icon: "🔐",
                    title: "Identity & Access Management",
                    description: "Conception de systèmes IAM enterprise: SSO, MFA, gestion des accès privilégiés (PAM), gouvernance des identités, et implémentation du moindre privilège à l'échelle."
                },
                {
                    icon: "🛡️",
                    title: "Threat Modeling & Évaluation des Risques",
                    description: "Analyse systématique des menaces avec STRIDE, PASTA, et MITRE ATT&CK. Quantification du risque avec méthodologies FAIR et priorisation des investissements sécurité."
                },
                {
                    icon: "📊",
                    title: "Architecture des Opérations Sécurité",
                    description: "Conception de SOC modernes: SIEM/SOAR, plateformes de threat intelligence, detection engineering, réponse automatisée, et orchestration sécurité."
                },
                {
                    icon: "📋",
                    title: "Gouvernance & Conformité Sécurité",
                    description: "Frameworks de gouvernance: architecture de politiques, mapping des contrôles (NIST CSF, ISO 27001), compliance as code, et intégration DevSecOps."
                }
            ],
            
            skillsTag: "// Stack technique",
            skillsTitle: "Compétences",
            
            projectsTag: "// Études de cas",
            projectsTitle: "Projets Récents",
            projectsDescription: "Exemples de comment j'ai aidé les entreprises à améliorer leur posture de cybersécurité",
            
            contactTitle: "Concevons Ensemble Votre Architecture Sécurité",
            contactDescription: "Conseil architectural pour infrastructures critiques, cloud security, Zero Trust, et transformation sécurité. Discutons de vos défis architecturaux.",
            
            footer: "Tous droits réservés.",
            footerTagline: "Security by design, architected for resilience"
        },
        
        // Experience page
        experience: {
            pageTag: "// Mon parcours",
            pageTitle: "Expériences",
            pageTitleGradient: "Professionnelles",
            pageDescription: "Plus de [X] années d'expérience dans la conception et l'implémentation d'architectures de sécurité enterprise",
            
            responsibilities: "Responsabilités principales:",
            achievements: "Réalisations clés:",
            downloadCV: "Télécharger mon CV complet"
        },
        
        // Common
        common: {
            readMore: "Lire plus",
            learnMore: "En savoir plus",
            getInTouch: "Me contacter",
            scroll: "DÉFILER"
        }
    }
};

// Language switcher utility
class LanguageSwitcher {
    constructor() {
        this.currentLang = this.getInitialLanguage();
        this.init();
    }
    
    getInitialLanguage() {
        // Check URL parameter
        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get('lang');
        if (langParam && translations[langParam]) {
            return langParam;
        }
        
        // Check localStorage
        const savedLang = localStorage.getItem('preferredLanguage');
        if (savedLang && translations[savedLang]) {
            return savedLang;
        }
        
        // Default to Italian
        return 'it';
    }
    
    init() {
        this.createLanguageSwitcher();
        this.updateContent();
    }
    
    createLanguageSwitcher() {
        const nav = document.querySelector('nav .nav-links');
        if (!nav) return;
        
        const langSwitcher = document.createElement('li');
        langSwitcher.className = 'lang-switcher';
        langSwitcher.innerHTML = `
            <select id="languageSelect" class="language-select">
                <option value="it" ${this.currentLang === 'it' ? 'selected' : ''}>🇮🇹 IT</option>
                <option value="en" ${this.currentLang === 'en' ? 'selected' : ''}>🇬🇧 EN</option>
                <option value="fr" ${this.currentLang === 'fr' ? 'selected' : ''}>🇫🇷 FR</option>
            </select>
        `;
        
        nav.appendChild(langSwitcher);
        
        document.getElementById('languageSelect').addEventListener('change', (e) => {
            this.switchLanguage(e.target.value);
        });
    }
    
    switchLanguage(lang) {
        if (!translations[lang]) return;
        
        this.currentLang = lang;
        localStorage.setItem('preferredLanguage', lang);
        
        // Update URL parameter
        const url = new URL(window.location);
        url.searchParams.set('lang', lang);
        window.history.pushState({}, '', url);
        
        this.updateContent();
    }
    
    updateContent() {
        const t = translations[this.currentLang];
        const page = this.detectPage();
        
        // Update navigation
        this.updateNavigation(t);
        
        // Update page-specific content
        if (page === 'intro') {
            this.updateIntroPage(t);
        } else if (page === 'portfolio') {
            this.updatePortfolioPage(t);
        } else if (page === 'experience') {
            this.updateExperiencePage(t);
        }
    }
    
    detectPage() {
        const path = window.location.pathname;
        if (path.includes('portfolio')) return 'portfolio';
        if (path.includes('esperienze') || path.includes('experience')) return 'experience';
        return 'intro';
    }
    
    updateNavigation(t) {
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href.includes('#servizi') || href.includes('#services')) {
                link.textContent = t.nav.services;
            } else if (href.includes('#competenze') || href.includes('#skills')) {
                link.textContent = t.nav.skills;
            } else if (href.includes('#progetti') || href.includes('#projects')) {
                link.textContent = t.nav.projects;
            } else if (href.includes('#contatti') || href.includes('#contact')) {
                link.textContent = t.nav.contact;
            } else if (href.includes('esperienze') || href.includes('experience')) {
                link.textContent = t.nav.experience;
            } else if (href.includes('portfolio')) {
                link.textContent = t.nav.portfolio;
            } else if (href.includes('index')) {
                link.textContent = t.nav.home;
            }
        });
    }
    
    updateIntroPage(t) {
        const elements = {
            '.glitch.typing-text': t.intro.tag,
            '.main-title': `${t.intro.title} <br><span class="gradient-text">${t.intro.titleGradient}</span>`,
            '.subtitle': t.intro.subtitle,
            '.enter-btn': t.intro.cta,
            '.scroll-text': t.common.scroll
        };
        
        this.updateElements(elements);
        
        // Update skill badges
        const skillBadges = document.querySelectorAll('.skill-badge');
        skillBadges.forEach((badge, index) => {
            if (t.intro.skills[index]) {
                badge.textContent = t.intro.skills[index];
            }
        });
    }
    
    updatePortfolioPage(t) {
        const elements = {
            '.hero-tag': t.portfolio.heroTag,
            '.hero h1': `${t.portfolio.heroTitle} <span class="gradient-text">${t.portfolio.heroTitleGradient}</span> ${t.portfolio.heroTitleEnd}`,
            '.hero-description': t.portfolio.heroDescription,
            '.btn-primary': t.portfolio.ctaPrimary,
            '.btn-secondary': t.portfolio.ctaSecondary,
            '#servizi .section-tag, #services .section-tag': t.portfolio.servicesTag,
            '#servizi .section-title, #services .section-title': t.portfolio.servicesTitle,
            '#servizi .section-description, #services .section-description': t.portfolio.servicesDescription,
            '#competenze .section-tag, #skills .section-tag': t.portfolio.skillsTag,
            '#competenze .section-title, #skills .section-title': t.portfolio.skillsTitle,
            '#progetti .section-tag, #projects .section-tag': t.portfolio.projectsTag,
            '#progetti .section-title, #projects .section-title': t.portfolio.projectsTitle,
            '#progetti .section-description, #projects .section-description': t.portfolio.projectsDescription,
            '#contatti h2, #contact h2': t.portfolio.contactTitle,
            '#contatti p, #contact p': t.portfolio.contactDescription
        };
        
        this.updateElements(elements);
        
        // Update service cards
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach((card, index) => {
            if (t.portfolio.services[index]) {
                const h3 = card.querySelector('h3');
                const p = card.querySelector('p');
                if (h3) h3.textContent = t.portfolio.services[index].title;
                if (p) p.textContent = t.portfolio.services[index].description;
            }
        });
    }
    
    updateExperiencePage(t) {
        const elements = {
            '.page-tag': t.experience.pageTag,
            '.page-title': `${t.experience.pageTitle} <span class="gradient-text">${t.experience.pageTitleGradient}</span>`,
            '.page-description': t.experience.pageDescription,
            '.download-btn': t.experience.downloadCV
        };
        
        this.updateElements(elements);
        
        // Update responsibilities and achievements headers
        document.querySelectorAll('.responsibilities h4').forEach(el => {
            el.textContent = t.experience.responsibilities;
        });
        
        document.querySelectorAll('.achievements h4').forEach(el => {
            const icon = el.querySelector('::before') ? '🏆 ' : '';
            el.innerHTML = `${icon}${t.experience.achievements}`;
        });
    }
    
    updateElements(elements) {
        Object.entries(elements).forEach(([selector, content]) => {
            const element = document.querySelector(selector);
            if (element) {
                element.innerHTML = content;
            }
        });
    }
}

// Initialize language switcher when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new LanguageSwitcher();
    });
} else {
    new LanguageSwitcher();
}
