// better_terrain.js

// Wrap the entire Better Resolution Terrain code in a function
function initializeBetterTerrain() {
    const provider = "google"; // Or "apple", "bing", "cache"
    const multiplayerServer = "default"; // or your IP

    window.geofsNewHDState = true;
    window.geofs.geoIpUpdate = function() {
        // ... (rest of your Better Resolution Terrain code - same as before)
    };
    window.executeOnEventDone("geofsStarted", function() {
        // ...
    });
    window.executeOnEventDone("afterDeferredload", function() {
        // ...
    });
    // ... (End of Better Resolution Terrain Code)
}

// Expose the function to the global scope
window.initializeBetterTerrain = initializeBetterTerrain;
