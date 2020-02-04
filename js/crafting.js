var _0x24e3 = [
    'Metal',
    'Needles',
    'EPIC',
    'Silver',
    'Gold',
    'Pendant',
    'Necklace',
    'Orb',
    'Water',
    'Fire',
    'Waterstone',
    'Elementstone',
    'LEGENDARY',
    'Cotton',
    'RAW',
    'Log',
    'Rock',
    'Quartz',
    'name',
    'set',
    'String',
    'COMMON',
    'RARE'
];
(function (_0x5b3f8b, _0x4297f2) {
    var _0x303bac = function (_0x15ff53) {
        while (--_0x15ff53) {
            _0x5b3f8b['push'](_0x5b3f8b['shift']());
        }
    };
    _0x303bac(++_0x4297f2);
}(_0x24e3, 0x1d9));
var _0x3224 = function (_0x1806c0, _0x1b02c9) {
    _0x1806c0 = _0x1806c0 - 0x0;
    var _0x308549 = _0x24e3[_0x1806c0];
    return _0x308549;
};
cotton = new CraftingItem(_0x3224('0x0'), 0x0, 0x0, rarity[_0x3224('0x1')]);
log = new CraftingItem(_0x3224('0x2'), 0x0, 0x0, rarity[_0x3224('0x1')]);
rock = new CraftingItem(_0x3224('0x3'), 0x0, 0x0, rarity[_0x3224('0x1')]);
quartz = new CraftingItem(_0x3224('0x4'), 0x0, 0x0, rarity[_0x3224('0x1')]);
craftingRecipes['set'](cotton[_0x3224('0x5')], cotton);
craftingRecipes[_0x3224('0x6')](log[_0x3224('0x5')], log);
craftingRecipes['set'](rock[_0x3224('0x5')], rock);
craftingRecipes[_0x3224('0x6')](quartz[_0x3224('0x5')], quartz);
var stringReq = [new CraftingRequirement(cotton, 0x3)];
string = new CraftingItem(_0x3224('0x7'), 0x5, 0x32, rarity['COMMON'], stringReq);
craftingRecipes[_0x3224('0x6')](string[_0x3224('0x5')], string);
var woodReq = [new CraftingRequirement(log, 0x3)];
wood = new CraftingItem('Wood', 0x5, 0x32, rarity[_0x3224('0x8')], woodReq);
craftingRecipes[_0x3224('0x6')](wood[_0x3224('0x5')], wood);
var ribbonReq = [
    new CraftingRequirement(string, 0x2),
    new CraftingRequirement(wood, 0x2)
];
ribbon = new CraftingItem('Ribbon', 0xf, 0x64, rarity[_0x3224('0x9')], ribbonReq);
craftingRecipes[_0x3224('0x6')](ribbon[_0x3224('0x5')], ribbon);
var metalReq = [new CraftingRequirement(rock, 0x3)];
metal = new CraftingItem(_0x3224('0xa'), 0xf, 0x64, rarity[_0x3224('0x8')], metalReq);
craftingRecipes[_0x3224('0x6')](metal[_0x3224('0x5')], metal);
var needlesReq = [
    new CraftingRequirement(metal, 0x4),
    new CraftingRequirement(ribbon, 0x1)
];
needles = new CraftingItem(_0x3224('0xb'), 0x1e, 0xc8, rarity['RARE'], needlesReq);
craftingRecipes['set'](needles['name'], needles);
var sparklesReq = [
    new CraftingRequirement(needles, 0x2),
    new CraftingRequirement(ribbon, 0x2)
];
sparkles = new CraftingItem('Sparkles', 0x3c, 0x12c, rarity[_0x3224('0xc')], sparklesReq);
craftingRecipes['set'](sparkles[_0x3224('0x5')], sparkles);
var bronzeReq = [new CraftingRequirement(rock, 0x4)];
bronze = new CraftingItem('Bronze', 0x1e, 0xc8, rarity['COMMON'], bronzeReq);
craftingRecipes[_0x3224('0x6')](bronze[_0x3224('0x5')], bronze);
var silverReq = [
    new CraftingRequirement(bronze, 0x3),
    new CraftingRequirement(sparkles, 0x1)
];
silver = new CraftingItem(_0x3224('0xd'), 0x78, 0x12c, rarity[_0x3224('0x9')], silverReq);
craftingRecipes[_0x3224('0x6')](silver[_0x3224('0x5')], silver);
var goldReq = [
    new CraftingRequirement(silver, 0x2),
    new CraftingRequirement(sparkles, 0x2)
];
gold = new CraftingItem(_0x3224('0xe'), 0x168, 0x1f4, rarity['EPIC'], goldReq);
craftingRecipes[_0x3224('0x6')](gold[_0x3224('0x5')], gold);
var amethystReq = [new CraftingRequirement(quartz, 0xa)];
amethyst = new CraftingItem('Amethyst', 0x3c, 0x12c, rarity['COMMON'], amethystReq);
craftingRecipes[_0x3224('0x6')](amethyst[_0x3224('0x5')], amethyst);
var pendantReq = [
    new CraftingRequirement(amethyst, 0x7),
    new CraftingRequirement(silver, 0x2)
];
pendant = new CraftingItem(_0x3224('0xf'), 0xb4, 0x1f4, rarity[_0x3224('0x9')], pendantReq);
craftingRecipes[_0x3224('0x6')](pendant['name'], pendant);
var necklaceReq = [
    new CraftingRequirement(pendant, 0x3),
    new CraftingRequirement(gold, 0x2)
];
necklace = new CraftingItem(_0x3224('0x10'), 0x2f8, 0x1f4, rarity[_0x3224('0xc')], necklaceReq);
craftingRecipes[_0x3224('0x6')](necklace[_0x3224('0x5')], necklace);
var orbReq = [new CraftingRequirement(quartz, 0x14)];
orb = new CraftingItem(_0x3224('0x11'), 0x3c, 0x12c, rarity[_0x3224('0x8')], orbReq);
craftingRecipes[_0x3224('0x6')](orb[_0x3224('0x5')], orb);
var waterReq = [
    new CraftingRequirement(orb, 0x2),
    new CraftingRequirement(silver, 0x1)
];
water = new CraftingItem(_0x3224('0x12'), 0x168, 0x320, rarity[_0x3224('0x9')], waterReq);
craftingRecipes[_0x3224('0x6')](water[_0x3224('0x5')], water);
var fireReq = [
    new CraftingRequirement(orb, 0x6),
    new CraftingRequirement(gold, 0x1)
];
fire = new CraftingItem(_0x3224('0x13'), 0x2d0, 0x3e8, rarity[_0x3224('0xc')], fireReq);
craftingRecipes[_0x3224('0x6')](fire[_0x3224('0x5')], fire);
var waterstoneReq = [
    new CraftingRequirement(water, 0x2),
    new CraftingRequirement(ribbon, 0xa)
];
waterstone = new CraftingItem(_0x3224('0x14'), 0x2d0, 0x5dc, rarity[_0x3224('0x9')], waterstoneReq);
craftingRecipes['set'](waterstone['name'], waterstone);
var firestoneReq = [
    new CraftingRequirement(fire, 0x1),
    new CraftingRequirement(sparkles, 0x2)
];
firestone = new CraftingItem('Firestone', 0x2d0, 0x5dc, rarity[_0x3224('0xc')], firestoneReq);
craftingRecipes[_0x3224('0x6')](firestone['name'], firestone);
var elementstoneReq = [
    new CraftingRequirement(firestone, 0x1),
    new CraftingRequirement(waterstone, 0x1)
];
elementstone = new CraftingItem(_0x3224('0x15'), 0x5a0, 0x1388, rarity[_0x3224('0x16')], elementstoneReq);
craftingRecipes[_0x3224('0x6')](elementstone[_0x3224('0x5')], elementstone);
var artifactReq = [
    new CraftingRequirement(elementstone, 0x1),
    new CraftingRequirement(necklace, 0x1)
];
artifact = new CraftingItem('Artifact', 0x10e0, 0x2710, rarity[_0x3224('0x16')], artifactReq);
craftingRecipes['set'](artifact[_0x3224('0x5')], artifact);