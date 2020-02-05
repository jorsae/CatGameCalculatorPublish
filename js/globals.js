var _0x1804 = [
    'rare',
    'epic',
    'hidden',
    'raw'
];
(function (_0x309ad3, _0x22d5ac) {
    var _0x3a034e = function (_0x42782b) {
        while (--_0x42782b) {
            _0x309ad3['push'](_0x309ad3['shift']());
        }
    };
    _0x3a034e(++_0x22d5ac);
}(_0x1804, 0x18a));
var _0x1334 = function (_0x373d06, _0x413e4a) {
    _0x373d06 = _0x373d06 - 0x0;
    var _0x3954fa = _0x1804[_0x373d06];
    return _0x3954fa;
};
var craftingRecipes = new Map();
const outputRows = 0x4;
var currentCraft = new Map();
var lastTimeCalculated = 0x64;
const calculateDelay = 0x1 * 0x3e8;
const rarity = {
    'HIDDEN': _0x1334('0x0'),
    'RAW': _0x1334('0x1'),
    'COMMON': 'common',
    'RARE': _0x1334('0x2'),
    'EPIC': _0x1334('0x3'),
    'LEGENDARY': 'legendary'
};