window.app.component('footer-section', {
    template: `
        <footer class="bg-gray-800 text-white py-8">
            <div class="container mx-auto px-4">
                <div class="flex flex-col md:flex-row justify-between items-center">
                    <div class="text-center md:text-left mb-4 md:mb-0">
                        <p class="text-sm">&copy; {{ currentYear }} Your Name. All rights reserved.</p>
                    </div>
                    <div class="flex gap-6">
                        <a href="#" class="text-gray-400 hover:text-white transition duration-300">
                            <span class="sr-only">Back to top</span>
                            <svg 
                                @click="scrollToTop"
                                class="w-6 h-6 cursor-pointer" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round" 
                                    stroke-width="2" 
                                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    `,
    setup() {
        const currentYear = new Date().getFullYear();

        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };

        return {
            currentYear,
            scrollToTop
        };
    }
});