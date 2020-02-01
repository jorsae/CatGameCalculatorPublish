var _0x4d9b = [
    'epic',
    'legendary',
    'raw',
    'common',
    'rare'
];
(function (_0x48c0ef, _0x4d2073) {
    var _0x4aeeb8 = function (_0xfbab5c) {
        while (--_0xfbab5c) {
            _0x48c0ef['push'](_0x48c0ef['shift']());
        }
    };
    _0x4aeeb8(++_0x4d2073);
}(_0x4d9b, 0xbb));
var _0x5551 = function (_0x42d71e, _0x13e806) {
    _0x42d71e = _0x42d71e - 0x0;
    var _0x4fc00b = _0x4d9b[_0x42d71e];
    return _0x4fc00b;
};
var craftingRecipes = new Map();
const outputRows = 0x4;
var currentCraft = new Map();
const rarity = {
    'HIDDEN': 'hidden',
    'RAW': _0x5551('0x0'),
    'COMMON': _0x5551('0x1'),
    'RARE': _0x5551('0x2'),
    'EPIC': _0x5551('0x3'),
    'LEGENDARY': _0x5551('0x4')
};