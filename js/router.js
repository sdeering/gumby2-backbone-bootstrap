window.Router = Backbone.Router.extend({

    routes: {
        "": "home",
        "login": "login",
        "register": "register"
    },

    cache: {},

    initialize: function () {
        this.cache.container = $("#main");
    },

    home: function () {
        // Since the home view never changes, we instantiate it and render it only once
        if (!this.homeView) {
            this.homeView = new HomeView();
            this.homeView.render();
        } else {
            this.homeView.delegateEvents(); // delegate events when the view is recycled
        }
        this.cache.container.html(this.homeView.el);
        this.initHeader();
        this.initFooter();
    },

    login: function () {
        if (!this.loginView) {
            this.loginView = new LoginView();
            this.loginView.render();
        } else {
            this.homeView.delegateEvents();
        }
        this.cache.container.html(this.loginView.el);
        this.initHeader();
        this.initFooter();
    },

    register: function () {
        if (!this.registerView) {
            this.registerView = new RegisterView();
            this.registerView.render();
        } else {
            this.homeView.delegateEvents();
        }
        this.cache.container.html(this.registerView.el);
        this.initHeader();
        this.initFooter();
    },

    /* ------------ HELPERS ---------------------------------------------------------- */

    initHeader: function () {
        this.headerView = new HeaderView();
        this.headerView.render();
        this.cache.container.prepend(this.headerView.el);
    },

    initFooter: function () {
        this.footerView = new FooterView();
        this.footerView.render();
        this.cache.container.append(this.footerView.el);
    }

});

/* ------------ LOAD TEMPLATES -------------------------------------------------------- */

templateLoader.load(["HomeView", "LoginView", "RegisterView", "HeaderView", "FooterView"],
    function () {
        app = new Router();
        Backbone.history.start();
    });