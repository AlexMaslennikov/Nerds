/* Скрипт для popup */

var link = document.querySelector('.feedback');
var popup = document.querySelector('.modal-content');
var close = popup.querySelector('.modal-content-close');
var form = popup.querySelector('form');
var login = form.querySelector('.login-field');
var password = form.querySelector('.email-field');
var storage = localStorage.getItem('login');

link.addEventListener('click', function(event) {
    event.preventDefault();
    popup.classList.add('modal-content-show');
    if (storage) {
        login.value = storage;
        email.focus();
    } else {
        login.focus();
    }
}, false);
close.addEventListener('click', function(event) {
    event.preventDefault();
    popup.classList.remove('modal-content-show');
}, false);

form.addEventListener('submit', function(event) {
    if (!login.value || !password.value) {
        event.preventDefault();
        popup.classList.add('login-popup-error');
    } else {
        localStorage.setItem('login', login.value);
    }
}, false);
window.addEventListener('keydown', function(event) {
    if (event.keyCode == 27 && popup.classList.contains('modal-content-show')) {
        popup.classList.remove('modal-content-show');
    }
}, false);

/* Скрипт для карты */

ymaps.ready(function() {

    var myMap = new ymaps.Map('map', {
            center: [59.93866675783276, 30.32307250000002],
            controls: ['zoomControl'],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: '191186, Санкт-Петербург, ул. Б. Конюшенная, д. 19/8'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/pointer.png',
            // Размеры метки.
            iconImageSize: [231, 190],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-50, -188]
        });

    var position = myMap.getGlobalPixelCenter();
    myMap.setGlobalPixelCenter([position[0] - 250, position[1] - 100]);
    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
});
