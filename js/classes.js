var _0x3c7f = [
    'Miwrd',
    'split',
    'craftingTime',
    'coins.\x20Crafting\x20Requirement:\x20',
    'craftingRequirements',
    'length',
    'iWQKd',
    'VsAfI',
    'sjUrB',
    'NhEpf',
    'Lpmmw',
    'baseCost',
    'NOpnJ',
    '1|4|3|0|2',
    'axrxU',
    'getRarityValue',
    'rarity',
    'COMMON',
    'RARE',
    'LEGENDARY',
    'getCrafts',
    'ceil',
    'getItemsPerCraft',
    'RtPFm',
    'tZefk',
    'getCost',
    'uOcjX',
    'WJveh',
    'pow',
    'quantity',
    'toString',
    '\x20:\x20',
    'name'
];
(function (_0x2f25fd, _0x557794) {
    var _0x1eaa2a = function (_0x571ce0) {
        while (--_0x571ce0) {
            _0x2f25fd['push'](_0x2f25fd['shift']());
        }
    };
    _0x1eaa2a(++_0x557794);
}(_0x3c7f, 0xa1));
var _0x1e65 = function (_0x4ffd11, _0x474d4f) {
    _0x4ffd11 = _0x4ffd11 - 0x0;
    var _0x24e801 = _0x3c7f[_0x4ffd11];
    return _0x24e801;
};
class CraftingRequirement {
    constructor(_0x3770b7, _0x5888ef) {
        this['craftingItem'] = _0x3770b7;
        this[_0x1e65('0x0')] = _0x5888ef;
    }
    [_0x1e65('0x1')]() {
        var _0x33a045 = { 'AadEk': _0x1e65('0x2') };
        this['craftingItem'][_0x1e65('0x3')] + _0x33a045['AadEk'] + this[_0x1e65('0x0')];
    }
}
class CraftingItem {
    constructor(_0x404171, _0x371f95, _0x4ecdad, _0x2ed3d9, _0x3f1721 = null) {
        var _0x5f0251 = { 'Miwrd': '4|1|3|2|0' };
        var _0x3afa4e = _0x5f0251[_0x1e65('0x4')][_0x1e65('0x5')]('|'), _0x26f30d = 0x0;
        while (!![]) {
            switch (_0x3afa4e[_0x26f30d++]) {
            case '0':
                this['craftingRequirements'] = _0x3f1721;
                continue;
            case '1':
                this[_0x1e65('0x6')] = _0x371f95;
                continue;
            case '2':
                this['rarity'] = _0x2ed3d9;
                continue;
            case '3':
                this['baseCost'] = _0x4ecdad;
                continue;
            case '4':
                this['name'] = _0x404171;
                continue;
            }
            break;
        }
    }
    [_0x1e65('0x1')]() {
        var _0x4f2e3a = {
            'iWQKd': function (_0x171832, _0x2c418b) {
                return _0x171832 + _0x2c418b;
            },
            'VsAfI': function (_0x209ee5, _0x169155) {
                return _0x209ee5 + _0x169155;
            },
            'sjUrB': function (_0x232588, _0x17b9df) {
                return _0x232588 + _0x17b9df;
            },
            'NhEpf': function (_0x341d4e, _0x588354) {
                return _0x341d4e + _0x588354;
            },
            'Lpmmw': function (_0x549e42, _0x8aeaef) {
                return _0x549e42 + _0x8aeaef;
            },
            'rlyQp': 'minutes,\x20',
            'NOpnJ': _0x1e65('0x7')
        };
        var _0x46ca43 = '';
        for (var _0x2eca51 = 0x0; _0x2eca51 < this[_0x1e65('0x8')][_0x1e65('0x9')]; _0x2eca51++) {
            _0x46ca43 += _0x4f2e3a[_0x1e65('0xa')](_0x4f2e3a[_0x1e65('0xb')](_0x4f2e3a[_0x1e65('0xc')](this['craftingRequirements'][_0x2eca51]['craftingItem'][_0x1e65('0x3')], _0x1e65('0x2')), this['craftingRequirements'][_0x2eca51][_0x1e65('0x0')]), '\x20');
        }
        return _0x4f2e3a[_0x1e65('0xc')](_0x4f2e3a[_0x1e65('0xc')](_0x4f2e3a['sjUrB'](_0x4f2e3a[_0x1e65('0xd')](_0x4f2e3a[_0x1e65('0xe')](this['name'] + ',\x20', this[_0x1e65('0x6')]), _0x4f2e3a['rlyQp']), this[_0x1e65('0xf')]), _0x4f2e3a[_0x1e65('0x10')]), _0x46ca43);
    }
}
class CraftingItemOutput {
    constructor(_0x563511, _0x31bf84, _0x149134, _0x500a33, _0x4f6a8d) {
        var _0x2bb0f7 = { 'axrxU': _0x1e65('0x11') };
        var _0x4ee45b = _0x2bb0f7[_0x1e65('0x12')]['split']('|'), _0x56f42f = 0x0;
        while (!![]) {
            switch (_0x4ee45b[_0x56f42f++]) {
            case '0':
                this['rarity'] = _0x500a33;
                continue;
            case '1':
                this[_0x1e65('0x3')] = _0x563511;
                continue;
            case '2':
                this[_0x1e65('0x0')] = _0x4f6a8d;
                continue;
            case '3':
                this[_0x1e65('0xf')] = _0x149134;
                continue;
            case '4':
                this[_0x1e65('0x6')] = _0x31bf84;
                continue;
            }
            break;
        }
    }
    [_0x1e65('0x13')]() {
        switch (this[_0x1e65('0x14')]) {
        case rarity['HIDDEN']:
            return 0x0;
        case rarity['RAW']:
            return 0x1;
        default:
        case rarity[_0x1e65('0x15')]:
            return 0x2;
        case rarity[_0x1e65('0x16')]:
            return 0x3;
        case rarity['EPIC']:
            return 0x4;
        case rarity[_0x1e65('0x17')]:
            return 0x5;
        }
    }
    [_0x1e65('0x18')](_0x1bb2e6) {
        var _0x5a840f = {
            'aAMnr': function (_0x55dc41, _0x17ca96) {
                return _0x55dc41 > _0x17ca96;
            }
        };
        var _0x4104c8 = 0x1;
        if (this[_0x1e65('0x6')] < _0x1bb2e6) {
            _0x4104c8 = Math[_0x1e65('0x19')](_0x1bb2e6 / this[_0x1e65('0x6')]);
        }
        if (_0x5a840f['aAMnr'](_0x4104c8, this[_0x1e65('0x0')])) {
            return this[_0x1e65('0x0')];
        }
        return _0x4104c8;
    }
    [_0x1e65('0x1a')](_0xc64181) {
        var _0x502179 = {
            'RtPFm': function (_0x968333, _0x383231) {
                return _0x968333 < _0x383231;
            },
            'iNNjH': function (_0x28f764, _0x1250e2) {
                return _0x28f764 / _0x1250e2;
            },
            'tZefk': function (_0xa17a70, _0x5c2303) {
                return _0xa17a70 > _0x5c2303;
            }
        };
        var _0x2543c2 = 0x1;
        if (_0x502179[_0x1e65('0x1b')](this[_0x1e65('0x6')], _0xc64181)) {
            _0x2543c2 = Math['ceil'](_0x502179['iNNjH'](_0xc64181, this['craftingTime']));
        }
        if (_0x502179[_0x1e65('0x1c')](_0x2543c2, this[_0x1e65('0x0')])) {
            _0x2543c2 = this[_0x1e65('0x0')];
        }
        return Math[_0x1e65('0x19')](this[_0x1e65('0x0')] / _0x2543c2);
    }
    [_0x1e65('0x1d')](_0x285f4c) {
        var _0x48c84b = {
            'uOcjX': function (_0x8a5599, _0x58a4ad) {
                return _0x8a5599 * _0x58a4ad;
            },
            'WJveh': function (_0x20b183, _0x2fd465) {
                return _0x20b183 / _0x2fd465;
            }
        };
        var _0x1ec712 = this[_0x1e65('0x1a')](_0x285f4c);
        var _0x4ed6c0 = this[_0x1e65('0x18')](_0x285f4c);
        return _0x48c84b[_0x1e65('0x1e')](_0x48c84b[_0x1e65('0x1f')](this[_0x1e65('0xf')], 0x4), Math[_0x1e65('0x20')](_0x1ec712, 0x2) + _0x48c84b[_0x1e65('0x1e')](0x3, _0x1ec712)) * _0x4ed6c0;
    }
}