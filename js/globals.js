var _0x2fa2 = [
    'common',
    'rare',
    'epic',
    'hidden',
    'raw'
];
(function (_0x2cb4fb, _0x26c682) {
    var _0x342836 = function (_0xe3a787) {
        while (--_0xe3a787) {
            _0x2cb4fb['push'](_0x2cb4fb['shift']());
        }
    };
    _0x342836(++_0x26c682);
}(_0x2fa2, 0x116));
var _0x3a48 = function (_0x173d0e, _0x301756) {
    _0x173d0e = _0x173d0e - 0x0;
    var _0x50b6d4 = _0x2fa2[_0x173d0e];
    return _0x50b6d4;
};
var craftingRecipes = new Map();
const outputRows = 0x4;
var currentCraft = new Map();
const rarity = {
    'HIDDEN': _0x3a48('0x0'),
    'RAW': _0x3a48('0x1'),
    'COMMON': _0x3a48('0x2'),
    'RARE': _0x3a48('0x3'),
    'EPIC': _0x3a48('0x4'),
    'LEGENDARY': 'legendary'
};