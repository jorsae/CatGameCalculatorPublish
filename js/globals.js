var _0x3bb5 = [
    'raw',
    'common',
    'rare',
    'epic',
    'legendary',
    'hidden'
];
(function (_0x4f4dec, _0x266c50) {
    var _0x1f8082 = function (_0xd44541) {
        while (--_0xd44541) {
            _0x4f4dec['push'](_0x4f4dec['shift']());
        }
    };
    _0x1f8082(++_0x266c50);
}(_0x3bb5, 0x6b));
var _0x4ac7 = function (_0x3fe8df, _0x3c89b1) {
    _0x3fe8df = _0x3fe8df - 0x0;
    var _0x17d9d4 = _0x3bb5[_0x3fe8df];
    return _0x17d9d4;
};
var craftingRecipes = new Map();
const outputRows = 0x4;
var currentCraft = new Map();
var lastTimeCalculated = 0x64;
const calculateDelay = 0x1 * 0x3e8;
const rarity = {
    'HIDDEN': _0x4ac7('0x0'),
    'RAW': _0x4ac7('0x1'),
    'COMMON': _0x4ac7('0x2'),
    'RARE': _0x4ac7('0x3'),
    'EPIC': _0x4ac7('0x4'),
    'LEGENDARY': _0x4ac7('0x5')
};