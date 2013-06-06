window.HeaderView = Backbone.View.extend({

    initialize:function () {
        console.log('Initializing HeaderView');
    },

    render:function () {
        $(this.el).html(this.template());
        return this;
    }

});