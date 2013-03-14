var Calendar = require("../index")
var css = require("../lib/calendar.css")

var style = document.createElement("style")
style.textContent = css
document.head.appendChild(style)

var cal = new Calendar
cal.el; // =>
