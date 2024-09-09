const fs = require("fs");
const sources = fs.readdirSync(".").filter(f => f.endsWith(".txt"));

const tracksBySource = {};
for (const source of sources) {
    const uniqueTracks = fs.readFileSync(source, "utf-8")
        .split("\n")
        .map(line => line.trim().toLowerCase())
        .filter(line => line != "")
        .filter((line, index, array) => array.indexOf(line) === index);
    tracksBySource[source] = uniqueTracks;
}

const strikesByTrack = {};
for (const source of sources) {
    for (const track of tracksBySource[source]) {
        if (track in strikesByTrack) {
            strikesByTrack[track] += 1;
        } else {
            strikesByTrack[track] = 1;
        }
    }
}

const popularitySortedTracks = Object.keys(strikesByTrack)
    .map(k => [k, strikesByTrack[k]])
    .sort(([_1, s1], [_2, s2]) => s2 - s1);
for (const [track, strikes] of popularitySortedTracks) {
    console.log(`${strikes} ${track}`);
}
