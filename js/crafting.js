var _0x52f8 = [
    'Amethyst',
    'Pendant',
    'Orb',
    'Water',
    'Fire',
    'Waterstone',
    'Firestone',
    'Elementstone',
    'LEGENDARY',
    'Cotton',
    'RAW',
    'Log',
    'Rock',
    'Quartz',
    'set',
    'name',
    'COMMON',
    'RARE',
    'Ribbon',
    'EPIC',
    'Metal',
    'Sparkles',
    'Bronze',
    'Silver',
    'Gold'
];
(function (_0x523c55, _0x4f4db5) {
    var _0x1f05fc = function (_0x2b70e7) {
        while (--_0x2b70e7) {
            _0x523c55['push'](_0x523c55['shift']());
        }
    };
    _0x1f05fc(++_0x4f4db5);
}(_0x52f8, 0x11c));
var _0x23a8 = function (_0x461207, _0x20d172) {
    _0x461207 = _0x461207 - 0x0;
    var _0xabaa23 = _0x52f8[_0x461207];
    return _0xabaa23;
};
cotton = new CraftingItem(_0x23a8('0x0'), 0x0, 0x0, rarity[_0x23a8('0x1')]);
log = new CraftingItem(_0x23a8('0x2'), 0x0, 0x0, rarity[_0x23a8('0x1')]);
rock = new CraftingItem(_0x23a8('0x3'), 0x0, 0x0, rarity[_0x23a8('0x1')]);
quartz = new CraftingItem(_0x23a8('0x4'), 0x0, 0x0, rarity[_0x23a8('0x1')]);
craftingRecipes[_0x23a8('0x5')](cotton[_0x23a8('0x6')], cotton);
craftingRecipes[_0x23a8('0x5')](log[_0x23a8('0x6')], log);
craftingRecipes[_0x23a8('0x5')](rock[_0x23a8('0x6')], rock);
craftingRecipes[_0x23a8('0x5')](quartz[_0x23a8('0x6')], quartz);
var stringReq = [new CraftingRequirement(cotton, 0x3)];
string = new CraftingItem('String', 0x5, 0x32, rarity[_0x23a8('0x7')], stringReq);
craftingRecipes[_0x23a8('0x5')](string['name'], string);
var woodReq = [new CraftingRequirement(log, 0x3)];
wood = new CraftingItem('Wood', 0x5, 0x32, rarity[_0x23a8('0x8')], woodReq);
craftingRecipes[_0x23a8('0x5')](wood[_0x23a8('0x6')], wood);
var ribbonReq = [
    new CraftingRequirement(string, 0x2),
    new CraftingRequirement(wood, 0x2)
];
ribbon = new CraftingItem(_0x23a8('0x9'), 0xf, 0x64, rarity[_0x23a8('0xa')], ribbonReq);
craftingRecipes[_0x23a8('0x5')](ribbon[_0x23a8('0x6')], ribbon);
var metalReq = [new CraftingRequirement(rock, 0x3)];
metal = new CraftingItem(_0x23a8('0xb'), 0xf, 0x64, rarity[_0x23a8('0x7')], metalReq);
craftingRecipes[_0x23a8('0x5')](metal[_0x23a8('0x6')], metal);
var needlesReq = [
    new CraftingRequirement(metal, 0x4),
    new CraftingRequirement(ribbon, 0x1)
];
needles = new CraftingItem('Needles', 0x1e, 0xc8, rarity[_0x23a8('0x8')], needlesReq);
craftingRecipes[_0x23a8('0x5')](needles['name'], needles);
var sparklesReq = [
    new CraftingRequirement(needles, 0x2),
    new CraftingRequirement(ribbon, 0x2)
];
sparkles = new CraftingItem(_0x23a8('0xc'), 0x3c, 0x12c, rarity[_0x23a8('0xa')], sparklesReq);
craftingRecipes[_0x23a8('0x5')](sparkles[_0x23a8('0x6')], sparkles);
var bronzeReq = [new CraftingRequirement(rock, 0x4)];
bronze = new CraftingItem(_0x23a8('0xd'), 0x1e, 0xc8, rarity[_0x23a8('0x7')], bronzeReq);
craftingRecipes[_0x23a8('0x5')](bronze[_0x23a8('0x6')], bronze);
var silverReq = [
    new CraftingRequirement(bronze, 0x3),
    new CraftingRequirement(sparkles, 0x1)
];
silver = new CraftingItem(_0x23a8('0xe'), 0x78, 0x12c, rarity['RARE'], silverReq);
craftingRecipes[_0x23a8('0x5')](silver[_0x23a8('0x6')], silver);
var goldReq = [
    new CraftingRequirement(silver, 0x2),
    new CraftingRequirement(sparkles, 0x2)
];
gold = new CraftingItem(_0x23a8('0xf'), 0x168, 0x1f4, rarity['EPIC'], goldReq);
craftingRecipes[_0x23a8('0x5')](gold[_0x23a8('0x6')], gold);
var amethystReq = [new CraftingRequirement(quartz, 0xa)];
amethyst = new CraftingItem(_0x23a8('0x10'), 0x3c, 0x12c, rarity[_0x23a8('0x7')], amethystReq);
craftingRecipes[_0x23a8('0x5')](amethyst['name'], amethyst);
var pendantReq = [
    new CraftingRequirement(amethyst, 0x7),
    new CraftingRequirement(silver, 0x2)
];
pendant = new CraftingItem(_0x23a8('0x11'), 0xb4, 0x1f4, rarity[_0x23a8('0x8')], pendantReq);
craftingRecipes[_0x23a8('0x5')](pendant[_0x23a8('0x6')], pendant);
var necklaceReq = [
    new CraftingRequirement(pendant, 0x3),
    new CraftingRequirement(gold, 0x2)
];
necklace = new CraftingItem('Necklace', 0x2f8, 0x1f4, rarity['EPIC'], necklaceReq);
craftingRecipes[_0x23a8('0x5')](necklace[_0x23a8('0x6')], necklace);
var orbReq = [new CraftingRequirement(quartz, 0x14)];
orb = new CraftingItem(_0x23a8('0x12'), 0x3c, 0x12c, rarity[_0x23a8('0x7')], orbReq);
craftingRecipes[_0x23a8('0x5')](orb[_0x23a8('0x6')], orb);
var waterReq = [
    new CraftingRequirement(orb, 0x2),
    new CraftingRequirement(silver, 0x1)
];
water = new CraftingItem(_0x23a8('0x13'), 0x168, 0x320, rarity['RARE'], waterReq);
craftingRecipes[_0x23a8('0x5')](water[_0x23a8('0x6')], water);
var fireReq = [
    new CraftingRequirement(orb, 0x6),
    new CraftingRequirement(gold, 0x1)
];
fire = new CraftingItem(_0x23a8('0x14'), 0x2d0, 0x3e8, rarity[_0x23a8('0xa')], fireReq);
craftingRecipes[_0x23a8('0x5')](fire[_0x23a8('0x6')], fire);
var waterstoneReq = [
    new CraftingRequirement(water, 0x2),
    new CraftingRequirement(ribbon, 0xa)
];
waterstone = new CraftingItem(_0x23a8('0x15'), 0x2d0, 0x5dc, rarity[_0x23a8('0x7')], waterstoneReq);
craftingRecipes[_0x23a8('0x5')](waterstone[_0x23a8('0x6')], waterstone);
var firestoneReq = [
    new CraftingRequirement(fire, 0x1),
    new CraftingRequirement(sparkles, 0x2)
];
firestone = new CraftingItem(_0x23a8('0x16'), 0x2d0, 0x5dc, rarity[_0x23a8('0x8')], firestoneReq);
craftingRecipes['set'](firestone['name'], firestone);
var elementstoneReq = [
    new CraftingRequirement(firestone, 0x1),
    new CraftingRequirement(waterstone, 0x1)
];
elementstone = new CraftingItem(_0x23a8('0x17'), 0x5a0, 0x1388, rarity[_0x23a8('0x18')], elementstoneReq);
craftingRecipes[_0x23a8('0x5')](elementstone[_0x23a8('0x6')], elementstone);
var artifactReq = [
    new CraftingRequirement(elementstone, 0x1),
    new CraftingRequirement(necklace, 0x1)
];
artifact = new CraftingItem('Artifact', 0x10e0, 0x2710, rarity[_0x23a8('0x18')], artifactReq);
craftingRecipes['set'](artifact[_0x23a8('0x6')], artifact);