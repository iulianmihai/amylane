/**
 * Created by imihai on 2/3/15.
 */
Template.tmplBody.helpers({
    tmpl: function () {
        var location = window.location.pathname.replace('/', '');
        return location ? location : 'home' ;
    }
});