import Component from '@glimmer/component';

interface ButtonArgs {
  onClick: CallableFunction;
}

export default class Button extends Component<ButtonArgs> {}
