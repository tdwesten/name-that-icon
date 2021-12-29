import Route from '@ember/routing/route';
import Game from '../models/game';
import { inject as service } from '@ember/service';
import DS from 'ember-data';

export default class Index extends Route {
  @service declare store: DS.Store;

  model() {
    return {
      game: this.store.createRecord(Game.modelName).save(),
    };
  }
}
