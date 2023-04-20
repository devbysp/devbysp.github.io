function createTogglerMenuUseCases(navmenuPresenter, navmenuController) {
    let isNavmenuVisible = false;

    function onNavigate() {
        // The navigation is solved in the HTML with id props and references to them.
        // Here it only has to be removed the listeners from the menuitems.
        navmenuController.removeEventListenerToEachNavitem(onNavigate);
        navmenuPresenter.hide();
        isNavmenuVisible = false;
    }

    function toggle() {
        if (isNavmenuVisible) {
            navmenuController.removeEventListenerToEachNavitem(onNavigate);
            navmenuPresenter.hide();
            isNavmenuVisible = false;
        } else {
            navmenuController.addEventListenerToEachNavitem(onNavigate);
            navmenuPresenter.show();
            isNavmenuVisible = true;
        }
    }

    return {
        toggle,
    };
}

export default { createTogglerMenuUseCases };
