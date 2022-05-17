"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shoesall = void 0;
exports.shoesall = [];
function allshoes() {
    return exports.shoesall;
}
function search(brand) {
    let show = [];
    for (const shoes of exports.shoesall) {
        if (shoes.brand === brand) {
            show.push(shoes);
        }
    }
    return show;
}
function addShoes(shoes) {
    exports.shoesall.push(shoes);
}
function remove(id) {
    let idfromshoes = exports.shoesall.findIndex(shoes => shoes.id === id);
    exports.shoesall.splice(idfromshoes, 1);
}
exports.default = {
    allshoes,
    search,
    addShoes,
    remove
};
