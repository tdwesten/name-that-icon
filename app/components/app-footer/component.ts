import Component from '@glimmer/component';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AppFooterArgs {}

export default class AppFooter extends Component<AppFooterArgs> {
  constructor(owner: unknown, args: AppFooterArgs) {
    super(owner, args);
  }
}
