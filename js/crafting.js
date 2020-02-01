var _0x4d69 = [
    'Gold',
    'Amethyst',
    'Pendant',
    'Necklace',
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
    'Needles',
    'RARE',
    'Sparkles',
    'EPIC',
    'Bronze',
    'Silver'
];
(function (_0x305246, _0x564784) {
    var _0x2e1f05 = function (_0x3541a5) {
        while (--_0x3541a5) {
            _0x305246['push'](_0x305246['shift']());
        }
    };
    _0x2e1f05(++_0x564784);
}(_0x4d69, 0xea));
var _0x5f14 = function (_0x6ec748, _0x23f6fa) {
    _0x6ec748 = _0x6ec748 - 0x0;
    var _0x21cc7b = _0x4d69[_0x6ec748];
    return _0x21cc7b;
};
cotton = new CraftingItem(_0x5f14('0x0'), 0x0, 0x0, rarity[_0x5f14('0x1')]);
log = new CraftingItem('Log', 0x0, 0x0, rarity[_0x5f14('0x1')]);
rock = new CraftingItem(_0x5f14('0x2'), 0x0, 0x0, rarity[_0x5f14('0x1')]);
quartz = new CraftingItem(_0x5f14('0x3'), 0x0, 0x0, rarity['RAW']);
craftingRecipes[_0x5f14('0x4')](cotton[_0x5f14('0x5')], cotton);
craftingRecipes[_0x5f14('0x4')](log[_0x5f14('0x5')], log);
craftingRecipes[_0x5f14('0x4')](rock[_0x5f14('0x5')], rock);
craftingRecipes[_0x5f14('0x4')](quartz[_0x5f14('0x5')], quartz);
var stringReq = [new CraftingRequirement(cotton, 0x3)];
string = new CraftingItem(_0x5f14('0x6'), 0x5, 0x32, rarity[_0x5f14('0x7')], stringReq);
craftingRecipes[_0x5f14('0x4')](string['name'], string);
var woodReq = [new CraftingRequirement(log, 0x3)];
wood = new CraftingItem(_0x5f14('0x8'), 0x5, 0x32, rarity['COMMON'], woodReq);
craftingRecipes[_0x5f14('0x4')](wood['name'], wood);
var ribbonReq = [
    new CraftingRequirement(string, 0x2),
    new CraftingRequirement(wood, 0x2)
];
ribbon = new CraftingItem(_0x5f14('0x9'), 0xf, 0x64, rarity['RARE'], ribbonReq);
craftingRecipes[_0x5f14('0x4')](ribbon[_0x5f14('0x5')], ribbon);
var metalReq = [new CraftingRequirement(rock, 0x3)];
metal = new CraftingItem('Metal', 0xf, 0x64, rarity[_0x5f14('0x7')], metalReq);
craftingRecipes['set'](metal[_0x5f14('0x5')], metal);
var needlesReq = [
    new CraftingRequirement(metal, 0x4),
    new CraftingRequirement(ribbon, 0x1)
];
needles = new CraftingItem(_0x5f14('0xa'), 0x1e, 0xc8, rarity[_0x5f14('0xb')], needlesReq);
craftingRecipes[_0x5f14('0x4')](needles[_0x5f14('0x5')], needles);
var sparklesReq = [
    new CraftingRequirement(needles, 0x2),
    new CraftingRequirement(ribbon, 0x2)
];
sparkles = new CraftingItem(_0x5f14('0xc'), 0x3c, 0x12c, rarity[_0x5f14('0xd')], sparklesReq);
craftingRecipes[_0x5f14('0x4')](sparkles[_0x5f14('0x5')], sparkles);
var bronzeReq = [new CraftingRequirement(rock, 0x4)];
bronze = new CraftingItem(_0x5f14('0xe'), 0x1e, 0xc8, rarity[_0x5f14('0x7')], bronzeReq);
craftingRecipes[_0x5f14('0x4')](bronze[_0x5f14('0x5')], bronze);
var silverReq = [
    new CraftingRequirement(bronze, 0x3),
    new CraftingRequirement(sparkles, 0x1)
];
silver = new CraftingItem(_0x5f14('0xf'), 0x78, 0x12c, rarity[_0x5f14('0xb')], silverReq);
craftingRecipes[_0x5f14('0x4')](silver[_0x5f14('0x5')], silver);
var goldReq = [
    new CraftingRequirement(silver, 0x2),
    new CraftingRequirement(sparkles, 0x2)
];
gold = new CraftingItem(_0x5f14('0x10'), 0x168, 0x1f4, rarity[_0x5f14('0xd')], goldReq);
craftingRecipes[_0x5f14('0x4')](gold[_0x5f14('0x5')], gold);
var amethystReq = [new CraftingRequirement(quartz, 0xa)];
amethyst = new CraftingItem(_0x5f14('0x11'), 0x3c, 0x12c, rarity[_0x5f14('0x7')], amethystReq);
craftingRecipes['set'](amethyst[_0x5f14('0x5')], amethyst);
var pendantReq = [
    new CraftingRequirement(amethyst, 0x7),
    new CraftingRequirement(silver, 0x2)
];
pendant = new CraftingItem(_0x5f14('0x12'), 0xb4, 0x1f4, rarity[_0x5f14('0xb')], pendantReq);
craftingRecipes[_0x5f14('0x4')](pendant[_0x5f14('0x5')], pendant);
var necklaceReq = [
    new CraftingRequirement(pendant, 0x3),
    new CraftingRequirement(gold, 0x2)
];
necklace = new CraftingItem(_0x5f14('0x13'), 0x2f8, 0x1f4, rarity['EPIC'], necklaceReq);
craftingRecipes[_0x5f14('0x4')](necklace[_0x5f14('0x5')], necklace);
var orbReq = [new CraftingRequirement(quartz, 0x14)];
orb = new CraftingItem('Orb', 0x3c, 0x12c, rarity['COMMON'], orbReq);
craftingRecipes[_0x5f14('0x4')](orb[_0x5f14('0x5')], orb);
var waterReq = [
    new CraftingRequirement(orb, 0x2),
    new CraftingRequirement(silver, 0x1)
];
water = new CraftingItem('Water', 0x168, 0x320, rarity[_0x5f14('0xb')], waterReq);
craftingRecipes[_0x5f14('0x4')](water['name'], water);
var fireReq = [
    new CraftingRequirement(orb, 0x6),
    new CraftingRequirement(gold, 0x1)
];
fire = new CraftingItem(_0x5f14('0x14'), 0x2d0, 0x3e8, rarity[_0x5f14('0xd')], fireReq);
craftingRecipes[_0x5f14('0x4')](fire[_0x5f14('0x5')], fire);
var waterstoneReq = [
    new CraftingRequirement(water, 0x2),
    new CraftingRequirement(ribbon, 0xa)
];
waterstone = new CraftingItem(_0x5f14('0x15'), 0x2d0, 0x5dc, rarity[_0x5f14('0xb')], waterstoneReq);
craftingRecipes['set'](waterstone[_0x5f14('0x5')], waterstone);
var firestoneReq = [
    new CraftingRequirement(fire, 0x1),
    new CraftingRequirement(sparkles, 0x2)
];
firestone = new CraftingItem(_0x5f14('0x16'), 0x2d0, 0x5dc, rarity[_0x5f14('0xd')], firestoneReq);
craftingRecipes['set'](firestone[_0x5f14('0x5')], firestone);
var elementstoneReq = [
    new CraftingRequirement(firestone, 0x1),
    new CraftingRequirement(waterstone, 0x1)
];
elementstone = new CraftingItem('Elementstone', 0x5a0, 0x1388, rarity[_0x5f14('0x17')], elementstoneReq);
craftingRecipes[_0x5f14('0x4')](elementstone[_0x5f14('0x5')], elementstone);
var artifactReq = [
    new CraftingRequirement(elementstone, 0x1),
    new CraftingRequirement(necklace, 0x1)
];
artifact = new CraftingItem(_0x5f14('0x18'), 0x10e0, 0x2710, rarity['LEGENDARY'], artifactReq);
craftingRecipes[_0x5f14('0x4')](artifact[_0x5f14('0x5')], artifact);