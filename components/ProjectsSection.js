window.app.component('projects-section', {
    template: `
        <section id="projects" class="py-5">
            <div class="container">
                <h2 class="text-center mb-5">Projects</h2>
                <div class="row g-4">
                    <div v-for="project in projects" :key="project.id" class="col-12 col-md-6 col-lg-4">
                        <div class="card h-100 shadow-sm">
                            <img :src="project.image" class="card-img-top" :alt="project.title">
                            <div class="card-body">
                                <h5 class="card-title">{{ project.title }}</h5>
                                <p class="card-text">{{ project.shortDescription }}</p>
                                <div class="d-flex justify-content-between">
                                    <a :href="project.demo" target="_blank" class="btn btn-primary">Live Demo</a>
                                    <a :href="project.github" target="_blank" class="btn btn-outline-secondary">GitHub</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    setup() {
        const projects = [
            {
                id: 1,
                title: 'E-commerce Platform',
                shortDescription: 'A modern e-commerce platform with shopping cart and payment integration.',
                image: 'https://via.placeholder.com/400x300',
                demo: '#',
                github: '#',
            },
            {
                id: 2,
                title: 'Portfolio Website',
                shortDescription: 'A personal portfolio to showcase my projects and skills.',
                image: 'https://via.placeholder.com/400x300',
                demo: '#',
                github: '#',
            },
            {
                id: 3,
                title: 'Blog Platform',
                shortDescription: 'A platform to share articles and engage with readers.',
                image: 'https://via.placeholder.com/400x300',
                demo: '#',
                github: '#',
            },
        ];

        return {
            projects,
        };
    }
});
