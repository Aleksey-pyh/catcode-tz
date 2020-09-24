  $(window).load(function(){
   
    var suggest_count = 0;
	$("#search-input").keyup(function(){
		
            if($(this).val().length>2){
            query=$(this).val();
            // console.log(query)
            var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
            var token = "2409d811b025dd03ebad99fc239a52bff31e66ab";

                $.ajax(url,{
                type: "POST",
                contentType: "application/json",
                headers: {
                "Authorization": "Token " + token
                },
                data: JSON.stringify({query:query}),
                success: function(suggestions) 
                
                {
                    for (var key in suggestions) {
                        var data = suggestions[key];
                        $("#search_advice_wrapper").html("").show();
                        suggest_count = suggestions[key].length;
                        console.log(suggest_count);
                      for( var i in data){
                         
                          $('#search_advice_wrapper').append('<div class="advice_variant">'+data[i].value+'</div>');

                      }
                      }

                }
            });
         }
    });
    })
    


