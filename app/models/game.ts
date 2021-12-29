import Model, { attr } from '@ember-data/model';

export default class Game extends Model {
  public static modelName = 'game';

  @attr('number', { defaultValue: 0 }) public declare score: number;
  @attr('number', { defaultValue: 1 }) public declare round: number;
  @attr('boolean', { defaultValue: false }) public declare isStarted: Boolean;
  @attr('boolean', { defaultValue: false }) public declare isFinished: Boolean;

  addPoints(amount: number) {
    this.set('score', this.score + amount);
  }

  addRound() {
    this.set('round', this.round + 1);
  }

  get gameRounds(): number {
    return 15;
  }

  get gameRoundTime(): number {
    return 10;
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    game: Game;
  }
}
