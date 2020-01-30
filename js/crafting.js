var _0x5c02 = [
    'name',
    'set',
    'String',
    'Wood',
    'Ribbon',
    'Metal',
    'Needles',
    'Sparkles',
    'Bronze',
    'Silver',
    'Gold',
    'Amethyst',
    'Pendant',
    'Necklace',
    'Orb',
    'Water',
    'Waterstone',
    'Firestone',
    'Elementstone',
    'Artifact',
    'Cotton',
    'Log',
    'Rock'
];
(function (_0x35ec52, _0x3fc8cc) {
    var _0x2c8895 = function (_0x5b1ddb) {
        while (--_0x5b1ddb) {
            _0x35ec52['push'](_0x35ec52['shift']());
        }
    };
    _0x2c8895(++_0x3fc8cc);
}(_0x5c02, 0x1b2));
var _0x1c73 = function (_0x3896d4, _0x5d87f5) {
    _0x3896d4 = _0x3896d4 - 0x0;
    var _0x2dba02 = _0x5c02[_0x3896d4];
    return _0x2dba02;
};
cotton = new CraftingItem(_0x1c73('0x0'), 0x0, 0x0, null);
log = new CraftingItem(_0x1c73('0x1'), 0x0, 0x0, null);
rock = new CraftingItem(_0x1c73('0x2'), 0x0, 0x0, null);
quartz = new CraftingItem('Quartz', 0x0, 0x0, null);
craftingRecipes['set'](cotton[_0x1c73('0x3')], cotton);
craftingRecipes[_0x1c73('0x4')](log[_0x1c73('0x3')], log);
craftingRecipes[_0x1c73('0x4')](rock[_0x1c73('0x3')], rock);
craftingRecipes[_0x1c73('0x4')](quartz[_0x1c73('0x3')], quartz);
var stringReq = [new CraftingRequirement(cotton, 0x3)];
string = new CraftingItem(_0x1c73('0x5'), 0x5, 0x32, stringReq);
craftingRecipes[_0x1c73('0x4')](string[_0x1c73('0x3')], string);
var woodReq = [new CraftingRequirement(log, 0x3)];
wood = new CraftingItem(_0x1c73('0x6'), 0x5, 0x32, woodReq);
craftingRecipes[_0x1c73('0x4')](wood[_0x1c73('0x3')], wood);
var ribbonReq = [
    new CraftingRequirement(string, 0x2),
    new CraftingRequirement(wood, 0x2)
];
ribbon = new CraftingItem(_0x1c73('0x7'), 0xf, 0x64, ribbonReq);
craftingRecipes[_0x1c73('0x4')](ribbon[_0x1c73('0x3')], ribbon);
var metalReq = [new CraftingRequirement(rock, 0x3)];
metal = new CraftingItem(_0x1c73('0x8'), 0xf, 0x64, metalReq);
craftingRecipes[_0x1c73('0x4')](metal[_0x1c73('0x3')], metal);
var needlesReq = [
    new CraftingRequirement(metal, 0x4),
    new CraftingRequirement(ribbon, 0x1)
];
needles = new CraftingItem(_0x1c73('0x9'), 0x1e, 0xc8, needlesReq);
craftingRecipes[_0x1c73('0x4')](needles[_0x1c73('0x3')], needles);
var sparklesReq = [
    new CraftingRequirement(needles, 0x2),
    new CraftingRequirement(ribbon, 0x2)
];
sparkles = new CraftingItem(_0x1c73('0xa'), 0x3c, 0x12c, sparklesReq);
craftingRecipes['set'](sparkles['name'], sparkles);
var bronzeReq = [new CraftingRequirement(rock, 0x4)];
bronze = new CraftingItem(_0x1c73('0xb'), 0x1e, 0xc8, bronzeReq);
craftingRecipes[_0x1c73('0x4')](bronze[_0x1c73('0x3')], bronze);
var silverReq = [
    new CraftingRequirement(bronze, 0x3),
    new CraftingRequirement(sparkles, 0x1)
];
silver = new CraftingItem(_0x1c73('0xc'), 0x78, 0x12c, silverReq);
craftingRecipes[_0x1c73('0x4')](silver[_0x1c73('0x3')], silver);
var goldReq = [
    new CraftingRequirement(silver, 0x2),
    new CraftingRequirement(sparkles, 0x2)
];
gold = new CraftingItem(_0x1c73('0xd'), 0x168, 0x1f4, goldReq);
craftingRecipes[_0x1c73('0x4')](gold[_0x1c73('0x3')], gold);
var amethystReq = [new CraftingRequirement(quartz, 0xa)];
amethyst = new CraftingItem(_0x1c73('0xe'), 0x3c, 0x12c, amethystReq);
craftingRecipes[_0x1c73('0x4')](amethyst['name'], amethyst);
var pendantReq = [
    new CraftingRequirement(amethyst, 0x7),
    new CraftingRequirement(silver, 0x2)
];
pendant = new CraftingItem(_0x1c73('0xf'), 0xb4, 0x1f4, pendantReq);
craftingRecipes['set'](pendant[_0x1c73('0x3')], pendant);
var necklaceReq = [
    new CraftingRequirement(pendant, 0x3),
    new CraftingRequirement(gold, 0x2)
];
necklace = new CraftingItem(_0x1c73('0x10'), 0x2f8, 0x1f4, necklaceReq);
craftingRecipes[_0x1c73('0x4')](necklace[_0x1c73('0x3')], necklace);
var orbReq = [new CraftingRequirement(quartz, 0x14)];
orb = new CraftingItem(_0x1c73('0x11'), 0x3c, 0x12c, orbReq);
craftingRecipes[_0x1c73('0x4')](orb[_0x1c73('0x3')], orb);
var waterReq = [
    new CraftingRequirement(orb, 0x2),
    new CraftingRequirement(silver, 0x1)
];
water = new CraftingItem(_0x1c73('0x12'), 0x168, 0x320, waterReq);
craftingRecipes[_0x1c73('0x4')](water[_0x1c73('0x3')], water);
var fireReq = [
    new CraftingRequirement(orb, 0x6),
    new CraftingRequirement(gold, 0x1)
];
fire = new CraftingItem('Fire', 0x2d0, 0x3e8, fireReq);
craftingRecipes[_0x1c73('0x4')](fire[_0x1c73('0x3')], fire);
var waterstoneReq = [
    new CraftingRequirement(water, 0x2),
    new CraftingRequirement(ribbon, 0xa)
];
waterstone = new CraftingItem(_0x1c73('0x13'), 0x2d0, 0x5dc, waterstoneReq);
craftingRecipes[_0x1c73('0x4')](waterstone['name'], waterstone);
var firestoneReq = [
    new CraftingRequirement(fire, 0x1),
    new CraftingRequirement(sparkles, 0x2)
];
firestone = new CraftingItem(_0x1c73('0x14'), 0x2d0, 0x5dc, firestoneReq);
craftingRecipes[_0x1c73('0x4')](firestone[_0x1c73('0x3')], firestone);
var elementstoneReq = [
    new CraftingRequirement(firestone, 0x1),
    new CraftingRequirement(waterstone, 0x1)
];
elementstone = new CraftingItem(_0x1c73('0x15'), 0x5a0, 0x1388, elementstoneReq);
craftingRecipes[_0x1c73('0x4')](elementstone[_0x1c73('0x3')], elementstone);
var artifactReq = [
    new CraftingRequirement(elementstone, 0x1),
    new CraftingRequirement(necklace, 0x1)
];
artifact = new CraftingItem(_0x1c73('0x16'), 0x10e0, 0x2710, artifactReq);
craftingRecipes[_0x1c73('0x4')](artifact[_0x1c73('0x3')], artifact);