var _0x17fc = [
    'set',
    'name',
    'String',
    'Wood',
    'COMMON',
    'Ribbon',
    'RARE',
    'Metal',
    'Needles',
    'Sparkles',
    'EPIC',
    'Gold',
    'Amethyst',
    'Pendant',
    'Orb',
    'Fire',
    'Waterstone',
    'Firestone',
    'Elementstone',
    'LEGENDARY',
    'Artifact',
    'Cotton',
    'RAW',
    'Log',
    'Quartz'
];
(function (_0xba9f74, _0x4a540e) {
    var _0x51f7f4 = function (_0xb9acb9) {
        while (--_0xb9acb9) {
            _0xba9f74['push'](_0xba9f74['shift']());
        }
    };
    _0x51f7f4(++_0x4a540e);
}(_0x17fc, 0x10f));
var _0x1bdb = function (_0x341247, _0x44f159) {
    _0x341247 = _0x341247 - 0x0;
    var _0x4f2496 = _0x17fc[_0x341247];
    return _0x4f2496;
};
cotton = new CraftingItem(_0x1bdb('0x0'), 0x0, 0x0, rarity[_0x1bdb('0x1')]);
log = new CraftingItem(_0x1bdb('0x2'), 0x0, 0x0, rarity[_0x1bdb('0x1')]);
rock = new CraftingItem('Rock', 0x0, 0x0, rarity[_0x1bdb('0x1')]);
quartz = new CraftingItem(_0x1bdb('0x3'), 0x0, 0x0, rarity['RAW']);
craftingRecipes[_0x1bdb('0x4')](cotton[_0x1bdb('0x5')], cotton);
craftingRecipes[_0x1bdb('0x4')](log['name'], log);
craftingRecipes[_0x1bdb('0x4')](rock['name'], rock);
craftingRecipes[_0x1bdb('0x4')](quartz['name'], quartz);
var stringReq = [new CraftingRequirement(cotton, 0x3)];
string = new CraftingItem(_0x1bdb('0x6'), 0x5, 0x32, rarity['COMMON'], stringReq);
craftingRecipes[_0x1bdb('0x4')](string[_0x1bdb('0x5')], string);
var woodReq = [new CraftingRequirement(log, 0x3)];
wood = new CraftingItem(_0x1bdb('0x7'), 0x5, 0x32, rarity[_0x1bdb('0x8')], woodReq);
craftingRecipes[_0x1bdb('0x4')](wood[_0x1bdb('0x5')], wood);
var ribbonReq = [
    new CraftingRequirement(string, 0x2),
    new CraftingRequirement(wood, 0x2)
];
ribbon = new CraftingItem(_0x1bdb('0x9'), 0xf, 0x64, rarity[_0x1bdb('0xa')], ribbonReq);
craftingRecipes[_0x1bdb('0x4')](ribbon[_0x1bdb('0x5')], ribbon);
var metalReq = [new CraftingRequirement(rock, 0x3)];
metal = new CraftingItem(_0x1bdb('0xb'), 0xf, 0x64, rarity['COMMON'], metalReq);
craftingRecipes['set'](metal[_0x1bdb('0x5')], metal);
var needlesReq = [
    new CraftingRequirement(metal, 0x4),
    new CraftingRequirement(ribbon, 0x1)
];
needles = new CraftingItem(_0x1bdb('0xc'), 0x1e, 0xc8, rarity[_0x1bdb('0xa')], needlesReq);
craftingRecipes['set'](needles[_0x1bdb('0x5')], needles);
var sparklesReq = [
    new CraftingRequirement(needles, 0x2),
    new CraftingRequirement(ribbon, 0x2)
];
sparkles = new CraftingItem(_0x1bdb('0xd'), 0x3c, 0x12c, rarity[_0x1bdb('0xe')], sparklesReq);
craftingRecipes[_0x1bdb('0x4')](sparkles['name'], sparkles);
var bronzeReq = [new CraftingRequirement(rock, 0x4)];
bronze = new CraftingItem('Bronze', 0x1e, 0xc8, rarity[_0x1bdb('0x8')], bronzeReq);
craftingRecipes['set'](bronze[_0x1bdb('0x5')], bronze);
var silverReq = [
    new CraftingRequirement(bronze, 0x3),
    new CraftingRequirement(sparkles, 0x1)
];
silver = new CraftingItem('Silver', 0x78, 0x12c, rarity['RARE'], silverReq);
craftingRecipes[_0x1bdb('0x4')](silver[_0x1bdb('0x5')], silver);
var goldReq = [
    new CraftingRequirement(silver, 0x2),
    new CraftingRequirement(sparkles, 0x2)
];
gold = new CraftingItem(_0x1bdb('0xf'), 0x168, 0x1f4, rarity[_0x1bdb('0xe')], goldReq);
craftingRecipes['set'](gold[_0x1bdb('0x5')], gold);
var amethystReq = [new CraftingRequirement(quartz, 0xa)];
amethyst = new CraftingItem(_0x1bdb('0x10'), 0x3c, 0x12c, rarity[_0x1bdb('0x8')], amethystReq);
craftingRecipes['set'](amethyst[_0x1bdb('0x5')], amethyst);
var pendantReq = [
    new CraftingRequirement(amethyst, 0x7),
    new CraftingRequirement(silver, 0x2)
];
pendant = new CraftingItem(_0x1bdb('0x11'), 0xb4, 0x1f4, rarity[_0x1bdb('0xa')], pendantReq);
craftingRecipes[_0x1bdb('0x4')](pendant[_0x1bdb('0x5')], pendant);
var necklaceReq = [
    new CraftingRequirement(pendant, 0x3),
    new CraftingRequirement(gold, 0x2)
];
necklace = new CraftingItem('Necklace', 0x2f8, 0x1f4, rarity['EPIC'], necklaceReq);
craftingRecipes[_0x1bdb('0x4')](necklace[_0x1bdb('0x5')], necklace);
var orbReq = [new CraftingRequirement(quartz, 0x14)];
orb = new CraftingItem(_0x1bdb('0x12'), 0x3c, 0x12c, rarity[_0x1bdb('0x8')], orbReq);
craftingRecipes[_0x1bdb('0x4')](orb[_0x1bdb('0x5')], orb);
var waterReq = [
    new CraftingRequirement(orb, 0x2),
    new CraftingRequirement(silver, 0x1)
];
water = new CraftingItem('Water', 0x168, 0x320, rarity[_0x1bdb('0xa')], waterReq);
craftingRecipes[_0x1bdb('0x4')](water[_0x1bdb('0x5')], water);
var fireReq = [
    new CraftingRequirement(orb, 0x6),
    new CraftingRequirement(gold, 0x1)
];
fire = new CraftingItem(_0x1bdb('0x13'), 0x2d0, 0x3e8, rarity[_0x1bdb('0xe')], fireReq);
craftingRecipes[_0x1bdb('0x4')](fire['name'], fire);
var waterstoneReq = [
    new CraftingRequirement(water, 0x2),
    new CraftingRequirement(ribbon, 0xa)
];
waterstone = new CraftingItem(_0x1bdb('0x14'), 0x2d0, 0x5dc, rarity['RARE'], waterstoneReq);
craftingRecipes['set'](waterstone[_0x1bdb('0x5')], waterstone);
var firestoneReq = [
    new CraftingRequirement(fire, 0x1),
    new CraftingRequirement(sparkles, 0x2)
];
firestone = new CraftingItem(_0x1bdb('0x15'), 0x2d0, 0x5dc, rarity[_0x1bdb('0xe')], firestoneReq);
craftingRecipes[_0x1bdb('0x4')](firestone[_0x1bdb('0x5')], firestone);
var elementstoneReq = [
    new CraftingRequirement(firestone, 0x1),
    new CraftingRequirement(waterstone, 0x1)
];
elementstone = new CraftingItem(_0x1bdb('0x16'), 0x5a0, 0x1388, rarity[_0x1bdb('0x17')], elementstoneReq);
craftingRecipes[_0x1bdb('0x4')](elementstone[_0x1bdb('0x5')], elementstone);
var artifactReq = [
    new CraftingRequirement(elementstone, 0x1),
    new CraftingRequirement(necklace, 0x1)
];
artifact = new CraftingItem(_0x1bdb('0x18'), 0x10e0, 0x2710, rarity[_0x1bdb('0x17')], artifactReq);
craftingRecipes[_0x1bdb('0x4')](artifact[_0x1bdb('0x5')], artifact);