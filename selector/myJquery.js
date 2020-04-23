// $-là 1 function được định nghĩa trong thư viện jquery
// =========Document ready=============-khi đã sẵn sàng làm việc
/*$(document).ready(function() { //function được call back khi function đã ready
        alert('documents ready');
    })
    //cách 2
$(function() {
    alert('cách 2 ngắn hơn bao nhiêu');
})*/
// =====DOM=============================
$(function() {
        var wrapper = $('.wrapper'); //==documents.getElenmentById ==selector class -nếu là id thay dấu chấm =dấu thăng,giúp tương tác được các phương thức 
        var cssJquery = $('div h1');
        cssJquery.css({
            color: 'red',
            backgroundColor: 'teal',
        });

    })
    //selector
    // $(document).ready(function() {
    //     $('button').click(function() { //systax $(selector).action();
    //         $('p').hide();

//     })
// })
$(document).ready(function() {
    $('.click').click(function() {
        $('.menu').hide();
    })
})
$(document).ready(function() {
    $('.show').click(function() {
        $('.menu').show();
    })
})
$(document).ready(function() {
    $('.li_first').click(function() {
        $('.submenu').show();
    })
})