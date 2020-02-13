var _0x23f1 = [
    'rare',
    'epic',
    'hidden',
    'raw',
    'common'
];
(function (_0x501605, _0x495da5) {
    var _0x546da0 = function (_0x243321) {
        while (--_0x243321) {
            _0x501605['push'](_0x501605['shift']());
        }
    };
    _0x546da0(++_0x495da5);
}(_0x23f1, 0x174));
var _0x3ab5 = function (_0x943789, _0x42f257) {
    _0x943789 = _0x943789 - 0x0;
    var _0x1c3674 = _0x23f1[_0x943789];
    return _0x1c3674;
};
var craftingRecipes = new Map();
const outputRows = 0x4;
var currentCraft = new Map();
var lastTimeCalculated = 0x64;
const calculateDelay = 0x1 * 0x3e8;
const rarity = {
    'HIDDEN': _0x3ab5('0x0'),
    'RAW': _0x3ab5('0x1'),
    'COMMON': _0x3ab5('0x2'),
    'RARE': _0x3ab5('0x3'),
    'EPIC': _0x3ab5('0x4'),
    'LEGENDARY': 'legendary'
};