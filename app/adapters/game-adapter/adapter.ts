// eslint-disable-next-line ember/use-ember-data-rfc-395-imports
import Adapter from '@ember-data/adapter';
import { v4 } from 'uuid';

export default class GameAdapter extends Adapter {
  public generateIdForRecord(): string {
    return v4();
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your adapters.
declare module 'ember-data/types/registries/adapter' {
  // tslint:disable-next-line: interface-name
  export default interface AdapterRegistry {
    'game-adapter': GameAdapter;
  }
}
