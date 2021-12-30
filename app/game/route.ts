import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import DS from 'ember-data';
import Game from '../models/game';

export default class GameRoute extends Route {
  @service declare store: DS.Store;

  model(params: any) {
    return this.store
      .findRecord(Game.modelName, params.id)
      .then((game) => {
        return game;
      })
      .catch(() => {
        this.transitionTo('index');
        return;
      });
  }

  setupController(controller: any, model: unknown): void {
    this._super(...arguments);

    controller.set('model', model);
  }
}
