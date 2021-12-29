import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { trackedNested } from 'ember-tracked-nested';
import IconService from '../services/icon-service';

export default class IndexController extends Controller {
  @service declare iconService: IconService;
  @trackedNested public declare icons: IconDefinition[];

  constructor(owner: any) {
    super(owner);

    this.icons = this.iconService.getMultipleRandomIcons(108);
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    index: IndexController;
  }
}
