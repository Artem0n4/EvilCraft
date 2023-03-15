let BloodyInfuserUI = new UI.StandartWindow({
    standart:
    {
        header:
        {
            frame: "bloody_frame",
            					
		   
		    color: android.graphics.Color.rgb(137, 85, 85),
		
            text: {
                text:
                Translation.translate("Bloody Infuser")
            }},
        inventory:
        {
            standart: true
        },
        background:
        {
            standart: true
        }},
    drawing: [{
           	"type": "bitmap",
			"x": 690,
			"y": 183,
			"direction": 0,
			"bitmap": "progress_0",
			"scale": 3.2,
        },
        {	"type": "bitmap",
			"x": 490,
			"y": 110,
			"direction": 1,
			"bitmap": "blood_scale_0",
			"scale": 3.2},

			],
	params: {
		    "frame": "bloody_frame",
		    "invSlot": "blood_slot",
		    "slot": "blood_slot"
		},
    elements: {
         		"slot_0": {
			"type": "slot",
			"x": 380,
			"y": 180,
			"size": 60,
			"bitmap": "evil_slot"
		},
		"scale_0": {
			"type": "scale",
			"x": 490,
			"y": 110,
			"direction": 1,
			"bitmap": "blood_scale_1",
			"scale": 3.2,
			
		},
		"slot_1": {
			"type": "slot",
			"x": 600,
			"y": 180,
			"size": 60,
			"bitmap": "blood_slot"
		},
		"scale_1": {
			"type": "scale",
			"x": 690,
			"y": 183,
			"direction": 0,
			"bitmap": "progress_1",
			"scale": 3.2,
			
		},
		"slot_2": {
			"type": "slot",
			"x": 790,
			"y": 180,
			"size": 60,
			"bitmap": "blood_slot"
		},


		}
}
);
﻿
﻿TileEntity.registerPrototype(BlockID.bloody_infuser, {
    useNetworkItemContainer: true,
    getScreenName() {
        return "main";
    },
    getScreenByName() {
        return BloodyInfuserUI
    },
    defaultValues: {
        blood: 0,
       bloodMax: 0,
    },
    tick: function() {
        
        

        
    
        }
});
