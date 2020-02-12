var _0x3223 = [
    'Quartz',
    'set',
    'name',
    'String',
    'COMMON',
    'RARE',
    'Metal',
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
    'Cotton',
    'Log',
    'RAW',
    'Rock'
];
(function (_0x30cd19, _0x3f4a78) {
    var _0x903cb0 = function (_0x51ae10) {
        while (--_0x51ae10) {
            _0x30cd19['push'](_0x30cd19['shift']());
        }
    };
    _0x903cb0(++_0x3f4a78);
}(_0x3223, 0x19a));
var _0x2826 = function (_0x4fa8fb, _0x19d520) {
    _0x4fa8fb = _0x4fa8fb - 0x0;
    var _0x1ad158 = _0x3223[_0x4fa8fb];
    return _0x1ad158;
};
cotton = new CraftingItem(_0x2826('0x0'), 0x0, 0x0, rarity['RAW'], 0x1);
log = new CraftingItem(_0x2826('0x1'), 0x0, 0x0, rarity[_0x2826('0x2')], 0x2);
rock = new CraftingItem(_0x2826('0x3'), 0x0, 0x0, rarity[_0x2826('0x2')], 0x3);
quartz = new CraftingItem(_0x2826('0x4'), 0x0, 0x0, rarity[_0x2826('0x2')], 0x4);
craftingRecipes[_0x2826('0x5')](cotton['name'], cotton);
craftingRecipes['set'](log[_0x2826('0x6')], log);
craftingRecipes['set'](rock[_0x2826('0x6')], rock);
craftingRecipes[_0x2826('0x5')](quartz[_0x2826('0x6')], quartz);
var stringReq = [new CraftingRequirement(cotton, 0x3)];
string = new CraftingItem(_0x2826('0x7'), 0x5, 0x32, rarity[_0x2826('0x8')], 0x5, stringReq);
craftingRecipes[_0x2826('0x5')](string['name'], string);
var woodReq = [new CraftingRequirement(log, 0x3)];
wood = new CraftingItem('Wood', 0x5, 0x32, rarity[_0x2826('0x8')], 0x6, woodReq);
craftingRecipes[_0x2826('0x5')](wood[_0x2826('0x6')], wood);
var ribbonReq = [
    new CraftingRequirement(string, 0x2),
    new CraftingRequirement(wood, 0x2)
];
ribbon = new CraftingItem('Ribbon', 0xf, 0x64, rarity[_0x2826('0x9')], 0x7, ribbonReq);
craftingRecipes[_0x2826('0x5')](ribbon[_0x2826('0x6')], ribbon);
var metalReq = [new CraftingRequirement(rock, 0x3)];
metal = new CraftingItem(_0x2826('0xa'), 0xf, 0x64, rarity[_0x2826('0x8')], 0x8, metalReq);
craftingRecipes[_0x2826('0x5')](metal[_0x2826('0x6')], metal);
var needlesReq = [
    new CraftingRequirement(metal, 0x4),
    new CraftingRequirement(ribbon, 0x1)
];
needles = new CraftingItem('Needles', 0x1e, 0xc8, rarity[_0x2826('0x9')], 0x9, needlesReq);
craftingRecipes['set'](needles[_0x2826('0x6')], needles);
var sparklesReq = [
    new CraftingRequirement(needles, 0x2),
    new CraftingRequirement(ribbon, 0x2)
];
sparkles = new CraftingItem('Sparkles', 0x3c, 0x12c, rarity[_0x2826('0xb')], 0xa, sparklesReq);
craftingRecipes['set'](sparkles[_0x2826('0x6')], sparkles);
var bronzeReq = [new CraftingRequirement(rock, 0x4)];
bronze = new CraftingItem(_0x2826('0xc'), 0x1e, 0xc8, rarity['COMMON'], 0xb, bronzeReq);
craftingRecipes[_0x2826('0x5')](bronze['name'], bronze);
var silverReq = [
    new CraftingRequirement(bronze, 0x3),
    new CraftingRequirement(sparkles, 0x1)
];
silver = new CraftingItem(_0x2826('0xd'), 0x78, 0x12c, rarity[_0x2826('0x9')], 0xc, silverReq);
craftingRecipes[_0x2826('0x5')](silver[_0x2826('0x6')], silver);
var goldReq = [
    new CraftingRequirement(silver, 0x2),
    new CraftingRequirement(sparkles, 0x2)
];
gold = new CraftingItem(_0x2826('0xe'), 0x168, 0x1f4, rarity[_0x2826('0xb')], 0xd, goldReq);
craftingRecipes[_0x2826('0x5')](gold[_0x2826('0x6')], gold);
var amethystReq = [new CraftingRequirement(quartz, 0xa)];
amethyst = new CraftingItem(_0x2826('0xf'), 0x3c, 0x12c, rarity[_0x2826('0x8')], 0xe, amethystReq);
craftingRecipes[_0x2826('0x5')](amethyst[_0x2826('0x6')], amethyst);
var pendantReq = [
    new CraftingRequirement(amethyst, 0x7),
    new CraftingRequirement(silver, 0x2)
];
pendant = new CraftingItem(_0x2826('0x10'), 0xb4, 0x1f4, rarity[_0x2826('0x9')], 0xf, pendantReq);
craftingRecipes[_0x2826('0x5')](pendant[_0x2826('0x6')], pendant);
var necklaceReq = [
    new CraftingRequirement(pendant, 0x3),
    new CraftingRequirement(gold, 0x2)
];
necklace = new CraftingItem(_0x2826('0x11'), 0x2f8, 0x1f4, rarity[_0x2826('0xb')], 0x10, necklaceReq);
craftingRecipes[_0x2826('0x5')](necklace[_0x2826('0x6')], necklace);
var orbReq = [new CraftingRequirement(quartz, 0x14)];
orb = new CraftingItem(_0x2826('0x12'), 0x3c, 0x12c, rarity[_0x2826('0x8')], 0x11, orbReq);
craftingRecipes[_0x2826('0x5')](orb[_0x2826('0x6')], orb);
var waterReq = [
    new CraftingRequirement(orb, 0x2),
    new CraftingRequirement(silver, 0x1)
];
water = new CraftingItem(_0x2826('0x13'), 0x168, 0x320, rarity['RARE'], 0x12, waterReq);
craftingRecipes[_0x2826('0x5')](water[_0x2826('0x6')], water);
var fireReq = [
    new CraftingRequirement(orb, 0x6),
    new CraftingRequirement(gold, 0x1)
];
fire = new CraftingItem(_0x2826('0x14'), 0x2d0, 0x3e8, rarity[_0x2826('0xb')], 0x13, fireReq);
craftingRecipes[_0x2826('0x5')](fire['name'], fire);
var waterstoneReq = [
    new CraftingRequirement(water, 0x2),
    new CraftingRequirement(ribbon, 0xa)
];
waterstone = new CraftingItem('Waterstone', 0x2d0, 0x5dc, rarity[_0x2826('0x9')], 0x14, waterstoneReq);
craftingRecipes[_0x2826('0x5')](waterstone['name'], waterstone);
var firestoneReq = [
    new CraftingRequirement(fire, 0x1),
    new CraftingRequirement(sparkles, 0x2)
];
firestone = new CraftingItem(_0x2826('0x15'), 0x2d0, 0x5dc, rarity[_0x2826('0xb')], 0x15, firestoneReq);
craftingRecipes['set'](firestone[_0x2826('0x6')], firestone);
var elementstoneReq = [
    new CraftingRequirement(firestone, 0x1),
    new CraftingRequirement(waterstone, 0x1)
];
elementstone = new CraftingItem('Elementstone', 0x5a0, 0x1388, rarity[_0x2826('0x16')], 0x16, elementstoneReq);
craftingRecipes[_0x2826('0x5')](elementstone['name'], elementstone);
var artifactReq = [
    new CraftingRequirement(elementstone, 0x1),
    new CraftingRequirement(necklace, 0x1)
];
artifact = new CraftingItem('Artifact', 0x10e0, 0x2710, rarity[_0x2826('0x16')], 0x17, artifactReq);
craftingRecipes[_0x2826('0x5')](artifact[_0x2826('0x6')], artifact);