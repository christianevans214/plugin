var React = require('react');
var ReactDOM = require('react-dom')

var App = require('./components/app');
var Splash = require('./components/Splash/Splash');
var About = require('./components/About/About');
var Login = require('./components/Login/Login');

var Router = require('react-router');
var Renderer = Router.Router;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var DefaultRoute = Router.DefaultRoute;

var routes = (
	<Route path = "/" handler={App}>
		<DefaultRoute handler = {Splash} />
		<Route name ="/about" handler = {About} />
		<Route name="/login" handler = {Login} />
	</Route>
)

Router.run(routes, Router.HistoryLocation, function(Handler){
	React.render(<Handler />, document.getElementById('app-container'))
})

