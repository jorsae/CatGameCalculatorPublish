var _0x124b = [
    'BpFJo',
    'wkqVK',
    'length',
    'craftingItem',
    'xASPE',
    'craftingRequirements',
    'quantity',
    'get',
    'set'
];
(function (_0x25d95e, _0x522b88) {
    var _0x257a47 = function (_0x427748) {
        while (--_0x427748) {
            _0x25d95e['push'](_0x25d95e['shift']());
        }
    };
    _0x257a47(++_0x522b88);
}(_0x124b, 0x1b1));
var _0x1dc9 = function (_0xd22165, _0x1e147a) {
    _0xd22165 = _0xd22165 - 0x0;
    var _0x3fab22 = _0x124b[_0xd22165];
    return _0x3fab22;
};
function getCraftingRequirements(_0x5a3ba9, _0x49708e = 0x1) {
    var _0x29e174 = {
        'wkqVK': function (_0x140df1, _0x2ee646) {
            return _0x140df1 === _0x2ee646;
        },
        'xASPE': function (_0x747c95, _0x5801b3) {
            return _0x747c95 * _0x5801b3;
        },
        'mKbto': function (_0x3cef40, _0x105249, _0x31b011) {
            return _0x3cef40(_0x105249, _0x31b011);
        },
        'WTawN': function (_0x28bed, _0x161071, _0x14d0d1) {
            return _0x28bed(_0x161071, _0x14d0d1);
        },
        'BpFJo': function (_0x3f7857, _0x2f5362) {
            return _0x3f7857 + _0x2f5362;
        }
    };
    if (_0x29e174[_0x1dc9('0x0')](_0x5a3ba9['craftingRequirements'], null)) {
        return;
    }
    currentCraft['set'](_0x5a3ba9['name'], _0x49708e);
    for (var _0x463442 = 0x0; _0x463442 < _0x5a3ba9['craftingRequirements'][_0x1dc9('0x1')]; _0x463442++) {
        var _0x2fbc7e = _0x5a3ba9['craftingRequirements'][_0x463442][_0x1dc9('0x2')]['name'];
        var _0x578cf7 = _0x29e174[_0x1dc9('0x3')](_0x5a3ba9[_0x1dc9('0x4')][_0x463442][_0x1dc9('0x5')], _0x49708e);
        var _0x6136b3 = currentCraft[_0x1dc9('0x6')](_0x2fbc7e);
        if (_0x29e174['wkqVK'](_0x6136b3, undefined)) {
            var _0x1b967b = craftingRecipes['get'](_0x2fbc7e);
            _0x29e174['mKbto'](getCraftingRequirements, _0x1b967b, _0x578cf7);
            currentCraft[_0x1dc9('0x7')](_0x2fbc7e, _0x578cf7);
        } else {
            var _0x1b967b = craftingRecipes['get'](_0x2fbc7e);
            _0x29e174['WTawN'](getCraftingRequirements, _0x1b967b, _0x578cf7);
            var _0xea4a03 = currentCraft['get'](_0x2fbc7e);
            currentCraft[_0x1dc9('0x7')](_0x2fbc7e, _0x29e174[_0x1dc9('0x8')](_0xea4a03, _0x578cf7));
        }
    }
    return currentCraft;
}