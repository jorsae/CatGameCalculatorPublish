var _0xe81c = [
    'rare',
    'epic',
    'hidden',
    'raw'
];
(function (_0x40e29c, _0x47f612) {
    var _0x20004e = function (_0x27ee87) {
        while (--_0x27ee87) {
            _0x40e29c['push'](_0x40e29c['shift']());
        }
    };
    _0x20004e(++_0x47f612);
}(_0xe81c, 0xaa));
var _0x51d4 = function (_0x2c7ded, _0x375a13) {
    _0x2c7ded = _0x2c7ded - 0x0;
    var _0x5e07b8 = _0xe81c[_0x2c7ded];
    return _0x5e07b8;
};
var craftingRecipes = new Map();
const outputRows = 0x4;
var currentCraft = new Map();
var lastTimeCalculated = 0x64;
const calculateDelay = 0x1 * 0x3e8;
const rarity = {
    'HIDDEN': _0x51d4('0x0'),
    'RAW': _0x51d4('0x1'),
    'COMMON': 'common',
    'RARE': _0x51d4('0x2'),
    'EPIC': _0x51d4('0x3'),
    'LEGENDARY': 'legendary'
};