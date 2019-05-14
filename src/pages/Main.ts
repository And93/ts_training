export interface IPage {
    name: string
}

/**
 * Events
 */
export interface IEvents extends IPage {
    name: 'Events'
}

export module IEvents {
    export const name: string = 'Events'
}

/**
 * Themes
 */
export interface IThemes extends IPage {
    name: 'Themes'
}

export module IThemes {
    export const name: string = 'Themes'
}

/**
 * News
 */
export interface INews extends IPage {
    name: 'News'
}

export module INews {
    export const name: string = 'News'
}

