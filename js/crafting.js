var _0x3971 = [
    'Fire',
    'Waterstone',
    'Firestone',
    'Elementstone',
    'LEGENDARY',
    'Artifact',
    'Cotton',
    'RAW',
    'Rock',
    'set',
    'name',
    'COMMON',
    'Wood',
    'RARE',
    'Ribbon',
    'Metal',
    'Needles',
    'Sparkles',
    'Bronze',
    'Gold',
    'EPIC',
    'Amethyst',
    'Pendant',
    'Necklace',
    'Orb',
    'Water'
];
(function (_0x2155e2, _0x78eef6) {
    var _0x4f61e1 = function (_0x42ad82) {
        while (--_0x42ad82) {
            _0x2155e2['push'](_0x2155e2['shift']());
        }
    };
    _0x4f61e1(++_0x78eef6);
}(_0x3971, 0x1f4));
var _0x1771 = function (_0x4d2b38, _0xe97737) {
    _0x4d2b38 = _0x4d2b38 - 0x0;
    var _0x4116ab = _0x3971[_0x4d2b38];
    return _0x4116ab;
};
cotton = new CraftingItem(_0x1771('0x0'), 0x0, 0x0, rarity[_0x1771('0x1')]);
log = new CraftingItem('Log', 0x0, 0x0, rarity[_0x1771('0x1')]);
rock = new CraftingItem(_0x1771('0x2'), 0x0, 0x0, rarity['RAW']);
quartz = new CraftingItem('Quartz', 0x0, 0x0, rarity[_0x1771('0x1')]);
craftingRecipes[_0x1771('0x3')](cotton[_0x1771('0x4')], cotton);
craftingRecipes[_0x1771('0x3')](log[_0x1771('0x4')], log);
craftingRecipes['set'](rock[_0x1771('0x4')], rock);
craftingRecipes[_0x1771('0x3')](quartz['name'], quartz);
var stringReq = [new CraftingRequirement(cotton, 0x3)];
string = new CraftingItem('String', 0x5, 0x32, rarity[_0x1771('0x5')], stringReq);
craftingRecipes[_0x1771('0x3')](string[_0x1771('0x4')], string);
var woodReq = [new CraftingRequirement(log, 0x3)];
wood = new CraftingItem(_0x1771('0x6'), 0x5, 0x32, rarity[_0x1771('0x7')], woodReq);
craftingRecipes[_0x1771('0x3')](wood[_0x1771('0x4')], wood);
var ribbonReq = [
    new CraftingRequirement(string, 0x2),
    new CraftingRequirement(wood, 0x2)
];
ribbon = new CraftingItem(_0x1771('0x8'), 0xf, 0x64, rarity['EPIC'], ribbonReq);
craftingRecipes['set'](ribbon[_0x1771('0x4')], ribbon);
var metalReq = [new CraftingRequirement(rock, 0x3)];
metal = new CraftingItem(_0x1771('0x9'), 0xf, 0x64, rarity[_0x1771('0x5')], metalReq);
craftingRecipes['set'](metal[_0x1771('0x4')], metal);
var needlesReq = [
    new CraftingRequirement(metal, 0x4),
    new CraftingRequirement(ribbon, 0x1)
];
needles = new CraftingItem(_0x1771('0xa'), 0x1e, 0xc8, rarity[_0x1771('0x7')], needlesReq);
craftingRecipes[_0x1771('0x3')](needles[_0x1771('0x4')], needles);
var sparklesReq = [
    new CraftingRequirement(needles, 0x2),
    new CraftingRequirement(ribbon, 0x2)
];
sparkles = new CraftingItem(_0x1771('0xb'), 0x3c, 0x12c, rarity['EPIC'], sparklesReq);
craftingRecipes[_0x1771('0x3')](sparkles[_0x1771('0x4')], sparkles);
var bronzeReq = [new CraftingRequirement(rock, 0x4)];
bronze = new CraftingItem(_0x1771('0xc'), 0x1e, 0xc8, rarity['COMMON'], bronzeReq);
craftingRecipes['set'](bronze[_0x1771('0x4')], bronze);
var silverReq = [
    new CraftingRequirement(bronze, 0x3),
    new CraftingRequirement(sparkles, 0x1)
];
silver = new CraftingItem('Silver', 0x78, 0x12c, rarity[_0x1771('0x7')], silverReq);
craftingRecipes[_0x1771('0x3')](silver[_0x1771('0x4')], silver);
var goldReq = [
    new CraftingRequirement(silver, 0x2),
    new CraftingRequirement(sparkles, 0x2)
];
gold = new CraftingItem(_0x1771('0xd'), 0x168, 0x1f4, rarity[_0x1771('0xe')], goldReq);
craftingRecipes['set'](gold[_0x1771('0x4')], gold);
var amethystReq = [new CraftingRequirement(quartz, 0xa)];
amethyst = new CraftingItem(_0x1771('0xf'), 0x3c, 0x12c, rarity[_0x1771('0x5')], amethystReq);
craftingRecipes[_0x1771('0x3')](amethyst[_0x1771('0x4')], amethyst);
var pendantReq = [
    new CraftingRequirement(amethyst, 0x7),
    new CraftingRequirement(silver, 0x2)
];
pendant = new CraftingItem(_0x1771('0x10'), 0xb4, 0x1f4, rarity['RARE'], pendantReq);
craftingRecipes['set'](pendant['name'], pendant);
var necklaceReq = [
    new CraftingRequirement(pendant, 0x3),
    new CraftingRequirement(gold, 0x2)
];
necklace = new CraftingItem(_0x1771('0x11'), 0x2f8, 0x1f4, rarity[_0x1771('0xe')], necklaceReq);
craftingRecipes[_0x1771('0x3')](necklace[_0x1771('0x4')], necklace);
var orbReq = [new CraftingRequirement(quartz, 0x14)];
orb = new CraftingItem(_0x1771('0x12'), 0x3c, 0x12c, rarity['COMMON'], orbReq);
craftingRecipes[_0x1771('0x3')](orb['name'], orb);
var waterReq = [
    new CraftingRequirement(orb, 0x2),
    new CraftingRequirement(silver, 0x1)
];
water = new CraftingItem(_0x1771('0x13'), 0x168, 0x320, rarity['RARE'], waterReq);
craftingRecipes['set'](water[_0x1771('0x4')], water);
var fireReq = [
    new CraftingRequirement(orb, 0x6),
    new CraftingRequirement(gold, 0x1)
];
fire = new CraftingItem(_0x1771('0x14'), 0x2d0, 0x3e8, rarity[_0x1771('0xe')], fireReq);
craftingRecipes[_0x1771('0x3')](fire[_0x1771('0x4')], fire);
var waterstoneReq = [
    new CraftingRequirement(water, 0x2),
    new CraftingRequirement(ribbon, 0xa)
];
waterstone = new CraftingItem(_0x1771('0x15'), 0x2d0, 0x5dc, rarity['COMMON'], waterstoneReq);
craftingRecipes[_0x1771('0x3')](waterstone[_0x1771('0x4')], waterstone);
var firestoneReq = [
    new CraftingRequirement(fire, 0x1),
    new CraftingRequirement(sparkles, 0x2)
];
firestone = new CraftingItem(_0x1771('0x16'), 0x2d0, 0x5dc, rarity[_0x1771('0x7')], firestoneReq);
craftingRecipes['set'](firestone['name'], firestone);
var elementstoneReq = [
    new CraftingRequirement(firestone, 0x1),
    new CraftingRequirement(waterstone, 0x1)
];
elementstone = new CraftingItem(_0x1771('0x17'), 0x5a0, 0x1388, rarity[_0x1771('0x18')], elementstoneReq);
craftingRecipes['set'](elementstone[_0x1771('0x4')], elementstone);
var artifactReq = [
    new CraftingRequirement(elementstone, 0x1),
    new CraftingRequirement(necklace, 0x1)
];
artifact = new CraftingItem(_0x1771('0x19'), 0x10e0, 0x2710, rarity['LEGENDARY'], artifactReq);
craftingRecipes[_0x1771('0x3')](artifact[_0x1771('0x4')], artifact);