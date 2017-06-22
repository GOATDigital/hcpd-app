function loadScript(appId) {
    var script = document.createElement('script');
    var PATH = 'https://s3-us-west-2.amazonaws.com/hcpd-v2/__test/';
    var el = document.getElementById('hcpd-container');
    script.src = PATH + 'js/custom/' + appId.replace(/\d/g, '') + '.js';
    script.onload = function () {
        el.style = '';
        Hcpd_internal.init({
            TCPD_APP_ID: appId
        });
    };
    script.onerror = function () {
        el.innerText = 'Failed to load list.';
    };
    document.head.appendChild(script);
}

var Hcpd_app = {
    init: function (config) {
        if (config.TCPD_APP_ID) loadScript(config.TCPD_APP_ID);
    }
}