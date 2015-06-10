$(document).ready(function(){

	var buildTemplate = _.template($('.template').html());

	var imageList = new ImageCollection();
	imageList.fetch();


	$('#form-info').submit(function(e){
		e.preventDefault();
	
		var newImage = new ImageModel();

			newImage.set({
				image:    	$('#input-img').val(),
				caption: 	$('#input-caption').val()
			});
			
		
			 if(newImage.isValid()){
			 	console.log(newImage.isValid());
			 	imageList.add(newImage);
				newImage.save();
				
			 }

			 $('#input-img').val('');
			$('#input-caption').val('');
	});

	imageList.on('add', function(newModel){
		
			var string = buildTemplate(newModel.attributes);
			$('.inner').append(string);

	});

	$('#cancel-btn').click(function(e){
		e.preventDefault(e);
		$('#input-img').val('');
		$('#input-caption').val('');
	})


	$('.circle').click(function(e){
		e.preventDefault();
		$('#form-info').slideToggle('slow');

	})


});