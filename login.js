$(function(){
    $(".error").addClass("active");
    $(".success").addClass("active");
    $(".notice").addClass("active");
});

$("#register").click( function(){
    $('#register').hide();
    $('#forgottenShow').hide();
    $('#forgot').hide();
    $('#registercontent').fadeIn();
    $('#goback').fadeIn();
    $('#regicontent').hide();
	$('#infobox').hide();
	$('#infobox2').hide();
	$('#infobox3').hide();
});

$("#forgot").click( function(){
    $('#forgot').hide();
    $('#register').hide();
    $('#registerShow').hide();
    $('#forgottenShow').fadeIn();
    $('#goback').fadeIn();

    $(this).val('goback');
});

$("#goback").click( function(){
    $('#registercontent').hide();
    $('#regicontent').fadeIn();
	$('#register').fadeIn();
	$('#infobox').fadeIn();
	$('#infobox2').fadeIn();
	$('#infobox3').fadeIn();
    $(this).val('forgot');
});

$("#reset").click( function(){
    $('#forgot').hide();
    $('#registerShow').hide();
    $('#forgottenShow').hide();
    $('#goback').hide();
    $('#forgot').show();
    $('#register').show();
});


setTimeout(function() {
    $('.error').addClass('suspend');
    $('.notice').addClass('suspend');
    $('.success').addClass('suspend');
},5000);

$(document).ready(function(){
    $(".flexBackground").flexBackground({numberOfPoints:'100',
        radius:'1',
        interval : '50',
        color : 'rgb(256, 256, 256)'
    });
})