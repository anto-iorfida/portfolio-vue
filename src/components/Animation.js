export default {
    data() {
        return {

        };
    },
    mounted() {
        // Seleziona la sezione "about" quando il componente viene montato
        const aboutSection = document.getElementById('about');
        const skillsSection = document.querySelector('#skills');

        // Crea una nuova istanza di IntersectionObserver
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                // Controlla se l'elemento è visibile almeno al 50% nella viewports
                if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                    // Aggiungi una classe per avviare gli effetti keyframes quando l'utente entra nella sezione
                    aboutSection.classList.add('section-entered');
                    // skillsSection.classList.add('section-entered');
                    // Smetti di osservare l'elemento una volta che è stato animato
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 }); // La soglia del 50% definisce quando attivare l'osservazione (quando il 50% dell'elemento è visibile)

        const skillsObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                    console.log('Entry:', entry);
                    skillsSection.classList.add('section-entered');
                    skillsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        // Inizia ad osservare la sezione "about"
        observer.observe(aboutSection);
        skillsObserver.observe(skillsSection);
    }
};
