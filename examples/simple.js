var Calendar = require("../index")
var css = require("../lib/calendar.css")

var style = document.createElement("style")
style.textContent = css
document.head.appendChild(style)

var cal = Calendar()

cal.on("change", function (thing) {
    console.log("value?", thing)
})

cal.el; // =>
