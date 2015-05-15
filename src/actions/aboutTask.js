
module.exports = function(context, payload, done) {
    setTimeout(function () { // simulate async
        context.dispatch('ADDTASK_SUCCESS', payload);
        done();
    }, 10);
};
