import EmberRouter from '@ember/routing/router';
import config from 'ember-thermos/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('dashboard');
});
