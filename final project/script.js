const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');
/*this is used because nothing else I tried the sidebar seemed to break a lot*/
if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('expanded');
    });
}