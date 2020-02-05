var _0x1b6d = [
    'rare',
    'epic',
    'legendary',
    'hidden',
    'raw',
    'common'
];
(function (_0x48b2ba, _0x3e9f89) {
    var _0x1850e6 = function (_0x4a5048) {
        while (--_0x4a5048) {
            _0x48b2ba['push'](_0x48b2ba['shift']());
        }
    };
    _0x1850e6(++_0x3e9f89);
}(_0x1b6d, 0x189));
var _0x21e0 = function (_0x483520, _0x54c103) {
    _0x483520 = _0x483520 - 0x0;
    var _0x5a829c = _0x1b6d[_0x483520];
    return _0x5a829c;
};
var craftingRecipes = new Map();
const outputRows = 0x4;
var currentCraft = new Map();
var lastTimeCalculated = 0x64;
const calculateDelay = 0x1 * 0x3e8;
const rarity = {
    'HIDDEN': _0x21e0('0x0'),
    'RAW': _0x21e0('0x1'),
    'COMMON': _0x21e0('0x2'),
    'RARE': _0x21e0('0x3'),
    'EPIC': _0x21e0('0x4'),
    'LEGENDARY': _0x21e0('0x5')
};