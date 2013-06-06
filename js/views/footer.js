window.FooterView = Backbone.View.extend({

    initialize:function () {
        console.log('Initializing Footer View');
    },

    render:function () {
        $(this.el).html(this.template());
        return this;
    }

});