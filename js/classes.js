var _0x27df = [
    'ApQSY',
    'kmBlb',
    '1|3|4|2|0',
    'Bdezk',
    'craftingRequirements',
    'name',
    'rarity',
    'toString',
    '\x20:\x20',
    'qHikE',
    'length',
    'xaxCK',
    'WvCBs',
    'LZdVw',
    'RQgxl',
    'hWxxW',
    'IKjvT',
    'minutes,\x20',
    'coins.\x20Crafting\x20Requirement:\x20',
    'MypNs',
    'split',
    'baseCost',
    'HIDDEN',
    'RAW',
    'COMMON',
    'RARE',
    'EPIC',
    'LEGENDARY',
    'iCENU',
    'ceil',
    'BSBEx',
    'getItemsPerCraft',
    'BPhZB',
    'craftingTime',
    'bIQay',
    'getCost',
    'getCrafts',
    'BnVZn',
    'pow',
    'YAaBM',
    'craftingItem',
    'quantity'
];
(function (_0x43bdfc, _0x52e4c6) {
    var _0xb67384 = function (_0x27295a) {
        while (--_0x27295a) {
            _0x43bdfc['push'](_0x43bdfc['shift']());
        }
    };
    _0xb67384(++_0x52e4c6);
}(_0x27df, 0x7c));
var _0x509f = function (_0x47a189, _0x463a1d) {
    _0x47a189 = _0x47a189 - 0x0;
    var _0x22a648 = _0x27df[_0x47a189];
    return _0x22a648;
};
class CraftingRequirement {
    constructor(_0x26df9d, _0x50943c) {
        this[_0x509f('0x0')] = _0x26df9d;
        this[_0x509f('0x1')] = _0x50943c;
    }
    ['toString']() {
        var _0x5dcbf3 = {
            'ApQSY': function (_0x4b6321, _0x4362e1) {
                return _0x4b6321 + _0x4362e1;
            },
            'kmBlb': function (_0x19d973, _0x38622d) {
                return _0x19d973 + _0x38622d;
            }
        };
        _0x5dcbf3[_0x509f('0x2')](_0x5dcbf3[_0x509f('0x3')](this[_0x509f('0x0')]['name'], '\x20:\x20'), this[_0x509f('0x1')]);
    }
}
class CraftingItem {
    constructor(_0x1a3905, _0x551195, _0x567305, _0x1b90ba, _0x38b4cc = null) {
        var _0x39f5e0 = { 'Bdezk': _0x509f('0x4') };
        var _0x198b0f = _0x39f5e0[_0x509f('0x5')]['split']('|'), _0x39dc1a = 0x0;
        while (!![]) {
            switch (_0x198b0f[_0x39dc1a++]) {
            case '0':
                this[_0x509f('0x6')] = _0x38b4cc;
                continue;
            case '1':
                this[_0x509f('0x7')] = _0x1a3905;
                continue;
            case '2':
                this[_0x509f('0x8')] = _0x1b90ba;
                continue;
            case '3':
                this['craftingTime'] = _0x551195;
                continue;
            case '4':
                this['baseCost'] = _0x567305;
                continue;
            }
            break;
        }
    }
    [_0x509f('0x9')]() {
        var _0x2c8df8 = {
            'qHikE': function (_0x5cd15e, _0x4d23ba) {
                return _0x5cd15e < _0x4d23ba;
            },
            'ZShJA': function (_0x3665b6, _0x4ada46) {
                return _0x3665b6 + _0x4ada46;
            },
            'xaxCK': function (_0x4a5917, _0x53f3b2) {
                return _0x4a5917 + _0x53f3b2;
            },
            'WvCBs': _0x509f('0xa'),
            'LZdVw': function (_0x548587, _0x153177) {
                return _0x548587 + _0x153177;
            },
            'RQgxl': function (_0x1add9d, _0x3480c6) {
                return _0x1add9d + _0x3480c6;
            },
            'hWxxW': function (_0x10c992, _0x469832) {
                return _0x10c992 + _0x469832;
            },
            'IKjvT': function (_0x4969d4, _0xfcb56d) {
                return _0x4969d4 + _0xfcb56d;
            }
        };
        var _0x1352f3 = '';
        for (var _0xee7b65 = 0x0; _0x2c8df8[_0x509f('0xb')](_0xee7b65, this[_0x509f('0x6')][_0x509f('0xc')]); _0xee7b65++) {
            _0x1352f3 += _0x2c8df8['ZShJA'](_0x2c8df8[_0x509f('0xd')](this[_0x509f('0x6')][_0xee7b65][_0x509f('0x0')]['name'] + _0x2c8df8[_0x509f('0xe')], this[_0x509f('0x6')][_0xee7b65][_0x509f('0x1')]), '\x20');
        }
        return _0x2c8df8[_0x509f('0xd')](_0x2c8df8[_0x509f('0xf')](_0x2c8df8[_0x509f('0x10')](_0x2c8df8[_0x509f('0x11')](_0x2c8df8[_0x509f('0x12')](this['name'], ',\x20'), this['craftingTime']) + _0x509f('0x13'), this['baseCost']), _0x509f('0x14')), _0x1352f3);
    }
}
class CraftingItemOutput {
    constructor(_0x4c6010, _0xa0f35d, _0xa053e6, _0x468357, _0x11d297) {
        var _0xaab44 = { 'MypNs': '2|0|4|1|3' };
        var _0x493fdb = _0xaab44[_0x509f('0x15')][_0x509f('0x16')]('|'), _0x8e289c = 0x0;
        while (!![]) {
            switch (_0x493fdb[_0x8e289c++]) {
            case '0':
                this['craftingTime'] = _0xa0f35d;
                continue;
            case '1':
                this[_0x509f('0x8')] = _0x468357;
                continue;
            case '2':
                this[_0x509f('0x7')] = _0x4c6010;
                continue;
            case '3':
                this[_0x509f('0x1')] = _0x11d297;
                continue;
            case '4':
                this[_0x509f('0x17')] = _0xa053e6;
                continue;
            }
            break;
        }
    }
    ['getRarityValue']() {
        switch (this[_0x509f('0x8')]) {
        case rarity[_0x509f('0x18')]:
            return 0x0;
        case rarity[_0x509f('0x19')]:
            return 0x1;
        default:
        case rarity[_0x509f('0x1a')]:
            return 0x2;
        case rarity[_0x509f('0x1b')]:
            return 0x3;
        case rarity[_0x509f('0x1c')]:
            return 0x4;
        case rarity[_0x509f('0x1d')]:
            return 0x5;
        }
    }
    ['getCrafts'](_0x3bfae7) {
        var _0x2b5146 = {
            'iCENU': function (_0x426b16, _0x255db5) {
                return _0x426b16 < _0x255db5;
            },
            'BSBEx': function (_0x10d3e8, _0x8b1d19) {
                return _0x10d3e8 / _0x8b1d19;
            }
        };
        var _0x26baca = 0x1;
        if (_0x2b5146[_0x509f('0x1e')](this['craftingTime'], _0x3bfae7)) {
            _0x26baca = Math[_0x509f('0x1f')](_0x2b5146[_0x509f('0x20')](_0x3bfae7, this['craftingTime']));
        }
        if (_0x26baca > this[_0x509f('0x1')]) {
            return this[_0x509f('0x1')];
        }
        return _0x26baca;
    }
    [_0x509f('0x21')](_0x42cbf7) {
        var _0x2d36e5 = {
            'BPhZB': function (_0x5744f8, _0x103459) {
                return _0x5744f8 < _0x103459;
            },
            'cpxwd': function (_0xb4298, _0x22ec1b) {
                return _0xb4298 / _0x22ec1b;
            },
            'bgnbi': function (_0x4d7f48, _0x6abcc9) {
                return _0x4d7f48 > _0x6abcc9;
            },
            'bIQay': function (_0x19aa90, _0x2bc663) {
                return _0x19aa90 / _0x2bc663;
            }
        };
        var _0x38a637 = 0x1;
        if (_0x2d36e5[_0x509f('0x22')](this[_0x509f('0x23')], _0x42cbf7)) {
            _0x38a637 = Math[_0x509f('0x1f')](_0x2d36e5['cpxwd'](_0x42cbf7, this[_0x509f('0x23')]));
        }
        if (_0x2d36e5['bgnbi'](_0x38a637, this['quantity'])) {
            _0x38a637 = this['quantity'];
        }
        return Math['ceil'](_0x2d36e5[_0x509f('0x24')](this[_0x509f('0x1')], _0x38a637));
    }
    [_0x509f('0x25')](_0x340633) {
        var _0xbceac9 = {
            'Ntyua': function (_0x135455, _0x13d9c5) {
                return _0x135455 * _0x13d9c5;
            },
            'BnVZn': function (_0x5e21c0, _0x447f89) {
                return _0x5e21c0 / _0x447f89;
            },
            'YAaBM': function (_0x413273, _0x49ad69) {
                return _0x413273 * _0x49ad69;
            }
        };
        var _0x43e43d = this[_0x509f('0x21')](_0x340633);
        var _0x5b527d = this[_0x509f('0x26')](_0x340633);
        return _0xbceac9['Ntyua'](_0xbceac9[_0x509f('0x27')](this['baseCost'], 0x4) * (Math[_0x509f('0x28')](_0x43e43d, 0x2) + _0xbceac9[_0x509f('0x29')](0x3, _0x43e43d)), _0x5b527d);
    }
}