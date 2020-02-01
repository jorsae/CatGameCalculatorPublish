var _0x2f34 = [
    'LEGENDARY',
    'Cotton',
    'RAW',
    'Log',
    'Rock',
    'set',
    'name',
    'String',
    'Wood',
    'COMMON',
    'Ribbon',
    'Metal',
    'Needles',
    'Sparkles',
    'EPIC',
    'Bronze',
    'Silver',
    'RARE',
    'Amethyst',
    'Pendant',
    'Necklace',
    'Orb',
    'Water',
    'Fire',
    'Firestone',
    'Artifact'
];
(function (_0x1305a0, _0x2916dc) {
    var _0x339c1e = function (_0x5220e2) {
        while (--_0x5220e2) {
            _0x1305a0['push'](_0x1305a0['shift']());
        }
    };
    _0x339c1e(++_0x2916dc);
}(_0x2f34, 0x1a1));
var _0x5519 = function (_0x3f4d96, _0x4e8ff6) {
    _0x3f4d96 = _0x3f4d96 - 0x0;
    var _0x415c96 = _0x2f34[_0x3f4d96];
    return _0x415c96;
};
cotton = new CraftingItem(_0x5519('0x0'), 0x0, 0x0, rarity[_0x5519('0x1')]);
log = new CraftingItem(_0x5519('0x2'), 0x0, 0x0, rarity[_0x5519('0x1')]);
rock = new CraftingItem(_0x5519('0x3'), 0x0, 0x0, rarity[_0x5519('0x1')]);
quartz = new CraftingItem('Quartz', 0x0, 0x0, rarity[_0x5519('0x1')]);
craftingRecipes[_0x5519('0x4')](cotton[_0x5519('0x5')], cotton);
craftingRecipes[_0x5519('0x4')](log[_0x5519('0x5')], log);
craftingRecipes[_0x5519('0x4')](rock['name'], rock);
craftingRecipes[_0x5519('0x4')](quartz[_0x5519('0x5')], quartz);
var stringReq = [new CraftingRequirement(cotton, 0x3)];
string = new CraftingItem(_0x5519('0x6'), 0x5, 0x32, rarity['COMMON'], stringReq);
craftingRecipes[_0x5519('0x4')](string[_0x5519('0x5')], string);
var woodReq = [new CraftingRequirement(log, 0x3)];
wood = new CraftingItem(_0x5519('0x7'), 0x5, 0x32, rarity[_0x5519('0x8')], woodReq);
craftingRecipes[_0x5519('0x4')](wood['name'], wood);
var ribbonReq = [
    new CraftingRequirement(string, 0x2),
    new CraftingRequirement(wood, 0x2)
];
ribbon = new CraftingItem(_0x5519('0x9'), 0xf, 0x64, rarity['RARE'], ribbonReq);
craftingRecipes[_0x5519('0x4')](ribbon[_0x5519('0x5')], ribbon);
var metalReq = [new CraftingRequirement(rock, 0x3)];
metal = new CraftingItem(_0x5519('0xa'), 0xf, 0x64, rarity[_0x5519('0x8')], metalReq);
craftingRecipes[_0x5519('0x4')](metal[_0x5519('0x5')], metal);
var needlesReq = [
    new CraftingRequirement(metal, 0x4),
    new CraftingRequirement(ribbon, 0x1)
];
needles = new CraftingItem(_0x5519('0xb'), 0x1e, 0xc8, rarity['RARE'], needlesReq);
craftingRecipes['set'](needles[_0x5519('0x5')], needles);
var sparklesReq = [
    new CraftingRequirement(needles, 0x2),
    new CraftingRequirement(ribbon, 0x2)
];
sparkles = new CraftingItem(_0x5519('0xc'), 0x3c, 0x12c, rarity[_0x5519('0xd')], sparklesReq);
craftingRecipes[_0x5519('0x4')](sparkles[_0x5519('0x5')], sparkles);
var bronzeReq = [new CraftingRequirement(rock, 0x4)];
bronze = new CraftingItem(_0x5519('0xe'), 0x1e, 0xc8, rarity[_0x5519('0x8')], bronzeReq);
craftingRecipes[_0x5519('0x4')](bronze[_0x5519('0x5')], bronze);
var silverReq = [
    new CraftingRequirement(bronze, 0x3),
    new CraftingRequirement(sparkles, 0x1)
];
silver = new CraftingItem(_0x5519('0xf'), 0x78, 0x12c, rarity[_0x5519('0x10')], silverReq);
craftingRecipes[_0x5519('0x4')](silver[_0x5519('0x5')], silver);
var goldReq = [
    new CraftingRequirement(silver, 0x2),
    new CraftingRequirement(sparkles, 0x2)
];
gold = new CraftingItem('Gold', 0x168, 0x1f4, rarity[_0x5519('0xd')], goldReq);
craftingRecipes[_0x5519('0x4')](gold['name'], gold);
var amethystReq = [new CraftingRequirement(quartz, 0xa)];
amethyst = new CraftingItem(_0x5519('0x11'), 0x3c, 0x12c, rarity['COMMON'], amethystReq);
craftingRecipes[_0x5519('0x4')](amethyst['name'], amethyst);
var pendantReq = [
    new CraftingRequirement(amethyst, 0x7),
    new CraftingRequirement(silver, 0x2)
];
pendant = new CraftingItem(_0x5519('0x12'), 0xb4, 0x1f4, rarity[_0x5519('0x10')], pendantReq);
craftingRecipes['set'](pendant[_0x5519('0x5')], pendant);
var necklaceReq = [
    new CraftingRequirement(pendant, 0x3),
    new CraftingRequirement(gold, 0x2)
];
necklace = new CraftingItem(_0x5519('0x13'), 0x2f8, 0x1f4, rarity[_0x5519('0xd')], necklaceReq);
craftingRecipes[_0x5519('0x4')](necklace[_0x5519('0x5')], necklace);
var orbReq = [new CraftingRequirement(quartz, 0x14)];
orb = new CraftingItem(_0x5519('0x14'), 0x3c, 0x12c, rarity[_0x5519('0x8')], orbReq);
craftingRecipes['set'](orb[_0x5519('0x5')], orb);
var waterReq = [
    new CraftingRequirement(orb, 0x2),
    new CraftingRequirement(silver, 0x1)
];
water = new CraftingItem(_0x5519('0x15'), 0x168, 0x320, rarity['RARE'], waterReq);
craftingRecipes['set'](water[_0x5519('0x5')], water);
var fireReq = [
    new CraftingRequirement(orb, 0x6),
    new CraftingRequirement(gold, 0x1)
];
fire = new CraftingItem(_0x5519('0x16'), 0x2d0, 0x3e8, rarity[_0x5519('0xd')], fireReq);
craftingRecipes[_0x5519('0x4')](fire[_0x5519('0x5')], fire);
var waterstoneReq = [
    new CraftingRequirement(water, 0x2),
    new CraftingRequirement(ribbon, 0xa)
];
waterstone = new CraftingItem('Waterstone', 0x2d0, 0x5dc, rarity['RARE'], waterstoneReq);
craftingRecipes[_0x5519('0x4')](waterstone[_0x5519('0x5')], waterstone);
var firestoneReq = [
    new CraftingRequirement(fire, 0x1),
    new CraftingRequirement(sparkles, 0x2)
];
firestone = new CraftingItem(_0x5519('0x17'), 0x2d0, 0x5dc, rarity['EPIC'], firestoneReq);
craftingRecipes['set'](firestone[_0x5519('0x5')], firestone);
var elementstoneReq = [
    new CraftingRequirement(firestone, 0x1),
    new CraftingRequirement(waterstone, 0x1)
];
elementstone = new CraftingItem('Elementstone', 0x5a0, 0x1388, rarity['LEGENDARY'], elementstoneReq);
craftingRecipes[_0x5519('0x4')](elementstone[_0x5519('0x5')], elementstone);
var artifactReq = [
    new CraftingRequirement(elementstone, 0x1),
    new CraftingRequirement(necklace, 0x1)
];
artifact = new CraftingItem(_0x5519('0x18'), 0x10e0, 0x2710, rarity[_0x5519('0x19')], artifactReq);
craftingRecipes['set'](artifact[_0x5519('0x5')], artifact);