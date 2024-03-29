import { Settings } from './classes/Settings.mjs';
import { RoofVisionFade, MODULENAME } from './classes/RoofVisionFade.mjs';

console.log(`${MODULENAME} | Module loaded`);

Hooks.once('i18nInit', () => {
    Settings.registerSettings();
});

Hooks.on('ready', () => {
    // only enable if the user is the GM. players do not have access to update the tiles
    if(game.user.isGM) {
        RoofVisionFade.addRoofVisionFadeModule();
    }
});