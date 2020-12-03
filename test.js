var robot = require("robotjs");
var fs = require("fs");
var fileData = fs.readFileSync("./file.json");
var fdata = JSON.parse(fileData);
let url = fdata.url;
checkMouseActivity();
// setTimeout(openFirefox, 2000);


function checkMouseActivity() {
    var t = 0;
    var pos = robot.getMousePos();
    console.log(pos);
    var id = setInterval(() => {
        let newPos = robot.getMousePos();
        if (newPos.x == pos.x && newPos.y == pos.y) {
            t = t + fdata.interval;
            console.log(t + " " + fdata.time);
            if (t == fdata.time) {
                console.log("Inactive");
                clearInterval(id);
                setTimeout(openMousepad, 1000);
            }
        } else {
            t = 0;
        }
        pos = newPos;
    }, fdata.interval);
}

function openFirefox() {
    // robot.moveMouseSmooth()
    setTimeout(() => {
        setTimeout(() => {
            robot.moveMouseSmooth(1334, 736);
            robot.mouseClick();
            // robot.moveMouseSmooth(680, 49);
            // robot.mouseClick();
        }, 1000);
        setTimeout(() => {
            robot.typeString("firefox");
            robot.keyTap("enter");
        }, 6000);

        setTimeout(playVideo, 8000);
    }, 2000);
}

function playVideo() {
    setTimeout(() => {
        robot.keyTap("space");
    }, 1000);
    setTimeout(() => {
        robot.typeString(url);
        robot.keyTap("enter");
    }, 4000);

    setTimeout(() => {
            robot.moveMouseSmooth(1287, 46);
            robot.mouseClick();
            checkMouseActivity();
        },
        8000);
}

function openMousepad() {
    setTimeout(() => {
            robot.moveMouseSmooth(1334, 736);
            robot.mouseClick();
            setTimeout(() => {
                robot.typeString("mousepad");
            }, 1000);
            setTimeout(() => {
                robot.keyTap("enter");
            }, 1000)
            setTimeout(() => {
                robot.typeString("         Hey, don't stop, keep practicing :)");
            }, 4000);

            setTimeout(shakeMousePad, 5000);

        },
        2000);
}

function shakeMousePad() {
    robot.moveMouse(398, 77);
    robot.mouseToggle("down", "left");
    setTimeout(() => {
        robot.dragMouse(1000, 100);
        setTimeout(() => {
            robot.dragMouse(400, 138);
            setTimeout(() => {
                robot.dragMouse(500, 140);
                setTimeout(() => {
                    robot.dragMouse(1100, 139);
                    setTimeout(() => {
                        robot.moveMouse(500, 140);
                        robot.mouseToggle("up", "left");
                        robot.moveMouseSmooth(699, 134);
                        setTimeout(() => {
                            robot.mouseClick();
                        }, 1000);
                        // robot.moveMouseSmooth(233, 438);
                        // robot.mouseClick();
                        setTimeout(() => {
                            robot.keyTap("left");
                            robot.keyTap("left");
                        }, 1000);
                        setTimeout(() => {
                            robot.keyTap("left");
                            robot.keyTap("enter");
                        }, 1000);
                        // robot.moveMouseSmooth()
                        setTimeout(openFirefox, 2000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);

}