import Service from '@ember/service';
import * as IconList from '@fortawesome/free-regular-svg-icons';
import * as SolidIconList from '@fortawesome/free-solid-svg-icons';

export default class IconService extends Service {
  private declare iconList: IconList.IconDefinition[];

  constructor() {
    super();

    this.setIconList();
  }

  setIconList() {
    this.iconList = Object.values(IconList).map((icon) => {
      return icon as IconList.IconDefinition;
    });

    this.iconList = [
      ...this.iconList,
      ...Object.values(SolidIconList).map((icon) => {
        return icon as IconList.IconDefinition;
      }),
    ];
  }

  getRandomIcon(): IconList.IconDefinition {
    return this.iconList[
      Math.floor(Math.random() * this.iconList.length)
    ] as IconList.IconDefinition;
  }

  getMultipleRandomIcons(amount = 1): IconList.IconDefinition[] {
    const icons: IconList.IconDefinition[] = [];

    for (let index = 0; index < amount; index++) {
      icons[index] = this.getRandomIcon();
    }

    return icons;
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    'icon-service': IconService;
  }
}
