document.querySelectorAll('.modal-container .overlay').forEach((e) => {
    e.addEventListener('click', function(ev) {
        ev.stopPropagation();
        this.parentNode.classList.add('active');
    });
});

document.querySelectorAll('.modal-container ').forEach((el) => {
    el.addEventListener('click', function(ev) {
        this.classList.remove('active');
    });
});