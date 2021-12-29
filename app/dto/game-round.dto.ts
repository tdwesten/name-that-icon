import { IconDefinition } from '@fortawesome/free-regular-svg-icons';

export default class GameRound {
  icon: IconDefinition;
  answers: IconDefinition[];

  constructor(icon: IconDefinition, answers: IconDefinition[]) {
    this.icon = icon;
    this.answers = answers;
  }

  isRightAnwser(answer: IconDefinition): boolean {
    return this.icon.iconName === answer.iconName;
  }
}
