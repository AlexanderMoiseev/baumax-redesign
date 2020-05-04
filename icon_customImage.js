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
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: black; width: 210px; font-weight: bold; font-size: 20px; color:#005CA8; background-color:#D8D8D8;">$[properties.iconContent]</div>'
        ),
        
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            iconContent: 'Ясеневая улица, 5к1 '

        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/marker.svg',
            // Размеры метки.
            iconImageSize: [40, 52],
            iconContentOffset: [40, 10],
            iconContentLayout: MyIconContentLayout ,
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        })
        ;

    myMap.geoObjects
        .add(myPlacemark);
});