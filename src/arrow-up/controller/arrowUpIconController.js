function createArrowUpIconController(arrowUpIconUseCase) {
    window.onscroll = () => {
        const pageBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
        arrowUpIconUseCase.scrollEvent(pageBottom);
    };
}

export default { createArrowUpIconController };
