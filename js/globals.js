var _0x30cd = [
    'Yes',
    'hidden',
    'common',
    'rare',
    'epic',
    'legendary',
    'CatCookie'
];
(function (_0x3eb0b4, _0x24aa1a) {
    var _0x26e142 = function (_0x8de5ef) {
        while (--_0x8de5ef) {
            _0x3eb0b4['push'](_0x3eb0b4['shift']());
        }
    };
    _0x26e142(++_0x24aa1a);
}(_0x30cd, 0x1cd));
var _0x49df = function (_0x4dc450, _0x4ea1b5) {
    _0x4dc450 = _0x4dc450 - 0x0;
    var _0x41fd17 = _0x30cd[_0x4dc450];
    return _0x41fd17;
};
var craftingRecipes = new Map();
const outputRows = 0x4;
var currentCraft = new Map();
var lastTimeCalculated = 0x64;
const calculateDelay = 0x1 * 0x3e8;
const cookieName = _0x49df('0x0');
const cookieValue = _0x49df('0x1');
const rarity = {
    'HIDDEN': _0x49df('0x2'),
    'RAW': 'raw',
    'COMMON': _0x49df('0x3'),
    'RARE': _0x49df('0x4'),
    'EPIC': _0x49df('0x5'),
    'LEGENDARY': _0x49df('0x6')
};