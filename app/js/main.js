var allContacts = new Contact();

allContacts.fetch().done( function () {


  allContacts.each(function (model) {
addContactToView(model.attributes);

  });

});


var addContact = function (e) {

  e.preventDefault();

  var contactName = $(this).find('input').val();

  var c = new Contact({
    name: contactName,
    email: emailAddress,
    phone: phoneNumber,
    twitter: twitterName,
    linkedin: linkedinName
  });



// FORM SUBMIT LISTENER
$('#addContact').on('submit', addContact);

