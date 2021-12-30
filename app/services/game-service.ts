import Service, { inject as service } from '@ember/service';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import GameRound from '../dto/game-round.dto';
import IconService from '../services/icon-service';
import arrayShuffle from 'array-shuffle';

export default class GameService extends Service {
  @service('icon-service') private declare iconService: IconService;
  constructor(owner: object) {
    super(owner);
  }

  newRound(): GameRound {
    const icon = this.iconService.getRandomIcon();

    return new GameRound(icon, this.getAnswers(icon));
  }

  getAnswers(theRightAnswer: IconDefinition): IconDefinition[] {
    const anwsers = [
      theRightAnswer,
      this.iconService.getRandomIcon(),
      this.iconService.getRandomIcon(),
      this.iconService.getRandomIcon(),
    ];

    return arrayShuffle(anwsers);
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    'game-service': GameService;
  }
}
