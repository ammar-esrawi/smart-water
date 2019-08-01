var token = "UjYwMkNBREM1QQ=="

var login = {
   redirectTarget: "/app/view/html/index.html",
   expiry:6,
   loginTarget: "/app/view/html/login.html",
   anonymousToken: token
};

var wssConfig = ["wsClientProvider",function (wsClientProvider) {
    wsClientProvider.setToken(token);
    wsClientProvider.setPublishChannel("requestChannel");
    wsClientProvider.setSubscribeChannel(JSON.parse($.cookie('user')).groups);
}];

var httpsConfig = ["httpClientProvider",function (httpClientProvider) {
    httpClientProvider.setBaseUrl("https://water-quality.scriptrapps.io");
    httpClientProvider.setToken(token);
}]
