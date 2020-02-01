var _0x4190 = [
    'SQbWe',
    'ceil',
    'icDBM',
    'getItemsPerCraft',
    'rXcLr',
    'znWDb',
    'GewwI',
    'getCost',
    'getCrafts',
    'veuTa',
    'craftingItem',
    '\x20:\x20',
    'PklEm',
    'name',
    'vnSUH',
    'quantity',
    '2|3|4|0|1',
    'PNPNg',
    'split',
    'rarity',
    'craftingRequirements',
    'baseCost',
    'toString',
    'zNQEh',
    'length',
    'pAmKW',
    'uSmON',
    'HRyvd',
    'QHOSz',
    'YMGVL',
    'lvSMZ',
    'craftingTime',
    'minutes,\x20',
    'coins.\x20Crafting\x20Requirement:\x20',
    '4|3|1|0|2',
    'PQXRX',
    'getRarityValue',
    'HIDDEN',
    'RAW',
    'COMMON',
    'RARE',
    'EPIC'
];
(function (_0x2393f5, _0x1967c5) {
    var _0x2f2dc0 = function (_0x2d5a92) {
        while (--_0x2d5a92) {
            _0x2393f5['push'](_0x2393f5['shift']());
        }
    };
    _0x2f2dc0(++_0x1967c5);
}(_0x4190, 0x1d8));
var _0x13f3 = function (_0x2315fc, _0x7ba99c) {
    _0x2315fc = _0x2315fc - 0x0;
    var _0x262b1f = _0x4190[_0x2315fc];
    return _0x262b1f;
};
class CraftingRequirement {
    constructor(_0x3aa718, _0x151da3) {
        this[_0x13f3('0x0')] = _0x3aa718;
        this['quantity'] = _0x151da3;
    }
    ['toString']() {
        var _0x31007d = {
            'PklEm': function (_0x526194, _0x2974cb) {
                return _0x526194 + _0x2974cb;
            },
            'vnSUH': _0x13f3('0x1')
        };
        _0x31007d[_0x13f3('0x2')](this['craftingItem'][_0x13f3('0x3')] + _0x31007d[_0x13f3('0x4')], this[_0x13f3('0x5')]);
    }
}
class CraftingItem {
    constructor(_0x1879e1, _0x1528bd, _0x3af256, _0x16665a, _0x7cf06 = null) {
        var _0xd64b2f = { 'PNPNg': _0x13f3('0x6') };
        var _0x4b0df3 = _0xd64b2f[_0x13f3('0x7')][_0x13f3('0x8')]('|'), _0x331343 = 0x0;
        while (!![]) {
            switch (_0x4b0df3[_0x331343++]) {
            case '0':
                this[_0x13f3('0x9')] = _0x16665a;
                continue;
            case '1':
                this[_0x13f3('0xa')] = _0x7cf06;
                continue;
            case '2':
                this[_0x13f3('0x3')] = _0x1879e1;
                continue;
            case '3':
                this['craftingTime'] = _0x1528bd;
                continue;
            case '4':
                this[_0x13f3('0xb')] = _0x3af256;
                continue;
            }
            break;
        }
    }
    [_0x13f3('0xc')]() {
        var _0x281ef1 = {
            'zNQEh': function (_0x2e04d9, _0x40653e) {
                return _0x2e04d9 < _0x40653e;
            },
            'dqnOA': function (_0x566ab2, _0x28e9df) {
                return _0x566ab2 + _0x28e9df;
            },
            'pAmKW': function (_0x5285cb, _0x126724) {
                return _0x5285cb + _0x126724;
            },
            'uSmON': _0x13f3('0x1'),
            'HRyvd': function (_0x178e99, _0x1be8e9) {
                return _0x178e99 + _0x1be8e9;
            },
            'QHOSz': function (_0x455e72, _0x566978) {
                return _0x455e72 + _0x566978;
            },
            'YMGVL': function (_0x5401ee, _0x31a17d) {
                return _0x5401ee + _0x31a17d;
            },
            'lvSMZ': function (_0x120610, _0x1298d3) {
                return _0x120610 + _0x1298d3;
            }
        };
        var _0x16c209 = '';
        for (var _0x32fb01 = 0x0; _0x281ef1[_0x13f3('0xd')](_0x32fb01, this[_0x13f3('0xa')][_0x13f3('0xe')]); _0x32fb01++) {
            _0x16c209 += _0x281ef1['dqnOA'](_0x281ef1[_0x13f3('0xf')](this[_0x13f3('0xa')][_0x32fb01]['craftingItem'][_0x13f3('0x3')], _0x281ef1[_0x13f3('0x10')]) + this[_0x13f3('0xa')][_0x32fb01][_0x13f3('0x5')], '\x20');
        }
        return _0x281ef1[_0x13f3('0x11')](_0x281ef1[_0x13f3('0x12')](_0x281ef1[_0x13f3('0x13')](_0x281ef1[_0x13f3('0x14')](_0x281ef1[_0x13f3('0x14')](this[_0x13f3('0x3')], ',\x20'), this[_0x13f3('0x15')]), _0x13f3('0x16')), this['baseCost']), _0x13f3('0x17')) + _0x16c209;
    }
}
class CraftingItemOutput {
    constructor(_0x4ba81d, _0x446a32, _0x1ff60c, _0x526ba3, _0x249ce3) {
        var _0xf7b755 = { 'PQXRX': _0x13f3('0x18') };
        var _0x44b0ff = _0xf7b755[_0x13f3('0x19')][_0x13f3('0x8')]('|'), _0x440cdb = 0x0;
        while (!![]) {
            switch (_0x44b0ff[_0x440cdb++]) {
            case '0':
                this['rarity'] = _0x526ba3;
                continue;
            case '1':
                this[_0x13f3('0xb')] = _0x1ff60c;
                continue;
            case '2':
                this[_0x13f3('0x5')] = _0x249ce3;
                continue;
            case '3':
                this[_0x13f3('0x15')] = _0x446a32;
                continue;
            case '4':
                this[_0x13f3('0x3')] = _0x4ba81d;
                continue;
            }
            break;
        }
    }
    [_0x13f3('0x1a')]() {
        switch (this[_0x13f3('0x9')]) {
        case rarity[_0x13f3('0x1b')]:
            return 0x0;
        case rarity[_0x13f3('0x1c')]:
            return 0x1;
        default:
        case rarity[_0x13f3('0x1d')]:
            return 0x2;
        case rarity[_0x13f3('0x1e')]:
            return 0x3;
        case rarity[_0x13f3('0x1f')]:
            return 0x4;
        case rarity['LEGENDARY']:
            return 0x5;
        }
    }
    ['getCrafts'](_0xdb8cec) {
        var _0x54bf05 = {
            'SQbWe': function (_0x560849, _0x33a84e) {
                return _0x560849 < _0x33a84e;
            },
            'Sbwoi': function (_0x15c012, _0x28ba03) {
                return _0x15c012 / _0x28ba03;
            },
            'icDBM': function (_0x43ff88, _0x40c1e8) {
                return _0x43ff88 > _0x40c1e8;
            }
        };
        var _0x2e1351 = 0x1;
        if (_0x54bf05[_0x13f3('0x20')](this[_0x13f3('0x15')], _0xdb8cec)) {
            _0x2e1351 = Math[_0x13f3('0x21')](_0x54bf05['Sbwoi'](_0xdb8cec, this[_0x13f3('0x15')]));
        }
        if (_0x54bf05[_0x13f3('0x22')](_0x2e1351, this['quantity'])) {
            return this[_0x13f3('0x5')];
        }
        return _0x2e1351;
    }
    [_0x13f3('0x23')](_0x30565f) {
        var _0x1b3e70 = {
            'fLwMj': function (_0x395cfe, _0x1d3714) {
                return _0x395cfe < _0x1d3714;
            },
            'rXcLr': function (_0x467455, _0x3707c4) {
                return _0x467455 / _0x3707c4;
            },
            'znWDb': function (_0x7e1753, _0x577d6e) {
                return _0x7e1753 > _0x577d6e;
            },
            'GewwI': function (_0x16d12d, _0x45dac5) {
                return _0x16d12d / _0x45dac5;
            }
        };
        var _0x30c665 = 0x1;
        if (_0x1b3e70['fLwMj'](this[_0x13f3('0x15')], _0x30565f)) {
            _0x30c665 = Math['ceil'](_0x1b3e70[_0x13f3('0x24')](_0x30565f, this[_0x13f3('0x15')]));
        }
        if (_0x1b3e70[_0x13f3('0x25')](_0x30c665, this[_0x13f3('0x5')])) {
            _0x30c665 = this['quantity'];
        }
        return Math[_0x13f3('0x21')](_0x1b3e70[_0x13f3('0x26')](this['quantity'], _0x30c665));
    }
    [_0x13f3('0x27')](_0x9cfe22) {
        var _0x5cfea9 = {
            'veuTa': function (_0x36d70b, _0x23cbbd) {
                return _0x36d70b * _0x23cbbd;
            },
            'rSxBt': function (_0x1dd168, _0x47c2fe) {
                return _0x1dd168 + _0x47c2fe;
            }
        };
        var _0x5cad3e = this[_0x13f3('0x23')](_0x9cfe22);
        var _0xb74c60 = this[_0x13f3('0x28')](_0x9cfe22);
        return _0x5cfea9[_0x13f3('0x29')](_0x5cfea9[_0x13f3('0x29')](this[_0x13f3('0xb')] / 0x4, _0x5cfea9['rSxBt'](Math['pow'](_0x5cad3e, 0x2), 0x3 * _0x5cad3e)), _0xb74c60);
    }
}