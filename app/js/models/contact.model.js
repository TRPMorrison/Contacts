var Contact = Backbone.Model.extend({

    initialize: function() {
        this.logName();
        this.logEmail();
        this.logPhone();
        this.logTwitter();
        this.logLinkedIn();

    },

    idAttribute: '_id',

    defaults: {
        name: '',
        phone: '',
        email: '',
        twitter: '',
        linkedin: ''
    },

    logName: function() {
        console.log(this.get('name'));
    },

    logEmail: function() {
        console.log(this.get('email'));
    },
    logpHone: function() {
        console.log(this.get('phone'));
    },
    logTwitter: function() {
        console.log(this.get('twitter'));
    },
    logLinkedIn: function() {
        console.log(this.get('linkedin'));
    },


});
