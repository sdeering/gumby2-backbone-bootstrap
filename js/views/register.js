window.RegisterView = Backbone.View.extend({

    initialize:function () {

        console.log('Initializing Register View');

    },

    render:function () {
        $(this.el).html(this.template());
        return this;
    }

});