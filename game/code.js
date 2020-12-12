// סודוקו לבחירה
let sudokuOne;
let s1 = [
    [8, 4, 9, 5, 7, 6, 2, 1, 3],
    [6, 1, 3, 9, 4, 2, 8, 7, 5],
    [5, 7, 2, 3, 8, 1, 4, 9, 6],
    [9, 2, 5, 6, 1, 7, 3, 4, 8],
    [3, 6, 4, 8, 5, 9, 7, 2, 1],
    [7, 8, 1, 4, 2, 3, 6, 5, 9],
    [4, 9, 7, 1, 3, 8, 5, 6, 2],
    [1, 5, 8, 2, 6, 4, 9, 3, 7],
    [2, 3, 6, 7, 9, 5, 1, 8, 4]
];

let s2 = [
    [8, 2, 7, 1, 5, 4, 3, 9, 6],
    [9, 6, 5, 3, 2, 7, 1, 4, 8],
    [3, 4, 1, 6, 8, 9, 7, 5, 2],
    [5, 9, 3, 4, 6, 8, 2, 7, 1],
    [4, 7, 2, 5, 1, 3, 6, 8, 9],
    [6, 1, 8, 9, 7, 2, 4, 3, 5],
    [7, 8, 6, 2, 3, 5, 9, 1, 4],
    [1, 5, 4, 7, 9, 6, 8, 2, 3],
    [2, 3, 9, 8, 4, 1, 5, 6, 7]
];
let s3 = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];
let chooseSudoku = [s1, s2, s3];
let sudokuNum = Math.floor(Math.random() * 3);
sudokuOne = chooseSudoku[sudokuNum]; // הסודוקו הנבחר


let selectedCell = {};
var spanMatStyle = [];
let connectedCells = [];
let counterBack;

