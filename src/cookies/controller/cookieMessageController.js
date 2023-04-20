function createCookieMessageController(cookieMessageUseCases) {
    const cookieDialogCloseButton = document.querySelector('.cookie-dialog-close-button-js');
    cookieDialogCloseButton.addEventListener(
        'click',
        function handleClick() {
            cookieMessageUseCases.close();
            cookieDialogCloseButton.removeEventListener('click', handleClick, true);
        },
    );
}

export default { createCookieMessageController };
