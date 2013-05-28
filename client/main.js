Meteor.startup(function(){
	Router.addRoute('/', 'helpTemplate');
	Router.addRoute('/home', 'homeTemplate');
	Router.addRoute('/user/:username', 'profileTemplate');
	Router.addRoute('/contact', 'contactTemplate');

	Router.run();
});
