var _0x32e5 = [
    'craftingRequirements',
    'tDbTI',
    'craftingItem',
    'name',
    'Ldxjz',
    'get',
    'set',
    'BeKZA',
    'rofjR'
];
(function (_0x4dbef2, _0x700f7e) {
    var _0x492ccd = function (_0x40eb18) {
        while (--_0x40eb18) {
            _0x4dbef2['push'](_0x4dbef2['shift']());
        }
    };
    _0x492ccd(++_0x700f7e);
}(_0x32e5, 0x10d));
var _0x4a45 = function (_0x4b7e96, _0x359e6e) {
    _0x4b7e96 = _0x4b7e96 - 0x0;
    var _0x4c6a5c = _0x32e5[_0x4b7e96];
    return _0x4c6a5c;
};
function getCraftingRequirements(_0x3faeb6, _0x18e4d1 = 0x1) {
    var _0x583d16 = {
        'rofjR': function (_0x8b5fa6, _0x44bcce) {
            return _0x8b5fa6 === _0x44bcce;
        },
        'tDbTI': function (_0x1921f7, _0x47ad92) {
            return _0x1921f7 < _0x47ad92;
        },
        'Ldxjz': function (_0x591ef7, _0x5337a1) {
            return _0x591ef7 * _0x5337a1;
        },
        'jfdNa': function (_0x343ec9, _0x312109) {
            return _0x343ec9 === _0x312109;
        },
        'PTNCf': function (_0x586593, _0x1f490f, _0x28c140) {
            return _0x586593(_0x1f490f, _0x28c140);
        },
        'BeKZA': function (_0x5eeb89, _0x1fbcf2) {
            return _0x5eeb89 + _0x1fbcf2;
        }
    };
    if (_0x583d16[_0x4a45('0x0')](_0x3faeb6[_0x4a45('0x1')], null)) {
        return;
    }
    for (var _0x447344 = 0x0; _0x583d16[_0x4a45('0x2')](_0x447344, _0x3faeb6[_0x4a45('0x1')]['length']); _0x447344++) {
        var _0x89c630 = _0x3faeb6[_0x4a45('0x1')][_0x447344][_0x4a45('0x3')][_0x4a45('0x4')];
        var _0xb7610b = _0x583d16[_0x4a45('0x5')](_0x3faeb6[_0x4a45('0x1')][_0x447344]['quantity'], _0x18e4d1);
        var _0x4ec453 = currentCraft['get'](_0x89c630);
        if (_0x583d16['jfdNa'](_0x4ec453, undefined)) {
            var _0x4db68e = craftingRecipes[_0x4a45('0x6')](_0x89c630);
            _0x583d16['PTNCf'](getCraftingRequirements, _0x4db68e, _0xb7610b);
            currentCraft['set'](_0x89c630, _0xb7610b);
        } else {
            var _0x4db68e = craftingRecipes['get'](_0x89c630);
            _0x583d16['PTNCf'](getCraftingRequirements, _0x4db68e, _0xb7610b);
            var _0x32112b = currentCraft[_0x4a45('0x6')](_0x89c630);
            currentCraft[_0x4a45('0x7')](_0x89c630, _0x583d16[_0x4a45('0x8')](_0x32112b, _0xb7610b));
        }
    }
    return currentCraft;
}