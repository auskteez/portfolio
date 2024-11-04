<script>
window.addEventListener('DOMContentLoaded', async () => {
    const mainContent = document.getElementById('main');
    if (mainContent) {
        mainContent.style['height'] = '100vh';
        mainContent.style['overflow'] = 'hidden';
    
        setTimeout(() => {
            mainContent.style.removeProperty('height');
            mainContent.style.removeProperty('overflow');
        }, 3000);
    
        setTimeout(() => {
            document.body.classList.add("doneload");
        }, 1500);
    }
});
</script>
<style>
    body:not(.doneload) #nav,
    body:not(.doneload) #nav ~ div {
        opacity: 0 !important;
    }
</style>