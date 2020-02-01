var _0x2abb = [
    'common',
    'epic',
    'legendary',
    'raw'
];
(function (_0x572b58, _0x12f7e4) {
    var _0x23dc4e = function (_0x5acc1b) {
        while (--_0x5acc1b) {
            _0x572b58['push'](_0x572b58['shift']());
        }
    };
    _0x23dc4e(++_0x12f7e4);
}(_0x2abb, 0x1ab));
var _0x1f9d = function (_0x23ef95, _0x190d82) {
    _0x23ef95 = _0x23ef95 - 0x0;
    var _0x2a5e02 = _0x2abb[_0x23ef95];
    return _0x2a5e02;
};
var craftingRecipes = new Map();
const outputRows = 0x4;
var currentCraft = new Map();
const rarity = {
    'HIDDEN': 'hidden',
    'RAW': _0x1f9d('0x0'),
    'COMMON': _0x1f9d('0x1'),
    'RARE': 'rare',
    'EPIC': _0x1f9d('0x2'),
    'LEGENDARY': _0x1f9d('0x3')
};