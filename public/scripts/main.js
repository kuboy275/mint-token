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
    $('.btn-primary.disabled , .btn-primary[disabled]').on('mouseover', function(e){
        $('.text-noti-connect-wallet').css('opacity','1');
    }).on('mouseout', function(e) {
        $('.text-noti-connect-wallet').css('opacity','0');
    })

    // Advanced Option Disabled
    if( !$('.advanced-option-form input#advancedOption').is('checked')) {
        $('.advanced-option-form').addClass("disabled-form");
        $('.advanced-option-form .form-control').prop('disabled', true);
    }
    $('.advanced-option-form input#advancedOption').on('change', function(e) {
        if(this.checked) {
            $('.advanced-option-form').removeClass("disabled-form");
            $('.advanced-option-form .form-control').prop('disabled', false);
            console.log(true);
        }else {
            $('.advanced-option-form .form-control').prop('disabled', true);
            $('.advanced-option-form').addClass("disabled-form");
        }
    })

    if( $('#collapseTokenManager .navbar-item .navbar-link').hasClass('active') ){
        $('#collapseTokenManager').collapse('show');
    }
});
