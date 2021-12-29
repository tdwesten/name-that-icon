import EmberRouter from '@ember/routing/router';
import config from 'name-that-icon/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('game', { path: 'game/:id/' }, function () {});
  this.route('scoreboard');
  this.route('credits');
});
