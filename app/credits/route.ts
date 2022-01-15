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
      gameHighscore: await countapi
        .get(this.namespace, 'gameHighscore')
        .then((v) => v.value),
    };
  }
}
