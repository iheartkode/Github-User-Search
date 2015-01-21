$('button').on('click', function() {
    
    var find = $('#search').val(); 
    
    $('#search').val("");

      
        var users = $("ul");
        Gh3.Users.search(find, {start_page : 1}, function (err, response) {
          if(err) {
            throw "Error Couldn't fetch Users"
          }
          response.each(function (user) {
            users.append(
              $('<li>').append(' <a href="https://www.github.com/' + user.login + ' ">  ' + user.login + ' </a> ' + '<br> Name: ' + user.name + '<br> Language: ' + user.language + '<br><br>')
          ); 
        }); 
      }); 
  
 }); 

