/**
 * Created by terryshek on 13/5/15.
 */
var createStore = require('fluxible/addons/createStore');

var AboutStore = createStore({
    storeName: 'AboutStore',
    handlers: {
        'ABOUT_SUCCESS': 'addTask'
    },
    mixins: [FluxibleMixin],
    addTask:function(){

    },
    initialize: function() {
        this.list = [];
    },
    setItem: function(payload) {
        this.list[payload.task] = payload.task;
        this.emitChange();
    },

    getItem: function(task) {
        return this.list[task] || [];
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