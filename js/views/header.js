window.HeaderView = Backbone.View.extend({

    initialize:function () {
        console.log('Initializing Header View');

        window.WEBAPP = window.WEBAPP || {};
        window.WEBAPP.HEADER = {

            cache: {},

            init: function() {

                var _this = this;
                console.log('web app header controller init..');

                //DOM CACHE
                this.cache.navItems = $('header .nav li');

                //update current nav item
                this.cache.navItems.on(Gumby.click, 'a', function()
                {
                    _this.cache.navItems.removeClass('active');
                    $(this).closest('li').addClass('active');
                });
            }

        }

    },

    render:function () {
        $(this.el).html(this.template());
        return this;
    }

});