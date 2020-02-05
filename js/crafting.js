var _0x1be6 = [
    'Artifact',
    'Cotton',
    'RAW',
    'Rock',
    'Quartz',
    'set',
    'name',
    'COMMON',
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
    'Pendant',
    'Necklace',
    'Orb',
    'Water',
    'Fire',
    'Firestone',
    'Elementstone',
    'LEGENDARY'
];
(function (_0x3aa7ee, _0x2a609c) {
    var _0x2f714c = function (_0x4b7020) {
        while (--_0x4b7020) {
            _0x3aa7ee['push'](_0x3aa7ee['shift']());
        }
    };
    _0x2f714c(++_0x2a609c);
}(_0x1be6, 0x16d));
var _0x3423 = function (_0x201926, _0x4125b0) {
    _0x201926 = _0x201926 - 0x0;
    var _0x460ef9 = _0x1be6[_0x201926];
    return _0x460ef9;
};
cotton = new CraftingItem(_0x3423('0x0'), 0x0, 0x0, rarity[_0x3423('0x1')]);
log = new CraftingItem('Log', 0x0, 0x0, rarity[_0x3423('0x1')]);
rock = new CraftingItem(_0x3423('0x2'), 0x0, 0x0, rarity[_0x3423('0x1')]);
quartz = new CraftingItem(_0x3423('0x3'), 0x0, 0x0, rarity[_0x3423('0x1')]);
craftingRecipes[_0x3423('0x4')](cotton['name'], cotton);
craftingRecipes[_0x3423('0x4')](log['name'], log);
craftingRecipes[_0x3423('0x4')](rock[_0x3423('0x5')], rock);
craftingRecipes[_0x3423('0x4')](quartz[_0x3423('0x5')], quartz);
var stringReq = [new CraftingRequirement(cotton, 0x3)];
string = new CraftingItem('String', 0x5, 0x32, rarity[_0x3423('0x6')], stringReq);
craftingRecipes[_0x3423('0x4')](string[_0x3423('0x5')], string);
var woodReq = [new CraftingRequirement(log, 0x3)];
wood = new CraftingItem('Wood', 0x5, 0x32, rarity[_0x3423('0x6')], woodReq);
craftingRecipes['set'](wood[_0x3423('0x5')], wood);
var ribbonReq = [
    new CraftingRequirement(string, 0x2),
    new CraftingRequirement(wood, 0x2)
];
ribbon = new CraftingItem(_0x3423('0x7'), 0xf, 0x64, rarity[_0x3423('0x8')], ribbonReq);
craftingRecipes['set'](ribbon['name'], ribbon);
var metalReq = [new CraftingRequirement(rock, 0x3)];
metal = new CraftingItem(_0x3423('0x9'), 0xf, 0x64, rarity[_0x3423('0x6')], metalReq);
craftingRecipes[_0x3423('0x4')](metal[_0x3423('0x5')], metal);
var needlesReq = [
    new CraftingRequirement(metal, 0x4),
    new CraftingRequirement(ribbon, 0x1)
];
needles = new CraftingItem(_0x3423('0xa'), 0x1e, 0xc8, rarity[_0x3423('0x8')], needlesReq);
craftingRecipes[_0x3423('0x4')](needles['name'], needles);
var sparklesReq = [
    new CraftingRequirement(needles, 0x2),
    new CraftingRequirement(ribbon, 0x2)
];
sparkles = new CraftingItem(_0x3423('0xb'), 0x3c, 0x12c, rarity[_0x3423('0xc')], sparklesReq);
craftingRecipes[_0x3423('0x4')](sparkles[_0x3423('0x5')], sparkles);
var bronzeReq = [new CraftingRequirement(rock, 0x4)];
bronze = new CraftingItem(_0x3423('0xd'), 0x1e, 0xc8, rarity[_0x3423('0x6')], bronzeReq);
craftingRecipes['set'](bronze['name'], bronze);
var silverReq = [
    new CraftingRequirement(bronze, 0x3),
    new CraftingRequirement(sparkles, 0x1)
];
silver = new CraftingItem(_0x3423('0xe'), 0x78, 0x12c, rarity[_0x3423('0x8')], silverReq);
craftingRecipes[_0x3423('0x4')](silver[_0x3423('0x5')], silver);
var goldReq = [
    new CraftingRequirement(silver, 0x2),
    new CraftingRequirement(sparkles, 0x2)
];
gold = new CraftingItem(_0x3423('0xf'), 0x168, 0x1f4, rarity[_0x3423('0xc')], goldReq);
craftingRecipes[_0x3423('0x4')](gold[_0x3423('0x5')], gold);
var amethystReq = [new CraftingRequirement(quartz, 0xa)];
amethyst = new CraftingItem(_0x3423('0x10'), 0x3c, 0x12c, rarity[_0x3423('0x6')], amethystReq);
craftingRecipes['set'](amethyst['name'], amethyst);
var pendantReq = [
    new CraftingRequirement(amethyst, 0x7),
    new CraftingRequirement(silver, 0x2)
];
pendant = new CraftingItem(_0x3423('0x11'), 0xb4, 0x1f4, rarity[_0x3423('0x8')], pendantReq);
craftingRecipes['set'](pendant[_0x3423('0x5')], pendant);
var necklaceReq = [
    new CraftingRequirement(pendant, 0x3),
    new CraftingRequirement(gold, 0x2)
];
necklace = new CraftingItem(_0x3423('0x12'), 0x2f8, 0x1f4, rarity[_0x3423('0xc')], necklaceReq);
craftingRecipes[_0x3423('0x4')](necklace[_0x3423('0x5')], necklace);
var orbReq = [new CraftingRequirement(quartz, 0x14)];
orb = new CraftingItem(_0x3423('0x13'), 0x3c, 0x12c, rarity[_0x3423('0x6')], orbReq);
craftingRecipes['set'](orb[_0x3423('0x5')], orb);
var waterReq = [
    new CraftingRequirement(orb, 0x2),
    new CraftingRequirement(silver, 0x1)
];
water = new CraftingItem(_0x3423('0x14'), 0x168, 0x320, rarity[_0x3423('0x8')], waterReq);
craftingRecipes[_0x3423('0x4')](water[_0x3423('0x5')], water);
var fireReq = [
    new CraftingRequirement(orb, 0x6),
    new CraftingRequirement(gold, 0x1)
];
fire = new CraftingItem(_0x3423('0x15'), 0x2d0, 0x3e8, rarity[_0x3423('0xc')], fireReq);
craftingRecipes[_0x3423('0x4')](fire[_0x3423('0x5')], fire);
var waterstoneReq = [
    new CraftingRequirement(water, 0x2),
    new CraftingRequirement(ribbon, 0xa)
];
waterstone = new CraftingItem('Waterstone', 0x2d0, 0x5dc, rarity['RARE'], waterstoneReq);
craftingRecipes[_0x3423('0x4')](waterstone['name'], waterstone);
var firestoneReq = [
    new CraftingRequirement(fire, 0x1),
    new CraftingRequirement(sparkles, 0x2)
];
firestone = new CraftingItem(_0x3423('0x16'), 0x2d0, 0x5dc, rarity['EPIC'], firestoneReq);
craftingRecipes[_0x3423('0x4')](firestone[_0x3423('0x5')], firestone);
var elementstoneReq = [
    new CraftingRequirement(firestone, 0x1),
    new CraftingRequirement(waterstone, 0x1)
];
elementstone = new CraftingItem(_0x3423('0x17'), 0x5a0, 0x1388, rarity[_0x3423('0x18')], elementstoneReq);
craftingRecipes[_0x3423('0x4')](elementstone[_0x3423('0x5')], elementstone);
var artifactReq = [
    new CraftingRequirement(elementstone, 0x1),
    new CraftingRequirement(necklace, 0x1)
];
artifact = new CraftingItem(_0x3423('0x19'), 0x10e0, 0x2710, rarity[_0x3423('0x18')], artifactReq);
craftingRecipes['set'](artifact[_0x3423('0x5')], artifact);