function relatedInputs(idi, idj) {
    connectedCells = [];
    //צובע את כל השורה והעמודה של התא שנבחר במקביל מאפס צבע רקע לכולם
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (i == idi || j == idj) {
                document.getElementById('num' + i.toString() + j.toString()).style.backgroundColor = '#0ac1c1';
                if (connectedCells.indexOf(document.getElementById('num' + i.toString() + j.toString()).value) == -1 && document.getElementById('num' + i.toString() + j.toString()).value != "") {
                    connectedCells.push(document.getElementById('num' + i.toString() + j.toString()).value);
                }
            } else {
                document.getElementById('num' + i.toString() + j.toString()).style.backgroundColor = 'aqua';
            }
        }
    }
    if (idi >= 0 && idi < 3) {
        if (idj >= 0 && idj < 3) {
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (i == idi && j == idj) {
                        document.getElementById('num' + i.toString() + j.toString()).style.backgroundColor = '#29cb99';
                    } else {
                        if (connectedCells.indexOf(document.getElementById('num' + i.toString() + j.toString()).value) == -1 && document.getElementById('num' + i.toString() + j.toString()).value != "") {
                            connectedCells.push(document.getElementById('num' + i.toString() + j.toString()).value);
                        }
                        document.getElementById('num' + i.toString() + j.toString()).style.backgroundColor = '#0ac1c1';
                    }
                }
            }
        } else if (idj >= 3 && idj < 6) {
            for (let i = 0; i < 3; i++) {
                for (let j = 3; j < 6; j++) {
                    if (i == idi && j == idj) {
                        document.getElementById('num' + i.toString() + j.toString()).style.backgroundColor = '#29cb99';
                    } else {
                        if (connectedCells.indexOf(document.getElementById('num' + i.toString() + j.toString()).value) == -1 && document.getElementById('num' + i.toString() + j.toString()).value != "") {
                            connectedCells.push(document.getElementById('num' + i.toString() + j.toString()).value);
                        }
                        document.getElementById('num' + i.toString() + j.toString()).style.backgroundColor = '#0ac1c1';
                    }
                }
            }
        } else if (idj >= 6 && idj < 9) {
            for (let i = 0; i < 3; i++) {
                for (let j = 6; j < 9; j++) {
                    if (i == idi && j == idj) {
                        document.getElementById('num' + i.toString() + j.toString()).style.backgroundColor = '#29cb99';
                    } else {
                        if (connectedCells.indexOf(document.getElementById('num' + i.toString() + j.toString()).value) == -1 && document.getElementById('num' + i.toString() + j.toString()).value != "") {
                            connectedCells.push(document.getElementById('num' + i.toString() + j.toString()).value);
                        }
                        document.getElementById('num' + i.toString() + j.toString()).style.backgroundColor = '#0ac1c1';
                    }
                }
            }
        }
    } else if (idi >= 3 && idi < 6) {
        if (idj >= 0 && idj < 3) {
            for (let i = 3; i < 6; i++) {
                for (let j = 0; j < 3; j++) {
                    if (i == idi && j == idj) {
                        document.getElementById('num' + i.toString() + j.toString()).style.backgroundColor = '#29cb99';
                    } else {
                        if (connectedCells.indexOf(document.getElementById('num' + i.toString() + j.toString()).value) == -1 && document.getElementById('num' + i.toString() + j.toString()).value != "") {
                            connectedCells.push(document.getElementById('num' + i.toString() + j.toString()).value);
                        }
                        document.getElementById('num' + i.toString() + j.toString()).style.backgroundColor = '#0ac1c1';
                    }
                }
            }
        } else if (idj >= 3 && idj < 6) {
            for (let i = 3; i < 6; i++) {
                for (let j = 3; j < 6; j++) {
                    if (i == idi && j == idj) {
                        document.getElementById('num' + i.toString() + j.toString()).style.backgroundColor = '#29cb99';
                    } else {
                        if (connectedCells.indexOf(document.getElementById('num' + i.toString() + j.toString()).value) == -1 && document.getElementById('num' + i.toString() + j.toString()).value != "") {
                            connectedCells.push(document.getElementById('num' + i.toString() + j.toString()).value);
                        }
                        document.getElementById('num' + i.toString() + j.toString()).style.backgroundColor = '#0ac1c1';
                    }
                }
            }
        } else if (idj >= 6 && idj < 9) {
            for (let i = 3; i < 6; i++) {
                for (let j = 6; j < 9; j++) {
                    if (i == idi && j == idj) {
                        document.getElementById('num' + i.toString() + j.toString()).style.backgroundColor = '#29cb99';
                    } else {
                        if (connectedCells.indexOf(document.getElementById('num' + i.toString() + j.toString()).value) == -1 && document.getElementById('num' + i.toString() + j.toString()).value != "") {
                            connectedCells.push(document.getElementById('num' + i.toString() + j.toString()).value);
                        }
                        document.getElementById('num' + i.toString() + j.toString()).style.backgroundColor = '#0ac1c1';
                    }
                }
            }
        }
    } else if (idi >= 6 && idi < 9) {
        if (idj >= 0 && idj < 3) {
            for (let i = 6; i < 9; i++) {
                for (let j = 0; j < 3; j++) {
                    if (i == idi && j == idj) {
                        document.getElementById('num' + i.toString() + j.toString()).style.backgroundColor = '#29cb99';
                    } else {
                        if (connectedCells.indexOf(document.getElementById('num' + i.toString() + j.toString()).value) == -1 && document.getElementById('num' + i.toString() + j.toString()).value != "") {
                            connectedCells.push(document.getElementById('num' + i.toString() + j.toString()).value);
                        }
                        document.getElementById('num' + i.toString() + j.toString()).style.backgroundColor = '#0ac1c1';
                    }
                }
            }
        } else if (idj >= 3 && idj < 6) {
            for (let i = 6; i < 9; i++) {
                for (let j = 3; j < 6; j++) {
                    if (i == idi && j == idj) {
                        document.getElementById('num' + i.toString() + j.toString()).style.backgroundColor = '#29cb99';
                    } else {
                        if (connectedCells.indexOf(document.getElementById('num' + i.toString() + j.toString()).value) == -1 && document.getElementById('num' + i.toString() + j.toString()).value != "") {
                            connectedCells.push(document.getElementById('num' + i.toString() + j.toString()).value);
                        }
                        document.getElementById('num' + i.toString() + j.toString()).style.backgroundColor = '#0ac1c1';
                    }
                }
            }
        } else if (idj >= 6 && idj < 9) {
            for (let i = 6; i < 9; i++) {
                for (let j = 6; j < 9; j++) {
                    if (i == idi && j == idj) {
                        document.getElementById('num' + i.toString() + j.toString()).style.backgroundColor = '#29cb99';
                    } else {
                        if (connectedCells.indexOf(document.getElementById('num' + i.toString() + j.toString()).value) == -1 && document.getElementById('num' + i.toString() + j.toString()).value != "") {
                            connectedCells.push(document.getElementById('num' + i.toString() + j.toString()).value);
                        }
                        document.getElementById('num' + i.toString() + j.toString()).style.backgroundColor = '#0ac1c1';
                    }
                }
            }
        }
    }
}

