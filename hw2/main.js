var others_container = document.getElementsByClassName("others_container");
var img_avatar = ["avatar/kitty.png", "avatar/puri.png", "avatar/kuromi.png", "avatar/melody.png", "avatar/pocha.png","avatar/kitty.png", "avatar/puri.png", "avatar/kuromi.png", "avatar/melody.png", "avatar/pocha.png","avatar/kitty.png", "avatar/puri.png", "avatar/kuromi.png", "avatar/melody.png", "avatar/pocha.png"];
var person_name = ["Hello Kitty", "Pom Pom Purin", "Kuromi", "My Melody", "Pochacco","1","2","3","4","5","6","7","8","9","10"];
var avatar_myself = document.getElementById("avatar_myself");
var anchored_name = document.getElementById("anchored_name");
var avatar_anchored_oval = document.getElementById("avatar_anchored_oval");
var root = document.getElementsByClassName("root");
var avatar_anchored = document.getElementsByClassName("avatar_anchored");
var anchored_exist = 1;
var new_contain = 0;

function create_others(img_avatar, person_name){

    //外框
    var others_person = document.createElement("div");
    others_person.className = "others";
    others_container[0].appendChild(others_person);

    //上面
    var others_above = document.createElement("div");
    others_above.className = "others_above";
    var remove_user = document.createElement("button");
    remove_user.className = "remove_user";
    var mute_others = document.createElement("img");
    mute_others.className = "mute_others"
    mute_others.src = "function/mute.png";

    others_person.appendChild(others_above);
    others_above.appendChild(remove_user);
    others_above.appendChild(mute_others);

    //頭貼
    var avatar_others_img = document.createElement("img");
    avatar_others_img.className = "avatar_others_img";
    avatar_others_img.src = img_avatar[i];
    others_person.appendChild(avatar_others_img);

    //字
    var avatar_name = document.createElement("p");
    avatar_name.innerText = person_name[i];
    others_person.appendChild(avatar_name);

    //橢圓
    var oval = document.createElement("div");
    oval.className = "oval";
    var btn = document.createElement("div");
    btn.className = "button";
    var pin_others_mid = document.createElement("button");
    pin_others_mid.className = "pin_others_mid";
    var mute_others_mid = document.createElement("button");
    mute_others_mid.className = "mute_others_mid";
    var remove_others_mid = document.createElement("button");
    remove_others_mid.className = "remove_others_mid";

    others_person.appendChild(oval);
    oval.appendChild(btn);
    btn.appendChild(pin_others_mid);
    btn.appendChild(mute_others_mid);
    btn.appendChild(remove_others_mid);

    //監聽叉叉
    remove_user.addEventListener("click",function(){
        others_person.parentNode.removeChild(others_person);
        remove_cnt--;
        console.log('removed', remove_cnt)
        if(remove_cnt === 0){
            avatar_myself.src = "avatar/cinna.png";
            anchored_name.innerText = "你";
            remove_others();
            if(anchored_exist === 0){
                appear_anchored();
            }
        }
        if(anchored_exist === 0){
            check_typesetting_full();
        }
        else{
            check_typesetting_half();
        }
    });

    //監聽 anchored
    oval.addEventListener("click",function(){

        if(anchored_exist === 0){
            appear_anchored();
            //把點選的人物換成置頂的
            avatar_myself.src = avatar_others_img.src;
            anchored_name.innerText = avatar_name.innerText;

            //刪掉旁邊多的人物（被點選的，因為他已經被置頂）
            var avatar_others = avatar_others_img.parentNode;
            avatar_others.parentNode.removeChild(avatar_others);
            check_typesetting_half();
        }
        else{
            //swap
            var temp = []; 

            //img
            temp[0] = avatar_myself.src;
            avatar_myself.src = avatar_others_img.src;
            avatar_others_img.src = temp[0];

            //name 
            temp[1] = anchored_name.innerText;
            anchored_name.innerText = avatar_name.innerText;
            avatar_name.innerText = temp[1];
 
            if(avatar_name.innerText == "你"){
                remove_user.style.visibility = 'hidden'; 
            }
            else{
                remove_user.style.visibility = 'visible'; 
            }
        }

    })
    if(avatar_name.innerText == "你"){
        remove_user.style.visibility = 'hidden'; 
    }
    else{
        remove_user.style.visibility = 'visible'; 
    }
    
}

