"use strict"

//let path = require("path")
//let pkg = require("../../package.json")

module.exports = {
  "sidebarmenu": [
    { "id": 0, "itype": "title", "txt": "sidebar:Main", "icon": "", "uri": "" },
    { "id": 1, "itype": "route", "txt": "sidebar:Home", "icon": "fa-home", "uri": "/" },
    { "id": 2, "itype": "route", "txt": "sidebar:Counter", "icon": "fa-tasks", "uri": "/counter" },
    { "id": 3, "itype": "route", "txt": "sidebar:Devices", "icon": "fa-tablet", "uri": "/devices" },
    { "id": 4, "itype": "route", "txt": "sidebar:Posts", "icon": "fa-comments", "uri": "/posts" },
    { "id": 5, "itype": "route", "txt": "sidebar:Profile", "icon": "fa-user", "uri": "/profile" },
    { "id": 6, "itype": "title", "txt": "sidebar:Profile", "icon": "", "uri": "" },
    { "id": 7, "itype": "link" , "txt": "sidebar:Logout", "icon": "fa-sign-out", "uri": "/logout" },
  ],
  "usermenu": [
    { "id": 1, "itype": "route", "txt": "sidebar:Profile", "icon": "fa-user", "uri": "/profile" },
    { "id": 2, "itype": "route", "txt": "sidebar:Settings", "icon": "fa-cog", "uri": "/settings" },
    { "id": 3, "itype": "devider", "txt": "not displayed", "icon": "", "uri": "" },
    { "id": 3, "itype": "link", "txt": "sidebar:Logout", "icon": "fa-power-off", "uri": "/logout" }
  ],
  // notifications and massages dropdon use same component
  // the UI text is defined her
  "header": {
    "notif":    {
      "Messages": "header:Notifications",
      "MarkAllAsRead": "header:MarkAllNotifAsRead",
      "SeeAllMessages": "header:SeeAllNotifications"
    },
    "msgs":    {
      "Messages": "header:Messages",
      "MarkAllAsRead": "header:MarkAllMsgAsRead",
      "SeeAllMessages": "header:SeeAllMessages",
    },
    "lang": {
      "Search3dots": "header:Search3dots",
      "languageselector": "header:languageselector"
    }
  },

  "fake_notif": [
    { "id": "1", "img": "dustin/73.jpg", "name": "Thomas", "action": "posted a new article from fake_notifs in actions.js", "delay": "1 min ago" },
    { "id": "2", "img": "connor_gaunt/73.jpg", "name": "Adam", "action": "changed his contact information", "delay": "3 min ago" },
    { "id": "3", "img": "adellecharles/73.jpg", "name": "Samantha", "action": "replied to your comment", "delay": "15 min ago" },
    { "id": "4", "img": "ritu/73.jpg", "name": "Bill", "action": "bought a new TV", "delay": "3 hrs ago" },
    { "id": "5", "img": "sauro/73.jpg", "name": "Chris", "action": "posted a new blog post", "delay": "1 day ago" },
  ],
  "fake_faces_src": "https://s3.amazonaws.com/uifaces/faces/twitter/",
  fake_msgs: [
    {
      "id": "1",
      "img": "dustin/73.jpg",
      "name": "John Doe",
      "action": "from fake_msgs in actions.js Cupidatat eiusmod commodo excepteur velit magna. Aliqua eu tempor officia officia et ipsum magna sint cillum Lorem reprehenderit.",
      "title": "Message Title",
      "delay": "1 min ago"
    },
    {
      "id": "2",
      "img": "connor_gaunt/73.jpg",
      "name": "John Doe",
      "action": "Laborum laboris nulla nisi labore.",
      "title": "Message Title",
      "delay": "3 min ago"
    }
  ]
}

