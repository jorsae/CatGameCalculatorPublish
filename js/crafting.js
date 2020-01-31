var _0x1e2f = [
    'String',
    'RARE',
    'Ribbon',
    'COMMON',
    'Needles',
    'Sparkles',
    'EPIC',
    'Silver',
    'Amethyst',
    'Necklace',
    'Orb',
    'Waterstone',
    'Firestone',
    'Elementstone',
    'LEGENDARY',
    'Artifact',
    'RAW',
    'Log',
    'Rock',
    'Quartz',
    'set',
    'name'
];
(function (_0x373457, _0x487a57) {
    var _0x833aa1 = function (_0x162c91) {
        while (--_0x162c91) {
            _0x373457['push'](_0x373457['shift']());
        }
    };
    _0x833aa1(++_0x487a57);
}(_0x1e2f, 0xc0));
var _0xed0c = function (_0x2a7fbb, _0x5481c1) {
    _0x2a7fbb = _0x2a7fbb - 0x0;
    var _0x426759 = _0x1e2f[_0x2a7fbb];
    return _0x426759;
};
cotton = new CraftingItem('Cotton', 0x0, 0x0, rarity[_0xed0c('0x0')]);
log = new CraftingItem(_0xed0c('0x1'), 0x0, 0x0, rarity[_0xed0c('0x0')]);
rock = new CraftingItem(_0xed0c('0x2'), 0x0, 0x0, rarity[_0xed0c('0x0')]);
quartz = new CraftingItem(_0xed0c('0x3'), 0x0, 0x0, rarity[_0xed0c('0x0')]);
craftingRecipes[_0xed0c('0x4')](cotton[_0xed0c('0x5')], cotton);
craftingRecipes[_0xed0c('0x4')](log[_0xed0c('0x5')], log);
craftingRecipes[_0xed0c('0x4')](rock[_0xed0c('0x5')], rock);
craftingRecipes[_0xed0c('0x4')](quartz[_0xed0c('0x5')], quartz);
var stringReq = [new CraftingRequirement(cotton, 0x3)];
string = new CraftingItem(_0xed0c('0x6'), 0x5, 0x32, rarity['COMMON'], stringReq);
craftingRecipes[_0xed0c('0x4')](string[_0xed0c('0x5')], string);
var woodReq = [new CraftingRequirement(log, 0x3)];
wood = new CraftingItem('Wood', 0x5, 0x32, rarity[_0xed0c('0x7')], woodReq);
craftingRecipes['set'](wood['name'], wood);
var ribbonReq = [
    new CraftingRequirement(string, 0x2),
    new CraftingRequirement(wood, 0x2)
];
ribbon = new CraftingItem(_0xed0c('0x8'), 0xf, 0x64, rarity['EPIC'], ribbonReq);
craftingRecipes['set'](ribbon[_0xed0c('0x5')], ribbon);
var metalReq = [new CraftingRequirement(rock, 0x3)];
metal = new CraftingItem('Metal', 0xf, 0x64, rarity[_0xed0c('0x9')], metalReq);
craftingRecipes[_0xed0c('0x4')](metal['name'], metal);
var needlesReq = [
    new CraftingRequirement(metal, 0x4),
    new CraftingRequirement(ribbon, 0x1)
];
needles = new CraftingItem(_0xed0c('0xa'), 0x1e, 0xc8, rarity[_0xed0c('0x7')], needlesReq);
craftingRecipes[_0xed0c('0x4')](needles[_0xed0c('0x5')], needles);
var sparklesReq = [
    new CraftingRequirement(needles, 0x2),
    new CraftingRequirement(ribbon, 0x2)
];
sparkles = new CraftingItem(_0xed0c('0xb'), 0x3c, 0x12c, rarity[_0xed0c('0xc')], sparklesReq);
craftingRecipes[_0xed0c('0x4')](sparkles['name'], sparkles);
var bronzeReq = [new CraftingRequirement(rock, 0x4)];
bronze = new CraftingItem('Bronze', 0x1e, 0xc8, rarity[_0xed0c('0x9')], bronzeReq);
craftingRecipes[_0xed0c('0x4')](bronze[_0xed0c('0x5')], bronze);
var silverReq = [
    new CraftingRequirement(bronze, 0x3),
    new CraftingRequirement(sparkles, 0x1)
];
silver = new CraftingItem(_0xed0c('0xd'), 0x78, 0x12c, rarity[_0xed0c('0x7')], silverReq);
craftingRecipes[_0xed0c('0x4')](silver[_0xed0c('0x5')], silver);
var goldReq = [
    new CraftingRequirement(silver, 0x2),
    new CraftingRequirement(sparkles, 0x2)
];
gold = new CraftingItem('Gold', 0x168, 0x1f4, rarity[_0xed0c('0xc')], goldReq);
craftingRecipes[_0xed0c('0x4')](gold[_0xed0c('0x5')], gold);
var amethystReq = [new CraftingRequirement(quartz, 0xa)];
amethyst = new CraftingItem(_0xed0c('0xe'), 0x3c, 0x12c, rarity[_0xed0c('0x9')], amethystReq);
craftingRecipes['set'](amethyst['name'], amethyst);
var pendantReq = [
    new CraftingRequirement(amethyst, 0x7),
    new CraftingRequirement(silver, 0x2)
];
pendant = new CraftingItem('Pendant', 0xb4, 0x1f4, rarity[_0xed0c('0x7')], pendantReq);
craftingRecipes[_0xed0c('0x4')](pendant[_0xed0c('0x5')], pendant);
var necklaceReq = [
    new CraftingRequirement(pendant, 0x3),
    new CraftingRequirement(gold, 0x2)
];
necklace = new CraftingItem(_0xed0c('0xf'), 0x2f8, 0x1f4, rarity[_0xed0c('0xc')], necklaceReq);
craftingRecipes['set'](necklace[_0xed0c('0x5')], necklace);
var orbReq = [new CraftingRequirement(quartz, 0x14)];
orb = new CraftingItem(_0xed0c('0x10'), 0x3c, 0x12c, rarity['COMMON'], orbReq);
craftingRecipes[_0xed0c('0x4')](orb[_0xed0c('0x5')], orb);
var waterReq = [
    new CraftingRequirement(orb, 0x2),
    new CraftingRequirement(silver, 0x1)
];
water = new CraftingItem('Water', 0x168, 0x320, rarity['RARE'], waterReq);
craftingRecipes[_0xed0c('0x4')](water['name'], water);
var fireReq = [
    new CraftingRequirement(orb, 0x6),
    new CraftingRequirement(gold, 0x1)
];
fire = new CraftingItem('Fire', 0x2d0, 0x3e8, rarity[_0xed0c('0xc')], fireReq);
craftingRecipes[_0xed0c('0x4')](fire['name'], fire);
var waterstoneReq = [
    new CraftingRequirement(water, 0x2),
    new CraftingRequirement(ribbon, 0xa)
];
waterstone = new CraftingItem(_0xed0c('0x11'), 0x2d0, 0x5dc, rarity[_0xed0c('0x9')], waterstoneReq);
craftingRecipes[_0xed0c('0x4')](waterstone[_0xed0c('0x5')], waterstone);
var firestoneReq = [
    new CraftingRequirement(fire, 0x1),
    new CraftingRequirement(sparkles, 0x2)
];
firestone = new CraftingItem(_0xed0c('0x12'), 0x2d0, 0x5dc, rarity['RARE'], firestoneReq);
craftingRecipes[_0xed0c('0x4')](firestone[_0xed0c('0x5')], firestone);
var elementstoneReq = [
    new CraftingRequirement(firestone, 0x1),
    new CraftingRequirement(waterstone, 0x1)
];
elementstone = new CraftingItem(_0xed0c('0x13'), 0x5a0, 0x1388, rarity[_0xed0c('0x14')], elementstoneReq);
craftingRecipes[_0xed0c('0x4')](elementstone['name'], elementstone);
var artifactReq = [
    new CraftingRequirement(elementstone, 0x1),
    new CraftingRequirement(necklace, 0x1)
];
artifact = new CraftingItem(_0xed0c('0x15'), 0x10e0, 0x2710, rarity[_0xed0c('0x14')], artifactReq);
craftingRecipes[_0xed0c('0x4')](artifact[_0xed0c('0x5')], artifact);