var _0x7359 = [
    'RAW',
    'Log',
    'Rock',
    'Quartz',
    'set',
    'name',
    'String',
    'COMMON',
    'Wood',
    'Ribbon',
    'Metal',
    'Needles',
    'RARE',
    'Sparkles',
    'EPIC',
    'Bronze',
    'Amethyst',
    'Orb',
    'Water',
    'Waterstone',
    'Firestone',
    'Elementstone',
    'LEGENDARY',
    'Artifact',
    'Cotton'
];
(function (_0x23cfd3, _0x2859dd) {
    var _0x3d87c1 = function (_0x45fd54) {
        while (--_0x45fd54) {
            _0x23cfd3['push'](_0x23cfd3['shift']());
        }
    };
    _0x3d87c1(++_0x2859dd);
}(_0x7359, 0x95));
var _0x52fc = function (_0x5553f8, _0x41f8c3) {
    _0x5553f8 = _0x5553f8 - 0x0;
    var _0x41bdc0 = _0x7359[_0x5553f8];
    return _0x41bdc0;
};
cotton = new CraftingItem(_0x52fc('0x0'), 0x0, 0x0, rarity[_0x52fc('0x1')]);
log = new CraftingItem(_0x52fc('0x2'), 0x0, 0x0, rarity[_0x52fc('0x1')]);
rock = new CraftingItem(_0x52fc('0x3'), 0x0, 0x0, rarity[_0x52fc('0x1')]);
quartz = new CraftingItem(_0x52fc('0x4'), 0x0, 0x0, rarity['RAW']);
craftingRecipes[_0x52fc('0x5')](cotton[_0x52fc('0x6')], cotton);
craftingRecipes[_0x52fc('0x5')](log[_0x52fc('0x6')], log);
craftingRecipes[_0x52fc('0x5')](rock[_0x52fc('0x6')], rock);
craftingRecipes[_0x52fc('0x5')](quartz['name'], quartz);
var stringReq = [new CraftingRequirement(cotton, 0x3)];
string = new CraftingItem(_0x52fc('0x7'), 0x5, 0x32, rarity[_0x52fc('0x8')], stringReq);
craftingRecipes['set'](string[_0x52fc('0x6')], string);
var woodReq = [new CraftingRequirement(log, 0x3)];
wood = new CraftingItem(_0x52fc('0x9'), 0x5, 0x32, rarity[_0x52fc('0x8')], woodReq);
craftingRecipes[_0x52fc('0x5')](wood['name'], wood);
var ribbonReq = [
    new CraftingRequirement(string, 0x2),
    new CraftingRequirement(wood, 0x2)
];
ribbon = new CraftingItem(_0x52fc('0xa'), 0xf, 0x64, rarity['RARE'], ribbonReq);
craftingRecipes['set'](ribbon[_0x52fc('0x6')], ribbon);
var metalReq = [new CraftingRequirement(rock, 0x3)];
metal = new CraftingItem(_0x52fc('0xb'), 0xf, 0x64, rarity[_0x52fc('0x8')], metalReq);
craftingRecipes[_0x52fc('0x5')](metal[_0x52fc('0x6')], metal);
var needlesReq = [
    new CraftingRequirement(metal, 0x4),
    new CraftingRequirement(ribbon, 0x1)
];
needles = new CraftingItem(_0x52fc('0xc'), 0x1e, 0xc8, rarity[_0x52fc('0xd')], needlesReq);
craftingRecipes[_0x52fc('0x5')](needles[_0x52fc('0x6')], needles);
var sparklesReq = [
    new CraftingRequirement(needles, 0x2),
    new CraftingRequirement(ribbon, 0x2)
];
sparkles = new CraftingItem(_0x52fc('0xe'), 0x3c, 0x12c, rarity[_0x52fc('0xf')], sparklesReq);
craftingRecipes[_0x52fc('0x5')](sparkles[_0x52fc('0x6')], sparkles);
var bronzeReq = [new CraftingRequirement(rock, 0x4)];
bronze = new CraftingItem(_0x52fc('0x10'), 0x1e, 0xc8, rarity[_0x52fc('0x8')], bronzeReq);
craftingRecipes[_0x52fc('0x5')](bronze[_0x52fc('0x6')], bronze);
var silverReq = [
    new CraftingRequirement(bronze, 0x3),
    new CraftingRequirement(sparkles, 0x1)
];
silver = new CraftingItem('Silver', 0x78, 0x12c, rarity[_0x52fc('0xd')], silverReq);
craftingRecipes['set'](silver[_0x52fc('0x6')], silver);
var goldReq = [
    new CraftingRequirement(silver, 0x2),
    new CraftingRequirement(sparkles, 0x2)
];
gold = new CraftingItem('Gold', 0x168, 0x1f4, rarity[_0x52fc('0xf')], goldReq);
craftingRecipes[_0x52fc('0x5')](gold['name'], gold);
var amethystReq = [new CraftingRequirement(quartz, 0xa)];
amethyst = new CraftingItem(_0x52fc('0x11'), 0x3c, 0x12c, rarity[_0x52fc('0x8')], amethystReq);
craftingRecipes[_0x52fc('0x5')](amethyst[_0x52fc('0x6')], amethyst);
var pendantReq = [
    new CraftingRequirement(amethyst, 0x7),
    new CraftingRequirement(silver, 0x2)
];
pendant = new CraftingItem('Pendant', 0xb4, 0x1f4, rarity[_0x52fc('0xd')], pendantReq);
craftingRecipes[_0x52fc('0x5')](pendant[_0x52fc('0x6')], pendant);
var necklaceReq = [
    new CraftingRequirement(pendant, 0x3),
    new CraftingRequirement(gold, 0x2)
];
necklace = new CraftingItem('Necklace', 0x2f8, 0x1f4, rarity['EPIC'], necklaceReq);
craftingRecipes[_0x52fc('0x5')](necklace['name'], necklace);
var orbReq = [new CraftingRequirement(quartz, 0x14)];
orb = new CraftingItem(_0x52fc('0x12'), 0x3c, 0x12c, rarity['COMMON'], orbReq);
craftingRecipes[_0x52fc('0x5')](orb[_0x52fc('0x6')], orb);
var waterReq = [
    new CraftingRequirement(orb, 0x2),
    new CraftingRequirement(silver, 0x1)
];
water = new CraftingItem(_0x52fc('0x13'), 0x168, 0x320, rarity[_0x52fc('0xd')], waterReq);
craftingRecipes[_0x52fc('0x5')](water[_0x52fc('0x6')], water);
var fireReq = [
    new CraftingRequirement(orb, 0x6),
    new CraftingRequirement(gold, 0x1)
];
fire = new CraftingItem('Fire', 0x2d0, 0x3e8, rarity[_0x52fc('0xf')], fireReq);
craftingRecipes[_0x52fc('0x5')](fire[_0x52fc('0x6')], fire);
var waterstoneReq = [
    new CraftingRequirement(water, 0x2),
    new CraftingRequirement(ribbon, 0xa)
];
waterstone = new CraftingItem(_0x52fc('0x14'), 0x2d0, 0x5dc, rarity[_0x52fc('0xd')], waterstoneReq);
craftingRecipes['set'](waterstone[_0x52fc('0x6')], waterstone);
var firestoneReq = [
    new CraftingRequirement(fire, 0x1),
    new CraftingRequirement(sparkles, 0x2)
];
firestone = new CraftingItem(_0x52fc('0x15'), 0x2d0, 0x5dc, rarity[_0x52fc('0xf')], firestoneReq);
craftingRecipes[_0x52fc('0x5')](firestone[_0x52fc('0x6')], firestone);
var elementstoneReq = [
    new CraftingRequirement(firestone, 0x1),
    new CraftingRequirement(waterstone, 0x1)
];
elementstone = new CraftingItem(_0x52fc('0x16'), 0x5a0, 0x1388, rarity[_0x52fc('0x17')], elementstoneReq);
craftingRecipes[_0x52fc('0x5')](elementstone[_0x52fc('0x6')], elementstone);
var artifactReq = [
    new CraftingRequirement(elementstone, 0x1),
    new CraftingRequirement(necklace, 0x1)
];
artifact = new CraftingItem(_0x52fc('0x18'), 0x10e0, 0x2710, rarity[_0x52fc('0x17')], artifactReq);
craftingRecipes[_0x52fc('0x5')](artifact[_0x52fc('0x6')], artifact);