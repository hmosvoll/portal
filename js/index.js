(function(){
    const nextElement = document.querySelector("#next");
    const nextHref = nextElement.getAttribute("href");

    document.addEventListener("keydown", (event) => {
        console.log(event.key);
        if(event.key === "ArrowRight"){
            window.location.href = window.location.origin + nextHref;
        }
    });
})();