import { createNavigationMenuPresenter } from './src/navmenu/presenter/navigationMenuPresenter.js';
import { createTogglerMenuUseCases } from './src/navmenu/usecase/togglerMenuUseCases.js';
import { createTogglerMenuController } from './src/navmenu/controller/togglerMenuController.js';
import { createCookieMessagePresenter } from './src/cookies/presenter/cookieMessagePresenter.js';
import { createCookieMessageUseCases } from './src/cookies/usecase/cookieMessageUseCases.js';
import { createCookieMessageController } from './src/cookies/controller/cookieMessageController.js';

const navigationMenuPresenter = createNavigationMenuPresenter();
const togglerMenuUseCases = createTogglerMenuUseCases(navigationMenuPresenter);
createTogglerMenuController(togglerMenuUseCases);

const cookieMessagePresenter = createCookieMessagePresenter();
const cookieMessageUseCases = createCookieMessageUseCases(cookieMessagePresenter);
createCookieMessageController(cookieMessageUseCases);
