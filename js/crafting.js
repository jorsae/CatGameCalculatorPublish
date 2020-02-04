var _0x16bb = [
    'Elementstone',
    'LEGENDARY',
    'Artifact',
    'RAW',
    'Log',
    'Rock',
    'Quartz',
    'set',
    'name',
    'Wood',
    'COMMON',
    'RARE',
    'Metal',
    'Needles',
    'Sparkles',
    'EPIC',
    'Bronze',
    'Gold',
    'Amethyst',
    'Pendant',
    'Orb',
    'Water',
    'Fire',
    'Waterstone'
];
(function (_0x303306, _0x1d1b50) {
    var _0x142462 = function (_0x15887d) {
        while (--_0x15887d) {
            _0x303306['push'](_0x303306['shift']());
        }
    };
    _0x142462(++_0x1d1b50);
}(_0x16bb, 0x1b3));
var _0x302f = function (_0x283066, _0x169068) {
    _0x283066 = _0x283066 - 0x0;
    var _0x209457 = _0x16bb[_0x283066];
    return _0x209457;
};
cotton = new CraftingItem('Cotton', 0x0, 0x0, rarity[_0x302f('0x0')]);
log = new CraftingItem(_0x302f('0x1'), 0x0, 0x0, rarity[_0x302f('0x0')]);
rock = new CraftingItem(_0x302f('0x2'), 0x0, 0x0, rarity[_0x302f('0x0')]);
quartz = new CraftingItem(_0x302f('0x3'), 0x0, 0x0, rarity[_0x302f('0x0')]);
craftingRecipes[_0x302f('0x4')](cotton[_0x302f('0x5')], cotton);
craftingRecipes[_0x302f('0x4')](log[_0x302f('0x5')], log);
craftingRecipes[_0x302f('0x4')](rock[_0x302f('0x5')], rock);
craftingRecipes[_0x302f('0x4')](quartz[_0x302f('0x5')], quartz);
var stringReq = [new CraftingRequirement(cotton, 0x3)];
string = new CraftingItem('String', 0x5, 0x32, rarity['COMMON'], stringReq);
craftingRecipes[_0x302f('0x4')](string['name'], string);
var woodReq = [new CraftingRequirement(log, 0x3)];
wood = new CraftingItem(_0x302f('0x6'), 0x5, 0x32, rarity[_0x302f('0x7')], woodReq);
craftingRecipes[_0x302f('0x4')](wood[_0x302f('0x5')], wood);
var ribbonReq = [
    new CraftingRequirement(string, 0x2),
    new CraftingRequirement(wood, 0x2)
];
ribbon = new CraftingItem('Ribbon', 0xf, 0x64, rarity[_0x302f('0x8')], ribbonReq);
craftingRecipes[_0x302f('0x4')](ribbon[_0x302f('0x5')], ribbon);
var metalReq = [new CraftingRequirement(rock, 0x3)];
metal = new CraftingItem(_0x302f('0x9'), 0xf, 0x64, rarity[_0x302f('0x7')], metalReq);
craftingRecipes[_0x302f('0x4')](metal[_0x302f('0x5')], metal);
var needlesReq = [
    new CraftingRequirement(metal, 0x4),
    new CraftingRequirement(ribbon, 0x1)
];
needles = new CraftingItem(_0x302f('0xa'), 0x1e, 0xc8, rarity['RARE'], needlesReq);
craftingRecipes[_0x302f('0x4')](needles[_0x302f('0x5')], needles);
var sparklesReq = [
    new CraftingRequirement(needles, 0x2),
    new CraftingRequirement(ribbon, 0x2)
];
sparkles = new CraftingItem(_0x302f('0xb'), 0x3c, 0x12c, rarity[_0x302f('0xc')], sparklesReq);
craftingRecipes[_0x302f('0x4')](sparkles['name'], sparkles);
var bronzeReq = [new CraftingRequirement(rock, 0x4)];
bronze = new CraftingItem(_0x302f('0xd'), 0x1e, 0xc8, rarity[_0x302f('0x7')], bronzeReq);
craftingRecipes[_0x302f('0x4')](bronze[_0x302f('0x5')], bronze);
var silverReq = [
    new CraftingRequirement(bronze, 0x3),
    new CraftingRequirement(sparkles, 0x1)
];
silver = new CraftingItem('Silver', 0x78, 0x12c, rarity[_0x302f('0x8')], silverReq);
craftingRecipes[_0x302f('0x4')](silver[_0x302f('0x5')], silver);
var goldReq = [
    new CraftingRequirement(silver, 0x2),
    new CraftingRequirement(sparkles, 0x2)
];
gold = new CraftingItem(_0x302f('0xe'), 0x168, 0x1f4, rarity[_0x302f('0xc')], goldReq);
craftingRecipes[_0x302f('0x4')](gold[_0x302f('0x5')], gold);
var amethystReq = [new CraftingRequirement(quartz, 0xa)];
amethyst = new CraftingItem(_0x302f('0xf'), 0x3c, 0x12c, rarity[_0x302f('0x7')], amethystReq);
craftingRecipes[_0x302f('0x4')](amethyst['name'], amethyst);
var pendantReq = [
    new CraftingRequirement(amethyst, 0x7),
    new CraftingRequirement(silver, 0x2)
];
pendant = new CraftingItem(_0x302f('0x10'), 0xb4, 0x1f4, rarity[_0x302f('0x8')], pendantReq);
craftingRecipes[_0x302f('0x4')](pendant['name'], pendant);
var necklaceReq = [
    new CraftingRequirement(pendant, 0x3),
    new CraftingRequirement(gold, 0x2)
];
necklace = new CraftingItem('Necklace', 0x2f8, 0x1f4, rarity[_0x302f('0xc')], necklaceReq);
craftingRecipes['set'](necklace['name'], necklace);
var orbReq = [new CraftingRequirement(quartz, 0x14)];
orb = new CraftingItem(_0x302f('0x11'), 0x3c, 0x12c, rarity[_0x302f('0x7')], orbReq);
craftingRecipes[_0x302f('0x4')](orb[_0x302f('0x5')], orb);
var waterReq = [
    new CraftingRequirement(orb, 0x2),
    new CraftingRequirement(silver, 0x1)
];
water = new CraftingItem(_0x302f('0x12'), 0x168, 0x320, rarity[_0x302f('0x8')], waterReq);
craftingRecipes[_0x302f('0x4')](water[_0x302f('0x5')], water);
var fireReq = [
    new CraftingRequirement(orb, 0x6),
    new CraftingRequirement(gold, 0x1)
];
fire = new CraftingItem(_0x302f('0x13'), 0x2d0, 0x3e8, rarity[_0x302f('0xc')], fireReq);
craftingRecipes[_0x302f('0x4')](fire[_0x302f('0x5')], fire);
var waterstoneReq = [
    new CraftingRequirement(water, 0x2),
    new CraftingRequirement(ribbon, 0xa)
];
waterstone = new CraftingItem(_0x302f('0x14'), 0x2d0, 0x5dc, rarity[_0x302f('0x8')], waterstoneReq);
craftingRecipes[_0x302f('0x4')](waterstone[_0x302f('0x5')], waterstone);
var firestoneReq = [
    new CraftingRequirement(fire, 0x1),
    new CraftingRequirement(sparkles, 0x2)
];
firestone = new CraftingItem('Firestone', 0x2d0, 0x5dc, rarity[_0x302f('0xc')], firestoneReq);
craftingRecipes[_0x302f('0x4')](firestone['name'], firestone);
var elementstoneReq = [
    new CraftingRequirement(firestone, 0x1),
    new CraftingRequirement(waterstone, 0x1)
];
elementstone = new CraftingItem(_0x302f('0x15'), 0x5a0, 0x1388, rarity[_0x302f('0x16')], elementstoneReq);
craftingRecipes[_0x302f('0x4')](elementstone[_0x302f('0x5')], elementstone);
var artifactReq = [
    new CraftingRequirement(elementstone, 0x1),
    new CraftingRequirement(necklace, 0x1)
];
artifact = new CraftingItem(_0x302f('0x17'), 0x10e0, 0x2710, rarity[_0x302f('0x16')], artifactReq);
craftingRecipes[_0x302f('0x4')](artifact[_0x302f('0x5')], artifact);