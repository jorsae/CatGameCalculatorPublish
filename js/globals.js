var _0x2ca5 = [
    'rare',
    'epic',
    'legendary',
    'hidden'
];
(function (_0x4a8f24, _0x521e06) {
    var _0x18fbdb = function (_0x55147b) {
        while (--_0x55147b) {
            _0x4a8f24['push'](_0x4a8f24['shift']());
        }
    };
    _0x18fbdb(++_0x521e06);
}(_0x2ca5, 0x1bb));
var _0x3d45 = function (_0x236883, _0x7c917d) {
    _0x236883 = _0x236883 - 0x0;
    var _0x52e6ac = _0x2ca5[_0x236883];
    return _0x52e6ac;
};
var craftingRecipes = new Map();
const outputRows = 0x4;
var currentCraft = new Map();
var lastTimeCalculated = 0x64;
const calculateDelay = 0x1 * 0x3e8;
const rarity = {
    'HIDDEN': _0x3d45('0x0'),
    'RAW': 'raw',
    'COMMON': 'common',
    'RARE': _0x3d45('0x1'),
    'EPIC': _0x3d45('0x2'),
    'LEGENDARY': _0x3d45('0x3')
};