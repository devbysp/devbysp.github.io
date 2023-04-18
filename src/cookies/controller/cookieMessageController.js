export function createCookieMessageController(cookieMessageUseCases) {
  const cookieDialogCloseButton = document.querySelector('.cookie-dialog-close-button-js');

  // TODO: Unregister this event listener
  cookieDialogCloseButton.addEventListener('click', () => {
    cookieMessageUseCases.close();
  });
}
