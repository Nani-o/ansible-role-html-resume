var page = require('webpage').create();
var args = require('system').args;
var fs = require('fs');

function getFileUrl(str) {
  var pathName = fs.absolute(str).replace(/\\/g, '/');
  if (pathName[0] !== "/") {
    pathName = "/" + pathName;
  }
  return encodeURI("file://" + pathName);
};

page.viewportSize = { width: 1000, height: 50 };
page.open(getFileUrl(args[1]), function(){
    page.content = page.content.replace(new RegExp('.*CV.*PDF.*', "gm"), "");
    page.render(args[2]);
    phantom.exit();
});
