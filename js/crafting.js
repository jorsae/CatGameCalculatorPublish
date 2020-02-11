var _0xd46a = [
    'Artifact',
    'LEGENDARY',
    'Cotton',
    'Log',
    'RAW',
    'Rock',
    'name',
    'set',
    'COMMON',
    'Wood',
    'Ribbon',
    'RARE',
    'Metal',
    'Sparkles',
    'EPIC',
    'Bronze',
    'Gold',
    'Amethyst',
    'Pendant',
    'Necklace',
    'Orb',
    'Water',
    'Fire',
    'Waterstone',
    'Elementstone'
];
(function (_0x896a51, _0x2a9c09) {
    var _0x1aa01a = function (_0x594e5d) {
        while (--_0x594e5d) {
            _0x896a51['push'](_0x896a51['shift']());
        }
    };
    _0x1aa01a(++_0x2a9c09);
}(_0xd46a, 0xb1));
var _0x4c14 = function (_0x7fc2c8, _0x31c8e1) {
    _0x7fc2c8 = _0x7fc2c8 - 0x0;
    var _0x1d02ab = _0xd46a[_0x7fc2c8];
    return _0x1d02ab;
};
cotton = new CraftingItem(_0x4c14('0x0'), 0x0, 0x0, rarity['RAW'], 0x1);
log = new CraftingItem(_0x4c14('0x1'), 0x0, 0x0, rarity[_0x4c14('0x2')], 0x2);
rock = new CraftingItem(_0x4c14('0x3'), 0x0, 0x0, rarity[_0x4c14('0x2')], 0x3);
quartz = new CraftingItem('Quartz', 0x0, 0x0, rarity[_0x4c14('0x2')], 0x4);
craftingRecipes['set'](cotton[_0x4c14('0x4')], cotton);
craftingRecipes['set'](log[_0x4c14('0x4')], log);
craftingRecipes['set'](rock[_0x4c14('0x4')], rock);
craftingRecipes[_0x4c14('0x5')](quartz[_0x4c14('0x4')], quartz);
var stringReq = [new CraftingRequirement(cotton, 0x3)];
string = new CraftingItem('String', 0x5, 0x32, rarity[_0x4c14('0x6')], 0x5, stringReq);
craftingRecipes[_0x4c14('0x5')](string[_0x4c14('0x4')], string);
var woodReq = [new CraftingRequirement(log, 0x3)];
wood = new CraftingItem(_0x4c14('0x7'), 0x5, 0x32, rarity[_0x4c14('0x6')], 0x6, woodReq);
craftingRecipes[_0x4c14('0x5')](wood[_0x4c14('0x4')], wood);
var ribbonReq = [
    new CraftingRequirement(string, 0x2),
    new CraftingRequirement(wood, 0x2)
];
ribbon = new CraftingItem(_0x4c14('0x8'), 0xf, 0x64, rarity[_0x4c14('0x9')], 0x7, ribbonReq);
craftingRecipes[_0x4c14('0x5')](ribbon['name'], ribbon);
var metalReq = [new CraftingRequirement(rock, 0x3)];
metal = new CraftingItem(_0x4c14('0xa'), 0xf, 0x64, rarity[_0x4c14('0x6')], 0x8, metalReq);
craftingRecipes[_0x4c14('0x5')](metal['name'], metal);
var needlesReq = [
    new CraftingRequirement(metal, 0x4),
    new CraftingRequirement(ribbon, 0x1)
];
needles = new CraftingItem('Needles', 0x1e, 0xc8, rarity[_0x4c14('0x9')], 0x9, needlesReq);
craftingRecipes[_0x4c14('0x5')](needles[_0x4c14('0x4')], needles);
var sparklesReq = [
    new CraftingRequirement(needles, 0x2),
    new CraftingRequirement(ribbon, 0x2)
];
sparkles = new CraftingItem(_0x4c14('0xb'), 0x3c, 0x12c, rarity[_0x4c14('0xc')], 0xa, sparklesReq);
craftingRecipes['set'](sparkles['name'], sparkles);
var bronzeReq = [new CraftingRequirement(rock, 0x4)];
bronze = new CraftingItem(_0x4c14('0xd'), 0x1e, 0xc8, rarity['COMMON'], 0xb, bronzeReq);
craftingRecipes[_0x4c14('0x5')](bronze[_0x4c14('0x4')], bronze);
var silverReq = [
    new CraftingRequirement(bronze, 0x3),
    new CraftingRequirement(sparkles, 0x1)
];
silver = new CraftingItem('Silver', 0x78, 0x12c, rarity[_0x4c14('0x9')], 0xc, silverReq);
craftingRecipes[_0x4c14('0x5')](silver[_0x4c14('0x4')], silver);
var goldReq = [
    new CraftingRequirement(silver, 0x2),
    new CraftingRequirement(sparkles, 0x2)
];
gold = new CraftingItem(_0x4c14('0xe'), 0x168, 0x1f4, rarity[_0x4c14('0xc')], 0xd, goldReq);
craftingRecipes[_0x4c14('0x5')](gold[_0x4c14('0x4')], gold);
var amethystReq = [new CraftingRequirement(quartz, 0xa)];
amethyst = new CraftingItem(_0x4c14('0xf'), 0x3c, 0x12c, rarity[_0x4c14('0x6')], 0xe, amethystReq);
craftingRecipes[_0x4c14('0x5')](amethyst[_0x4c14('0x4')], amethyst);
var pendantReq = [
    new CraftingRequirement(amethyst, 0x7),
    new CraftingRequirement(silver, 0x2)
];
pendant = new CraftingItem(_0x4c14('0x10'), 0xb4, 0x1f4, rarity[_0x4c14('0x9')], 0xf, pendantReq);
craftingRecipes['set'](pendant[_0x4c14('0x4')], pendant);
var necklaceReq = [
    new CraftingRequirement(pendant, 0x3),
    new CraftingRequirement(gold, 0x2)
];
necklace = new CraftingItem(_0x4c14('0x11'), 0x2f8, 0x1f4, rarity[_0x4c14('0xc')], 0x10, necklaceReq);
craftingRecipes[_0x4c14('0x5')](necklace['name'], necklace);
var orbReq = [new CraftingRequirement(quartz, 0x14)];
orb = new CraftingItem(_0x4c14('0x12'), 0x3c, 0x12c, rarity[_0x4c14('0x6')], 0x11, orbReq);
craftingRecipes['set'](orb[_0x4c14('0x4')], orb);
var waterReq = [
    new CraftingRequirement(orb, 0x2),
    new CraftingRequirement(silver, 0x1)
];
water = new CraftingItem(_0x4c14('0x13'), 0x168, 0x320, rarity[_0x4c14('0x9')], 0x12, waterReq);
craftingRecipes[_0x4c14('0x5')](water[_0x4c14('0x4')], water);
var fireReq = [
    new CraftingRequirement(orb, 0x6),
    new CraftingRequirement(gold, 0x1)
];
fire = new CraftingItem(_0x4c14('0x14'), 0x2d0, 0x3e8, rarity[_0x4c14('0xc')], 0x13, fireReq);
craftingRecipes[_0x4c14('0x5')](fire[_0x4c14('0x4')], fire);
var waterstoneReq = [
    new CraftingRequirement(water, 0x2),
    new CraftingRequirement(ribbon, 0xa)
];
waterstone = new CraftingItem(_0x4c14('0x15'), 0x2d0, 0x5dc, rarity[_0x4c14('0x9')], 0x14, waterstoneReq);
craftingRecipes[_0x4c14('0x5')](waterstone[_0x4c14('0x4')], waterstone);
var firestoneReq = [
    new CraftingRequirement(fire, 0x1),
    new CraftingRequirement(sparkles, 0x2)
];
firestone = new CraftingItem('Firestone', 0x2d0, 0x5dc, rarity['EPIC'], 0x15, firestoneReq);
craftingRecipes['set'](firestone[_0x4c14('0x4')], firestone);
var elementstoneReq = [
    new CraftingRequirement(firestone, 0x1),
    new CraftingRequirement(waterstone, 0x1)
];
elementstone = new CraftingItem(_0x4c14('0x16'), 0x5a0, 0x1388, rarity['LEGENDARY'], 0x16, elementstoneReq);
craftingRecipes[_0x4c14('0x5')](elementstone[_0x4c14('0x4')], elementstone);
var artifactReq = [
    new CraftingRequirement(elementstone, 0x1),
    new CraftingRequirement(necklace, 0x1)
];
artifact = new CraftingItem(_0x4c14('0x17'), 0x10e0, 0x2710, rarity[_0x4c14('0x18')], 0x17, artifactReq);
craftingRecipes[_0x4c14('0x5')](artifact[_0x4c14('0x4')], artifact);