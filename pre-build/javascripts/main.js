var React = require('react');

var App = require('./components/app');
var Splash = require('./components/Splash/Splash');
var About = require('./components/About/About');

var Router = require('react-router');
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var DefaultRoute = Router.DefaultRoute;

var routes = (
	<Route path = "/" handler={App}>
		<Route name = "/" handler = {Splash} />
		<Route name ="/about" handler = {About} />
	</Route>
)

console.log(require('react-router'));
Router.run(routes, Router.HistoryLocation, function(Handler){
	React.render(<Handler />, document.getElementById('app-container'))
})
