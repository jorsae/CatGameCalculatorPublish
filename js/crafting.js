var _0x11f9 = [
    'Needles',
    'EPIC',
    'Bronze',
    'Gold',
    'Amethyst',
    'Pendant',
    'Necklace',
    'Orb',
    'Water',
    'Fire',
    'Elementstone',
    'LEGENDARY',
    'Log',
    'RAW',
    'Rock',
    'Quartz',
    'name',
    'set',
    'String',
    'COMMON',
    'Ribbon',
    'RARE',
    'Metal'
];
(function (_0x364a16, _0x454bf4) {
    var _0x26e389 = function (_0x1439d8) {
        while (--_0x1439d8) {
            _0x364a16['push'](_0x364a16['shift']());
        }
    };
    _0x26e389(++_0x454bf4);
}(_0x11f9, 0x1c1));
var _0xcb3c = function (_0x3f00cc, _0x284243) {
    _0x3f00cc = _0x3f00cc - 0x0;
    var _0x2049f7 = _0x11f9[_0x3f00cc];
    return _0x2049f7;
};
cotton = new CraftingItem('Cotton', 0x0, 0x0, rarity['RAW']);
log = new CraftingItem(_0xcb3c('0x0'), 0x0, 0x0, rarity[_0xcb3c('0x1')]);
rock = new CraftingItem(_0xcb3c('0x2'), 0x0, 0x0, rarity[_0xcb3c('0x1')]);
quartz = new CraftingItem(_0xcb3c('0x3'), 0x0, 0x0, rarity[_0xcb3c('0x1')]);
craftingRecipes['set'](cotton[_0xcb3c('0x4')], cotton);
craftingRecipes[_0xcb3c('0x5')](log[_0xcb3c('0x4')], log);
craftingRecipes[_0xcb3c('0x5')](rock['name'], rock);
craftingRecipes['set'](quartz['name'], quartz);
var stringReq = [new CraftingRequirement(cotton, 0x3)];
string = new CraftingItem(_0xcb3c('0x6'), 0x5, 0x32, rarity[_0xcb3c('0x7')], stringReq);
craftingRecipes[_0xcb3c('0x5')](string[_0xcb3c('0x4')], string);
var woodReq = [new CraftingRequirement(log, 0x3)];
wood = new CraftingItem('Wood', 0x5, 0x32, rarity['COMMON'], woodReq);
craftingRecipes['set'](wood[_0xcb3c('0x4')], wood);
var ribbonReq = [
    new CraftingRequirement(string, 0x2),
    new CraftingRequirement(wood, 0x2)
];
ribbon = new CraftingItem(_0xcb3c('0x8'), 0xf, 0x64, rarity[_0xcb3c('0x9')], ribbonReq);
craftingRecipes[_0xcb3c('0x5')](ribbon['name'], ribbon);
var metalReq = [new CraftingRequirement(rock, 0x3)];
metal = new CraftingItem(_0xcb3c('0xa'), 0xf, 0x64, rarity['COMMON'], metalReq);
craftingRecipes[_0xcb3c('0x5')](metal[_0xcb3c('0x4')], metal);
var needlesReq = [
    new CraftingRequirement(metal, 0x4),
    new CraftingRequirement(ribbon, 0x1)
];
needles = new CraftingItem(_0xcb3c('0xb'), 0x1e, 0xc8, rarity[_0xcb3c('0x9')], needlesReq);
craftingRecipes[_0xcb3c('0x5')](needles[_0xcb3c('0x4')], needles);
var sparklesReq = [
    new CraftingRequirement(needles, 0x2),
    new CraftingRequirement(ribbon, 0x2)
];
sparkles = new CraftingItem('Sparkles', 0x3c, 0x12c, rarity[_0xcb3c('0xc')], sparklesReq);
craftingRecipes[_0xcb3c('0x5')](sparkles[_0xcb3c('0x4')], sparkles);
var bronzeReq = [new CraftingRequirement(rock, 0x4)];
bronze = new CraftingItem(_0xcb3c('0xd'), 0x1e, 0xc8, rarity[_0xcb3c('0x7')], bronzeReq);
craftingRecipes[_0xcb3c('0x5')](bronze['name'], bronze);
var silverReq = [
    new CraftingRequirement(bronze, 0x3),
    new CraftingRequirement(sparkles, 0x1)
];
silver = new CraftingItem('Silver', 0x78, 0x12c, rarity[_0xcb3c('0x9')], silverReq);
craftingRecipes['set'](silver[_0xcb3c('0x4')], silver);
var goldReq = [
    new CraftingRequirement(silver, 0x2),
    new CraftingRequirement(sparkles, 0x2)
];
gold = new CraftingItem(_0xcb3c('0xe'), 0x168, 0x1f4, rarity['EPIC'], goldReq);
craftingRecipes[_0xcb3c('0x5')](gold[_0xcb3c('0x4')], gold);
var amethystReq = [new CraftingRequirement(quartz, 0xa)];
amethyst = new CraftingItem(_0xcb3c('0xf'), 0x3c, 0x12c, rarity[_0xcb3c('0x7')], amethystReq);
craftingRecipes[_0xcb3c('0x5')](amethyst[_0xcb3c('0x4')], amethyst);
var pendantReq = [
    new CraftingRequirement(amethyst, 0x7),
    new CraftingRequirement(silver, 0x2)
];
pendant = new CraftingItem(_0xcb3c('0x10'), 0xb4, 0x1f4, rarity['RARE'], pendantReq);
craftingRecipes['set'](pendant[_0xcb3c('0x4')], pendant);
var necklaceReq = [
    new CraftingRequirement(pendant, 0x3),
    new CraftingRequirement(gold, 0x2)
];
necklace = new CraftingItem(_0xcb3c('0x11'), 0x2f8, 0x1f4, rarity['EPIC'], necklaceReq);
craftingRecipes['set'](necklace[_0xcb3c('0x4')], necklace);
var orbReq = [new CraftingRequirement(quartz, 0x14)];
orb = new CraftingItem(_0xcb3c('0x12'), 0x3c, 0x12c, rarity[_0xcb3c('0x7')], orbReq);
craftingRecipes[_0xcb3c('0x5')](orb[_0xcb3c('0x4')], orb);
var waterReq = [
    new CraftingRequirement(orb, 0x2),
    new CraftingRequirement(silver, 0x1)
];
water = new CraftingItem(_0xcb3c('0x13'), 0x168, 0x320, rarity[_0xcb3c('0x9')], waterReq);
craftingRecipes[_0xcb3c('0x5')](water['name'], water);
var fireReq = [
    new CraftingRequirement(orb, 0x6),
    new CraftingRequirement(gold, 0x1)
];
fire = new CraftingItem(_0xcb3c('0x14'), 0x2d0, 0x3e8, rarity[_0xcb3c('0xc')], fireReq);
craftingRecipes[_0xcb3c('0x5')](fire[_0xcb3c('0x4')], fire);
var waterstoneReq = [
    new CraftingRequirement(water, 0x2),
    new CraftingRequirement(ribbon, 0xa)
];
waterstone = new CraftingItem('Waterstone', 0x2d0, 0x5dc, rarity['RARE'], waterstoneReq);
craftingRecipes[_0xcb3c('0x5')](waterstone[_0xcb3c('0x4')], waterstone);
var firestoneReq = [
    new CraftingRequirement(fire, 0x1),
    new CraftingRequirement(sparkles, 0x2)
];
firestone = new CraftingItem('Firestone', 0x2d0, 0x5dc, rarity[_0xcb3c('0xc')], firestoneReq);
craftingRecipes[_0xcb3c('0x5')](firestone['name'], firestone);
var elementstoneReq = [
    new CraftingRequirement(firestone, 0x1),
    new CraftingRequirement(waterstone, 0x1)
];
elementstone = new CraftingItem(_0xcb3c('0x15'), 0x5a0, 0x1388, rarity[_0xcb3c('0x16')], elementstoneReq);
craftingRecipes['set'](elementstone[_0xcb3c('0x4')], elementstone);
var artifactReq = [
    new CraftingRequirement(elementstone, 0x1),
    new CraftingRequirement(necklace, 0x1)
];
artifact = new CraftingItem('Artifact', 0x10e0, 0x2710, rarity[_0xcb3c('0x16')], artifactReq);
craftingRecipes[_0xcb3c('0x5')](artifact[_0xcb3c('0x4')], artifact);