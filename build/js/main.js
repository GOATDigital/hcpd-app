function loadScript(appId){
    var script = document.createElement('script');
    script.src = 'js/custom/' + appId + '.js';
    script.onload = function () {
      Hcpd_internal.init({
            TCPD_APP_ID: appId
        });
    };
    document.head.appendChild(script);
}



var Hcpd_app = {
    init: function(config){
        loadScript(config.TCPD_APP_ID)
    }
}