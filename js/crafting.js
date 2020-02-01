var _0x26c7 = [
    'RARE',
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
    'LEGENDARY',
    'Artifact',
    'RAW',
    'Rock',
    'Quartz',
    'set',
    'name',
    'String',
    'Wood',
    'COMMON',
    'Metal',
    'Needles'
];
(function (_0x1e628b, _0x3b9ab9) {
    var _0x2944b5 = function (_0x52bdba) {
        while (--_0x52bdba) {
            _0x1e628b['push'](_0x1e628b['shift']());
        }
    };
    _0x2944b5(++_0x3b9ab9);
}(_0x26c7, 0xb6));
var _0x281b = function (_0x55fa15, _0x4fa50a) {
    _0x55fa15 = _0x55fa15 - 0x0;
    var _0x49c64f = _0x26c7[_0x55fa15];
    return _0x49c64f;
};
cotton = new CraftingItem('Cotton', 0x0, 0x0, rarity[_0x281b('0x0')]);
log = new CraftingItem('Log', 0x0, 0x0, rarity[_0x281b('0x0')]);
rock = new CraftingItem(_0x281b('0x1'), 0x0, 0x0, rarity[_0x281b('0x0')]);
quartz = new CraftingItem(_0x281b('0x2'), 0x0, 0x0, rarity[_0x281b('0x0')]);
craftingRecipes[_0x281b('0x3')](cotton[_0x281b('0x4')], cotton);
craftingRecipes[_0x281b('0x3')](log[_0x281b('0x4')], log);
craftingRecipes[_0x281b('0x3')](rock[_0x281b('0x4')], rock);
craftingRecipes[_0x281b('0x3')](quartz[_0x281b('0x4')], quartz);
var stringReq = [new CraftingRequirement(cotton, 0x3)];
string = new CraftingItem(_0x281b('0x5'), 0x5, 0x32, rarity['COMMON'], stringReq);
craftingRecipes[_0x281b('0x3')](string[_0x281b('0x4')], string);
var woodReq = [new CraftingRequirement(log, 0x3)];
wood = new CraftingItem(_0x281b('0x6'), 0x5, 0x32, rarity[_0x281b('0x7')], woodReq);
craftingRecipes[_0x281b('0x3')](wood['name'], wood);
var ribbonReq = [
    new CraftingRequirement(string, 0x2),
    new CraftingRequirement(wood, 0x2)
];
ribbon = new CraftingItem('Ribbon', 0xf, 0x64, rarity['RARE'], ribbonReq);
craftingRecipes['set'](ribbon[_0x281b('0x4')], ribbon);
var metalReq = [new CraftingRequirement(rock, 0x3)];
metal = new CraftingItem(_0x281b('0x8'), 0xf, 0x64, rarity['COMMON'], metalReq);
craftingRecipes[_0x281b('0x3')](metal[_0x281b('0x4')], metal);
var needlesReq = [
    new CraftingRequirement(metal, 0x4),
    new CraftingRequirement(ribbon, 0x1)
];
needles = new CraftingItem(_0x281b('0x9'), 0x1e, 0xc8, rarity[_0x281b('0xa')], needlesReq);
craftingRecipes[_0x281b('0x3')](needles[_0x281b('0x4')], needles);
var sparklesReq = [
    new CraftingRequirement(needles, 0x2),
    new CraftingRequirement(ribbon, 0x2)
];
sparkles = new CraftingItem('Sparkles', 0x3c, 0x12c, rarity[_0x281b('0xb')], sparklesReq);
craftingRecipes[_0x281b('0x3')](sparkles[_0x281b('0x4')], sparkles);
var bronzeReq = [new CraftingRequirement(rock, 0x4)];
bronze = new CraftingItem(_0x281b('0xc'), 0x1e, 0xc8, rarity['COMMON'], bronzeReq);
craftingRecipes[_0x281b('0x3')](bronze[_0x281b('0x4')], bronze);
var silverReq = [
    new CraftingRequirement(bronze, 0x3),
    new CraftingRequirement(sparkles, 0x1)
];
silver = new CraftingItem(_0x281b('0xd'), 0x78, 0x12c, rarity['RARE'], silverReq);
craftingRecipes[_0x281b('0x3')](silver[_0x281b('0x4')], silver);
var goldReq = [
    new CraftingRequirement(silver, 0x2),
    new CraftingRequirement(sparkles, 0x2)
];
gold = new CraftingItem(_0x281b('0xe'), 0x168, 0x1f4, rarity[_0x281b('0xb')], goldReq);
craftingRecipes[_0x281b('0x3')](gold['name'], gold);
var amethystReq = [new CraftingRequirement(quartz, 0xa)];
amethyst = new CraftingItem(_0x281b('0xf'), 0x3c, 0x12c, rarity[_0x281b('0x7')], amethystReq);
craftingRecipes['set'](amethyst[_0x281b('0x4')], amethyst);
var pendantReq = [
    new CraftingRequirement(amethyst, 0x7),
    new CraftingRequirement(silver, 0x2)
];
pendant = new CraftingItem(_0x281b('0x10'), 0xb4, 0x1f4, rarity[_0x281b('0xa')], pendantReq);
craftingRecipes[_0x281b('0x3')](pendant[_0x281b('0x4')], pendant);
var necklaceReq = [
    new CraftingRequirement(pendant, 0x3),
    new CraftingRequirement(gold, 0x2)
];
necklace = new CraftingItem(_0x281b('0x11'), 0x2f8, 0x1f4, rarity['EPIC'], necklaceReq);
craftingRecipes[_0x281b('0x3')](necklace[_0x281b('0x4')], necklace);
var orbReq = [new CraftingRequirement(quartz, 0x14)];
orb = new CraftingItem(_0x281b('0x12'), 0x3c, 0x12c, rarity[_0x281b('0x7')], orbReq);
craftingRecipes[_0x281b('0x3')](orb['name'], orb);
var waterReq = [
    new CraftingRequirement(orb, 0x2),
    new CraftingRequirement(silver, 0x1)
];
water = new CraftingItem(_0x281b('0x13'), 0x168, 0x320, rarity['RARE'], waterReq);
craftingRecipes[_0x281b('0x3')](water[_0x281b('0x4')], water);
var fireReq = [
    new CraftingRequirement(orb, 0x6),
    new CraftingRequirement(gold, 0x1)
];
fire = new CraftingItem(_0x281b('0x14'), 0x2d0, 0x3e8, rarity[_0x281b('0xb')], fireReq);
craftingRecipes[_0x281b('0x3')](fire[_0x281b('0x4')], fire);
var waterstoneReq = [
    new CraftingRequirement(water, 0x2),
    new CraftingRequirement(ribbon, 0xa)
];
waterstone = new CraftingItem('Waterstone', 0x2d0, 0x5dc, rarity['RARE'], waterstoneReq);
craftingRecipes[_0x281b('0x3')](waterstone[_0x281b('0x4')], waterstone);
var firestoneReq = [
    new CraftingRequirement(fire, 0x1),
    new CraftingRequirement(sparkles, 0x2)
];
firestone = new CraftingItem(_0x281b('0x15'), 0x2d0, 0x5dc, rarity[_0x281b('0xb')], firestoneReq);
craftingRecipes[_0x281b('0x3')](firestone['name'], firestone);
var elementstoneReq = [
    new CraftingRequirement(firestone, 0x1),
    new CraftingRequirement(waterstone, 0x1)
];
elementstone = new CraftingItem('Elementstone', 0x5a0, 0x1388, rarity[_0x281b('0x16')], elementstoneReq);
craftingRecipes[_0x281b('0x3')](elementstone[_0x281b('0x4')], elementstone);
var artifactReq = [
    new CraftingRequirement(elementstone, 0x1),
    new CraftingRequirement(necklace, 0x1)
];
artifact = new CraftingItem(_0x281b('0x17'), 0x10e0, 0x2710, rarity[_0x281b('0x16')], artifactReq);
craftingRecipes[_0x281b('0x3')](artifact['name'], artifact);