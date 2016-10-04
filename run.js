var page1 = require('webpage').create();
page1.viewportSize = { width: 1920, height: 1080 };
page1.open('http://fertec.fr', function(status) {
});
var page2 = require('webpage').create();
page2.viewportSize = { width: 1024, height: 600 };
page2.open('http://fertec.fr', function(status) {
  console.log("Status:" + status);
  if(status === "success") {
    page2.render('tab1.png');
  }
});
var page3 = require('webpage').create();
page3.viewportSize = { width: 176, height: 220 };
page3.open('http://fertec.fr', function(status) {
  console.log("Status:" + status);
  if(status === "success") {
    page3.render('mobil1.png');
  }
	phantom.exit();
});
