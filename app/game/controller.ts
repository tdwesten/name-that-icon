import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import {
  faCheck,
  faHourglassStart,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { tracked } from '@glimmer/tracking';
import { trackedNested } from 'ember-tracked-nested';
import GameRound from '../dto/game-round.dto';
import Game from '../models/game';
import GameService from '../services/game-service';
import IconService from '../services/icon-service';

export default class GameController extends Controller.extend({}) {
  @service('icon-service') private declare iconService: IconService;
  @service('game-service') private declare gameService: GameService;
  @trackedNested private declare round: GameRound;
  @tracked public declare startTime: number;
  @tracked public time = 0;
  @tracked public subIcon = faHourglassStart;
  @tracked public declare correctAnswer: boolean;
  @tracked public answerGiven = false;
  public countDown: any;
  @tracked public countDownTime = 3;
  public roundCountDown: any;
  @tracked public roundCountDownTime = 10;

  constructor(owner: any) {
    super(owner);

    this.startNewRound();
  }

  get subIconBackgroundClass() {
    if (!this.answerGiven) {
      return 'bg-gray-200 animate-ping';
    } else {
      return this.correctAnswer ? 'bg-green-400' : 'bg-orange-400';
    }
  }

  get subIconBgClass() {
    if (!this.answerGiven) {
      return 'bg-gray-200 text-gray-700';
    } else {
      return this.correctAnswer ? 'bg-green-400 text-white' : 'bg-orange-400';
    }
  }

  get bgColorClass() {
    if (!this.answerGiven) {
      return 'bg-gray-600';
    } else {
      return this.correctAnswer ? 'bg-green-800' : 'bg-orange-800';
    }
  }

  @action
  selectAnswer(game: Game, answer: IconDefinition) {
    this.answerGiven = true;
    this.correctAnswer = this.round.isRightAnwser(answer);
    this.subIcon = faTimes;

    clearInterval(this.roundCountDown);

    if (this.correctAnswer) {
      this.subIcon = faCheck;
      this.calucateScore();
      const score = this.time;
      game.addPoints(score);
    }

    this.startCountDown();
  }

  startCountDown() {
    this.countDown = setInterval(() => {
      if (this.countDownTime === 1) {
        this.startNewRound();
        clearInterval(this.countDown);
      } else {
        this.countDownTime = this.countDownTime - 1;
      }
    }, 1000);
  }

  startRoundCountDown() {
    this.roundCountDown = setInterval(() => {
      if (this.roundCountDownTime === 1) {
        this.roundFailed();
        clearInterval(this.roundCountDown);
      } else {
        this.roundCountDownTime = this.roundCountDownTime - 1;
      }
    }, 1000);
  }

  startTimer() {
    const now = new Date();
    this.startTime = now.getTime();
  }

  roundFailed() {
    this.answerGiven = true;
    this.correctAnswer = false;
    this.roundCountDownTime = 10;

    this.startCountDown();
  }

  calucateScore() {
    const now = new Date();
    this.time = Math.floor((now.getTime() - this.startTime) / 100);
  }

  startNewRound() {
    this.answerGiven = false;
    this.correctAnswer = false;
    this.countDownTime = 3;
    this.roundCountDownTime = 10;

    this.startTimer();
    this.startRoundCountDown();
    this.round = this.gameService.newRound();

    if (this.model) {
      this.model.addRound();
    }
  }
}
