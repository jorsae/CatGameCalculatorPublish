var _0x5e64 = [
    'Ribbon',
    'RARE',
    'Metal',
    'Needles',
    'EPIC',
    'Bronze',
    'Silver',
    'Gold',
    'Amethyst',
    'Orb',
    'Water',
    'Fire',
    'Waterstone',
    'Firestone',
    'Elementstone',
    'LEGENDARY',
    'Artifact',
    'Log',
    'Rock',
    'RAW',
    'Quartz',
    'set',
    'name',
    'String',
    'COMMON',
    'Wood'
];
(function (_0x5db522, _0x143eaa) {
    var _0x50b579 = function (_0x1a4950) {
        while (--_0x1a4950) {
            _0x5db522['push'](_0x5db522['shift']());
        }
    };
    _0x50b579(++_0x143eaa);
}(_0x5e64, 0x149));
var _0x4b0f = function (_0xe739e7, _0x2689f6) {
    _0xe739e7 = _0xe739e7 - 0x0;
    var _0x2ed6b6 = _0x5e64[_0xe739e7];
    return _0x2ed6b6;
};
cotton = new CraftingItem('Cotton', 0x0, 0x0, rarity['RAW']);
log = new CraftingItem(_0x4b0f('0x0'), 0x0, 0x0, rarity['RAW']);
rock = new CraftingItem(_0x4b0f('0x1'), 0x0, 0x0, rarity[_0x4b0f('0x2')]);
quartz = new CraftingItem(_0x4b0f('0x3'), 0x0, 0x0, rarity[_0x4b0f('0x2')]);
craftingRecipes[_0x4b0f('0x4')](cotton[_0x4b0f('0x5')], cotton);
craftingRecipes[_0x4b0f('0x4')](log[_0x4b0f('0x5')], log);
craftingRecipes['set'](rock[_0x4b0f('0x5')], rock);
craftingRecipes[_0x4b0f('0x4')](quartz[_0x4b0f('0x5')], quartz);
var stringReq = [new CraftingRequirement(cotton, 0x3)];
string = new CraftingItem(_0x4b0f('0x6'), 0x5, 0x32, rarity[_0x4b0f('0x7')], stringReq);
craftingRecipes['set'](string[_0x4b0f('0x5')], string);
var woodReq = [new CraftingRequirement(log, 0x3)];
wood = new CraftingItem(_0x4b0f('0x8'), 0x5, 0x32, rarity[_0x4b0f('0x7')], woodReq);
craftingRecipes[_0x4b0f('0x4')](wood[_0x4b0f('0x5')], wood);
var ribbonReq = [
    new CraftingRequirement(string, 0x2),
    new CraftingRequirement(wood, 0x2)
];
ribbon = new CraftingItem(_0x4b0f('0x9'), 0xf, 0x64, rarity[_0x4b0f('0xa')], ribbonReq);
craftingRecipes[_0x4b0f('0x4')](ribbon[_0x4b0f('0x5')], ribbon);
var metalReq = [new CraftingRequirement(rock, 0x3)];
metal = new CraftingItem(_0x4b0f('0xb'), 0xf, 0x64, rarity[_0x4b0f('0x7')], metalReq);
craftingRecipes[_0x4b0f('0x4')](metal[_0x4b0f('0x5')], metal);
var needlesReq = [
    new CraftingRequirement(metal, 0x4),
    new CraftingRequirement(ribbon, 0x1)
];
needles = new CraftingItem(_0x4b0f('0xc'), 0x1e, 0xc8, rarity[_0x4b0f('0xa')], needlesReq);
craftingRecipes[_0x4b0f('0x4')](needles['name'], needles);
var sparklesReq = [
    new CraftingRequirement(needles, 0x2),
    new CraftingRequirement(ribbon, 0x2)
];
sparkles = new CraftingItem('Sparkles', 0x3c, 0x12c, rarity[_0x4b0f('0xd')], sparklesReq);
craftingRecipes['set'](sparkles['name'], sparkles);
var bronzeReq = [new CraftingRequirement(rock, 0x4)];
bronze = new CraftingItem(_0x4b0f('0xe'), 0x1e, 0xc8, rarity[_0x4b0f('0x7')], bronzeReq);
craftingRecipes[_0x4b0f('0x4')](bronze[_0x4b0f('0x5')], bronze);
var silverReq = [
    new CraftingRequirement(bronze, 0x3),
    new CraftingRequirement(sparkles, 0x1)
];
silver = new CraftingItem(_0x4b0f('0xf'), 0x78, 0x12c, rarity[_0x4b0f('0xa')], silverReq);
craftingRecipes[_0x4b0f('0x4')](silver[_0x4b0f('0x5')], silver);
var goldReq = [
    new CraftingRequirement(silver, 0x2),
    new CraftingRequirement(sparkles, 0x2)
];
gold = new CraftingItem(_0x4b0f('0x10'), 0x168, 0x1f4, rarity[_0x4b0f('0xd')], goldReq);
craftingRecipes[_0x4b0f('0x4')](gold[_0x4b0f('0x5')], gold);
var amethystReq = [new CraftingRequirement(quartz, 0xa)];
amethyst = new CraftingItem(_0x4b0f('0x11'), 0x3c, 0x12c, rarity[_0x4b0f('0x7')], amethystReq);
craftingRecipes[_0x4b0f('0x4')](amethyst['name'], amethyst);
var pendantReq = [
    new CraftingRequirement(amethyst, 0x7),
    new CraftingRequirement(silver, 0x2)
];
pendant = new CraftingItem('Pendant', 0xb4, 0x1f4, rarity[_0x4b0f('0xa')], pendantReq);
craftingRecipes[_0x4b0f('0x4')](pendant[_0x4b0f('0x5')], pendant);
var necklaceReq = [
    new CraftingRequirement(pendant, 0x3),
    new CraftingRequirement(gold, 0x2)
];
necklace = new CraftingItem('Necklace', 0x2f8, 0x1f4, rarity[_0x4b0f('0xd')], necklaceReq);
craftingRecipes[_0x4b0f('0x4')](necklace[_0x4b0f('0x5')], necklace);
var orbReq = [new CraftingRequirement(quartz, 0x14)];
orb = new CraftingItem(_0x4b0f('0x12'), 0x3c, 0x12c, rarity[_0x4b0f('0x7')], orbReq);
craftingRecipes[_0x4b0f('0x4')](orb[_0x4b0f('0x5')], orb);
var waterReq = [
    new CraftingRequirement(orb, 0x2),
    new CraftingRequirement(silver, 0x1)
];
water = new CraftingItem(_0x4b0f('0x13'), 0x168, 0x320, rarity[_0x4b0f('0xa')], waterReq);
craftingRecipes[_0x4b0f('0x4')](water[_0x4b0f('0x5')], water);
var fireReq = [
    new CraftingRequirement(orb, 0x6),
    new CraftingRequirement(gold, 0x1)
];
fire = new CraftingItem(_0x4b0f('0x14'), 0x2d0, 0x3e8, rarity[_0x4b0f('0xd')], fireReq);
craftingRecipes[_0x4b0f('0x4')](fire[_0x4b0f('0x5')], fire);
var waterstoneReq = [
    new CraftingRequirement(water, 0x2),
    new CraftingRequirement(ribbon, 0xa)
];
waterstone = new CraftingItem(_0x4b0f('0x15'), 0x2d0, 0x5dc, rarity['RARE'], waterstoneReq);
craftingRecipes[_0x4b0f('0x4')](waterstone[_0x4b0f('0x5')], waterstone);
var firestoneReq = [
    new CraftingRequirement(fire, 0x1),
    new CraftingRequirement(sparkles, 0x2)
];
firestone = new CraftingItem(_0x4b0f('0x16'), 0x2d0, 0x5dc, rarity['EPIC'], firestoneReq);
craftingRecipes[_0x4b0f('0x4')](firestone['name'], firestone);
var elementstoneReq = [
    new CraftingRequirement(firestone, 0x1),
    new CraftingRequirement(waterstone, 0x1)
];
elementstone = new CraftingItem(_0x4b0f('0x17'), 0x5a0, 0x1388, rarity[_0x4b0f('0x18')], elementstoneReq);
craftingRecipes[_0x4b0f('0x4')](elementstone[_0x4b0f('0x5')], elementstone);
var artifactReq = [
    new CraftingRequirement(elementstone, 0x1),
    new CraftingRequirement(necklace, 0x1)
];
artifact = new CraftingItem(_0x4b0f('0x19'), 0x10e0, 0x2710, rarity[_0x4b0f('0x18')], artifactReq);
craftingRecipes['set'](artifact[_0x4b0f('0x5')], artifact);