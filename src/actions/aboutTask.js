
module.exports = function(context, payload, done) {
    console.log(payload);
    setTimeout(function () { // simulate async
        context.dispatch('ADDTASK_SUCCESS', payload);
        done();
    }, 10);
};