function helpBoxSpansDecorationShow(idi, idj) { // בלחיצה על תא בטבלה תציג את ערכי העיצוב האחרונים שנשמרו בקופסת העזרה
    relatedInputs(idi, idj);
    for (let k = 0; k < 9; k++) {
        spanDecor = document.getElementById('helpNum' + k.toString()).style.textDecoration;
        if (spanMatStyle[idi][idj][k] == 1) {
            document.getElementById('helpNum' + k.toString()).style.textDecoration = 'line-through';
        } else {
            document.getElementById('helpNum' + k.toString()).style.textDecoration = 'none';
        }
    }
}

function hintsButtom() {
    if (document.getElementById('useHintsError').checked == false) {
        document.getElementById('useHintsError').checked = true;
    } else {
        document.getElementById('useHintsError').checked = false;
    }
}

function changeSpanDecor(spanId) { // מתקו את עיצוב ספרה בודדת בקופסת העזרה
    let spanDecor = document.getElementById('helpNum' + spanId.toString()).style.textDecoration;
    //alert(spanMatStyle[selectedCell.cellIndexI][selectedCell.cellIndexJ][spanId]);
    if (spanMatStyle[selectedCell.cellIndexI][selectedCell.cellIndexJ][spanId] == 1) {
        document.getElementById('helpNum' + spanId.toString()).style.textDecoration = 'none';
        spanMatStyle[selectedCell.cellIndexI][selectedCell.cellIndexJ][spanId] = 0;
    } else {
        document.getElementById('helpNum' + spanId.toString()).style.textDecoration = 'line-through';
        spanMatStyle[selectedCell.cellIndexI][selectedCell.cellIndexJ][spanId] = 1;
    }
}

function checkError(valueCell) { // אם הוכנס ערך שלא אמור להיות שם על פי המספרים על הלוח אז היא תדגיש באדום את הערכים שסותרים את הערך שהוכנס
    let arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', ""];
    if (arr.indexOf(document.getElementById('num' + selectedCell.cellIndexI.toString() + selectedCell.cellIndexJ.toString()).value.toString()) == -1) {
        alert("Please enter only numbers from 1 to 9");
        document.getElementById('num' + selectedCell.cellIndexI.toString() + selectedCell.cellIndexJ.toString()).value = "";
    }
    if (document.getElementById('useHintsError').checked == false) {
        return false;
    } else {
        relatedInputs(selectedCell.cellIndexI, selectedCell.cellIndexJ);
        let count = 0;
        if (connectedCells.indexOf(valueCell) != -1) {
            for (let i = 0; i < 9; i++) {
                for (let j = 0; j < 9; j++) {
                    if (document.getElementById('num' + i.toString() + j.toString()).style.backgroundColor != 'aqua' && document.getElementById('num' + i.toString() + j.toString()).value == valueCell) {
                        document.getElementById('num' + i.toString() + j.toString()).style.backgroundColor = 'red';
                        count++;
                    }
                }
            }
        }
        if (count == 1) {
            document.getElementById('num' + selectedCell.cellIndexI.toString() + selectedCell.cellIndexJ.toString()).style.backgroundColor = 'green';
        }
    }
}

/*function giveHelp() { //לא מוכן----- פונקציה שתפתח חלון עזרה למשתמש להחליט איזה מספר מתאים לכל תא - שימוש באובייקטים
    //  spanNum.style.visibility = "visible";

    let spanNum = document.getSelection();
    spanNum.innerHTML = "pop";
}*/

function selectedHint(selectedCell) { // פונקציה שתפתור תא שנבחר
    if (parseInt(selectedCell.cellIndexI + selectedCell.cellIndexJ) >= 0 && parseInt(selectedCell.cellIndexI + selectedCell.cellIndexJ) <= 88)
        document.getElementById('num' + selectedCell.cellIndexI + selectedCell.cellIndexJ).value = selectedCell.cellValue;
    else
        alert("please select sell");

}

