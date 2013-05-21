window.Router = Backbone.Router.extend({

    routes: {
        "": "home",
        "login": "login",
        "register": "register"
    },

    initialize: function () {
        // Close the search dropdown on click anywhere in the UI
        $('body').click(function () {
            $('.dropdown').removeClass("open");
        });
    },

    home: function () {
        // Since the home view never changes, we instantiate it and render it only once
        if (!this.homeView) {
            this.homeView = new HomeView();
            this.homeView.render();
        } else {
            this.homeView.delegateEvents(); // delegate events when the view is recycled
        }
        $("#content").html(this.homeView.el);
    },

    login: function () {

        // this.headerView = new HeaderView();
        // $('.header').html(this.headerView.render().el);

        if (!this.loginView) {
            this.loginView = new LoginView();
            this.loginView.render();
        } else {
            this.homeView.delegateEvents(); // delegate events when the view is recycled
        }
        $('#content').html(this.loginView.el);
    },

    register: function () {
        if (!this.registerView) {
            this.registerView = new RegisterView();
            this.registerView.render();
        } else {
            this.homeView.delegateEvents(); // delegate events when the view is recycled
        }
        $('#content').html(this.registerView.el);
    }

});

templateLoader.load(["HomeView", "LoginView", "RegisterView"],
    function () {
        app = new Router();
        Backbone.history.start();
    });