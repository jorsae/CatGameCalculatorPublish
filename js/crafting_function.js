var _0x4574 = [
    'craftingItem',
    'quantity',
    'get',
    'DWBEB',
    'craftingRequirements',
    'set',
    'name'
];
(function (_0x1a1503, _0x229753) {
    var _0x158a11 = function (_0xc55500) {
        while (--_0xc55500) {
            _0x1a1503['push'](_0x1a1503['shift']());
        }
    };
    _0x158a11(++_0x229753);
}(_0x4574, 0x1b5));
var _0x2814 = function (_0x561123, _0x256597) {
    _0x561123 = _0x561123 - 0x0;
    var _0x5ad191 = _0x4574[_0x561123];
    return _0x5ad191;
};
function getCraftingRequirements(_0x393ad3, _0x3ac14c = 0x1) {
    var _0x3047b8 = {
        'DWBEB': function (_0x7fd565, _0x5180ed) {
            return _0x7fd565 === _0x5180ed;
        },
        'Ngrmp': function (_0xb75cc5, _0x16b71b) {
            return _0xb75cc5 * _0x16b71b;
        },
        'LPEIh': function (_0x383911, _0x3151ce, _0x23eedb) {
            return _0x383911(_0x3151ce, _0x23eedb);
        },
        'PIAWe': function (_0x27eed2, _0x2627c8) {
            return _0x27eed2 + _0x2627c8;
        }
    };
    if (_0x3047b8[_0x2814('0x0')](_0x393ad3[_0x2814('0x1')], null)) {
        return;
    }
    currentCraft[_0x2814('0x2')](_0x393ad3[_0x2814('0x3')], _0x3ac14c);
    for (var _0x5f3d68 = 0x0; _0x5f3d68 < _0x393ad3['craftingRequirements']['length']; _0x5f3d68++) {
        var _0xf2d2bf = _0x393ad3[_0x2814('0x1')][_0x5f3d68][_0x2814('0x4')]['name'];
        var _0x2c56d6 = _0x3047b8['Ngrmp'](_0x393ad3[_0x2814('0x1')][_0x5f3d68][_0x2814('0x5')], _0x3ac14c);
        var _0xcdc210 = currentCraft[_0x2814('0x6')](_0xf2d2bf);
        if (_0xcdc210 === undefined) {
            var _0x48bdf5 = craftingRecipes['get'](_0xf2d2bf);
            _0x3047b8['LPEIh'](getCraftingRequirements, _0x48bdf5, _0x2c56d6);
            currentCraft[_0x2814('0x2')](_0xf2d2bf, _0x2c56d6);
        } else {
            var _0x48bdf5 = craftingRecipes['get'](_0xf2d2bf);
            getCraftingRequirements(_0x48bdf5, _0x2c56d6);
            var _0x37d813 = currentCraft['get'](_0xf2d2bf);
            currentCraft['set'](_0xf2d2bf, _0x3047b8['PIAWe'](_0x37d813, _0x2c56d6));
        }
    }
    return currentCraft;
}