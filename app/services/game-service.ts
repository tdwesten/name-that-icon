import Service, { inject as service } from '@ember/service';
import GameRound from '../dto/game-round.dto';
import IconService from '../services/icon-service';

export default class GameService extends Service {
  @service('icon-service') private declare iconService: IconService;
  constructor(owner: any) {
    super(owner);
  }

  newRound(): GameRound {
    const icon = this.iconService.getRandomIcon();

    return new GameRound(icon, this.getAnswers(icon));
  }

  getAnswers(theRightAnswer: any): any[] {
    let anwsers = [
      theRightAnswer,
      this.iconService.getRandomIcon(),
      this.iconService.getRandomIcon(),
      this.iconService.getRandomIcon(),
    ];

    return this.shuffleArray(anwsers);
  }

  shuffleArray(arr: any[]): any[] {
    return (
      Array(arr.length)
        .fill(null)
        .map((_, i) => [Math.random(), i])
        // @ts-ignore
        .sort(([a], [b]) => a - b)
        // @ts-ignore
        .map(([, i]) => arr[i])
    );
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    'game-service': GameService;
  }
}
