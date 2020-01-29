var _0x5da9 = [
    'haPRr',
    'quantity',
    'get',
    'HFPXp',
    'loBZL',
    'craftingRequirements',
    'set',
    'length',
    'name'
];
(function (_0x37aa9f, _0x5d4a83) {
    var _0x4fe712 = function (_0xa8b9e5) {
        while (--_0xa8b9e5) {
            _0x37aa9f['push'](_0x37aa9f['shift']());
        }
    };
    _0x4fe712(++_0x5d4a83);
}(_0x5da9, 0xd3));
var _0x110b = function (_0x1e4ac9, _0x5ec9e6) {
    _0x1e4ac9 = _0x1e4ac9 - 0x0;
    var _0x993f15 = _0x5da9[_0x1e4ac9];
    return _0x993f15;
};
var currentCraft = new Map();
function getCraftingRequirements(_0x3c3652, _0x372557 = 0x1) {
    var _0x8be0e = {
        'loBZL': function (_0x1c8154, _0x3bc712) {
            return _0x1c8154 === _0x3bc712;
        },
        'haPRr': function (_0x45444e, _0x13fcfa) {
            return _0x45444e * _0x13fcfa;
        },
        'HFPXp': function (_0x414885, _0x5eb98d) {
            return _0x414885 === _0x5eb98d;
        },
        'begIQ': function (_0x5f06d4, _0x2fe8d3, _0x17dd55) {
            return _0x5f06d4(_0x2fe8d3, _0x17dd55);
        },
        'KkmDp': function (_0x125d02, _0x27f08c, _0x1fcb40) {
            return _0x125d02(_0x27f08c, _0x1fcb40);
        }
    };
    if (_0x8be0e[_0x110b('0x0')](_0x3c3652[_0x110b('0x1')], null)) {
        return;
    }
    currentCraft[_0x110b('0x2')](_0x3c3652['name'], _0x372557);
    for (var _0x54d9b0 = 0x0; _0x54d9b0 < _0x3c3652[_0x110b('0x1')][_0x110b('0x3')]; _0x54d9b0++) {
        var _0x2b1b32 = _0x3c3652['craftingRequirements'][_0x54d9b0]['craftingItem'][_0x110b('0x4')];
        var _0x509c86 = _0x8be0e[_0x110b('0x5')](_0x3c3652[_0x110b('0x1')][_0x54d9b0][_0x110b('0x6')], _0x372557);
        var _0x45b7cc = currentCraft[_0x110b('0x7')](_0x2b1b32);
        if (_0x8be0e[_0x110b('0x8')](_0x45b7cc, undefined)) {
            var _0x53c0ef = craftingRecipes[_0x110b('0x7')](_0x2b1b32);
            _0x8be0e['begIQ'](getCraftingRequirements, _0x53c0ef, _0x509c86);
            currentCraft[_0x110b('0x2')](_0x2b1b32, _0x509c86);
        } else {
            var _0x53c0ef = craftingRecipes['get'](_0x2b1b32);
            _0x8be0e['KkmDp'](getCraftingRequirements, _0x53c0ef, _0x509c86);
            var _0x4bb0ee = currentCraft['get'](_0x2b1b32);
            currentCraft[_0x110b('0x2')](_0x2b1b32, _0x4bb0ee + _0x509c86);
        }
    }
    return currentCraft;
}