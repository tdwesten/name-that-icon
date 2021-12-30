import Controller from '@ember/controller';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
// eslint-disable-next-line ember/use-ember-data-rfc-395-imports
import DS from 'ember-data';
import Game from '../models/game';

interface GameRouteParams {
  id: string;
}
export default class GameRoute extends Route {
  @service declare store: DS.Store;

  model(params: GameRouteParams) {
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

  setupController(controller: Controller, model: unknown): void {
    controller.set('model', model);
  }
}
