import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import metisFallbackRoute from 'metis/utils/fallback-route';
import { classRoute } from 'metis/utils/class-route';
// import GCR from 'metis/utils/gen-class-route';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('sparql');
  this.route("view", function() {}),
  metisFallbackRoute(this);

  this.route('legaal', function() {
    this.route('toegankelijkheidsverklaring');
    this.route('disclaimer');
    this.route('cookieverklaring');
  });

  this.route('doc', function() {
    this.route('person');
    this.route('organisation', function() {
      this.route('mandatories');
    });
  });

  this.route('person', function() {
    this.route('mandates');
  });
});