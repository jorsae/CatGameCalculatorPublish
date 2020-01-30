var _0xc32a = [
    'uLIEC',
    'WJnDU',
    'YlcfZ',
    'output-content-row',
    'MLMmc',
    'GIdna',
    'qFkhn',
    'QEhFV',
    'RNxPc',
    'UEoip',
    'onload',
    'calculate',
    'getElementById',
    'pNTQg',
    'onclick',
    'userTime',
    'Amount',
    'UserItem',
    'BkzIN',
    'valueAsNumber',
    'CurNE',
    'log',
    'get',
    'fwvSA',
    'name',
    'toLowerCase',
    'pzXtf',
    'craftingRequirements',
    'length',
    'craftingItem',
    'aYMLM',
    'quantity',
    'push',
    'HIDDEN',
    'set',
    'gkcWg',
    'entries',
    'DHthG',
    'getCost',
    'vKPjX',
    'clear',
    'delete',
    '18|3|2|10|1|16|5|21|19|17|11|6|0|20|15|9|12|8|14|4|13|7',
    'div',
    'output-content',
    'Craft:\x20',
    '.png',
    'outputContainer',
    'output-content-text',
    'split',
    'innerText',
    'BQUpm',
    'PmluX',
    'createElement',
    'img',
    'BQTdg',
    'RlsAM',
    'appendChild',
    'classList',
    'QdTQV',
    'njSCZ',
    'fQmAc',
    'GeWqK',
    'vNsUw',
    'xzjmG',
    'SLBiP',
    'src',
    'QUFid',
    'fFmwE',
    'TqvcQ',
    'VaWTl',
    'HFChx',
    'add',
    'rarity'
];
(function (_0x5d9f58, _0x64f2a) {
    var _0x523df4 = function (_0xaca0f1) {
        while (--_0xaca0f1) {
            _0x5d9f58['push'](_0x5d9f58['shift']());
        }
    };
    _0x523df4(++_0x64f2a);
}(_0xc32a, 0x17c));
var _0x1c09 = function (_0x129878, _0x298e69) {
    _0x129878 = _0x129878 - 0x0;
    var _0x32f343 = _0xc32a[_0x129878];
    return _0x32f343;
};
window[_0x1c09('0x0')] = init;
function init() {
    var _0x3ae9e3 = { 'pNTQg': _0x1c09('0x1') };
    document[_0x1c09('0x2')](_0x3ae9e3[_0x1c09('0x3')])[_0x1c09('0x4')] = calculate;
}
function calculate() {
    var _0x4e4461 = {
        'BkzIN': _0x1c09('0x5'),
        'CurNE': function (_0x7a6eeb, _0x27e6ff) {
            return _0x7a6eeb === _0x27e6ff;
        },
        'fwvSA': function (_0x92be31, _0x1a0f16) {
            return _0x92be31 + _0x1a0f16;
        },
        'pDvuh': _0x1c09('0x6'),
        'aeKQI': function (_0x2dc24f, _0x43f68c) {
            return _0x2dc24f !== _0x43f68c;
        },
        'pzXtf': function (_0x4e563f, _0x1e5696) {
            return _0x4e563f < _0x1e5696;
        },
        'aYMLM': function (_0x6188d3, _0x3b26bd) {
            return _0x6188d3 * _0x3b26bd;
        },
        'gkcWg': function (_0x45a49e, _0x4a0a32, _0x1f5bf1) {
            return _0x45a49e(_0x4a0a32, _0x1f5bf1);
        },
        'DHthG': _0x1c09('0x7'),
        'vKPjX': function (_0x2256c7, _0x54589e, _0x3c5f4d, _0xd625b, _0x4a5d9c, _0x36da55) {
            return _0x2256c7(_0x54589e, _0x3c5f4d, _0xd625b, _0x4a5d9c, _0x36da55);
        }
    };
    var _0xd518a8 = document['getElementById'](_0x4e4461[_0x1c09('0x8')]);
    var _0x5ad313 = parseInt(_0xd518a8[_0x1c09('0x9')]);
    if (_0x4e4461[_0x1c09('0xa')](_0x5ad313, NaN)) {
        console[_0x1c09('0xb')]('NaN');
        return;
    }
    _0x5ad313 *= 0xea60;
    var _0xb358d = [];
    for (const _0x2dcb37 of craftingRecipes['entries']()) {
        var _0x18924d = craftingRecipes[_0x1c09('0xc')](_0x2dcb37[0x0]);
        var _0x366042 = document[_0x1c09('0x2')](_0x4e4461[_0x1c09('0xd')](_0x18924d[_0x1c09('0xe')][_0x1c09('0xf')](), _0x4e4461['pDvuh']));
        if (_0x4e4461['aeKQI'](_0x366042, null)) {
            var _0x2bf16a = parseInt(_0x366042['innerText']);
            if (_0x2bf16a > 0x0) {
                _0xb358d['push'](new CraftingRequirement(_0x18924d, _0x2bf16a));
                for (var _0x189960 = 0x0; _0x4e4461[_0x1c09('0x10')](_0x189960, _0x18924d[_0x1c09('0x11')][_0x1c09('0x12')]); _0x189960++) {
                    var _0x2cbbeb = _0x18924d[_0x1c09('0x11')][_0x189960][_0x1c09('0x13')];
                    var _0x11f82e = _0x4e4461[_0x1c09('0x14')](_0x18924d['craftingRequirements'][_0x189960][_0x1c09('0x15')], _0x2bf16a);
                    _0xb358d[_0x1c09('0x16')](new CraftingRequirement(_0x2cbbeb, _0x11f82e));
                }
            }
        }
        continue;
    }
    userItem = new CraftingItem(_0x1c09('0x7'), 0x0, 0x0, rarity[_0x1c09('0x17')], _0xb358d);
    craftingRecipes[_0x1c09('0x18')](userItem['name'], userItem);
    var _0x495aee = _0x4e4461[_0x1c09('0x19')](getCraftingRequirements, userItem, 0x1);
    var _0x1f458d = 0x0;
    var _0x41ca8a = 0x0;
    for (const _0x1ee36a of _0x495aee[_0x1c09('0x1a')]()) {
        var _0x18924d = craftingRecipes[_0x1c09('0xc')](_0x1ee36a[0x0]);
        if (_0x4e4461[_0x1c09('0xa')](_0x18924d[_0x1c09('0xe')], _0x4e4461[_0x1c09('0x1b')])) {
            continue;
        }
        var _0x374435 = _0x1ee36a[0x1];
        var _0x290d20 = _0x18924d[_0x1c09('0x1c')](_0x5ad313, _0x374435);
        var _0x1c2cfc = _0x290d20[0x0];
        var _0x2b1062 = _0x290d20[0x1];
        var _0x44c877 = _0x290d20[0x2];
        _0x4e4461[_0x1c09('0x1d')](createOutput, _0x18924d, _0x1c2cfc, _0x2b1062, _0x44c877, _0x1f458d);
        _0x41ca8a += _0x1c2cfc;
        _0x1f458d++;
    }
    currentCraft[_0x1c09('0x1e')]();
    craftingRecipes[_0x1c09('0x1f')](userItem[_0x1c09('0xe')]);
}
function createOutput(_0x49c7e9, _0x161966, _0x398b1c, _0x4f1002, _0x2736d1) {
    var _0x2c36d4 = {
        'xczhD': _0x1c09('0x20'),
        'BQUpm': function (_0x3788f1, _0x4882d9) {
            return _0x3788f1 + _0x4882d9;
        },
        'PmluX': 'Cost:\x20',
        'BQTdg': _0x1c09('0x21'),
        'RlsAM': function (_0x3c52ca, _0x5a19dc) {
            return _0x3c52ca(_0x5a19dc);
        },
        'QdTQV': _0x1c09('0x22'),
        'njSCZ': function (_0x2bf3ad, _0xcc1e17) {
            return _0x2bf3ad + _0xcc1e17;
        },
        'fQmAc': function (_0x2530c3, _0x1df6f7) {
            return _0x2530c3 * _0x1df6f7;
        },
        'GeWqK': function (_0x6bebeb, _0x3b1d8d) {
            return _0x6bebeb + _0x3b1d8d;
        },
        'vNsUw': function (_0xaf0957, _0x483014) {
            return _0xaf0957 + _0x483014;
        },
        'oBUER': function (_0x562ce7, _0x3d177a) {
            return _0x562ce7 + _0x3d177a;
        },
        'zHIVZ': _0x1c09('0x23'),
        'xzjmG': 'x,\x20',
        'SLBiP': '\x20times',
        'QUFid': function (_0x48f534, _0x565c49) {
            return _0x48f534 + _0x565c49;
        },
        'fFmwE': function (_0x5fb0a6, _0x484d76) {
            return _0x5fb0a6 + _0x484d76;
        },
        'TqvcQ': 'images/game/',
        'VaWTl': _0x1c09('0x24'),
        'HFChx': _0x1c09('0x25'),
        'SdXMp': _0x1c09('0x26')
    };
    var _0x4bfdfb = _0x2c36d4['xczhD'][_0x1c09('0x27')]('|'), _0x2c60b5 = 0x0;
    while (!![]) {
        switch (_0x4bfdfb[_0x2c60b5++]) {
        case '0':
            _0x36da0d[_0x1c09('0x28')] = _0x2c36d4[_0x1c09('0x29')](_0x2c36d4[_0x1c09('0x2a')], _0x161966);
            continue;
        case '1':
            var _0x514173 = document[_0x1c09('0x2b')](_0x1c09('0x2c'));
            continue;
        case '2':
            var _0x52bbe9 = document['createElement'](_0x2c36d4[_0x1c09('0x2d')]);
            continue;
        case '3':
            var _0x206c14 = _0x2c36d4[_0x1c09('0x2e')](getOutputRow, _0x2736d1);
            continue;
        case '4':
            _0x52bbe9[_0x1c09('0x2f')](_0xcbc8e7);
            continue;
        case '5':
            var _0xcbc8e7 = document[_0x1c09('0x2b')](_0x2c36d4[_0x1c09('0x2d')]);
            continue;
        case '6':
            var _0x36da0d = document[_0x1c09('0x2b')]('p');
            continue;
        case '7':
            _0x496be6[_0x1c09('0x2f')](_0x206c14);
            continue;
        case '8':
            _0xcbc8e7['appendChild'](_0x5600a3);
            continue;
        case '9':
            _0xcbc8e7[_0x1c09('0x2f')](_0x233649);
            continue;
        case '10':
            _0x52bbe9[_0x1c09('0x30')]['add'](_0x2c36d4[_0x1c09('0x31')]);
            continue;
        case '11':
            _0x233649['innerText'] = _0x2c36d4[_0x1c09('0x32')](_0x2c36d4[_0x1c09('0x32')](_0x49c7e9['name'], ':\x20'), _0x2c36d4[_0x1c09('0x33')](_0x398b1c, _0x4f1002));
            continue;
        case '12':
            _0xcbc8e7[_0x1c09('0x2f')](_0x36da0d);
            continue;
        case '13':
            _0x206c14[_0x1c09('0x2f')](_0x52bbe9);
            continue;
        case '14':
            _0x52bbe9[_0x1c09('0x2f')](_0x514173);
            continue;
        case '15':
            _0x5600a3[_0x1c09('0x28')] = _0x2c36d4[_0x1c09('0x34')](_0x2c36d4[_0x1c09('0x35')](_0x2c36d4['oBUER'](_0x2c36d4['zHIVZ'], _0x398b1c) + _0x2c36d4[_0x1c09('0x36')], _0x4f1002), _0x2c36d4[_0x1c09('0x37')]);
            continue;
        case '16':
            _0x514173[_0x1c09('0x38')] = _0x2c36d4[_0x1c09('0x39')](_0x2c36d4[_0x1c09('0x3a')](_0x2c36d4[_0x1c09('0x3b')], _0x49c7e9['name']['toLowerCase']()), _0x2c36d4[_0x1c09('0x3c')]);
            continue;
        case '17':
            var _0x233649 = document[_0x1c09('0x2b')]('p');
            continue;
        case '18':
            var _0x496be6 = document['getElementById'](_0x2c36d4[_0x1c09('0x3d')]);
            continue;
        case '19':
            _0xcbc8e7[_0x1c09('0x30')][_0x1c09('0x3e')](_0x49c7e9[_0x1c09('0x3f')]);
            continue;
        case '20':
            var _0x5600a3 = document[_0x1c09('0x2b')]('p');
            continue;
        case '21':
            _0xcbc8e7[_0x1c09('0x30')][_0x1c09('0x3e')](_0x2c36d4['SdXMp']);
            continue;
        }
        break;
    }
}
function getOutputRow(_0xe64219) {
    var _0xe182f5 = {
        'uLIEC': function (_0x3f5b47, _0x30f031) {
            return _0x3f5b47 % _0x30f031;
        },
        'WJnDU': function (_0x564c0f, _0x188887) {
            return _0x564c0f === _0x188887;
        },
        'YlcfZ': 'div',
        'MLMmc': function (_0x506304, _0x276757) {
            return _0x506304 - _0x276757;
        }
    };
    var _0x2e4290 = _0xe182f5[_0x1c09('0x40')](_0xe64219, outputRows);
    if (_0xe182f5[_0x1c09('0x41')](_0x2e4290, 0x0)) {
        var _0x3071f9 = document['createElement'](_0xe182f5[_0x1c09('0x42')]);
        _0x3071f9[_0x1c09('0x30')]['add'](_0x1c09('0x43'));
        _0x3071f9['id'] = _0xe182f5[_0x1c09('0x44')](_0xe64219, _0x2e4290);
        return _0x3071f9;
    }
    return document[_0x1c09('0x2')](_0xe64219 - _0x2e4290);
}
function clickUp(_0x4bc969) {
    var _0x5e03b4 = {
        'GIdna': _0x1c09('0x6'),
        'qFkhn': function (_0x2edfb6, _0x53f84e) {
            return _0x2edfb6 === _0x53f84e;
        },
        'QEhFV': function (_0x527e71, _0xbe77db) {
            return _0x527e71(_0xbe77db);
        }
    };
    var _0x47629f = document[_0x1c09('0x2')](_0x4bc969 + _0x5e03b4[_0x1c09('0x45')]);
    if (_0x5e03b4[_0x1c09('0x46')](_0x47629f, null)) {
        return;
    }
    var _0x19ac1a = _0x5e03b4[_0x1c09('0x47')](parseInt, _0x47629f[_0x1c09('0x28')]);
    _0x47629f[_0x1c09('0x28')] = ++_0x19ac1a;
}
function clickDown(_0x313d2a) {
    var _0x4bbb62 = {
        'RNxPc': function (_0x4e7f37, _0x5413dc) {
            return _0x4e7f37 + _0x5413dc;
        },
        'SjjXX': function (_0x13a4df, _0xf30a85) {
            return _0x13a4df === _0xf30a85;
        },
        'UEoip': function (_0x23f280, _0x251923) {
            return _0x23f280 <= _0x251923;
        }
    };
    var _0x3de15b = document[_0x1c09('0x2')](_0x4bbb62[_0x1c09('0x48')](_0x313d2a, _0x1c09('0x6')));
    if (_0x4bbb62['SjjXX'](_0x3de15b, null)) {
        return;
    }
    var _0xe25edd = parseInt(_0x3de15b['innerText']);
    _0x3de15b[_0x1c09('0x28')] = --_0xe25edd;
    if (_0x4bbb62[_0x1c09('0x49')](_0xe25edd, 0x0)) {
        _0x3de15b[_0x1c09('0x28')] = 0x0;
    }
}