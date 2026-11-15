import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './sass/style.scss';

import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';


$(function() {
    // 1. تهيئة الكاروسال الخاص بـ Bootstrap
    var myCarouselElement = document.querySelector('#carouselExampleFade');
    var carousel = new bootstrap.Carousel(myCarouselElement);

    // عند النقر على أي صورة تحمل الكلاس popup-trigger
    $('.popup-trigger').click(function() {
        // احصل على ترتيب الصورة التي تم النقر عليها (0, 1, 2, ...)
        let index = $('.popup-trigger').index(this);
        
        // أظهر النافذة المنبثقة
        $('#myPopup').css('display', 'flex'); // أو $('#myPopup').fadeIn();
        
        // الانتقال الفوري للشريحة المطابقة لنفس رقم الصورة في الكاروسال
        carousel.to(index);
    });

    // عند النقر على زر الإغلاق
    $('#closeBtn').click(function() {
        $('#myPopup').css('display', 'none'); // أو $('#myPopup').fadeOut();
    });
});

document.getElementById('copyright').innerHTML = "جميع الحقوق محفوظة @" + new Date().getFullYear();