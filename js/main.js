$(function(){


    $('.loader').hide()

    $('#section').change(function(){

      var topStoryItems = '';
      var homeSection = $('#section option').filter(':selected').val();  
      var url = 'https://api.nytimes.com/svc/topstories/v2/' + homeSection+ '.json'; 
          url += '?' + $.param({
          'api-key': '68f6f7797d58429bad830b72c33c7025'
        });
      
        $('.loader').show();
        $('.site-header').addClass('moveToTop');
        $('.nyt-logo').addClass('nyt-logo-small');

          $.ajax({
            url: url,
            method: 'GET',
          }).done(function(data) {

            $('.loader').hide()

            var newYorkTimes = data.results;
            var filteredList  = newYorkTimes.filter(function(item){return item.multimedia.length}).slice(0,12);

              
          $.each(filteredList, function(index,value){
              topStoryItems += '<li class="article-list">';
              topStoryItems += '<a href="' + value.url + '">'; 
              topStoryItems += '<div class="innerStoryItems" style="background-image:url(' + value.multimedia[4].url + ')" >';
              topStoryItems += '<p class="textbox">' + value.abstract + '</p> </div> </a>';
              topStoryItems += '</li>';  
          });


              $('.top-story').empty();
              $('.top-story').append(topStoryItems);
                
              }).fail(function() {
                $('.top-story').append('Sorry, please try again!');
                
              }). always(function(){
                $('.loader').hide();
              });

          
      });

  });
