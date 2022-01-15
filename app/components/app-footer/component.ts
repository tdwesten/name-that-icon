import Component from '@glimmer/component';
import countapi from 'countapi-js';
import config from 'name-that-icon/config/environment';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AppFooterArgs {}

export default class AppFooter extends Component<AppFooterArgs> {
  constructor(owner: unknown, args: AppFooterArgs) {
    super(owner, args);

    countapi.hit(`namethaticon.com__${config.environment}`, 'visits');
  }
}
