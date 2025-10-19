/* ================ Pré-remplissage du formulaire de contact selon l'offre (FR & EN) ================ */

document.addEventListener("DOMContentLoaded", function () {
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    // Messages personnalisés pour chaque offre (FR & EN)
    const messages = {
        fr: {
            vitrine: {
                subject: "Projet Site Vitrine",
                message: `Bonjour MonKode,

Je souhaite créer un site vitrine pour présenter mon activité.  

Voici mes besoins :
    - Page d'accueil attrayante
    - Présentation de mes services
    - Formulaire de contact
    - Design responsive

Merci de me recontacter pour en discuter !

Cordialement,
`
            },
            ia: {
                subject: "Projet IA Boost",
                message: `Bonjour MonKode,

Je suis intéressé(e) par l'offre IA Boost.  

Je souhaiterais :
    - Automatiser certaines tâches répétitives
    - Intégrer un chatbot IA
    - Bénéficier d'analyses comportementales

Merci de me guider sur la meilleure solution !

Bien à vous,
`
            },
            surmesure: {
                subject: "Projet Sur-Mesure",
                message: `Bonjour MonKode,

Je cherche à développer un site web ou une application sur mesure.  

Mon projet nécessite :
    - Plusieurs pages personnalisées
    - Fonctions spécifiques (membre, paiement, etc.)
    - SEO avancé
    - Accompagnement complet

Merci pour votre expertise !

Au plaisir d'échanger,
`
            },
            evolutif: {
                subject: "Projet Évolutif & IA Avancée",
                message: `Bonjour MonKode,

Je souhaite construire une application évolutive avec des fonctionnalités avancées. 

Objectifs :
    - Application web ou mobile
    - Connexion API / IA / back-office
    - Développement d'outils IA sur mesure
    - Stratégie digitale basée sur l'IA

Je suis disponible pour en discuter plus en détail.

Merci d'avance,
`
            }
        },
        en: {
            vitrine: {
                subject: "Portfolio Website Project",
                message: `Hello MonKode,

I would like to create a portfolio website to showcase my business.

Here are my needs:
    - Attractive homepage
    - Services presentation
    - Contact form
    - Responsive design

Please contact me to discuss further!

Best regards,
`
            },
            ia: {
                subject: "AI Boost Project",
                message: `Hello MonKode,

I'm interested in the AI Boost offer.

I would like to:
    - Automate repetitive tasks
    - Integrate an AI chatbot
    - Benefit from behavioral analytics

Please guide me to the best solution!

Kind regards,
`
            },
            surmesure: {
                subject: "Custom Project",
                message: `Hello MonKode,

I'm looking to develop a custom website or application.

My project requires:
    - Several custom pages
    - Specific features (member area, payment, etc.)
    - Advanced SEO
    - Full support

Thank you for your expertise!

Looking forward to talking,
`
            },
            evolutif: {
                subject: "Evolutive & Advanced AI Project",
                message: `Hello MonKode,

I want to build an evolutive application with advanced features.

Objectives:
    - Web or mobile application
    - API / AI / back-office integration
    - Custom AI tools development
    - AI-based digital strategy

I'm available to discuss in more detail.

Thank you in advance,
`
            }
        }
    };

    /* ================ Fonction pour pré-remplir le formulaire selon l'offre et la langue ================ */
    function prefillForm(option) {
        const lang = localStorage.getItem('lang') || 'fr';
        if (messages[lang] && messages[lang][option]) {
            subjectInput.value = messages[lang][option].subject;
            messageInput.value = messages[lang][option].message;
        }
    }

    // Associer chaque bouton de carte tarifaire à son message
    document.querySelectorAll('.pricing-card a').forEach(button => {
        button.addEventListener('click', function () {
            const card = this.closest('.pricing-card');
            if (card.classList.contains('basic')) {
                prefillForm('vitrine');
            } else if (card.classList.contains('ia')) {
                prefillForm('ia');
            } else if (card.classList.contains('pro')) {
                prefillForm('surmesure');
            } else if (card.classList.contains('custom')) {
                prefillForm('evolutif');
            }
        });
    });

    // Met à jour le formulaire si la langue change
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // Si le formulaire est pré-rempli, le re-remplir dans la nouvelle langue
            const currentSubject = subjectInput.value;
            const currentMessage = messageInput.value;
            // On vérifie si le sujet/message correspond à un des modèles FR/EN
            for (const key of ['vitrine', 'ia', 'surmesure', 'evolutif']) {
                if (
                    currentSubject === messages.fr[key].subject ||
                    currentSubject === messages.en[key].subject
                ) {
                    prefillForm(key);
                    break;
                }
            }
        });
    });

});

/* ================ Fonction d'affichage d'une alerte personnalisée ================ */
function showCustomAlert(message, type = 'success') {
    const alertBox = document.getElementById('custom-alert');
    const alertIcon = document.getElementById('custom-alert-icon');
    const alertText = document.getElementById('custom-alert-text');

    alertText.textContent = message;

    if (type === 'success') {
        alertBox.className = 'custom-alert';
        alertIcon.innerHTML = '✅';
    } else if (type === 'error') {
        alertBox.className = 'custom-alert error';
        alertIcon.innerHTML = '❌';
    }

    alertBox.style.display = 'flex';

    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 4000); // Disparaît après 4 secondes
}

/* ================ Envoi du formulaire de contact avec EmailJS ================ */
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('.contact-form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Empêche l'envoi classique du formulaire

        const templateParams = {
            name: document.getElementById("name").value.trim(),
            email: document.getElementById("email").value.trim(),
            subject: document.getElementById("subject").value.trim(),
            message: document.getElementById("message").value.trim(),
            time: new Date().toLocaleString() // Ajout de la date et heure
        };

        const serviceID = "service_wa704uc";
        const templateID = "template_uozurro";

        // Envoi du message via EmailJS
        emailjs.send(serviceID, templateID, templateParams)
            .then(() => {
                showCustomAlert("Votre message a été envoyé avec succès !");
                contactForm.reset(); // Vide le formulaire
            })
            .catch((error) => {
                console.error('Erreur lors de l\'envoi du message:', error);
                showCustomAlert("Une erreur s'est produite. Veuillez réessayer plus tard.", "error");
            });
    });

});

