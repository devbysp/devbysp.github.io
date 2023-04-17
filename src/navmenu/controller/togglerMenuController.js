import { createNavitemController } from './navitemController.js';

export function createTogglerMenuController(togglerMenuUseCases) {
    const navitemController = createNavitemController(togglerMenuUseCases);
    const togglerMenu = document.querySelector('.menu-toggler-js');

    // TODO: unregister this event listener
    togglerMenu.addEventListener('click', () => {
        togglerMenuUseCases.toggle(navitemController);
    });
}
