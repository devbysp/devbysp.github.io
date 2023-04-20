function createArrowUpIconUseCase(arrowUpIconPresenter) {
    function scrollEvent(pageBottom) {
        if (pageBottom) {
            arrowUpIconPresenter.setStaticPosition();
        } else {
            arrowUpIconPresenter.setFixedPosition();
        }
    }

    return { scrollEvent };
}

export default { createArrowUpIconUseCase };