//把右邊移除
var avatar_others = document.getElementsByClassName("avatar_others");
function remove_others(){
    avatar_others[0].style.display = "none";
}

//原始畫面
var remove_cnt = 0;
for(var i = 0; i < 5; i++){
    create_others(img_avatar, person_name);
    remove_cnt++;
    check_typesetting_half();
}

//移除 anchored 然後重新排版
avatar_anchored_oval.addEventListener("click",function(){
    var temp_img = [];
    var temp_name = [];
    temp_img[i] = avatar_myself.src;
    temp_name[i] = anchored_name.innerText;
    create_others(temp_img, temp_name);
    if(remove_cnt !== 0){
        remove_anchored();
    }
    if(anchored_exist === 0){
        others_container[0].className = "others_container_new";
        new_contain = 1;
    }
});

function remove_anchored(){
    avatar_anchored[0].style.display= "none";
    anchored_exist = 0;
    check_typesetting_full();
};

//anchored 出現
function appear_anchored(){
    avatar_anchored[0].style.display= "flex";
    anchored_exist = 1;
}

function check_typesetting_full(){
    var others_person = document.getElementsByClassName("others");
    for(var j = 0; j < others_person.length; j++){
        if(others_person.length <= 4){
            others_person[j].style.flexBasis = "50%";
            others_person[j].style.height = "50%";
        }
        else if(others_person.length <= 6){
            others_person[j].style.flexBasis = "33%";
            others_person[j].style.height = "50%";
        }
        else if(others_person.length <= 9){
            others_person[j].style.flexBasis = "33%";
            others_person[j].style.height = "33%";
        }
        else if(others_person.length <= 12){
            others_person[j].style.flexBasis = "25%";
            others_person[j].style.height = "33%";
        }
        else if(others_person.length > 12){
            others_person[j].style.flexBasis = "20%";
            others_person[j].style.height = "33%";
        }
    }
}

function check_typesetting_half(){
    //把排版換回來
    if(new_contain === 1){
        var others_container = document.getElementsByClassName("others_container_new");
        others_container[0].className = "others_container";
        new_contain = 0;
    }
    var others_person = document.getElementsByClassName("others");
    for(var i = 0; i < others_person.length; i++){
        if(others_person.length < 8){
            others_person[i].style.flexBasis = "50%";
            others_person[i].style.height = "50%";
        }
        else if(others_person.length < 15){
            others_person[i].style.flexBasis = "33%";
            others_person[i].style.height = "45%";
        }
    }
}

function set_current_time(){
    var timestamp = new Date();
    var hour = String(timestamp.getHours())
    var min = String(timestamp.getMinutes()).padStart(2, '0')
    var day = '早上'
    if (hour > 12) {
        hour = hour - 12
        if(hour < 6){
            day = '下午'
        }
        else{
            day = "晚上"
        }
    }
    var time = day + hour + ':' + min;
    var word_left = document.getElementById("word_left");
    word_left.innerText = time + " ｜ Sanrio Meeting";
}
set_current_time();


var plus_btn = document.getElementsByClassName("plus_btn");
plus_btn[0].addEventListener("click",function(){
    console.log("a", remove_cnt);
    if(remove_cnt > 13){
        alert('max display number')
        return
    } 
    if(remove_cnt === 0){
        avatar_others[0].style.display = "flex";
    }
    create_others(img_avatar[remove_cnt], person_name[remove_cnt]);
    remove_cnt++;
    check_typesetting_half();
})


