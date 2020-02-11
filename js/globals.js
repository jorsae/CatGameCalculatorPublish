var _0x36f9 = [
    'epic',
    'legendary',
    'hidden',
    'raw',
    'common',
    'rare'
];
(function (_0x4759b0, _0x23c5b2) {
    var _0x35d30d = function (_0xd68f44) {
        while (--_0xd68f44) {
            _0x4759b0['push'](_0x4759b0['shift']());
        }
    };
    _0x35d30d(++_0x23c5b2);
}(_0x36f9, 0x92));
var _0x3b35 = function (_0x4b890f, _0x560c8d) {
    _0x4b890f = _0x4b890f - 0x0;
    var _0x43e98b = _0x36f9[_0x4b890f];
    return _0x43e98b;
};
var craftingRecipes = new Map();
const outputRows = 0x4;
var currentCraft = new Map();
var lastTimeCalculated = 0x64;
const calculateDelay = 0x1 * 0x3e8;
const rarity = {
    'HIDDEN': _0x3b35('0x0'),
    'RAW': _0x3b35('0x1'),
    'COMMON': _0x3b35('0x2'),
    'RARE': _0x3b35('0x3'),
    'EPIC': _0x3b35('0x4'),
    'LEGENDARY': _0x3b35('0x5')
};