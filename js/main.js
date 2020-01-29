var _0x51b9 = [
    'uJlCi',
    'clear',
    'delete',
    '0|2|1|4|3',
    'Lmffy',
    'getElementById',
    'Amount',
    'zAifw',
    'ramic',
    'jAVRt',
    'sZZax',
    '0|3|1|2|4',
    'nBMlb',
    'TusUh',
    'dWSrI',
    'zWovv',
    'iJBVc',
    'lQqnz',
    'lAdjY',
    'VkSWn',
    'onload',
    'mSKmk',
    '==============================',
    'userTime:\x20',
    '\x09totalCost:\x20',
    'entries',
    'get',
    'toLowerCase',
    'ULXAN',
    'innerText',
    'length',
    'craftingRequirements',
    'craftingItem',
    'DgtaH',
    'quantity',
    'push',
    'UserItem',
    'set',
    'log',
    'getCost'
];
(function (_0x3c6fa1, _0x33f9d8) {
    var _0x365df0 = function (_0x1a7f6b) {
        while (--_0x1a7f6b) {
            _0x3c6fa1['push'](_0x3c6fa1['shift']());
        }
    };
    _0x365df0(++_0x33f9d8);
}(_0x51b9, 0xb4));
var _0x1c74 = function (_0x5d2ec5, _0x405f07) {
    _0x5d2ec5 = _0x5d2ec5 - 0x0;
    var _0xed72c9 = _0x51b9[_0x5d2ec5];
    return _0xed72c9;
};
window[_0x1c74('0x0')] = init;
var userTime = 0x3c * 0x30 * 0x5;
function init() {
    var _0x2608c8 = { 'mSKmk': 'calculate' };
    document['getElementById'](_0x2608c8[_0x1c74('0x1')])['onclick'] = calculate;
}
function calculate() {
    var _0x2ae797 = {
        'ISDEf': function (_0x1d75c0, _0x1abbe9) {
            return _0x1d75c0 + _0x1abbe9;
        },
        'bEwri': 'Amount',
        'ULXAN': function (_0x4cfdf4, _0x111e5b) {
            return _0x4cfdf4 !== _0x111e5b;
        },
        'hHDhT': function (_0x5ae175, _0x1e2d03) {
            return _0x5ae175(_0x1e2d03);
        },
        'ldNHU': function (_0x54533b, _0x392c51) {
            return _0x54533b < _0x392c51;
        },
        'DgtaH': function (_0x265432, _0xd27c3f) {
            return _0x265432 * _0xd27c3f;
        },
        'pODVc': function (_0x46c37b, _0x582f9b, _0x564ecd) {
            return _0x46c37b(_0x582f9b, _0x564ecd);
        },
        'SNcbT': _0x1c74('0x2'),
        'uJlCi': function (_0x2e7e42, _0x4dfc04) {
            return _0x2e7e42 + _0x4dfc04;
        },
        'aPTcs': _0x1c74('0x3'),
        'uiIRw': _0x1c74('0x4')
    };
    var _0x4b7db1 = [];
    for (const _0x4a327a of craftingRecipes[_0x1c74('0x5')]()) {
        var _0x36832f = craftingRecipes[_0x1c74('0x6')](_0x4a327a[0x0]);
        var _0x4b8f35 = document['getElementById'](_0x2ae797['ISDEf'](_0x36832f['name'][_0x1c74('0x7')](), _0x2ae797['bEwri']));
        if (_0x2ae797[_0x1c74('0x8')](_0x4b8f35, null)) {
            var _0x29a462 = _0x2ae797['hHDhT'](parseInt, _0x4b8f35[_0x1c74('0x9')]);
            if (_0x29a462 > 0x0) {
                _0x4b7db1['push'](new CraftingRequirement(_0x36832f, _0x29a462));
                for (var _0x9d59ea = 0x0; _0x2ae797['ldNHU'](_0x9d59ea, _0x36832f['craftingRequirements'][_0x1c74('0xa')]); _0x9d59ea++) {
                    var _0x49f991 = _0x36832f[_0x1c74('0xb')][_0x9d59ea][_0x1c74('0xc')];
                    var _0x2ab767 = _0x2ae797[_0x1c74('0xd')](_0x36832f[_0x1c74('0xb')][_0x9d59ea][_0x1c74('0xe')], _0x29a462);
                    _0x4b7db1[_0x1c74('0xf')](new CraftingRequirement(_0x49f991, _0x2ab767));
                }
            }
        }
        continue;
    }
    userItem = new CraftingItem(_0x1c74('0x10'), 0x0, 0x0, _0x4b7db1);
    craftingRecipes[_0x1c74('0x11')](userItem['name'], userItem);
    var _0x5d23ed = _0x2ae797['pODVc'](getCraftingRequirements, userItem, 0x1);
    var _0x4c83c5 = 0x0;
    console[_0x1c74('0x12')](_0x5d23ed);
    for (const _0x3eafdc of _0x5d23ed[_0x1c74('0x5')]()) {
        var _0x36832f = craftingRecipes[_0x1c74('0x6')](_0x3eafdc[0x0]);
        _0x4c83c5 += _0x36832f[_0x1c74('0x13')](userTime, _0x3eafdc[0x1]);
    }
    console[_0x1c74('0x12')](_0x2ae797['SNcbT']);
    console[_0x1c74('0x12')](_0x2ae797['ISDEf'](_0x2ae797['uJlCi'](_0x2ae797[_0x1c74('0x14')](_0x2ae797['aPTcs'], userTime), _0x2ae797['uiIRw']), _0x4c83c5));
    currentCraft[_0x1c74('0x15')]();
    craftingRecipes[_0x1c74('0x16')](userItem['name']);
}
function clickUp(_0x5efcbd) {
    var _0x2850b8 = {
        'Lmffy': _0x1c74('0x17'),
        'zAifw': function (_0x512484, _0x59a7eb) {
            return _0x512484(_0x59a7eb);
        },
        'ramic': function (_0x3078d5, _0x4ab389) {
            return _0x3078d5 === _0x4ab389;
        },
        'jAVRt': function (_0xcbe425, _0x1cc27a) {
            return _0xcbe425 + _0x1cc27a;
        },
        'sZZax': 'clickUp:\x20'
    };
    var _0x179ea7 = _0x2850b8[_0x1c74('0x18')]['split']('|'), _0x1856de = 0x0;
    while (!![]) {
        switch (_0x179ea7[_0x1856de++]) {
        case '0':
            var _0x261ae4 = document[_0x1c74('0x19')](_0x5efcbd + _0x1c74('0x1a'));
            continue;
        case '1':
            var _0x1f3c83 = _0x2850b8[_0x1c74('0x1b')](parseInt, _0x261ae4['innerText']);
            continue;
        case '2':
            if (_0x2850b8[_0x1c74('0x1c')](_0x261ae4, null)) {
                return;
            }
            continue;
        case '3':
            console[_0x1c74('0x12')](_0x2850b8[_0x1c74('0x1d')](_0x2850b8[_0x1c74('0x1e')], _0x5efcbd));
            continue;
        case '4':
            _0x261ae4[_0x1c74('0x9')] = ++_0x1f3c83;
            continue;
        }
        break;
    }
}
function clickDown(_0x5c0722) {
    var _0x55f89b = {
        'nBMlb': 'Amount',
        'TusUh': function (_0x204816, _0x520236) {
            return _0x204816(_0x520236);
        },
        'dWSrI': function (_0x1ecace, _0x1219a3) {
            return _0x1ecace === _0x1219a3;
        },
        'zWovv': function (_0x4e818d, _0x4c7ac8) {
            return _0x4e818d <= _0x4c7ac8;
        }
    };
    var _0x107dc0 = _0x1c74('0x1f')['split']('|'), _0x1b275 = 0x0;
    while (!![]) {
        switch (_0x107dc0[_0x1b275++]) {
        case '0':
            var _0x546bfb = document[_0x1c74('0x19')](_0x5c0722 + _0x55f89b[_0x1c74('0x20')]);
            continue;
        case '1':
            var _0xeecd69 = _0x55f89b[_0x1c74('0x21')](parseInt, _0x546bfb[_0x1c74('0x9')]);
            continue;
        case '2':
            _0x546bfb[_0x1c74('0x9')] = --_0xeecd69;
            continue;
        case '3':
            if (_0x55f89b[_0x1c74('0x22')](_0x546bfb, null)) {
                return;
            }
            continue;
        case '4':
            if (_0x55f89b[_0x1c74('0x23')](_0xeecd69, 0x0)) {
                _0x546bfb[_0x1c74('0x9')] = 0x0;
            }
            continue;
        }
        break;
    }
}
function calculateCraft(_0x3797db, _0x3a1d2f) {
    var _0x484e59 = {
        'iJBVc': function (_0x4db696, _0x2b67e5, _0x419acd) {
            return _0x4db696(_0x2b67e5, _0x419acd);
        },
        'lQqnz': _0x1c74('0x2'),
        'lAdjY': function (_0x5f2a89, _0x3c0365) {
            return _0x5f2a89 + _0x3c0365;
        },
        'VkSWn': _0x1c74('0x4')
    };
    var _0xa8ebb7 = _0x484e59[_0x1c74('0x24')](getCraftingRequirements, _0x3797db, _0x3a1d2f);
    var _0x438bc2 = 0x0;
    console[_0x1c74('0x12')](_0xa8ebb7);
    for (const _0x5557ce of _0xa8ebb7[_0x1c74('0x5')]()) {
        var _0x3797db = craftingRecipes[_0x1c74('0x6')](_0x5557ce[0x0]);
        _0x438bc2 += _0x3797db[_0x1c74('0x13')](userTime, _0x5557ce[0x1]);
    }
    console[_0x1c74('0x12')](_0x484e59[_0x1c74('0x25')]);
    console[_0x1c74('0x12')](_0x484e59['lAdjY'](_0x484e59[_0x1c74('0x26')](_0x484e59[_0x1c74('0x26')](_0x1c74('0x3'), userTime), _0x484e59[_0x1c74('0x27')]), _0x438bc2));
    currentCraft[_0x1c74('0x15')]();
}