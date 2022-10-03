var others_container = document.getElementsByClassName("others_container");
const img_avatar = ["avatar/kitty.png", "avatar/puri.png", "avatar/kuromi.png", "avatar/melody.png", "avatar/pocha.png","avatar/twin.jpg", "avatar/tuxedoSam.JPG", "avatar/mocha.JPG", "avatar/keroppi.JPG", "avatar/piano.jpg","avatar/hanGyodon.JPG", "avatar/gudetama.jpg", "avatar/chococat.JPG", "avatar/badtemaru.JPG"];
const person_name = ["Hello Kitty", "Pom Pom Purin", "Kuromi", "My Melody", "Pochacco","Little Twin Stars","Tuxedo Sam","Mocha","Keroppi","My Sweet Piano","Han-Gyodon","Gudetama","Chococat","Badtemaru"];
var avatar_myself = document.getElementById("avatar_myself");
var anchored_name = document.getElementById("anchored_name");
var avatar_anchored_oval = document.getElementById("avatar_anchored_oval");
var root = document.getElementsByClassName("root");
var avatar_anchored = document.getElementsByClassName("avatar_anchored");
var anchored_exist = 1;
var new_contain = 0;

function create_others(img, name){

    if(new_contain === 1){
        var others_container = document.getElementsByClassName("others_container_new");
    }
    else{
        var others_container = document.getElementsByClassName("others_container");
    }

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
    if(create_anchored_to_others === 1){
        avatar_others_img.src = img[remove_cnt];
    }
    else{
        check_pic_used();
        avatar_others_img.src = img[person_temp];
        pic_used[person_temp] = 1;
    }
    others_person.appendChild(avatar_others_img);

    //字
    var avatar_name = document.createElement("p");
    if(create_anchored_to_others === 1){
        avatar_name.innerText = name[remove_cnt];
        create_anchored_to_others = 0;
    }
    else{
        avatar_name.innerText = name[person_temp];
    }
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
        var person_used_name = remove_user.parentNode.parentNode.getElementsByTagName("p")
        for(var k = 0; k < 14; k++){
            if(person_used_name[0].innerText === person_name[k]){
                pic_used[k] = 0;
            }
        }
        others_person.parentNode.removeChild(others_person);
        remove_cnt--;
        if(remove_cnt === 0){
            avatar_myself.src = "avatar/cinna.png";
            anchored_name.innerText = "你";
            if(new_contain === 1){
                var redunctant_me = document.getElementsByClassName("others")
                redunctant_me[0].parentNode.removeChild(redunctant_me[0]);
            }
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
            create_anchored_to_others = 0;
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

//陣列儲存圖片有沒有被用過
var person_temp = 0;
var pic_used = new Array(14); 
for (let i=0; i<14; ++i) pic_used[i] = 0;

function check_pic_used(){
    while(pic_used[person_temp] === 1){
        person_temp++;
        if(person_temp > 13){
            person_temp = person_temp - 14;
        }
    }
    if(person_temp > 13){
        person_temp = person_temp - 14;
    }
}

//原始畫面
function getRandom(min,max){
    return Math.floor(Math.random()*max)+min;
};
var remove_cnt = 0;
for(var i = 0; i < getRandom(1,14); i++){
    create_others(img_avatar, person_name);
    remove_cnt++;
    pic_used[i] = 1;
    check_typesetting_half();
}

//移除 anchored 然後重新排版
var create_anchored_to_others = 0;
avatar_anchored_oval.addEventListener("click",function(){
    if(remove_cnt === 0 && anchored_exist !== 0){
        return;
    }
    else{
        create_anchored_to_others = 1;
        var temp_img = [];
        var temp_name = [];
        temp_img[remove_cnt] = avatar_myself.src;
        temp_name[remove_cnt] = anchored_name.innerText;
        create_others(temp_img, temp_name);
        if(remove_cnt !== 0){
            remove_anchored();
        }
        if(anchored_exist === 0){
            others_container[0].className = "others_container_new";
            new_contain = 1;
        }
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
        var others_person_img = document.getElementsByClassName("avatar_others_img");
        if(others_person.length <= 4){
            others_person[j].style.flexBasis = "50%";
            others_person[j].style.height = "50%";
            others_person_img[j].style.height = "100px";
            others_person_img[j].style.width = "100px";
        }
        else if(others_person.length <= 6){
            others_person[j].style.flexBasis = "33%";
            others_person[j].style.height = "50%";
            others_person_img[j].style.height = "90px";
            others_person_img[j].style.width = "90px";
        }
        else if(others_person.length <= 9){
            others_person[j].style.flexBasis = "33%";
            others_person[j].style.height = "33%";
            others_person_img[j].style.height = "75px";
            others_person_img[j].style.width = "75px";
        }
        else if(others_person.length <= 12){
            others_person[j].style.flexBasis = "25%";
            others_person[j].style.height = "33%";
            others_person_img[j].style.height = "65px";
            others_person_img[j].style.width = "65px";
        }
        else if(others_person.length > 12){
            others_person[j].style.flexBasis = "20%";
            others_person[j].style.height = "33%";
            others_person_img[j].style.height = "55px";
            others_person_img[j].style.width = "55px";
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
        var others_person_img = document.getElementsByClassName("avatar_others_img");
        if(others_person.length < 8){
            others_person[i].style.flexBasis = "50%";
            others_person[i].style.height = "50%";
            others_person_img[i].style.height = "55px";
            others_person_img[i].style.width = "55px";
        }
        else if(others_person.length < 15){
            others_person[i].style.flexBasis = "33%";
            others_person[i].style.height = "45%";
            others_person_img[i].style.height = "55px";
            others_person_img[i].style.width = "55px";
        }
    }
}

function set_current_time(){
    var timestamp = new Date();
    var hour = String(timestamp.getHours())
    var min = String(timestamp.getMinutes()).padStart(2, '0')
    var day = '早上'
    if (hour == 12){
        day = '中午'
    }
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
    if(remove_cnt > 13){
        alert('max display number')
        return
    } 
    if(remove_cnt === 0){
        avatar_others[0].style.display = "flex";
    }

    create_others(img_avatar, person_name);
    if(anchored_exist === 1){
        check_typesetting_half();
    }
    else{
        check_typesetting_full();
    }
    remove_cnt++;
})
