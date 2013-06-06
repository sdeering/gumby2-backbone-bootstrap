window.LoginView = Backbone.View.extend({

    initialize:function () {
        console.log('Initializing LoginView View');
    },

    render:function () {
        $(this.el).html(this.template());
        return this;
    }

});