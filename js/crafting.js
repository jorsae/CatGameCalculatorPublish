var _0x458d = [
    'Silver',
    'Gold',
    'Amethyst',
    'Pendant',
    'Necklace',
    'Orb',
    'Waterstone',
    'Firestone',
    'Elementstone',
    'LEGENDARY',
    'Artifact',
    'Cotton',
    'RAW',
    'Log',
    'Rock',
    'Quartz',
    'name',
    'set',
    'Wood',
    'COMMON',
    'Ribbon',
    'RARE',
    'Metal',
    'Needles',
    'Sparkles',
    'EPIC',
    'Bronze'
];
(function (_0x1fef14, _0x1c1f16) {
    var _0x12a9e1 = function (_0xe6ef4b) {
        while (--_0xe6ef4b) {
            _0x1fef14['push'](_0x1fef14['shift']());
        }
    };
    _0x12a9e1(++_0x1c1f16);
}(_0x458d, 0x119));
var _0x5907 = function (_0xd4ace4, _0x111d68) {
    _0xd4ace4 = _0xd4ace4 - 0x0;
    var _0x4e9da8 = _0x458d[_0xd4ace4];
    return _0x4e9da8;
};
cotton = new CraftingItem(_0x5907('0x0'), 0x0, 0x0, rarity[_0x5907('0x1')]);
log = new CraftingItem(_0x5907('0x2'), 0x0, 0x0, rarity[_0x5907('0x1')]);
rock = new CraftingItem(_0x5907('0x3'), 0x0, 0x0, rarity['RAW']);
quartz = new CraftingItem(_0x5907('0x4'), 0x0, 0x0, rarity[_0x5907('0x1')]);
craftingRecipes['set'](cotton[_0x5907('0x5')], cotton);
craftingRecipes[_0x5907('0x6')](log[_0x5907('0x5')], log);
craftingRecipes['set'](rock[_0x5907('0x5')], rock);
craftingRecipes['set'](quartz[_0x5907('0x5')], quartz);
var stringReq = [new CraftingRequirement(cotton, 0x3)];
string = new CraftingItem('String', 0x5, 0x32, rarity['COMMON'], stringReq);
craftingRecipes[_0x5907('0x6')](string[_0x5907('0x5')], string);
var woodReq = [new CraftingRequirement(log, 0x3)];
wood = new CraftingItem(_0x5907('0x7'), 0x5, 0x32, rarity[_0x5907('0x8')], woodReq);
craftingRecipes['set'](wood['name'], wood);
var ribbonReq = [
    new CraftingRequirement(string, 0x2),
    new CraftingRequirement(wood, 0x2)
];
ribbon = new CraftingItem(_0x5907('0x9'), 0xf, 0x64, rarity[_0x5907('0xa')], ribbonReq);
craftingRecipes[_0x5907('0x6')](ribbon['name'], ribbon);
var metalReq = [new CraftingRequirement(rock, 0x3)];
metal = new CraftingItem(_0x5907('0xb'), 0xf, 0x64, rarity['COMMON'], metalReq);
craftingRecipes[_0x5907('0x6')](metal['name'], metal);
var needlesReq = [
    new CraftingRequirement(metal, 0x4),
    new CraftingRequirement(ribbon, 0x1)
];
needles = new CraftingItem(_0x5907('0xc'), 0x1e, 0xc8, rarity[_0x5907('0xa')], needlesReq);
craftingRecipes[_0x5907('0x6')](needles[_0x5907('0x5')], needles);
var sparklesReq = [
    new CraftingRequirement(needles, 0x2),
    new CraftingRequirement(ribbon, 0x2)
];
sparkles = new CraftingItem(_0x5907('0xd'), 0x3c, 0x12c, rarity[_0x5907('0xe')], sparklesReq);
craftingRecipes[_0x5907('0x6')](sparkles['name'], sparkles);
var bronzeReq = [new CraftingRequirement(rock, 0x4)];
bronze = new CraftingItem(_0x5907('0xf'), 0x1e, 0xc8, rarity[_0x5907('0x8')], bronzeReq);
craftingRecipes[_0x5907('0x6')](bronze[_0x5907('0x5')], bronze);
var silverReq = [
    new CraftingRequirement(bronze, 0x3),
    new CraftingRequirement(sparkles, 0x1)
];
silver = new CraftingItem(_0x5907('0x10'), 0x78, 0x12c, rarity[_0x5907('0xa')], silverReq);
craftingRecipes[_0x5907('0x6')](silver[_0x5907('0x5')], silver);
var goldReq = [
    new CraftingRequirement(silver, 0x2),
    new CraftingRequirement(sparkles, 0x2)
];
gold = new CraftingItem(_0x5907('0x11'), 0x168, 0x1f4, rarity[_0x5907('0xe')], goldReq);
craftingRecipes[_0x5907('0x6')](gold[_0x5907('0x5')], gold);
var amethystReq = [new CraftingRequirement(quartz, 0xa)];
amethyst = new CraftingItem(_0x5907('0x12'), 0x3c, 0x12c, rarity[_0x5907('0x8')], amethystReq);
craftingRecipes['set'](amethyst[_0x5907('0x5')], amethyst);
var pendantReq = [
    new CraftingRequirement(amethyst, 0x7),
    new CraftingRequirement(silver, 0x2)
];
pendant = new CraftingItem(_0x5907('0x13'), 0xb4, 0x1f4, rarity[_0x5907('0xa')], pendantReq);
craftingRecipes['set'](pendant[_0x5907('0x5')], pendant);
var necklaceReq = [
    new CraftingRequirement(pendant, 0x3),
    new CraftingRequirement(gold, 0x2)
];
necklace = new CraftingItem(_0x5907('0x14'), 0x2f8, 0x1f4, rarity[_0x5907('0xe')], necklaceReq);
craftingRecipes[_0x5907('0x6')](necklace[_0x5907('0x5')], necklace);
var orbReq = [new CraftingRequirement(quartz, 0x14)];
orb = new CraftingItem(_0x5907('0x15'), 0x3c, 0x12c, rarity['COMMON'], orbReq);
craftingRecipes[_0x5907('0x6')](orb['name'], orb);
var waterReq = [
    new CraftingRequirement(orb, 0x2),
    new CraftingRequirement(silver, 0x1)
];
water = new CraftingItem('Water', 0x168, 0x320, rarity['RARE'], waterReq);
craftingRecipes[_0x5907('0x6')](water[_0x5907('0x5')], water);
var fireReq = [
    new CraftingRequirement(orb, 0x6),
    new CraftingRequirement(gold, 0x1)
];
fire = new CraftingItem('Fire', 0x2d0, 0x3e8, rarity[_0x5907('0xe')], fireReq);
craftingRecipes['set'](fire[_0x5907('0x5')], fire);
var waterstoneReq = [
    new CraftingRequirement(water, 0x2),
    new CraftingRequirement(ribbon, 0xa)
];
waterstone = new CraftingItem(_0x5907('0x16'), 0x2d0, 0x5dc, rarity[_0x5907('0xa')], waterstoneReq);
craftingRecipes['set'](waterstone[_0x5907('0x5')], waterstone);
var firestoneReq = [
    new CraftingRequirement(fire, 0x1),
    new CraftingRequirement(sparkles, 0x2)
];
firestone = new CraftingItem(_0x5907('0x17'), 0x2d0, 0x5dc, rarity['EPIC'], firestoneReq);
craftingRecipes[_0x5907('0x6')](firestone[_0x5907('0x5')], firestone);
var elementstoneReq = [
    new CraftingRequirement(firestone, 0x1),
    new CraftingRequirement(waterstone, 0x1)
];
elementstone = new CraftingItem(_0x5907('0x18'), 0x5a0, 0x1388, rarity[_0x5907('0x19')], elementstoneReq);
craftingRecipes[_0x5907('0x6')](elementstone[_0x5907('0x5')], elementstone);
var artifactReq = [
    new CraftingRequirement(elementstone, 0x1),
    new CraftingRequirement(necklace, 0x1)
];
artifact = new CraftingItem(_0x5907('0x1a'), 0x10e0, 0x2710, rarity['LEGENDARY'], artifactReq);
craftingRecipes[_0x5907('0x6')](artifact[_0x5907('0x5')], artifact);