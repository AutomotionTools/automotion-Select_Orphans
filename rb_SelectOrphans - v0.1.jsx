/* =====

Author: Rob Barrett (Automotion) - https://automotion.studio
Copyright (c) 2022 Rob Barrett
Version: 1.0
Description: Selects all layers from a selection (or from all layers, if none selected) that do not have a parent layer set.

Disclaimer: This script is provided "as is", without any warranty. Use at your own risk! The author cannot be held liable in any event for damages arising from the use of this script.

Licence:
This script is shared under the Attribution-Share Alike CC terms:
https://creativecommons.org/licenses/by-sa/4.0/
If you remix, transform, or build upon the material contained in this script, you must distribute your contributions under the same licence as the original. You must also give appropriate credit to the author, provide a link to the licence, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.

===== */

(function () {

    // Check if any layers are selected
    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;
        
    app.beginUndoGroup("selectOrphans");

    // If no layers are selected, select all layers
    if (layers.length == 0) {
        var l;
        for (l = 1; l <= comp.layers.length; l++) {
            comp.layer(l).selected = true;
        };
    };
    var layers = comp.selectedLayers;

    // Deselect layers that have a parent
    if (layers.length > 0) {
        
        var i;
        for (i = 0; i < layers.length; i++) {
            if (layers[i].parent != null) { layers[i].selected = false; };
        };

    };    

    app.endUndoGroup();

})();