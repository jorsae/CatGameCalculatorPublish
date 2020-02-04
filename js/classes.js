var _0x559a = [
    'MGLXx',
    'getCost',
    'hRGFZ',
    'sBejx',
    'pow',
    'OZnaJ',
    'craftingItem',
    'quantity',
    'toString',
    'suPEn',
    'jSwKm',
    'name',
    '\x20:\x20',
    'BJjvF',
    'split',
    'craftingRequirements',
    'rarity',
    'baseCost',
    'craftingTime',
    'minutes,\x20',
    'JOCim',
    'GkuaC',
    'aQznE',
    'feTdT',
    'coins.\x20Crafting\x20Requirement:\x20',
    'getRarityValue',
    'HIDDEN',
    'RAW',
    'RARE',
    'EPIC',
    'LEGENDARY',
    'getCrafts',
    'RrQQu',
    'QmcND',
    'getItemsPerCraft',
    'ceil'
];
(function (_0x125e8b, _0xdef457) {
    var _0x3e0e93 = function (_0x594397) {
        while (--_0x594397) {
            _0x125e8b['push'](_0x125e8b['shift']());
        }
    };
    _0x3e0e93(++_0xdef457);
}(_0x559a, 0x16e));
var _0x28da = function (_0x5912df, _0x20b9b8) {
    _0x5912df = _0x5912df - 0x0;
    var _0x5551e1 = _0x559a[_0x5912df];
    return _0x5551e1;
};
class CraftingRequirement {
    constructor(_0x126abe, _0x398a6e) {
        this[_0x28da('0x0')] = _0x126abe;
        this[_0x28da('0x1')] = _0x398a6e;
    }
    [_0x28da('0x2')]() {
        var _0x45e035 = {
            'suPEn': function (_0xbda675, _0x475724) {
                return _0xbda675 + _0x475724;
            },
            'jSwKm': function (_0x59a414, _0x515679) {
                return _0x59a414 + _0x515679;
            }
        };
        _0x45e035[_0x28da('0x3')](_0x45e035[_0x28da('0x4')](this[_0x28da('0x0')][_0x28da('0x5')], _0x28da('0x6')), this[_0x28da('0x1')]);
    }
}
class CraftingItem {
    constructor(_0x111636, _0x4715c6, _0x5a76f3, _0x4aaae5, _0x265157 = null) {
        var _0x34b0b8 = { 'BJjvF': '3|4|2|1|0' };
        var _0x276f0a = _0x34b0b8[_0x28da('0x7')][_0x28da('0x8')]('|'), _0x4b770f = 0x0;
        while (!![]) {
            switch (_0x276f0a[_0x4b770f++]) {
            case '0':
                this[_0x28da('0x9')] = _0x265157;
                continue;
            case '1':
                this[_0x28da('0xa')] = _0x4aaae5;
                continue;
            case '2':
                this[_0x28da('0xb')] = _0x5a76f3;
                continue;
            case '3':
                this[_0x28da('0x5')] = _0x111636;
                continue;
            case '4':
                this[_0x28da('0xc')] = _0x4715c6;
                continue;
            }
            break;
        }
    }
    ['toString']() {
        var _0x3bded5 = {
            'JOCim': function (_0x56cb2e, _0x7f841b) {
                return _0x56cb2e < _0x7f841b;
            },
            'aQznE': function (_0x37965d, _0x3f97ec) {
                return _0x37965d + _0x3f97ec;
            },
            'GkuaC': _0x28da('0x6'),
            'feTdT': _0x28da('0xd')
        };
        var _0x2a100c = '';
        for (var _0x4caf60 = 0x0; _0x3bded5[_0x28da('0xe')](_0x4caf60, this[_0x28da('0x9')]['length']); _0x4caf60++) {
            _0x2a100c += _0x3bded5['aQznE'](this[_0x28da('0x9')][_0x4caf60][_0x28da('0x0')][_0x28da('0x5')] + _0x3bded5[_0x28da('0xf')], this[_0x28da('0x9')][_0x4caf60][_0x28da('0x1')]) + '\x20';
        }
        return _0x3bded5[_0x28da('0x10')](_0x3bded5[_0x28da('0x10')](_0x3bded5[_0x28da('0x10')](this[_0x28da('0x5')] + ',\x20' + this[_0x28da('0xc')], _0x3bded5[_0x28da('0x11')]), this[_0x28da('0xb')]), _0x28da('0x12')) + _0x2a100c;
    }
}
class CraftingItemOutput {
    constructor(_0x460cd0, _0x54c4de, _0x28e28e, _0xa144f0, _0x1cbd67) {
        this['name'] = _0x460cd0;
        this['craftingTime'] = _0x54c4de;
        this[_0x28da('0xb')] = _0x28e28e;
        this['rarity'] = _0xa144f0;
        this[_0x28da('0x1')] = _0x1cbd67;
    }
    [_0x28da('0x13')]() {
        switch (this[_0x28da('0xa')]) {
        case rarity[_0x28da('0x14')]:
            return 0x0;
        case rarity[_0x28da('0x15')]:
            return 0x1;
        default:
        case rarity['COMMON']:
            return 0x2;
        case rarity[_0x28da('0x16')]:
            return 0x3;
        case rarity[_0x28da('0x17')]:
            return 0x4;
        case rarity[_0x28da('0x18')]:
            return 0x5;
        }
    }
    [_0x28da('0x19')](_0x4e59f4) {
        var _0x2ce3ef = {
            'RrQQu': function (_0x3d448a, _0x7bb5d4) {
                return _0x3d448a < _0x7bb5d4;
            },
            'QmcND': function (_0x5004e3, _0x39ee6f) {
                return _0x5004e3 / _0x39ee6f;
            }
        };
        var _0x16346b = 0x1;
        if (_0x2ce3ef[_0x28da('0x1a')](this['craftingTime'], _0x4e59f4)) {
            _0x16346b = Math['ceil'](_0x2ce3ef[_0x28da('0x1b')](_0x4e59f4, this[_0x28da('0xc')]));
        }
        if (_0x16346b > this[_0x28da('0x1')]) {
            return this['quantity'];
        }
        return _0x16346b;
    }
    [_0x28da('0x1c')](_0x3ba23a) {
        var _0x26bc75 = {
            'YOvzH': function (_0x588342, _0x2e26bc) {
                return _0x588342 < _0x2e26bc;
            },
            'afXLX': function (_0x517b98, _0x152ce0) {
                return _0x517b98 / _0x152ce0;
            },
            'MGLXx': function (_0x108521, _0xcb3eb4) {
                return _0x108521 / _0xcb3eb4;
            }
        };
        var _0x2d717a = 0x1;
        if (_0x26bc75['YOvzH'](this['craftingTime'], _0x3ba23a)) {
            _0x2d717a = Math[_0x28da('0x1d')](_0x26bc75['afXLX'](_0x3ba23a, this[_0x28da('0xc')]));
        }
        if (_0x2d717a > this[_0x28da('0x1')]) {
            _0x2d717a = this[_0x28da('0x1')];
        }
        return Math[_0x28da('0x1d')](_0x26bc75[_0x28da('0x1e')](this[_0x28da('0x1')], _0x2d717a));
    }
    [_0x28da('0x1f')](_0x142042) {
        var _0x12c8fa = {
            'OZnaJ': function (_0x5eb80f, _0x122182) {
                return _0x5eb80f * _0x122182;
            },
            'hRGFZ': function (_0x2cd958, _0x19a3bc) {
                return _0x2cd958 / _0x19a3bc;
            },
            'sBejx': function (_0x350b20, _0x3e70c2) {
                return _0x350b20 + _0x3e70c2;
            }
        };
        var _0x1c8986 = this['getItemsPerCraft'](_0x142042);
        var _0x82914a = this[_0x28da('0x19')](_0x142042);
        return _0x12c8fa['OZnaJ'](_0x12c8fa[_0x28da('0x20')](this[_0x28da('0xb')], 0x4), _0x12c8fa[_0x28da('0x21')](Math[_0x28da('0x22')](_0x1c8986, 0x2), _0x12c8fa[_0x28da('0x23')](0x3, _0x1c8986))) * _0x82914a;
    }
}