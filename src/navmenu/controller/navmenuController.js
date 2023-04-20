function createNavmenuController() {
    const navitems = document.querySelectorAll('.navitem-js');

    function addEventListenerToEachNavitem(clickHandler) {
        navitems.forEach((navitem) => navitem.addEventListener('click', clickHandler));
    }

    function removeEventListenerToEachNavitem(clickHandler) {
        navitems.forEach((navitem) => navitem.removeEventListener('click', clickHandler, true));
    }

    return {
        addEventListenerToEachNavitem,
        removeEventListenerToEachNavitem,
    };
}

export default { createNavmenuController };
