let popup = document.getElementById('popup-window'),
    popupToggle = document.getElementById('btn'),
    popupClose = document.querySelector('.popup__close');

    popupToggle.onclick = function() {
        popup.style.display = "block";
    };

    popupClose.onclick = function() {
        popup.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }