import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import DS from 'ember-data';
import Game from '../models/game';

export default class GameRoute extends Route {
  @service declare store: DS.Store;

  model(params: any) {
    const game = this.store.findRecord(Game.modelName, params.id);

    if (!game) {
      this.transitionTo('index');
    }

    return game;
  }

  setupController(controller: any, model: unknown): void {
    this._super(...arguments);

    controller.set('model', model);
  }
}
