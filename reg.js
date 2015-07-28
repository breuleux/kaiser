var kz = "@@KAISER";
if (!global[kz]) {
    var waitingList = [];
    k = {loaded: false, waitingList: waitingList};
    ["", "All", "Singleton", "Singletons", "Function", "Functions"].forEach(function (f) {
        var name = "register" + f;
        k[name] = function() {
            if (global[kz].loaded) {
                global[kz][name].apply(null, arguments);
            }
            else {
                waitingList.push([name, [].slice.call(arguments)]);
            }
        };
     });
    global[kz] = k;
}
module.exports = global[kz];
