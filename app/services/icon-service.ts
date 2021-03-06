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

    this.iconList = this.iconList.filter(
      (icon) => icon.iconName !== 'font-awesome'
    );
  }

  getRandomIcon(): IconList.IconDefinition {
    return this.iconList[
      this.randomNumberBetween(1, this.iconList.length)
    ] as IconList.IconDefinition;
  }

  randomNumberBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
