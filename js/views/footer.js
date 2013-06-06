window.FooterView = Backbone.View.extend({

    initialize:function () {
        console.log('Initializing FooterView');
    },

    render:function () {
        $(this.el).html(this.template());
        return this;
    }

});