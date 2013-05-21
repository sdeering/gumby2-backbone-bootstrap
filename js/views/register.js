window.RegisterView = Backbone.View.extend({

    initialize:function () {
        console.log('Initializing RegisterView View');
//        this.template = templates['Contact'];
    },

    render:function () {
        $(this.el).html(this.template());
        return this;
    }

});