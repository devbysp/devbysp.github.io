import { createTogglerMenuUseCases } from './src/navmenu/usecase/togglerMenuUseCases.js';
import { createTogglerMenuController } from './src/navmenu/controller/togglerMenuController.js';
import { createNavigationMenuPresenter } from './src/navmenu/presenter/navigationMenuPresenter.js';

const navigationMenuPresenter = createNavigationMenuPresenter();
const togglerMenuUseCases = createTogglerMenuUseCases(navigationMenuPresenter);
createTogglerMenuController(togglerMenuUseCases);
