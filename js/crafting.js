var _0x4ab9 = [
    'RARE',
    'Ribbon',
    'EPIC',
    'Metal',
    'Bronze',
    'Silver',
    'Gold',
    'Amethyst',
    'Necklace',
    'Orb',
    'Waterstone',
    'Firestone',
    'LEGENDARY',
    'Artifact',
    'Cotton',
    'RAW',
    'Log',
    'Rock',
    'Quartz',
    'set',
    'name',
    'String',
    'COMMON',
    'Wood'
];
(function (_0x33f025, _0xc43ddc) {
    var _0xc1efc = function (_0x3b00fe) {
        while (--_0x3b00fe) {
            _0x33f025['push'](_0x33f025['shift']());
        }
    };
    _0xc1efc(++_0xc43ddc);
}(_0x4ab9, 0x6e));
var _0x465a = function (_0x5f0e41, _0x2cbea9) {
    _0x5f0e41 = _0x5f0e41 - 0x0;
    var _0x578d5a = _0x4ab9[_0x5f0e41];
    return _0x578d5a;
};
cotton = new CraftingItem(_0x465a('0x0'), 0x0, 0x0, rarity[_0x465a('0x1')]);
log = new CraftingItem(_0x465a('0x2'), 0x0, 0x0, rarity[_0x465a('0x1')]);
rock = new CraftingItem(_0x465a('0x3'), 0x0, 0x0, rarity[_0x465a('0x1')]);
quartz = new CraftingItem(_0x465a('0x4'), 0x0, 0x0, rarity[_0x465a('0x1')]);
craftingRecipes[_0x465a('0x5')](cotton['name'], cotton);
craftingRecipes[_0x465a('0x5')](log[_0x465a('0x6')], log);
craftingRecipes['set'](rock['name'], rock);
craftingRecipes[_0x465a('0x5')](quartz['name'], quartz);
var stringReq = [new CraftingRequirement(cotton, 0x3)];
string = new CraftingItem(_0x465a('0x7'), 0x5, 0x32, rarity[_0x465a('0x8')], stringReq);
craftingRecipes[_0x465a('0x5')](string['name'], string);
var woodReq = [new CraftingRequirement(log, 0x3)];
wood = new CraftingItem(_0x465a('0x9'), 0x5, 0x32, rarity[_0x465a('0xa')], woodReq);
craftingRecipes[_0x465a('0x5')](wood['name'], wood);
var ribbonReq = [
    new CraftingRequirement(string, 0x2),
    new CraftingRequirement(wood, 0x2)
];
ribbon = new CraftingItem(_0x465a('0xb'), 0xf, 0x64, rarity[_0x465a('0xc')], ribbonReq);
craftingRecipes[_0x465a('0x5')](ribbon[_0x465a('0x6')], ribbon);
var metalReq = [new CraftingRequirement(rock, 0x3)];
metal = new CraftingItem(_0x465a('0xd'), 0xf, 0x64, rarity[_0x465a('0x8')], metalReq);
craftingRecipes['set'](metal[_0x465a('0x6')], metal);
var needlesReq = [
    new CraftingRequirement(metal, 0x4),
    new CraftingRequirement(ribbon, 0x1)
];
needles = new CraftingItem('Needles', 0x1e, 0xc8, rarity[_0x465a('0xa')], needlesReq);
craftingRecipes[_0x465a('0x5')](needles[_0x465a('0x6')], needles);
var sparklesReq = [
    new CraftingRequirement(needles, 0x2),
    new CraftingRequirement(ribbon, 0x2)
];
sparkles = new CraftingItem('Sparkles', 0x3c, 0x12c, rarity[_0x465a('0xc')], sparklesReq);
craftingRecipes[_0x465a('0x5')](sparkles[_0x465a('0x6')], sparkles);
var bronzeReq = [new CraftingRequirement(rock, 0x4)];
bronze = new CraftingItem(_0x465a('0xe'), 0x1e, 0xc8, rarity['COMMON'], bronzeReq);
craftingRecipes[_0x465a('0x5')](bronze[_0x465a('0x6')], bronze);
var silverReq = [
    new CraftingRequirement(bronze, 0x3),
    new CraftingRequirement(sparkles, 0x1)
];
silver = new CraftingItem(_0x465a('0xf'), 0x78, 0x12c, rarity['RARE'], silverReq);
craftingRecipes['set'](silver[_0x465a('0x6')], silver);
var goldReq = [
    new CraftingRequirement(silver, 0x2),
    new CraftingRequirement(sparkles, 0x2)
];
gold = new CraftingItem(_0x465a('0x10'), 0x168, 0x1f4, rarity[_0x465a('0xc')], goldReq);
craftingRecipes['set'](gold[_0x465a('0x6')], gold);
var amethystReq = [new CraftingRequirement(quartz, 0xa)];
amethyst = new CraftingItem(_0x465a('0x11'), 0x3c, 0x12c, rarity[_0x465a('0x8')], amethystReq);
craftingRecipes[_0x465a('0x5')](amethyst[_0x465a('0x6')], amethyst);
var pendantReq = [
    new CraftingRequirement(amethyst, 0x7),
    new CraftingRequirement(silver, 0x2)
];
pendant = new CraftingItem('Pendant', 0xb4, 0x1f4, rarity[_0x465a('0xa')], pendantReq);
craftingRecipes[_0x465a('0x5')](pendant[_0x465a('0x6')], pendant);
var necklaceReq = [
    new CraftingRequirement(pendant, 0x3),
    new CraftingRequirement(gold, 0x2)
];
necklace = new CraftingItem(_0x465a('0x12'), 0x2f8, 0x1f4, rarity[_0x465a('0xc')], necklaceReq);
craftingRecipes['set'](necklace[_0x465a('0x6')], necklace);
var orbReq = [new CraftingRequirement(quartz, 0x14)];
orb = new CraftingItem(_0x465a('0x13'), 0x3c, 0x12c, rarity[_0x465a('0x8')], orbReq);
craftingRecipes[_0x465a('0x5')](orb[_0x465a('0x6')], orb);
var waterReq = [
    new CraftingRequirement(orb, 0x2),
    new CraftingRequirement(silver, 0x1)
];
water = new CraftingItem('Water', 0x168, 0x320, rarity[_0x465a('0xa')], waterReq);
craftingRecipes['set'](water[_0x465a('0x6')], water);
var fireReq = [
    new CraftingRequirement(orb, 0x6),
    new CraftingRequirement(gold, 0x1)
];
fire = new CraftingItem('Fire', 0x2d0, 0x3e8, rarity['EPIC'], fireReq);
craftingRecipes[_0x465a('0x5')](fire['name'], fire);
var waterstoneReq = [
    new CraftingRequirement(water, 0x2),
    new CraftingRequirement(ribbon, 0xa)
];
waterstone = new CraftingItem(_0x465a('0x14'), 0x2d0, 0x5dc, rarity[_0x465a('0x8')], waterstoneReq);
craftingRecipes[_0x465a('0x5')](waterstone[_0x465a('0x6')], waterstone);
var firestoneReq = [
    new CraftingRequirement(fire, 0x1),
    new CraftingRequirement(sparkles, 0x2)
];
firestone = new CraftingItem(_0x465a('0x15'), 0x2d0, 0x5dc, rarity[_0x465a('0xa')], firestoneReq);
craftingRecipes[_0x465a('0x5')](firestone[_0x465a('0x6')], firestone);
var elementstoneReq = [
    new CraftingRequirement(firestone, 0x1),
    new CraftingRequirement(waterstone, 0x1)
];
elementstone = new CraftingItem('Elementstone', 0x5a0, 0x1388, rarity[_0x465a('0x16')], elementstoneReq);
craftingRecipes[_0x465a('0x5')](elementstone[_0x465a('0x6')], elementstone);
var artifactReq = [
    new CraftingRequirement(elementstone, 0x1),
    new CraftingRequirement(necklace, 0x1)
];
artifact = new CraftingItem(_0x465a('0x17'), 0x10e0, 0x2710, rarity[_0x465a('0x16')], artifactReq);
craftingRecipes[_0x465a('0x5')](artifact[_0x465a('0x6')], artifact);