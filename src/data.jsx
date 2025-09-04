import devlens from './assets/logo-devlens.svg';
import stylespy from './assets/logo-style-spy.svg';
import speedboost from './assets/logo-speed-boost.svg';
import jsonwizard from './assets/logo-json-wizard.svg';
import viewportbuddy from './assets/logo-viewport-buddy.svg';
import tabmaster from './assets/logo-tab-master-pro.svg';
import markup from './assets/logo-markup-notes.svg';
import grid from './assets/logo-grid-guides.svg';
import palette from './assets/logo-palette-picker.svg';
import link from './assets/logo-link-checker.svg';
import dom from './assets/logo-dom-snapshot.svg';
import console from './assets/logo-console-plus.svg';

export const data = [
    {
        logo: devlens,
        title: 'DevLens',
        description:
            'Quickly inspect page layouts and visualize element boundaries.',
        isActive: true,
        id: 1,
    },
    {
        logo: stylespy,
        title: 'StyleSpy',
        description: 'Instantly analyze and copy CSS from any webpage element.',
        isActive: true,
        id: 2,
    },
    {
        logo: speedboost,
        title: 'SpeedBoost',
        description:
            'Optimizes browser resource usage to accelerate page loading.',
        isActive: false,
        id: 3,
    },
    {
        logo: jsonwizard,
        title: 'JSONWizard',
        description:
            'Formats, validates, and prettifies JSON responses in-browser.',
        isActive: true,
        id: 4,
    },
    {
        logo: tabmaster,
        title: 'TabMaster Pro',
        description: 'Organizes browser tabs into groups and sessions.',
        isActive: true,
        id: 5,
    },
    {
        logo: viewportbuddy,
        title: 'ViewportBuddy',
        description:
            'Simulates various screen resolutions directly within the browser.',
        isActive: false,
        id: 6,
    },
    {
        logo: markup,
        title: 'Markup Notes',
        description:
            'Enables annotation and notes directly onto webpages for collaborative debugging.',
        isActive: true,
        id: 7,
    },
    {
        logo: grid,
        title: 'GridGuides',
        description:
            'Overlay customizable grids and alignment guides on any webpage.',
        isActive: false,
        id: 8,
    },
    {
        logo: palette,
        title: 'Palette Picker',
        description: 'Instantly extracts color palettes from any webpage.',
        isActive: true,
        id: 9,
    },
    {
        logo: link,
        title: 'LinkChecker',
        description: 'Scans and highlights broken links on any page.',
        isActive: true,
        id: 10,
    },
    {
        logo: dom,
        title: 'DOM Snapshot',
        description: 'Capture and export DOM structures quickly.',
        isActive: false,
        id: 11,
    },
    {
        logo: console,
        title: 'ConsolePlus',
        description:
            'Enhanced developer console with advanced filtering and logging.',
        isActive: true,
        id: 12,
    },
];
