var _0x2784 = [
    'minutes,\x20',
    'yDQMP',
    'length',
    'xXzjg',
    'RDspW',
    '4|1|3|2|0',
    'ngaba',
    'quantity',
    'craftingTime',
    'getRarityValue',
    'HIDDEN',
    'RAW',
    'RARE',
    'EPIC',
    'LEGENDARY',
    'getCrafts',
    'ceil',
    'getItemsPerCraft',
    'jUrac',
    'OpGsZ',
    'getCost',
    'XfZZy',
    'TTDWl',
    'yVuqI',
    'craftingItem',
    'jlBsl',
    'name',
    '\x20:\x20',
    '2|3|1|4|0',
    'ieWTZ',
    'split',
    'craftingRequirements',
    'baseCost',
    'rarity',
    'toString'
];
(function (_0x5f2268, _0x2f9142) {
    var _0x5aa756 = function (_0x578991) {
        while (--_0x578991) {
            _0x5f2268['push'](_0x5f2268['shift']());
        }
    };
    _0x5aa756(++_0x2f9142);
}(_0x2784, 0xa4));
var _0x4ee3 = function (_0x5b2559, _0x45a96d) {
    _0x5b2559 = _0x5b2559 - 0x0;
    var _0x594516 = _0x2784[_0x5b2559];
    return _0x594516;
};
class CraftingRequirement {
    constructor(_0x492ccb, _0x57ae38) {
        this[_0x4ee3('0x0')] = _0x492ccb;
        this['quantity'] = _0x57ae38;
    }
    ['toString']() {
        var _0x32639a = {
            'jlBsl': function (_0x1fc144, _0x3caa8f) {
                return _0x1fc144 + _0x3caa8f;
            }
        };
        _0x32639a[_0x4ee3('0x1')](this[_0x4ee3('0x0')][_0x4ee3('0x2')], _0x4ee3('0x3')) + this['quantity'];
    }
}
class CraftingItem {
    constructor(_0x4da46f, _0xfea3ac, _0x2d4f5b, _0x32c4cb, _0x18eb24 = null) {
        var _0x3a9503 = { 'ieWTZ': _0x4ee3('0x4') };
        var _0x103be7 = _0x3a9503[_0x4ee3('0x5')][_0x4ee3('0x6')]('|'), _0x5bf738 = 0x0;
        while (!![]) {
            switch (_0x103be7[_0x5bf738++]) {
            case '0':
                this[_0x4ee3('0x7')] = _0x18eb24;
                continue;
            case '1':
                this[_0x4ee3('0x8')] = _0x2d4f5b;
                continue;
            case '2':
                this[_0x4ee3('0x2')] = _0x4da46f;
                continue;
            case '3':
                this['craftingTime'] = _0xfea3ac;
                continue;
            case '4':
                this[_0x4ee3('0x9')] = _0x32c4cb;
                continue;
            }
            break;
        }
    }
    [_0x4ee3('0xa')]() {
        var _0x14496d = {
            'yDQMP': function (_0x3edbd9, _0x175abd) {
                return _0x3edbd9 < _0x175abd;
            },
            'xXzjg': function (_0x1de476, _0x2585fb) {
                return _0x1de476 + _0x2585fb;
            },
            'RDspW': _0x4ee3('0xb')
        };
        var _0x52d115 = '';
        for (var _0x5494a3 = 0x0; _0x14496d[_0x4ee3('0xc')](_0x5494a3, this[_0x4ee3('0x7')][_0x4ee3('0xd')]); _0x5494a3++) {
            _0x52d115 += _0x14496d[_0x4ee3('0xe')](_0x14496d[_0x4ee3('0xe')](this['craftingRequirements'][_0x5494a3][_0x4ee3('0x0')][_0x4ee3('0x2')], _0x4ee3('0x3')) + this['craftingRequirements'][_0x5494a3]['quantity'], '\x20');
        }
        return _0x14496d[_0x4ee3('0xe')](_0x14496d['xXzjg'](this[_0x4ee3('0x2')] + ',\x20', this['craftingTime']) + _0x14496d[_0x4ee3('0xf')] + this['baseCost'] + 'coins.\x20Crafting\x20Requirement:\x20', _0x52d115);
    }
}
class CraftingItemOutput {
    constructor(_0x1a8abb, _0x3b49d0, _0x21b883, _0x846ce6, _0x5e04eb) {
        var _0x3a627c = { 'ngaba': _0x4ee3('0x10') };
        var _0xda8d9e = _0x3a627c[_0x4ee3('0x11')][_0x4ee3('0x6')]('|'), _0x3b5d99 = 0x0;
        while (!![]) {
            switch (_0xda8d9e[_0x3b5d99++]) {
            case '0':
                this[_0x4ee3('0x12')] = _0x5e04eb;
                continue;
            case '1':
                this[_0x4ee3('0x13')] = _0x3b49d0;
                continue;
            case '2':
                this[_0x4ee3('0x9')] = _0x846ce6;
                continue;
            case '3':
                this['baseCost'] = _0x21b883;
                continue;
            case '4':
                this[_0x4ee3('0x2')] = _0x1a8abb;
                continue;
            }
            break;
        }
    }
    [_0x4ee3('0x14')]() {
        switch (this[_0x4ee3('0x9')]) {
        case rarity[_0x4ee3('0x15')]:
            return 0x0;
        case rarity[_0x4ee3('0x16')]:
            return 0x1;
        default:
        case rarity['COMMON']:
            return 0x2;
        case rarity[_0x4ee3('0x17')]:
            return 0x3;
        case rarity[_0x4ee3('0x18')]:
            return 0x4;
        case rarity[_0x4ee3('0x19')]:
            return 0x5;
        }
    }
    [_0x4ee3('0x1a')](_0x56d85) {
        var _0x3bd5f7 = {
            'kOpve': function (_0x4132c2, _0x493f4d) {
                return _0x4132c2 < _0x493f4d;
            },
            'idYci': function (_0x38939f, _0x42f68c) {
                return _0x38939f / _0x42f68c;
            },
            'wwPsX': function (_0x1f7478, _0xc40b55) {
                return _0x1f7478 > _0xc40b55;
            }
        };
        var _0x544dd1 = 0x1;
        if (_0x3bd5f7['kOpve'](this[_0x4ee3('0x13')], _0x56d85)) {
            _0x544dd1 = Math[_0x4ee3('0x1b')](_0x3bd5f7['idYci'](_0x56d85, this[_0x4ee3('0x13')]));
        }
        if (_0x3bd5f7['wwPsX'](_0x544dd1, this[_0x4ee3('0x12')])) {
            return this[_0x4ee3('0x12')];
        }
        return _0x544dd1;
    }
    [_0x4ee3('0x1c')](_0x14e552) {
        var _0x20159c = {
            'jUrac': function (_0x43c2a6, _0x456e93) {
                return _0x43c2a6 < _0x456e93;
            },
            'OpGsZ': function (_0x2fc392, _0x3a0002) {
                return _0x2fc392 / _0x3a0002;
            },
            'mXTsf': function (_0xb467a0, _0x34029d) {
                return _0xb467a0 > _0x34029d;
            }
        };
        var _0x478525 = 0x1;
        if (_0x20159c[_0x4ee3('0x1d')](this['craftingTime'], _0x14e552)) {
            _0x478525 = Math[_0x4ee3('0x1b')](_0x20159c[_0x4ee3('0x1e')](_0x14e552, this['craftingTime']));
        }
        if (_0x20159c['mXTsf'](_0x478525, this[_0x4ee3('0x12')])) {
            _0x478525 = this[_0x4ee3('0x12')];
        }
        return Math[_0x4ee3('0x1b')](this['quantity'] / _0x478525);
    }
    [_0x4ee3('0x1f')](_0xdec4e1) {
        var _0x2b2e69 = {
            'XfZZy': function (_0x56f9b6, _0x47d593) {
                return _0x56f9b6 * _0x47d593;
            },
            'TTDWl': function (_0x940c01, _0x224a3a) {
                return _0x940c01 * _0x224a3a;
            },
            'yVuqI': function (_0x44be1f, _0x277645) {
                return _0x44be1f + _0x277645;
            }
        };
        var _0x4a7853 = this[_0x4ee3('0x1c')](_0xdec4e1);
        var _0x166a18 = this[_0x4ee3('0x1a')](_0xdec4e1);
        return _0x2b2e69[_0x4ee3('0x20')](_0x2b2e69[_0x4ee3('0x21')](this['baseCost'] / 0x4, _0x2b2e69[_0x4ee3('0x22')](Math['pow'](_0x4a7853, 0x2), _0x2b2e69[_0x4ee3('0x21')](0x3, _0x4a7853))), _0x166a18);
    }
}