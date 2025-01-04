window.app.component('blog-section', {
    template: `
        <section id="blog" class="py-5">
            <div class="container">
                <h2 class="text-center mb-5">Latest Articles</h2>
                <div class="row g-4">
                    <div v-for="article in articles" :key="article.id" class="col-12 col-md-6 col-lg-4">
                        <div class="card h-100 shadow-sm">
                            <img :src="article.image" class="card-img-top" :alt="article.title">
                            <div class="card-body">
                                <h5 class="card-title">{{ article.title }}</h5>
                                <p class="card-text">{{ article.summary }}</p>
                                <a :href="article.link" target="_blank" class="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    setup() {
        const articles = [
            {
                id: 1,
                title: 'Vue.js Best Practices',
                summary: 'Explore the best practices for developing scalable Vue.js applications.',
                image: 'https://via.placeholder.com/400x300',
                link: '#'
            },
            {
                id: 2,
                title: 'CSS Grid vs Flexbox',
                summary: 'A comprehensive guide comparing CSS Grid and Flexbox.',
                image: 'https://via.placeholder.com/400x300',
                link: '#'
            }
        ];

        return {
            articles
        };
    }
});

// Updated SEO Optimization
const setMetaTags = () => {
    document.title = "Sivuyile Mtwetwe | Full-Stack Developer";
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Portfolio showcasing projects, skills, and articles by Sivuyile Mtwetwe.';
    document.head.appendChild(metaDescription);
};

setMetaTags();
