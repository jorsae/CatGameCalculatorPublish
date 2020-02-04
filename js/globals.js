var _0x1cad = [
    'legendary',
    'raw',
    'rare'
];
(function (_0x5a2383, _0x3fe956) {
    var _0x381dfc = function (_0x5f05fb) {
        while (--_0x5f05fb) {
            _0x5a2383['push'](_0x5a2383['shift']());
        }
    };
    _0x381dfc(++_0x3fe956);
}(_0x1cad, 0x1a8));
var _0x207b = function (_0x4cdcdf, _0x495060) {
    _0x4cdcdf = _0x4cdcdf - 0x0;
    var _0x4b315c = _0x1cad[_0x4cdcdf];
    return _0x4b315c;
};
var craftingRecipes = new Map();
const outputRows = 0x4;
var currentCraft = new Map();
var lastTimeCalculated = 0x64;
const calculateDelay = 0x1 * 0x3e8;
const rarity = {
    'HIDDEN': 'hidden',
    'RAW': _0x207b('0x0'),
    'COMMON': 'common',
    'RARE': _0x207b('0x1'),
    'EPIC': 'epic',
    'LEGENDARY': _0x207b('0x2')
};