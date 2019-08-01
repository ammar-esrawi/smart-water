var myApp = angular.module('myApp', ["Layout",  "WsClient", "HttpClient", "Map", "List", "Chart", "Grid", "Speedometer", "Odometer", "Gauge", "DateTimePicker", "Thermometer", "Button", "ngTagsInput", "Slider", "Accelerometer", "Management", "schemaForm"]);

myApp
    .constant("menuItemsJson",  menuItems)
    .constant("headerItemsJson", headerItems)
    .constant("routingJson", routingItems)
    .constant("schemaForms", schemaForms)
    .config(httpsConfig)
    .config(wssConfig)
    .config(function($routeProvider, routingJson){
    for(var i = 0; i < routingJson.params.length; i++){
        $routeProvider
            .when("/", {
            templateUrl: '/app/view/html/views/map/map.html'
        })
            .when("/" + routingJson.params[i].route,
                  {
            templateUrl: routingJson.params[i].template,
            controller: routingJson.params[i].controller,
        })
    }
}); 