var _0x1f32 = [
    'legendary',
    'hidden',
    'common',
    'rare',
    'epic'
];
(function (_0x1a9dfc, _0x1d9d7d) {
    var _0x3a38bd = function (_0x1ba211) {
        while (--_0x1ba211) {
            _0x1a9dfc['push'](_0x1a9dfc['shift']());
        }
    };
    _0x3a38bd(++_0x1d9d7d);
}(_0x1f32, 0x1be));
var _0x7bb8 = function (_0x3c60b1, _0x50aeca) {
    _0x3c60b1 = _0x3c60b1 - 0x0;
    var _0x3d4653 = _0x1f32[_0x3c60b1];
    return _0x3d4653;
};
var craftingRecipes = new Map();
const outputRows = 0x4;
var currentCraft = new Map();
const rarity = {
    'HIDDEN': _0x7bb8('0x0'),
    'RAW': 'raw',
    'COMMON': _0x7bb8('0x1'),
    'RARE': _0x7bb8('0x2'),
    'EPIC': _0x7bb8('0x3'),
    'LEGENDARY': _0x7bb8('0x4')
};