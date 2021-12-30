import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
// eslint-disable-next-line ember/use-ember-data-rfc-395-imports
import DS from 'ember-data';
import Game from '../models/game';

export default class Index extends Route {
  @service declare store: DS.Store;

  model() {
    return {
      game: this.store.createRecord(Game.modelName).save(),
    };
  }
}
