window.app.component('about-section', {
    template: `
        <section id="experience" class="py-5">
            <div class="container">
                <p class="section__text__p1 text-center">Explore My</p>
                <h1 class="title text-center mb-5">Experience</h1>
                <div class="experience-details-container">
                    <div class="about-containers">
                        <div class="details-container mb-4">
                            <h2 class="experience-sub-title">Frontend Development</h2>
                            <div class="article-container d-flex flex-wrap gap-4">
                                <article v-for="skill in frontendSkills" :key="skill.name" class="text-center">
                                    <img :src="skill.icon" alt="Experience icon" class="icon mb-2" />
                                    <div>
                                        <h3>{{ skill.name }}</h3>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div class="details-container">
                            <h2 class="experience-sub-title">Backend Development</h2>
                            <div class="article-container d-flex flex-wrap gap-4">
                                <article v-for="skill in backendSkills" :key="skill.name" class="text-center">
                                    <img :src="skill.icon" alt="Experience icon" class="icon mb-2" />
                                    <div>
                                        <h3>{{ skill.name }}</h3>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    setup() {
        const frontendSkills = [
            { name: 'HTML', icon: './Images/html5.svg' },
            { name: 'CSS', icon: './Images/css.svg' },
            { name: 'JavaScript', icon: './Images/javascript.svg' },
            { name: 'TypeScript', icon: './Images/typescript.svg' },
            { name: 'Angular', icon: './Images/angular.svg' },
            { name: 'Bootstrap', icon: './Images/bootstrap.svg' },
            { name: 'Flowbite', icon: './Images/flowbite.svg' },
            { name: 'Tailwind', icon: './Images/tailwindcss.svg' },
            { name: 'Figma', icon: './Images/figma.svg' },
            { name: 'Adobe Photoshop', icon: './Images/photoshop.svg' },
            { name: 'Canva', icon: './Images/canva.svg' },
            { name: 'Chart Js', icon: './Images/chartjs.svg' },
        ];

        const backendSkills = [
            { name: 'MongoDB', icon: './Images/mongodb.svg' },
            { name: 'Express JS', icon: './Images/Express.js_light.svg' },
            { name: 'Node JS', icon: './Images/nodejs.svg' },
            { name: 'Git', icon: './Images/git.svg' },
            { name: 'GitHub', icon: './Images/github.png' },
            { name: 'Python', icon: './Images/python.svg' },
            { name: 'SQL', icon: './Images/mysql.svg' },
        ];

        return {
            frontendSkills,
            backendSkills,
        };
    }
});
