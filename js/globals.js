var _0x1984 = [
    'epic',
    'hidden',
    'raw',
    'common',
    'rare'
];
(function (_0x5eb3a8, _0x41af83) {
    var _0x2efdb9 = function (_0x1c6537) {
        while (--_0x1c6537) {
            _0x5eb3a8['push'](_0x5eb3a8['shift']());
        }
    };
    _0x2efdb9(++_0x41af83);
}(_0x1984, 0x79));
var _0x4686 = function (_0x3ac6d3, _0x1e4bff) {
    _0x3ac6d3 = _0x3ac6d3 - 0x0;
    var _0x43046 = _0x1984[_0x3ac6d3];
    return _0x43046;
};
var craftingRecipes = new Map();
const outputRows = 0x4;
var currentCraft = new Map();
const rarity = {
    'HIDDEN': _0x4686('0x0'),
    'RAW': _0x4686('0x1'),
    'COMMON': _0x4686('0x2'),
    'RARE': _0x4686('0x3'),
    'EPIC': _0x4686('0x4'),
    'LEGENDARY': 'legendary'
};