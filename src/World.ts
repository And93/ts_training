import {Events} from "src/pages/Events";
import {Themes} from "src/pages/Themes";
import {News} from "src/pages/News";

export class World {
    public getPage(name: string) {
        if (name === "events") {
            return new Events("events");
        } else if (name === "themes") {
            return new Themes("themes");
        } else if (name === 'news') {
            return new News("news");
        }
    }
}

const world = new World();

function get(name: string) {
    return console.log(world.getPage(name).foo());
}

get('asd');
