var _0x1f32 = [
    'legendary',
    'hidden',
    'common',
    'rare',
    'epic'
];
(function (_0x277084, _0x13e50f) {
    var _0x230ab2 = function (_0x585eb8) {
        while (--_0x585eb8) {
            _0x277084['push'](_0x277084['shift']());
        }
    };
    _0x230ab2(++_0x13e50f);
}(_0x1f32, 0x1be));
var _0x7bb8 = function (_0x315309, _0x12eb05) {
    _0x315309 = _0x315309 - 0x0;
    var _0xc9e762 = _0x1f32[_0x315309];
    return _0xc9e762;
};
var craftingRecipes = new Map();
const outputRows = 0x4;
var currentCraft = new Map();
const rarity = {
    'HIDDEN': _0x7bb8('0x0'),
    'RAW': 'raw',
    'COMMON': _0x7bb8('0x1'),
    'RARE': _0x7bb8('0x2'),
    'EPIC': _0x7bb8('0x3'),
    'LEGENDARY': _0x7bb8('0x4')
};