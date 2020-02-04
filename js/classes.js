var _0x3208 = [
    'rarity',
    'HIDDEN',
    'COMMON',
    'RARE',
    'EPIC',
    'NzVMX',
    'getItemsPerCraft',
    'LQycJ',
    'ceil',
    'ClteN',
    'getCost',
    'getCrafts',
    'eILwp',
    'veluU',
    'pow',
    'craftingItem',
    'quantity',
    'toString',
    'WKGbE',
    'name',
    'craftingTime',
    'baseCost',
    'craftingRequirements',
    'minutes,\x20',
    'coins.\x20Crafting\x20Requirement:\x20',
    'SXcgw',
    'length',
    'SPRbx',
    'CeMgA',
    'HcNIZ',
    'epTTY',
    'mqVpz',
    'XNunD',
    '0|4|2|1|3',
    'DmqYc',
    'split'
];
(function (_0x22b5a8, _0x58a08b) {
    var _0x33e604 = function (_0x4f4b85) {
        while (--_0x4f4b85) {
            _0x22b5a8['push'](_0x22b5a8['shift']());
        }
    };
    _0x33e604(++_0x58a08b);
}(_0x3208, 0xc3));
var _0x1e70 = function (_0xf006e, _0x19377b) {
    _0xf006e = _0xf006e - 0x0;
    var _0x5dc45a = _0x3208[_0xf006e];
    return _0x5dc45a;
};
class CraftingRequirement {
    constructor(_0x284a62, _0x4d8ef7) {
        this[_0x1e70('0x0')] = _0x284a62;
        this[_0x1e70('0x1')] = _0x4d8ef7;
    }
    [_0x1e70('0x2')]() {
        var _0x1e6c09 = {
            'WKGbE': function (_0x321a4e, _0x29258c) {
                return _0x321a4e + _0x29258c;
            },
            'LBhkn': '\x20:\x20'
        };
        _0x1e6c09[_0x1e70('0x3')](this[_0x1e70('0x0')][_0x1e70('0x4')] + _0x1e6c09['LBhkn'], this['quantity']);
    }
}
class CraftingItem {
    constructor(_0x5c8169, _0x2f4bad, _0x2f683, _0x1dd60d, _0x2c48f5 = null) {
        this[_0x1e70('0x4')] = _0x5c8169;
        this[_0x1e70('0x5')] = _0x2f4bad;
        this[_0x1e70('0x6')] = _0x2f683;
        this['rarity'] = _0x1dd60d;
        this[_0x1e70('0x7')] = _0x2c48f5;
    }
    [_0x1e70('0x2')]() {
        var _0x2dbf0f = {
            'SXcgw': function (_0x3087bc, _0x41fe2d) {
                return _0x3087bc < _0x41fe2d;
            },
            'SPRbx': function (_0x2c1044, _0x168c4a) {
                return _0x2c1044 + _0x168c4a;
            },
            'CeMgA': function (_0x380c48, _0x3ff415) {
                return _0x380c48 + _0x3ff415;
            },
            'HcNIZ': '\x20:\x20',
            'epTTY': function (_0x26479b, _0x1c60b1) {
                return _0x26479b + _0x1c60b1;
            },
            'mqVpz': _0x1e70('0x8'),
            'XNunD': _0x1e70('0x9')
        };
        var _0x324109 = '';
        for (var _0x3059d7 = 0x0; _0x2dbf0f[_0x1e70('0xa')](_0x3059d7, this[_0x1e70('0x7')][_0x1e70('0xb')]); _0x3059d7++) {
            _0x324109 += _0x2dbf0f[_0x1e70('0xc')](_0x2dbf0f[_0x1e70('0xd')](this[_0x1e70('0x7')][_0x3059d7][_0x1e70('0x0')][_0x1e70('0x4')], _0x2dbf0f[_0x1e70('0xe')]) + this['craftingRequirements'][_0x3059d7][_0x1e70('0x1')], '\x20');
        }
        return _0x2dbf0f['CeMgA'](_0x2dbf0f['CeMgA'](_0x2dbf0f[_0x1e70('0xf')](this[_0x1e70('0x4')] + ',\x20', this['craftingTime']), _0x2dbf0f[_0x1e70('0x10')]) + this[_0x1e70('0x6')] + _0x2dbf0f[_0x1e70('0x11')], _0x324109);
    }
}
class CraftingItemOutput {
    constructor(_0x2a6f05, _0x4716e8, _0xd67e61, _0x435f02, _0x290ce1) {
        var _0x36e5d2 = { 'DmqYc': _0x1e70('0x12') };
        var _0x40d1d7 = _0x36e5d2[_0x1e70('0x13')][_0x1e70('0x14')]('|'), _0x5a0ada = 0x0;
        while (!![]) {
            switch (_0x40d1d7[_0x5a0ada++]) {
            case '0':
                this[_0x1e70('0x4')] = _0x2a6f05;
                continue;
            case '1':
                this[_0x1e70('0x15')] = _0x435f02;
                continue;
            case '2':
                this[_0x1e70('0x6')] = _0xd67e61;
                continue;
            case '3':
                this[_0x1e70('0x1')] = _0x290ce1;
                continue;
            case '4':
                this[_0x1e70('0x5')] = _0x4716e8;
                continue;
            }
            break;
        }
    }
    ['getRarityValue']() {
        switch (this[_0x1e70('0x15')]) {
        case rarity[_0x1e70('0x16')]:
            return 0x0;
        case rarity['RAW']:
            return 0x1;
        default:
        case rarity[_0x1e70('0x17')]:
            return 0x2;
        case rarity[_0x1e70('0x18')]:
            return 0x3;
        case rarity[_0x1e70('0x19')]:
            return 0x4;
        case rarity['LEGENDARY']:
            return 0x5;
        }
    }
    ['getCrafts'](_0x54bbcb) {
        var _0x4cb75e = {
            'NzVMX': function (_0x5350fa, _0x2990b1) {
                return _0x5350fa < _0x2990b1;
            },
            'NKhpx': function (_0x19b13a, _0x1b272f) {
                return _0x19b13a / _0x1b272f;
            }
        };
        var _0x3a90f2 = 0x1;
        if (_0x4cb75e[_0x1e70('0x1a')](this[_0x1e70('0x5')], _0x54bbcb)) {
            _0x3a90f2 = Math['ceil'](_0x4cb75e['NKhpx'](_0x54bbcb, this['craftingTime']));
        }
        if (_0x3a90f2 > this[_0x1e70('0x1')]) {
            return this['quantity'];
        }
        return _0x3a90f2;
    }
    [_0x1e70('0x1b')](_0x20619f) {
        var _0x1911b8 = {
            'LQycJ': function (_0x265cc4, _0x1a882c) {
                return _0x265cc4 < _0x1a882c;
            },
            'sawJU': function (_0x532655, _0x2d1916) {
                return _0x532655 / _0x2d1916;
            },
            'ClteN': function (_0x261e29, _0x148c9c) {
                return _0x261e29 > _0x148c9c;
            }
        };
        var _0x13a311 = 0x1;
        if (_0x1911b8[_0x1e70('0x1c')](this[_0x1e70('0x5')], _0x20619f)) {
            _0x13a311 = Math[_0x1e70('0x1d')](_0x1911b8['sawJU'](_0x20619f, this[_0x1e70('0x5')]));
        }
        if (_0x1911b8[_0x1e70('0x1e')](_0x13a311, this[_0x1e70('0x1')])) {
            _0x13a311 = this['quantity'];
        }
        return Math[_0x1e70('0x1d')](this[_0x1e70('0x1')] / _0x13a311);
    }
    [_0x1e70('0x1f')](_0x186126) {
        var _0x5a1107 = {
            'eILwp': function (_0x33f8f2, _0x2d5a3c) {
                return _0x33f8f2 * _0x2d5a3c;
            },
            'veluU': function (_0x1a4b77, _0x96cd4d) {
                return _0x1a4b77 + _0x96cd4d;
            }
        };
        var _0xffe7bb = this[_0x1e70('0x1b')](_0x186126);
        var _0x9920c7 = this[_0x1e70('0x20')](_0x186126);
        return _0x5a1107[_0x1e70('0x21')](_0x5a1107[_0x1e70('0x21')](this['baseCost'] / 0x4, _0x5a1107[_0x1e70('0x22')](Math[_0x1e70('0x23')](_0xffe7bb, 0x2), _0x5a1107[_0x1e70('0x21')](0x3, _0xffe7bb))), _0x9920c7);
    }
}