var _0x5b8d = [
    'EPUBz',
    'set',
    'name',
    'craftingRequirements',
    'craftingItem',
    'quantity',
    'get',
    'EaaUA'
];
(function (_0x4242f2, _0x2fa087) {
    var _0x305504 = function (_0x256fa6) {
        while (--_0x256fa6) {
            _0x4242f2['push'](_0x4242f2['shift']());
        }
    };
    _0x305504(++_0x2fa087);
}(_0x5b8d, 0x128));
var _0x4139 = function (_0x2776ea, _0x60edc1) {
    _0x2776ea = _0x2776ea - 0x0;
    var _0x2f3e31 = _0x5b8d[_0x2776ea];
    return _0x2f3e31;
};
function getCraftingRequirements(_0x3d9a02, _0x332e3a = 0x1, _0x1db23d = ![]) {
    var _0x6f0b8 = {
        'EPUBz': function (_0x457bda, _0x42f2d0) {
            return _0x457bda === _0x42f2d0;
        },
        'oHFxB': function (_0xcdaf74, _0x905d25) {
            return _0xcdaf74 * _0x905d25;
        },
        'EaaUA': function (_0x3462bf, _0x43a5a1, _0x445b40) {
            return _0x3462bf(_0x43a5a1, _0x445b40);
        },
        'WPsNr': function (_0x620cb7, _0x2635f6, _0x366470) {
            return _0x620cb7(_0x2635f6, _0x366470);
        },
        'mstTc': function (_0x2152b2, _0x1880d3) {
            return _0x2152b2 + _0x1880d3;
        }
    };
    if (_0x6f0b8[_0x4139('0x0')](_0x3d9a02['craftingRequirements'], null)) {
        return;
    }
    if (_0x1db23d) {
        currentCraft[_0x4139('0x1')](_0x3d9a02[_0x4139('0x2')], _0x332e3a);
    }
    for (var _0x4a3af4 = 0x0; _0x4a3af4 < _0x3d9a02[_0x4139('0x3')]['length']; _0x4a3af4++) {
        var _0x364e43 = _0x3d9a02['craftingRequirements'][_0x4a3af4][_0x4139('0x4')][_0x4139('0x2')];
        var _0x1101f3 = _0x6f0b8['oHFxB'](_0x3d9a02['craftingRequirements'][_0x4a3af4][_0x4139('0x5')], _0x332e3a);
        var _0x1a3a96 = currentCraft[_0x4139('0x6')](_0x364e43);
        if (_0x6f0b8['EPUBz'](_0x1a3a96, undefined)) {
            var _0x52bf91 = craftingRecipes[_0x4139('0x6')](_0x364e43);
            _0x6f0b8[_0x4139('0x7')](getCraftingRequirements, _0x52bf91, _0x1101f3);
            currentCraft['set'](_0x364e43, _0x1101f3);
        } else {
            var _0x52bf91 = craftingRecipes[_0x4139('0x6')](_0x364e43);
            _0x6f0b8['WPsNr'](getCraftingRequirements, _0x52bf91, _0x1101f3);
            var _0x2e2b3b = currentCraft[_0x4139('0x6')](_0x364e43);
            currentCraft[_0x4139('0x1')](_0x364e43, _0x6f0b8['mstTc'](_0x2e2b3b, _0x1101f3));
        }
    }
    return currentCraft;
}