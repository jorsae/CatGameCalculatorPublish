var _0x4fb6 = [
    'EPIC',
    'getCrafts',
    'getItemsPerCraft',
    'ceil',
    'vzcti',
    'getCost',
    'BNqJo',
    'quantity',
    'toString',
    '\x20:\x20',
    'YZTmq',
    'craftingItem',
    'name',
    'PJQJL',
    'cztLU',
    'craftingTime',
    'craftingRequirements',
    'baseCost',
    'rarity',
    'coins.\x20Crafting\x20Requirement:\x20',
    'length',
    'onGsM',
    'rBkCv',
    'minutes,\x20',
    'uQiVu',
    'getRarityValue',
    'RAW',
    'COMMON',
    'RARE'
];
(function (_0x106739, _0x52a40b) {
    var _0x1780bb = function (_0x368d78) {
        while (--_0x368d78) {
            _0x106739['push'](_0x106739['shift']());
        }
    };
    _0x1780bb(++_0x52a40b);
}(_0x4fb6, 0xb5));
var _0xb9cb = function (_0x2cafec, _0x1c4407) {
    _0x2cafec = _0x2cafec - 0x0;
    var _0x62cdde = _0x4fb6[_0x2cafec];
    return _0x62cdde;
};
class CraftingRequirement {
    constructor(_0x53a9ca, _0x845251) {
        this['craftingItem'] = _0x53a9ca;
        this[_0xb9cb('0x0')] = _0x845251;
    }
    [_0xb9cb('0x1')]() {
        var _0x3e403f = {
            'YZTmq': function (_0x479763, _0x6f4b1b) {
                return _0x479763 + _0x6f4b1b;
            },
            'PJQJL': _0xb9cb('0x2')
        };
        _0x3e403f[_0xb9cb('0x3')](this[_0xb9cb('0x4')][_0xb9cb('0x5')], _0x3e403f[_0xb9cb('0x6')]) + this[_0xb9cb('0x0')];
    }
}
class CraftingItem {
    constructor(_0x2a4c51, _0x1bb882, _0x380863, _0x460d9a, _0xcec7af = null) {
        var _0x331340 = { 'cztLU': '0|1|3|4|2' };
        var _0x567fff = _0x331340[_0xb9cb('0x7')]['split']('|'), _0x3d5da8 = 0x0;
        while (!![]) {
            switch (_0x567fff[_0x3d5da8++]) {
            case '0':
                this[_0xb9cb('0x5')] = _0x2a4c51;
                continue;
            case '1':
                this[_0xb9cb('0x8')] = _0x1bb882;
                continue;
            case '2':
                this[_0xb9cb('0x9')] = _0xcec7af;
                continue;
            case '3':
                this[_0xb9cb('0xa')] = _0x380863;
                continue;
            case '4':
                this[_0xb9cb('0xb')] = _0x460d9a;
                continue;
            }
            break;
        }
    }
    [_0xb9cb('0x1')]() {
        var _0x40ea5b = {
            'vJjUw': function (_0x4c2b1d, _0x44c2aa) {
                return _0x4c2b1d + _0x44c2aa;
            },
            'onGsM': _0xb9cb('0x2'),
            'gDBSe': function (_0x158470, _0x945ff6) {
                return _0x158470 + _0x945ff6;
            },
            'rBkCv': function (_0x86d512, _0x27e531) {
                return _0x86d512 + _0x27e531;
            },
            'hSbPw': function (_0x5c53fb, _0x2c1cf4) {
                return _0x5c53fb + _0x2c1cf4;
            },
            'uQiVu': _0xb9cb('0xc')
        };
        var _0x1a9b75 = '';
        for (var _0x1045dc = 0x0; _0x1045dc < this[_0xb9cb('0x9')][_0xb9cb('0xd')]; _0x1045dc++) {
            _0x1a9b75 += _0x40ea5b['vJjUw'](this['craftingRequirements'][_0x1045dc][_0xb9cb('0x4')][_0xb9cb('0x5')] + _0x40ea5b[_0xb9cb('0xe')] + this[_0xb9cb('0x9')][_0x1045dc][_0xb9cb('0x0')], '\x20');
        }
        return _0x40ea5b['gDBSe'](_0x40ea5b[_0xb9cb('0xf')](_0x40ea5b['hSbPw'](this[_0xb9cb('0x5')] + ',\x20', this[_0xb9cb('0x8')]) + _0xb9cb('0x10') + this[_0xb9cb('0xa')], _0x40ea5b[_0xb9cb('0x11')]), _0x1a9b75);
    }
}
class CraftingItemOutput {
    constructor(_0x5e92f6, _0x1159fa, _0x4ee7c4, _0xeee919, _0x229eb5) {
        this[_0xb9cb('0x5')] = _0x5e92f6;
        this[_0xb9cb('0x8')] = _0x1159fa;
        this['baseCost'] = _0x4ee7c4;
        this['rarity'] = _0xeee919;
        this[_0xb9cb('0x0')] = _0x229eb5;
    }
    [_0xb9cb('0x12')]() {
        switch (this['rarity']) {
        case rarity['HIDDEN']:
            return 0x0;
        case rarity[_0xb9cb('0x13')]:
            return 0x1;
        default:
        case rarity[_0xb9cb('0x14')]:
            return 0x2;
        case rarity[_0xb9cb('0x15')]:
            return 0x3;
        case rarity[_0xb9cb('0x16')]:
            return 0x4;
        case rarity['LEGENDARY']:
            return 0x5;
        }
    }
    [_0xb9cb('0x17')](_0x353760) {
        var _0x1c08a9 = {
            'nlyaG': function (_0x11e36c, _0x1ce514) {
                return _0x11e36c > _0x1ce514;
            }
        };
        var _0x2f04bb = 0x1;
        if (this[_0xb9cb('0x8')] < _0x353760) {
            _0x2f04bb = Math['ceil'](_0x353760 / this[_0xb9cb('0x8')]);
        }
        if (_0x1c08a9['nlyaG'](_0x2f04bb, this[_0xb9cb('0x0')])) {
            return this[_0xb9cb('0x0')];
        }
        return _0x2f04bb;
    }
    [_0xb9cb('0x18')](_0x99e298) {
        var _0x5a690f = {
            'vzcti': function (_0x394670, _0x8d26ce) {
                return _0x394670 / _0x8d26ce;
            }
        };
        var _0x1170eb = 0x1;
        if (this[_0xb9cb('0x8')] < _0x99e298) {
            _0x1170eb = Math[_0xb9cb('0x19')](_0x5a690f[_0xb9cb('0x1a')](_0x99e298, this['craftingTime']));
        }
        if (_0x1170eb > this[_0xb9cb('0x0')]) {
            _0x1170eb = this[_0xb9cb('0x0')];
        }
        return Math['ceil'](_0x5a690f[_0xb9cb('0x1a')](this['quantity'], _0x1170eb));
    }
    [_0xb9cb('0x1b')](_0x5980ec) {
        var _0x3d1574 = {
            'BNqJo': function (_0x1486c2, _0x30e936) {
                return _0x1486c2 * _0x30e936;
            }
        };
        var _0x24808e = this[_0xb9cb('0x18')](_0x5980ec);
        var _0x19045b = this[_0xb9cb('0x17')](_0x5980ec);
        return _0x3d1574[_0xb9cb('0x1c')](_0x3d1574[_0xb9cb('0x1c')](this[_0xb9cb('0xa')] / 0x4, Math['pow'](_0x24808e, 0x2) + 0x3 * _0x24808e), _0x19045b);
    }
}