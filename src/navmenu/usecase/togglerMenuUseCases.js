export function createTogglerMenuUseCases(navmenuPresenter) {
    let isNavMenuVisible = false;

    function toggle(navmenu) {
        isNavMenuVisible = !isNavMenuVisible;

        if (isNavMenuVisible) {
            navmenu.subscribeToEventListener();
        } else {
            navmenu.unsubscribeToEventListener();
        }

        navmenuPresenter.toggleVisibility();
    }

    return {
        toggle,
    };
}
