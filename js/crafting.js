var _0x2e59 = [
    'name',
    'String',
    'Wood',
    'Ribbon',
    'COMMON',
    'Needles',
    'Sparkles',
    'EPIC',
    'Bronze',
    'Silver',
    'RARE',
    'Amethyst',
    'Necklace',
    'Orb',
    'Water',
    'Firestone',
    'Elementstone',
    'LEGENDARY',
    'Artifact',
    'Log',
    'RAW',
    'Rock',
    'Quartz',
    'set'
];
(function (_0x2869ea, _0x1c5af4) {
    var _0x343093 = function (_0x294169) {
        while (--_0x294169) {
            _0x2869ea['push'](_0x2869ea['shift']());
        }
    };
    _0x343093(++_0x1c5af4);
}(_0x2e59, 0x8b));
var _0x20dc = function (_0x4526b7, _0x14a37f) {
    _0x4526b7 = _0x4526b7 - 0x0;
    var _0x5668b2 = _0x2e59[_0x4526b7];
    return _0x5668b2;
};
cotton = new CraftingItem('Cotton', 0x0, 0x0, rarity['RAW']);
log = new CraftingItem(_0x20dc('0x0'), 0x0, 0x0, rarity[_0x20dc('0x1')]);
rock = new CraftingItem(_0x20dc('0x2'), 0x0, 0x0, rarity[_0x20dc('0x1')]);
quartz = new CraftingItem(_0x20dc('0x3'), 0x0, 0x0, rarity[_0x20dc('0x1')]);
craftingRecipes[_0x20dc('0x4')](cotton[_0x20dc('0x5')], cotton);
craftingRecipes[_0x20dc('0x4')](log[_0x20dc('0x5')], log);
craftingRecipes['set'](rock[_0x20dc('0x5')], rock);
craftingRecipes[_0x20dc('0x4')](quartz[_0x20dc('0x5')], quartz);
var stringReq = [new CraftingRequirement(cotton, 0x3)];
string = new CraftingItem(_0x20dc('0x6'), 0x5, 0x32, rarity['COMMON'], stringReq);
craftingRecipes[_0x20dc('0x4')](string['name'], string);
var woodReq = [new CraftingRequirement(log, 0x3)];
wood = new CraftingItem(_0x20dc('0x7'), 0x5, 0x32, rarity['RARE'], woodReq);
craftingRecipes[_0x20dc('0x4')](wood[_0x20dc('0x5')], wood);
var ribbonReq = [
    new CraftingRequirement(string, 0x2),
    new CraftingRequirement(wood, 0x2)
];
ribbon = new CraftingItem(_0x20dc('0x8'), 0xf, 0x64, rarity['EPIC'], ribbonReq);
craftingRecipes[_0x20dc('0x4')](ribbon['name'], ribbon);
var metalReq = [new CraftingRequirement(rock, 0x3)];
metal = new CraftingItem('Metal', 0xf, 0x64, rarity[_0x20dc('0x9')], metalReq);
craftingRecipes[_0x20dc('0x4')](metal[_0x20dc('0x5')], metal);
var needlesReq = [
    new CraftingRequirement(metal, 0x4),
    new CraftingRequirement(ribbon, 0x1)
];
needles = new CraftingItem(_0x20dc('0xa'), 0x1e, 0xc8, rarity['RARE'], needlesReq);
craftingRecipes[_0x20dc('0x4')](needles[_0x20dc('0x5')], needles);
var sparklesReq = [
    new CraftingRequirement(needles, 0x2),
    new CraftingRequirement(ribbon, 0x2)
];
sparkles = new CraftingItem(_0x20dc('0xb'), 0x3c, 0x12c, rarity[_0x20dc('0xc')], sparklesReq);
craftingRecipes[_0x20dc('0x4')](sparkles['name'], sparkles);
var bronzeReq = [new CraftingRequirement(rock, 0x4)];
bronze = new CraftingItem(_0x20dc('0xd'), 0x1e, 0xc8, rarity[_0x20dc('0x9')], bronzeReq);
craftingRecipes[_0x20dc('0x4')](bronze[_0x20dc('0x5')], bronze);
var silverReq = [
    new CraftingRequirement(bronze, 0x3),
    new CraftingRequirement(sparkles, 0x1)
];
silver = new CraftingItem(_0x20dc('0xe'), 0x78, 0x12c, rarity[_0x20dc('0xf')], silverReq);
craftingRecipes['set'](silver[_0x20dc('0x5')], silver);
var goldReq = [
    new CraftingRequirement(silver, 0x2),
    new CraftingRequirement(sparkles, 0x2)
];
gold = new CraftingItem('Gold', 0x168, 0x1f4, rarity[_0x20dc('0xc')], goldReq);
craftingRecipes['set'](gold[_0x20dc('0x5')], gold);
var amethystReq = [new CraftingRequirement(quartz, 0xa)];
amethyst = new CraftingItem(_0x20dc('0x10'), 0x3c, 0x12c, rarity[_0x20dc('0x9')], amethystReq);
craftingRecipes['set'](amethyst[_0x20dc('0x5')], amethyst);
var pendantReq = [
    new CraftingRequirement(amethyst, 0x7),
    new CraftingRequirement(silver, 0x2)
];
pendant = new CraftingItem('Pendant', 0xb4, 0x1f4, rarity[_0x20dc('0xf')], pendantReq);
craftingRecipes[_0x20dc('0x4')](pendant[_0x20dc('0x5')], pendant);
var necklaceReq = [
    new CraftingRequirement(pendant, 0x3),
    new CraftingRequirement(gold, 0x2)
];
necklace = new CraftingItem(_0x20dc('0x11'), 0x2f8, 0x1f4, rarity[_0x20dc('0xc')], necklaceReq);
craftingRecipes[_0x20dc('0x4')](necklace[_0x20dc('0x5')], necklace);
var orbReq = [new CraftingRequirement(quartz, 0x14)];
orb = new CraftingItem(_0x20dc('0x12'), 0x3c, 0x12c, rarity['COMMON'], orbReq);
craftingRecipes[_0x20dc('0x4')](orb[_0x20dc('0x5')], orb);
var waterReq = [
    new CraftingRequirement(orb, 0x2),
    new CraftingRequirement(silver, 0x1)
];
water = new CraftingItem(_0x20dc('0x13'), 0x168, 0x320, rarity['RARE'], waterReq);
craftingRecipes[_0x20dc('0x4')](water['name'], water);
var fireReq = [
    new CraftingRequirement(orb, 0x6),
    new CraftingRequirement(gold, 0x1)
];
fire = new CraftingItem('Fire', 0x2d0, 0x3e8, rarity['EPIC'], fireReq);
craftingRecipes[_0x20dc('0x4')](fire[_0x20dc('0x5')], fire);
var waterstoneReq = [
    new CraftingRequirement(water, 0x2),
    new CraftingRequirement(ribbon, 0xa)
];
waterstone = new CraftingItem('Waterstone', 0x2d0, 0x5dc, rarity[_0x20dc('0x9')], waterstoneReq);
craftingRecipes[_0x20dc('0x4')](waterstone['name'], waterstone);
var firestoneReq = [
    new CraftingRequirement(fire, 0x1),
    new CraftingRequirement(sparkles, 0x2)
];
firestone = new CraftingItem(_0x20dc('0x14'), 0x2d0, 0x5dc, rarity[_0x20dc('0xf')], firestoneReq);
craftingRecipes[_0x20dc('0x4')](firestone['name'], firestone);
var elementstoneReq = [
    new CraftingRequirement(firestone, 0x1),
    new CraftingRequirement(waterstone, 0x1)
];
elementstone = new CraftingItem(_0x20dc('0x15'), 0x5a0, 0x1388, rarity[_0x20dc('0x16')], elementstoneReq);
craftingRecipes[_0x20dc('0x4')](elementstone[_0x20dc('0x5')], elementstone);
var artifactReq = [
    new CraftingRequirement(elementstone, 0x1),
    new CraftingRequirement(necklace, 0x1)
];
artifact = new CraftingItem(_0x20dc('0x17'), 0x10e0, 0x2710, rarity[_0x20dc('0x16')], artifactReq);
craftingRecipes['set'](artifact[_0x20dc('0x5')], artifact);