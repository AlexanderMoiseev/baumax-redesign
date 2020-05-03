//developer.tech.yandex.ru/

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.56854661, 37.44024623],
            zoom: 15
        }, 
        {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: '<b>Ясенева улица, 5к1 </b>',
            balloonContent: '<b>Ясенева улица, 5к1 </b>'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/marker.svg',
            // Размеры метки.
            iconImageSize: [40, 52],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        })

        ;

    myMap.geoObjects
        .add(myPlacemark);
});