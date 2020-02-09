var _0x3555 = [
    'Quartz',
    'name',
    'set',
    'Wood',
    'COMMON',
    'Ribbon',
    'RARE',
    'Metal',
    'Sparkles',
    'Bronze',
    'Gold',
    'EPIC',
    'Amethyst',
    'Pendant',
    'Necklace',
    'Water',
    'Fire',
    'Elementstone',
    'LEGENDARY',
    'Artifact',
    'Cotton',
    'Log',
    'RAW',
    'Rock'
];
(function (_0x5de3df, _0x45a4df) {
    var _0x53c15b = function (_0x4e75ae) {
        while (--_0x4e75ae) {
            _0x5de3df['push'](_0x5de3df['shift']());
        }
    };
    _0x53c15b(++_0x45a4df);
}(_0x3555, 0x11c));
var _0x40c3 = function (_0x49eb3f, _0x2f9cf6) {
    _0x49eb3f = _0x49eb3f - 0x0;
    var _0x2fec9c = _0x3555[_0x49eb3f];
    return _0x2fec9c;
};
cotton = new CraftingItem(_0x40c3('0x0'), 0x0, 0x0, rarity['RAW']);
log = new CraftingItem(_0x40c3('0x1'), 0x0, 0x0, rarity[_0x40c3('0x2')]);
rock = new CraftingItem(_0x40c3('0x3'), 0x0, 0x0, rarity[_0x40c3('0x2')]);
quartz = new CraftingItem(_0x40c3('0x4'), 0x0, 0x0, rarity['RAW']);
craftingRecipes['set'](cotton[_0x40c3('0x5')], cotton);
craftingRecipes[_0x40c3('0x6')](log['name'], log);
craftingRecipes[_0x40c3('0x6')](rock[_0x40c3('0x5')], rock);
craftingRecipes[_0x40c3('0x6')](quartz[_0x40c3('0x5')], quartz);
var stringReq = [new CraftingRequirement(cotton, 0x3)];
string = new CraftingItem('String', 0x5, 0x32, rarity['COMMON'], stringReq);
craftingRecipes['set'](string[_0x40c3('0x5')], string);
var woodReq = [new CraftingRequirement(log, 0x3)];
wood = new CraftingItem(_0x40c3('0x7'), 0x5, 0x32, rarity[_0x40c3('0x8')], woodReq);
craftingRecipes['set'](wood[_0x40c3('0x5')], wood);
var ribbonReq = [
    new CraftingRequirement(string, 0x2),
    new CraftingRequirement(wood, 0x2)
];
ribbon = new CraftingItem(_0x40c3('0x9'), 0xf, 0x64, rarity[_0x40c3('0xa')], ribbonReq);
craftingRecipes[_0x40c3('0x6')](ribbon[_0x40c3('0x5')], ribbon);
var metalReq = [new CraftingRequirement(rock, 0x3)];
metal = new CraftingItem(_0x40c3('0xb'), 0xf, 0x64, rarity['COMMON'], metalReq);
craftingRecipes[_0x40c3('0x6')](metal['name'], metal);
var needlesReq = [
    new CraftingRequirement(metal, 0x4),
    new CraftingRequirement(ribbon, 0x1)
];
needles = new CraftingItem('Needles', 0x1e, 0xc8, rarity[_0x40c3('0xa')], needlesReq);
craftingRecipes[_0x40c3('0x6')](needles['name'], needles);
var sparklesReq = [
    new CraftingRequirement(needles, 0x2),
    new CraftingRequirement(ribbon, 0x2)
];
sparkles = new CraftingItem(_0x40c3('0xc'), 0x3c, 0x12c, rarity['EPIC'], sparklesReq);
craftingRecipes[_0x40c3('0x6')](sparkles[_0x40c3('0x5')], sparkles);
var bronzeReq = [new CraftingRequirement(rock, 0x4)];
bronze = new CraftingItem(_0x40c3('0xd'), 0x1e, 0xc8, rarity[_0x40c3('0x8')], bronzeReq);
craftingRecipes['set'](bronze[_0x40c3('0x5')], bronze);
var silverReq = [
    new CraftingRequirement(bronze, 0x3),
    new CraftingRequirement(sparkles, 0x1)
];
silver = new CraftingItem('Silver', 0x78, 0x12c, rarity[_0x40c3('0xa')], silverReq);
craftingRecipes[_0x40c3('0x6')](silver[_0x40c3('0x5')], silver);
var goldReq = [
    new CraftingRequirement(silver, 0x2),
    new CraftingRequirement(sparkles, 0x2)
];
gold = new CraftingItem(_0x40c3('0xe'), 0x168, 0x1f4, rarity[_0x40c3('0xf')], goldReq);
craftingRecipes['set'](gold[_0x40c3('0x5')], gold);
var amethystReq = [new CraftingRequirement(quartz, 0xa)];
amethyst = new CraftingItem(_0x40c3('0x10'), 0x3c, 0x12c, rarity['COMMON'], amethystReq);
craftingRecipes['set'](amethyst[_0x40c3('0x5')], amethyst);
var pendantReq = [
    new CraftingRequirement(amethyst, 0x7),
    new CraftingRequirement(silver, 0x2)
];
pendant = new CraftingItem(_0x40c3('0x11'), 0xb4, 0x1f4, rarity[_0x40c3('0xa')], pendantReq);
craftingRecipes[_0x40c3('0x6')](pendant[_0x40c3('0x5')], pendant);
var necklaceReq = [
    new CraftingRequirement(pendant, 0x3),
    new CraftingRequirement(gold, 0x2)
];
necklace = new CraftingItem(_0x40c3('0x12'), 0x2f8, 0x1f4, rarity[_0x40c3('0xf')], necklaceReq);
craftingRecipes['set'](necklace['name'], necklace);
var orbReq = [new CraftingRequirement(quartz, 0x14)];
orb = new CraftingItem('Orb', 0x3c, 0x12c, rarity[_0x40c3('0x8')], orbReq);
craftingRecipes['set'](orb[_0x40c3('0x5')], orb);
var waterReq = [
    new CraftingRequirement(orb, 0x2),
    new CraftingRequirement(silver, 0x1)
];
water = new CraftingItem(_0x40c3('0x13'), 0x168, 0x320, rarity['RARE'], waterReq);
craftingRecipes['set'](water[_0x40c3('0x5')], water);
var fireReq = [
    new CraftingRequirement(orb, 0x6),
    new CraftingRequirement(gold, 0x1)
];
fire = new CraftingItem(_0x40c3('0x14'), 0x2d0, 0x3e8, rarity[_0x40c3('0xf')], fireReq);
craftingRecipes['set'](fire['name'], fire);
var waterstoneReq = [
    new CraftingRequirement(water, 0x2),
    new CraftingRequirement(ribbon, 0xa)
];
waterstone = new CraftingItem('Waterstone', 0x2d0, 0x5dc, rarity[_0x40c3('0xa')], waterstoneReq);
craftingRecipes[_0x40c3('0x6')](waterstone[_0x40c3('0x5')], waterstone);
var firestoneReq = [
    new CraftingRequirement(fire, 0x1),
    new CraftingRequirement(sparkles, 0x2)
];
firestone = new CraftingItem('Firestone', 0x2d0, 0x5dc, rarity[_0x40c3('0xf')], firestoneReq);
craftingRecipes[_0x40c3('0x6')](firestone[_0x40c3('0x5')], firestone);
var elementstoneReq = [
    new CraftingRequirement(firestone, 0x1),
    new CraftingRequirement(waterstone, 0x1)
];
elementstone = new CraftingItem(_0x40c3('0x15'), 0x5a0, 0x1388, rarity[_0x40c3('0x16')], elementstoneReq);
craftingRecipes[_0x40c3('0x6')](elementstone['name'], elementstone);
var artifactReq = [
    new CraftingRequirement(elementstone, 0x1),
    new CraftingRequirement(necklace, 0x1)
];
artifact = new CraftingItem(_0x40c3('0x17'), 0x10e0, 0x2710, rarity[_0x40c3('0x16')], artifactReq);
craftingRecipes[_0x40c3('0x6')](artifact['name'], artifact);