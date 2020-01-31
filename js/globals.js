var _0x4efa = [
    'legendary',
    'hidden',
    'raw',
    'common',
    'rare'
];
(function (_0x6ee7dc, _0x2cf490) {
    var _0x519992 = function (_0x1e5c1b) {
        while (--_0x1e5c1b) {
            _0x6ee7dc['push'](_0x6ee7dc['shift']());
        }
    };
    _0x519992(++_0x2cf490);
}(_0x4efa, 0x1eb));
var _0x3d60 = function (_0x3e15d9, _0xcc1b68) {
    _0x3e15d9 = _0x3e15d9 - 0x0;
    var _0x140534 = _0x4efa[_0x3e15d9];
    return _0x140534;
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