function randomHint() { // פונקציה שתפתור תא רנדומלי
    let i, j;
    let isEntered = false;
    let chkArr = [];
    chkArr = isFinishOrFull();
    if (chkArr[1] == true)
        alert("There are no more available slots");
    else {
        let cellNum = Math.floor(Math.random() * 89) + 0;
        while (!isEntered) { // מוודאים שלא נכנס לתא אחד ערך פעמיים
            while (parseInt(cellNum % 10) == 9) //ספרת האחדות לא יכולה להיות 9 המערך והתאים ממוספרים מ0 עד 8
            {
                cellNum = Math.floor(Math.random() * 89) + 0;
            }
            j = parseInt(cellNum % 10); //מבודדים את ספרת האחדות אחראי על המערכים הפנימיים שבמטריצה
            i = parseInt(cellNum / 10); // מבודדים את ספרת העשרות אחראי על הערכים החיצוניים שבמטריצה
            if (document.getElementById('num' + i.toString() + j.toString()).value > 0 && document.getElementById('num' + i.toString() + j.toString()).value <= 9) {
                cellNum = Math.floor(Math.random() * 89) + 0;
            } else {
                document.getElementById('num' + i.toString() + j.toString()).value = sudokuOne[i][j];
                isEntered = true;
            }

        }
    }
}

function isFinishOrFull() { // הפונקציה בודקת האם הלוח מלא והאם הלוח תקין ומחזירה מערך עם 2 תאים עם התשובות
    let isFinish = false,
        isFull = false;
    let counterFinish = 0;
    let counterFull = 0;
    for (let i = 0; i < sudokuOne.length; i++) {
        for (let j = 0; j < sudokuOne[i].length; j++) {
            if (document.getElementById('num' + i.toString() + j.toString()).value == sudokuOne[i][j]) {
                counterFinish++;
            }
            if (document.getElementById('num' + i.toString() + j.toString()).value > 0 && document.getElementById('num' + i.toString() + j.toString()).value <= 9) {
                counterFull++;
            }
        }
    }
    if (counterFinish == 81) {
        isFinish = true;
    }
    if (counterFull == 81) {
        isFull = true;
    }
    let results = [isFull, isFinish];
    return results;
}

function finish() { //  מופעלת על ידי לחיצה על כפתור הסיום - תציג הודעה האם הלוח תקין או לא
    let chkArr = isFinishOrFull();
    if (chkArr[1] == true) {
        document.getElementById('lastMsg').style.display = 'inline-block';
        document.getElementById('lastMsg').style.backgroundColor = 'lightgreen';
        document.getElementById('lastMsgTxt').innerHTML = "Congratulations!!! <br>";
        document.getElementById('sadFace').style.display = 'none';
        document.getElementById('happyFace').style.display = 'inline-block';
    } else {
        document.getElementById('lastMsg').style.display = 'inline-block';
        document.getElementById('lastMsg').style.backgroundColor = 'red';
        document.getElementById('lastMsgTxt').innerHTML = "Too bad <br> Better luck next time <br>";
        document.getElementById('happyFace').style.display = 'none';
        document.getElementById('sadFace').style.display = 'inline-block';
    }
}

function intro() {
    let sec = 4;
    document.getElementById('startLabel').style.fontSize = '1000%';
    let countdown = setInterval(function() {
        document.getElementById('startLabel').style.display = 'block';
        if (sec < 2) {
            document.getElementById('startLabel').innerHTML = 'Go';
        } else {
            sec--;
            document.getElementById('startLabel').innerHTML = sec.toString();
            sec++;
        }
        sec--;
    }, 500);
    setTimeout(function() {
        clearInterval(countdown);
        document.getElementById('startLabel').style.display = 'none';
    }, 3000);
}

function reset() {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (document.getElementById('num' + i.toString() + j.toString()).disabled == false) {
                document.getElementById('num' + i.toString() + j.toString()).value = "";
            }
            clearInterval(counterBack);
            timer();
            document.getElementById('lastMsg').style.display = 'none';
        }
    }
}

function bgRed() {
    document.getElementById('innerDiv').style.backgroundImage = "url(img/gamebackg.jpg)";
}

function bgBlue() {
    document.getElementById('innerDiv').style.backgroundImage = "url(img/gamebackg2.png)";
}

function bgWhite() {
    document.getElementById('innerDiv').style.backgroundImage = "url(img/background.png)";
}

function back() {
    window.location = '../difficulty/difficulty.html'
}

// דברים להוסיף
// עמוד התחברות
// עמוד בורר קושי


//add sudokus tables