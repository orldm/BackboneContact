ContactManager.module('ContactsApp.List', function(List, ContactManager, Backbone, Marionette, $, _) {

  List.Contact = Marionette.ItemView.extend({
    tagName: 'tr',
    template: '#contact-list-item',
    events: {
      'click': 'highlightName'
    },
    highlightName: function(e) {
      e.preventDefault();
      $('tr').removeClass('warning');
      this.$el.addClass('warning');
    }
  });

  List.Contacts = Marionette.CompositeView.extend({
    tagName: 'table',
    className: 'table table-hover',
    template: '#contact-list',
    childView: List.Contact,
    childViewContainer: 'tbody'
  });
});
