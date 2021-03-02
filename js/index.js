(() => {
    const nextElement = document.querySelector("#next");
    const previousElement = document.querySelector("#previous");

    document.addEventListener("keydown", (event) => {
        if(nextElement && event.key === "ArrowRight"){
            nextElement.click();
        }
        if(previousElement && event.key === "ArrowLeft"){
            previousElement.click();
        }
    });
})();