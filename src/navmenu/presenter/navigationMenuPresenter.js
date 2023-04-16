export function createNavigationMenuPresenter() {
    const navmenu = document.querySelector('.navmenu-js');

    function toggleVisibility() {
        navmenu.classList.toggle('show');
    }

    return {
        toggleVisibility,
    };
}
