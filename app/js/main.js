;(function() {

    'use strict';

    // Instance of our Collection
    var allContacts = new Contact();


    // Getting our data
    allContacts.fetch().done(function() {
        console.log(allContacts);
    });



    $('#addContacts').on('submit', function(e) {

        e.preventDefault();

        var data = $(this).serialize();

        $.post('http://tiy-515.herokuapp.com/collections/trini-contact', data);

    });


}());