/* 
<div class = "others" id = "others_kitty">
    <div class = "others_above">
        <button class = "remove_user" id = "remove_kitty"></button>
        <img class = "mute_others" src="function/mute.png">
    </div>
    <img class = "avatar_others_img" src = "avatar/kitty.png">
    <p>Hello Kitty</p>
    <div class ="oval">
        <div class="button">
            <button class="pin_others_mid"></button>
            <button class="mute_others_mid"></button>
            <button class="remove_others_mid"></button>
        </div>
    </div>
</div>
<div class = "others" id = "others_purin">
    <div class = "others_above">
        <button class = "remove_user" id = "remove_purin"></button>
        <img class = "mute_others" src="function/mute.png">
    </div>
    <img class = "avatar_others_img" src = "avatar/puri.png">
    <p>Pom Pom Purin</p>
    <div class ="oval">
        <div class="button">
            <button class="pin_others_mid"></button>
            <button class="mute_others_mid"></button>
            <button class="remove_others_mid"></button>
        </div>
    </div>
</div>
<div class = "others" id = "others_kuromi">
    <div class = "others_above">
        <button class = "remove_user" id = "remove_kuromi"></button>
        <img class = "mute_others" src="function/mute.png">
    </div>
    <img class = "avatar_others_img" src = "avatar/kuromi.png">
    <p>Kuromi</p>
    <div class ="oval">
        <div class="button">
            <button class="pin_others_mid"></button>
            <button class="mute_others_mid"></button>
            <button class="remove_others_mid"></button>
        </div>
    </div>
</div>
<div class = "others" id = "others_melody">
    <div class = "others_above">
        <button class = "remove_user" id = "remove_melody"></button>
        <img class = "mute_others" src="function/mute.png">
    </div>
    <img class = "avatar_others_img" src = "avatar/melody.png">
    <p>My Melody</p>
    <div class ="oval">
        <div class="button">
            <button class="pin_others_mid"></button>
            <button class="mute_others_mid"></button>
            <button class="remove_others_mid"></button>
        </div>
    </div>
</div>
<div class = "others" id = "others_pocha">
    <div class = "others_above">
        <button class = "remove_user " id = "remove_pocha"></button>
        <img class = "mute_others" src="function/mute.png">
    </div>
    <img class = "avatar_others_img" src = "avatar/pocha.png">
    <p>Pochacco</p>
    <div class ="oval">
        <div class="button">
            <button class="pin_others_mid"></button>
            <button class="mute_others_mid"></button>
            <button class="remove_others_mid"></button>
        </div>
    </div>
</div>
*/ 

/*
function create_anchored(){
    //外框
    var avatar_anchored = document.createElement("div");
    avatar_anchored.className = "avatar_anchored";
    root[0].appendChild(avatar_anchored);

    //靜音紐
    var anchored_mute = document.createElement("div");
    anchored_mute.className = "anchored_mute";
    avatar_anchored.appendChild(anchored_mute);
    var anchored_mute_img = document.createElement("img");
    anchored_mute_img.src = "function/mute_black.png";
    anchored_mute.appendChild(anchored_mute_img);

    //頭貼
    var avatar_cotainer = document.createElement("div");
    avatar_cotainer.className = "avatar_container";
    avatar_anchored.appendChild(avatar_cotainer);
}*/

/*
移除問題：
1. remove 一個上面四個的，把 div five 裡的東西加進 others container 不知道可不可以
2.感覺可以直接換頭貼名字ㄟ，然後把背景框框刪掉

pin 問題：
1. click 了 oval 後，把 others 跟 anchored 裡的元素交換（？）
2. 或是直接把頭貼跟名字交換？

取消 pin 問題：
1. 直接寫一個新的排版吧 QQ
2. pin 回去的話就把東西塞回去原本排版
*/
