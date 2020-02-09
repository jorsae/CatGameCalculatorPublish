var _0x4186 = [
    'Metal',
    'Needles',
    'Sparkles',
    'EPIC',
    'Bronze',
    'Silver',
    'Pendant',
    'Necklace',
    'Orb',
    'Water',
    'Fire',
    'Waterstone',
    'Firestone',
    'LEGENDARY',
    'Artifact',
    'Cotton',
    'RAW',
    'Rock',
    'Quartz',
    'set',
    'name',
    'String',
    'COMMON',
    'Wood',
    'Ribbon',
    'RARE'
];
(function (_0x380b52, _0x2ca5ac) {
    var _0x3c333d = function (_0xe054a0) {
        while (--_0xe054a0) {
            _0x380b52['push'](_0x380b52['shift']());
        }
    };
    _0x3c333d(++_0x2ca5ac);
}(_0x4186, 0x12d));
var _0x2703 = function (_0x11cb89, _0x5d4801) {
    _0x11cb89 = _0x11cb89 - 0x0;
    var _0x4749b4 = _0x4186[_0x11cb89];
    return _0x4749b4;
};
cotton = new CraftingItem(_0x2703('0x0'), 0x0, 0x0, rarity[_0x2703('0x1')], 0x1);
log = new CraftingItem('Log', 0x0, 0x0, rarity[_0x2703('0x1')], 0x2);
rock = new CraftingItem(_0x2703('0x2'), 0x0, 0x0, rarity[_0x2703('0x1')], 0x3);
quartz = new CraftingItem(_0x2703('0x3'), 0x0, 0x0, rarity['RAW'], 0x4);
craftingRecipes[_0x2703('0x4')](cotton[_0x2703('0x5')], cotton);
craftingRecipes[_0x2703('0x4')](log[_0x2703('0x5')], log);
craftingRecipes[_0x2703('0x4')](rock[_0x2703('0x5')], rock);
craftingRecipes[_0x2703('0x4')](quartz[_0x2703('0x5')], quartz);
var stringReq = [new CraftingRequirement(cotton, 0x3)];
string = new CraftingItem(_0x2703('0x6'), 0x5, 0x32, rarity[_0x2703('0x7')], 0x5, stringReq);
craftingRecipes[_0x2703('0x4')](string[_0x2703('0x5')], string);
var woodReq = [new CraftingRequirement(log, 0x3)];
wood = new CraftingItem(_0x2703('0x8'), 0x5, 0x32, rarity[_0x2703('0x7')], 0x6, woodReq);
craftingRecipes[_0x2703('0x4')](wood['name'], wood);
var ribbonReq = [
    new CraftingRequirement(string, 0x2),
    new CraftingRequirement(wood, 0x2)
];
ribbon = new CraftingItem(_0x2703('0x9'), 0xf, 0x64, rarity[_0x2703('0xa')], 0x7, ribbonReq);
craftingRecipes[_0x2703('0x4')](ribbon['name'], ribbon);
var metalReq = [new CraftingRequirement(rock, 0x3)];
metal = new CraftingItem(_0x2703('0xb'), 0xf, 0x64, rarity['COMMON'], 0x8, metalReq);
craftingRecipes[_0x2703('0x4')](metal[_0x2703('0x5')], metal);
var needlesReq = [
    new CraftingRequirement(metal, 0x4),
    new CraftingRequirement(ribbon, 0x1)
];
needles = new CraftingItem(_0x2703('0xc'), 0x1e, 0xc8, rarity['RARE'], 0x9, needlesReq);
craftingRecipes[_0x2703('0x4')](needles[_0x2703('0x5')], needles);
var sparklesReq = [
    new CraftingRequirement(needles, 0x2),
    new CraftingRequirement(ribbon, 0x2)
];
sparkles = new CraftingItem(_0x2703('0xd'), 0x3c, 0x12c, rarity[_0x2703('0xe')], 0xa, sparklesReq);
craftingRecipes[_0x2703('0x4')](sparkles[_0x2703('0x5')], sparkles);
var bronzeReq = [new CraftingRequirement(rock, 0x4)];
bronze = new CraftingItem(_0x2703('0xf'), 0x1e, 0xc8, rarity['COMMON'], 0xb, bronzeReq);
craftingRecipes['set'](bronze[_0x2703('0x5')], bronze);
var silverReq = [
    new CraftingRequirement(bronze, 0x3),
    new CraftingRequirement(sparkles, 0x1)
];
silver = new CraftingItem(_0x2703('0x10'), 0x78, 0x12c, rarity['RARE'], 0xc, silverReq);
craftingRecipes[_0x2703('0x4')](silver[_0x2703('0x5')], silver);
var goldReq = [
    new CraftingRequirement(silver, 0x2),
    new CraftingRequirement(sparkles, 0x2)
];
gold = new CraftingItem('Gold', 0x168, 0x1f4, rarity[_0x2703('0xe')], 0xd, goldReq);
craftingRecipes[_0x2703('0x4')](gold[_0x2703('0x5')], gold);
var amethystReq = [new CraftingRequirement(quartz, 0xa)];
amethyst = new CraftingItem('Amethyst', 0x3c, 0x12c, rarity[_0x2703('0x7')], 0xe, amethystReq);
craftingRecipes[_0x2703('0x4')](amethyst['name'], amethyst);
var pendantReq = [
    new CraftingRequirement(amethyst, 0x7),
    new CraftingRequirement(silver, 0x2)
];
pendant = new CraftingItem(_0x2703('0x11'), 0xb4, 0x1f4, rarity['RARE'], 0xf, pendantReq);
craftingRecipes[_0x2703('0x4')](pendant[_0x2703('0x5')], pendant);
var necklaceReq = [
    new CraftingRequirement(pendant, 0x3),
    new CraftingRequirement(gold, 0x2)
];
necklace = new CraftingItem(_0x2703('0x12'), 0x2f8, 0x1f4, rarity['EPIC'], 0x10, necklaceReq);
craftingRecipes[_0x2703('0x4')](necklace[_0x2703('0x5')], necklace);
var orbReq = [new CraftingRequirement(quartz, 0x14)];
orb = new CraftingItem(_0x2703('0x13'), 0x3c, 0x12c, rarity[_0x2703('0x7')], 0x11, orbReq);
craftingRecipes[_0x2703('0x4')](orb['name'], orb);
var waterReq = [
    new CraftingRequirement(orb, 0x2),
    new CraftingRequirement(silver, 0x1)
];
water = new CraftingItem(_0x2703('0x14'), 0x168, 0x320, rarity[_0x2703('0xa')], 0x12, waterReq);
craftingRecipes['set'](water[_0x2703('0x5')], water);
var fireReq = [
    new CraftingRequirement(orb, 0x6),
    new CraftingRequirement(gold, 0x1)
];
fire = new CraftingItem(_0x2703('0x15'), 0x2d0, 0x3e8, rarity['EPIC'], 0x13, fireReq);
craftingRecipes[_0x2703('0x4')](fire[_0x2703('0x5')], fire);
var waterstoneReq = [
    new CraftingRequirement(water, 0x2),
    new CraftingRequirement(ribbon, 0xa)
];
waterstone = new CraftingItem(_0x2703('0x16'), 0x2d0, 0x5dc, rarity['RARE'], 0x14, waterstoneReq);
craftingRecipes['set'](waterstone[_0x2703('0x5')], waterstone);
var firestoneReq = [
    new CraftingRequirement(fire, 0x1),
    new CraftingRequirement(sparkles, 0x2)
];
firestone = new CraftingItem(_0x2703('0x17'), 0x2d0, 0x5dc, rarity['EPIC'], 0x15, firestoneReq);
craftingRecipes[_0x2703('0x4')](firestone[_0x2703('0x5')], firestone);
var elementstoneReq = [
    new CraftingRequirement(firestone, 0x1),
    new CraftingRequirement(waterstone, 0x1)
];
elementstone = new CraftingItem('Elementstone', 0x5a0, 0x1388, rarity[_0x2703('0x18')], 0x16, elementstoneReq);
craftingRecipes['set'](elementstone[_0x2703('0x5')], elementstone);
var artifactReq = [
    new CraftingRequirement(elementstone, 0x1),
    new CraftingRequirement(necklace, 0x1)
];
artifact = new CraftingItem(_0x2703('0x19'), 0x10e0, 0x2710, rarity['LEGENDARY'], 0x17, artifactReq);
craftingRecipes['set'](artifact[_0x2703('0x5')], artifact);