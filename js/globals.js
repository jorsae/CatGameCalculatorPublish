var _0x4efa = [
    'legendary',
    'hidden',
    'raw',
    'common',
    'rare'
];
(function (_0x2ac3b7, _0x1cdc9a) {
    var _0x47a2c9 = function (_0x20a037) {
        while (--_0x20a037) {
            _0x2ac3b7['push'](_0x2ac3b7['shift']());
        }
    };
    _0x47a2c9(++_0x1cdc9a);
}(_0x4efa, 0x1eb));
var _0x3d60 = function (_0x516067, _0x55fdf4) {
    _0x516067 = _0x516067 - 0x0;
    var _0x315036 = _0x4efa[_0x516067];
    return _0x315036;
};
var craftingRecipes = new Map();
const outputRows = 0x4;
var currentCraft = new Map();
const rarity = {
    'HIDDEN': _0x3d60('0x0'),
    'RAW': _0x3d60('0x1'),
    'COMMON': _0x3d60('0x2'),
    'RARE': _0x3d60('0x3'),
    'EPIC': 'epic',
    'LEGENDARY': _0x3d60('0x4')
};