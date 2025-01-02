window.app.component('hero-section', {
    template: `
        <section class="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-800">
            <!-- Animated background elements -->
            <div class="absolute inset-0">
                <div class="absolute inset-0 opacity-30">
                    <div class="absolute top-[10%] left-[5%] w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                    <div class="absolute top-[20%] right-[10%] w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                    <div class="absolute bottom-[30%] left-[15%] w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
                </div>
            </div>

            <!-- Content -->
            <div class="relative flex items-center justify-center min-h-screen">
                <div class="text-center px-4">
                    <h1 class="text-6xl md:text-7xl font-bold mb-6 text-white tracking-tight">
                        <span class="block transform hover:scale-105 transition-transform duration-300">Hello, I'm

Sivuyile Mtwetwe</span>
                    </h1>
                    <h2 class="text-2xl md:text-3xl text-purple-200 mb-8 font-light">
                        <span class="typing-text">Front-End Developer</span>
                    </h2>
                    <p class="text-xl text-purple-100 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Creating beautiful and functional web experiences with modern technologies.
                    </p>
                    <div class="flex justify-center gap-6">
                        <button 
                            @click="scrollToProjects"
                            class="group relative inline-flex items-center px-8 py-3 font-semibold text-white transition-all duration-300 ease-in-out transform bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-purple-800 hover:scale-105"
                        >
                           <i class="fa-solid fa-briefcase"></i> View My Work
                          
                        </button>
                        <button 
                            @click="scrollToContact"
                            class="group relative inline-flex items-center px-8 py-3 font-semibold transition-all duration-300 ease-in-out transform bg-white text-purple-800 rounded-full hover:bg-opacity-90 hover:scale-105"
                        >
                           <i class="fa-solid fa-inbox"></i> Contact Me
                        
                        </button>
                    </div>
                </div>
            </div>

            <!-- Scroll indicator -->
            <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              
            </div>
        </section>
    `,
    setup() {
        const scrollToProjects = () => {
            document.querySelector('#projects').scrollIntoView({ 
                behavior: 'smooth' 
            });
        };

        const scrollToContact = () => {
            document.querySelector('#contact').scrollIntoView({ 
                behavior: 'smooth' 
            });
        };

        return {
            scrollToProjects,
            scrollToContact
        };
    }
});