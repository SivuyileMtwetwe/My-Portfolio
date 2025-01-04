// Updated HeroSection Component with Profile Image
window.app.component('hero-section', {
    template: `
        <section class="min-vh-100 d-flex flex-column align-items-center justify-content-center position-relative  bg-gradient">
            <div class="position-absolute top-0 start-0 w-25 h-25 rounded-circle bg-primary animate-blob"></div>
            <div class="position-absolute bottom-0 end-0 w-25 h-25 rounded-circle bg-secondary animate-blob animation-delay-2000"></div>

            <img src="Images/Picsart_24-06-27_21-26-59-799.jpg" alt="Sivuyile Mtwetwe" class="rounded-circle mb-4" style="width: 150px; height: 150px;">
            <div class="text-center">
                <h1 class="display-4 typing-text">Hello, I'm Sivuyile Mtwetwe</h1>
                <p class="lead">A passionate fullstack developer from South Africa </p>
                <div class="d-flex gap-3 mt-4 justify-content-center">
                    <button class="btn btn-outline-dark" @click="scrollToProjects">View My Work</button>
                    <button class="btn btn-light text-dark" @click="scrollToContact">Contact Me</button>
                </div>
            </div>
        </section>
    `,
    setup() {
        const scrollToProjects = () => {
            document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
        };

        const scrollToContact = () => {
            document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
        };

        return {
            scrollToProjects,
            scrollToContact,
        };
    }
});