var _0x4a8d = [
    'raw',
    'common',
    'epic',
    'legendary'
];
(function (_0x33325a, _0x2da913) {
    var _0x38b730 = function (_0x272695) {
        while (--_0x272695) {
            _0x33325a['push'](_0x33325a['shift']());
        }
    };
    _0x38b730(++_0x2da913);
}(_0x4a8d, 0xe0));
var _0x4463 = function (_0x200688, _0x5dac03) {
    _0x200688 = _0x200688 - 0x0;
    var _0x3a8091 = _0x4a8d[_0x200688];
    return _0x3a8091;
};
var craftingRecipes = new Map();
const outputRows = 0x4;
var currentCraft = new Map();
var lastTimeCalculated = 0x64;
const calculateDelay = 0x1 * 0x3e8;
const rarity = {
    'HIDDEN': 'hidden',
    'RAW': _0x4463('0x0'),
    'COMMON': _0x4463('0x1'),
    'RARE': 'rare',
    'EPIC': _0x4463('0x2'),
    'LEGENDARY': _0x4463('0x3')
};