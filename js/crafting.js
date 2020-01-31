var _0x3dc6 = [
    'Silver',
    'Gold',
    'Amethyst',
    'Pendant',
    'Necklace',
    'Fire',
    'Elementstone',
    'LEGENDARY',
    'RAW',
    'Log',
    'Rock',
    'Quartz',
    'name',
    'set',
    'COMMON',
    'Ribbon',
    'RARE',
    'Metal',
    'Needles',
    'EPIC',
    'Bronze'
];
(function (_0x252184, _0x178216) {
    var _0x409b28 = function (_0x4d02ce) {
        while (--_0x4d02ce) {
            _0x252184['push'](_0x252184['shift']());
        }
    };
    _0x409b28(++_0x178216);
}(_0x3dc6, 0x71));
var _0x3e50 = function (_0x279212, _0x4ed03b) {
    _0x279212 = _0x279212 - 0x0;
    var _0x3271c3 = _0x3dc6[_0x279212];
    return _0x3271c3;
};
cotton = new CraftingItem('Cotton', 0x0, 0x0, rarity[_0x3e50('0x0')]);
log = new CraftingItem(_0x3e50('0x1'), 0x0, 0x0, rarity[_0x3e50('0x0')]);
rock = new CraftingItem(_0x3e50('0x2'), 0x0, 0x0, rarity[_0x3e50('0x0')]);
quartz = new CraftingItem(_0x3e50('0x3'), 0x0, 0x0, rarity['RAW']);
craftingRecipes['set'](cotton[_0x3e50('0x4')], cotton);
craftingRecipes[_0x3e50('0x5')](log[_0x3e50('0x4')], log);
craftingRecipes['set'](rock['name'], rock);
craftingRecipes[_0x3e50('0x5')](quartz['name'], quartz);
var stringReq = [new CraftingRequirement(cotton, 0x3)];
string = new CraftingItem('String', 0x5, 0x32, rarity['COMMON'], stringReq);
craftingRecipes['set'](string['name'], string);
var woodReq = [new CraftingRequirement(log, 0x3)];
wood = new CraftingItem('Wood', 0x5, 0x32, rarity[_0x3e50('0x6')], woodReq);
craftingRecipes[_0x3e50('0x5')](wood[_0x3e50('0x4')], wood);
var ribbonReq = [
    new CraftingRequirement(string, 0x2),
    new CraftingRequirement(wood, 0x2)
];
ribbon = new CraftingItem(_0x3e50('0x7'), 0xf, 0x64, rarity[_0x3e50('0x8')], ribbonReq);
craftingRecipes['set'](ribbon['name'], ribbon);
var metalReq = [new CraftingRequirement(rock, 0x3)];
metal = new CraftingItem(_0x3e50('0x9'), 0xf, 0x64, rarity[_0x3e50('0x6')], metalReq);
craftingRecipes[_0x3e50('0x5')](metal[_0x3e50('0x4')], metal);
var needlesReq = [
    new CraftingRequirement(metal, 0x4),
    new CraftingRequirement(ribbon, 0x1)
];
needles = new CraftingItem(_0x3e50('0xa'), 0x1e, 0xc8, rarity[_0x3e50('0x8')], needlesReq);
craftingRecipes[_0x3e50('0x5')](needles['name'], needles);
var sparklesReq = [
    new CraftingRequirement(needles, 0x2),
    new CraftingRequirement(ribbon, 0x2)
];
sparkles = new CraftingItem('Sparkles', 0x3c, 0x12c, rarity[_0x3e50('0xb')], sparklesReq);
craftingRecipes[_0x3e50('0x5')](sparkles['name'], sparkles);
var bronzeReq = [new CraftingRequirement(rock, 0x4)];
bronze = new CraftingItem(_0x3e50('0xc'), 0x1e, 0xc8, rarity['COMMON'], bronzeReq);
craftingRecipes[_0x3e50('0x5')](bronze['name'], bronze);
var silverReq = [
    new CraftingRequirement(bronze, 0x3),
    new CraftingRequirement(sparkles, 0x1)
];
silver = new CraftingItem(_0x3e50('0xd'), 0x78, 0x12c, rarity[_0x3e50('0x8')], silverReq);
craftingRecipes[_0x3e50('0x5')](silver[_0x3e50('0x4')], silver);
var goldReq = [
    new CraftingRequirement(silver, 0x2),
    new CraftingRequirement(sparkles, 0x2)
];
gold = new CraftingItem(_0x3e50('0xe'), 0x168, 0x1f4, rarity['EPIC'], goldReq);
craftingRecipes[_0x3e50('0x5')](gold['name'], gold);
var amethystReq = [new CraftingRequirement(quartz, 0xa)];
amethyst = new CraftingItem(_0x3e50('0xf'), 0x3c, 0x12c, rarity[_0x3e50('0x6')], amethystReq);
craftingRecipes[_0x3e50('0x5')](amethyst[_0x3e50('0x4')], amethyst);
var pendantReq = [
    new CraftingRequirement(amethyst, 0x7),
    new CraftingRequirement(silver, 0x2)
];
pendant = new CraftingItem(_0x3e50('0x10'), 0xb4, 0x1f4, rarity[_0x3e50('0x8')], pendantReq);
craftingRecipes[_0x3e50('0x5')](pendant['name'], pendant);
var necklaceReq = [
    new CraftingRequirement(pendant, 0x3),
    new CraftingRequirement(gold, 0x2)
];
necklace = new CraftingItem(_0x3e50('0x11'), 0x2f8, 0x1f4, rarity[_0x3e50('0xb')], necklaceReq);
craftingRecipes[_0x3e50('0x5')](necklace[_0x3e50('0x4')], necklace);
var orbReq = [new CraftingRequirement(quartz, 0x14)];
orb = new CraftingItem('Orb', 0x3c, 0x12c, rarity['COMMON'], orbReq);
craftingRecipes[_0x3e50('0x5')](orb[_0x3e50('0x4')], orb);
var waterReq = [
    new CraftingRequirement(orb, 0x2),
    new CraftingRequirement(silver, 0x1)
];
water = new CraftingItem('Water', 0x168, 0x320, rarity['RARE'], waterReq);
craftingRecipes[_0x3e50('0x5')](water['name'], water);
var fireReq = [
    new CraftingRequirement(orb, 0x6),
    new CraftingRequirement(gold, 0x1)
];
fire = new CraftingItem(_0x3e50('0x12'), 0x2d0, 0x3e8, rarity[_0x3e50('0xb')], fireReq);
craftingRecipes[_0x3e50('0x5')](fire[_0x3e50('0x4')], fire);
var waterstoneReq = [
    new CraftingRequirement(water, 0x2),
    new CraftingRequirement(ribbon, 0xa)
];
waterstone = new CraftingItem('Waterstone', 0x2d0, 0x5dc, rarity[_0x3e50('0x8')], waterstoneReq);
craftingRecipes['set'](waterstone[_0x3e50('0x4')], waterstone);
var firestoneReq = [
    new CraftingRequirement(fire, 0x1),
    new CraftingRequirement(sparkles, 0x2)
];
firestone = new CraftingItem('Firestone', 0x2d0, 0x5dc, rarity['EPIC'], firestoneReq);
craftingRecipes[_0x3e50('0x5')](firestone[_0x3e50('0x4')], firestone);
var elementstoneReq = [
    new CraftingRequirement(firestone, 0x1),
    new CraftingRequirement(waterstone, 0x1)
];
elementstone = new CraftingItem(_0x3e50('0x13'), 0x5a0, 0x1388, rarity[_0x3e50('0x14')], elementstoneReq);
craftingRecipes[_0x3e50('0x5')](elementstone[_0x3e50('0x4')], elementstone);
var artifactReq = [
    new CraftingRequirement(elementstone, 0x1),
    new CraftingRequirement(necklace, 0x1)
];
artifact = new CraftingItem('Artifact', 0x10e0, 0x2710, rarity[_0x3e50('0x14')], artifactReq);
craftingRecipes[_0x3e50('0x5')](artifact[_0x3e50('0x4')], artifact);