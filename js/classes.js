var _0xd709 = [
    'QCCPb',
    'getItemsPerCraft',
    'OAcvj',
    'jraQF',
    'getCost',
    'BPdhQ',
    'TXkXF',
    'pow',
    'craftingItem',
    'quantity',
    'toString',
    'royjD',
    'name',
    'lLXjD',
    '3|4|1|2|0',
    'aMOzI',
    'craftingRequirements',
    'baseCost',
    'rarity',
    'craftingTime',
    'PokID',
    'bZMjH',
    'UMbyG',
    '\x20:\x20',
    'MhMcZ',
    'UOyHY',
    'minutes,\x20',
    'coins.\x20Crafting\x20Requirement:\x20',
    '0|2|3|1|4',
    'split',
    'getRarityValue',
    'HIDDEN',
    'RAW',
    'COMMON',
    'RARE',
    'EPIC',
    'LEGENDARY',
    'getCrafts',
    'YCSgK',
    'ceil'
];
(function (_0x10e184, _0x347944) {
    var _0x2fb7ba = function (_0x3c6964) {
        while (--_0x3c6964) {
            _0x10e184['push'](_0x10e184['shift']());
        }
    };
    _0x2fb7ba(++_0x347944);
}(_0xd709, 0x1c0));
var _0x5153 = function (_0x466301, _0x20a518) {
    _0x466301 = _0x466301 - 0x0;
    var _0x151dd6 = _0xd709[_0x466301];
    return _0x151dd6;
};
class CraftingRequirement {
    constructor(_0x39d7dc, _0x166cfa) {
        this[_0x5153('0x0')] = _0x39d7dc;
        this[_0x5153('0x1')] = _0x166cfa;
    }
    [_0x5153('0x2')]() {
        var _0x1bb3ed = {
            'royjD': function (_0x19fb5e, _0x23b23e) {
                return _0x19fb5e + _0x23b23e;
            },
            'lLXjD': '\x20:\x20'
        };
        _0x1bb3ed[_0x5153('0x3')](this[_0x5153('0x0')][_0x5153('0x4')], _0x1bb3ed[_0x5153('0x5')]) + this['quantity'];
    }
}
class CraftingItem {
    constructor(_0x5cf3ef, _0x2d8118, _0x277653, _0x2af048, _0x25606f = null) {
        var _0x45923a = { 'aMOzI': _0x5153('0x6') };
        var _0x28e036 = _0x45923a[_0x5153('0x7')]['split']('|'), _0x512ee9 = 0x0;
        while (!![]) {
            switch (_0x28e036[_0x512ee9++]) {
            case '0':
                this[_0x5153('0x8')] = _0x25606f;
                continue;
            case '1':
                this[_0x5153('0x9')] = _0x277653;
                continue;
            case '2':
                this[_0x5153('0xa')] = _0x2af048;
                continue;
            case '3':
                this[_0x5153('0x4')] = _0x5cf3ef;
                continue;
            case '4':
                this[_0x5153('0xb')] = _0x2d8118;
                continue;
            }
            break;
        }
    }
    [_0x5153('0x2')]() {
        var _0x122663 = {
            'PokID': function (_0x2cbf4a, _0x712b89) {
                return _0x2cbf4a < _0x712b89;
            },
            'bZMjH': function (_0x5c2cf5, _0x30a337) {
                return _0x5c2cf5 + _0x30a337;
            },
            'UMbyG': function (_0x5b1063, _0x5bff9c) {
                return _0x5b1063 + _0x5bff9c;
            },
            'MhMcZ': function (_0x511579, _0x443993) {
                return _0x511579 + _0x443993;
            },
            'PvSKy': function (_0x1560d3, _0x2bc9b7) {
                return _0x1560d3 + _0x2bc9b7;
            },
            'UOyHY': function (_0x1b403a, _0x17a396) {
                return _0x1b403a + _0x17a396;
            },
            'NLHsp': function (_0x5455c6, _0x4db0a5) {
                return _0x5455c6 + _0x4db0a5;
            }
        };
        var _0x302a8d = '';
        for (var _0x3f8917 = 0x0; _0x122663[_0x5153('0xc')](_0x3f8917, this[_0x5153('0x8')]['length']); _0x3f8917++) {
            _0x302a8d += _0x122663[_0x5153('0xd')](_0x122663[_0x5153('0xe')](_0x122663[_0x5153('0xe')](this[_0x5153('0x8')][_0x3f8917]['craftingItem'][_0x5153('0x4')], _0x5153('0xf')), this[_0x5153('0x8')][_0x3f8917]['quantity']), '\x20');
        }
        return _0x122663[_0x5153('0xe')](_0x122663[_0x5153('0x10')](_0x122663['PvSKy'](_0x122663[_0x5153('0x11')](_0x122663['NLHsp'](this[_0x5153('0x4')], ',\x20'), this[_0x5153('0xb')]), _0x5153('0x12')) + this[_0x5153('0x9')], _0x5153('0x13')), _0x302a8d);
    }
}
class CraftingItemOutput {
    constructor(_0x3d5676, _0x43b87f, _0x458a94, _0x42ddfb, _0x371c88) {
        var _0x1a584e = _0x5153('0x14')[_0x5153('0x15')]('|'), _0x5acd6f = 0x0;
        while (!![]) {
            switch (_0x1a584e[_0x5acd6f++]) {
            case '0':
                this['name'] = _0x3d5676;
                continue;
            case '1':
                this['rarity'] = _0x42ddfb;
                continue;
            case '2':
                this[_0x5153('0xb')] = _0x43b87f;
                continue;
            case '3':
                this[_0x5153('0x9')] = _0x458a94;
                continue;
            case '4':
                this[_0x5153('0x1')] = _0x371c88;
                continue;
            }
            break;
        }
    }
    [_0x5153('0x16')]() {
        switch (this[_0x5153('0xa')]) {
        case rarity[_0x5153('0x17')]:
            return 0x0;
        case rarity[_0x5153('0x18')]:
            return 0x1;
        default:
        case rarity[_0x5153('0x19')]:
            return 0x2;
        case rarity[_0x5153('0x1a')]:
            return 0x3;
        case rarity[_0x5153('0x1b')]:
            return 0x4;
        case rarity[_0x5153('0x1c')]:
            return 0x5;
        }
    }
    [_0x5153('0x1d')](_0x32d6c4) {
        var _0xd8fa63 = {
            'YCSgK': function (_0x504115, _0x116dcc) {
                return _0x504115 < _0x116dcc;
            },
            'QCCPb': function (_0x20d9bd, _0x580d63) {
                return _0x20d9bd > _0x580d63;
            }
        };
        var _0xf92774 = 0x1;
        if (_0xd8fa63[_0x5153('0x1e')](this[_0x5153('0xb')], _0x32d6c4)) {
            _0xf92774 = Math[_0x5153('0x1f')](_0x32d6c4 / this['craftingTime']);
        }
        if (_0xd8fa63[_0x5153('0x20')](_0xf92774, this[_0x5153('0x1')])) {
            return this[_0x5153('0x1')];
        }
        return _0xf92774;
    }
    [_0x5153('0x21')](_0x186977) {
        var _0x3f2691 = {
            'OAcvj': function (_0x195cff, _0xd2195f) {
                return _0x195cff < _0xd2195f;
            },
            'jraQF': function (_0x123f67, _0x43b6f9) {
                return _0x123f67 / _0x43b6f9;
            }
        };
        var _0x154b6d = 0x1;
        if (_0x3f2691[_0x5153('0x22')](this[_0x5153('0xb')], _0x186977)) {
            _0x154b6d = Math[_0x5153('0x1f')](_0x3f2691[_0x5153('0x23')](_0x186977, this[_0x5153('0xb')]));
        }
        if (_0x154b6d > this[_0x5153('0x1')]) {
            _0x154b6d = this[_0x5153('0x1')];
        }
        return Math[_0x5153('0x1f')](_0x3f2691[_0x5153('0x23')](this[_0x5153('0x1')], _0x154b6d));
    }
    [_0x5153('0x24')](_0x502188) {
        var _0x3a0b0e = {
            'BPdhQ': function (_0x2d69fa, _0x1dd4b2) {
                return _0x2d69fa * _0x1dd4b2;
            },
            'TXkXF': function (_0x12c98c, _0x357a4e) {
                return _0x12c98c / _0x357a4e;
            },
            'miYfk': function (_0x4a25b2, _0x2952ec) {
                return _0x4a25b2 + _0x2952ec;
            }
        };
        var _0x287bd8 = this[_0x5153('0x21')](_0x502188);
        var _0x2ee1e9 = this['getCrafts'](_0x502188);
        return _0x3a0b0e[_0x5153('0x25')](_0x3a0b0e[_0x5153('0x26')](this[_0x5153('0x9')], 0x4), _0x3a0b0e['miYfk'](Math[_0x5153('0x27')](_0x287bd8, 0x2), _0x3a0b0e['BPdhQ'](0x3, _0x287bd8))) * _0x2ee1e9;
    }
}