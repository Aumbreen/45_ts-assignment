"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CarInfo(manufacturer, modelName, ...extraoption) {
    const info = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraoption)
    };
    return info;
}
;
let answer = CarInfo('caltas', 'civic', { color: 'black' }, { feacture: ['navigation', 'power window'] });
console.log(answer);
