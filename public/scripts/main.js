$(document).ready(function () {


    // Form Upload Image
    $('.form-upload-logo').change(function(e){
        var curElement = $('label.upload-logo img');
        var filename = $(this).val();
        filename = filename.substring(filename.lastIndexOf('\\')+1);
        var reader = new FileReader();
        reader.onload = function (event) {
            curElement.attr('src', event.target.result);
            $('label.upload-logo p').text(filename);
        };
        reader.readAsDataURL(this.files[0]);
    });

    // Toggle Navbar Mobile

    $('.navbar-toggle').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('opened');
        $('.navbar').toggleClass('expanded');
    });


    // Hover Button Disabled

    $('.btn-primary').on('mouseover', function(e){ 
        if($(this).hasClass('disabled') || $(this).is(':disabled')) {
            $('.text-noti-connect-wallet').css('opacity','1');
        }
    }).on('mouseout', function(e) {
        $('.text-noti-connect-wallet').css('opacity','0');
    });

});
