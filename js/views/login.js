window.LoginView = Backbone.View.extend({

    initialize:function () {
        console.log('Initializing Login View');
    },

    render:function () {
        $(this.el).html(this.template());
        return this;
    }

});