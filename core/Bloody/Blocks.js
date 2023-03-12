const BLOCK_TYPE_LIQUID = Block.createSpecialType({
    solid: false,
    renderlayer: 1,
    explosionres: 10000
});

 LiquidRegistry.registerLiquid("bloody_liquid", "Blood", ["bloody_liquid_flow"]); 
 
Block.createLiquidBlock("bloody_liquid", 
{ 
 name: "Blood", 
 still: { 
 texture: ["bloody_liquid_still", 0], 
 id: "bloody_liquid_still",
 }, 
 flowing: { 
 texture: ["bloody_liquid_flow", 0], 
 id: "bloody_liquid_flowing",
 }, 
 bucket: { 
 texture: { name: "bucket_blood", meta: 0 }, 
 name: "Bucket of terrible blood",
 id: "bucket_of_blood",
 }, 
}, BLOCK_TYPE_LIQUID);

IDRegistry.genBlockID("bloody_block");
Block.createBlock("bloody_block", [
	{name: "Hardened blood", texture: [["hardened_blood", 0]], inCreative: true}]);