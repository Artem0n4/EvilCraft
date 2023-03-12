TileEntity.registerPrototype(BlockID.bloody_liquid_still, {
    useNetworkItemContainer: true,
    defaultValues: {
     value: true
    },

    tick: function() {
       if(World.getThreadTime()%200==0){this.blockSource.setBlock(this.x,this.y,this.z,BlockID.bloody_block,0)};
       
          },

     }
);