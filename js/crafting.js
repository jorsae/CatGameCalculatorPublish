var _0x265a = [
    'Elementstone',
    'LEGENDARY',
    'Artifact',
    'Cotton',
    'Log',
    'RAW',
    'set',
    'name',
    'COMMON',
    'RARE',
    'Ribbon',
    'EPIC',
    'Bronze',
    'Silver',
    'Gold',
    'Amethyst',
    'Pendant',
    'Necklace',
    'Orb',
    'Water',
    'Fire',
    'Firestone'
];
(function (_0x5b2186, _0x318292) {
    var _0x46718d = function (_0x390f1e) {
        while (--_0x390f1e) {
            _0x5b2186['push'](_0x5b2186['shift']());
        }
    };
    _0x46718d(++_0x318292);
}(_0x265a, 0x121));
var _0x34f3 = function (_0x4a1f4e, _0x3720c3) {
    _0x4a1f4e = _0x4a1f4e - 0x0;
    var _0x4c0970 = _0x265a[_0x4a1f4e];
    return _0x4c0970;
};
cotton = new CraftingItem(_0x34f3('0x0'), 0x0, 0x0, rarity['RAW']);
log = new CraftingItem(_0x34f3('0x1'), 0x0, 0x0, rarity[_0x34f3('0x2')]);
rock = new CraftingItem('Rock', 0x0, 0x0, rarity['RAW']);
quartz = new CraftingItem('Quartz', 0x0, 0x0, rarity[_0x34f3('0x2')]);
craftingRecipes[_0x34f3('0x3')](cotton[_0x34f3('0x4')], cotton);
craftingRecipes[_0x34f3('0x3')](log[_0x34f3('0x4')], log);
craftingRecipes[_0x34f3('0x3')](rock[_0x34f3('0x4')], rock);
craftingRecipes[_0x34f3('0x3')](quartz[_0x34f3('0x4')], quartz);
var stringReq = [new CraftingRequirement(cotton, 0x3)];
string = new CraftingItem('String', 0x5, 0x32, rarity[_0x34f3('0x5')], stringReq);
craftingRecipes[_0x34f3('0x3')](string[_0x34f3('0x4')], string);
var woodReq = [new CraftingRequirement(log, 0x3)];
wood = new CraftingItem('Wood', 0x5, 0x32, rarity[_0x34f3('0x6')], woodReq);
craftingRecipes[_0x34f3('0x3')](wood[_0x34f3('0x4')], wood);
var ribbonReq = [
    new CraftingRequirement(string, 0x2),
    new CraftingRequirement(wood, 0x2)
];
ribbon = new CraftingItem(_0x34f3('0x7'), 0xf, 0x64, rarity['EPIC'], ribbonReq);
craftingRecipes[_0x34f3('0x3')](ribbon[_0x34f3('0x4')], ribbon);
var metalReq = [new CraftingRequirement(rock, 0x3)];
metal = new CraftingItem('Metal', 0xf, 0x64, rarity['COMMON'], metalReq);
craftingRecipes['set'](metal['name'], metal);
var needlesReq = [
    new CraftingRequirement(metal, 0x4),
    new CraftingRequirement(ribbon, 0x1)
];
needles = new CraftingItem('Needles', 0x1e, 0xc8, rarity[_0x34f3('0x6')], needlesReq);
craftingRecipes[_0x34f3('0x3')](needles[_0x34f3('0x4')], needles);
var sparklesReq = [
    new CraftingRequirement(needles, 0x2),
    new CraftingRequirement(ribbon, 0x2)
];
sparkles = new CraftingItem('Sparkles', 0x3c, 0x12c, rarity[_0x34f3('0x8')], sparklesReq);
craftingRecipes[_0x34f3('0x3')](sparkles['name'], sparkles);
var bronzeReq = [new CraftingRequirement(rock, 0x4)];
bronze = new CraftingItem(_0x34f3('0x9'), 0x1e, 0xc8, rarity['COMMON'], bronzeReq);
craftingRecipes[_0x34f3('0x3')](bronze[_0x34f3('0x4')], bronze);
var silverReq = [
    new CraftingRequirement(bronze, 0x3),
    new CraftingRequirement(sparkles, 0x1)
];
silver = new CraftingItem(_0x34f3('0xa'), 0x78, 0x12c, rarity[_0x34f3('0x6')], silverReq);
craftingRecipes[_0x34f3('0x3')](silver[_0x34f3('0x4')], silver);
var goldReq = [
    new CraftingRequirement(silver, 0x2),
    new CraftingRequirement(sparkles, 0x2)
];
gold = new CraftingItem(_0x34f3('0xb'), 0x168, 0x1f4, rarity['EPIC'], goldReq);
craftingRecipes[_0x34f3('0x3')](gold['name'], gold);
var amethystReq = [new CraftingRequirement(quartz, 0xa)];
amethyst = new CraftingItem(_0x34f3('0xc'), 0x3c, 0x12c, rarity['COMMON'], amethystReq);
craftingRecipes[_0x34f3('0x3')](amethyst['name'], amethyst);
var pendantReq = [
    new CraftingRequirement(amethyst, 0x7),
    new CraftingRequirement(silver, 0x2)
];
pendant = new CraftingItem(_0x34f3('0xd'), 0xb4, 0x1f4, rarity[_0x34f3('0x6')], pendantReq);
craftingRecipes[_0x34f3('0x3')](pendant[_0x34f3('0x4')], pendant);
var necklaceReq = [
    new CraftingRequirement(pendant, 0x3),
    new CraftingRequirement(gold, 0x2)
];
necklace = new CraftingItem(_0x34f3('0xe'), 0x2f8, 0x1f4, rarity[_0x34f3('0x8')], necklaceReq);
craftingRecipes[_0x34f3('0x3')](necklace[_0x34f3('0x4')], necklace);
var orbReq = [new CraftingRequirement(quartz, 0x14)];
orb = new CraftingItem(_0x34f3('0xf'), 0x3c, 0x12c, rarity[_0x34f3('0x5')], orbReq);
craftingRecipes['set'](orb[_0x34f3('0x4')], orb);
var waterReq = [
    new CraftingRequirement(orb, 0x2),
    new CraftingRequirement(silver, 0x1)
];
water = new CraftingItem(_0x34f3('0x10'), 0x168, 0x320, rarity[_0x34f3('0x6')], waterReq);
craftingRecipes[_0x34f3('0x3')](water[_0x34f3('0x4')], water);
var fireReq = [
    new CraftingRequirement(orb, 0x6),
    new CraftingRequirement(gold, 0x1)
];
fire = new CraftingItem(_0x34f3('0x11'), 0x2d0, 0x3e8, rarity[_0x34f3('0x8')], fireReq);
craftingRecipes[_0x34f3('0x3')](fire[_0x34f3('0x4')], fire);
var waterstoneReq = [
    new CraftingRequirement(water, 0x2),
    new CraftingRequirement(ribbon, 0xa)
];
waterstone = new CraftingItem('Waterstone', 0x2d0, 0x5dc, rarity[_0x34f3('0x5')], waterstoneReq);
craftingRecipes[_0x34f3('0x3')](waterstone[_0x34f3('0x4')], waterstone);
var firestoneReq = [
    new CraftingRequirement(fire, 0x1),
    new CraftingRequirement(sparkles, 0x2)
];
firestone = new CraftingItem(_0x34f3('0x12'), 0x2d0, 0x5dc, rarity['RARE'], firestoneReq);
craftingRecipes[_0x34f3('0x3')](firestone[_0x34f3('0x4')], firestone);
var elementstoneReq = [
    new CraftingRequirement(firestone, 0x1),
    new CraftingRequirement(waterstone, 0x1)
];
elementstone = new CraftingItem(_0x34f3('0x13'), 0x5a0, 0x1388, rarity[_0x34f3('0x14')], elementstoneReq);
craftingRecipes[_0x34f3('0x3')](elementstone['name'], elementstone);
var artifactReq = [
    new CraftingRequirement(elementstone, 0x1),
    new CraftingRequirement(necklace, 0x1)
];
artifact = new CraftingItem(_0x34f3('0x15'), 0x10e0, 0x2710, rarity[_0x34f3('0x14')], artifactReq);
craftingRecipes['set'](artifact[_0x34f3('0x4')], artifact);