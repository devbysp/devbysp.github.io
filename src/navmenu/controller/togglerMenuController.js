function createTogglerMenuController(togglerMenuUseCases) {
    const togglerMenu = document.querySelector('.menu-toggler-js');

    function handleToggle() {
        togglerMenuUseCases.toggle();
    }

    togglerMenu.addEventListener('click', handleToggle);
}

export default { createTogglerMenuController };
