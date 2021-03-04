(() => {
    if (!("HTMLPortalElement" in window)) {
        return false;
    }

    const portal = document.querySelector("#portal");
    const next = document.querySelector("#next");
    const slide = document.querySelector("#slide");

    next.addEventListener("click", (event) => {
        event.preventDefault();
        
        portal.classList.add("slide-portal-reveal");
        slide.classList.add("slide-slide");
    });

    portal.addEventListener("click", (event) => {
        event.preventDefault();
    })

    portal.addEventListener('animationend', () => {
        portal.activate();
    });
})();