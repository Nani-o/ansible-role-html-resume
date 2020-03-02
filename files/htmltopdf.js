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

page.paperSize = {
    format        : "A4",
    orientation    : "portrait",
    margin        : { left:"1cm", right:"1cm", top:"1cm", bottom:"1cm" },
    header        : {
        height        : "3cm",
        contents        : phantom.callback(function(pageNum, numPages){
            return("Mon header : " + pageNum + " / " + numPages);
        })
    },
    footer        : {
        height        : "1cm",
        contents        : phantom.callback(function(pageNum, numPages){
            return("Mon footer : " + pageNum + " / " + numPages);
        })
    }
};

page.viewportSize = { width: 1000, height: 50 };
page.open(getFileUrl(args[1]), function(){
    page.content = page.content.replace(new RegExp('.*CV.*PDF.*', "gm"), "");
    page.render(args[2]);
    phantom.exit();
});
