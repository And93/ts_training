import {Events} from './pages/Events';
import {Themes} from './pages/Themes';
import {Page} from './pages/Page';
import {News} from './pages/News';

export class World {

    getPage(name: 'news' | 'News'): News
    getPage(name: 'themes' | 'Themes'): Themes
    getPage(name: 'events' | 'Events'): Events
    getPage(name: 'base' | 'Base'): Page
    getPage(name: 'base' | 'Base' | 'events' | 'Events' | 'themes' | 'Themes' | 'news' | 'News') {
        switch (name) {
            case 'base':
            case 'Base':
                return this.getClassInstance(Page);
            case 'events':
            case 'Events':
                return this.getClassInstance(Events);
            case 'themes':
            case 'Themes':
                return this.getClassInstance(Themes);
            case 'News':
            case 'news':
                return this.getClassInstance(News);
        }
    }

    public getPage_v2<T>(page: { new(): T; }): T {
        return new page();
    }

    private getClassInstance<T extends Page>(page: new () => T): T {
        return new page();
    }
}

const world = new World();

world.getPage('events').foo(); // ok
world.getPage('events').moo(); // ok
world.getPage('Themes').foo(); // ok

world.getPage('news').foo(); // Property 'foo' does not exist on type 'News'.ts


world.getPage_v2(Themes).foo(); // ok

