var ImageModel = Backbone.Model.extend({
		defaults: {
			image:  null,
			caption: null,
		},
		urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/mona-images',
		idAttribute: '_id',
		validate: function(attr, options){
			
			if(_.isEmpty(attr.caption) || _.isEmpty(attr.image)){
				return true
			}
			else if(attr.image.indexOf("https://") || attr.image.indexOf("http://")){
				return false
			}			
		}
})