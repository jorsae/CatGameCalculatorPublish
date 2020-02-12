var _0x215e = [
    'RARE',
    'Sparkles',
    'EPIC',
    'Bronze',
    'Silver',
    'Gold',
    'Amethyst',
    'Pendant',
    'Necklace',
    'Orb',
    'Water',
    'Waterstone',
    'Firestone',
    'Artifact',
    'RAW',
    'Rock',
    'set',
    'name',
    'String',
    'COMMON',
    'Wood',
    'Ribbon',
    'Needles'
];
(function (_0x1a026c, _0x2492de) {
    var _0x2d8f05 = function (_0x4b81bb) {
        while (--_0x4b81bb) {
            _0x1a026c['push'](_0x1a026c['shift']());
        }
    };
    _0x2d8f05(++_0x2492de);
}(_0x215e, 0xf4));
var _0xe69e = function (_0x2fe81e, _0x1a98e2) {
    _0x2fe81e = _0x2fe81e - 0x0;
    var _0x1ed9cc = _0x215e[_0x2fe81e];
    return _0x1ed9cc;
};
cotton = new CraftingItem('Cotton', 0x0, 0x0, rarity[_0xe69e('0x0')], 0x1);
log = new CraftingItem('Log', 0x0, 0x0, rarity[_0xe69e('0x0')], 0x2);
rock = new CraftingItem(_0xe69e('0x1'), 0x0, 0x0, rarity[_0xe69e('0x0')], 0x3);
quartz = new CraftingItem('Quartz', 0x0, 0x0, rarity['RAW'], 0x4);
craftingRecipes[_0xe69e('0x2')](cotton[_0xe69e('0x3')], cotton);
craftingRecipes[_0xe69e('0x2')](log[_0xe69e('0x3')], log);
craftingRecipes[_0xe69e('0x2')](rock[_0xe69e('0x3')], rock);
craftingRecipes[_0xe69e('0x2')](quartz[_0xe69e('0x3')], quartz);
var stringReq = [new CraftingRequirement(cotton, 0x3)];
string = new CraftingItem(_0xe69e('0x4'), 0x5, 0x32, rarity[_0xe69e('0x5')], 0x5, stringReq);
craftingRecipes[_0xe69e('0x2')](string[_0xe69e('0x3')], string);
var woodReq = [new CraftingRequirement(log, 0x3)];
wood = new CraftingItem(_0xe69e('0x6'), 0x5, 0x32, rarity['COMMON'], 0x6, woodReq);
craftingRecipes['set'](wood['name'], wood);
var ribbonReq = [
    new CraftingRequirement(string, 0x2),
    new CraftingRequirement(wood, 0x2)
];
ribbon = new CraftingItem(_0xe69e('0x7'), 0xf, 0x64, rarity['RARE'], 0x7, ribbonReq);
craftingRecipes['set'](ribbon['name'], ribbon);
var metalReq = [new CraftingRequirement(rock, 0x3)];
metal = new CraftingItem('Metal', 0xf, 0x64, rarity[_0xe69e('0x5')], 0x8, metalReq);
craftingRecipes['set'](metal[_0xe69e('0x3')], metal);
var needlesReq = [
    new CraftingRequirement(metal, 0x4),
    new CraftingRequirement(ribbon, 0x1)
];
needles = new CraftingItem(_0xe69e('0x8'), 0x1e, 0xc8, rarity[_0xe69e('0x9')], 0x9, needlesReq);
craftingRecipes[_0xe69e('0x2')](needles[_0xe69e('0x3')], needles);
var sparklesReq = [
    new CraftingRequirement(needles, 0x2),
    new CraftingRequirement(ribbon, 0x2)
];
sparkles = new CraftingItem(_0xe69e('0xa'), 0x3c, 0x12c, rarity[_0xe69e('0xb')], 0xa, sparklesReq);
craftingRecipes[_0xe69e('0x2')](sparkles[_0xe69e('0x3')], sparkles);
var bronzeReq = [new CraftingRequirement(rock, 0x4)];
bronze = new CraftingItem(_0xe69e('0xc'), 0x1e, 0xc8, rarity[_0xe69e('0x5')], 0xb, bronzeReq);
craftingRecipes[_0xe69e('0x2')](bronze[_0xe69e('0x3')], bronze);
var silverReq = [
    new CraftingRequirement(bronze, 0x3),
    new CraftingRequirement(sparkles, 0x1)
];
silver = new CraftingItem(_0xe69e('0xd'), 0x78, 0x12c, rarity[_0xe69e('0x9')], 0xc, silverReq);
craftingRecipes[_0xe69e('0x2')](silver[_0xe69e('0x3')], silver);
var goldReq = [
    new CraftingRequirement(silver, 0x2),
    new CraftingRequirement(sparkles, 0x2)
];
gold = new CraftingItem(_0xe69e('0xe'), 0x168, 0x1f4, rarity[_0xe69e('0xb')], 0xd, goldReq);
craftingRecipes[_0xe69e('0x2')](gold[_0xe69e('0x3')], gold);
var amethystReq = [new CraftingRequirement(quartz, 0xa)];
amethyst = new CraftingItem(_0xe69e('0xf'), 0x3c, 0x12c, rarity[_0xe69e('0x5')], 0xe, amethystReq);
craftingRecipes[_0xe69e('0x2')](amethyst[_0xe69e('0x3')], amethyst);
var pendantReq = [
    new CraftingRequirement(amethyst, 0x7),
    new CraftingRequirement(silver, 0x2)
];
pendant = new CraftingItem(_0xe69e('0x10'), 0xb4, 0x1f4, rarity['RARE'], 0xf, pendantReq);
craftingRecipes[_0xe69e('0x2')](pendant[_0xe69e('0x3')], pendant);
var necklaceReq = [
    new CraftingRequirement(pendant, 0x3),
    new CraftingRequirement(gold, 0x2)
];
necklace = new CraftingItem(_0xe69e('0x11'), 0x2f8, 0x1f4, rarity[_0xe69e('0xb')], 0x10, necklaceReq);
craftingRecipes[_0xe69e('0x2')](necklace['name'], necklace);
var orbReq = [new CraftingRequirement(quartz, 0x14)];
orb = new CraftingItem(_0xe69e('0x12'), 0x3c, 0x12c, rarity[_0xe69e('0x5')], 0x11, orbReq);
craftingRecipes[_0xe69e('0x2')](orb['name'], orb);
var waterReq = [
    new CraftingRequirement(orb, 0x2),
    new CraftingRequirement(silver, 0x1)
];
water = new CraftingItem(_0xe69e('0x13'), 0x168, 0x320, rarity[_0xe69e('0x9')], 0x12, waterReq);
craftingRecipes['set'](water['name'], water);
var fireReq = [
    new CraftingRequirement(orb, 0x6),
    new CraftingRequirement(gold, 0x1)
];
fire = new CraftingItem('Fire', 0x2d0, 0x3e8, rarity[_0xe69e('0xb')], 0x13, fireReq);
craftingRecipes[_0xe69e('0x2')](fire['name'], fire);
var waterstoneReq = [
    new CraftingRequirement(water, 0x2),
    new CraftingRequirement(ribbon, 0xa)
];
waterstone = new CraftingItem(_0xe69e('0x14'), 0x2d0, 0x5dc, rarity[_0xe69e('0x9')], 0x14, waterstoneReq);
craftingRecipes['set'](waterstone[_0xe69e('0x3')], waterstone);
var firestoneReq = [
    new CraftingRequirement(fire, 0x1),
    new CraftingRequirement(sparkles, 0x2)
];
firestone = new CraftingItem(_0xe69e('0x15'), 0x2d0, 0x5dc, rarity[_0xe69e('0xb')], 0x15, firestoneReq);
craftingRecipes[_0xe69e('0x2')](firestone[_0xe69e('0x3')], firestone);
var elementstoneReq = [
    new CraftingRequirement(firestone, 0x1),
    new CraftingRequirement(waterstone, 0x1)
];
elementstone = new CraftingItem('Elementstone', 0x5a0, 0x1388, rarity['LEGENDARY'], 0x16, elementstoneReq);
craftingRecipes[_0xe69e('0x2')](elementstone[_0xe69e('0x3')], elementstone);
var artifactReq = [
    new CraftingRequirement(elementstone, 0x1),
    new CraftingRequirement(necklace, 0x1)
];
artifact = new CraftingItem(_0xe69e('0x16'), 0x10e0, 0x2710, rarity['LEGENDARY'], 0x17, artifactReq);
craftingRecipes[_0xe69e('0x2')](artifact['name'], artifact);