var _0x2223 = [
    'PtmyG',
    'length',
    'craftingItem',
    'bfWhG',
    'quantity',
    'get',
    'RZIpv',
    'RsZhQ',
    'Jrmvu',
    'craftingRequirements',
    'set',
    'name'
];
(function (_0x3112c8, _0x19e6c5) {
    var _0x1eebfa = function (_0x748ba2) {
        while (--_0x748ba2) {
            _0x3112c8['push'](_0x3112c8['shift']());
        }
    };
    _0x1eebfa(++_0x19e6c5);
}(_0x2223, 0x140));
var _0x5642 = function (_0xf0137b, _0x4bd65d) {
    _0xf0137b = _0xf0137b - 0x0;
    var _0xba5a84 = _0x2223[_0xf0137b];
    return _0xba5a84;
};
function getCraftingRequirements(_0x3c1bac, _0x3f0de9 = 0x1) {
    var _0x4f0447 = {
        'Jrmvu': function (_0x4765c8, _0x461872) {
            return _0x4765c8 === _0x461872;
        },
        'PtmyG': function (_0x7c5dfb, _0x2dad2a) {
            return _0x7c5dfb < _0x2dad2a;
        },
        'bfWhG': function (_0x22d46e, _0x5c7328) {
            return _0x22d46e * _0x5c7328;
        },
        'RZIpv': function (_0x2a9fbd, _0xf1c046, _0x237402) {
            return _0x2a9fbd(_0xf1c046, _0x237402);
        },
        'RsZhQ': function (_0x1c66de, _0x1d8696) {
            return _0x1c66de + _0x1d8696;
        }
    };
    if (_0x4f0447[_0x5642('0x0')](_0x3c1bac[_0x5642('0x1')], null)) {
        return;
    }
    currentCraft[_0x5642('0x2')](_0x3c1bac[_0x5642('0x3')], _0x3f0de9);
    for (var _0x3335b5 = 0x0; _0x4f0447[_0x5642('0x4')](_0x3335b5, _0x3c1bac[_0x5642('0x1')][_0x5642('0x5')]); _0x3335b5++) {
        var _0x3a1e13 = _0x3c1bac[_0x5642('0x1')][_0x3335b5][_0x5642('0x6')][_0x5642('0x3')];
        var _0x36b306 = _0x4f0447[_0x5642('0x7')](_0x3c1bac[_0x5642('0x1')][_0x3335b5][_0x5642('0x8')], _0x3f0de9);
        var _0x5a4f45 = currentCraft[_0x5642('0x9')](_0x3a1e13);
        if (_0x4f0447[_0x5642('0x0')](_0x5a4f45, undefined)) {
            var _0x72f146 = craftingRecipes[_0x5642('0x9')](_0x3a1e13);
            _0x4f0447[_0x5642('0xa')](getCraftingRequirements, _0x72f146, _0x36b306);
            currentCraft[_0x5642('0x2')](_0x3a1e13, _0x36b306);
        } else {
            var _0x72f146 = craftingRecipes[_0x5642('0x9')](_0x3a1e13);
            getCraftingRequirements(_0x72f146, _0x36b306);
            var _0x5607a2 = currentCraft['get'](_0x3a1e13);
            currentCraft[_0x5642('0x2')](_0x3a1e13, _0x4f0447[_0x5642('0xb')](_0x5607a2, _0x36b306));
        }
    }
    return currentCraft;
}