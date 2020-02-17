var _0x4ac1 = [
    'EPIC',
    'Silver',
    'Gold',
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
    'set',
    'name',
    'String',
    'Wood',
    'COMMON',
    'RARE',
    'Metal',
    'Needles'
];
(function (_0x44ed45, _0x413224) {
    var _0x2699a9 = function (_0x501e82) {
        while (--_0x501e82) {
            _0x44ed45['push'](_0x44ed45['shift']());
        }
    };
    _0x2699a9(++_0x413224);
}(_0x4ac1, 0x137));
var _0x3e24 = function (_0xedcaa5, _0x449a2f) {
    _0xedcaa5 = _0xedcaa5 - 0x0;
    var _0x1ed009 = _0x4ac1[_0xedcaa5];
    return _0x1ed009;
};
cotton = new CraftingItem(_0x3e24('0x0'), 0x0, 0x0, rarity[_0x3e24('0x1')], 0x1);
log = new CraftingItem(_0x3e24('0x2'), 0x0, 0x0, rarity[_0x3e24('0x1')], 0x2);
rock = new CraftingItem('Rock', 0x0, 0x0, rarity[_0x3e24('0x1')], 0x3);
quartz = new CraftingItem('Quartz', 0x0, 0x0, rarity[_0x3e24('0x1')], 0x4);
craftingRecipes[_0x3e24('0x3')](cotton[_0x3e24('0x4')], cotton);
craftingRecipes[_0x3e24('0x3')](log[_0x3e24('0x4')], log);
craftingRecipes['set'](rock['name'], rock);
craftingRecipes['set'](quartz[_0x3e24('0x4')], quartz);
var stringReq = [new CraftingRequirement(cotton, 0x3)];
string = new CraftingItem(_0x3e24('0x5'), 0x5, 0x32, rarity['COMMON'], 0x5, stringReq);
craftingRecipes[_0x3e24('0x3')](string[_0x3e24('0x4')], string);
var woodReq = [new CraftingRequirement(log, 0x3)];
wood = new CraftingItem(_0x3e24('0x6'), 0x5, 0x32, rarity[_0x3e24('0x7')], 0x6, woodReq);
craftingRecipes[_0x3e24('0x3')](wood['name'], wood);
var ribbonReq = [
    new CraftingRequirement(string, 0x2),
    new CraftingRequirement(wood, 0x2)
];
ribbon = new CraftingItem('Ribbon', 0xf, 0x64, rarity[_0x3e24('0x8')], 0x7, ribbonReq);
craftingRecipes[_0x3e24('0x3')](ribbon[_0x3e24('0x4')], ribbon);
var metalReq = [new CraftingRequirement(rock, 0x3)];
metal = new CraftingItem(_0x3e24('0x9'), 0xf, 0x64, rarity[_0x3e24('0x7')], 0x8, metalReq);
craftingRecipes['set'](metal[_0x3e24('0x4')], metal);
var needlesReq = [
    new CraftingRequirement(metal, 0x4),
    new CraftingRequirement(ribbon, 0x1)
];
needles = new CraftingItem(_0x3e24('0xa'), 0x1e, 0xc8, rarity['RARE'], 0x9, needlesReq);
craftingRecipes[_0x3e24('0x3')](needles['name'], needles);
var sparklesReq = [
    new CraftingRequirement(needles, 0x2),
    new CraftingRequirement(ribbon, 0x2)
];
sparkles = new CraftingItem('Sparkles', 0x3c, 0x12c, rarity[_0x3e24('0xb')], 0xa, sparklesReq);
craftingRecipes[_0x3e24('0x3')](sparkles[_0x3e24('0x4')], sparkles);
var bronzeReq = [new CraftingRequirement(rock, 0x4)];
bronze = new CraftingItem('Bronze', 0x1e, 0xc8, rarity[_0x3e24('0x7')], 0xb, bronzeReq);
craftingRecipes[_0x3e24('0x3')](bronze[_0x3e24('0x4')], bronze);
var silverReq = [
    new CraftingRequirement(bronze, 0x3),
    new CraftingRequirement(sparkles, 0x1)
];
silver = new CraftingItem(_0x3e24('0xc'), 0x78, 0x12c, rarity['RARE'], 0xc, silverReq);
craftingRecipes[_0x3e24('0x3')](silver[_0x3e24('0x4')], silver);
var goldReq = [
    new CraftingRequirement(silver, 0x2),
    new CraftingRequirement(sparkles, 0x2)
];
gold = new CraftingItem(_0x3e24('0xd'), 0x168, 0x1f4, rarity[_0x3e24('0xb')], 0xd, goldReq);
craftingRecipes[_0x3e24('0x3')](gold[_0x3e24('0x4')], gold);
var amethystReq = [new CraftingRequirement(quartz, 0xa)];
amethyst = new CraftingItem(_0x3e24('0xe'), 0x3c, 0x12c, rarity['COMMON'], 0xe, amethystReq);
craftingRecipes[_0x3e24('0x3')](amethyst[_0x3e24('0x4')], amethyst);
var pendantReq = [
    new CraftingRequirement(amethyst, 0x7),
    new CraftingRequirement(silver, 0x2)
];
pendant = new CraftingItem(_0x3e24('0xf'), 0xb4, 0x1f4, rarity['RARE'], 0xf, pendantReq);
craftingRecipes[_0x3e24('0x3')](pendant['name'], pendant);
var necklaceReq = [
    new CraftingRequirement(pendant, 0x3),
    new CraftingRequirement(gold, 0x2)
];
necklace = new CraftingItem('Necklace', 0x2f8, 0x1f4, rarity[_0x3e24('0xb')], 0x10, necklaceReq);
craftingRecipes[_0x3e24('0x3')](necklace[_0x3e24('0x4')], necklace);
var orbReq = [new CraftingRequirement(quartz, 0x14)];
orb = new CraftingItem(_0x3e24('0x10'), 0x3c, 0x12c, rarity[_0x3e24('0x7')], 0x11, orbReq);
craftingRecipes['set'](orb[_0x3e24('0x4')], orb);
var waterReq = [
    new CraftingRequirement(orb, 0x2),
    new CraftingRequirement(silver, 0x1)
];
water = new CraftingItem(_0x3e24('0x11'), 0x168, 0x320, rarity[_0x3e24('0x8')], 0x12, waterReq);
craftingRecipes[_0x3e24('0x3')](water[_0x3e24('0x4')], water);
var fireReq = [
    new CraftingRequirement(orb, 0x6),
    new CraftingRequirement(gold, 0x1)
];
fire = new CraftingItem(_0x3e24('0x12'), 0x2d0, 0x3e8, rarity['EPIC'], 0x13, fireReq);
craftingRecipes[_0x3e24('0x3')](fire[_0x3e24('0x4')], fire);
var waterstoneReq = [
    new CraftingRequirement(water, 0x2),
    new CraftingRequirement(ribbon, 0xa)
];
waterstone = new CraftingItem(_0x3e24('0x13'), 0x2d0, 0x5dc, rarity[_0x3e24('0x8')], 0x14, waterstoneReq);
craftingRecipes[_0x3e24('0x3')](waterstone['name'], waterstone);
var firestoneReq = [
    new CraftingRequirement(fire, 0x1),
    new CraftingRequirement(sparkles, 0x2)
];
firestone = new CraftingItem(_0x3e24('0x14'), 0x2d0, 0x5dc, rarity[_0x3e24('0xb')], 0x15, firestoneReq);
craftingRecipes['set'](firestone[_0x3e24('0x4')], firestone);
var elementstoneReq = [
    new CraftingRequirement(firestone, 0x1),
    new CraftingRequirement(waterstone, 0x1)
];
elementstone = new CraftingItem(_0x3e24('0x15'), 0x5a0, 0x1388, rarity[_0x3e24('0x16')], 0x16, elementstoneReq);
craftingRecipes['set'](elementstone[_0x3e24('0x4')], elementstone);
var artifactReq = [
    new CraftingRequirement(elementstone, 0x1),
    new CraftingRequirement(necklace, 0x1)
];
artifact = new CraftingItem('Artifact', 0x10e0, 0x2710, rarity[_0x3e24('0x16')], 0x17, artifactReq);
craftingRecipes[_0x3e24('0x3')](artifact[_0x3e24('0x4')], artifact);