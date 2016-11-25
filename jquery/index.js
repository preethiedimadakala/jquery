var imgNotFound;
function searchcontent(){
	var input=$("#search_content").val();
	$('.result').empty( );
	if(input==""){
				$('.result').append( '<div class="alert alert-danger">' + 'Movie name enter chei bey' +'</div>');
			}
	else{
	$.ajax({
		type:'GET',
		url: 'http://www.omdbapi.com/?s='+input,
		dataType:'json',
		cache:false,
		success: function(data){
			if(data.Error){
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
        error: function(err){
            console.log(err);
        }
    });
}
}