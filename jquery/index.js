var imgNotFound;
function searchcontent(){
	var input=$("#search_content").val();
<<<<<<< HEAD
	$('.result').empty();
	// Error msg
	if(input==""){
				$('.error').html( '<div id="danger" class="alert alert-danger">' + 'Movie name enter chei bey' + '<img src="img/rename.jpg" alt="image" />' +  '</div>');
			}
	else{
		// Start of ajax section
=======
	$('.result').empty( );
	if(input==""){
				$('.result').append( '<div class="alert alert-danger">' + 'Movie name enter chei bey' +'</div>');
			}
	else{
>>>>>>> 12839c10197c774fd12560320c769416dbe17218
	$.ajax({
		type:'GET',
		url: 'http://www.omdbapi.com/?s='+input,
		dataType:'json',
		cache:false,
		success: function(data){
			if(data.Error){
<<<<<<< HEAD
				$('.error').html('<div id="danger1" class="alert alert-danger"><img src="img/oops.jpg" alt="image" /> Movie <strong>' +input+ '</strong> Not found</div>');
			}
			console.log(data);
			$.each(data.Search, function(key, value){
                if(value.Poster == 'N/A') { imgNotFound = "Image Not Found"; }
                 var container = $('.result');
                 // sorting of data
                 data.Search.sort(function(obj1, obj2){
                   return obj2.Year-obj1.Year;
                   // End of sorting
               });
                 var options = {
                    dataSource: data.Search,
                    pageSize:4,
                    callback: function (response, pagination) {
                        var moviesResponse = '';
                        $.each(response, function (index, item) {
                            moviesResponse += '<div id="welll" class="well">' +
		                                        '<div id="roww" class="row">' +
		                                            '<div class="col-md-6">' +
		                                                '<img class="thumbnail" src='+item.Poster+' alt="'+imgNotFound+'"/>' +
		                                            '</div>' +
		                                            '<div class="col-md-6">' +
		                                                '<h4>'+item.Title+'</h4>' +
		                                                '<ul class="list-group">' +
		                                                    '<li class="list-group-item">Year Released: '+item.Year+'</li>' +
		                                                    '<li class="list-group-item">IMDB ID: '+item.imdbID+'</li>' +
		                                                '</ul>' +
		                                                '<a class="btn btn-primary" href=http://www.imdb.com/title/'+item.imdbID+' target="_blank">   View on IMDB</a>' +
		                                            '</div>' +
		                                        '</div>' +
		                                    '</div>';
            			});
                        $('.result').prev().html(moviesResponse);
                    }
                }
                // pagination part
                $('.result').pagination(options);
                // End of pagination part
            });
        },
=======
				$('.result').append('<div class="alert alert-danger"> Movie <strong>' +input+ '</strong> Not found' + '</div>');
				}
			
			$.each(data.Search, function(key, value){
                if(value.Poster == 'N/A') { imgNotFound = "Image Not Found"; }
                $('.result').append('<div class="well">' +
                                        '<div class="row">' +
                                            '<div class="col-md-4">' +
                                                '<img class="thumbnail" src='+value.Poster+' alt="'+imgNotFound+'"/>' +
                                            '</div>' +
                                            '<div class="col-md-8">' +
                                                '<h4>'+value.Title+'</h4>' +
                                                '<ul class="list-group">' +
                                                    '<li class="list-group-item">Year Released: '+value.Year+'</li>' +
                                                    '<li class="list-group-item">IMDB ID: '+value.imdbID+'</li>' +
                                                '</ul>' +
                                                '<a class="btn btn-primary" href=http://www.imdb.com/title/' +value.imdbID+'>View on IMDB</a>' +
                                            '</div>' +
                                        '</div>' +
                                    '</div>');
            });
        }.bind(this),
>>>>>>> 12839c10197c774fd12560320c769416dbe17218
        error: function(err){
            console.log(err);
        }
    });
}
<<<<<<< HEAD
}

=======
}
>>>>>>> 12839c10197c774fd12560320c769416dbe17218
