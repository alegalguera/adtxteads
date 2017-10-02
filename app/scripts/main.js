var _url = 'http://localhost/work/test/ad.txt';
// var _url = 'http://www.marca.com/ads.txt';

/*var pageExecute = {

    fileContents: "Null",
    ext_url: "http://localhost/work/test/ad.txt",


    init: function() {
      /*  $.ajax({
            url: ext_url,
            async: false,
            success: function (data){
                pageExecute.fileContents = data;
                  console.log(pageExecute.fileContents);
            }
        });
    }*/
/*      $.getJSON({
        url: ext_url,
        dataType: "jsonp",
        success: function(data) {
          console.log(data)
          alert(data);
        }
      });

    };

    $('#gettxt_btn').click(function() {
      pageExecute.init();
    });
*/
/*
$.getScript( _url, function( data, textStatus, jqxhr ) {
  console.log( data ); // Data returned
  console.log( textStatus ); // Success
  console.log( jqxhr.status ); // 200
  console.log( "Load was performed." );
  $("#test").html("__"  + data)
});*/
$.ajax({
           url: _url,
           type: "getScript",
           crossDomain: true,
           //data: JSON.stringify(somejson),
           dataType: "json",
           success: function (response) {
               var resp = JSON.parse(response)
               console.log(resp.status);
           },
           error: function (xhr, status) {
               alert("error");
           }
       });
