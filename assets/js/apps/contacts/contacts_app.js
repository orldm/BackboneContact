ContactManager.module('ContactsApp', function(ContactsApp, ContactManager, Backbone, Marionette, $, _){

  ContactsApp.Router = Marionette.AppRouter.extend({
    appRoutes: {
      'contacts': 'listContacts'
    }
  });

  var API = {
    listContacts: function() {
      console.log('route triggered');
    }
  };

  ContactManager.addInitializer(function() {
    new ContactsApp.Router({
      controller: API
    });
  });

});
