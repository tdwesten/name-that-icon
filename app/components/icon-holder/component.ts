import Component from '@glimmer/component';

interface IconHolderArgs {
  answer: true;
  hideError: true;
}

export default class IconHolder extends Component<IconHolderArgs> {
  get bgColorClass() {
    return this.args.hideError ? 'bg-gray-500' : 'bg--500';
  }
}
