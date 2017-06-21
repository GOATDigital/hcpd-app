function loadScript(url){
    var script = document.createElement('script');
    script.src = 'js/' + url + '.js';
    script.onload = function () {
      console.log(url, 'loaded');
      Hcpd_app.init({
            TCPD_APP_ID: "naaf87561"
        });
    };
    document.head.appendChild(script);
}



var Hcpd = {
    init: function(config){
        loadScript(config.TCPD_APP_ID)
    }
}