document.onkeydown = detectKey;

let object = document.getElementById('object');

object.style.position = 'absolute';
object.style.left = 0;
object.style.top = 0;


let moveBy = 5;

function detectKey(e) {
    /*
    37-left,
    38-up,
    39-right,
    40-down
    */
    let direction = {"37": "left", "38": "up", "39": "right", "40": "down"};
    let allowedKeys = [37, 38, 39, 40];
    if (allowedKeys.includes(parseInt(e.keyCode))) {
        switch(e.key) {
            case 'ArrowLeft':
                object.style.left = parseInt(object.style.left) - moveBy + 'px';
                break;
            case 'ArrowRight':
                object.style.left = parseInt(object.style.left) + moveBy + 'px';
                break;
            case 'ArrowUp':
                object.style.top = parseInt(object.style.top) - moveBy + 'px';
                break;
            case 'ArrowDown':
                object.style.top = parseInt(object.style.top) + moveBy + 'px';
                break;
        }

    } else {
        alert("Please press only arrow keys to move object :D")
    } 
}