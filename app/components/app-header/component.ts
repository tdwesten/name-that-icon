import { inject as service } from '@ember/service';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import Component from '@glimmer/component';
import IconService from '../../services/icon-service';
import { tracked } from '@glimmer/tracking';

interface AppHeaderArgs {
  title: string;
}

export default class AppHeader extends Component<AppHeaderArgs> {
  @service public declare iconService: IconService;
  @tracked private declare randomIcon: IconDefinition;

  constructor(owner: unknown, args: AppHeaderArgs) {
    super(owner, args);

    this.setRandomIcon();
  }

  get getRandomIcon() {
    return this.randomIcon;
  }

  setRandomIcon() {
    setInterval(() => {
      this.randomIcon = this.iconService.getRandomIcon();
    }, 350);
  }
}
