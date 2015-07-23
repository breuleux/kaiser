var kz = "@@KAISER";
if (!global[kz]) {
    var waitingList = [];
    k = {loaded: false, waitingList: waitingList};
    ["", "All", "Singleton", "Singletons", "Function", "Functions"].forEach(function (f) {
        var name = "register" + f;
        k[name] = function() { waitingList.push([name, [].slice.call(arguments)]); };
     });
    global[kz] = k;
}
module.exports = global[kz]
