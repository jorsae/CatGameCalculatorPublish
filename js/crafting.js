var _0x47a1 = [
    'eNzYf',
    'PrHZU',
    'bwJgs',
    'NayaB',
    'getCost',
    'times\x20|\x20cost:\x20',
    'ceil',
    'GztaX',
    'kJvhX',
    'FOXXS',
    'EYRSa',
    'kiEaV',
    'pow',
    'log',
    'VPXft',
    'x,\x20',
    'BbTiu',
    'Log',
    'Rock',
    'Quartz',
    'set',
    'String',
    'Wood',
    'Ribbon',
    'Metal',
    'Needles',
    'Sparkles',
    'Gold',
    'Amethyst',
    'Pendant',
    'Necklace',
    'Orb',
    'Waterstone',
    'Firestone',
    'Elementstone',
    'Artifact',
    'craftingItem',
    'quantity',
    'toString',
    'CnVIQ',
    'name',
    'qkiSA',
    'craftingTime',
    'cost',
    'craftingRequirements',
    'minutes,\x20',
    'coins.\x20Crafting\x20Requirement:\x20',
    'BaDAe',
    '\x20:\x20',
    'YpYji',
    'JJReQ'
];
(function (_0x2bd87a, _0x337283) {
    var _0x188f6a = function (_0x4251dd) {
        while (--_0x4251dd) {
            _0x2bd87a['push'](_0x2bd87a['shift']());
        }
    };
    _0x188f6a(++_0x337283);
}(_0x47a1, 0x8a));
var _0x576b = function (_0xbef094, _0x1a217e) {
    _0xbef094 = _0xbef094 - 0x0;
    var _0x4914e3 = _0x47a1[_0xbef094];
    return _0x4914e3;
};
var craftingRecipes = new Map();
class CraftingRequirement {
    constructor(_0x1d5203, _0x4785c7) {
        this[_0x576b('0x0')] = _0x1d5203;
        this[_0x576b('0x1')] = _0x4785c7;
    }
    [_0x576b('0x2')]() {
        var _0x17ce0c = {
            'CnVIQ': function (_0x5bf846, _0x5e0271) {
                return _0x5bf846 + _0x5e0271;
            },
            'qkiSA': '\x20:\x20'
        };
        _0x17ce0c[_0x576b('0x3')](_0x17ce0c[_0x576b('0x3')](this[_0x576b('0x0')][_0x576b('0x4')], _0x17ce0c[_0x576b('0x5')]), this[_0x576b('0x1')]);
    }
}
class CraftingItem {
    constructor(_0x3a8276, _0x2880b9, _0x2c2091, _0x157a5b) {
        this[_0x576b('0x4')] = _0x3a8276;
        this[_0x576b('0x6')] = _0x2880b9;
        this[_0x576b('0x7')] = _0x2c2091;
        this[_0x576b('0x8')] = _0x157a5b;
    }
    [_0x576b('0x2')]() {
        var _0x500dc9 = {
            'BaDAe': function (_0x2b591d, _0x2f9c3c) {
                return _0x2b591d + _0x2f9c3c;
            },
            'YpYji': function (_0x4a5a0e, _0x16f9b2) {
                return _0x4a5a0e + _0x16f9b2;
            },
            'OCgJi': function (_0x33631b, _0x36eea2) {
                return _0x33631b + _0x36eea2;
            },
            'JJReQ': function (_0x3edd3b, _0x4df955) {
                return _0x3edd3b + _0x4df955;
            },
            'eNzYf': function (_0x29ca7f, _0x4c6cda) {
                return _0x29ca7f + _0x4c6cda;
            },
            'PrHZU': function (_0x58102c, _0x24b8ce) {
                return _0x58102c + _0x24b8ce;
            },
            'bwJgs': function (_0x49acf6, _0x5c9c7d) {
                return _0x49acf6 + _0x5c9c7d;
            },
            'NayaB': _0x576b('0x9'),
            'vIoMR': _0x576b('0xa')
        };
        var _0x4535b3 = '';
        for (var _0x2fbc2e = 0x0; _0x2fbc2e < this[_0x576b('0x8')]['length']; _0x2fbc2e++) {
            _0x4535b3 += _0x500dc9['BaDAe'](_0x500dc9[_0x576b('0xb')](this['craftingRequirements'][_0x2fbc2e][_0x576b('0x0')]['name'], _0x576b('0xc')) + this[_0x576b('0x8')][_0x2fbc2e][_0x576b('0x1')], '\x20');
        }
        return _0x500dc9[_0x576b('0xd')](_0x500dc9['OCgJi'](_0x500dc9[_0x576b('0xe')](_0x500dc9[_0x576b('0xf')](_0x500dc9[_0x576b('0x10')](_0x500dc9[_0x576b('0x11')](this[_0x576b('0x4')], ',\x20'), this[_0x576b('0x6')]), _0x500dc9[_0x576b('0x12')]), this['cost']), _0x500dc9['vIoMR']), _0x4535b3);
    }
    [_0x576b('0x13')](_0x5fe3d8, _0x2c4518) {
        var _0x4f0a9b = {
            'GztaX': function (_0x4b6118, _0x4e4bb7) {
                return _0x4b6118 / _0x4e4bb7;
            },
            'kJvhX': function (_0xb75212, _0x361b30) {
                return _0xb75212 < _0x361b30;
            },
            'izxZb': function (_0x26d0c9, _0x363e30) {
                return _0x26d0c9 > _0x363e30;
            },
            'FOXXS': function (_0x1aa28f, _0x419ca1) {
                return _0x1aa28f * _0x419ca1;
            },
            'EYRSa': function (_0x506ac8, _0x25940e) {
                return _0x506ac8 * _0x25940e;
            },
            'kiEaV': function (_0x5cddf9, _0x39ba00) {
                return _0x5cddf9 + _0x39ba00;
            },
            'LqLJw': function (_0x4d93e4, _0x1c91a0) {
                return _0x4d93e4 * _0x1c91a0;
            },
            'DUOxO': function (_0x3b630e, _0x13df3b) {
                return _0x3b630e + _0x13df3b;
            },
            'VPXft': function (_0x2f66b1, _0x52b21e) {
                return _0x2f66b1 + _0x52b21e;
            },
            'BbTiu': _0x576b('0x14')
        };
        const _0x3b111f = Math[_0x576b('0x15')](_0x4f0a9b[_0x576b('0x16')](this[_0x576b('0x7')], 0x2));
        var _0x5b74eb = 0x1;
        if (_0x4f0a9b[_0x576b('0x17')](this[_0x576b('0x6')], _0x5fe3d8)) {
            _0x5b74eb = Math[_0x576b('0x15')](_0x4f0a9b[_0x576b('0x16')](_0x5fe3d8, this[_0x576b('0x6')]));
        }
        if (_0x4f0a9b['izxZb'](_0x5b74eb, _0x2c4518)) {
            _0x5b74eb = _0x2c4518;
        }
        var _0xb7d657 = Math[_0x576b('0x15')](_0x4f0a9b['GztaX'](_0x2c4518, _0x5b74eb));
        var _0x2bda30 = _0x4f0a9b[_0x576b('0x18')](_0x4f0a9b[_0x576b('0x19')](this['cost'] / 0x4, _0x4f0a9b[_0x576b('0x1a')](Math[_0x576b('0x1b')](_0xb7d657, 0x2), _0x4f0a9b['LqLJw'](0x3, _0xb7d657))), _0x5b74eb);
        console[_0x576b('0x1c')](_0x4f0a9b[_0x576b('0x1a')](_0x4f0a9b['DUOxO'](_0x4f0a9b[_0x576b('0x1d')](this[_0x576b('0x4')] + ':\x20', _0xb7d657) + _0x576b('0x1e'), _0x5b74eb) + _0x4f0a9b[_0x576b('0x1f')], _0x2bda30));
        return _0x2bda30;
    }
}
cotton = new CraftingItem('Cotton', 0x0, 0x0, null);
log = new CraftingItem(_0x576b('0x20'), 0x0, 0x0, null);
rock = new CraftingItem(_0x576b('0x21'), 0x0, 0x0, null);
quartz = new CraftingItem(_0x576b('0x22'), 0x0, 0x0, null);
craftingRecipes['set'](cotton[_0x576b('0x4')], cotton);
craftingRecipes['set'](log[_0x576b('0x4')], log);
craftingRecipes['set'](rock['name'], rock);
craftingRecipes[_0x576b('0x23')](quartz[_0x576b('0x4')], quartz);
var stringReq = [new CraftingRequirement(cotton, 0x3)];
string = new CraftingItem(_0x576b('0x24'), 0x5, 0x32, stringReq);
craftingRecipes[_0x576b('0x23')](string['name'], string);
var woodReq = [new CraftingRequirement(log, 0x3)];
wood = new CraftingItem(_0x576b('0x25'), 0x5, 0x32, woodReq);
craftingRecipes[_0x576b('0x23')](wood['name'], wood);
var ribbonReq = [
    new CraftingRequirement(string, 0x2),
    new CraftingRequirement(wood, 0x2)
];
ribbon = new CraftingItem(_0x576b('0x26'), 0xf, 0x64, ribbonReq);
craftingRecipes[_0x576b('0x23')](ribbon['name'], ribbon);
var metalReq = [new CraftingRequirement(rock, 0x3)];
metal = new CraftingItem(_0x576b('0x27'), 0xf, 0x64, metalReq);
craftingRecipes[_0x576b('0x23')](metal['name'], metal);
var needlesReq = [
    new CraftingRequirement(metal, 0x4),
    new CraftingRequirement(ribbon, 0x1)
];
needles = new CraftingItem(_0x576b('0x28'), 0x1e, 0xc8, needlesReq);
craftingRecipes['set'](needles[_0x576b('0x4')], needles);
var sparklesReq = [
    new CraftingRequirement(needles, 0x2),
    new CraftingRequirement(ribbon, 0x2)
];
sparkles = new CraftingItem(_0x576b('0x29'), 0x3c, 0x12c, sparklesReq);
craftingRecipes['set'](sparkles[_0x576b('0x4')], sparkles);
var bronzeReq = [new CraftingRequirement(rock, 0x4)];
bronze = new CraftingItem('Bronze', 0x1e, 0xc8, bronzeReq);
craftingRecipes[_0x576b('0x23')](bronze[_0x576b('0x4')], bronze);
var silverReq = [
    new CraftingRequirement(bronze, 0x3),
    new CraftingRequirement(sparkles, 0x1)
];
silver = new CraftingItem('Silver', 0x78, 0x12c, silverReq);
craftingRecipes[_0x576b('0x23')](silver[_0x576b('0x4')], silver);
var goldReq = [
    new CraftingRequirement(silver, 0x2),
    new CraftingRequirement(sparkles, 0x2)
];
gold = new CraftingItem(_0x576b('0x2a'), 0x168, 0x1f4, goldReq);
craftingRecipes[_0x576b('0x23')](gold[_0x576b('0x4')], gold);
var amethystReq = [new CraftingRequirement(quartz, 0xa)];
amethyst = new CraftingItem(_0x576b('0x2b'), 0x3c, 0x12c, amethystReq);
craftingRecipes[_0x576b('0x23')](amethyst[_0x576b('0x4')], amethyst);
var pendantReq = [
    new CraftingRequirement(amethyst, 0x7),
    new CraftingRequirement(silver, 0x2)
];
pendant = new CraftingItem(_0x576b('0x2c'), 0xb4, 0x1f4, pendantReq);
craftingRecipes[_0x576b('0x23')](pendant['name'], pendant);
var necklaceReq = [
    new CraftingRequirement(pendant, 0x3),
    new CraftingRequirement(gold, 0x2)
];
necklace = new CraftingItem(_0x576b('0x2d'), 0x2f8, 0x1f4, necklaceReq);
craftingRecipes[_0x576b('0x23')](necklace[_0x576b('0x4')], necklace);
var orbReq = [new CraftingRequirement(quartz, 0x14)];
orb = new CraftingItem(_0x576b('0x2e'), 0x3c, 0x12c, orbReq);
craftingRecipes[_0x576b('0x23')](orb['name'], orb);
var waterReq = [
    new CraftingRequirement(orb, 0x2),
    new CraftingRequirement(silver, 0x1)
];
water = new CraftingItem('Water', 0x168, 0x320, waterReq);
craftingRecipes['set'](water['name'], water);
var fireReq = [
    new CraftingRequirement(orb, 0x6),
    new CraftingRequirement(gold, 0x1)
];
fire = new CraftingItem('Fire', 0x2d0, 0x3e8, fireReq);
craftingRecipes[_0x576b('0x23')](fire[_0x576b('0x4')], fire);
var waterstoneReq = [
    new CraftingRequirement(water, 0x2),
    new CraftingRequirement(ribbon, 0xa)
];
waterstone = new CraftingItem(_0x576b('0x2f'), 0x2d0, 0x5dc, waterstoneReq);
craftingRecipes['set'](waterstone[_0x576b('0x4')], waterstone);
var firestoneReq = [
    new CraftingRequirement(fire, 0x1),
    new CraftingRequirement(sparkles, 0x2)
];
firestone = new CraftingItem(_0x576b('0x30'), 0x2d0, 0x5dc, firestoneReq);
craftingRecipes[_0x576b('0x23')](firestone['name'], firestone);
var elementstoneReq = [
    new CraftingRequirement(firestone, 0x1),
    new CraftingRequirement(waterstone, 0x1)
];
elementstone = new CraftingItem(_0x576b('0x31'), 0x5a0, 0x1388, elementstoneReq);
craftingRecipes['set'](elementstone[_0x576b('0x4')], elementstone);
var artifactReq = [
    new CraftingRequirement(elementstone, 0x1),
    new CraftingRequirement(necklace, 0x1)
];
artifact = new CraftingItem(_0x576b('0x32'), 0x10e0, 0x2710, artifactReq);
craftingRecipes[_0x576b('0x23')](artifact[_0x576b('0x4')], artifact);