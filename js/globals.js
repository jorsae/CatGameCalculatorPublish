var _0x4a7c = [
    'raw',
    'rare',
    'epic',
    'legendary',
    'hidden'
];
(function (_0x52b592, _0xa5a51) {
    var _0x1c14cc = function (_0x3ce6e1) {
        while (--_0x3ce6e1) {
            _0x52b592['push'](_0x52b592['shift']());
        }
    };
    _0x1c14cc(++_0xa5a51);
}(_0x4a7c, 0x18a));
var _0x3205 = function (_0x1ed15d, _0x5aa0d9) {
    _0x1ed15d = _0x1ed15d - 0x0;
    var _0x2e9e68 = _0x4a7c[_0x1ed15d];
    return _0x2e9e68;
};
var craftingRecipes = new Map();
const outputRows = 0x4;
var currentCraft = new Map();
const rarity = {
    'HIDDEN': _0x3205('0x0'),
    'RAW': _0x3205('0x1'),
    'COMMON': 'common',
    'RARE': _0x3205('0x2'),
    'EPIC': _0x3205('0x3'),
    'LEGENDARY': _0x3205('0x4')
};