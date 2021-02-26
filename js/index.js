(function(){
    const nextElement = document.querySelector("#next");
    const previousElement = document.querySelector("#previous");

    document.addEventListener("keydown", (event) => {
        if(event.key === "ArrowRight"){
            nextElement.click();
        }
        if(event.key === "ArrowLeft"){
            previousElement.click();
        }
    });
})();