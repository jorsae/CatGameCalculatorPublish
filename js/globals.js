var _0x32ae = [
    'rare',
    'epic',
    'legendary',
    'raw'
];
(function (_0x1ae148, _0x4e4e2e) {
    var _0x2d158c = function (_0x5267c3) {
        while (--_0x5267c3) {
            _0x1ae148['push'](_0x1ae148['shift']());
        }
    };
    _0x2d158c(++_0x4e4e2e);
}(_0x32ae, 0xff));
var _0x275a = function (_0x10e1fe, _0x2f0e83) {
    _0x10e1fe = _0x10e1fe - 0x0;
    var _0x1d941e = _0x32ae[_0x10e1fe];
    return _0x1d941e;
};
var craftingRecipes = new Map();
const outputRows = 0x4;
var currentCraft = new Map();
var lastTimeCalculated = 0x64;
const calculateDelay = 0x1 * 0x3e8;
const rarity = {
    'HIDDEN': 'hidden',
    'RAW': _0x275a('0x0'),
    'COMMON': 'common',
    'RARE': _0x275a('0x1'),
    'EPIC': _0x275a('0x2'),
    'LEGENDARY': _0x275a('0x3')
};