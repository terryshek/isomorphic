/**
 * Created by terryshek on 13/5/15.
 */
var createStore = require('fluxible/addons/createStore');

var AboutStore = createStore({

    storeName: 'AboutStore',

    handlers: {
        'ADDTASK_SUCCESS': 'setItem'
    },

    initialize: function() {
        this.list = [];
    },

    setItem: function(payload) {
        console.log(payload)
        this.list.push(payload.task);
        this.emitChange();
    },

    getCurrentList: function() {
        return this.list || [];
    },
    // For sending state to the client
    dehydrate: function() {
        return {
            list: this.list
        };
    },

    rehydrate: function(state) {
        this.list = state.list;
    }
})
module.exports = AboutStore;