function createCookieMessagePresenter() {
    const toasterContainer = document.querySelector('.toaster-container-js');

    function openToaster() {
        toasterContainer.classList.add('show');
    }

    function closeToaster() {
        toasterContainer.classList.remove('show');
    }

    return {
        openToaster,
        closeToaster,
    };
}

export default { createCookieMessagePresenter };
