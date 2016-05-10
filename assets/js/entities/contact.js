ContactManager.module('Entities', function(Entities, ContactManager, Backbone, Marionette, $, _){

  Entities.Contact = Backbone.Model.extend({
    defaults: {
      firstName: ''
    }
  });

  Entities.ContactCollection = Backbone.Collection.extend({
    model: Entities.Contact,
    comparator: 'firstName'
  });

  var contacts;

  var initializeContacts = function() {
    contacts = new Entities.ContactCollection([
      {id: 1, firstName: 'Alice', lastName: 'Arten', phoneNumber: '333-333'},
      {id: 2, firstName: 'Bob', lastName: 'Brigham', phoneNumber: '222-222'},
      {id: 3, firstName: 'Charlie', lastName: 'Campbell', phoneNumber: '444-444'}
    ]);
  };

  var API = {
    getContactEntities: function(){
      if(contacts === undefined) {
        initializeContacts();
      }
      return contacts;
    }
  };

  ContactManager.reqres.setHandler('contact:entities', function() {
    return API.getContactEntities();
  });

});
