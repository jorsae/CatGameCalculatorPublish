var _0x38a2 = [
    'Elementstone',
    'LEGENDARY',
    'Cotton',
    'RAW',
    'Log',
    'Rock',
    'Quartz',
    'name',
    'set',
    'COMMON',
    'Ribbon',
    'EPIC',
    'Metal',
    'Needles',
    'Sparkles',
    'Bronze',
    'Silver',
    'RARE',
    'Gold',
    'Amethyst',
    'Pendant',
    'Necklace',
    'Orb',
    'Water',
    'Waterstone',
    'Firestone'
];
(function (_0x3dea96, _0x21a007) {
    var _0x32fc72 = function (_0xb4adac) {
        while (--_0xb4adac) {
            _0x3dea96['push'](_0x3dea96['shift']());
        }
    };
    _0x32fc72(++_0x21a007);
}(_0x38a2, 0x16e));
var _0x4e6d = function (_0x1a026c, _0x2492de) {
    _0x1a026c = _0x1a026c - 0x0;
    var _0x2d8f05 = _0x38a2[_0x1a026c];
    return _0x2d8f05;
};
cotton = new CraftingItem(_0x4e6d('0x0'), 0x0, 0x0, rarity[_0x4e6d('0x1')]);
log = new CraftingItem(_0x4e6d('0x2'), 0x0, 0x0, rarity[_0x4e6d('0x1')]);
rock = new CraftingItem(_0x4e6d('0x3'), 0x0, 0x0, rarity[_0x4e6d('0x1')]);
quartz = new CraftingItem(_0x4e6d('0x4'), 0x0, 0x0, rarity[_0x4e6d('0x1')]);
craftingRecipes['set'](cotton['name'], cotton);
craftingRecipes['set'](log[_0x4e6d('0x5')], log);
craftingRecipes[_0x4e6d('0x6')](rock[_0x4e6d('0x5')], rock);
craftingRecipes[_0x4e6d('0x6')](quartz['name'], quartz);
var stringReq = [new CraftingRequirement(cotton, 0x3)];
string = new CraftingItem('String', 0x5, 0x32, rarity[_0x4e6d('0x7')], stringReq);
craftingRecipes[_0x4e6d('0x6')](string[_0x4e6d('0x5')], string);
var woodReq = [new CraftingRequirement(log, 0x3)];
wood = new CraftingItem('Wood', 0x5, 0x32, rarity['RARE'], woodReq);
craftingRecipes[_0x4e6d('0x6')](wood[_0x4e6d('0x5')], wood);
var ribbonReq = [
    new CraftingRequirement(string, 0x2),
    new CraftingRequirement(wood, 0x2)
];
ribbon = new CraftingItem(_0x4e6d('0x8'), 0xf, 0x64, rarity[_0x4e6d('0x9')], ribbonReq);
craftingRecipes[_0x4e6d('0x6')](ribbon[_0x4e6d('0x5')], ribbon);
var metalReq = [new CraftingRequirement(rock, 0x3)];
metal = new CraftingItem(_0x4e6d('0xa'), 0xf, 0x64, rarity[_0x4e6d('0x7')], metalReq);
craftingRecipes['set'](metal[_0x4e6d('0x5')], metal);
var needlesReq = [
    new CraftingRequirement(metal, 0x4),
    new CraftingRequirement(ribbon, 0x1)
];
needles = new CraftingItem(_0x4e6d('0xb'), 0x1e, 0xc8, rarity['RARE'], needlesReq);
craftingRecipes[_0x4e6d('0x6')](needles['name'], needles);
var sparklesReq = [
    new CraftingRequirement(needles, 0x2),
    new CraftingRequirement(ribbon, 0x2)
];
sparkles = new CraftingItem(_0x4e6d('0xc'), 0x3c, 0x12c, rarity[_0x4e6d('0x9')], sparklesReq);
craftingRecipes[_0x4e6d('0x6')](sparkles['name'], sparkles);
var bronzeReq = [new CraftingRequirement(rock, 0x4)];
bronze = new CraftingItem(_0x4e6d('0xd'), 0x1e, 0xc8, rarity[_0x4e6d('0x7')], bronzeReq);
craftingRecipes[_0x4e6d('0x6')](bronze[_0x4e6d('0x5')], bronze);
var silverReq = [
    new CraftingRequirement(bronze, 0x3),
    new CraftingRequirement(sparkles, 0x1)
];
silver = new CraftingItem(_0x4e6d('0xe'), 0x78, 0x12c, rarity[_0x4e6d('0xf')], silverReq);
craftingRecipes[_0x4e6d('0x6')](silver[_0x4e6d('0x5')], silver);
var goldReq = [
    new CraftingRequirement(silver, 0x2),
    new CraftingRequirement(sparkles, 0x2)
];
gold = new CraftingItem(_0x4e6d('0x10'), 0x168, 0x1f4, rarity[_0x4e6d('0x9')], goldReq);
craftingRecipes['set'](gold[_0x4e6d('0x5')], gold);
var amethystReq = [new CraftingRequirement(quartz, 0xa)];
amethyst = new CraftingItem(_0x4e6d('0x11'), 0x3c, 0x12c, rarity[_0x4e6d('0x7')], amethystReq);
craftingRecipes[_0x4e6d('0x6')](amethyst[_0x4e6d('0x5')], amethyst);
var pendantReq = [
    new CraftingRequirement(amethyst, 0x7),
    new CraftingRequirement(silver, 0x2)
];
pendant = new CraftingItem(_0x4e6d('0x12'), 0xb4, 0x1f4, rarity['RARE'], pendantReq);
craftingRecipes[_0x4e6d('0x6')](pendant[_0x4e6d('0x5')], pendant);
var necklaceReq = [
    new CraftingRequirement(pendant, 0x3),
    new CraftingRequirement(gold, 0x2)
];
necklace = new CraftingItem(_0x4e6d('0x13'), 0x2f8, 0x1f4, rarity[_0x4e6d('0x9')], necklaceReq);
craftingRecipes['set'](necklace['name'], necklace);
var orbReq = [new CraftingRequirement(quartz, 0x14)];
orb = new CraftingItem(_0x4e6d('0x14'), 0x3c, 0x12c, rarity[_0x4e6d('0x7')], orbReq);
craftingRecipes[_0x4e6d('0x6')](orb[_0x4e6d('0x5')], orb);
var waterReq = [
    new CraftingRequirement(orb, 0x2),
    new CraftingRequirement(silver, 0x1)
];
water = new CraftingItem(_0x4e6d('0x15'), 0x168, 0x320, rarity[_0x4e6d('0xf')], waterReq);
craftingRecipes['set'](water[_0x4e6d('0x5')], water);
var fireReq = [
    new CraftingRequirement(orb, 0x6),
    new CraftingRequirement(gold, 0x1)
];
fire = new CraftingItem('Fire', 0x2d0, 0x3e8, rarity[_0x4e6d('0x9')], fireReq);
craftingRecipes[_0x4e6d('0x6')](fire[_0x4e6d('0x5')], fire);
var waterstoneReq = [
    new CraftingRequirement(water, 0x2),
    new CraftingRequirement(ribbon, 0xa)
];
waterstone = new CraftingItem(_0x4e6d('0x16'), 0x2d0, 0x5dc, rarity[_0x4e6d('0x7')], waterstoneReq);
craftingRecipes[_0x4e6d('0x6')](waterstone[_0x4e6d('0x5')], waterstone);
var firestoneReq = [
    new CraftingRequirement(fire, 0x1),
    new CraftingRequirement(sparkles, 0x2)
];
firestone = new CraftingItem(_0x4e6d('0x17'), 0x2d0, 0x5dc, rarity[_0x4e6d('0xf')], firestoneReq);
craftingRecipes[_0x4e6d('0x6')](firestone[_0x4e6d('0x5')], firestone);
var elementstoneReq = [
    new CraftingRequirement(firestone, 0x1),
    new CraftingRequirement(waterstone, 0x1)
];
elementstone = new CraftingItem(_0x4e6d('0x18'), 0x5a0, 0x1388, rarity['LEGENDARY'], elementstoneReq);
craftingRecipes[_0x4e6d('0x6')](elementstone[_0x4e6d('0x5')], elementstone);
var artifactReq = [
    new CraftingRequirement(elementstone, 0x1),
    new CraftingRequirement(necklace, 0x1)
];
artifact = new CraftingItem('Artifact', 0x10e0, 0x2710, rarity[_0x4e6d('0x19')], artifactReq);
craftingRecipes[_0x4e6d('0x6')](artifact[_0x4e6d('0x5')], artifact);