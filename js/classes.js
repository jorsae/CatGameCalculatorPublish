var _0x1851 = [
    'toString',
    '\x20:\x20',
    'WKVaP',
    'name',
    'sutUg',
    'split',
    'craftingTime',
    'baseCost',
    'craftingRequirements',
    'minutes,\x20',
    'coins.\x20Crafting\x20Requirement:\x20',
    'FYmRE',
    'length',
    'yglaS',
    'yzitw',
    'FQeIa',
    'rdgBg',
    'gEnvm',
    'rarity',
    'getRarityValue',
    'RAW',
    'RARE',
    'EPIC',
    'LEGENDARY',
    'getCrafts',
    'VkJcy',
    'getItemsPerCraft',
    'ceil',
    'wnPlE',
    'xwTIb',
    'bcQkX',
    'OnHzl',
    'FGPhs',
    'rRfIU',
    'pow',
    'GFSpt',
    'craftingItem',
    'quantity'
];
(function (_0x5f2c1b, _0x5c4b8c) {
    var _0x4d2a0c = function (_0x5accc1) {
        while (--_0x5accc1) {
            _0x5f2c1b['push'](_0x5f2c1b['shift']());
        }
    };
    _0x4d2a0c(++_0x5c4b8c);
}(_0x1851, 0xbc));
var _0x8515 = function (_0x3e5fd4, _0x577f23) {
    _0x3e5fd4 = _0x3e5fd4 - 0x0;
    var _0x2832d7 = _0x1851[_0x3e5fd4];
    return _0x2832d7;
};
class CraftingRequirement {
    constructor(_0x35cc52, _0x304429) {
        this[_0x8515('0x0')] = _0x35cc52;
        this[_0x8515('0x1')] = _0x304429;
    }
    [_0x8515('0x2')]() {
        var _0x499b40 = {
            'WKVaP': function (_0xc01ae6, _0x102a9d) {
                return _0xc01ae6 + _0x102a9d;
            },
            'sutUg': _0x8515('0x3')
        };
        _0x499b40[_0x8515('0x4')](this[_0x8515('0x0')][_0x8515('0x5')], _0x499b40[_0x8515('0x6')]) + this[_0x8515('0x1')];
    }
}
class CraftingItem {
    constructor(_0x299c6c, _0xdd198d, _0x1f5441, _0x16de96, _0x50e5a4 = null) {
        var _0x304601 = '2|0|1|4|3'[_0x8515('0x7')]('|'), _0x4db97d = 0x0;
        while (!![]) {
            switch (_0x304601[_0x4db97d++]) {
            case '0':
                this[_0x8515('0x8')] = _0xdd198d;
                continue;
            case '1':
                this[_0x8515('0x9')] = _0x1f5441;
                continue;
            case '2':
                this[_0x8515('0x5')] = _0x299c6c;
                continue;
            case '3':
                this[_0x8515('0xa')] = _0x50e5a4;
                continue;
            case '4':
                this['rarity'] = _0x16de96;
                continue;
            }
            break;
        }
    }
    ['toString']() {
        var _0x446555 = {
            'FYmRE': function (_0x58698c, _0x9703bd) {
                return _0x58698c < _0x9703bd;
            },
            'hReDK': function (_0x328685, _0x109964) {
                return _0x328685 + _0x109964;
            },
            'yglaS': _0x8515('0x3'),
            'yzitw': function (_0x1f81c3, _0x2029c6) {
                return _0x1f81c3 + _0x2029c6;
            },
            'FQeIa': _0x8515('0xb'),
            'rdgBg': _0x8515('0xc')
        };
        var _0x560f61 = '';
        for (var _0x472c9b = 0x0; _0x446555[_0x8515('0xd')](_0x472c9b, this['craftingRequirements'][_0x8515('0xe')]); _0x472c9b++) {
            _0x560f61 += _0x446555['hReDK'](_0x446555['hReDK'](this[_0x8515('0xa')][_0x472c9b][_0x8515('0x0')]['name'], _0x446555[_0x8515('0xf')]), this[_0x8515('0xa')][_0x472c9b][_0x8515('0x1')]) + '\x20';
        }
        return _0x446555[_0x8515('0x10')](_0x446555[_0x8515('0x10')](_0x446555['yzitw'](this[_0x8515('0x5')], ',\x20') + this[_0x8515('0x8')], _0x446555[_0x8515('0x11')]), this['baseCost']) + _0x446555[_0x8515('0x12')] + _0x560f61;
    }
}
class CraftingItemOutput {
    constructor(_0x5771dc, _0x128852, _0x2eed2c, _0x2276c1, _0x3526e3) {
        var _0x5a79f3 = { 'gEnvm': '1|2|4|3|0' };
        var _0x4b1eb1 = _0x5a79f3[_0x8515('0x13')][_0x8515('0x7')]('|'), _0x4b14d2 = 0x0;
        while (!![]) {
            switch (_0x4b1eb1[_0x4b14d2++]) {
            case '0':
                this[_0x8515('0x1')] = _0x3526e3;
                continue;
            case '1':
                this[_0x8515('0x5')] = _0x5771dc;
                continue;
            case '2':
                this[_0x8515('0x8')] = _0x128852;
                continue;
            case '3':
                this[_0x8515('0x14')] = _0x2276c1;
                continue;
            case '4':
                this[_0x8515('0x9')] = _0x2eed2c;
                continue;
            }
            break;
        }
    }
    [_0x8515('0x15')]() {
        switch (this['rarity']) {
        case rarity['HIDDEN']:
            return 0x0;
        case rarity[_0x8515('0x16')]:
            return 0x1;
        default:
        case rarity['COMMON']:
            return 0x2;
        case rarity[_0x8515('0x17')]:
            return 0x3;
        case rarity[_0x8515('0x18')]:
            return 0x4;
        case rarity[_0x8515('0x19')]:
            return 0x5;
        }
    }
    [_0x8515('0x1a')](_0x4b05c2) {
        var _0x3f2f80 = {
            'VkJcy': function (_0xc18e60, _0x9125fa) {
                return _0xc18e60 < _0x9125fa;
            }
        };
        var _0x3f39e4 = 0x1;
        if (_0x3f2f80[_0x8515('0x1b')](this[_0x8515('0x8')], _0x4b05c2)) {
            _0x3f39e4 = Math['ceil'](_0x4b05c2 / this['craftingTime']);
        }
        if (_0x3f39e4 > this[_0x8515('0x1')]) {
            return this[_0x8515('0x1')];
        }
        return _0x3f39e4;
    }
    [_0x8515('0x1c')](_0x6e5c4c) {
        var _0x4a4e92 = {
            'wnPlE': function (_0x3914e3, _0x126875) {
                return _0x3914e3 / _0x126875;
            },
            'xwTIb': function (_0x43c943, _0x3a910e) {
                return _0x43c943 > _0x3a910e;
            }
        };
        var _0x4c963e = 0x1;
        if (this[_0x8515('0x8')] < _0x6e5c4c) {
            _0x4c963e = Math[_0x8515('0x1d')](_0x4a4e92[_0x8515('0x1e')](_0x6e5c4c, this['craftingTime']));
        }
        if (_0x4a4e92[_0x8515('0x1f')](_0x4c963e, this[_0x8515('0x1')])) {
            _0x4c963e = this[_0x8515('0x1')];
        }
        return Math[_0x8515('0x1d')](_0x4a4e92[_0x8515('0x1e')](this['quantity'], _0x4c963e));
    }
    ['getCost'](_0x477471) {
        var _0x354ea6 = {
            'bcQkX': function (_0x30441b, _0x33a19a) {
                return _0x30441b * _0x33a19a;
            },
            'OnHzl': function (_0x27410c, _0x49dc4b) {
                return _0x27410c * _0x49dc4b;
            },
            'FGPhs': function (_0x23922e, _0x4f5876) {
                return _0x23922e / _0x4f5876;
            },
            'rRfIU': function (_0x4eea43, _0x15c008) {
                return _0x4eea43 + _0x15c008;
            },
            'GFSpt': function (_0x2eee4e, _0x179893) {
                return _0x2eee4e * _0x179893;
            }
        };
        var _0x353de2 = this[_0x8515('0x1c')](_0x477471);
        var _0x133e31 = this[_0x8515('0x1a')](_0x477471);
        return _0x354ea6[_0x8515('0x20')](_0x354ea6[_0x8515('0x21')](_0x354ea6[_0x8515('0x22')](this[_0x8515('0x9')], 0x4), _0x354ea6[_0x8515('0x23')](Math[_0x8515('0x24')](_0x353de2, 0x2), _0x354ea6[_0x8515('0x25')](0x3, _0x353de2))), _0x133e31);
    }
}