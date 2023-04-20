function createArrowUpIconPresenter() {
    const arrowUpIcon = document.querySelector('.arrow-up-icon-js');

    function setStaticPosition() {
        arrowUpIcon.classList.add('static-position');
    }

    function setFixedPosition() {
        arrowUpIcon.classList.remove('static-position');
    }

    return {
        setStaticPosition,
        setFixedPosition,
    };
}

export default { createArrowUpIconPresenter };
