import {Events} from "./pages/Events";
import {Themes} from "./pages/Themes";
import {News} from "./pages/News";
import {Page} from "./pages/Page";

import {IEvents, INews, IThemes} from './pages/Main';

const events = new Events("events");
const themes = new Themes("themes");
const news = new News("news");

export class World {
    public getPage(name: string): Page {
        if (name === IEvents.name) {
            return events;
        } else if (name === IThemes.name) {
            return themes;
        } else if (name === INews.name) {
            return news;
        }
    }
}

const world = new World();

console.log(world.getPage('Themes').foo());
