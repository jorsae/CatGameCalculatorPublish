var _0x3051 = [
    'LEGENDARY',
    'getCrafts',
    'NZZQE',
    'DBMgn',
    'getItemsPerCraft',
    'ceil',
    'mEXEK',
    'nBGiq',
    'getCost',
    'hzWca',
    'pow',
    '\x20:\x20',
    'HKzWL',
    'tOLRZ',
    'craftingItem',
    'name',
    'gXDcI',
    'quantity',
    '3|0|4|1|2',
    'split',
    'craftingTime',
    'rarity',
    'craftingRequirements',
    'baseCost',
    'coins.\x20Crafting\x20Requirement:\x20',
    'mlCXR',
    'length',
    'LIOXc',
    'kuLUu',
    'ToDTr',
    'ecezE',
    'oIQNX',
    'getRarityValue',
    'HIDDEN',
    'RAW',
    'COMMON',
    'RARE',
    'EPIC'
];
(function (_0x4aacb0, _0x4fc008) {
    var _0x1c9c75 = function (_0x579f37) {
        while (--_0x579f37) {
            _0x4aacb0['push'](_0x4aacb0['shift']());
        }
    };
    _0x1c9c75(++_0x4fc008);
}(_0x3051, 0x7d));
var _0x3e02 = function (_0x1b2df3, _0x26ab35) {
    _0x1b2df3 = _0x1b2df3 - 0x0;
    var _0x215aa4 = _0x3051[_0x1b2df3];
    return _0x215aa4;
};
class CraftingRequirement {
    constructor(_0x22749e, _0x93cb18) {
        this['craftingItem'] = _0x22749e;
        this['quantity'] = _0x93cb18;
    }
    ['toString']() {
        var _0x6776a = {
            'HKzWL': function (_0x7e98af, _0x2e4f70) {
                return _0x7e98af + _0x2e4f70;
            },
            'tOLRZ': function (_0x40d3de, _0x558715) {
                return _0x40d3de + _0x558715;
            },
            'gXDcI': _0x3e02('0x0')
        };
        _0x6776a[_0x3e02('0x1')](_0x6776a[_0x3e02('0x2')](this[_0x3e02('0x3')][_0x3e02('0x4')], _0x6776a[_0x3e02('0x5')]), this[_0x3e02('0x6')]);
    }
}
class CraftingItem {
    constructor(_0x667128, _0x202f4b, _0x1c42bf, _0x6881a4, _0x46a697 = null) {
        var _0x352c53 = { 'TloZJ': _0x3e02('0x7') };
        var _0x345aaf = _0x352c53['TloZJ'][_0x3e02('0x8')]('|'), _0xfd3b72 = 0x0;
        while (!![]) {
            switch (_0x345aaf[_0xfd3b72++]) {
            case '0':
                this[_0x3e02('0x9')] = _0x202f4b;
                continue;
            case '1':
                this[_0x3e02('0xa')] = _0x6881a4;
                continue;
            case '2':
                this[_0x3e02('0xb')] = _0x46a697;
                continue;
            case '3':
                this['name'] = _0x667128;
                continue;
            case '4':
                this[_0x3e02('0xc')] = _0x1c42bf;
                continue;
            }
            break;
        }
    }
    ['toString']() {
        var _0x1947f6 = {
            'mlCXR': function (_0xdea2d0, _0x35a3d2) {
                return _0xdea2d0 < _0x35a3d2;
            },
            'LIOXc': '\x20:\x20',
            'kuLUu': function (_0xe58e7a, _0x12a20e) {
                return _0xe58e7a + _0x12a20e;
            },
            'ToDTr': function (_0x3f9c3c, _0x5039e4) {
                return _0x3f9c3c + _0x5039e4;
            },
            'ecezE': function (_0x3b3dfc, _0x1fb20c) {
                return _0x3b3dfc + _0x1fb20c;
            },
            'oIQNX': 'minutes,\x20',
            'hoEQD': _0x3e02('0xd')
        };
        var _0x118fca = '';
        for (var _0x6a057f = 0x0; _0x1947f6[_0x3e02('0xe')](_0x6a057f, this[_0x3e02('0xb')][_0x3e02('0xf')]); _0x6a057f++) {
            _0x118fca += this[_0x3e02('0xb')][_0x6a057f]['craftingItem'][_0x3e02('0x4')] + _0x1947f6[_0x3e02('0x10')] + this[_0x3e02('0xb')][_0x6a057f][_0x3e02('0x6')] + '\x20';
        }
        return _0x1947f6[_0x3e02('0x11')](_0x1947f6[_0x3e02('0x12')](_0x1947f6[_0x3e02('0x13')](_0x1947f6[_0x3e02('0x13')](_0x1947f6[_0x3e02('0x13')](this[_0x3e02('0x4')], ',\x20'), this['craftingTime']), _0x1947f6[_0x3e02('0x14')]), this['baseCost']) + _0x1947f6['hoEQD'], _0x118fca);
    }
}
class CraftingItemOutput {
    constructor(_0x196d42, _0x1bfb04, _0x4907b0, _0x50443e, _0x72597f) {
        var _0x47704d = '0|4|2|1|3'[_0x3e02('0x8')]('|'), _0x3aa4c7 = 0x0;
        while (!![]) {
            switch (_0x47704d[_0x3aa4c7++]) {
            case '0':
                this['name'] = _0x196d42;
                continue;
            case '1':
                this[_0x3e02('0xa')] = _0x50443e;
                continue;
            case '2':
                this[_0x3e02('0xc')] = _0x4907b0;
                continue;
            case '3':
                this['quantity'] = _0x72597f;
                continue;
            case '4':
                this[_0x3e02('0x9')] = _0x1bfb04;
                continue;
            }
            break;
        }
    }
    [_0x3e02('0x15')]() {
        switch (this[_0x3e02('0xa')]) {
        case rarity[_0x3e02('0x16')]:
            return 0x0;
        case rarity[_0x3e02('0x17')]:
            return 0x1;
        default:
        case rarity[_0x3e02('0x18')]:
            return 0x2;
        case rarity[_0x3e02('0x19')]:
            return 0x3;
        case rarity[_0x3e02('0x1a')]:
            return 0x4;
        case rarity[_0x3e02('0x1b')]:
            return 0x5;
        }
    }
    [_0x3e02('0x1c')](_0x4e00a7) {
        var _0x2647c3 = {
            'NZZQE': function (_0x534745, _0x29822a) {
                return _0x534745 < _0x29822a;
            },
            'DBMgn': function (_0x4ecd02, _0x2a5848) {
                return _0x4ecd02 / _0x2a5848;
            }
        };
        var _0x1ebf61 = 0x1;
        if (_0x2647c3[_0x3e02('0x1d')](this[_0x3e02('0x9')], _0x4e00a7)) {
            _0x1ebf61 = Math['ceil'](_0x2647c3[_0x3e02('0x1e')](_0x4e00a7, this[_0x3e02('0x9')]));
        }
        if (_0x1ebf61 > this[_0x3e02('0x6')]) {
            return this['quantity'];
        }
        return _0x1ebf61;
    }
    [_0x3e02('0x1f')](_0xa00b7) {
        var _0x121ca2 = {
            'mEXEK': function (_0x57c7ca, _0x227925) {
                return _0x57c7ca > _0x227925;
            },
            'nBGiq': function (_0x1fc60d, _0x3f3daf) {
                return _0x1fc60d / _0x3f3daf;
            }
        };
        var _0x28e7b5 = 0x1;
        if (this['craftingTime'] < _0xa00b7) {
            _0x28e7b5 = Math[_0x3e02('0x20')](_0xa00b7 / this['craftingTime']);
        }
        if (_0x121ca2[_0x3e02('0x21')](_0x28e7b5, this['quantity'])) {
            _0x28e7b5 = this[_0x3e02('0x6')];
        }
        return Math[_0x3e02('0x20')](_0x121ca2[_0x3e02('0x22')](this['quantity'], _0x28e7b5));
    }
    [_0x3e02('0x23')](_0x461df3) {
        var _0x585938 = {
            'hzWca': function (_0x4ed802, _0x589252) {
                return _0x4ed802 * _0x589252;
            },
            'aqHrn': function (_0x345ead, _0x50b2bb) {
                return _0x345ead + _0x50b2bb;
            }
        };
        var _0x112559 = this[_0x3e02('0x1f')](_0x461df3);
        var _0x4f7856 = this[_0x3e02('0x1c')](_0x461df3);
        return _0x585938[_0x3e02('0x24')](_0x585938['hzWca'](this[_0x3e02('0xc')] / 0x4, _0x585938['aqHrn'](Math[_0x3e02('0x25')](_0x112559, 0x2), 0x3 * _0x112559)), _0x4f7856);
    }
}