var _0x3c02 = [
    'GjXRJ',
    'length',
    'name',
    'get',
    'set',
    'zqElh',
    'craftingRequirements'
];
(function (_0x1d13d7, _0x497a40) {
    var _0x4dee76 = function (_0x28a8d5) {
        while (--_0x28a8d5) {
            _0x1d13d7['push'](_0x1d13d7['shift']());
        }
    };
    _0x4dee76(++_0x497a40);
}(_0x3c02, 0xec));
var _0x3cd1 = function (_0x15523f, _0x32822c) {
    _0x15523f = _0x15523f - 0x0;
    var _0x229cb9 = _0x3c02[_0x15523f];
    return _0x229cb9;
};
function getCraftingRequirements(_0xf2010, _0x56c95d = 0x1) {
    var _0x396a42 = {
        'zqElh': function (_0x40788d, _0x50b71c) {
            return _0x40788d === _0x50b71c;
        },
        'GjXRJ': function (_0x470175, _0x2d8f39) {
            return _0x470175 < _0x2d8f39;
        },
        'xbrFy': function (_0x52bcd0, _0xb060f0, _0x373c48) {
            return _0x52bcd0(_0xb060f0, _0x373c48);
        },
        'VcyYK': function (_0x2d0096, _0x108ff9, _0x3088f2) {
            return _0x2d0096(_0x108ff9, _0x3088f2);
        }
    };
    if (_0x396a42[_0x3cd1('0x0')](_0xf2010[_0x3cd1('0x1')], null)) {
        return;
    }
    for (var _0x4144ed = 0x0; _0x396a42[_0x3cd1('0x2')](_0x4144ed, _0xf2010[_0x3cd1('0x1')][_0x3cd1('0x3')]); _0x4144ed++) {
        var _0xb2d36a = _0xf2010['craftingRequirements'][_0x4144ed]['craftingItem'][_0x3cd1('0x4')];
        var _0x12e8da = _0xf2010[_0x3cd1('0x1')][_0x4144ed]['quantity'] * _0x56c95d;
        var _0x5a61ac = currentCraft[_0x3cd1('0x5')](_0xb2d36a);
        if (_0x396a42[_0x3cd1('0x0')](_0x5a61ac, undefined)) {
            var _0x22f17c = craftingRecipes['get'](_0xb2d36a);
            _0x396a42['xbrFy'](getCraftingRequirements, _0x22f17c, _0x12e8da);
            currentCraft[_0x3cd1('0x6')](_0xb2d36a, _0x12e8da);
        } else {
            var _0x22f17c = craftingRecipes['get'](_0xb2d36a);
            _0x396a42['VcyYK'](getCraftingRequirements, _0x22f17c, _0x12e8da);
            var _0x4f3539 = currentCraft[_0x3cd1('0x5')](_0xb2d36a);
            currentCraft['set'](_0xb2d36a, _0x4f3539 + _0x12e8da);
        }
    }
    return currentCraft;
}