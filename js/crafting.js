var _0x4108 = [
    'EPIC',
    'Silver',
    'Necklace',
    'Orb',
    'Water',
    'Fire',
    'Waterstone',
    'Firestone',
    'LEGENDARY',
    'RAW',
    'Rock',
    'name',
    'set',
    'COMMON',
    'Ribbon',
    'RARE',
    'Metal',
    'Needles',
    'Sparkles'
];
(function (_0x23e127, _0x21c202) {
    var _0x5e1060 = function (_0x2cf92f) {
        while (--_0x2cf92f) {
            _0x23e127['push'](_0x23e127['shift']());
        }
    };
    _0x5e1060(++_0x21c202);
}(_0x4108, 0x126));
var _0x1f22 = function (_0x2aaa4f, _0x4b3b9b) {
    _0x2aaa4f = _0x2aaa4f - 0x0;
    var _0x3ef50c = _0x4108[_0x2aaa4f];
    return _0x3ef50c;
};
cotton = new CraftingItem('Cotton', 0x0, 0x0, rarity['RAW']);
log = new CraftingItem('Log', 0x0, 0x0, rarity[_0x1f22('0x0')]);
rock = new CraftingItem(_0x1f22('0x1'), 0x0, 0x0, rarity['RAW']);
quartz = new CraftingItem('Quartz', 0x0, 0x0, rarity[_0x1f22('0x0')]);
craftingRecipes['set'](cotton[_0x1f22('0x2')], cotton);
craftingRecipes['set'](log[_0x1f22('0x2')], log);
craftingRecipes[_0x1f22('0x3')](rock['name'], rock);
craftingRecipes['set'](quartz['name'], quartz);
var stringReq = [new CraftingRequirement(cotton, 0x3)];
string = new CraftingItem('String', 0x5, 0x32, rarity[_0x1f22('0x4')], stringReq);
craftingRecipes[_0x1f22('0x3')](string[_0x1f22('0x2')], string);
var woodReq = [new CraftingRequirement(log, 0x3)];
wood = new CraftingItem('Wood', 0x5, 0x32, rarity['COMMON'], woodReq);
craftingRecipes['set'](wood[_0x1f22('0x2')], wood);
var ribbonReq = [
    new CraftingRequirement(string, 0x2),
    new CraftingRequirement(wood, 0x2)
];
ribbon = new CraftingItem(_0x1f22('0x5'), 0xf, 0x64, rarity[_0x1f22('0x6')], ribbonReq);
craftingRecipes['set'](ribbon[_0x1f22('0x2')], ribbon);
var metalReq = [new CraftingRequirement(rock, 0x3)];
metal = new CraftingItem(_0x1f22('0x7'), 0xf, 0x64, rarity[_0x1f22('0x4')], metalReq);
craftingRecipes[_0x1f22('0x3')](metal[_0x1f22('0x2')], metal);
var needlesReq = [
    new CraftingRequirement(metal, 0x4),
    new CraftingRequirement(ribbon, 0x1)
];
needles = new CraftingItem(_0x1f22('0x8'), 0x1e, 0xc8, rarity[_0x1f22('0x6')], needlesReq);
craftingRecipes[_0x1f22('0x3')](needles['name'], needles);
var sparklesReq = [
    new CraftingRequirement(needles, 0x2),
    new CraftingRequirement(ribbon, 0x2)
];
sparkles = new CraftingItem(_0x1f22('0x9'), 0x3c, 0x12c, rarity[_0x1f22('0xa')], sparklesReq);
craftingRecipes[_0x1f22('0x3')](sparkles[_0x1f22('0x2')], sparkles);
var bronzeReq = [new CraftingRequirement(rock, 0x4)];
bronze = new CraftingItem('Bronze', 0x1e, 0xc8, rarity[_0x1f22('0x4')], bronzeReq);
craftingRecipes[_0x1f22('0x3')](bronze[_0x1f22('0x2')], bronze);
var silverReq = [
    new CraftingRequirement(bronze, 0x3),
    new CraftingRequirement(sparkles, 0x1)
];
silver = new CraftingItem(_0x1f22('0xb'), 0x78, 0x12c, rarity[_0x1f22('0x6')], silverReq);
craftingRecipes[_0x1f22('0x3')](silver[_0x1f22('0x2')], silver);
var goldReq = [
    new CraftingRequirement(silver, 0x2),
    new CraftingRequirement(sparkles, 0x2)
];
gold = new CraftingItem('Gold', 0x168, 0x1f4, rarity['EPIC'], goldReq);
craftingRecipes[_0x1f22('0x3')](gold[_0x1f22('0x2')], gold);
var amethystReq = [new CraftingRequirement(quartz, 0xa)];
amethyst = new CraftingItem('Amethyst', 0x3c, 0x12c, rarity['COMMON'], amethystReq);
craftingRecipes[_0x1f22('0x3')](amethyst[_0x1f22('0x2')], amethyst);
var pendantReq = [
    new CraftingRequirement(amethyst, 0x7),
    new CraftingRequirement(silver, 0x2)
];
pendant = new CraftingItem('Pendant', 0xb4, 0x1f4, rarity[_0x1f22('0x6')], pendantReq);
craftingRecipes[_0x1f22('0x3')](pendant['name'], pendant);
var necklaceReq = [
    new CraftingRequirement(pendant, 0x3),
    new CraftingRequirement(gold, 0x2)
];
necklace = new CraftingItem(_0x1f22('0xc'), 0x2f8, 0x1f4, rarity[_0x1f22('0xa')], necklaceReq);
craftingRecipes[_0x1f22('0x3')](necklace[_0x1f22('0x2')], necklace);
var orbReq = [new CraftingRequirement(quartz, 0x14)];
orb = new CraftingItem(_0x1f22('0xd'), 0x3c, 0x12c, rarity[_0x1f22('0x4')], orbReq);
craftingRecipes[_0x1f22('0x3')](orb['name'], orb);
var waterReq = [
    new CraftingRequirement(orb, 0x2),
    new CraftingRequirement(silver, 0x1)
];
water = new CraftingItem(_0x1f22('0xe'), 0x168, 0x320, rarity[_0x1f22('0x6')], waterReq);
craftingRecipes[_0x1f22('0x3')](water[_0x1f22('0x2')], water);
var fireReq = [
    new CraftingRequirement(orb, 0x6),
    new CraftingRequirement(gold, 0x1)
];
fire = new CraftingItem(_0x1f22('0xf'), 0x2d0, 0x3e8, rarity['EPIC'], fireReq);
craftingRecipes['set'](fire[_0x1f22('0x2')], fire);
var waterstoneReq = [
    new CraftingRequirement(water, 0x2),
    new CraftingRequirement(ribbon, 0xa)
];
waterstone = new CraftingItem(_0x1f22('0x10'), 0x2d0, 0x5dc, rarity['RARE'], waterstoneReq);
craftingRecipes[_0x1f22('0x3')](waterstone[_0x1f22('0x2')], waterstone);
var firestoneReq = [
    new CraftingRequirement(fire, 0x1),
    new CraftingRequirement(sparkles, 0x2)
];
firestone = new CraftingItem(_0x1f22('0x11'), 0x2d0, 0x5dc, rarity['EPIC'], firestoneReq);
craftingRecipes[_0x1f22('0x3')](firestone[_0x1f22('0x2')], firestone);
var elementstoneReq = [
    new CraftingRequirement(firestone, 0x1),
    new CraftingRequirement(waterstone, 0x1)
];
elementstone = new CraftingItem('Elementstone', 0x5a0, 0x1388, rarity[_0x1f22('0x12')], elementstoneReq);
craftingRecipes[_0x1f22('0x3')](elementstone[_0x1f22('0x2')], elementstone);
var artifactReq = [
    new CraftingRequirement(elementstone, 0x1),
    new CraftingRequirement(necklace, 0x1)
];
artifact = new CraftingItem('Artifact', 0x10e0, 0x2710, rarity['LEGENDARY'], artifactReq);
craftingRecipes[_0x1f22('0x3')](artifact[_0x1f22('0x2')], artifact);