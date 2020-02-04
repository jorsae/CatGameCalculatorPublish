var _0x2900 = ['common'];
(function (_0x3d5d44, _0x58a93a) {
    var _0x42ac62 = function (_0x3faa37) {
        while (--_0x3faa37) {
            _0x3d5d44['push'](_0x3d5d44['shift']());
        }
    };
    _0x42ac62(++_0x58a93a);
}(_0x2900, 0x1df));
var _0x4185 = function (_0x1f7178, _0x1487b5) {
    _0x1f7178 = _0x1f7178 - 0x0;
    var _0x1c8571 = _0x2900[_0x1f7178];
    return _0x1c8571;
};
var craftingRecipes = new Map();
const outputRows = 0x4;
var currentCraft = new Map();
var lastTimeCalculated = 0x64;
const calculateDelay = 0x1 * 0x3e8;
const rarity = {
    'HIDDEN': 'hidden',
    'RAW': 'raw',
    'COMMON': _0x4185('0x0'),
    'RARE': 'rare',
    'EPIC': 'epic',
    'LEGENDARY': 'legendary'
};