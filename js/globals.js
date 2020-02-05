var _0x52dd = [
    'raw',
    'common',
    'rare',
    'epic',
    'hidden'
];
(function (_0x1bc43c, _0x25b2bd) {
    var _0x427c6f = function (_0x517e3f) {
        while (--_0x517e3f) {
            _0x1bc43c['push'](_0x1bc43c['shift']());
        }
    };
    _0x427c6f(++_0x25b2bd);
}(_0x52dd, 0x6d));
var _0x34cf = function (_0x143511, _0x36563e) {
    _0x143511 = _0x143511 - 0x0;
    var _0x4092f8 = _0x52dd[_0x143511];
    return _0x4092f8;
};
var craftingRecipes = new Map();
const outputRows = 0x4;
var currentCraft = new Map();
var lastTimeCalculated = 0x64;
const calculateDelay = 0x1 * 0x3e8;
const rarity = {
    'HIDDEN': _0x34cf('0x0'),
    'RAW': _0x34cf('0x1'),
    'COMMON': _0x34cf('0x2'),
    'RARE': _0x34cf('0x3'),
    'EPIC': _0x34cf('0x4'),
    'LEGENDARY': 'legendary'
};