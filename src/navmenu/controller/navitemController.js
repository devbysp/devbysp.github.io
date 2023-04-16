export function createNavitemController(togglerMenuUseCases) {
    let navitems = [];

    function clickHandler() {
        togglerMenuUseCases.toggle({
            subscribeToEventListener,
            unsubscribeToEventListener,
        });
    }

    function unsubscribeToEventListener() {
        navitems.forEach(navitem =>
            navitem.removeEventListener('click', clickHandler, true),
        );
    }

    function subscribeToEventListener() {
        navitems = document.querySelectorAll('.navitem-js');
        navitems.forEach(navitem =>
            navitem.addEventListener('click', clickHandler),
        );
    }

    return {
        subscribeToEventListener,
        unsubscribeToEventListener,
    };
}
