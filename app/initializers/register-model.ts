import Application from '@ember/application';
import Game from '../models/game';

export function initialize(application: Application): void {
  application.register('object:model', Game);
}

export default {
  initialize,
};
