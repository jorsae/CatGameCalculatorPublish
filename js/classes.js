var _0x16f3 = [
    'fMNMr',
    'UCzdT',
    'floor',
    'MYMIH',
    'ceil',
    'fxAJv',
    'getCost',
    'length',
    'cwkgs',
    'TSmKk',
    'ispfk',
    'pow',
    'itemQuantity',
    'crafts',
    'craftingItem',
    'quantity',
    'toString',
    '\x20:\x20',
    'EPQaN',
    'Pervz',
    'name',
    'craftingTime',
    'baseCost',
    'craftingRequirements',
    'vBSsK',
    'SnuUa',
    'ncHPI',
    'CwaZJ',
    'xxFkW',
    'coins.\x20Crafting\x20Requirement:\x20',
    '4|5|2|0|3|1',
    'gTDtL',
    'split',
    'rarity',
    'sortingOrder',
    'getRarityValue',
    'RARE',
    'EPIC',
    'LEGENDARY',
    'getCraftingMethod',
    'tyXBg'
];
(function (_0x1b332a, _0x4d4de5) {
    var _0x13404b = function (_0x209d16) {
        while (--_0x209d16) {
            _0x1b332a['push'](_0x1b332a['shift']());
        }
    };
    _0x13404b(++_0x4d4de5);
}(_0x16f3, 0x1a6));
var _0x44ad = function (_0x2b7578, _0x1c0861) {
    _0x2b7578 = _0x2b7578 - 0x0;
    var _0x395d76 = _0x16f3[_0x2b7578];
    return _0x395d76;
};
class CraftingMethod {
    constructor(_0x49df1f, _0x4b8a53) {
        this[_0x44ad('0x0')] = _0x49df1f;
        this[_0x44ad('0x1')] = _0x4b8a53;
    }
}
class CraftingRequirement {
    constructor(_0x12481c, _0x122c87) {
        this[_0x44ad('0x2')] = _0x12481c;
        this[_0x44ad('0x3')] = _0x122c87;
    }
    [_0x44ad('0x4')]() {
        var _0x4a066f = {
            'EPQaN': function (_0x38f559, _0x1689d7) {
                return _0x38f559 + _0x1689d7;
            },
            'Pervz': function (_0x3a1f44, _0x2f53b5) {
                return _0x3a1f44 + _0x2f53b5;
            },
            'Qkmpz': _0x44ad('0x5')
        };
        _0x4a066f[_0x44ad('0x6')](_0x4a066f[_0x44ad('0x7')](this[_0x44ad('0x2')][_0x44ad('0x8')], _0x4a066f['Qkmpz']), this[_0x44ad('0x3')]);
    }
}
class CraftingItem {
    constructor(_0x3154c6, _0x59314e, _0x4a6433, _0x32e399, _0x32db85, _0x2066a0 = null) {
        this[_0x44ad('0x8')] = _0x3154c6;
        this[_0x44ad('0x9')] = _0x59314e;
        this[_0x44ad('0xa')] = _0x4a6433;
        this['rarity'] = _0x32e399;
        this['sortingOrder'] = _0x32db85;
        this[_0x44ad('0xb')] = _0x2066a0;
    }
    [_0x44ad('0x4')]() {
        var _0x176678 = {
            'vBSsK': function (_0x4f3a2f, _0x59027a) {
                return _0x4f3a2f < _0x59027a;
            },
            'SnuUa': function (_0x5a2d2f, _0x48c768) {
                return _0x5a2d2f + _0x48c768;
            },
            'ncHPI': _0x44ad('0x5'),
            'CwaZJ': function (_0x15bf4a, _0x5bd2d8) {
                return _0x15bf4a + _0x5bd2d8;
            },
            'ZlVnu': function (_0x4aef79, _0xb4dc95) {
                return _0x4aef79 + _0xb4dc95;
            },
            'hpTuT': function (_0x41d6dd, _0x5cb08b) {
                return _0x41d6dd + _0x5cb08b;
            },
            'xxFkW': 'minutes,\x20'
        };
        var _0xe9d275 = '';
        for (var _0x54ccb9 = 0x0; _0x176678[_0x44ad('0xc')](_0x54ccb9, this['craftingRequirements']['length']); _0x54ccb9++) {
            _0xe9d275 += _0x176678[_0x44ad('0xd')](_0x176678['SnuUa'](_0x176678[_0x44ad('0xd')](this[_0x44ad('0xb')][_0x54ccb9]['craftingItem'][_0x44ad('0x8')], _0x176678[_0x44ad('0xe')]), this['craftingRequirements'][_0x54ccb9][_0x44ad('0x3')]), '\x20');
        }
        return _0x176678[_0x44ad('0xd')](_0x176678[_0x44ad('0xf')](_0x176678['ZlVnu'](_0x176678['hpTuT'](this[_0x44ad('0x8')], ',\x20') + this[_0x44ad('0x9')] + _0x176678[_0x44ad('0x10')], this[_0x44ad('0xa')]), _0x44ad('0x11')), _0xe9d275);
    }
}
class CraftingItemOutput {
    constructor(_0x25af37, _0x29ac5f, _0x3c2809, _0x20bfd7, _0x3ec60b, _0x12a790) {
        var _0x2901e7 = { 'gTDtL': _0x44ad('0x12') };
        var _0x3dda0d = _0x2901e7[_0x44ad('0x13')][_0x44ad('0x14')]('|'), _0x20a733 = 0x0;
        while (!![]) {
            switch (_0x3dda0d[_0x20a733++]) {
            case '0':
                this[_0x44ad('0x15')] = _0x20bfd7;
                continue;
            case '1':
                this[_0x44ad('0x16')] = _0x12a790;
                continue;
            case '2':
                this[_0x44ad('0xa')] = _0x3c2809;
                continue;
            case '3':
                this['quantity'] = _0x3ec60b;
                continue;
            case '4':
                this[_0x44ad('0x8')] = _0x25af37;
                continue;
            case '5':
                this['craftingTime'] = _0x29ac5f;
                continue;
            }
            break;
        }
    }
    [_0x44ad('0x17')]() {
        switch (this[_0x44ad('0x15')]) {
        case rarity['HIDDEN']:
            return 0x0;
        case rarity['RAW']:
            return 0x1;
        default:
        case rarity['COMMON']:
            return 0x2;
        case rarity[_0x44ad('0x18')]:
            return 0x3;
        case rarity[_0x44ad('0x19')]:
            return 0x4;
        case rarity[_0x44ad('0x1a')]:
            return 0x5;
        }
    }
    [_0x44ad('0x1b')](_0x2d6cd2) {
        var _0x52b12f = {
            'FRLek': function (_0x26ad60, _0x2a6074) {
                return _0x26ad60 > _0x2a6074;
            },
            'VWftl': function (_0x453e66, _0x39b65b) {
                return _0x453e66 <= _0x39b65b;
            },
            'tyXBg': function (_0x1204c2, _0x2c3644) {
                return _0x1204c2 * _0x2c3644;
            },
            'fMNMr': function (_0x2c68a2, _0x2a72b4) {
                return _0x2c68a2 - _0x2a72b4;
            },
            'jSdOM': function (_0x12a74c, _0x3d93ae) {
                return _0x12a74c === _0x3d93ae;
            },
            'RVUdZ': function (_0x4fbc97, _0x22e0e5) {
                return _0x4fbc97 + _0x22e0e5;
            },
            'UCzdT': function (_0x3e176b, _0x36abdb) {
                return _0x3e176b - _0x36abdb;
            },
            'aNJAz': function (_0x51cbbb, _0x2f8ef5) {
                return _0x51cbbb < _0x2f8ef5;
            },
            'MYMIH': function (_0x92e44, _0x287ff6) {
                return _0x92e44 / _0x287ff6;
            },
            'fxAJv': function (_0x3b8acf, _0x3d5960) {
                return _0x3b8acf / _0x3d5960;
            }
        };
        var _0x4ad57c = '5|2|0|4|3|6|1|7'[_0x44ad('0x14')]('|'), _0x285c71 = 0x0;
        while (!![]) {
            switch (_0x4ad57c[_0x285c71++]) {
            case '0':
                if (_0x52b12f['FRLek'](_0x151c35, this['quantity'])) {
                    _0x151c35 = this[_0x44ad('0x3')];
                    return [new CraftingMethod(0x1, this['quantity'])];
                }
                continue;
            case '1':
                for (var _0x4c969e = 0x1; _0x52b12f['VWftl'](_0x4c969e, _0x151c35); _0x4c969e++) {
                    var _0x4a0616 = _0x52b12f[_0x44ad('0x1c')](_0x2ff0b3, _0x4c969e);
                    var _0x53c1c7 = _0x361297 * _0x52b12f[_0x44ad('0x1d')](_0x151c35, _0x4c969e);
                    if (_0x52b12f['jSdOM'](_0x52b12f['RVUdZ'](_0x4a0616, _0x53c1c7), this['quantity'])) {
                        return [
                            new CraftingMethod(_0x2ff0b3, _0x4c969e),
                            new CraftingMethod(_0x361297, _0x52b12f[_0x44ad('0x1e')](_0x151c35, _0x4c969e))
                        ];
                    }
                }
                continue;
            case '2':
                if (_0x52b12f['aNJAz'](this[_0x44ad('0x9')], _0x2d6cd2)) {
                    _0x151c35 = Math[_0x44ad('0x1f')](_0x52b12f[_0x44ad('0x20')](_0x2d6cd2, this[_0x44ad('0x9')]));
                }
                continue;
            case '3':
                var _0x2ff0b3 = Math[_0x44ad('0x21')](_0x52b12f[_0x44ad('0x22')](this[_0x44ad('0x3')], _0x151c35));
                continue;
            case '4':
                if (_0x151c35 === 0x1) {
                    return [new CraftingMethod(this['quantity'], 0x1)];
                }
                continue;
            case '5':
                var _0x151c35 = 0x1;
                continue;
            case '6':
                var _0x361297 = _0x52b12f[_0x44ad('0x1e')](_0x2ff0b3, 0x1);
                continue;
            case '7':
                return [];
            }
            break;
        }
    }
    [_0x44ad('0x23')](_0x551168) {
        var _0x3dd7f3 = {
            'cwkgs': function (_0x47069a, _0x336bee) {
                return _0x47069a * _0x336bee;
            },
            'TSmKk': function (_0x5b98ff, _0x50d9cd) {
                return _0x5b98ff / _0x50d9cd;
            },
            'ispfk': function (_0x3ecce9, _0xb867e4) {
                return _0x3ecce9 + _0xb867e4;
            }
        };
        var _0x423301 = 0x0;
        for (var _0x236a3b = 0x0; _0x236a3b < _0x551168[_0x44ad('0x24')]; _0x236a3b++) {
            _0x423301 += _0x3dd7f3[_0x44ad('0x25')](_0x3dd7f3[_0x44ad('0x25')](_0x3dd7f3[_0x44ad('0x26')](this[_0x44ad('0xa')], 0x4), _0x3dd7f3[_0x44ad('0x27')](Math[_0x44ad('0x28')](_0x551168[_0x236a3b]['itemQuantity'], 0x2), _0x3dd7f3[_0x44ad('0x25')](0x3, _0x551168[_0x236a3b][_0x44ad('0x0')]))), _0x551168[_0x236a3b][_0x44ad('0x1')]);
        }
        return _0x423301;
    }
}