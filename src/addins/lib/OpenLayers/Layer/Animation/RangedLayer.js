"use strict";

/**
 * Interface for layers that support limiting their visible time range.
 */
OpenLayers.Layer.Animation.RangedLayer = OpenLayers.Class({
    /**
     * Set range for which this layer should be displayed. Undefined
     * range endpoints mean that the range is not limited in that
     * direction.
     *
     * @param {timestep} range Renderable times.
     */
    setRange : function(range) {
        throw "This is an interface";
    },

    /**
     * Get current range for which this layer should be displayed.
     *
     * @return {timestep} Renderable times.
     */
    getRange : function(range) {
        throw "This is an interface";
    },

    /**
     * Set range for which this layer should be displayed, and current
     * time. May reduce transition artifacts compared to sequential
     * setRange() and setTime() calls.
     *
     * @param {Date} time Time to set layer to.
     * @param {timestep} range Renderable times.
     */
    setTimeAndRange : function(time, range) {
        throw "This is an interface";
    },



});
