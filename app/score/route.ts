import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import DS from 'ember-data';
import Game from '../models/game';
import IconService from '../services/icon-service';

export default class ScoreRoute extends Route {
  @service declare store: DS.Store;
  @service declare iconService: IconService;

  model(params: any) {
    return {
      game: this.store.findRecord(Game.modelName, params.id),
      icons: this.iconService.getMultipleRandomIcons(108),
      newGame: this.store.createRecord(Game.modelName),
    };
  }
}
