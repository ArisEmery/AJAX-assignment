// 1) Using jquery -- create $(document).ready function

// 2) Within here put a listener on the search button -- it can be in a form or not

// 3) Get the username from the input box and put that into the gitHub api url ( https://api.github.com/users/{username} )

// 4) Use an ajax call to call to this url and get back the json data

// 5) Pull out and put the data that you need to put into the elements on your html page
$(document).ready(function(){

});
$("#submit").click(function(){
      var searchName = $("#name").val();
      searchterm = "https://api.github.com/users/" + searchName;
      var answer = $.get(searchterm, function(info){
                    if (info) {
              var resulthtml = '<img src="' + info.avatar_url + '" alt="' + info.login + '\'s profile image.">'
                  + '<p>' + 'Username:'+info.login+'</p>'  + ' public repositories:' + info.public_repos + '</p>'+' followers:'+ info.followers;
              $("#answer").html(resulthtml);
              $("#error").hide();
              $("#answer").show();}
      })
      .fail(function(){
          $("#error").show();
                      $("#answer").hide();
      });
  })
