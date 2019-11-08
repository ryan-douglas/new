var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+VPN", {
    "+VPN": function() {
        ;
function FindProxyForURL(url,host){var D='DIRECT';var p='https jp1.ghelper.net:443;https sg2.ghelper.net:443;https www.onhop.net:3306;https de.ghelper.net:443;https www.copyplay.net:3389;https hgc2.ghelper.net:3389;https tw.ghelper.net:443;https hkt5.ghelper.net:3389;https wtt.ghelper.net:443;https www.tcpbbr.net:3306;https hkt7.ghelper.net:3389;https hkt6.ghelper.net:3389;https us.ghelper.net:443;https hgc.ghelper.net:3389;https www.ghelper.net:443;https he.ghelper.net:443;https hkbn2.ghelper.net:443;https www.pickdown.net:3389;https ru2.ghelper.net:443;https uk.ghelper.net:443';host=host.toLowerCase(); var du = ['https://api.gecko.la','https://api2.gecko.la','chrome-extension://','chrome://'];for(var a in du){if(url.indexOf(du[a]) == 0){return D;}} var dn = ['0.0.0.0', '127.0.0.1', 'localhost', 'api.gecko.la', 'api2.gecko.la'];for(var c in dn){if(dnsDomainIs(host,dn[c])){return D;}} return p;}

/* End of PAC */;
        return FindProxyForURL;
    }.call(this)
});