document.addEventListener('DOMContentLoaded', function () {
    let elems = document.querySelectorAll('.datepicker');
    let instances = M.Datepicker.init(elems, {
        "format" : "yyyy-mm-dd"
    });
});

document.querySelectorAll('.modal-show').forEach(function (element) {
    element.onclick = showModal;
});

document.querySelectorAll('.modal-project-close').forEach(function (element) {
    // закрываем окно на кнопке  - закрыть
    element.onclick = closeModal;
});

document.querySelectorAll('.modal-wrap').forEach(function (element) {
    // закрываем окно на клике в серой области
    element.onclick = closeModal;
});

function showModal() {
    let modalId = this.dataset.modal;
    document.querySelector(modalId).classList.remove('hide');
    document.onkeydown = function (event) {
        // закрываем окно на кклавише ESC
        if (event.keyCode == 27) {
            closeModal();
        };
    };
};

function closeModal() {
    document.querySelectorAll('.modal-wrap').forEach(function (element) {
        element.classList.add('hide');
    });
    document.onkeydown = null;
};

document.querySelector('#login-in .modal-project').onclick = function(event) {
    event.stopPropagation();
}

document.querySelector('#sign-up .modal-project').onclick = function(event) {
    event.stopPropagation();
}

document.querySelector('.read-rules').onclick = function() {
    document.querySelector('.form-slider').style.marginLeft = '-350px';
};

document.querySelectorAll('.read-rules-back').forEach(function (element) {
    element.onclick = comeBack;
});

function comeBack() {
    document.querySelector('.form-slider').style.marginLeft = '0';
};

document.querySelector('#argree-rules').onchange = function() {
    if (this.checked) {
        document.querySelector('#signup-submit').classList.remove('disabled');
    }
    else {
        document.querySelector('#signup-submit').classList.add('disabled'); 
    }
}