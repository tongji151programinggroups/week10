/**
 * Created by pc on 2016/11/22.
 */
var canvas = document.getElementById("canvas");
canvas.width = 720;
canvas.height = 1280;
var context = canvas.getContext("2d");
context.fillStyle = "#ebebeb";
context.fillRect(0, 0, canvas.width, canvas.height);
//context.fill(); ??????????fill????????????
drawBackground(context);

function drawBackground(cxt) {
    //???????????????????ò?????load??image????????????????????????

    //draw?????
    cxt.beginPath();
    cxt.fillStyle = "#393a3f";
    cxt.fillRect(0, 49, canvas.width, 95);
    cxt.closePath();

    //draw????
    var statusBar = new Image();
    statusBar.src = "./images/statusBar.png";
    statusBar.onload = function () {
        cxt.drawImage(statusBar, 0, 0);
    }

    //draw?????
    //???????
    //var dialogBar = new Image();
    //dialogBar.scr = "./images/dialogBar.png";
    //onload.function(cxt){  <---???????
    //    cxt.drawImage(0, 1085, dialogBar);   <---?????????
    //}
    var dialogBar = new Image();
    dialogBar.src = "./images/dialogBar.png";
    dialogBar.onload = function () {
        cxt.drawImage(dialogBar, 0, 1085);
    }

    //draw????
    var head = new Image();
    head.src = "./images/head.png";
    head.onload = function () {
        cxt.drawImage(head, 643, 77);
    }

    //draw???
    var arrow = new Image();
    arrow.src = "./images/arrow.png";
    arrow.onload = function () {
        cxt.drawImage(arrow, 30, 75);
    }

}

function freshBeforeGenerate(cxt) {
    cxt.beginPath();
    cxt.fillStyle = "#ebebeb";
    cxt.fillRect(0, 145, canvas.width, 945);
    cxt.closePath();

    cxt.beginPath();
    cxt.fillStyle = "#393a3f";
    cxt.fillRect(100, 52, 540, 90);
    cxt.closePath();

    cxt.beginPath();
    cxt.fillStyle = "#212121";
    cxt.fillRect(605, 0, 115, 50);
    cxt.closePath();
}

function generate(cxt) {
    //?????????
    //drawBackground(cxt); //???????????????? <--???淢?????????????????????????????????????????????????????
    freshBeforeGenerate(cxt);
    timeBox(cxt);   //??????????????С???????????β?????????????????load???????
    var name = document.getElementById("name"); //???name???id???????
    cxt.beginPath();
    cxt.font = "lighter 38px Microsoft YaHei" //35px ???壿???????????????У???????????????
    cxt.textAlign = "left";
    cxt.textBaseline = "top";
    cxt.fillStyle = "#ffffff";
    cxt.fillText(name.value, 122, 72); //??????????????<--?鵽??????????????λ???????????????????????????????????????????????

    //??????(????????????-->????????????* > ???????????????????????????????????????????????
    //var chk????????
    var chk = new Array(7);
    var select = new Array(7); //??js?У????????????????
    var content = new Array(7);
    //for (var i = 1; i < 8; i++) {
    //    chk[i] = document.getElementById("chk" + i);
    //    if (chk[i].checked) {               //select[i] = document.getElementById("select" + i)?????????????????ж??????
    //        select[i] = document.getElementById("select" + i);
    //        if(select[i] == 0){              //???????chatBox????Щ?????????
    //            myChatBox(context, 595 + chk[i].length * 2, )
    //        }
    //    }
    //}
    var dis = 0;
    for (var i = 1; i < 8; i++) {
        if(i == 1) {
            dis = 90 + 146;      //?????
        }
        else {
            dis = dis + 25 + 80; //????????? ?????????????????ó???????  ????????б??????
        }

        //????????????????ж?????
        chk[i] = document.getElementById('chk' + i);
        select[i] = document.getElementById('select' + i);
        content[i] = document.getElementById('cnt' + i);

        if (chk[i].checked) {
            var index = select[i].selectedIndex; //???????????????????
            if (index == 0) {
                drawMyMessage(cxt, content[i].value, dis); //??????value
            } else {
                drawHisMessage(cxt, content[i].value, dis);
            }
        }
    }
}

function myChatBox(cxt, x, y, w, h, r) {
    cxt.beginPath();
    cxt.moveTo(x, y);
    cxt.lineTo(x + w, y);
    cxt.arc(x + w, y + r, r, Math.PI * 1.5, Math.PI * 2); //???????????????????x??y??????????
    cxt.lineTo(x + w + r, y + 32);
    cxt.lineTo(x + w + r + 11, y + 42);
    cxt.lineTo(x + w + r, y + 52);
    cxt.lineTo(x + w + r, y + h + r);
    cxt.arc(x + w, y + h + r, r, 0, Math.PI * 0.5);
    cxt.lineTo(x, y + h + r + r);
    cxt.arc(x, y + h + r, r, Math.PI * 0.5, Math.PI * 1);
    cxt.lineTo(x - r, y + r);
    cxt.arc(x, y + r, r, Math.PI * 1, Math.PI * 1.5);
    cxt.closePath();
    cxt.strokeStyle = "#85cc2e";
    cxt.fillStyle = "#b2e866";
    cxt.fill();
    cxt.stroke();
}

