var _0x3269 = [
    'Artifact',
    'LEGENDARY',
    'Cotton',
    'RAW',
    'Log',
    'Rock',
    'Quartz',
    'name',
    'set',
    'String',
    'Wood',
    'COMMON',
    'Ribbon',
    'RARE',
    'Metal',
    'Sparkles',
    'EPIC',
    'Bronze',
    'Silver',
    'Gold',
    'Pendant',
    'Necklace',
    'Orb',
    'Fire',
    'Firestone',
    'Elementstone'
];
(function (_0x2e22de, _0x1af2a1) {
    var _0x342a97 = function (_0x4183ce) {
        while (--_0x4183ce) {
            _0x2e22de['push'](_0x2e22de['shift']());
        }
    };
    _0x342a97(++_0x1af2a1);
}(_0x3269, 0x106));
var _0xe9d2 = function (_0x30173b, _0x5365ed) {
    _0x30173b = _0x30173b - 0x0;
    var _0x44290c = _0x3269[_0x30173b];
    return _0x44290c;
};
cotton = new CraftingItem(_0xe9d2('0x0'), 0x0, 0x0, rarity[_0xe9d2('0x1')]);
log = new CraftingItem(_0xe9d2('0x2'), 0x0, 0x0, rarity[_0xe9d2('0x1')]);
rock = new CraftingItem(_0xe9d2('0x3'), 0x0, 0x0, rarity['RAW']);
quartz = new CraftingItem(_0xe9d2('0x4'), 0x0, 0x0, rarity[_0xe9d2('0x1')]);
craftingRecipes['set'](cotton[_0xe9d2('0x5')], cotton);
craftingRecipes[_0xe9d2('0x6')](log['name'], log);
craftingRecipes[_0xe9d2('0x6')](rock['name'], rock);
craftingRecipes[_0xe9d2('0x6')](quartz[_0xe9d2('0x5')], quartz);
var stringReq = [new CraftingRequirement(cotton, 0x3)];
string = new CraftingItem(_0xe9d2('0x7'), 0x5, 0x32, rarity['COMMON'], stringReq);
craftingRecipes[_0xe9d2('0x6')](string['name'], string);
var woodReq = [new CraftingRequirement(log, 0x3)];
wood = new CraftingItem(_0xe9d2('0x8'), 0x5, 0x32, rarity[_0xe9d2('0x9')], woodReq);
craftingRecipes[_0xe9d2('0x6')](wood[_0xe9d2('0x5')], wood);
var ribbonReq = [
    new CraftingRequirement(string, 0x2),
    new CraftingRequirement(wood, 0x2)
];
ribbon = new CraftingItem(_0xe9d2('0xa'), 0xf, 0x64, rarity[_0xe9d2('0xb')], ribbonReq);
craftingRecipes[_0xe9d2('0x6')](ribbon['name'], ribbon);
var metalReq = [new CraftingRequirement(rock, 0x3)];
metal = new CraftingItem(_0xe9d2('0xc'), 0xf, 0x64, rarity[_0xe9d2('0x9')], metalReq);
craftingRecipes[_0xe9d2('0x6')](metal[_0xe9d2('0x5')], metal);
var needlesReq = [
    new CraftingRequirement(metal, 0x4),
    new CraftingRequirement(ribbon, 0x1)
];
needles = new CraftingItem('Needles', 0x1e, 0xc8, rarity[_0xe9d2('0xb')], needlesReq);
craftingRecipes[_0xe9d2('0x6')](needles[_0xe9d2('0x5')], needles);
var sparklesReq = [
    new CraftingRequirement(needles, 0x2),
    new CraftingRequirement(ribbon, 0x2)
];
sparkles = new CraftingItem(_0xe9d2('0xd'), 0x3c, 0x12c, rarity[_0xe9d2('0xe')], sparklesReq);
craftingRecipes[_0xe9d2('0x6')](sparkles[_0xe9d2('0x5')], sparkles);
var bronzeReq = [new CraftingRequirement(rock, 0x4)];
bronze = new CraftingItem(_0xe9d2('0xf'), 0x1e, 0xc8, rarity[_0xe9d2('0x9')], bronzeReq);
craftingRecipes[_0xe9d2('0x6')](bronze['name'], bronze);
var silverReq = [
    new CraftingRequirement(bronze, 0x3),
    new CraftingRequirement(sparkles, 0x1)
];
silver = new CraftingItem(_0xe9d2('0x10'), 0x78, 0x12c, rarity[_0xe9d2('0xb')], silverReq);
craftingRecipes[_0xe9d2('0x6')](silver[_0xe9d2('0x5')], silver);
var goldReq = [
    new CraftingRequirement(silver, 0x2),
    new CraftingRequirement(sparkles, 0x2)
];
gold = new CraftingItem(_0xe9d2('0x11'), 0x168, 0x1f4, rarity[_0xe9d2('0xe')], goldReq);
craftingRecipes[_0xe9d2('0x6')](gold[_0xe9d2('0x5')], gold);
var amethystReq = [new CraftingRequirement(quartz, 0xa)];
amethyst = new CraftingItem('Amethyst', 0x3c, 0x12c, rarity[_0xe9d2('0x9')], amethystReq);
craftingRecipes[_0xe9d2('0x6')](amethyst['name'], amethyst);
var pendantReq = [
    new CraftingRequirement(amethyst, 0x7),
    new CraftingRequirement(silver, 0x2)
];
pendant = new CraftingItem(_0xe9d2('0x12'), 0xb4, 0x1f4, rarity[_0xe9d2('0xb')], pendantReq);
craftingRecipes[_0xe9d2('0x6')](pendant['name'], pendant);
var necklaceReq = [
    new CraftingRequirement(pendant, 0x3),
    new CraftingRequirement(gold, 0x2)
];
necklace = new CraftingItem(_0xe9d2('0x13'), 0x2f8, 0x1f4, rarity['EPIC'], necklaceReq);
craftingRecipes[_0xe9d2('0x6')](necklace[_0xe9d2('0x5')], necklace);
var orbReq = [new CraftingRequirement(quartz, 0x14)];
orb = new CraftingItem(_0xe9d2('0x14'), 0x3c, 0x12c, rarity[_0xe9d2('0x9')], orbReq);
craftingRecipes[_0xe9d2('0x6')](orb[_0xe9d2('0x5')], orb);
var waterReq = [
    new CraftingRequirement(orb, 0x2),
    new CraftingRequirement(silver, 0x1)
];
water = new CraftingItem('Water', 0x168, 0x320, rarity['RARE'], waterReq);
craftingRecipes[_0xe9d2('0x6')](water[_0xe9d2('0x5')], water);
var fireReq = [
    new CraftingRequirement(orb, 0x6),
    new CraftingRequirement(gold, 0x1)
];
fire = new CraftingItem(_0xe9d2('0x15'), 0x2d0, 0x3e8, rarity['EPIC'], fireReq);
craftingRecipes[_0xe9d2('0x6')](fire[_0xe9d2('0x5')], fire);
var waterstoneReq = [
    new CraftingRequirement(water, 0x2),
    new CraftingRequirement(ribbon, 0xa)
];
waterstone = new CraftingItem('Waterstone', 0x2d0, 0x5dc, rarity[_0xe9d2('0xb')], waterstoneReq);
craftingRecipes['set'](waterstone[_0xe9d2('0x5')], waterstone);
var firestoneReq = [
    new CraftingRequirement(fire, 0x1),
    new CraftingRequirement(sparkles, 0x2)
];
firestone = new CraftingItem(_0xe9d2('0x16'), 0x2d0, 0x5dc, rarity[_0xe9d2('0xe')], firestoneReq);
craftingRecipes[_0xe9d2('0x6')](firestone[_0xe9d2('0x5')], firestone);
var elementstoneReq = [
    new CraftingRequirement(firestone, 0x1),
    new CraftingRequirement(waterstone, 0x1)
];
elementstone = new CraftingItem(_0xe9d2('0x17'), 0x5a0, 0x1388, rarity['LEGENDARY'], elementstoneReq);
craftingRecipes[_0xe9d2('0x6')](elementstone['name'], elementstone);
var artifactReq = [
    new CraftingRequirement(elementstone, 0x1),
    new CraftingRequirement(necklace, 0x1)
];
artifact = new CraftingItem(_0xe9d2('0x18'), 0x10e0, 0x2710, rarity[_0xe9d2('0x19')], artifactReq);
craftingRecipes[_0xe9d2('0x6')](artifact['name'], artifact);