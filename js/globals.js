var _0x4d9b = [
    'epic',
    'legendary',
    'raw',
    'common',
    'rare'
];
(function (_0xf75ea2, _0x4e1363) {
    var _0x5cc308 = function (_0xaf37c) {
        while (--_0xaf37c) {
            _0xf75ea2['push'](_0xf75ea2['shift']());
        }
    };
    _0x5cc308(++_0x4e1363);
}(_0x4d9b, 0xbb));
var _0x5551 = function (_0xaf1cc4, _0x2377df) {
    _0xaf1cc4 = _0xaf1cc4 - 0x0;
    var _0x328ddf = _0x4d9b[_0xaf1cc4];
    return _0x328ddf;
};
var craftingRecipes = new Map();
const outputRows = 0x4;
var currentCraft = new Map();
const rarity = {
    'HIDDEN': 'hidden',
    'RAW': _0x5551('0x0'),
    'COMMON': _0x5551('0x1'),
    'RARE': _0x5551('0x2'),
    'EPIC': _0x5551('0x3'),
    'LEGENDARY': _0x5551('0x4')
};