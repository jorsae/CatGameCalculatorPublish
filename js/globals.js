var _0x5755 = [
    'epic',
    'legendary'
];
(function (_0xd86f8c, _0x4b3542) {
    var _0x68b9ac = function (_0x22c923) {
        while (--_0x22c923) {
            _0xd86f8c['push'](_0xd86f8c['shift']());
        }
    };
    _0x68b9ac(++_0x4b3542);
}(_0x5755, 0x158));
var _0x1835 = function (_0x4a9a8a, _0x510a37) {
    _0x4a9a8a = _0x4a9a8a - 0x0;
    var _0x37b8ad = _0x5755[_0x4a9a8a];
    return _0x37b8ad;
};
var craftingRecipes = new Map();
const outputRows = 0x4;
var currentCraft = new Map();
const rarity = {
    'HIDDEN': 'hidden',
    'RAW': 'raw',
    'COMMON': 'common',
    'RARE': 'rare',
    'EPIC': _0x1835('0x0'),
    'LEGENDARY': _0x1835('0x1')
};