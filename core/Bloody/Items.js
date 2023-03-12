
﻿var textureid = FileTools.GetListOfFiles(__dir__+"assets/items-opaque/","png")
﻿for(var i in textureid){
﻿IDRegistry.genItemID(textureid[i]); 
Item.createItem(textureid[i], textureid[i], {name: textureid[i], meta: 0}, {stack: 64});}