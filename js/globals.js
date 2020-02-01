var _0x4c03 = [
    'legendary',
    'common',
    'rare',
    'epic'
];
(function (_0xaaeb3e, _0x54e021) {
    var _0x54958f = function (_0x144bd5) {
        while (--_0x144bd5) {
            _0xaaeb3e['push'](_0xaaeb3e['shift']());
        }
    };
    _0x54958f(++_0x54e021);
}(_0x4c03, 0xcd));
var _0x5871 = function (_0x5e1905, _0x3f3f59) {
    _0x5e1905 = _0x5e1905 - 0x0;
    var _0x566b45 = _0x4c03[_0x5e1905];
    return _0x566b45;
};
var craftingRecipes = new Map();
const outputRows = 0x4;
var currentCraft = new Map();
const rarity = {
    'HIDDEN': 'hidden',
    'RAW': 'raw',
    'COMMON': _0x5871('0x0'),
    'RARE': _0x5871('0x1'),
    'EPIC': _0x5871('0x2'),
    'LEGENDARY': _0x5871('0x3')
};