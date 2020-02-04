var _0x334d = [
    'Wood',
    'Ribbon',
    'RARE',
    'Metal',
    'Needles',
    'Sparkles',
    'EPIC',
    'Bronze',
    'Silver',
    'Gold',
    'Amethyst',
    'Necklace',
    'Orb',
    'Water',
    'Waterstone',
    'Firestone',
    'Artifact',
    'LEGENDARY',
    'RAW',
    'Log',
    'Rock',
    'set',
    'name',
    'String',
    'COMMON'
];
(function (_0x5e26f2, _0x5c9013) {
    var _0x281d42 = function (_0x47c470) {
        while (--_0x47c470) {
            _0x5e26f2['push'](_0x5e26f2['shift']());
        }
    };
    _0x281d42(++_0x5c9013);
}(_0x334d, 0x13e));
var _0x36eb = function (_0x12e9ca, _0x5cbff3) {
    _0x12e9ca = _0x12e9ca - 0x0;
    var _0x252698 = _0x334d[_0x12e9ca];
    return _0x252698;
};
cotton = new CraftingItem('Cotton', 0x0, 0x0, rarity[_0x36eb('0x0')]);
log = new CraftingItem(_0x36eb('0x1'), 0x0, 0x0, rarity[_0x36eb('0x0')]);
rock = new CraftingItem(_0x36eb('0x2'), 0x0, 0x0, rarity['RAW']);
quartz = new CraftingItem('Quartz', 0x0, 0x0, rarity['RAW']);
craftingRecipes[_0x36eb('0x3')](cotton[_0x36eb('0x4')], cotton);
craftingRecipes['set'](log[_0x36eb('0x4')], log);
craftingRecipes['set'](rock[_0x36eb('0x4')], rock);
craftingRecipes[_0x36eb('0x3')](quartz[_0x36eb('0x4')], quartz);
var stringReq = [new CraftingRequirement(cotton, 0x3)];
string = new CraftingItem(_0x36eb('0x5'), 0x5, 0x32, rarity[_0x36eb('0x6')], stringReq);
craftingRecipes[_0x36eb('0x3')](string[_0x36eb('0x4')], string);
var woodReq = [new CraftingRequirement(log, 0x3)];
wood = new CraftingItem(_0x36eb('0x7'), 0x5, 0x32, rarity[_0x36eb('0x6')], woodReq);
craftingRecipes[_0x36eb('0x3')](wood[_0x36eb('0x4')], wood);
var ribbonReq = [
    new CraftingRequirement(string, 0x2),
    new CraftingRequirement(wood, 0x2)
];
ribbon = new CraftingItem(_0x36eb('0x8'), 0xf, 0x64, rarity[_0x36eb('0x9')], ribbonReq);
craftingRecipes['set'](ribbon[_0x36eb('0x4')], ribbon);
var metalReq = [new CraftingRequirement(rock, 0x3)];
metal = new CraftingItem(_0x36eb('0xa'), 0xf, 0x64, rarity['COMMON'], metalReq);
craftingRecipes[_0x36eb('0x3')](metal[_0x36eb('0x4')], metal);
var needlesReq = [
    new CraftingRequirement(metal, 0x4),
    new CraftingRequirement(ribbon, 0x1)
];
needles = new CraftingItem(_0x36eb('0xb'), 0x1e, 0xc8, rarity[_0x36eb('0x9')], needlesReq);
craftingRecipes[_0x36eb('0x3')](needles[_0x36eb('0x4')], needles);
var sparklesReq = [
    new CraftingRequirement(needles, 0x2),
    new CraftingRequirement(ribbon, 0x2)
];
sparkles = new CraftingItem(_0x36eb('0xc'), 0x3c, 0x12c, rarity[_0x36eb('0xd')], sparklesReq);
craftingRecipes['set'](sparkles[_0x36eb('0x4')], sparkles);
var bronzeReq = [new CraftingRequirement(rock, 0x4)];
bronze = new CraftingItem(_0x36eb('0xe'), 0x1e, 0xc8, rarity[_0x36eb('0x6')], bronzeReq);
craftingRecipes['set'](bronze['name'], bronze);
var silverReq = [
    new CraftingRequirement(bronze, 0x3),
    new CraftingRequirement(sparkles, 0x1)
];
silver = new CraftingItem(_0x36eb('0xf'), 0x78, 0x12c, rarity[_0x36eb('0x9')], silverReq);
craftingRecipes['set'](silver['name'], silver);
var goldReq = [
    new CraftingRequirement(silver, 0x2),
    new CraftingRequirement(sparkles, 0x2)
];
gold = new CraftingItem(_0x36eb('0x10'), 0x168, 0x1f4, rarity[_0x36eb('0xd')], goldReq);
craftingRecipes[_0x36eb('0x3')](gold[_0x36eb('0x4')], gold);
var amethystReq = [new CraftingRequirement(quartz, 0xa)];
amethyst = new CraftingItem(_0x36eb('0x11'), 0x3c, 0x12c, rarity[_0x36eb('0x6')], amethystReq);
craftingRecipes[_0x36eb('0x3')](amethyst[_0x36eb('0x4')], amethyst);
var pendantReq = [
    new CraftingRequirement(amethyst, 0x7),
    new CraftingRequirement(silver, 0x2)
];
pendant = new CraftingItem('Pendant', 0xb4, 0x1f4, rarity['RARE'], pendantReq);
craftingRecipes['set'](pendant[_0x36eb('0x4')], pendant);
var necklaceReq = [
    new CraftingRequirement(pendant, 0x3),
    new CraftingRequirement(gold, 0x2)
];
necklace = new CraftingItem(_0x36eb('0x12'), 0x2f8, 0x1f4, rarity[_0x36eb('0xd')], necklaceReq);
craftingRecipes[_0x36eb('0x3')](necklace[_0x36eb('0x4')], necklace);
var orbReq = [new CraftingRequirement(quartz, 0x14)];
orb = new CraftingItem(_0x36eb('0x13'), 0x3c, 0x12c, rarity[_0x36eb('0x6')], orbReq);
craftingRecipes[_0x36eb('0x3')](orb[_0x36eb('0x4')], orb);
var waterReq = [
    new CraftingRequirement(orb, 0x2),
    new CraftingRequirement(silver, 0x1)
];
water = new CraftingItem(_0x36eb('0x14'), 0x168, 0x320, rarity['RARE'], waterReq);
craftingRecipes['set'](water['name'], water);
var fireReq = [
    new CraftingRequirement(orb, 0x6),
    new CraftingRequirement(gold, 0x1)
];
fire = new CraftingItem('Fire', 0x2d0, 0x3e8, rarity[_0x36eb('0xd')], fireReq);
craftingRecipes[_0x36eb('0x3')](fire['name'], fire);
var waterstoneReq = [
    new CraftingRequirement(water, 0x2),
    new CraftingRequirement(ribbon, 0xa)
];
waterstone = new CraftingItem(_0x36eb('0x15'), 0x2d0, 0x5dc, rarity[_0x36eb('0x9')], waterstoneReq);
craftingRecipes[_0x36eb('0x3')](waterstone[_0x36eb('0x4')], waterstone);
var firestoneReq = [
    new CraftingRequirement(fire, 0x1),
    new CraftingRequirement(sparkles, 0x2)
];
firestone = new CraftingItem(_0x36eb('0x16'), 0x2d0, 0x5dc, rarity['EPIC'], firestoneReq);
craftingRecipes[_0x36eb('0x3')](firestone[_0x36eb('0x4')], firestone);
var elementstoneReq = [
    new CraftingRequirement(firestone, 0x1),
    new CraftingRequirement(waterstone, 0x1)
];
elementstone = new CraftingItem('Elementstone', 0x5a0, 0x1388, rarity['LEGENDARY'], elementstoneReq);
craftingRecipes[_0x36eb('0x3')](elementstone['name'], elementstone);
var artifactReq = [
    new CraftingRequirement(elementstone, 0x1),
    new CraftingRequirement(necklace, 0x1)
];
artifact = new CraftingItem(_0x36eb('0x17'), 0x10e0, 0x2710, rarity[_0x36eb('0x18')], artifactReq);
craftingRecipes['set'](artifact['name'], artifact);