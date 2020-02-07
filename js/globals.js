var _0x1ef3 = [
    'hidden',
    'raw',
    'epic',
    'legendary'
];
(function (_0x3c9c28, _0x1f0bf1) {
    var _0x437fb4 = function (_0x4cb019) {
        while (--_0x4cb019) {
            _0x3c9c28['push'](_0x3c9c28['shift']());
        }
    };
    _0x437fb4(++_0x1f0bf1);
}(_0x1ef3, 0x12c));
var _0x30fa = function (_0x3416b2, _0x403b2d) {
    _0x3416b2 = _0x3416b2 - 0x0;
    var _0x2d7d05 = _0x1ef3[_0x3416b2];
    return _0x2d7d05;
};
var craftingRecipes = new Map();
const outputRows = 0x4;
var currentCraft = new Map();
var lastTimeCalculated = 0x64;
const calculateDelay = 0x1 * 0x3e8;
const rarity = {
    'HIDDEN': _0x30fa('0x0'),
    'RAW': _0x30fa('0x1'),
    'COMMON': 'common',
    'RARE': 'rare',
    'EPIC': _0x30fa('0x2'),
    'LEGENDARY': _0x30fa('0x3')
};