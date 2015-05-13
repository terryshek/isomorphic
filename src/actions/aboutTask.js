
module.exports = function(context, payload, done) {
    debug('Started');
    setTimeout(function () { // simulate async
        context.dispatch('ABOUT_SUCCESS', payload);
        done();
    }, 10);
};
