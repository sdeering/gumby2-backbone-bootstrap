window.LoginView = Backbone.View.extend({

    initialize:function () {
        console.log('Initializing LoginView View');
//        this.template = templates['Contact'];
    },

    render:function () {
        $(this.el).html(this.template());
        return this;
    }

});