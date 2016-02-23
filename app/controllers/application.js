import Ember from 'ember';

export default Ember.Controller.extend({

  isShowDialog: false,
  isShowConfirm: false,
  isShowAlert: false,
   actions: {

    openModal: function(name) {
        this.set('isShowDialog', true);
        Ember.run.later(function () {
            $('#'+ name).modal('show');
        }, 10);
    },

    approveModal: function(){

    },

    denyModal: function() {
    },

    createFolder: function(){

    }
  }

});
