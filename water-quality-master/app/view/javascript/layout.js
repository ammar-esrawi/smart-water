var menuItems = {
  "mainMenu": "menu1",
  "menu1": [
    {"id":"1", "iconClass":"fa fa-globe", "label": "map", "route":"#/map", "active":"true"},
    {"id":"2", "iconClass":"fa fa-dashboard", "label": "Dashboard", "route":"#/dashboard", "active":"false", "sub": "col2"},
   // {"id":"3", "iconClass":"fa fa-line-chart", "label": "Management", "route":"#/userManagement", "active":"false", "sub": "col3", "roles" : ["management"]},
    {"id":"4", "iconClass":"fa fa-list-alt", "label": "Generic Rules", "route":"#/rules", "active":"false", "sub": "col4"},
    {"id":"1", "iconClass":"fa fa-ticket", "label": "Create Ticket", "route":"#/createTicket", "active":"false"}   
  ],
  "col2": [
    {"id":"1", "iconClass":"fa fa-clock-o", "label":"Real Time", "route":"#/realTime", "active":"false"},
    {"id":"2", "iconClass":"fa fa-file-text-o", "label": "Logs", "route":"#/logs", "active":"false"},  
    {"id":"3", "iconClass":"fa fa-bar-chart", "label": "Historical", "route":"#/historical", "active":"false"},
    {"id":"4", "iconClass":"fa fa-ticket", "label":"Tickets", "route":"#/tickets", "active":"false"}
 //   {"id":"5", "iconClass":"fa fa-hand-stop-o", "label": "Nucleo Threshold", "route":"#/threshold", "active":"false"}
  ],
  "col3": [
   // {"id":"1", "iconClass":"fa fa-battery-half", "label":"User Management", "route":"#/userManagement", "active":"true"},
   // {"id":"2", "iconClass":"fa fa-battery-half", "label":"Device Management", "route":"#/deviceManagement", "active":"false"},
    //{"id":"3", "iconClass":"fa fa-battery-half", "label":"Group Management", "route":"#/groupManagement", "active":"false"}
  ],
   "col4": [
    {"id":"1", "iconClass":"fa fa-lock", "label":"Generic rule", "route":"#/genericRule", "active":"true"}
  ]  
}; 

var headerItems = {
    "logo": "//cdn.rawgit.com/scriptrdotio/resources/44ceedab/fe/images/logo.svg",
    "items": [],
    "subitems": [
        {"id":"1", "iconClass":"fa fa-bell", "label": "Notification Rules", "route":"#/notifications", "active":"false"} ,
        {"id":"2", "iconClass":"fa fa-users", "label":"User Management", "route":"#/userManagement", "active":"true", "roles":["management"]},
    ], 
    "logout": {"icon": "fa fa-sign-out", "label": "Logout", "route":"#/logout"}
};

var routingItems = {
  "params": [
    {"route": "map", "template": "/app/view/html/views/map/map.html"},
    {"route": "realTime", "template": "/app/view/html/views/dashboard/realTime.html"},
    {"route": "logs", "template": "/app/view/html/views/dashboard/logs.html"},  
    {"route": "historical", "template": "/app/view/html/views/dashboard/historical.html"},
    {"route": "createTicket", "template": "/app/view/html/views/createZohoTicket.html"},  
    {"route": "tickets", "template": "/app/view/html/views/dashboard/tickets.html"},
 //   {"route": "threshold", "template": "/app/view/html/views/dashboard/threshold.html"},
    {"route": "notifications", "template": "/app/view/html/views/notifications/notifications.html", controller: "notificationCtrl as vm"},
    {"route": "userManagement", "template": "/app/view/html/views/management/userManagement.html"},
  // {"route": "deviceManagement", "template": "/app/view/html/views/management/deviceManagement.html"},
   //{"route": "groupManagement", "template": "/app/view/html/views/management/groupManagement.html"},
    {"route": "genericRule", "template": "/app/view/html/views/genericRules/genericRule.html", controller: "genericRuleCtrl as vm"},  
    {"route": "logout", "template": "/app/view/html/logout.html"},  
  ],
  "otherwiseOption" : {"template": "/"}
};
