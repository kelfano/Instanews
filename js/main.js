// Javascript file for Project 2

//User click on the menu
//Select the section
//Get the option value from the input
//reload the page
//Concatenate section value onto url

//Send ajax request to NYT server
//If Successful, append the 12 top new stories to the page
// If not successful, display message 

  
 $(function(){

    $('#section').change(function(){


      var topStoryItems = '';
      var homeSection = $('#section option').filter(':selected').val();  
      var url = 'https://api.nytimes.com/svc/topstories/v2/' + homeSection+ '.json'; //Concatenation
      console.log(url);
          url += '?' + $.param({
          'api-key': '68f6f7797d58429bad830b72c33c7025'
        });


        $.ajax({
          url: url,
          method: 'GET',
        }).done(function(data) {


        console.log(data);
        console.log(data.results);

        var newYorkTimes = data.results;

          //   function checkingMultiMedia(item){
          //     if(item.multimedia.length === 5) {
          //       return true;
          //   }
          // }

        var filteredList  = newYorkTimes.filter(function(item){return item.multimedia.length}).slice(0,12);
            
        console.log('hello, im the new object', filteredList);

        $.each(filteredList, function(index,value){
            topStoryItems += '<li>';
            topStoryItems += '<img src ="' + value.multimedia[4].url + '" />';
            topStoryItems += '<p>' + value.abstract + '</p>';
            topStoryItems += '</li>';  
        });

        console.log(topStoryItems);

        $('.top-story').empty();
        $('.top-story').append(topStoryItems);
          
        }).fail(function() {
          $('.top-story').append('Sorry, please try again!');
          
        }). always(function(){
          // this code will run regardless of success or failure
        });

          
      });

  });
