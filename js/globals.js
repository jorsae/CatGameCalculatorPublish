var _0x2246 = [
    'raw',
    'hidden'
];
(function (_0x1a026c, _0x2492de) {
    var _0x2d8f05 = function (_0x4b81bb) {
        while (--_0x4b81bb) {
            _0x1a026c['push'](_0x1a026c['shift']());
        }
    };
    _0x2d8f05(++_0x2492de);
}(_0x2246, 0x1cf));
var _0x3d93 = function (_0x1fdd25, _0x2dd6b0) {
    _0x1fdd25 = _0x1fdd25 - 0x0;
    var _0x2b107e = _0x2246[_0x1fdd25];
    return _0x2b107e;
};
var craftingRecipes = new Map();
const outputRows = 0x4;
var currentCraft = new Map();
var lastTimeCalculated = 0x64;
const calculateDelay = 0x1 * 0x3e8;
const rarity = {
    'HIDDEN': _0x3d93('0x0'),
    'RAW': _0x3d93('0x1'),
    'COMMON': 'common',
    'RARE': 'rare',
    'EPIC': 'epic',
    'LEGENDARY': 'legendary'
};