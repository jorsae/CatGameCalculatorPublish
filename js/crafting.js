var _0x78b0 = [
    'RAW',
    'Log',
    'Rock',
    'Quartz',
    'set',
    'name',
    'String',
    'COMMON',
    'RARE',
    'Metal',
    'Needles',
    'Sparkles',
    'EPIC',
    'Bronze',
    'Silver',
    'Gold',
    'Amethyst',
    'Waterstone',
    'Firestone',
    'LEGENDARY',
    'Artifact',
    'Cotton'
];
(function (_0x47558e, _0x437d88) {
    var _0x308856 = function (_0x3d2f7c) {
        while (--_0x3d2f7c) {
            _0x47558e['push'](_0x47558e['shift']());
        }
    };
    _0x308856(++_0x437d88);
}(_0x78b0, 0x1e3));
var _0x511b = function (_0x2de56d, _0xf289b7) {
    _0x2de56d = _0x2de56d - 0x0;
    var _0x1580b8 = _0x78b0[_0x2de56d];
    return _0x1580b8;
};
cotton = new CraftingItem(_0x511b('0x0'), 0x0, 0x0, rarity[_0x511b('0x1')], 0x1);
log = new CraftingItem(_0x511b('0x2'), 0x0, 0x0, rarity['RAW'], 0x2);
rock = new CraftingItem(_0x511b('0x3'), 0x0, 0x0, rarity[_0x511b('0x1')], 0x3);
quartz = new CraftingItem(_0x511b('0x4'), 0x0, 0x0, rarity[_0x511b('0x1')], 0x4);
craftingRecipes[_0x511b('0x5')](cotton[_0x511b('0x6')], cotton);
craftingRecipes[_0x511b('0x5')](log[_0x511b('0x6')], log);
craftingRecipes[_0x511b('0x5')](rock[_0x511b('0x6')], rock);
craftingRecipes['set'](quartz[_0x511b('0x6')], quartz);
var stringReq = [new CraftingRequirement(cotton, 0x3)];
string = new CraftingItem(_0x511b('0x7'), 0x5, 0x32, rarity[_0x511b('0x8')], 0x5, stringReq);
craftingRecipes['set'](string['name'], string);
var woodReq = [new CraftingRequirement(log, 0x3)];
wood = new CraftingItem('Wood', 0x5, 0x32, rarity[_0x511b('0x8')], 0x6, woodReq);
craftingRecipes['set'](wood[_0x511b('0x6')], wood);
var ribbonReq = [
    new CraftingRequirement(string, 0x2),
    new CraftingRequirement(wood, 0x2)
];
ribbon = new CraftingItem('Ribbon', 0xf, 0x64, rarity[_0x511b('0x9')], 0x7, ribbonReq);
craftingRecipes[_0x511b('0x5')](ribbon[_0x511b('0x6')], ribbon);
var metalReq = [new CraftingRequirement(rock, 0x3)];
metal = new CraftingItem(_0x511b('0xa'), 0xf, 0x64, rarity[_0x511b('0x8')], 0x8, metalReq);
craftingRecipes[_0x511b('0x5')](metal[_0x511b('0x6')], metal);
var needlesReq = [
    new CraftingRequirement(metal, 0x4),
    new CraftingRequirement(ribbon, 0x1)
];
needles = new CraftingItem(_0x511b('0xb'), 0x1e, 0xc8, rarity[_0x511b('0x9')], 0x9, needlesReq);
craftingRecipes[_0x511b('0x5')](needles['name'], needles);
var sparklesReq = [
    new CraftingRequirement(needles, 0x2),
    new CraftingRequirement(ribbon, 0x2)
];
sparkles = new CraftingItem(_0x511b('0xc'), 0x3c, 0x12c, rarity[_0x511b('0xd')], 0xa, sparklesReq);
craftingRecipes[_0x511b('0x5')](sparkles[_0x511b('0x6')], sparkles);
var bronzeReq = [new CraftingRequirement(rock, 0x4)];
bronze = new CraftingItem(_0x511b('0xe'), 0x1e, 0xc8, rarity[_0x511b('0x8')], 0xb, bronzeReq);
craftingRecipes[_0x511b('0x5')](bronze[_0x511b('0x6')], bronze);
var silverReq = [
    new CraftingRequirement(bronze, 0x3),
    new CraftingRequirement(sparkles, 0x1)
];
silver = new CraftingItem(_0x511b('0xf'), 0x78, 0x12c, rarity[_0x511b('0x9')], 0xc, silverReq);
craftingRecipes[_0x511b('0x5')](silver[_0x511b('0x6')], silver);
var goldReq = [
    new CraftingRequirement(silver, 0x2),
    new CraftingRequirement(sparkles, 0x2)
];
gold = new CraftingItem(_0x511b('0x10'), 0x168, 0x1f4, rarity[_0x511b('0xd')], 0xd, goldReq);
craftingRecipes[_0x511b('0x5')](gold['name'], gold);
var amethystReq = [new CraftingRequirement(quartz, 0xa)];
amethyst = new CraftingItem(_0x511b('0x11'), 0x3c, 0x12c, rarity[_0x511b('0x8')], 0xe, amethystReq);
craftingRecipes[_0x511b('0x5')](amethyst[_0x511b('0x6')], amethyst);
var pendantReq = [
    new CraftingRequirement(amethyst, 0x7),
    new CraftingRequirement(silver, 0x2)
];
pendant = new CraftingItem('Pendant', 0xb4, 0x1f4, rarity[_0x511b('0x9')], 0xf, pendantReq);
craftingRecipes[_0x511b('0x5')](pendant['name'], pendant);
var necklaceReq = [
    new CraftingRequirement(pendant, 0x3),
    new CraftingRequirement(gold, 0x2)
];
necklace = new CraftingItem('Necklace', 0x2f8, 0x1f4, rarity[_0x511b('0xd')], 0x10, necklaceReq);
craftingRecipes[_0x511b('0x5')](necklace[_0x511b('0x6')], necklace);
var orbReq = [new CraftingRequirement(quartz, 0x14)];
orb = new CraftingItem('Orb', 0x3c, 0x12c, rarity[_0x511b('0x8')], 0x11, orbReq);
craftingRecipes[_0x511b('0x5')](orb[_0x511b('0x6')], orb);
var waterReq = [
    new CraftingRequirement(orb, 0x2),
    new CraftingRequirement(silver, 0x1)
];
water = new CraftingItem('Water', 0x168, 0x320, rarity[_0x511b('0x9')], 0x12, waterReq);
craftingRecipes[_0x511b('0x5')](water[_0x511b('0x6')], water);
var fireReq = [
    new CraftingRequirement(orb, 0x6),
    new CraftingRequirement(gold, 0x1)
];
fire = new CraftingItem('Fire', 0x2d0, 0x3e8, rarity['EPIC'], 0x13, fireReq);
craftingRecipes['set'](fire['name'], fire);
var waterstoneReq = [
    new CraftingRequirement(water, 0x2),
    new CraftingRequirement(ribbon, 0xa)
];
waterstone = new CraftingItem(_0x511b('0x12'), 0x2d0, 0x5dc, rarity[_0x511b('0x9')], 0x14, waterstoneReq);
craftingRecipes[_0x511b('0x5')](waterstone['name'], waterstone);
var firestoneReq = [
    new CraftingRequirement(fire, 0x1),
    new CraftingRequirement(sparkles, 0x2)
];
firestone = new CraftingItem(_0x511b('0x13'), 0x2d0, 0x5dc, rarity['EPIC'], 0x15, firestoneReq);
craftingRecipes['set'](firestone['name'], firestone);
var elementstoneReq = [
    new CraftingRequirement(firestone, 0x1),
    new CraftingRequirement(waterstone, 0x1)
];
elementstone = new CraftingItem('Elementstone', 0x5a0, 0x1388, rarity[_0x511b('0x14')], 0x16, elementstoneReq);
craftingRecipes[_0x511b('0x5')](elementstone[_0x511b('0x6')], elementstone);
var artifactReq = [
    new CraftingRequirement(elementstone, 0x1),
    new CraftingRequirement(necklace, 0x1)
];
artifact = new CraftingItem(_0x511b('0x15'), 0x10e0, 0x2710, rarity[_0x511b('0x14')], 0x17, artifactReq);
craftingRecipes[_0x511b('0x5')](artifact['name'], artifact);