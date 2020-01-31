var _0x23e9 = [
    'rsBLg',
    'ehEwm',
    'YfQXt',
    'CvBCU',
    '2|1|3|4|0',
    'CiAVL',
    'bVkCq',
    'getElementById',
    'calculate',
    'onclick',
    'userTimeHours',
    'UserItem',
    'span',
    'Total\x20cost:\x20',
    'jNOYS',
    'value',
    'AMhNv',
    'entries',
    'get',
    'oDqSZ',
    'name',
    'Amount',
    'CmPWa',
    'innerText',
    'ptlWm',
    'push',
    'SyfQf',
    'craftingRequirements',
    'craftingItem',
    'LZrRO',
    'quantity',
    'xfXFJ',
    'HIDDEN',
    'set',
    'YlIxS',
    'BjjAd',
    'innerHTML',
    'createElement',
    'DHPKi',
    'HhUtv',
    'classList',
    'add',
    'output-container-total',
    'KKfQy',
    'appendChild',
    'from',
    'AxPtU',
    'length',
    'dvEzq',
    'baseCost',
    'rarity',
    'sort',
    'getRarityValue',
    'getCost',
    'wnkjT',
    'getItemsPerCraft',
    'getCrafts',
    'dKaRK',
    'NcCMS',
    'clear',
    'delete',
    '2|20|3|0|13|15|17|9|5|1|16|14|12|10|6|11|19|8|7|18|4',
    'output-content',
    'images/game/',
    '.png',
    'OEUMr',
    'split',
    'DcTdy',
    'nECEk',
    'TpxHK',
    'bTmkx',
    'x,\x20',
    'JAFnU',
    'src',
    'wmKTy',
    'Yqtyk',
    'toLowerCase',
    'DddGb',
    'vvNKi',
    'anHYx',
    'output-content-row',
    'div',
    'ekIcr'
];
(function (_0x294d84, _0x3fad0f) {
    var _0x5f1ac3 = function (_0x172ce7) {
        while (--_0x172ce7) {
            _0x294d84['push'](_0x294d84['shift']());
        }
    };
    _0x5f1ac3(++_0x3fad0f);
}(_0x23e9, 0x100));
var _0xe07a = function (_0x3f35ce, _0x30bd12) {
    _0x3f35ce = _0x3f35ce - 0x0;
    var _0x3e2481 = _0x23e9[_0x3f35ce];
    return _0x3e2481;
};
window['onload'] = init;
function init() {
    document[_0xe07a('0x0')](_0xe07a('0x1'))[_0xe07a('0x2')] = calculate;
}
function calculate() {
    var _0x4a565a = {
        'JtMfj': function (_0x87c994, _0x13b681) {
            return _0x87c994 - _0x13b681;
        },
        'AMhNv': function (_0x1eec20, _0x1713ae) {
            return _0x1eec20(_0x1713ae);
        },
        'jNOYS': _0xe07a('0x3'),
        'LZrRO': function (_0x2dc6e0, _0x10a022) {
            return _0x2dc6e0 * _0x10a022;
        },
        'oDqSZ': function (_0x3b1e6d, _0x2863a4) {
            return _0x3b1e6d + _0x2863a4;
        },
        'CmPWa': function (_0x25090d, _0x59acc0) {
            return _0x25090d !== _0x59acc0;
        },
        'ptlWm': function (_0x5f1c61, _0x8623cc) {
            return _0x5f1c61 > _0x8623cc;
        },
        'SyfQf': function (_0x34cfb7, _0x2d7a73) {
            return _0x34cfb7 < _0x2d7a73;
        },
        'xfXFJ': _0xe07a('0x4'),
        'YlIxS': function (_0x5f3979, _0x4ff6e0, _0x1c1ce4) {
            return _0x5f3979(_0x4ff6e0, _0x1c1ce4);
        },
        'BjjAd': 'outputContainer',
        'DHPKi': _0xe07a('0x5'),
        'HhUtv': 'spanTotal',
        'KKfQy': 'output-total',
        'AxPtU': function (_0x5748f8, _0x19e58e) {
            return _0x5748f8 < _0x19e58e;
        },
        'dvEzq': function (_0x52bb6b, _0x1cdeb9) {
            return _0x52bb6b === _0x1cdeb9;
        },
        'AhEzm': function (_0x352700, _0x4d5a05) {
            return _0x352700 < _0x4d5a05;
        },
        'wnkjT': function (_0x254e98, _0x4118ea, _0x429980, _0x30ce9d, _0x3e1fc1, _0x45ce6c) {
            return _0x254e98(_0x4118ea, _0x429980, _0x30ce9d, _0x3e1fc1, _0x45ce6c);
        },
        'dKaRK': _0xe07a('0x6'),
        'NcCMS': 'Completion\x20time:\x20'
    };
    var _0x386dda = _0x4a565a['AMhNv'](parseInt, document['getElementById'](_0x4a565a[_0xe07a('0x7')])[_0xe07a('0x8')]);
    var _0xaf00ee = _0x4a565a[_0xe07a('0x9')](parseInt, document[_0xe07a('0x0')]('userTimeMinutes')['value']);
    var _0x409ca7 = 0x0;
    if (!_0x4a565a[_0xe07a('0x9')](isNaN, _0x386dda)) {
        _0x409ca7 += _0x4a565a['LZrRO'](_0x386dda, 0x3c);
    }
    if (!_0x4a565a[_0xe07a('0x9')](isNaN, _0xaf00ee)) {
        _0x409ca7 += _0xaf00ee;
    }
    if (_0x409ca7 <= 0x0) {
        return;
    }
    var _0x23a11c = [];
    for (const _0xa6fc35 of craftingRecipes[_0xe07a('0xa')]()) {
        var _0x745322 = craftingRecipes[_0xe07a('0xb')](_0xa6fc35[0x0]);
        var _0x17927e = document[_0xe07a('0x0')](_0x4a565a[_0xe07a('0xc')](_0x745322[_0xe07a('0xd')]['toLowerCase'](), _0xe07a('0xe')));
        if (_0x4a565a[_0xe07a('0xf')](_0x17927e, null)) {
            var _0x23034b = _0x4a565a['AMhNv'](parseInt, _0x17927e[_0xe07a('0x10')]);
            _0x17927e['innerText'] = '0';
            if (_0x4a565a[_0xe07a('0x11')](_0x23034b, 0x0)) {
                _0x23a11c[_0xe07a('0x12')](new CraftingRequirement(_0x745322, _0x23034b));
                for (var _0x1fc7a8 = 0x0; _0x4a565a[_0xe07a('0x13')](_0x1fc7a8, _0x745322[_0xe07a('0x14')]['length']); _0x1fc7a8++) {
                    var _0x452cda = _0x745322[_0xe07a('0x14')][_0x1fc7a8][_0xe07a('0x15')];
                    var _0x17af3c = _0x4a565a[_0xe07a('0x16')](_0x745322['craftingRequirements'][_0x1fc7a8][_0xe07a('0x17')], _0x23034b);
                    _0x23a11c['push'](new CraftingRequirement(_0x452cda, _0x17af3c));
                }
            }
        }
        continue;
    }
    userItem = new CraftingItem(_0x4a565a[_0xe07a('0x18')], 0x0, 0x0, rarity[_0xe07a('0x19')], _0x23a11c);
    craftingRecipes[_0xe07a('0x1a')](userItem[_0xe07a('0xd')], userItem);
    var _0x16cdc5 = _0x4a565a[_0xe07a('0x1b')](getCraftingRequirements, userItem, 0x1);
    var _0x29d070 = document[_0xe07a('0x0')](_0x4a565a[_0xe07a('0x1c')]);
    _0x29d070[_0xe07a('0x1d')] = '';
    var _0x5b754b = document[_0xe07a('0x1e')](_0x4a565a[_0xe07a('0x1f')]);
    _0x5b754b['id'] = _0x4a565a[_0xe07a('0x20')];
    _0x5b754b[_0xe07a('0x21')][_0xe07a('0x22')](_0xe07a('0x23'));
    _0x5b754b[_0xe07a('0x21')][_0xe07a('0x22')](_0x4a565a[_0xe07a('0x24')]);
    _0x29d070[_0xe07a('0x25')](_0x5b754b);
    var _0x2d4f9b = document[_0xe07a('0x1e')]('span');
    _0x2d4f9b[_0xe07a('0x21')][_0xe07a('0x22')]('output-container-items');
    var _0x46f9ea = Array[_0xe07a('0x26')](_0x16cdc5);
    var _0x8edb8c = [];
    for (var _0x1fc7a8 = 0x0; _0x4a565a[_0xe07a('0x27')](_0x1fc7a8, _0x46f9ea[_0xe07a('0x28')]); _0x1fc7a8++) {
        var _0x745322 = craftingRecipes[_0xe07a('0xb')](_0x46f9ea[_0x1fc7a8][0x0]);
        if (_0x4a565a[_0xe07a('0x29')](_0x745322['rarity'], rarity[_0xe07a('0x19')])) {
            continue;
        }
        var _0x2cba91 = _0x46f9ea[_0x1fc7a8][0x1];
        _0x8edb8c[_0xe07a('0x12')](new CraftingItemOutput(_0x745322['name'], _0x745322['craftingTime'], _0x745322[_0xe07a('0x2a')], _0x745322[_0xe07a('0x2b')], _0x2cba91));
    }
    _0x8edb8c[_0xe07a('0x2c')](function (_0x4f9f9f, _0xb2163a) {
        return _0x4a565a['JtMfj'](_0x4f9f9f[_0xe07a('0x2d')](), _0xb2163a[_0xe07a('0x2d')]());
    });
    var _0x293322 = 0x0;
    for (var _0x1fc7a8 = 0x0; _0x4a565a['AhEzm'](_0x1fc7a8, _0x8edb8c['length']); _0x1fc7a8++) {
        var _0x745322 = _0x8edb8c[_0x1fc7a8];
        var _0x32896d = _0x745322[_0xe07a('0x2e')](_0x409ca7);
        _0x4a565a[_0xe07a('0x2f')](createOutput, _0x745322, _0x32896d, _0x745322[_0xe07a('0x30')](_0x409ca7), _0x745322[_0xe07a('0x31')](_0x409ca7), _0x2d4f9b);
        _0x293322 += _0x32896d;
    }
    var _0x30b5e3 = document[_0xe07a('0x1e')]('p');
    _0x30b5e3[_0xe07a('0x10')] = _0x4a565a[_0xe07a('0xc')](_0x4a565a[_0xe07a('0x32')], _0x293322);
    _0x5b754b[_0xe07a('0x25')](_0x30b5e3);
    var _0x18cfe4 = document[_0xe07a('0x1e')]('p');
    _0x18cfe4['innerText'] = _0x4a565a[_0xe07a('0xc')](_0x4a565a[_0xe07a('0x33')], _0x409ca7);
    _0x5b754b[_0xe07a('0x25')](_0x18cfe4);
    currentCraft[_0xe07a('0x34')]();
    craftingRecipes[_0xe07a('0x35')](userItem[_0xe07a('0xd')]);
}
function createOutput(_0x51fb00, _0x4af9df, _0x462e53, _0x1b9ee5, _0x361449) {
    var _0x58e221 = {
        'OEUMr': _0xe07a('0x36'),
        'DcTdy': 'img',
        'nECEk': function (_0x26b890, _0x5cc548) {
            return _0x26b890 + _0x5cc548;
        },
        'MfyLW': _0xe07a('0x37'),
        'TpxHK': function (_0xb93a20, _0xf927e4) {
            return _0xb93a20 + _0xf927e4;
        },
        'bTmkx': function (_0x2b2744, _0x399249) {
            return _0x2b2744 + _0x399249;
        },
        'JAFnU': '\x20times',
        'wmKTy': function (_0x57bb6f, _0x2b3d56) {
            return _0x57bb6f + _0x2b3d56;
        },
        'Yqtyk': _0xe07a('0x38'),
        'DddGb': _0xe07a('0x39'),
        'vvNKi': 'Cost:\x20',
        'ngrWn': 'div',
        'anHYx': 'output-content-text'
    };
    var _0x48b53b = _0x58e221[_0xe07a('0x3a')][_0xe07a('0x3b')]('|'), _0x296803 = 0x0;
    while (!![]) {
        switch (_0x48b53b[_0x296803++]) {
        case '0':
            var _0x2fc713 = document[_0xe07a('0x1e')](_0x58e221[_0xe07a('0x3c')]);
            continue;
        case '1':
            _0x25fa1f[_0xe07a('0x10')] = _0x58e221[_0xe07a('0x3d')](_0x51fb00[_0xe07a('0xd')] + ':\x20', _0x462e53 * _0x1b9ee5);
            continue;
        case '2':
            var _0x483a6b = document[_0xe07a('0x0')]('outputContainer');
            continue;
        case '3':
            _0x35d4cd[_0xe07a('0x21')]['add'](_0x58e221['MfyLW']);
            continue;
        case '4':
            _0x483a6b[_0xe07a('0x25')](_0x361449);
            continue;
        case '5':
            var _0x25fa1f = document[_0xe07a('0x1e')]('p');
            continue;
        case '6':
            _0x5b0a59['appendChild'](_0x25fa1f);
            continue;
        case '7':
            _0x35d4cd[_0xe07a('0x25')](_0x5b0a59);
            continue;
        case '8':
            _0x35d4cd[_0xe07a('0x25')](_0x2fc713);
            continue;
        case '9':
            _0x5b0a59[_0xe07a('0x21')][_0xe07a('0x22')](_0x51fb00[_0xe07a('0x2b')]);
            continue;
        case '10':
            _0x55ce66[_0xe07a('0x10')] = _0x58e221[_0xe07a('0x3e')](_0x58e221[_0xe07a('0x3f')]('Craft:\x20', _0x462e53) + _0xe07a('0x40'), _0x1b9ee5) + _0x58e221[_0xe07a('0x41')];
            continue;
        case '11':
            _0x5b0a59[_0xe07a('0x25')](_0xbbdeeb);
            continue;
        case '12':
            var _0x55ce66 = document[_0xe07a('0x1e')]('p');
            continue;
        case '13':
            _0x2fc713[_0xe07a('0x42')] = _0x58e221[_0xe07a('0x43')](_0x58e221[_0xe07a('0x44')], _0x51fb00['name'][_0xe07a('0x45')]()) + _0x58e221[_0xe07a('0x46')];
            continue;
        case '14':
            _0xbbdeeb[_0xe07a('0x10')] = _0x58e221[_0xe07a('0x47')] + _0x4af9df;
            continue;
        case '15':
            var _0x5b0a59 = document[_0xe07a('0x1e')](_0x58e221['ngrWn']);
            continue;
        case '16':
            var _0xbbdeeb = document['createElement']('p');
            continue;
        case '17':
            _0x5b0a59[_0xe07a('0x21')][_0xe07a('0x22')](_0x58e221[_0xe07a('0x48')]);
            continue;
        case '18':
            _0x361449['appendChild'](_0x35d4cd);
            continue;
        case '19':
            _0x5b0a59['appendChild'](_0x55ce66);
            continue;
        case '20':
            var _0x35d4cd = document[_0xe07a('0x1e')](_0x58e221['ngrWn']);
            continue;
        }
        break;
    }
}
function getOutputRow(_0x1d395a) {
    var _0x28ef78 = {
        'mvwLZ': function (_0x10a0e5, _0x3637bd) {
            return _0x10a0e5 === _0x3637bd;
        },
        'ekIcr': _0xe07a('0x49'),
        'JoMzU': function (_0x316e57, _0x41dc87) {
            return _0x316e57 - _0x41dc87;
        },
        'rsBLg': function (_0x5e90ec, _0x210ed7) {
            return _0x5e90ec - _0x210ed7;
        }
    };
    var _0x18367c = _0x1d395a % outputRows;
    if (_0x28ef78['mvwLZ'](_0x18367c, 0x0)) {
        var _0x2b7267 = document['createElement'](_0xe07a('0x4a'));
        _0x2b7267['classList'][_0xe07a('0x22')](_0x28ef78[_0xe07a('0x4b')]);
        _0x2b7267['id'] = _0x28ef78['JoMzU'](_0x1d395a, _0x18367c);
        return _0x2b7267;
    }
    return document[_0xe07a('0x0')](_0x28ef78[_0xe07a('0x4c')](_0x1d395a, _0x18367c));
}
function clickUp(_0x4d678e) {
    var _0x115841 = {
        'ehEwm': function (_0xf50177, _0x21acc4) {
            return _0xf50177 + _0x21acc4;
        },
        'YfQXt': function (_0x5a084a, _0x6d0eff) {
            return _0x5a084a === _0x6d0eff;
        },
        'CvBCU': function (_0x14547f, _0x4b1be6) {
            return _0x14547f(_0x4b1be6);
        }
    };
    var _0x1fa869 = document[_0xe07a('0x0')](_0x115841[_0xe07a('0x4d')](_0x4d678e, _0xe07a('0xe')));
    if (_0x115841[_0xe07a('0x4e')](_0x1fa869, null)) {
        return;
    }
    var _0x391e63 = _0x115841[_0xe07a('0x4f')](parseInt, _0x1fa869['innerText']);
    _0x1fa869[_0xe07a('0x10')] = ++_0x391e63;
}
function clickDown(_0x3eeb3b) {
    var _0x438dcb = {
        'UIkei': _0xe07a('0x50'),
        'agtwX': function (_0x1540ae, _0x4929b1) {
            return _0x1540ae <= _0x4929b1;
        },
        'CiAVL': function (_0xe68764, _0x5a85b5) {
            return _0xe68764 === _0x5a85b5;
        },
        'YzvqZ': function (_0x39169e, _0x10658e) {
            return _0x39169e + _0x10658e;
        },
        'YOPYP': _0xe07a('0xe'),
        'bVkCq': function (_0x5a64b1, _0x2e1e81) {
            return _0x5a64b1(_0x2e1e81);
        }
    };
    var _0xe11ebc = _0x438dcb['UIkei'][_0xe07a('0x3b')]('|'), _0x15cf35 = 0x0;
    while (!![]) {
        switch (_0xe11ebc[_0x15cf35++]) {
        case '0':
            if (_0x438dcb['agtwX'](_0x45e49a, 0x0)) {
                _0x29a83b[_0xe07a('0x10')] = 0x0;
            }
            continue;
        case '1':
            if (_0x438dcb[_0xe07a('0x51')](_0x29a83b, null)) {
                return;
            }
            continue;
        case '2':
            var _0x29a83b = document['getElementById'](_0x438dcb['YzvqZ'](_0x3eeb3b, _0x438dcb['YOPYP']));
            continue;
        case '3':
            var _0x45e49a = _0x438dcb[_0xe07a('0x52')](parseInt, _0x29a83b[_0xe07a('0x10')]);
            continue;
        case '4':
            _0x29a83b[_0xe07a('0x10')] = --_0x45e49a;
            continue;
        }
        break;
    }
}