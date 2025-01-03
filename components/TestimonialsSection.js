window.app.component('testimonials-section', {
    template: `
        <section id="testimonials" class="py-5 bg-light">
            <div class="container">
                <h2 class="text-center mb-5">Testimonials</h2>
                <div class="row g-4">
                    <div v-for="testimonial in testimonials" :key="testimonial.id" class="col-12 col-md-6">
                        <div class="card shadow-sm">
                            <div class="card-body">
                                <p class="card-text">"{{ testimonial.feedback }}"</p>
                                <h5 class="card-title">- {{ testimonial.name }}</h5>
                                <p class="text-muted">{{ testimonial.position }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    setup() {
        const testimonials = [
            {
                id: 1,
                name: 'John Doe',
                position: 'Software Engineer',
                feedback: 'Working with Sivuyile was a fantastic experience. Highly recommend!'
            },
            {
                id: 2,
                name: 'Jane Smith',
                position: 'Project Manager',
                feedback: 'Sivuyile delivered exceptional results on time and with great quality.'
            },
        ];

        return {
            testimonials,
        };
    }
});
