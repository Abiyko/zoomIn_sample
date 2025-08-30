function zoomIn(imageElement) {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    const closeButton = document.createElement('button');
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    closeButton.className = 'mobile-menu-icon';
    closeButton.appendChild(span1);
    closeButton.appendChild(span2);

    const zoomedImage = document.createElement('img');
    zoomedImage.src = imageElement.src;
    zoomedImage.className = 'zoomed-image';

    closeButton.onclick = () => {
    overlay.remove();
    };

    overlay.appendChild(closeButton);
    overlay.appendChild(zoomedImage);

    document.body.appendChild(overlay);
}