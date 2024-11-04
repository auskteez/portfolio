<script>
window.addEventListener('DOMContentLoaded', async () => {
    const mainContent = document.getElementById('main');
    if (mainContent) {
        mainContent.style['height'] = '100vh';
        mainContent.style['overflow'] = 'hidden';

        setTimeout(() => {
            mainContent.style.removeProperty('height');
            mainContent.style.removeProperty('overflow');
        }, 4000);

        setTimeout(() => {
            document.body.classList.add("doneload");
        }, 3900);
    }
});
</script>
<style>
body:not(.doneload) #nav,
body:not(.doneload) #footer,
body:not(.doneload) #nav~div,
body:not(.doneload) .framer-pointer-events-none {
    cursor: none !important;
    pointer-events: none !important;
    opacity: 0 !important;
}
body:not(.doneload) {
    cursor: none !important;
}
</style>