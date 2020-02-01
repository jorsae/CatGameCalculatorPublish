var _0x1f0f = [
    'legendary',
    'hidden',
    'raw',
    'common'
];
(function (_0x2d69fb, _0xdb5cf0) {
    var _0x590869 = function (_0x51c817) {
        while (--_0x51c817) {
            _0x2d69fb['push'](_0x2d69fb['shift']());
        }
    };
    _0x590869(++_0xdb5cf0);
}(_0x1f0f, 0xb1));
var _0x4e48 = function (_0x5d4fa3, _0x322bae) {
    _0x5d4fa3 = _0x5d4fa3 - 0x0;
    var _0x5407ab = _0x1f0f[_0x5d4fa3];
    return _0x5407ab;
};
var craftingRecipes = new Map();
const outputRows = 0x4;
var currentCraft = new Map();
const rarity = {
    'HIDDEN': _0x4e48('0x0'),
    'RAW': _0x4e48('0x1'),
    'COMMON': _0x4e48('0x2'),
    'RARE': 'rare',
    'EPIC': 'epic',
    'LEGENDARY': _0x4e48('0x3')
};