(() => {
    const portal = document.createElement('portal');
    portal.src = 'portal';
    //portal.style = '...';

    portal.classList.add('portal-transition');
    portal.addEventListener('click', (evt) => {
        // Animate the portal once user interacts
        portal.classList.add('portal-reveal');
    });

    portal.addEventListener('transitionend', (evt) => {
    if (evt.propertyName == 'transform') {
        // Activate the portal once the transition has completed
        portal.activate();
    }
    });

    document.body.append(portal);

    // When the user touches the preview (embedded portal):
    // do fancy animation, e.g. expand …
    // and finish by doing the actual transition
    // setTimeout(() => {
    //     portal.activate();
    // }, 2000);
})();



