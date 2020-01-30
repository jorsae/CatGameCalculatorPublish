var _0x3620 = [
    'getCost',
    'CXgOP',
    'clear',
    'delete',
    '10|5|2|15|14|18|7|6|3|9|13|4|20|17|12|11|21|8|1|19|0|16',
    'rare',
    'output-content-text',
    '\x20times',
    'img',
    'output-content',
    'images/game/',
    '.png',
    'Cost:\x20',
    'yOlLO',
    'appendChild',
    'createElement',
    'jhfuo',
    'classList',
    'add',
    'VhqoF',
    'aHsjw',
    'div',
    'Bgbwv',
    'VVpmf',
    'qQdSc',
    'CTrEm',
    'x,\x20',
    'Tlotr',
    'LAwoO',
    'mbjAh',
    'src',
    'ZvxpJ',
    'iFWLL',
    'output-content-row',
    'FhJXo',
    'xIlLL',
    'zghHL',
    'jVoBe',
    'MwXNh',
    'VpudA',
    '0|2|3|1|4',
    'ZZHLb',
    'split',
    'bOjsk',
    'sRhAI',
    'onload',
    'calculate',
    'getElementById',
    'onclick',
    'userTime',
    'Amount',
    'UserItem',
    'aaQgx',
    'WwXbC',
    'value',
    'fdDVK',
    'get',
    'CHmWv',
    'toLowerCase',
    'zwQHd',
    'innerText',
    'push',
    'TnUwO',
    'craftingRequirements',
    'length',
    'craftingItem',
    'quantity',
    'RYjIv',
    'set',
    'name',
    'entries'
];
(function (_0x43bdfc, _0x52e4c6) {
    var _0xb67384 = function (_0x27295a) {
        while (--_0x27295a) {
            _0x43bdfc['push'](_0x43bdfc['shift']());
        }
    };
    _0xb67384(++_0x52e4c6);
}(_0x3620, 0x1d7));
var _0x1719 = function (_0x1ab796, _0x5c03bf) {
    _0x1ab796 = _0x1ab796 - 0x0;
    var _0x331016 = _0x3620[_0x1ab796];
    return _0x331016;
};
window[_0x1719('0x0')] = init;
function init() {
    var _0x468ebe = { 'LIafy': _0x1719('0x1') };
    document[_0x1719('0x2')](_0x468ebe['LIafy'])[_0x1719('0x3')] = calculate;
}
function calculate() {
    var _0x3a13ed = {
        'aaQgx': _0x1719('0x4'),
        'WwXbC': function (_0x3ee836, _0x30e0f1) {
            return _0x3ee836(_0x30e0f1);
        },
        'fdDVK': function (_0x50c358, _0x22c04d) {
            return _0x50c358 === _0x22c04d;
        },
        'CHmWv': function (_0x2479ff, _0x56bd79) {
            return _0x2479ff + _0x56bd79;
        },
        'zwQHd': _0x1719('0x5'),
        'BCtMw': function (_0x3b4c66, _0x21b78e) {
            return _0x3b4c66 !== _0x21b78e;
        },
        'TnUwO': function (_0x1d65be, _0x49088d) {
            return _0x1d65be < _0x49088d;
        },
        'eNPaQ': function (_0x11bf97, _0x2d6500) {
            return _0x11bf97 * _0x2d6500;
        },
        'RYjIv': _0x1719('0x6'),
        'CXgOP': function (_0x5bb3c3, _0x88c751, _0x2c7193, _0x58c858, _0x1a1a9f, _0x4c751c) {
            return _0x5bb3c3(_0x88c751, _0x2c7193, _0x58c858, _0x1a1a9f, _0x4c751c);
        }
    };
    var _0x1c8545 = document[_0x1719('0x2')](_0x3a13ed[_0x1719('0x7')]);
    var _0x44eb58 = _0x3a13ed[_0x1719('0x8')](parseInt, _0x1c8545[_0x1719('0x9')]);
    if (_0x3a13ed[_0x1719('0xa')](_0x44eb58, NaN)) {
        return;
    }
    var _0x4f0e38 = [];
    for (const _0x375bf8 of craftingRecipes['entries']()) {
        var _0x761790 = craftingRecipes[_0x1719('0xb')](_0x375bf8[0x0]);
        var _0x279f10 = document[_0x1719('0x2')](_0x3a13ed[_0x1719('0xc')](_0x761790['name'][_0x1719('0xd')](), _0x3a13ed[_0x1719('0xe')]));
        if (_0x3a13ed['BCtMw'](_0x279f10, null)) {
            var _0x3ca65f = _0x3a13ed[_0x1719('0x8')](parseInt, _0x279f10[_0x1719('0xf')]);
            if (_0x3ca65f > 0x0) {
                _0x4f0e38[_0x1719('0x10')](new CraftingRequirement(_0x761790, _0x3ca65f));
                for (var _0x2099e0 = 0x0; _0x3a13ed[_0x1719('0x11')](_0x2099e0, _0x761790[_0x1719('0x12')][_0x1719('0x13')]); _0x2099e0++) {
                    var _0x441cd1 = _0x761790[_0x1719('0x12')][_0x2099e0][_0x1719('0x14')];
                    var _0x5caf66 = _0x3a13ed['eNPaQ'](_0x761790[_0x1719('0x12')][_0x2099e0][_0x1719('0x15')], _0x3ca65f);
                    _0x4f0e38[_0x1719('0x10')](new CraftingRequirement(_0x441cd1, _0x5caf66));
                }
            }
        }
        continue;
    }
    userItem = new CraftingItem(_0x3a13ed[_0x1719('0x16')], 0x0, 0x0, _0x4f0e38);
    craftingRecipes[_0x1719('0x17')](userItem[_0x1719('0x18')], userItem);
    var _0x451b04 = getCraftingRequirements(userItem, 0x1);
    var _0x1ed849 = 0x0;
    var _0x1c9306 = 0x0;
    for (const _0x4e4d2d of _0x451b04[_0x1719('0x19')]()) {
        var _0x761790 = craftingRecipes[_0x1719('0xb')](_0x4e4d2d[0x0]);
        if (_0x761790[_0x1719('0x18')] === _0x3a13ed[_0x1719('0x16')]) {
            continue;
        }
        var _0x4e28b5 = _0x4e4d2d[0x1];
        var _0xd5963d = _0x761790[_0x1719('0x1a')](_0x44eb58, _0x4e28b5);
        var _0x4949be = _0xd5963d[0x0];
        var _0x5c6061 = _0xd5963d[0x1];
        var _0x27aa45 = _0xd5963d[0x2];
        _0x3a13ed[_0x1719('0x1b')](createOutput, _0x761790, _0x4949be, _0x5c6061, _0x27aa45, _0x1ed849);
        _0x1c9306 += _0x4949be;
        _0x1ed849++;
    }
    currentCraft[_0x1719('0x1c')]();
    craftingRecipes[_0x1719('0x1d')](userItem[_0x1719('0x18')]);
}
function createOutput(_0x268c39, _0x31be96, _0xf28647, _0x17f246, _0x312f6d) {
    var _0x33f388 = {
        'yOlLO': _0x1719('0x1e'),
        'jhfuo': 'div',
        'VhqoF': _0x1719('0x1f'),
        'aHsjw': _0x1719('0x20'),
        'Bgbwv': 'outputContainer',
        'VVpmf': function (_0x19d251, _0x2b5cb8) {
            return _0x19d251 + _0x2b5cb8;
        },
        'qQdSc': function (_0x274088, _0x4053eb) {
            return _0x274088 + _0x4053eb;
        },
        'CTrEm': 'Craft:\x20',
        'Tlotr': _0x1719('0x21'),
        'LAwoO': _0x1719('0x22'),
        'mbjAh': _0x1719('0x23'),
        'FTEKI': _0x1719('0x24'),
        'FhtVl': _0x1719('0x25'),
        'ZvxpJ': function (_0x51a502, _0x1e27cf) {
            return _0x51a502 + _0x1e27cf;
        },
        'iFWLL': _0x1719('0x26')
    };
    var _0x353b3b = _0x33f388[_0x1719('0x27')]['split']('|'), _0x3b52cb = 0x0;
    while (!![]) {
        switch (_0x353b3b[_0x3b52cb++]) {
        case '0':
            _0x2b2445[_0x1719('0x28')](_0xf061c5);
            continue;
        case '1':
            _0xf061c5['appendChild'](_0x399f26);
            continue;
        case '2':
            var _0xf061c5 = document[_0x1719('0x29')](_0x33f388[_0x1719('0x2a')]);
            continue;
        case '3':
            _0x3ce2ef[_0x1719('0x2b')][_0x1719('0x2c')](_0x33f388[_0x1719('0x2d')]);
            continue;
        case '4':
            var _0x212989 = document[_0x1719('0x29')]('p');
            continue;
        case '5':
            var _0x2b2445 = getOutputRow(_0x312f6d);
            continue;
        case '6':
            _0x3ce2ef['classList'][_0x1719('0x2c')](_0x33f388[_0x1719('0x2e')]);
            continue;
        case '7':
            var _0x3ce2ef = document[_0x1719('0x29')](_0x1719('0x2f'));
            continue;
        case '8':
            _0x3ce2ef[_0x1719('0x28')](_0x3eb025);
            continue;
        case '9':
            var _0x487e42 = document[_0x1719('0x29')]('p');
            continue;
        case '10':
            var _0x29cd83 = document[_0x1719('0x2')](_0x33f388[_0x1719('0x30')]);
            continue;
        case '11':
            _0x3ce2ef[_0x1719('0x28')](_0x487e42);
            continue;
        case '12':
            _0x3eb025[_0x1719('0xf')] = _0x33f388[_0x1719('0x31')](_0x33f388[_0x1719('0x32')](_0x33f388[_0x1719('0x33')], _0xf28647), _0x1719('0x34')) + _0x17f246 + _0x33f388[_0x1719('0x35')];
            continue;
        case '13':
            _0x487e42['innerText'] = _0x33f388[_0x1719('0x32')](_0x33f388[_0x1719('0x32')](_0x268c39[_0x1719('0x18')], ':\x20'), _0xf28647 * _0x17f246);
            continue;
        case '14':
            var _0x399f26 = document[_0x1719('0x29')](_0x33f388[_0x1719('0x36')]);
            continue;
        case '15':
            _0xf061c5[_0x1719('0x2b')][_0x1719('0x2c')](_0x33f388[_0x1719('0x37')]);
            continue;
        case '16':
            _0x29cd83[_0x1719('0x28')](_0x2b2445);
            continue;
        case '17':
            var _0x3eb025 = document[_0x1719('0x29')]('p');
            continue;
        case '18':
            _0x399f26[_0x1719('0x38')] = _0x33f388[_0x1719('0x32')](_0x33f388['qQdSc'](_0x33f388['FTEKI'], _0x268c39['name'][_0x1719('0xd')]()), _0x33f388['FhtVl']);
            continue;
        case '19':
            _0xf061c5['appendChild'](_0x3ce2ef);
            continue;
        case '20':
            _0x212989[_0x1719('0xf')] = _0x33f388[_0x1719('0x39')](_0x33f388[_0x1719('0x3a')], _0x31be96);
            continue;
        case '21':
            _0x3ce2ef[_0x1719('0x28')](_0x212989);
            continue;
        }
        break;
    }
}
function getOutputRow(_0x481375) {
    var _0x34858d = {
        'raQPD': function (_0x192082, _0x20a7f9) {
            return _0x192082 % _0x20a7f9;
        },
        'FhJXo': function (_0x5e2470, _0xf02963) {
            return _0x5e2470 === _0xf02963;
        },
        'xIlLL': _0x1719('0x2f'),
        'zghHL': _0x1719('0x3b'),
        'jVoBe': function (_0x480c54, _0x309535) {
            return _0x480c54 - _0x309535;
        }
    };
    var _0x4024fc = _0x34858d['raQPD'](_0x481375, outputRows);
    if (_0x34858d[_0x1719('0x3c')](_0x4024fc, 0x0)) {
        var _0x42b4b5 = document[_0x1719('0x29')](_0x34858d[_0x1719('0x3d')]);
        _0x42b4b5[_0x1719('0x2b')][_0x1719('0x2c')](_0x34858d[_0x1719('0x3e')]);
        _0x42b4b5['id'] = _0x34858d['jVoBe'](_0x481375, _0x4024fc);
        return _0x42b4b5;
    }
    return document[_0x1719('0x2')](_0x34858d[_0x1719('0x3f')](_0x481375, _0x4024fc));
}
function clickUp(_0x250d9c) {
    var _0x5ae145 = {
        'MwXNh': _0x1719('0x5'),
        'VpudA': function (_0x23846a, _0x409460) {
            return _0x23846a === _0x409460;
        }
    };
    var _0x1856f5 = document[_0x1719('0x2')](_0x250d9c + _0x5ae145[_0x1719('0x40')]);
    if (_0x5ae145[_0x1719('0x41')](_0x1856f5, null)) {
        return;
    }
    var _0x24b40c = parseInt(_0x1856f5[_0x1719('0xf')]);
    _0x1856f5[_0x1719('0xf')] = ++_0x24b40c;
}
function clickDown(_0x4f6de1) {
    var _0x34467b = {
        'ZZHLb': _0x1719('0x42'),
        'zWyMe': 'Amount',
        'bOjsk': function (_0x48a647, _0x48ada4) {
            return _0x48a647 === _0x48ada4;
        },
        'sRhAI': function (_0xd0e76f, _0x3af6ff) {
            return _0xd0e76f <= _0x3af6ff;
        }
    };
    var _0x333b0b = _0x34467b[_0x1719('0x43')][_0x1719('0x44')]('|'), _0x2a4864 = 0x0;
    while (!![]) {
        switch (_0x333b0b[_0x2a4864++]) {
        case '0':
            var _0x102049 = document['getElementById'](_0x4f6de1 + _0x34467b['zWyMe']);
            continue;
        case '1':
            _0x102049[_0x1719('0xf')] = --_0x38e552;
            continue;
        case '2':
            if (_0x34467b[_0x1719('0x45')](_0x102049, null)) {
                return;
            }
            continue;
        case '3':
            var _0x38e552 = parseInt(_0x102049['innerText']);
            continue;
        case '4':
            if (_0x34467b[_0x1719('0x46')](_0x38e552, 0x0)) {
                _0x102049[_0x1719('0xf')] = 0x0;
            }
            continue;
        }
        break;
    }
}