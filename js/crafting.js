var _0x1fd2 = [
    'Amethyst',
    'Pendant',
    'Necklace',
    'Orb',
    'Water',
    'Fire',
    'Waterstone',
    'Elementstone',
    'LEGENDARY',
    'Artifact',
    'RAW',
    'Rock',
    'Quartz',
    'set',
    'name',
    'String',
    'COMMON',
    'Ribbon',
    'Needles',
    'RARE',
    'EPIC',
    'Bronze',
    'Silver',
    'Gold'
];
(function (_0x27c7b9, _0x189dfc) {
    var _0x2626bc = function (_0x1de5bc) {
        while (--_0x1de5bc) {
            _0x27c7b9['push'](_0x27c7b9['shift']());
        }
    };
    _0x2626bc(++_0x189dfc);
}(_0x1fd2, 0x1a2));
var _0x5c92 = function (_0x2d4fd5, _0x120b02) {
    _0x2d4fd5 = _0x2d4fd5 - 0x0;
    var _0x5817b9 = _0x1fd2[_0x2d4fd5];
    return _0x5817b9;
};
cotton = new CraftingItem('Cotton', 0x0, 0x0, rarity[_0x5c92('0x0')], 0x1);
log = new CraftingItem('Log', 0x0, 0x0, rarity['RAW'], 0x2);
rock = new CraftingItem(_0x5c92('0x1'), 0x0, 0x0, rarity[_0x5c92('0x0')], 0x3);
quartz = new CraftingItem(_0x5c92('0x2'), 0x0, 0x0, rarity[_0x5c92('0x0')], 0x4);
craftingRecipes[_0x5c92('0x3')](cotton[_0x5c92('0x4')], cotton);
craftingRecipes[_0x5c92('0x3')](log[_0x5c92('0x4')], log);
craftingRecipes['set'](rock[_0x5c92('0x4')], rock);
craftingRecipes[_0x5c92('0x3')](quartz['name'], quartz);
var stringReq = [new CraftingRequirement(cotton, 0x3)];
string = new CraftingItem(_0x5c92('0x5'), 0x5, 0x32, rarity[_0x5c92('0x6')], 0x5, stringReq);
craftingRecipes[_0x5c92('0x3')](string[_0x5c92('0x4')], string);
var woodReq = [new CraftingRequirement(log, 0x3)];
wood = new CraftingItem('Wood', 0x5, 0x32, rarity[_0x5c92('0x6')], 0x6, woodReq);
craftingRecipes['set'](wood[_0x5c92('0x4')], wood);
var ribbonReq = [
    new CraftingRequirement(string, 0x2),
    new CraftingRequirement(wood, 0x2)
];
ribbon = new CraftingItem(_0x5c92('0x7'), 0xf, 0x64, rarity['RARE'], 0x7, ribbonReq);
craftingRecipes['set'](ribbon[_0x5c92('0x4')], ribbon);
var metalReq = [new CraftingRequirement(rock, 0x3)];
metal = new CraftingItem('Metal', 0xf, 0x64, rarity[_0x5c92('0x6')], 0x8, metalReq);
craftingRecipes[_0x5c92('0x3')](metal[_0x5c92('0x4')], metal);
var needlesReq = [
    new CraftingRequirement(metal, 0x4),
    new CraftingRequirement(ribbon, 0x1)
];
needles = new CraftingItem(_0x5c92('0x8'), 0x1e, 0xc8, rarity[_0x5c92('0x9')], 0x9, needlesReq);
craftingRecipes[_0x5c92('0x3')](needles[_0x5c92('0x4')], needles);
var sparklesReq = [
    new CraftingRequirement(needles, 0x2),
    new CraftingRequirement(ribbon, 0x2)
];
sparkles = new CraftingItem('Sparkles', 0x3c, 0x12c, rarity[_0x5c92('0xa')], 0xa, sparklesReq);
craftingRecipes[_0x5c92('0x3')](sparkles[_0x5c92('0x4')], sparkles);
var bronzeReq = [new CraftingRequirement(rock, 0x4)];
bronze = new CraftingItem(_0x5c92('0xb'), 0x1e, 0xc8, rarity[_0x5c92('0x6')], 0xb, bronzeReq);
craftingRecipes[_0x5c92('0x3')](bronze[_0x5c92('0x4')], bronze);
var silverReq = [
    new CraftingRequirement(bronze, 0x3),
    new CraftingRequirement(sparkles, 0x1)
];
silver = new CraftingItem(_0x5c92('0xc'), 0x78, 0x12c, rarity[_0x5c92('0x9')], 0xc, silverReq);
craftingRecipes[_0x5c92('0x3')](silver[_0x5c92('0x4')], silver);
var goldReq = [
    new CraftingRequirement(silver, 0x2),
    new CraftingRequirement(sparkles, 0x2)
];
gold = new CraftingItem(_0x5c92('0xd'), 0x168, 0x1f4, rarity[_0x5c92('0xa')], 0xd, goldReq);
craftingRecipes[_0x5c92('0x3')](gold[_0x5c92('0x4')], gold);
var amethystReq = [new CraftingRequirement(quartz, 0xa)];
amethyst = new CraftingItem(_0x5c92('0xe'), 0x3c, 0x12c, rarity['COMMON'], 0xe, amethystReq);
craftingRecipes[_0x5c92('0x3')](amethyst[_0x5c92('0x4')], amethyst);
var pendantReq = [
    new CraftingRequirement(amethyst, 0x7),
    new CraftingRequirement(silver, 0x2)
];
pendant = new CraftingItem(_0x5c92('0xf'), 0xb4, 0x1f4, rarity[_0x5c92('0x9')], 0xf, pendantReq);
craftingRecipes[_0x5c92('0x3')](pendant[_0x5c92('0x4')], pendant);
var necklaceReq = [
    new CraftingRequirement(pendant, 0x3),
    new CraftingRequirement(gold, 0x2)
];
necklace = new CraftingItem(_0x5c92('0x10'), 0x2f8, 0x1f4, rarity['EPIC'], 0x10, necklaceReq);
craftingRecipes[_0x5c92('0x3')](necklace['name'], necklace);
var orbReq = [new CraftingRequirement(quartz, 0x14)];
orb = new CraftingItem(_0x5c92('0x11'), 0x3c, 0x12c, rarity[_0x5c92('0x6')], 0x11, orbReq);
craftingRecipes['set'](orb[_0x5c92('0x4')], orb);
var waterReq = [
    new CraftingRequirement(orb, 0x2),
    new CraftingRequirement(silver, 0x1)
];
water = new CraftingItem(_0x5c92('0x12'), 0x168, 0x320, rarity['RARE'], 0x12, waterReq);
craftingRecipes[_0x5c92('0x3')](water[_0x5c92('0x4')], water);
var fireReq = [
    new CraftingRequirement(orb, 0x6),
    new CraftingRequirement(gold, 0x1)
];
fire = new CraftingItem(_0x5c92('0x13'), 0x2d0, 0x3e8, rarity[_0x5c92('0xa')], 0x13, fireReq);
craftingRecipes[_0x5c92('0x3')](fire[_0x5c92('0x4')], fire);
var waterstoneReq = [
    new CraftingRequirement(water, 0x2),
    new CraftingRequirement(ribbon, 0xa)
];
waterstone = new CraftingItem(_0x5c92('0x14'), 0x2d0, 0x5dc, rarity[_0x5c92('0x9')], 0x14, waterstoneReq);
craftingRecipes[_0x5c92('0x3')](waterstone[_0x5c92('0x4')], waterstone);
var firestoneReq = [
    new CraftingRequirement(fire, 0x1),
    new CraftingRequirement(sparkles, 0x2)
];
firestone = new CraftingItem('Firestone', 0x2d0, 0x5dc, rarity['EPIC'], 0x15, firestoneReq);
craftingRecipes[_0x5c92('0x3')](firestone[_0x5c92('0x4')], firestone);
var elementstoneReq = [
    new CraftingRequirement(firestone, 0x1),
    new CraftingRequirement(waterstone, 0x1)
];
elementstone = new CraftingItem(_0x5c92('0x15'), 0x5a0, 0x1388, rarity[_0x5c92('0x16')], 0x16, elementstoneReq);
craftingRecipes[_0x5c92('0x3')](elementstone['name'], elementstone);
var artifactReq = [
    new CraftingRequirement(elementstone, 0x1),
    new CraftingRequirement(necklace, 0x1)
];
artifact = new CraftingItem(_0x5c92('0x17'), 0x10e0, 0x2710, rarity[_0x5c92('0x16')], 0x17, artifactReq);
craftingRecipes['set'](artifact['name'], artifact);