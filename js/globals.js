var _0x5639 = [
    'raw',
    'common',
    'legendary'
];
(function (_0x490803, _0x27acf4) {
    var _0x162a84 = function (_0x3cb4f3) {
        while (--_0x3cb4f3) {
            _0x490803['push'](_0x490803['shift']());
        }
    };
    _0x162a84(++_0x27acf4);
}(_0x5639, 0xc9));
var _0x8ae2 = function (_0x146ed7, _0x52ed2a) {
    _0x146ed7 = _0x146ed7 - 0x0;
    var _0x5678f3 = _0x5639[_0x146ed7];
    return _0x5678f3;
};
var craftingRecipes = new Map();
const outputRows = 0x4;
var currentCraft = new Map();
var lastTimeCalculated = 0x64;
const calculateDelay = 0x1 * 0x3e8;
const rarity = {
    'HIDDEN': 'hidden',
    'RAW': _0x8ae2('0x0'),
    'COMMON': _0x8ae2('0x1'),
    'RARE': 'rare',
    'EPIC': 'epic',
    'LEGENDARY': _0x8ae2('0x2')
};