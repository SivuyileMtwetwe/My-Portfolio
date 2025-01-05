window.app.component('contact-section', {
    template: `
        <section id="contact" class="py-5 bg-secondary text-white">
            <div class="container">
                <h2 class="text-center mb-5">Contact Me</h2>
                <form @submit.prevent="handleSubmit" class="row g-3">
                    <div class="col-md-6">
                        <label for="name" class="form-label">Name</label>
                        <input v-model="form.name" type="text" id="name" class="form-control" required>
                    </div>
                    <div class="col-md-6">
                        <label for="email" class="form-label">Email</label>
                        <input v-model="form.email" type="email" id="email" class="form-control" required>
                    </div>
                    <div class="col-12">
                        <label for="message" class="form-label">Message</label>
                        <textarea v-model="form.message" id="message" rows="4" class="form-control" required></textarea>
                    </div>
                    <div class="col-12 text-center">
                        <button type="submit" class="btn btn-primary">Send Message</button>
                    </div>
                </form>
            </div>
        </section>
    `,
    setup() {
        const form = Vue.reactive({
            name: '',
            email: '',
            message: ''
        });

        const handleSubmit = async () => {
            try {
                await fetch('https://formspree.io/f/xvgpkojq', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(form)
                });
                alert('Thank you! Your message has been sent.');
                form.name = '';
                form.email = '';
                form.message = '';
            } catch (error) {
                alert('There was an error sending your message. Please try again later.');
            }
        };

        return {
            form,
            handleSubmit
        };
    }
});
