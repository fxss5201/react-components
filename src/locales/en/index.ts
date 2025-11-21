// System related, do not modify
import system from './system.json'
import defaultJson from './default.json'
import menu from './menu.json'

// Language is split into modules, each module corresponds to a json file, and each json file contains unique keys
// default.json contains global keys, while other module json files contain module-level keys
export default { ...defaultJson, menu, system }
