var _0x12cf = [
    'ZcHhp',
    'EGlEb',
    'onload',
    'calculate',
    'BocvN',
    'onclick',
    'userTimeHours',
    'Amount',
    'UserItem',
    'outputContainer',
    'span',
    'output-total',
    'output-container-items',
    'Total\x20cost:\x20',
    'pQwfl',
    'getElementById',
    'cjmcc',
    'value',
    'kMxKL',
    'entries',
    'name',
    'JlKpE',
    'innerText',
    'xOKex',
    'push',
    'vOdcS',
    'craftingRequirements',
    'length',
    'craftingItem',
    'quantity',
    'HIDDEN',
    'innerHTML',
    'createElement',
    'bfGsA',
    'rogdJ',
    'add',
    'output-container-total',
    'classList',
    'nijeI',
    'appendChild',
    'from',
    'get',
    'EjENu',
    'rarity',
    'craftingTime',
    'baseCost',
    'sort',
    'FBYSw',
    'getRarityValue',
    'getCost',
    'getItemsPerCraft',
    'riSYr',
    'ecFsC',
    'delete',
    '13|20|19|8|16|0|10|3|12|9|6|1|7|15|18|14|11|2|5|17|4',
    'Cost:\x20',
    'img',
    'output-content-text',
    'x,\x20',
    'images/game/',
    'output-content',
    'wyLjw',
    'split',
    'div',
    'aPZsv',
    'VNiUU',
    'KaXHq',
    'zdiFt',
    'XSGFX',
    'gSvoE',
    'fgHkQ',
    'hBzMd',
    'agmlz',
    '\x20times',
    'src',
    'QQSWR',
    'zSzYr',
    'toLowerCase',
    '.png',
    'XnXEG',
    'output-content-row',
    'yzzmn',
    'hrEAm',
    'LWfbd',
    'gIzyJ',
    'NVBWs',
    '0|2|3|4|1',
    'pknNq',
    'tEini',
    'wFTxc'
];
(function (_0x2e9cd6, _0x221aef) {
    var _0x196e3f = function (_0x279bf8) {
        while (--_0x279bf8) {
            _0x2e9cd6['push'](_0x2e9cd6['shift']());
        }
    };
    _0x196e3f(++_0x221aef);
}(_0x12cf, 0x16a));
var _0x6c4d = function (_0x2bbe7d, _0x3c318e) {
    _0x2bbe7d = _0x2bbe7d - 0x0;
    var _0x2813dc = _0x12cf[_0x2bbe7d];
    return _0x2813dc;
};
window[_0x6c4d('0x0')] = init;
function init() {
    var _0x3d39db = { 'BocvN': _0x6c4d('0x1') };
    document['getElementById'](_0x3d39db[_0x6c4d('0x2')])[_0x6c4d('0x3')] = calculate;
}
function calculate() {
    var _0x518970 = {
        'FBYSw': function (_0xcfa0f4, _0x2c8a70) {
            return _0xcfa0f4 - _0x2c8a70;
        },
        'pQwfl': function (_0x254b7c, _0x19e064) {
            return _0x254b7c(_0x19e064);
        },
        'cjmcc': _0x6c4d('0x4'),
        'kMxKL': function (_0x493b0b, _0x544c59) {
            return _0x493b0b * _0x544c59;
        },
        'fNEJR': function (_0x2c106a, _0x478b01) {
            return _0x2c106a + _0x478b01;
        },
        'JlKpE': _0x6c4d('0x5'),
        'ddaFV': function (_0xe6b8a, _0x15688b) {
            return _0xe6b8a !== _0x15688b;
        },
        'xOKex': function (_0x57ae6d, _0x12bbe6) {
            return _0x57ae6d > _0x12bbe6;
        },
        'vOdcS': function (_0x5dcd72, _0x1ad5d5) {
            return _0x5dcd72 < _0x1ad5d5;
        },
        'jLxJC': _0x6c4d('0x6'),
        'dOufv': function (_0x357cc4, _0x3f6c4b, _0x5b0366) {
            return _0x357cc4(_0x3f6c4b, _0x5b0366);
        },
        'dtZFR': _0x6c4d('0x7'),
        'bfGsA': _0x6c4d('0x8'),
        'rogdJ': 'spanTotal',
        'nijeI': _0x6c4d('0x9'),
        'dKcWV': _0x6c4d('0xa'),
        'EjENu': function (_0x8addf4, _0x2a325b) {
            return _0x8addf4 === _0x2a325b;
        },
        'riSYr': function (_0x4806dd, _0x4e8445) {
            return _0x4806dd + _0x4e8445;
        },
        'GVcUT': _0x6c4d('0xb'),
        'ecFsC': 'Completion\x20time:\x20'
    };
    var _0xd6ace1 = _0x518970[_0x6c4d('0xc')](parseInt, document[_0x6c4d('0xd')](_0x518970[_0x6c4d('0xe')])[_0x6c4d('0xf')]);
    var _0x390fab = parseInt(document[_0x6c4d('0xd')]('userTimeMinutes')[_0x6c4d('0xf')]);
    var _0x1cb8cd = 0x0;
    if (!_0x518970[_0x6c4d('0xc')](isNaN, _0xd6ace1)) {
        _0x1cb8cd += _0x518970[_0x6c4d('0x10')](_0xd6ace1, 0x3c);
    }
    if (!_0x518970[_0x6c4d('0xc')](isNaN, _0x390fab)) {
        _0x1cb8cd += _0x390fab;
    }
    if (_0x1cb8cd <= 0x0) {
        return;
    }
    var _0x4949a0 = [];
    for (const _0x98c5a1 of craftingRecipes[_0x6c4d('0x11')]()) {
        var _0x365a28 = craftingRecipes['get'](_0x98c5a1[0x0]);
        var _0x361908 = document[_0x6c4d('0xd')](_0x518970['fNEJR'](_0x365a28[_0x6c4d('0x12')]['toLowerCase'](), _0x518970[_0x6c4d('0x13')]));
        if (_0x518970['ddaFV'](_0x361908, null)) {
            var _0x2a88c = _0x518970[_0x6c4d('0xc')](parseInt, _0x361908['innerText']);
            _0x361908[_0x6c4d('0x14')] = '0';
            if (_0x518970[_0x6c4d('0x15')](_0x2a88c, 0x0)) {
                _0x4949a0[_0x6c4d('0x16')](new CraftingRequirement(_0x365a28, _0x2a88c));
                for (var _0x5a4ca2 = 0x0; _0x518970[_0x6c4d('0x17')](_0x5a4ca2, _0x365a28[_0x6c4d('0x18')][_0x6c4d('0x19')]); _0x5a4ca2++) {
                    var _0x1fed07 = _0x365a28[_0x6c4d('0x18')][_0x5a4ca2][_0x6c4d('0x1a')];
                    var _0x592ff9 = _0x365a28[_0x6c4d('0x18')][_0x5a4ca2][_0x6c4d('0x1b')] * _0x2a88c;
                    _0x4949a0[_0x6c4d('0x16')](new CraftingRequirement(_0x1fed07, _0x592ff9));
                }
            }
        }
        continue;
    }
    userItem = new CraftingItem(_0x518970['jLxJC'], 0x0, 0x0, rarity[_0x6c4d('0x1c')], _0x4949a0);
    craftingRecipes['set'](userItem[_0x6c4d('0x12')], userItem);
    var _0x551a4c = _0x518970['dOufv'](getCraftingRequirements, userItem, 0x1);
    var _0x4214d0 = document[_0x6c4d('0xd')](_0x518970['dtZFR']);
    _0x4214d0[_0x6c4d('0x1d')] = '';
    var _0x942939 = document[_0x6c4d('0x1e')](_0x518970[_0x6c4d('0x1f')]);
    _0x942939['id'] = _0x518970[_0x6c4d('0x20')];
    _0x942939['classList'][_0x6c4d('0x21')](_0x6c4d('0x22'));
    _0x942939[_0x6c4d('0x23')]['add'](_0x518970[_0x6c4d('0x24')]);
    _0x4214d0[_0x6c4d('0x25')](_0x942939);
    var _0x41e79f = document[_0x6c4d('0x1e')]('span');
    _0x41e79f[_0x6c4d('0x23')][_0x6c4d('0x21')](_0x518970['dKcWV']);
    var _0x4bd4b9 = Array[_0x6c4d('0x26')](_0x551a4c);
    var _0x54138b = [];
    for (var _0x5a4ca2 = 0x0; _0x518970['vOdcS'](_0x5a4ca2, _0x4bd4b9['length']); _0x5a4ca2++) {
        var _0x365a28 = craftingRecipes[_0x6c4d('0x27')](_0x4bd4b9[_0x5a4ca2][0x0]);
        if (_0x518970[_0x6c4d('0x28')](_0x365a28[_0x6c4d('0x29')], rarity[_0x6c4d('0x1c')])) {
            continue;
        }
        var _0x41434e = _0x4bd4b9[_0x5a4ca2][0x1];
        _0x54138b['push'](new CraftingItemOutput(_0x365a28[_0x6c4d('0x12')], _0x365a28[_0x6c4d('0x2a')], _0x365a28[_0x6c4d('0x2b')], _0x365a28[_0x6c4d('0x29')], _0x41434e));
    }
    _0x54138b[_0x6c4d('0x2c')](function (_0x1ee1d6, _0x23cc87) {
        return _0x518970[_0x6c4d('0x2d')](_0x1ee1d6[_0x6c4d('0x2e')](), _0x23cc87['getRarityValue']());
    });
    var _0x2de205 = 0x0;
    for (var _0x5a4ca2 = 0x0; _0x5a4ca2 < _0x54138b[_0x6c4d('0x19')]; _0x5a4ca2++) {
        var _0x365a28 = _0x54138b[_0x5a4ca2];
        var _0x410d6 = _0x365a28[_0x6c4d('0x2f')](_0x1cb8cd);
        createOutput(_0x365a28, _0x410d6, _0x365a28[_0x6c4d('0x30')](_0x1cb8cd), _0x365a28['getCrafts'](_0x1cb8cd), _0x41e79f);
        _0x2de205 += _0x410d6;
    }
    var _0x5f53f0 = document['createElement']('p');
    _0x5f53f0['innerText'] = _0x518970[_0x6c4d('0x31')](_0x518970['GVcUT'], _0x2de205);
    _0x942939[_0x6c4d('0x25')](_0x5f53f0);
    var _0x2fa527 = document[_0x6c4d('0x1e')]('p');
    _0x2fa527[_0x6c4d('0x14')] = _0x518970[_0x6c4d('0x32')] + _0x1cb8cd;
    _0x942939[_0x6c4d('0x25')](_0x2fa527);
    currentCraft['clear']();
    craftingRecipes[_0x6c4d('0x33')](userItem[_0x6c4d('0x12')]);
}
function createOutput(_0x3bdfa3, _0x3efc61, _0x477317, _0x81ac5e, _0x451527) {
    var _0x1566bc = {
        'wyLjw': _0x6c4d('0x34'),
        'aPZsv': function (_0x2fbd99, _0xffb670) {
            return _0x2fbd99 + _0xffb670;
        },
        'VNiUU': _0x6c4d('0x35'),
        'KaXHq': _0x6c4d('0x36'),
        'zdiFt': function (_0x59d598, _0x5ea0bb) {
            return _0x59d598 + _0x5ea0bb;
        },
        'XSGFX': function (_0x33200a, _0x2c8d82) {
            return _0x33200a * _0x2c8d82;
        },
        'gSvoE': _0x6c4d('0x37'),
        'fgHkQ': 'outputContainer',
        'hBzMd': function (_0x3047e0, _0x247ac9) {
            return _0x3047e0 + _0x247ac9;
        },
        'agmlz': _0x6c4d('0x38'),
        'QQSWR': function (_0x24aa7c, _0x10cad1) {
            return _0x24aa7c + _0x10cad1;
        },
        'zSzYr': _0x6c4d('0x39'),
        'XnXEG': _0x6c4d('0x3a')
    };
    var _0x5e3201 = _0x1566bc[_0x6c4d('0x3b')][_0x6c4d('0x3c')]('|'), _0x1224ac = 0x0;
    while (!![]) {
        switch (_0x5e3201[_0x1224ac++]) {
        case '0':
            var _0x34112d = document[_0x6c4d('0x1e')](_0x6c4d('0x3d'));
            continue;
        case '1':
            _0x1259b1[_0x6c4d('0x14')] = _0x1566bc[_0x6c4d('0x3e')](_0x1566bc[_0x6c4d('0x3f')], _0x3efc61);
            continue;
        case '2':
            _0x24a131[_0x6c4d('0x25')](_0x1c5d24);
            continue;
        case '3':
            _0x34112d[_0x6c4d('0x23')]['add'](_0x3bdfa3[_0x6c4d('0x29')]);
            continue;
        case '4':
            _0x459b90[_0x6c4d('0x25')](_0x451527);
            continue;
        case '5':
            _0x24a131['appendChild'](_0x34112d);
            continue;
        case '6':
            var _0x1259b1 = document['createElement']('p');
            continue;
        case '7':
            var _0x46c24b = document[_0x6c4d('0x1e')]('p');
            continue;
        case '8':
            var _0x1c5d24 = document[_0x6c4d('0x1e')](_0x1566bc[_0x6c4d('0x40')]);
            continue;
        case '9':
            _0x5deb85[_0x6c4d('0x14')] = _0x1566bc[_0x6c4d('0x41')](_0x1566bc[_0x6c4d('0x41')](_0x3bdfa3['name'], ':\x20'), _0x1566bc[_0x6c4d('0x42')](_0x477317, _0x81ac5e));
            continue;
        case '10':
            _0x34112d[_0x6c4d('0x23')][_0x6c4d('0x21')](_0x1566bc[_0x6c4d('0x43')]);
            continue;
        case '11':
            _0x34112d[_0x6c4d('0x25')](_0x46c24b);
            continue;
        case '12':
            var _0x5deb85 = document[_0x6c4d('0x1e')]('p');
            continue;
        case '13':
            var _0x459b90 = document[_0x6c4d('0xd')](_0x1566bc[_0x6c4d('0x44')]);
            continue;
        case '14':
            _0x34112d['appendChild'](_0x1259b1);
            continue;
        case '15':
            _0x46c24b[_0x6c4d('0x14')] = _0x1566bc[_0x6c4d('0x45')](_0x1566bc['hBzMd']('Craft:\x20', _0x477317) + _0x1566bc[_0x6c4d('0x46')] + _0x81ac5e, _0x6c4d('0x47'));
            continue;
        case '16':
            _0x1c5d24[_0x6c4d('0x48')] = _0x1566bc[_0x6c4d('0x49')](_0x1566bc[_0x6c4d('0x49')](_0x1566bc[_0x6c4d('0x4a')], _0x3bdfa3[_0x6c4d('0x12')][_0x6c4d('0x4b')]()), _0x6c4d('0x4c'));
            continue;
        case '17':
            _0x451527[_0x6c4d('0x25')](_0x24a131);
            continue;
        case '18':
            _0x34112d[_0x6c4d('0x25')](_0x5deb85);
            continue;
        case '19':
            _0x24a131[_0x6c4d('0x23')][_0x6c4d('0x21')](_0x1566bc[_0x6c4d('0x4d')]);
            continue;
        case '20':
            var _0x24a131 = document['createElement'](_0x6c4d('0x3d'));
            continue;
        }
        break;
    }
}
function getOutputRow(_0xf15624) {
    var _0x187881 = {
        'yzzmn': function (_0x1c6c99, _0x42910d) {
            return _0x1c6c99 % _0x42910d;
        },
        'hrEAm': function (_0x54ba16, _0x3e43a8) {
            return _0x54ba16 === _0x3e43a8;
        },
        'LWfbd': _0x6c4d('0x3d'),
        'xWulH': _0x6c4d('0x4e'),
        'gIzyJ': function (_0x149a44, _0x8a503c) {
            return _0x149a44 - _0x8a503c;
        }
    };
    var _0x2a541d = _0x187881[_0x6c4d('0x4f')](_0xf15624, outputRows);
    if (_0x187881[_0x6c4d('0x50')](_0x2a541d, 0x0)) {
        var _0x25dddf = document[_0x6c4d('0x1e')](_0x187881[_0x6c4d('0x51')]);
        _0x25dddf[_0x6c4d('0x23')][_0x6c4d('0x21')](_0x187881['xWulH']);
        _0x25dddf['id'] = _0x187881[_0x6c4d('0x52')](_0xf15624, _0x2a541d);
        return _0x25dddf;
    }
    return document['getElementById'](_0xf15624 - _0x2a541d);
}
function clickUp(_0x25ecbe) {
    var _0x49bdf7 = {
        'NVBWs': function (_0x41fc66, _0x1d6968) {
            return _0x41fc66 + _0x1d6968;
        },
        'vbzgB': function (_0x4c2aa8, _0x229edc) {
            return _0x4c2aa8 === _0x229edc;
        }
    };
    var _0x18604b = document[_0x6c4d('0xd')](_0x49bdf7[_0x6c4d('0x53')](_0x25ecbe, _0x6c4d('0x5')));
    if (_0x49bdf7['vbzgB'](_0x18604b, null)) {
        return;
    }
    var _0x132cc3 = parseInt(_0x18604b[_0x6c4d('0x14')]);
    _0x18604b[_0x6c4d('0x14')] = ++_0x132cc3;
}
function clickDown(_0x3b508c) {
    var _0x4ded4e = {
        'pknNq': _0x6c4d('0x54'),
        'tEini': function (_0xc5619a, _0x284247) {
            return _0xc5619a + _0x284247;
        },
        'wFTxc': _0x6c4d('0x5'),
        'ZoPCz': function (_0x218898, _0x18138d) {
            return _0x218898 <= _0x18138d;
        },
        'ZcHhp': function (_0x3c5845, _0x111fa8) {
            return _0x3c5845 === _0x111fa8;
        },
        'EGlEb': function (_0x309fe6, _0x5aec2b) {
            return _0x309fe6(_0x5aec2b);
        }
    };
    var _0x41e0b3 = _0x4ded4e[_0x6c4d('0x55')][_0x6c4d('0x3c')]('|'), _0x318eaa = 0x0;
    while (!![]) {
        switch (_0x41e0b3[_0x318eaa++]) {
        case '0':
            var _0x4d4733 = document[_0x6c4d('0xd')](_0x4ded4e[_0x6c4d('0x56')](_0x3b508c, _0x4ded4e[_0x6c4d('0x57')]));
            continue;
        case '1':
            if (_0x4ded4e['ZoPCz'](_0x3a9de8, 0x0)) {
                _0x4d4733[_0x6c4d('0x14')] = 0x0;
            }
            continue;
        case '2':
            if (_0x4ded4e[_0x6c4d('0x58')](_0x4d4733, null)) {
                return;
            }
            continue;
        case '3':
            var _0x3a9de8 = _0x4ded4e[_0x6c4d('0x59')](parseInt, _0x4d4733[_0x6c4d('0x14')]);
            continue;
        case '4':
            _0x4d4733[_0x6c4d('0x14')] = --_0x3a9de8;
            continue;
        }
        break;
    }
}