function hisChatBox(cxt, x, y, w, h, r) {
    var grd = cxt.createLinearGradient(x, y, x, y + h);
    grd.addColorStop(0.0, "#ffffff");
    grd.addColorStop(1.0, "#f9f9f9");
    cxt.beginPath();
    cxt.moveTo(x, y);
    cxt.lineTo(x + w, y);
    cxt.arc(x + w, y + r, r, Math.PI * 1.5, Math.PI * 2); //???????????????????x??y??????????
    cxt.lineTo(x + w + r, y + h + r);
    cxt.arc(x + w, y + h + r, r, 0, Math.PI * 0.5);
    cxt.lineTo(x, y + h + r + r);
    cxt.arc(x, y + h + r, r, Math.PI * 0.5, Math.PI * 1);
    cxt.lineTo(x - r, y + 52);
    cxt.lineTo(x - r - 11, y + 42);
    cxt.lineTo(x - r, y + 32);
    cxt.arc(x, y + r, r, Math.PI * 1, Math.PI * 1.5);
    cxt.closePath();
    cxt.strokeStyle = "#b4b4b4"; ///
    cxt.fillStyle = grd;
    cxt.fill();
    cxt.stroke(); //???????stroke???????????
}

//???????????ù???
function drawMyMessage(cxt, msg, y){
    cxt.beginPath();
    var myHead = new Image();
    myHead.src = document.getElementById('imgHead1').src;
    myHead.onload = function() {
        cxt.drawImage(myHead, 720 - 16 - 80, y);
    }

    cxt.beginPath();
    cxt.font = '30px Microsoft YaHei';
    //????????????????ú????????????????
    var msgLength = cxt.measureText(msg).width; //ò??????????????????????????????к???
    myChatBox(cxt, 750 - 17 - 80 - 40 - msgLength - 25 - 20, y, msgLength + 25, 70, 8);
    cxt.textBaseline = 'top'; //?????????????????
    cxt.fillStyle = 'black';
    cxt.fillText(msg, 750 - 16 - 80 - 40 - msgLength - 15 - 20, y + 20);
}

function drawHisMessage(cxt, msg, y){
    cxt.beginPath();
    var hisHead = new Image();
    hisHead.src = document.getElementById('imgHead2').src; //???????????????????????<--?????
    hisHead.onload = function() {
        cxt.drawImage(hisHead, 18, y);
    }

    cxt.beginPath();
    cxt.font = '30px Microsoft YaHei';
    var msgLength = cxt.measureText(msg).width; //????msg?????????figure it out
    hisChatBox(cxt, 122, y, msgLength + 25, 70, 8);
    cxt.textBaseline = 'top';
    cxt.fillStyle = 'black';
    cxt.fillText(msg, 135, y + 20);
}

function min(cxt, minute, x, y) {
    if (minute < 10) {
        cxt.fillText("0", x + 1, y);
        cxt.fillText(minute, x + 15, y);
    } else {
        cxt.fillText(minute, x +8, y);
    }
}

function timeBox(cxt) {
    //?????????????????
    var date = new Date(); //????????????
    //var year = date.getFullYear();
    //var month = date.getMonth()+1;
    //var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    //var second = date.getSeconds();
    var ampm = "AM";
    if (hour > 12) {
        ampm = "PM";
        hour -= 12;
    }

    cxt.beginPath();
    cxt.moveTo(310, 170);
    cxt.lineTo(410, 170);
    cxt.arc(410, 175, 5, Math.PI * 1.5, Math.PI * 2); //???????????????????x??y??????????
    cxt.lineTo(415, 210);
    cxt.arc(410, 205, 5, 0, Math.PI * 0.5);
    cxt.lineTo(310, 210);
    cxt.arc(310, 205, 5, Math.PI * 0.5, Math.PI * 1);
    cxt.lineTo(305, 175);
    cxt.arc(310, 175, 5, Math.PI * 1, Math.PI * 1.5);
    cxt.closePath();
    cxt.fillStyle = "#d4d4d4";
    cxt.fill();

    //?????????
    cxt.font = "25px Nirmala UI";
    cxt.textAlign = "center";
    cxt.textBaseline = "middle";
    cxt.fillStyle = "#ffffff";
    cxt.fillText(hour, 323 + 5 - 3, 190);    //??????????????<--???????д??????
    cxt.fillText(":", 345 - 5 - 3 + 4, 188);
    //cxt.fillText(minute, 362 + 5 - 3, 190);  //????????????????????????? 4->04 ? am/pm ? ??????????????????????????
    min(cxt, minute, 349, 190);
    cxt.font = "23px Nirmala UI";
    cxt.fillText(ampm, 400 - 5 - 5, 190);

    cxt.font = "30px Arial";
    cxt.fillText(hour, 323 + 18 + 275, 26 + 2);    //??????????????<--???????д??????
    cxt.fillText(":", 345 + 15 + 275, 25 + 2);
    //cxt.fillText(minute, 362 + 5 - 3, 190 + 2);  //????????????????????????? 4->04 ? am/pm ? ??????????????????????????
    min(cxt, minute, 645, 26 + 2);
    cxt.font = "23px Arial";
    cxt.fillText(ampm, 400 + 290, 28 + 2);
}