import Component from '@glimmer/component';

interface ButtonArgs {
  onClick: CallableFunction;
}

// eslint-disable-next-line ember/no-empty-glimmer-component-classes
export default class Button extends Component<ButtonArgs> {}
