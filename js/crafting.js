var _0x55ee = [
    'Metal',
    'Needles',
    'Sparkles',
    'Bronze',
    'Silver',
    'RARE',
    'Gold',
    'EPIC',
    'Amethyst',
    'Necklace',
    'Orb',
    'Fire',
    'Waterstone',
    'Firestone',
    'Artifact',
    'LEGENDARY',
    'Cotton',
    'RAW',
    'Rock',
    'Quartz',
    'set',
    'name',
    'COMMON',
    'Wood',
    'Ribbon'
];
(function (_0x309ad3, _0x22d5ac) {
    var _0x3a034e = function (_0x42782b) {
        while (--_0x42782b) {
            _0x309ad3['push'](_0x309ad3['shift']());
        }
    };
    _0x3a034e(++_0x22d5ac);
}(_0x55ee, 0xa6));
var _0x2b18 = function (_0x3ef99c, _0x1f130a) {
    _0x3ef99c = _0x3ef99c - 0x0;
    var _0x39ff11 = _0x55ee[_0x3ef99c];
    return _0x39ff11;
};
cotton = new CraftingItem(_0x2b18('0x0'), 0x0, 0x0, rarity[_0x2b18('0x1')]);
log = new CraftingItem('Log', 0x0, 0x0, rarity[_0x2b18('0x1')]);
rock = new CraftingItem(_0x2b18('0x2'), 0x0, 0x0, rarity[_0x2b18('0x1')]);
quartz = new CraftingItem(_0x2b18('0x3'), 0x0, 0x0, rarity[_0x2b18('0x1')]);
craftingRecipes[_0x2b18('0x4')](cotton[_0x2b18('0x5')], cotton);
craftingRecipes[_0x2b18('0x4')](log['name'], log);
craftingRecipes['set'](rock[_0x2b18('0x5')], rock);
craftingRecipes['set'](quartz[_0x2b18('0x5')], quartz);
var stringReq = [new CraftingRequirement(cotton, 0x3)];
string = new CraftingItem('String', 0x5, 0x32, rarity[_0x2b18('0x6')], stringReq);
craftingRecipes[_0x2b18('0x4')](string[_0x2b18('0x5')], string);
var woodReq = [new CraftingRequirement(log, 0x3)];
wood = new CraftingItem(_0x2b18('0x7'), 0x5, 0x32, rarity['COMMON'], woodReq);
craftingRecipes['set'](wood[_0x2b18('0x5')], wood);
var ribbonReq = [
    new CraftingRequirement(string, 0x2),
    new CraftingRequirement(wood, 0x2)
];
ribbon = new CraftingItem(_0x2b18('0x8'), 0xf, 0x64, rarity['RARE'], ribbonReq);
craftingRecipes[_0x2b18('0x4')](ribbon[_0x2b18('0x5')], ribbon);
var metalReq = [new CraftingRequirement(rock, 0x3)];
metal = new CraftingItem(_0x2b18('0x9'), 0xf, 0x64, rarity[_0x2b18('0x6')], metalReq);
craftingRecipes['set'](metal[_0x2b18('0x5')], metal);
var needlesReq = [
    new CraftingRequirement(metal, 0x4),
    new CraftingRequirement(ribbon, 0x1)
];
needles = new CraftingItem(_0x2b18('0xa'), 0x1e, 0xc8, rarity['RARE'], needlesReq);
craftingRecipes[_0x2b18('0x4')](needles[_0x2b18('0x5')], needles);
var sparklesReq = [
    new CraftingRequirement(needles, 0x2),
    new CraftingRequirement(ribbon, 0x2)
];
sparkles = new CraftingItem(_0x2b18('0xb'), 0x3c, 0x12c, rarity['EPIC'], sparklesReq);
craftingRecipes['set'](sparkles['name'], sparkles);
var bronzeReq = [new CraftingRequirement(rock, 0x4)];
bronze = new CraftingItem(_0x2b18('0xc'), 0x1e, 0xc8, rarity[_0x2b18('0x6')], bronzeReq);
craftingRecipes[_0x2b18('0x4')](bronze[_0x2b18('0x5')], bronze);
var silverReq = [
    new CraftingRequirement(bronze, 0x3),
    new CraftingRequirement(sparkles, 0x1)
];
silver = new CraftingItem(_0x2b18('0xd'), 0x78, 0x12c, rarity[_0x2b18('0xe')], silverReq);
craftingRecipes[_0x2b18('0x4')](silver[_0x2b18('0x5')], silver);
var goldReq = [
    new CraftingRequirement(silver, 0x2),
    new CraftingRequirement(sparkles, 0x2)
];
gold = new CraftingItem(_0x2b18('0xf'), 0x168, 0x1f4, rarity[_0x2b18('0x10')], goldReq);
craftingRecipes[_0x2b18('0x4')](gold[_0x2b18('0x5')], gold);
var amethystReq = [new CraftingRequirement(quartz, 0xa)];
amethyst = new CraftingItem(_0x2b18('0x11'), 0x3c, 0x12c, rarity[_0x2b18('0x6')], amethystReq);
craftingRecipes[_0x2b18('0x4')](amethyst[_0x2b18('0x5')], amethyst);
var pendantReq = [
    new CraftingRequirement(amethyst, 0x7),
    new CraftingRequirement(silver, 0x2)
];
pendant = new CraftingItem('Pendant', 0xb4, 0x1f4, rarity['RARE'], pendantReq);
craftingRecipes['set'](pendant[_0x2b18('0x5')], pendant);
var necklaceReq = [
    new CraftingRequirement(pendant, 0x3),
    new CraftingRequirement(gold, 0x2)
];
necklace = new CraftingItem(_0x2b18('0x12'), 0x2f8, 0x1f4, rarity[_0x2b18('0x10')], necklaceReq);
craftingRecipes[_0x2b18('0x4')](necklace[_0x2b18('0x5')], necklace);
var orbReq = [new CraftingRequirement(quartz, 0x14)];
orb = new CraftingItem(_0x2b18('0x13'), 0x3c, 0x12c, rarity[_0x2b18('0x6')], orbReq);
craftingRecipes[_0x2b18('0x4')](orb[_0x2b18('0x5')], orb);
var waterReq = [
    new CraftingRequirement(orb, 0x2),
    new CraftingRequirement(silver, 0x1)
];
water = new CraftingItem('Water', 0x168, 0x320, rarity['RARE'], waterReq);
craftingRecipes[_0x2b18('0x4')](water[_0x2b18('0x5')], water);
var fireReq = [
    new CraftingRequirement(orb, 0x6),
    new CraftingRequirement(gold, 0x1)
];
fire = new CraftingItem(_0x2b18('0x14'), 0x2d0, 0x3e8, rarity[_0x2b18('0x10')], fireReq);
craftingRecipes['set'](fire[_0x2b18('0x5')], fire);
var waterstoneReq = [
    new CraftingRequirement(water, 0x2),
    new CraftingRequirement(ribbon, 0xa)
];
waterstone = new CraftingItem(_0x2b18('0x15'), 0x2d0, 0x5dc, rarity[_0x2b18('0xe')], waterstoneReq);
craftingRecipes[_0x2b18('0x4')](waterstone['name'], waterstone);
var firestoneReq = [
    new CraftingRequirement(fire, 0x1),
    new CraftingRequirement(sparkles, 0x2)
];
firestone = new CraftingItem(_0x2b18('0x16'), 0x2d0, 0x5dc, rarity[_0x2b18('0x10')], firestoneReq);
craftingRecipes[_0x2b18('0x4')](firestone[_0x2b18('0x5')], firestone);
var elementstoneReq = [
    new CraftingRequirement(firestone, 0x1),
    new CraftingRequirement(waterstone, 0x1)
];
elementstone = new CraftingItem('Elementstone', 0x5a0, 0x1388, rarity['LEGENDARY'], elementstoneReq);
craftingRecipes['set'](elementstone[_0x2b18('0x5')], elementstone);
var artifactReq = [
    new CraftingRequirement(elementstone, 0x1),
    new CraftingRequirement(necklace, 0x1)
];
artifact = new CraftingItem(_0x2b18('0x17'), 0x10e0, 0x2710, rarity[_0x2b18('0x18')], artifactReq);
craftingRecipes[_0x2b18('0x4')](artifact['name'], artifact);