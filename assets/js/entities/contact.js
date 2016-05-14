ContactManager.module('Entities', function(Entities, ContactManager, Backbone, Marionette, $, _){

  Entities.Contact = Backbone.Model.extend({
    urlRoot: 'contacts'
  });

  Entities.configureStorage(Entities.Contact);

  Entities.ContactCollection = Backbone.Collection.extend({
    url: 'contacts',
    model: Entities.Contact,
    comparator: 'firstName'
  });

  Entities.configureStorage(Entities.ContactCollection);

  // var contacts;

  var initializeContacts = function() {
    var contacts = new Entities.ContactCollection([
      {id: 1, firstName: 'Alice', lastName: 'Arten', phoneNumber: '333-333'},
      {id: 2, firstName: 'Bob', lastName: 'Brigham', phoneNumber: '222-222'},
      {id: 3, firstName: 'Charlie', lastName: 'Campbell', phoneNumber: '444-444'}
    ]);
    contacts.forEach(function(contact) {
      contact.save();
    });
    return contacts;
  };

  var API = {
    getContactEntity: function(contactId) {
      var contact = new Entities.Contact({id: contactId});
      contact.fetch();
      return contact;
    },
    getContactEntities: function(){
      var contacts = new Entities.ContactCollection();
      contacts.fetch();
      if(contacts.length === 0) {
        return initializeContacts();
      }
      return contacts;
    }
  };

  ContactManager.reqres.setHandler('contact:entities', function() {
    return API.getContactEntities();
  });

  ContactManager.reqres.setHandler('contact:entity', function(id) {
    return API.getContactEntity(id);
  });

});
