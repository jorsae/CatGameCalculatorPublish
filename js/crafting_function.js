var _0x4c04 = [
    'feHYW',
    'craftingRequirements',
    'ZcOyP',
    'length',
    'craftingItem',
    'name',
    'quantity',
    'get',
    'HwGyh',
    'set'
];
(function (_0x1928a2, _0x3971df) {
    var _0x404fe2 = function (_0x7071c7) {
        while (--_0x7071c7) {
            _0x1928a2['push'](_0x1928a2['shift']());
        }
    };
    _0x404fe2(++_0x3971df);
}(_0x4c04, 0x1f4));
var _0x4c6e = function (_0x4568ea, _0x1836e4) {
    _0x4568ea = _0x4568ea - 0x0;
    var _0x17436b = _0x4c04[_0x4568ea];
    return _0x17436b;
};
function getCraftingRequirements(_0x4e52c4, _0x4a1a7c = 0x1) {
    var _0xf9355 = {
        'feHYW': function (_0x231f6b, _0x16f8d6) {
            return _0x231f6b === _0x16f8d6;
        },
        'ZcOyP': function (_0x4abcce, _0xfd943e) {
            return _0x4abcce < _0xfd943e;
        },
        'HMGam': function (_0x567269, _0x4bfa35) {
            return _0x567269 * _0x4bfa35;
        },
        'HwGyh': function (_0x576ec0, _0x368f34, _0x4d658d) {
            return _0x576ec0(_0x368f34, _0x4d658d);
        }
    };
    if (_0xf9355[_0x4c6e('0x0')](_0x4e52c4[_0x4c6e('0x1')], null)) {
        return;
    }
    for (var _0x1a9ff8 = 0x0; _0xf9355[_0x4c6e('0x2')](_0x1a9ff8, _0x4e52c4[_0x4c6e('0x1')][_0x4c6e('0x3')]); _0x1a9ff8++) {
        var _0x1172dd = _0x4e52c4[_0x4c6e('0x1')][_0x1a9ff8][_0x4c6e('0x4')][_0x4c6e('0x5')];
        var _0x501fbd = _0xf9355['HMGam'](_0x4e52c4[_0x4c6e('0x1')][_0x1a9ff8][_0x4c6e('0x6')], _0x4a1a7c);
        var _0xad7f65 = currentCraft[_0x4c6e('0x7')](_0x1172dd);
        if (_0xad7f65 === undefined) {
            var _0x3133bc = craftingRecipes[_0x4c6e('0x7')](_0x1172dd);
            getCraftingRequirements(_0x3133bc, _0x501fbd);
            currentCraft['set'](_0x1172dd, _0x501fbd);
        } else {
            var _0x3133bc = craftingRecipes[_0x4c6e('0x7')](_0x1172dd);
            _0xf9355[_0x4c6e('0x8')](getCraftingRequirements, _0x3133bc, _0x501fbd);
            var _0x56a69f = currentCraft[_0x4c6e('0x7')](_0x1172dd);
            currentCraft[_0x4c6e('0x9')](_0x1172dd, _0x56a69f + _0x501fbd);
        }
    }
    return currentCraft;
}