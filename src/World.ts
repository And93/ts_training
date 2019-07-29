import {Events} from './pages/Events';
import {Themes} from './pages/Themes';
import {Page} from './pages/Page';
import {News} from './pages/News';

export class World {
    public getPage<T extends Page>(page: new (name: string) => T): T {

        const pages: { [key: string]: any } = {
            events: Events,
            themes: Themes,
            'news': News
        };

        const _page = pages[page.name.toLowerCase()];
        return new _page(page.name);

        // return new page(page.name);
    }

    public gotPage<T>(page: { new(name: string): T; }): T {
        return new page(page.name);
    }
}

const world = new World();

world.getPage(Themes).foo();
world.gotPage(Events).foo();

console.log(world.getPage(News).constructor.name);

