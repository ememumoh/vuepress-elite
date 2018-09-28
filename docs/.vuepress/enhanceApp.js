export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
	router.beforeEach((to, from, next) => {
		var auth = localStorage.getItem('p');
		if (auth) {
  			// console.log("all is good");
  			next();
		} else {
  			// console.log("redirect to login");
			window.location.href = '/login.html';
		}
	})
}