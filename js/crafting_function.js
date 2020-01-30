var _0x2f14 = [
    'ruDwO',
    'length',
    'quantity',
    'mEMib',
    'iETYL',
    'odWZm',
    'craftingRequirements',
    'set',
    'name'
];
(function (_0x4788e1, _0x3e1085) {
    var _0x51fcac = function (_0x55a42a) {
        while (--_0x55a42a) {
            _0x4788e1['push'](_0x4788e1['shift']());
        }
    };
    _0x51fcac(++_0x3e1085);
}(_0x2f14, 0xcb));
var _0xce59 = function (_0x116852, _0x40a986) {
    _0x116852 = _0x116852 - 0x0;
    var _0x14f1e2 = _0x2f14[_0x116852];
    return _0x14f1e2;
};
function getCraftingRequirements(_0x2f1b7e, _0x25d058 = 0x1) {
    var _0x114269 = {
        'odWZm': function (_0x3e2ac7, _0x2a267b) {
            return _0x3e2ac7 === _0x2a267b;
        },
        'ruDwO': function (_0x31abfb, _0x3f9de9) {
            return _0x31abfb < _0x3f9de9;
        },
        'mEMib': function (_0x4b994e, _0x42858d) {
            return _0x4b994e === _0x42858d;
        },
        'TgwGU': function (_0x294ca1, _0x5ad8e6, _0x591858) {
            return _0x294ca1(_0x5ad8e6, _0x591858);
        },
        'iETYL': function (_0xda883d, _0x2e23aa, _0x49b161) {
            return _0xda883d(_0x2e23aa, _0x49b161);
        },
        'IATtF': function (_0xabae36, _0x20158d) {
            return _0xabae36 + _0x20158d;
        }
    };
    if (_0x114269[_0xce59('0x0')](_0x2f1b7e[_0xce59('0x1')], null)) {
        return;
    }
    currentCraft[_0xce59('0x2')](_0x2f1b7e[_0xce59('0x3')], _0x25d058);
    for (var _0x393322 = 0x0; _0x114269[_0xce59('0x4')](_0x393322, _0x2f1b7e[_0xce59('0x1')][_0xce59('0x5')]); _0x393322++) {
        var _0x5bc17b = _0x2f1b7e[_0xce59('0x1')][_0x393322]['craftingItem']['name'];
        var _0x57b070 = _0x2f1b7e[_0xce59('0x1')][_0x393322][_0xce59('0x6')] * _0x25d058;
        var _0xf40ee0 = currentCraft['get'](_0x5bc17b);
        if (_0x114269[_0xce59('0x7')](_0xf40ee0, undefined)) {
            var _0x3515c0 = craftingRecipes['get'](_0x5bc17b);
            _0x114269['TgwGU'](getCraftingRequirements, _0x3515c0, _0x57b070);
            currentCraft[_0xce59('0x2')](_0x5bc17b, _0x57b070);
        } else {
            var _0x3515c0 = craftingRecipes['get'](_0x5bc17b);
            _0x114269[_0xce59('0x8')](getCraftingRequirements, _0x3515c0, _0x57b070);
            var _0x4e6e82 = currentCraft['get'](_0x5bc17b);
            currentCraft['set'](_0x5bc17b, _0x114269['IATtF'](_0x4e6e82, _0x57b070));
        }
    }
    return currentCraft;
}