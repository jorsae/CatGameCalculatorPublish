var _0x4579 = [
    'EPIC',
    'Bronze',
    'Gold',
    'Amethyst',
    'Necklace',
    'Water',
    'Fire',
    'Firestone',
    'Elementstone',
    'LEGENDARY',
    'RAW',
    'Log',
    'Quartz',
    'set',
    'name',
    'String',
    'COMMON',
    'Wood',
    'Needles',
    'RARE',
    'Sparkles'
];
(function (_0x3d42ba, _0x10f1ce) {
    var _0x158ebb = function (_0x494997) {
        while (--_0x494997) {
            _0x3d42ba['push'](_0x3d42ba['shift']());
        }
    };
    _0x158ebb(++_0x10f1ce);
}(_0x4579, 0x1ae));
var _0x560d = function (_0x582211, _0x30eb2d) {
    _0x582211 = _0x582211 - 0x0;
    var _0x3832bd = _0x4579[_0x582211];
    return _0x3832bd;
};
cotton = new CraftingItem('Cotton', 0x0, 0x0, rarity[_0x560d('0x0')], 0x1);
log = new CraftingItem(_0x560d('0x1'), 0x0, 0x0, rarity[_0x560d('0x0')], 0x2);
rock = new CraftingItem('Rock', 0x0, 0x0, rarity[_0x560d('0x0')], 0x3);
quartz = new CraftingItem(_0x560d('0x2'), 0x0, 0x0, rarity[_0x560d('0x0')], 0x4);
craftingRecipes[_0x560d('0x3')](cotton[_0x560d('0x4')], cotton);
craftingRecipes[_0x560d('0x3')](log['name'], log);
craftingRecipes[_0x560d('0x3')](rock[_0x560d('0x4')], rock);
craftingRecipes[_0x560d('0x3')](quartz[_0x560d('0x4')], quartz);
var stringReq = [new CraftingRequirement(cotton, 0x3)];
string = new CraftingItem(_0x560d('0x5'), 0x5, 0x32, rarity[_0x560d('0x6')], 0x5, stringReq);
craftingRecipes[_0x560d('0x3')](string['name'], string);
var woodReq = [new CraftingRequirement(log, 0x3)];
wood = new CraftingItem(_0x560d('0x7'), 0x5, 0x32, rarity[_0x560d('0x6')], 0x6, woodReq);
craftingRecipes[_0x560d('0x3')](wood[_0x560d('0x4')], wood);
var ribbonReq = [
    new CraftingRequirement(string, 0x2),
    new CraftingRequirement(wood, 0x2)
];
ribbon = new CraftingItem('Ribbon', 0xf, 0x64, rarity['RARE'], 0x7, ribbonReq);
craftingRecipes['set'](ribbon['name'], ribbon);
var metalReq = [new CraftingRequirement(rock, 0x3)];
metal = new CraftingItem('Metal', 0xf, 0x64, rarity[_0x560d('0x6')], 0x8, metalReq);
craftingRecipes[_0x560d('0x3')](metal['name'], metal);
var needlesReq = [
    new CraftingRequirement(metal, 0x4),
    new CraftingRequirement(ribbon, 0x1)
];
needles = new CraftingItem(_0x560d('0x8'), 0x1e, 0xc8, rarity[_0x560d('0x9')], 0x9, needlesReq);
craftingRecipes[_0x560d('0x3')](needles['name'], needles);
var sparklesReq = [
    new CraftingRequirement(needles, 0x2),
    new CraftingRequirement(ribbon, 0x2)
];
sparkles = new CraftingItem(_0x560d('0xa'), 0x3c, 0x12c, rarity[_0x560d('0xb')], 0xa, sparklesReq);
craftingRecipes[_0x560d('0x3')](sparkles[_0x560d('0x4')], sparkles);
var bronzeReq = [new CraftingRequirement(rock, 0x4)];
bronze = new CraftingItem(_0x560d('0xc'), 0x1e, 0xc8, rarity['COMMON'], 0xb, bronzeReq);
craftingRecipes[_0x560d('0x3')](bronze[_0x560d('0x4')], bronze);
var silverReq = [
    new CraftingRequirement(bronze, 0x3),
    new CraftingRequirement(sparkles, 0x1)
];
silver = new CraftingItem('Silver', 0x78, 0x12c, rarity[_0x560d('0x9')], 0xc, silverReq);
craftingRecipes[_0x560d('0x3')](silver['name'], silver);
var goldReq = [
    new CraftingRequirement(silver, 0x2),
    new CraftingRequirement(sparkles, 0x2)
];
gold = new CraftingItem(_0x560d('0xd'), 0x168, 0x1f4, rarity[_0x560d('0xb')], 0xd, goldReq);
craftingRecipes['set'](gold[_0x560d('0x4')], gold);
var amethystReq = [new CraftingRequirement(quartz, 0xa)];
amethyst = new CraftingItem(_0x560d('0xe'), 0x3c, 0x12c, rarity[_0x560d('0x6')], 0xe, amethystReq);
craftingRecipes[_0x560d('0x3')](amethyst[_0x560d('0x4')], amethyst);
var pendantReq = [
    new CraftingRequirement(amethyst, 0x7),
    new CraftingRequirement(silver, 0x2)
];
pendant = new CraftingItem('Pendant', 0xb4, 0x1f4, rarity[_0x560d('0x9')], 0xf, pendantReq);
craftingRecipes[_0x560d('0x3')](pendant[_0x560d('0x4')], pendant);
var necklaceReq = [
    new CraftingRequirement(pendant, 0x3),
    new CraftingRequirement(gold, 0x2)
];
necklace = new CraftingItem(_0x560d('0xf'), 0x2f8, 0x1f4, rarity['EPIC'], 0x10, necklaceReq);
craftingRecipes['set'](necklace[_0x560d('0x4')], necklace);
var orbReq = [new CraftingRequirement(quartz, 0x14)];
orb = new CraftingItem('Orb', 0x3c, 0x12c, rarity[_0x560d('0x6')], 0x11, orbReq);
craftingRecipes[_0x560d('0x3')](orb['name'], orb);
var waterReq = [
    new CraftingRequirement(orb, 0x2),
    new CraftingRequirement(silver, 0x1)
];
water = new CraftingItem(_0x560d('0x10'), 0x168, 0x320, rarity[_0x560d('0x9')], 0x12, waterReq);
craftingRecipes['set'](water[_0x560d('0x4')], water);
var fireReq = [
    new CraftingRequirement(orb, 0x6),
    new CraftingRequirement(gold, 0x1)
];
fire = new CraftingItem(_0x560d('0x11'), 0x2d0, 0x3e8, rarity[_0x560d('0xb')], 0x13, fireReq);
craftingRecipes[_0x560d('0x3')](fire[_0x560d('0x4')], fire);
var waterstoneReq = [
    new CraftingRequirement(water, 0x2),
    new CraftingRequirement(ribbon, 0xa)
];
waterstone = new CraftingItem('Waterstone', 0x2d0, 0x5dc, rarity[_0x560d('0x9')], 0x14, waterstoneReq);
craftingRecipes['set'](waterstone[_0x560d('0x4')], waterstone);
var firestoneReq = [
    new CraftingRequirement(fire, 0x1),
    new CraftingRequirement(sparkles, 0x2)
];
firestone = new CraftingItem(_0x560d('0x12'), 0x2d0, 0x5dc, rarity[_0x560d('0xb')], 0x15, firestoneReq);
craftingRecipes[_0x560d('0x3')](firestone[_0x560d('0x4')], firestone);
var elementstoneReq = [
    new CraftingRequirement(firestone, 0x1),
    new CraftingRequirement(waterstone, 0x1)
];
elementstone = new CraftingItem(_0x560d('0x13'), 0x5a0, 0x1388, rarity[_0x560d('0x14')], 0x16, elementstoneReq);
craftingRecipes[_0x560d('0x3')](elementstone[_0x560d('0x4')], elementstone);
var artifactReq = [
    new CraftingRequirement(elementstone, 0x1),
    new CraftingRequirement(necklace, 0x1)
];
artifact = new CraftingItem('Artifact', 0x10e0, 0x2710, rarity[_0x560d('0x14')], 0x17, artifactReq);
craftingRecipes[_0x560d('0x3')](artifact[_0x560d('0x4')], artifact);