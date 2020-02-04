var _0xce52 = [
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
    'String',
    'COMMON',
    'Ribbon',
    'RARE',
    'Metal',
    'Needles',
    'Sparkles',
    'EPIC',
    'Bronze',
    'Silver',
    'Amethyst',
    'Pendant'
];
(function (_0x56bfe6, _0x3a9aab) {
    var _0x1dc96e = function (_0x3a522d) {
        while (--_0x3a522d) {
            _0x56bfe6['push'](_0x56bfe6['shift']());
        }
    };
    _0x1dc96e(++_0x3a9aab);
}(_0xce52, 0xbd));
var _0x29c6 = function (_0x3bb0f1, _0x123337) {
    _0x3bb0f1 = _0x3bb0f1 - 0x0;
    var _0x36c2b9 = _0xce52[_0x3bb0f1];
    return _0x36c2b9;
};
cotton = new CraftingItem(_0x29c6('0x0'), 0x0, 0x0, rarity[_0x29c6('0x1')]);
log = new CraftingItem(_0x29c6('0x2'), 0x0, 0x0, rarity[_0x29c6('0x1')]);
rock = new CraftingItem(_0x29c6('0x3'), 0x0, 0x0, rarity['RAW']);
quartz = new CraftingItem(_0x29c6('0x4'), 0x0, 0x0, rarity[_0x29c6('0x1')]);
craftingRecipes[_0x29c6('0x5')](cotton[_0x29c6('0x6')], cotton);
craftingRecipes[_0x29c6('0x5')](log['name'], log);
craftingRecipes[_0x29c6('0x5')](rock['name'], rock);
craftingRecipes[_0x29c6('0x5')](quartz[_0x29c6('0x6')], quartz);
var stringReq = [new CraftingRequirement(cotton, 0x3)];
string = new CraftingItem(_0x29c6('0x7'), 0x5, 0x32, rarity[_0x29c6('0x8')], stringReq);
craftingRecipes[_0x29c6('0x5')](string[_0x29c6('0x6')], string);
var woodReq = [new CraftingRequirement(log, 0x3)];
wood = new CraftingItem('Wood', 0x5, 0x32, rarity[_0x29c6('0x8')], woodReq);
craftingRecipes[_0x29c6('0x5')](wood[_0x29c6('0x6')], wood);
var ribbonReq = [
    new CraftingRequirement(string, 0x2),
    new CraftingRequirement(wood, 0x2)
];
ribbon = new CraftingItem(_0x29c6('0x9'), 0xf, 0x64, rarity[_0x29c6('0xa')], ribbonReq);
craftingRecipes[_0x29c6('0x5')](ribbon[_0x29c6('0x6')], ribbon);
var metalReq = [new CraftingRequirement(rock, 0x3)];
metal = new CraftingItem(_0x29c6('0xb'), 0xf, 0x64, rarity[_0x29c6('0x8')], metalReq);
craftingRecipes[_0x29c6('0x5')](metal[_0x29c6('0x6')], metal);
var needlesReq = [
    new CraftingRequirement(metal, 0x4),
    new CraftingRequirement(ribbon, 0x1)
];
needles = new CraftingItem(_0x29c6('0xc'), 0x1e, 0xc8, rarity[_0x29c6('0xa')], needlesReq);
craftingRecipes[_0x29c6('0x5')](needles['name'], needles);
var sparklesReq = [
    new CraftingRequirement(needles, 0x2),
    new CraftingRequirement(ribbon, 0x2)
];
sparkles = new CraftingItem(_0x29c6('0xd'), 0x3c, 0x12c, rarity[_0x29c6('0xe')], sparklesReq);
craftingRecipes[_0x29c6('0x5')](sparkles[_0x29c6('0x6')], sparkles);
var bronzeReq = [new CraftingRequirement(rock, 0x4)];
bronze = new CraftingItem(_0x29c6('0xf'), 0x1e, 0xc8, rarity['COMMON'], bronzeReq);
craftingRecipes['set'](bronze[_0x29c6('0x6')], bronze);
var silverReq = [
    new CraftingRequirement(bronze, 0x3),
    new CraftingRequirement(sparkles, 0x1)
];
silver = new CraftingItem(_0x29c6('0x10'), 0x78, 0x12c, rarity[_0x29c6('0xa')], silverReq);
craftingRecipes[_0x29c6('0x5')](silver['name'], silver);
var goldReq = [
    new CraftingRequirement(silver, 0x2),
    new CraftingRequirement(sparkles, 0x2)
];
gold = new CraftingItem('Gold', 0x168, 0x1f4, rarity[_0x29c6('0xe')], goldReq);
craftingRecipes['set'](gold[_0x29c6('0x6')], gold);
var amethystReq = [new CraftingRequirement(quartz, 0xa)];
amethyst = new CraftingItem(_0x29c6('0x11'), 0x3c, 0x12c, rarity[_0x29c6('0x8')], amethystReq);
craftingRecipes[_0x29c6('0x5')](amethyst[_0x29c6('0x6')], amethyst);
var pendantReq = [
    new CraftingRequirement(amethyst, 0x7),
    new CraftingRequirement(silver, 0x2)
];
pendant = new CraftingItem(_0x29c6('0x12'), 0xb4, 0x1f4, rarity[_0x29c6('0xa')], pendantReq);
craftingRecipes[_0x29c6('0x5')](pendant[_0x29c6('0x6')], pendant);
var necklaceReq = [
    new CraftingRequirement(pendant, 0x3),
    new CraftingRequirement(gold, 0x2)
];
necklace = new CraftingItem('Necklace', 0x2f8, 0x1f4, rarity[_0x29c6('0xe')], necklaceReq);
craftingRecipes['set'](necklace[_0x29c6('0x6')], necklace);
var orbReq = [new CraftingRequirement(quartz, 0x14)];
orb = new CraftingItem(_0x29c6('0x13'), 0x3c, 0x12c, rarity['COMMON'], orbReq);
craftingRecipes[_0x29c6('0x5')](orb[_0x29c6('0x6')], orb);
var waterReq = [
    new CraftingRequirement(orb, 0x2),
    new CraftingRequirement(silver, 0x1)
];
water = new CraftingItem(_0x29c6('0x14'), 0x168, 0x320, rarity['RARE'], waterReq);
craftingRecipes[_0x29c6('0x5')](water['name'], water);
var fireReq = [
    new CraftingRequirement(orb, 0x6),
    new CraftingRequirement(gold, 0x1)
];
fire = new CraftingItem(_0x29c6('0x15'), 0x2d0, 0x3e8, rarity['EPIC'], fireReq);
craftingRecipes['set'](fire[_0x29c6('0x6')], fire);
var waterstoneReq = [
    new CraftingRequirement(water, 0x2),
    new CraftingRequirement(ribbon, 0xa)
];
waterstone = new CraftingItem(_0x29c6('0x16'), 0x2d0, 0x5dc, rarity[_0x29c6('0xa')], waterstoneReq);
craftingRecipes[_0x29c6('0x5')](waterstone[_0x29c6('0x6')], waterstone);
var firestoneReq = [
    new CraftingRequirement(fire, 0x1),
    new CraftingRequirement(sparkles, 0x2)
];
firestone = new CraftingItem(_0x29c6('0x17'), 0x2d0, 0x5dc, rarity['EPIC'], firestoneReq);
craftingRecipes[_0x29c6('0x5')](firestone[_0x29c6('0x6')], firestone);
var elementstoneReq = [
    new CraftingRequirement(firestone, 0x1),
    new CraftingRequirement(waterstone, 0x1)
];
elementstone = new CraftingItem(_0x29c6('0x18'), 0x5a0, 0x1388, rarity['LEGENDARY'], elementstoneReq);
craftingRecipes[_0x29c6('0x5')](elementstone['name'], elementstone);
var artifactReq = [
    new CraftingRequirement(elementstone, 0x1),
    new CraftingRequirement(necklace, 0x1)
];
artifact = new CraftingItem('Artifact', 0x10e0, 0x2710, rarity[_0x29c6('0x19')], artifactReq);
craftingRecipes[_0x29c6('0x5')](artifact[_0x29c6('0x6')], artifact);