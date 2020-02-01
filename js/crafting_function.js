var _0x41c5 = [
    'VFeFZ',
    'tAgsU',
    'set',
    'OwJyz',
    'craftingRequirements',
    'length',
    'quantity',
    'get',
    'yLMma',
    'GgWRy'
];
(function (_0x1a026c, _0x2492de) {
    var _0x2d8f05 = function (_0x4b81bb) {
        while (--_0x4b81bb) {
            _0x1a026c['push'](_0x1a026c['shift']());
        }
    };
    _0x2d8f05(++_0x2492de);
}(_0x41c5, 0x1c3));
var _0x51c7 = function (_0x615a63, _0x4ebd31) {
    _0x615a63 = _0x615a63 - 0x0;
    var _0x505004 = _0x41c5[_0x615a63];
    return _0x505004;
};
function getCraftingRequirements(_0x4989ee, _0x311b1e = 0x1) {
    var _0x5e055d = {
        'tAgsU': function (_0xbb643, _0x6fa5f5) {
            return _0xbb643 === _0x6fa5f5;
        },
        'OwJyz': function (_0x5f2c6a, _0x4fc289) {
            return _0x5f2c6a < _0x4fc289;
        },
        'yLMma': function (_0x5c316c, _0x36d5f7) {
            return _0x5c316c === _0x36d5f7;
        },
        'GgWRy': function (_0x3d5a9f, _0xc313d4, _0xc689f6) {
            return _0x3d5a9f(_0xc313d4, _0xc689f6);
        },
        'VFeFZ': function (_0x3fce52, _0x54c69f) {
            return _0x3fce52 + _0x54c69f;
        }
    };
    if (_0x5e055d[_0x51c7('0x0')](_0x4989ee['craftingRequirements'], null)) {
        return;
    }
    currentCraft[_0x51c7('0x1')](_0x4989ee['name'], _0x311b1e);
    for (var _0xd09f7 = 0x0; _0x5e055d[_0x51c7('0x2')](_0xd09f7, _0x4989ee[_0x51c7('0x3')][_0x51c7('0x4')]); _0xd09f7++) {
        var _0x4a9ab2 = _0x4989ee['craftingRequirements'][_0xd09f7]['craftingItem']['name'];
        var _0x89da86 = _0x4989ee[_0x51c7('0x3')][_0xd09f7][_0x51c7('0x5')] * _0x311b1e;
        var _0x3aeb48 = currentCraft[_0x51c7('0x6')](_0x4a9ab2);
        if (_0x5e055d[_0x51c7('0x7')](_0x3aeb48, undefined)) {
            var _0x1826a0 = craftingRecipes[_0x51c7('0x6')](_0x4a9ab2);
            _0x5e055d['GgWRy'](getCraftingRequirements, _0x1826a0, _0x89da86);
            currentCraft['set'](_0x4a9ab2, _0x89da86);
        } else {
            var _0x1826a0 = craftingRecipes[_0x51c7('0x6')](_0x4a9ab2);
            _0x5e055d[_0x51c7('0x8')](getCraftingRequirements, _0x1826a0, _0x89da86);
            var _0x27e46d = currentCraft[_0x51c7('0x6')](_0x4a9ab2);
            currentCraft[_0x51c7('0x1')](_0x4a9ab2, _0x5e055d[_0x51c7('0x9')](_0x27e46d, _0x89da86));
        }
    }
    return currentCraft;
}