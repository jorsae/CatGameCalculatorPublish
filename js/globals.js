var _0x4c03 = [
    'legendary',
    'common',
    'rare',
    'epic'
];
(function (_0x420c0b, _0x35c6d3) {
    var _0x289432 = function (_0x1011f5) {
        while (--_0x1011f5) {
            _0x420c0b['push'](_0x420c0b['shift']());
        }
    };
    _0x289432(++_0x35c6d3);
}(_0x4c03, 0xcd));
var _0x5871 = function (_0x5e94f5, _0x3d496d) {
    _0x5e94f5 = _0x5e94f5 - 0x0;
    var _0x430baf = _0x4c03[_0x5e94f5];
    return _0x430baf;
};
var craftingRecipes = new Map();
const outputRows = 0x4;
var currentCraft = new Map();
const rarity = {
    'HIDDEN': 'hidden',
    'RAW': 'raw',
    'COMMON': _0x5871('0x0'),
    'RARE': _0x5871('0x1'),
    'EPIC': _0x5871('0x2'),
    'LEGENDARY': _0x5871('0x3')
};