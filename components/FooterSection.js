window.app.component('footer-section', {
    template: `
        <footer class="py-3 bg-dark text-white">
            <div class="container text-center">
                <p>&copy; {{ currentYear }} Sivuyile Mtwetwe. All rights reserved.</p>
            </div>
        </footer>
    `,
    setup() {
        const currentYear = new Date().getFullYear();
        return { currentYear };
    }
});