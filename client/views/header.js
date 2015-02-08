/**
 * Created by imihai on 2/7/15.
 */
Template.tmplHeader.rendered = function () {

    var location = window.location.pathname.replace('/', '');
    $('nav ul li a').removeClass('active');
    switch (location) {
        case 'about':
            $('.fourth a').addClass('active');
            break;
        case 'contact':
            $('.fifth a').addClass('active');
            break;
        case 'careerTransitions':
            $('.first a').addClass('active');
            break;
        case 'managingChronicDisease':
            $('.second a').addClass('active');
            break;
        case 'personalMotivation':
            $('.third a').addClass('active');
            break;
    }
};