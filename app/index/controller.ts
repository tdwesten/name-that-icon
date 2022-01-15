import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { trackedNested } from 'ember-tracked-nested';
import IconService from '../services/icon-service';
import countapi from 'countapi-js';
import ENV from '../config/environment';

export default class IndexController extends Controller {
  @service declare iconService: IconService;
  @trackedNested public declare icons: IconDefinition[];

  constructor(owner: object) {
    super(owner);

    this.icons = this.iconService.getMultipleRandomIcons(108);

    const namespace = `namethaticon_${ENV.environment}`;

    if (document.location.pathname === '/') {
      countapi.hit(namespace, 'visits');
    }
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    index: IndexController;
  }
}
