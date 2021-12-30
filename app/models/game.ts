import Model, { attr } from '@ember-data/model';

export default class Game extends Model {
  public static modelName = 'game';
  public static gameRoundTime = 10;
  public static maxGameRounds = 10;
  public static countdownToNextRound = 3;

  @attr('number', { defaultValue: 0 }) public declare score: number;
  @attr('number', { defaultValue: 1 }) public declare round: number;

  addPoints(amount: number) {
    this.score = this.score + amount;
  }

  addRound() {
    this.round = this.round + 1;
    this.save();
  }

  get gameEnded() {
    return this.round === Game.maxGameRounds;
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    game: Game;
  }
}
