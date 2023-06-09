function createCookieMessageUseCases(cookieMessagePresenter) {
    // TODO: Read the cookie and if does not exist yet then tell the presenter
    // to show the cookie dialog, for now is always shown.
    cookieMessagePresenter.openToaster();

    function close() {
        // TODO: place a cookie with the information that the dialog was shown
        cookieMessagePresenter.closeToaster();
    }

    return {
        close,
    };
}

export default { createCookieMessageUseCases };
