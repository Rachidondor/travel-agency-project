import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './sass/style.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

$(function() {
    // عند النقر على أي صورة تحمل الكلاس popup-trigger
    $('.popup-trigger').click(function() {
        // احصل على رابط الصورة التي تم النقر عليها
        let imgSrc = $(this).attr('src');
        
        // ضع الرابط داخل صورة النافذة المنبثقة
        $('#popupImage').attr('src', imgSrc);
        
        // أظهر النافذة
        $('#myPopup').css('display', 'flex'); // أو $('#myPopup').fadeIn();
    });

    // عند النقر على زر الإغلاق
    $('#closeBtn').click(function() {
        $('#myPopup').css('display', 'none'); // أو $('#myPopup').fadeOut();
    });
});

document.getElementById('copyright').innerHTML = "جميع الحقوق محفوظة @" + new Date().getFullYear();