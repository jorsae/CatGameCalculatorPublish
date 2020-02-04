var _0x1b48 = [
    'raw',
    'rare',
    'epic',
    'legendary'
];
(function (_0x2f1588, _0x2a7a85) {
    var _0x4da31b = function (_0x2e1d20) {
        while (--_0x2e1d20) {
            _0x2f1588['push'](_0x2f1588['shift']());
        }
    };
    _0x4da31b(++_0x2a7a85);
}(_0x1b48, 0x130));
var _0x138e = function (_0x50ae3c, _0x455b5d) {
    _0x50ae3c = _0x50ae3c - 0x0;
    var _0x172b05 = _0x1b48[_0x50ae3c];
    return _0x172b05;
};
var craftingRecipes = new Map();
const outputRows = 0x4;
var currentCraft = new Map();
var lastTimeCalculated = 0x64;
const calculateDelay = 0x1 * 0x3e8;
const rarity = {
    'HIDDEN': 'hidden',
    'RAW': _0x138e('0x0'),
    'COMMON': 'common',
    'RARE': _0x138e('0x1'),
    'EPIC': _0x138e('0x2'),
    'LEGENDARY': _0x138e('0x3')
};