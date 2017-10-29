javascript:(
  function() {
    var url = location.href;

    // Aamazon
    if (location.href.match(/http[s]:\/\/www\.amazon\..*\/dp\/([^\/]+)\/.*/) ||
        location.href.match(/http[s]:\/\/www\.amazon\..*\/ASIN\/([^\/]+)\/.*/) ||
        location.href.match(/http[s]:\/\/www\.amazon\..*\/product\/([^\/]+)\/.*/)) {
      url = "http://www.amazon.co.jp/dp/" + RegExp.$1 + "/";
    }

    // Google Docs
    if (location.href.match(/http[s]:\/\/docs\.google\.com\/document\/d\/([^\/]+)\/.*/) || location.href.match(/http[s]:\/\/docs\.google\.com\/a\/google\.com\/document\/d\/([^\/]+)\/.*/)) {
      url = "https://docs.google.com/document/d/" + RegExp.$1 + "/";
    }
    if (location.href.match(/http[s]:\/\/docs\.google\.com\/spreadsheets\/d\/([^\/]+)\/.*/)) {
      url = "https://docs.google.com/spreadsheets/d/" + RegExp.$1 + "/";
    }
    if (location.href.match(/http[s]:\/\/docs\.google\.com\/presentation\/d\/([^\/]+)\/.*/)) {
      url = "https://docs.google.com/presentation/d/" + RegExp.$1 + "/";
    }

    var popup = window.open("","","height=30px,width=430px");
    popup.document.clear();
    popup.document.write("<html><head><meta http-equiv=Content-Type content='text/html; charset=x-sjis'><title>URL</title></head><body>");
    popup.document.write('<input type="text" id="url" style="width:400px;" value="' + url +'"></input>');
    popup.document.write("</body></html>");

    popup.document.getElementById("url").select();
    popup.document.oncopy = function(event){
      popup.close();
    }
  }
)()
