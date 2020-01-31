var _0x8e60 = [
    'getCrafts',
    'ceil',
    'jJRnI',
    'DeziK',
    'iPiZt',
    'iSLbZ',
    'cyWAM',
    'isbYB',
    'getCost',
    'getItemsPerCraft',
    'OuKaF',
    'pow',
    'craftingItem',
    'toString',
    '\x20:\x20',
    'VzsRk',
    'glhBj',
    '2|0|4|1|3',
    'craftingTime',
    'rarity',
    'name',
    'baseCost',
    'minutes,\x20',
    'coins.\x20Crafting\x20Requirement:\x20',
    'craftingRequirements',
    'JnmXv',
    'quantity',
    'ScUmt',
    'dFapj',
    'split',
    'getRarityValue',
    'HIDDEN',
    'RAW',
    'COMMON',
    'RARE',
    'LEGENDARY'
];
(function (_0x323d01, _0x57d26b) {
    var _0x5a4916 = function (_0x5b24b2) {
        while (--_0x5b24b2) {
            _0x323d01['push'](_0x323d01['shift']());
        }
    };
    _0x5a4916(++_0x57d26b);
}(_0x8e60, 0x150));
var _0x3f27 = function (_0x33cf04, _0x1d384b) {
    _0x33cf04 = _0x33cf04 - 0x0;
    var _0x45c46d = _0x8e60[_0x33cf04];
    return _0x45c46d;
};
class CraftingRequirement {
    constructor(_0x2b0649, _0xdb6d3b) {
        this[_0x3f27('0x0')] = _0x2b0649;
        this['quantity'] = _0xdb6d3b;
    }
    [_0x3f27('0x1')]() {
        var _0x24bf37 = {
            'VzsRk': function (_0x141101, _0x59f33b) {
                return _0x141101 + _0x59f33b;
            },
            'glhBj': _0x3f27('0x2')
        };
        _0x24bf37[_0x3f27('0x3')](_0x24bf37['VzsRk'](this[_0x3f27('0x0')]['name'], _0x24bf37[_0x3f27('0x4')]), this['quantity']);
    }
}
class CraftingItem {
    constructor(_0x2b3fdd, _0x4ef33d, _0x3018a4, _0xaf17bb, _0x1df574 = null) {
        var _0x22aa1f = _0x3f27('0x5')['split']('|'), _0x511d66 = 0x0;
        while (!![]) {
            switch (_0x22aa1f[_0x511d66++]) {
            case '0':
                this[_0x3f27('0x6')] = _0x4ef33d;
                continue;
            case '1':
                this[_0x3f27('0x7')] = _0xaf17bb;
                continue;
            case '2':
                this[_0x3f27('0x8')] = _0x2b3fdd;
                continue;
            case '3':
                this['craftingRequirements'] = _0x1df574;
                continue;
            case '4':
                this[_0x3f27('0x9')] = _0x3018a4;
                continue;
            }
            break;
        }
    }
    ['toString']() {
        var _0x5e6269 = {
            'JnmXv': function (_0x34111d, _0x145f15) {
                return _0x34111d + _0x145f15;
            },
            'ScUmt': function (_0x37eecc, _0x477358) {
                return _0x37eecc + _0x477358;
            },
            'dFapj': function (_0x11469e, _0x558502) {
                return _0x11469e + _0x558502;
            },
            'ZePZl': _0x3f27('0xa'),
            'zzhXN': _0x3f27('0xb')
        };
        var _0x3b65fb = '';
        for (var _0x1354b1 = 0x0; _0x1354b1 < this[_0x3f27('0xc')]['length']; _0x1354b1++) {
            _0x3b65fb += _0x5e6269[_0x3f27('0xd')](this['craftingRequirements'][_0x1354b1][_0x3f27('0x0')]['name'] + _0x3f27('0x2') + this[_0x3f27('0xc')][_0x1354b1][_0x3f27('0xe')], '\x20');
        }
        return _0x5e6269['JnmXv'](_0x5e6269[_0x3f27('0xf')](_0x5e6269[_0x3f27('0x10')](_0x5e6269[_0x3f27('0x10')](_0x5e6269[_0x3f27('0x10')](this[_0x3f27('0x8')], ',\x20'), this['craftingTime']), _0x5e6269['ZePZl']), this['baseCost']) + _0x5e6269['zzhXN'], _0x3b65fb);
    }
}
class CraftingItemOutput {
    constructor(_0x517cf9, _0x5b8ab9, _0x1c9af1, _0x27895e, _0x32787d) {
        var _0xeb1952 = { 'uvwNo': '0|1|4|2|3' };
        var _0x5eeb62 = _0xeb1952['uvwNo'][_0x3f27('0x11')]('|'), _0x4da34b = 0x0;
        while (!![]) {
            switch (_0x5eeb62[_0x4da34b++]) {
            case '0':
                this[_0x3f27('0x8')] = _0x517cf9;
                continue;
            case '1':
                this['craftingTime'] = _0x5b8ab9;
                continue;
            case '2':
                this[_0x3f27('0x7')] = _0x27895e;
                continue;
            case '3':
                this[_0x3f27('0xe')] = _0x32787d;
                continue;
            case '4':
                this[_0x3f27('0x9')] = _0x1c9af1;
                continue;
            }
            break;
        }
    }
    [_0x3f27('0x12')]() {
        switch (this[_0x3f27('0x7')]) {
        case rarity[_0x3f27('0x13')]:
            return 0x0;
        case rarity[_0x3f27('0x14')]:
            return 0x1;
        default:
        case rarity[_0x3f27('0x15')]:
            return 0x2;
        case rarity[_0x3f27('0x16')]:
            return 0x3;
        case rarity['EPIC']:
            return 0x4;
        case rarity[_0x3f27('0x17')]:
            return 0x5;
        }
    }
    [_0x3f27('0x18')](_0x74da4b) {
        var _0xa7b9fe = {
            'jJRnI': function (_0xf7cb5d, _0x23c351) {
                return _0xf7cb5d / _0x23c351;
            },
            'DeziK': function (_0x3144a2, _0x43e407) {
                return _0x3144a2 > _0x43e407;
            }
        };
        var _0x393a2e = 0x1;
        if (this[_0x3f27('0x6')] < _0x74da4b) {
            _0x393a2e = Math[_0x3f27('0x19')](_0xa7b9fe[_0x3f27('0x1a')](_0x74da4b, this[_0x3f27('0x6')]));
        }
        if (_0xa7b9fe[_0x3f27('0x1b')](_0x393a2e, this[_0x3f27('0xe')])) {
            return this[_0x3f27('0xe')];
        }
        return _0x393a2e;
    }
    ['getItemsPerCraft'](_0x435572) {
        var _0x1c9141 = {
            'iPiZt': function (_0x246fce, _0x462ba6) {
                return _0x246fce < _0x462ba6;
            },
            'iSLbZ': function (_0x326aa5, _0x2caba1) {
                return _0x326aa5 / _0x2caba1;
            },
            'cyWAM': function (_0x2f16be, _0x47f988) {
                return _0x2f16be > _0x47f988;
            },
            'isbYB': function (_0x157502, _0x3730a6) {
                return _0x157502 / _0x3730a6;
            }
        };
        var _0xfbd227 = 0x1;
        if (_0x1c9141[_0x3f27('0x1c')](this[_0x3f27('0x6')], _0x435572)) {
            _0xfbd227 = Math[_0x3f27('0x19')](_0x1c9141[_0x3f27('0x1d')](_0x435572, this['craftingTime']));
        }
        if (_0x1c9141[_0x3f27('0x1e')](_0xfbd227, this[_0x3f27('0xe')])) {
            _0xfbd227 = this['quantity'];
        }
        return Math[_0x3f27('0x19')](_0x1c9141[_0x3f27('0x1f')](this[_0x3f27('0xe')], _0xfbd227));
    }
    [_0x3f27('0x20')](_0x551986) {
        var _0x1c5357 = {
            'OuKaF': function (_0x3e6a5, _0x34edac) {
                return _0x3e6a5 * _0x34edac;
            },
            'RpBIt': function (_0x4c6990, _0x18ca31) {
                return _0x4c6990 / _0x18ca31;
            }
        };
        var _0x43cd8a = this[_0x3f27('0x21')](_0x551986);
        var _0x410400 = this[_0x3f27('0x18')](_0x551986);
        return _0x1c5357[_0x3f27('0x22')](_0x1c5357[_0x3f27('0x22')](_0x1c5357['RpBIt'](this[_0x3f27('0x9')], 0x4), Math[_0x3f27('0x23')](_0x43cd8a, 0x2) + _0x1c5357['OuKaF'](0x3, _0x43cd8a)), _0x410400);
    }
}