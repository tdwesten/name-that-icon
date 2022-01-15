import Component from '@glimmer/component';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

interface TweetButtonArgs {
  score: number;
}

// eslint-disable-next-line ember/no-empty-glimmer-component-classes
export default class TweetButton extends Component<TweetButtonArgs> {
  public twitterIcon = faTwitter;

  tweet(score: number) {
    const text = `I just played A little game to test my knowledge of Font Awesome Icon names and got a total score of ${score}! Can you beat me? ${encodeURIComponent(
      '#namethaticon #fontawesome #icons #namingishard'
    )}`;

    window.location.href = `https://twitter.com/intent/tweet?text=${text}&url=https://namethaticon.com`;
  }
}
