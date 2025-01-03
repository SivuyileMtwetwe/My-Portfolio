window.app.component('about-section', {
    template: `
        <section id="about" class="py-5">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <h2 class="mb-4">About Me</h2>
                        <p>I'm Sivuyile Mtwetwe, a full-stack MEAN developer with expertise in MongoDB, Express.js, Angular, and Node.js. I’m passionate about creating efficient, scalable web applications and love the challenge of solving coding puzzles. I focus on delivering clean, maintainable code, and I always prioritize continuous learning and user-centric design. </p>
                        <p>Outside of coding, I enjoy tutoring math and science, listening to podcasts, and exploring my interests in music, art, and movies. I'm also passionate about social entrepreneurship and dedicated to growing and learning in the field of software development.</p>
                    </div>
                    <div class="col-md-6">
                        <div class="p-4 border rounded">
                            <h3>Key Skills</h3>
                            <ul class="list-unstyled">
                                <li v-for="skill in skills" :key="skill">{{ skill }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    setup() {
        const skills = ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Bootstrap'];
        return { skills };
    }
});