import Route from '@ember/routing/route';
import countapi from 'countapi-js';
import ENV from '../config/environment';

export default class Credits extends Route {
  namespace = `namethaticon_${ENV.environment}`;
  async model() {
    return {
      visits: await countapi.get(this.namespace, 'visits').then((v) => v.value),
      gamesPlayed: await countapi
        .get(this.namespace, 'gamesPlayed')
        .then((v) => v.value),
      highscore: await countapi
        .get(this.namespace, 'highscore')
        .then((v) => v.value),
    };
  }
}
