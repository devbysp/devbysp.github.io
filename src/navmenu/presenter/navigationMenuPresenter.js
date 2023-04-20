function createNavigationMenuPresenter() {
    const navmenu = document.querySelector('.navmenu-js');

    function show() {
        navmenu.classList.add('show');
    }

    function hide() {
        navmenu.classList.remove('show');
    }

    return {
        show,
        hide,
    };
}

export default { createNavigationMenuPresenter };
