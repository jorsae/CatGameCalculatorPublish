var _0x10e6 = [
    'raw',
    'common',
    'rare',
    'epic',
    'legendary',
    'CatCookie',
    'Yes',
    'hidden'
];
(function (_0x1164fb, _0x7d2e52) {
    var _0x451e70 = function (_0x58fcd2) {
        while (--_0x58fcd2) {
            _0x1164fb['push'](_0x1164fb['shift']());
        }
    };
    _0x451e70(++_0x7d2e52);
}(_0x10e6, 0xfd));
var _0x3609 = function (_0x811cd2, _0x400720) {
    _0x811cd2 = _0x811cd2 - 0x0;
    var _0x2e8764 = _0x10e6[_0x811cd2];
    return _0x2e8764;
};
var craftingRecipes = new Map();
const outputRows = 0x4;
var currentCraft = new Map();
var lastTimeCalculated = 0x64;
const calculateDelay = 0x1 * 0x3e8;
const cookieName = _0x3609('0x0');
const cookieValue = _0x3609('0x1');
const rarity = {
    'HIDDEN': _0x3609('0x2'),
    'RAW': _0x3609('0x3'),
    'COMMON': _0x3609('0x4'),
    'RARE': _0x3609('0x5'),
    'EPIC': _0x3609('0x6'),
    'LEGENDARY': _0x3609('0x7')
};