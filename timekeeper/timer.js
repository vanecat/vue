/**
 * Created by ivanvelev on 12/3/17.
 */

function TKTimer() {

    var totalTime = 0;
    var laps = [];
    var isRunning = false;

    function run() {
        var now = new Date();
        var lap = getLastLap();

        lap.start = now;

        var previousLap = getPreviousLap();
        if (!!previousLap) {
            previousLap.end = now;
        }
    }

    function getPreviousLap() {
        if (laps.length < 2) {
            return null;
        }

        return laps[laps.length - 2];
    }

    function getLastLap() {
        if (!laps.length) {
            initLap();
        }
        return laps[laps.length-1];
    }

    function initNewLap() {
        laps.push({start: -1, end: -1, label: ''});
    }
}