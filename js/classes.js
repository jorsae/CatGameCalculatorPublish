var _0x4073 = [
    'craftingItem',
    'quantity',
    'toString',
    'TlWUD',
    'name',
    '\x20:\x20',
    'craftingTime',
    'baseCost',
    'rarity',
    'coins.\x20Crafting\x20Requirement:\x20',
    'ImVkb',
    'craftingRequirements',
    'length',
    'Wspyo',
    'QIlUL',
    'MvMap',
    'cGYfF',
    'OAiry',
    'VxfHx',
    '0|4|2|3|1',
    'getRarityValue',
    'HIDDEN',
    'getCrafts',
    'ceil',
    'Qqbqm',
    'getItemsPerCraft',
    'mPHLv',
    'vxQgg',
    'getCost',
    'NshiA',
    'XmDWT',
    'pow'
];
(function (_0x2974a7, _0x26dece) {
    var _0xcdfe78 = function (_0x5548f7) {
        while (--_0x5548f7) {
            _0x2974a7['push'](_0x2974a7['shift']());
        }
    };
    _0xcdfe78(++_0x26dece);
}(_0x4073, 0x120));
var _0x3ea6 = function (_0x12b5b0, _0x14ac67) {
    _0x12b5b0 = _0x12b5b0 - 0x0;
    var _0x27ff3b = _0x4073[_0x12b5b0];
    return _0x27ff3b;
};
class CraftingRequirement {
    constructor(_0x30d932, _0x34808c) {
        this[_0x3ea6('0x0')] = _0x30d932;
        this[_0x3ea6('0x1')] = _0x34808c;
    }
    [_0x3ea6('0x2')]() {
        var _0x49715e = {
            'TlWUD': function (_0x4433d3, _0x2ca6c8) {
                return _0x4433d3 + _0x2ca6c8;
            }
        };
        _0x49715e[_0x3ea6('0x3')](_0x49715e[_0x3ea6('0x3')](this[_0x3ea6('0x0')][_0x3ea6('0x4')], _0x3ea6('0x5')), this[_0x3ea6('0x1')]);
    }
}
class CraftingItem {
    constructor(_0x236fae, _0x4692b4, _0x423421, _0x1aa9ee, _0x593fdc = null) {
        this['name'] = _0x236fae;
        this[_0x3ea6('0x6')] = _0x4692b4;
        this[_0x3ea6('0x7')] = _0x423421;
        this[_0x3ea6('0x8')] = _0x1aa9ee;
        this['craftingRequirements'] = _0x593fdc;
    }
    [_0x3ea6('0x2')]() {
        var _0xf422f2 = {
            'ImVkb': function (_0x4a7e49, _0x18d666) {
                return _0x4a7e49 < _0x18d666;
            },
            'Wspyo': function (_0x563400, _0x45324f) {
                return _0x563400 + _0x45324f;
            },
            'jGkan': function (_0x1c0300, _0x1901ff) {
                return _0x1c0300 + _0x1901ff;
            },
            'QIlUL': function (_0x1fc092, _0x54966a) {
                return _0x1fc092 + _0x54966a;
            },
            'MvMap': function (_0x100d00, _0x321f4e) {
                return _0x100d00 + _0x321f4e;
            },
            'cGYfF': function (_0x283472, _0x5fe5a6) {
                return _0x283472 + _0x5fe5a6;
            },
            'OAiry': 'minutes,\x20',
            'VxfHx': _0x3ea6('0x9')
        };
        var _0xed643e = '';
        for (var _0x376ecf = 0x0; _0xf422f2[_0x3ea6('0xa')](_0x376ecf, this[_0x3ea6('0xb')][_0x3ea6('0xc')]); _0x376ecf++) {
            _0xed643e += _0xf422f2[_0x3ea6('0xd')](_0xf422f2['jGkan'](_0xf422f2[_0x3ea6('0xe')](this[_0x3ea6('0xb')][_0x376ecf][_0x3ea6('0x0')][_0x3ea6('0x4')], _0x3ea6('0x5')), this[_0x3ea6('0xb')][_0x376ecf][_0x3ea6('0x1')]), '\x20');
        }
        return _0xf422f2['MvMap'](_0xf422f2[_0x3ea6('0xf')](_0xf422f2[_0x3ea6('0x10')](_0xf422f2[_0x3ea6('0x10')](_0xf422f2[_0x3ea6('0x10')](_0xf422f2[_0x3ea6('0x10')](this[_0x3ea6('0x4')], ',\x20'), this[_0x3ea6('0x6')]), _0xf422f2[_0x3ea6('0x11')]), this[_0x3ea6('0x7')]), _0xf422f2[_0x3ea6('0x12')]), _0xed643e);
    }
}
class CraftingItemOutput {
    constructor(_0x33e78b, _0x34f243, _0x40db23, _0x351936, _0x325a7b) {
        var _0x1350fc = { 'BXyZq': _0x3ea6('0x13') };
        var _0x5c7c6b = _0x1350fc['BXyZq']['split']('|'), _0x52cd72 = 0x0;
        while (!![]) {
            switch (_0x5c7c6b[_0x52cd72++]) {
            case '0':
                this[_0x3ea6('0x4')] = _0x33e78b;
                continue;
            case '1':
                this['quantity'] = _0x325a7b;
                continue;
            case '2':
                this[_0x3ea6('0x7')] = _0x40db23;
                continue;
            case '3':
                this[_0x3ea6('0x8')] = _0x351936;
                continue;
            case '4':
                this[_0x3ea6('0x6')] = _0x34f243;
                continue;
            }
            break;
        }
    }
    [_0x3ea6('0x14')]() {
        switch (this[_0x3ea6('0x8')]) {
        case rarity[_0x3ea6('0x15')]:
            return 0x0;
        case rarity['RAW']:
            return 0x1;
        default:
        case rarity['COMMON']:
            return 0x2;
        case rarity['RARE']:
            return 0x3;
        case rarity['EPIC']:
            return 0x4;
        case rarity['LEGENDARY']:
            return 0x5;
        }
    }
    [_0x3ea6('0x16')](_0xf9579b) {
        var _0x5accaa = {
            'tCZtB': function (_0x4b54d1, _0x5eeee0) {
                return _0x4b54d1 < _0x5eeee0;
            },
            'Qqbqm': function (_0x23655b, _0x2c42a5) {
                return _0x23655b / _0x2c42a5;
            },
            'TjiTM': function (_0x3c0b68, _0x564cb3) {
                return _0x3c0b68 > _0x564cb3;
            }
        };
        var _0xcbc3fc = 0x1;
        if (_0x5accaa['tCZtB'](this[_0x3ea6('0x6')], _0xf9579b)) {
            _0xcbc3fc = Math[_0x3ea6('0x17')](_0x5accaa[_0x3ea6('0x18')](_0xf9579b, this[_0x3ea6('0x6')]));
        }
        if (_0x5accaa['TjiTM'](_0xcbc3fc, this['quantity'])) {
            return this['quantity'];
        }
        return _0xcbc3fc;
    }
    [_0x3ea6('0x19')](_0x2ce073) {
        var _0x4e801d = {
            'mPHLv': function (_0x594ab0, _0x297f9e) {
                return _0x594ab0 < _0x297f9e;
            },
            'AiMYV': function (_0x30a0f5, _0xe761f0) {
                return _0x30a0f5 / _0xe761f0;
            },
            'Bajos': function (_0x3bc86e, _0x21c6a7) {
                return _0x3bc86e > _0x21c6a7;
            },
            'vxQgg': function (_0x78c021, _0x2db2e5) {
                return _0x78c021 / _0x2db2e5;
            }
        };
        var _0x3f3f0e = 0x1;
        if (_0x4e801d[_0x3ea6('0x1a')](this[_0x3ea6('0x6')], _0x2ce073)) {
            _0x3f3f0e = Math[_0x3ea6('0x17')](_0x4e801d['AiMYV'](_0x2ce073, this['craftingTime']));
        }
        if (_0x4e801d['Bajos'](_0x3f3f0e, this[_0x3ea6('0x1')])) {
            _0x3f3f0e = this[_0x3ea6('0x1')];
        }
        return Math[_0x3ea6('0x17')](_0x4e801d[_0x3ea6('0x1b')](this[_0x3ea6('0x1')], _0x3f3f0e));
    }
    [_0x3ea6('0x1c')](_0x575b7b) {
        var _0x42ab6b = {
            'NDyvH': function (_0xc00dc2, _0x25caa1) {
                return _0xc00dc2 * _0x25caa1;
            },
            'NshiA': function (_0x2b13e1, _0x520d2b) {
                return _0x2b13e1 / _0x520d2b;
            },
            'XmDWT': function (_0x46c756, _0x3d3744) {
                return _0x46c756 + _0x3d3744;
            }
        };
        var _0x145df2 = this[_0x3ea6('0x19')](_0x575b7b);
        var _0x3a3610 = this[_0x3ea6('0x16')](_0x575b7b);
        return _0x42ab6b['NDyvH'](_0x42ab6b[_0x3ea6('0x1d')](this['baseCost'], 0x4), _0x42ab6b[_0x3ea6('0x1e')](Math[_0x3ea6('0x1f')](_0x145df2, 0x2), 0x3 * _0x145df2)) * _0x3a3610;
    }
}