window.app.component('about-section', {
    template: `
        <section class="py-20" id="about">
            <div class="container mx-auto px-4">
                <div class="max-w-4xl mx-auto">
                    <h2 class="text-4xl font-bold text-center mb-16">About Me</h2>
                    <div class="grid md:grid-cols-2 gap-12 items-center">
                        <div class="space-y-6">
                            <p class="text-lg text-gray-600 leading-relaxed">
                                Hi, I'm Sivuyile Mtwetwe, a full-stack MEAN developer with a passion for crafting efficient, scalable web applications and a love for the puzzle-solving aspect of coding. I thrive on the challenge of bringing ideas to life, from initial concept to polished product, whether it's designing intuitive frontends in Angular or architecting performant APIs in Node.js and Express. My expertise spans the entire MEAN stack (MongoDB, Express.js, Angular, Node.js), and I'm a firm believer in clean code, continuous learning, and user-centric design. I'm always looking for opportunities to expand my skill set and take on projects that make a real impact.
                            </p>

                            <p>
                             When I'm not coding, you might find me tutoring math and science, listening to podcasts, or exploring my interests in music, art, and movies. I'm also passionate about social entrepreneurship and dedicated to constantly learning and growing in the field of software development.
                            </p>
                        </div>
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <h3 class="text-xl font-semibold mb-4">Key Skills</h3>
                            <ul class="space-y-3">
                                <li v-for="skill in skills" :key="skill" class="flex items-center">
            
                                    {{ skill }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    setup() {
        const skills = [
            

"HTML",

"CSS",

"JavaScript",

"TypeScript",

"Angular",

"Bootstrap",

"Flowbite",

"Tailwind",

"Figma",

"Adobe Photoshop",

"Canva",

"Chart Js",


"MongoDB",

"Express JS",

"Node JS",

"Git",

"GitHub",

"Python",

"SQL",
        ];

        return {
            skills
        };
    }
});