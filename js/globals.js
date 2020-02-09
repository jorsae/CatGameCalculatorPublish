var _0x4ab3 = [
    'common',
    'rare',
    'epic',
    'legendary',
    'raw'
];
(function (_0x7bdc55, _0x28bd60) {
    var _0x1196c6 = function (_0x44e6fa) {
        while (--_0x44e6fa) {
            _0x7bdc55['push'](_0x7bdc55['shift']());
        }
    };
    _0x1196c6(++_0x28bd60);
}(_0x4ab3, 0x149));
var _0x3255 = function (_0x23ea35, _0x2b8675) {
    _0x23ea35 = _0x23ea35 - 0x0;
    var _0x40c0da = _0x4ab3[_0x23ea35];
    return _0x40c0da;
};
var craftingRecipes = new Map();
const outputRows = 0x4;
var currentCraft = new Map();
var lastTimeCalculated = 0x64;
const calculateDelay = 0x1 * 0x3e8;
const rarity = {
    'HIDDEN': 'hidden',
    'RAW': _0x3255('0x0'),
    'COMMON': _0x3255('0x1'),
    'RARE': _0x3255('0x2'),
    'EPIC': _0x3255('0x3'),
    'LEGENDARY': _0x3255('0x4')
};