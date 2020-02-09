var _0x48e2 = [
    'hidden',
    'raw',
    'common',
    'rare',
    'epic',
    'legendary'
];
(function (_0x81651c, _0x72e943) {
    var _0x329756 = function (_0x5ce2d1) {
        while (--_0x5ce2d1) {
            _0x81651c['push'](_0x81651c['shift']());
        }
    };
    _0x329756(++_0x72e943);
}(_0x48e2, 0x72));
var _0x37b7 = function (_0x4a6915, _0x3a6548) {
    _0x4a6915 = _0x4a6915 - 0x0;
    var _0x396253 = _0x48e2[_0x4a6915];
    return _0x396253;
};
var craftingRecipes = new Map();
const outputRows = 0x4;
var currentCraft = new Map();
var lastTimeCalculated = 0x64;
const calculateDelay = 0x1 * 0x3e8;
const rarity = {
    'HIDDEN': _0x37b7('0x0'),
    'RAW': _0x37b7('0x1'),
    'COMMON': _0x37b7('0x2'),
    'RARE': _0x37b7('0x3'),
    'EPIC': _0x37b7('0x4'),
    'LEGENDARY': _0x37b7('0x5')
};