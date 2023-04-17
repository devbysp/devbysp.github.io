export function createCookieMessagePresenter() {
    const toasterContainer = document.querySelector('.toaster-container-js');

    function openToaster() {
        toasterContainer.classList.add('show');
        console.debug(toasterContainer.classList);
    }

    function closeToaster() {
        toasterContainer.classList.remove('show');
    }

    return {
        openToaster,
        closeToaster,
    };
}
