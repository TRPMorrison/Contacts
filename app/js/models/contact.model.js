var Contact = Backbone.Model.extend ({

    defaults: {
    name: '',
    email: '',
    phone: '',
    twitter: '',
    linkedIn: ''
  },

  idAttribute: "_id",

  initialize: function () {
    var name = this.get('name');
    console.log( name );
  }

});
