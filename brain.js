var dem=0;
var angyMode=0;
var yourName = prompt('Enter your name: ')
var randomNumber;

//date and time
var d = new Date();
var current_day = d.getDay();
var current_date = d.getDate();
var current_hours = d.getHours();
var current_minutes = d.getMinutes();

var eleAll = [
            'ha ha ha ha ha ha ha ha, it so fun',
            'I dont know what are you talking about',
            'your grammar is wrong, try again stupid',
            'What the hell are you talking about',
            ];
var please = [
            "Ok, this time only ",
            "No next time ",
            ];
var sorry = [
            "No way",
            'No never',
            'Punch yourself',
            ];
var bye = [
            "Ok see you again",
            "i'm so sad, but bye bye",
            "bye bye",
            ];
var my_name = [
            "ah, I knew you, are you my old friend?",
            "yo, hello",
            "your name is beautiful",
            "I like your name, but i hate my name",
            ];
var yes = [
            "I know it",
            "ok",
            ];
var is_me = [
            "oh, I'm very honored",
            "you are so cool",
            ];
var khen = [
            "Oh, thank you",
            "I am very happy",
            ];
var thank = [
            "No problem",
            "ok, no problem",
            ];
var che_bai = [
            "I'm so sorry",
            "so sad",
            ];
var vo_van_hoa = [
            "hihi, i'm sorry",
            "i'm sorry bro",
            ];
var vietnam = [
            "Rít điếu thuốc lào nâng cao sức khỏe",
            "Phải có làm thì mới có ăn",
            "Đit mẹ chúng mày, bọn ranh con này",
            ];
var else_Saikhien = [
            "I can't, because i just a robot, why don't you search google",
            "I'm just a robot bro, i'm just a robot",
            "I'm so sorry, i can't",
            ];
var born = [
            "I was born in 19/7/2020",
            "i don't know my birthday, i just know i was born in 19/7/2020",
            "I'm a baby, i was born in 19/7/2020",
            ];
var create = [
            "That is Huy handsome",
            "Huy pro and handsome",
            "Mr Huy handsome",
            ];
var president = [
            "Donald Trump",
            "Donald duck",
            ];
var khong_the = [
            "Have you tried everything?",
            "It's a pity for that",
            ];
var did_said = [
            "I said you are very good",
            "I don't remember",
            "I don't know, what did i say?",
            ];
var how_are_you = [
            "I'm fine thank you",
            "I'm very very fine, very very thank you",
            ];
var facebook = [
            "yes, i have",
            "My facebook is",
            ];
var your_name = [
            "My name is Pussy, i fucking hate this name",
            "Pussy, please do not mention this name to anyone",
            "I quiz you know",
            ];
var can = [
            "I can sing for you",
            "I can suckking dick for you, if you want",
            "I can't do anything, i just a useless robot",
            ];
var why = [
            "that is secret",
            "I will not tell you",
            "Because you are stupid human",
            ];
var what = [
            "are you deaf ?",
            "what is what?",
            "what?",
            ];
var else_question = [
            "I don't know, i think you know ?",
            "I think you know ?",
            "Stupid",
            ];


function runSpeechRecognition() {
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
    var output = document.getElementById("output");
    var hasResult = false;
    var AI;
    //speech to text (voice reconized) (input)    
    recognition.onstart = function() {
    	//action.innerHTML = "<small>listening, please speak...</small>"
        var answer = document.getElementById("answer");
        answer.innerHTML = "Im listening...";
        console.log("Im listening...")
    };

    recognition.onspeechend = function() { 
        var answer = document.getElementById("answer");
        answer.innerHTML = ". . .";
        recognition.stop();
    };

    recognition.onend = function() { 
    console.log('stop recording'); 
    if(hasResult==false) {
        AI = "I can't hear you, try again."
        output.value = ". . .";
        var answer = document.getElementById("answer");
        setTimeout(() => {     
        answer.innerHTML = AI;
        var msg = new SpeechSynthesisUtterance(AI);
        msg.lang = 'en-GB';
        window.speechSynthesis.speak(msg);
         }, 1000)
        }
    }


    //tra ve ket qua nghe dc
    recognition.onresult = function(event) {
        hasResult = true;
        var transcript = event.results[0][0].transcript;
        output.value = transcript;
//xu li du lieu (processer)
        var you = transcript.toLowerCase();
        console.log("Me: " + you);
        console.log("...")

        //trêu chọc (tức giận hoặc trêu lại), 
        if(angyMode == 1) {
            AI = "I said who is siri";
            angyMode++;
         } else if(angyMode == 2) {
            AI = "fuck you";
            angyMode++;
         } else if(angyMode == 3) {
            AI = "Go ask Siri";
         } else {



                //van xin tha thu
    if(you.includes("sorry") || you.includes("please")) {
        if (you.includes("please")) {
            randomNumber = Math.floor(Math.random()*please.length);
            AI = please[randomNumber] + yourName;
        } else if (you.includes("sorry")) {
            randomNumber = Math.floor(Math.random()*sorry.length);
            AI = sorry[randomNumber];
        }  
    } else {
            randomNumber = Math.floor(Math.random()*eleAll.length);
            AI = eleAll[randomNumber];
        }


        //xa giao
    if(you.includes("my name") || you.includes("yes") || you.includes("is me") || you.includes("hello") || you.includes("hi") || you.includes("hey")) {
        if (you.includes("my name")) {
            randomNumber = Math.floor(Math.random()*my_name.length);
            AI = my_name[randomNumber];
        }  else if (you.includes("yes")) {
            randomNumber = Math.floor(Math.random()*yes.length);
            AI = yes[randomNumber];
        } else if (you.includes("is me")) {
            randomNumber = Math.floor(Math.random()*is_me.length);
            AI = is_me[randomNumber];
        } else if (you.includes("hello") || you.includes("hi")) {
            if(yourName!="") {
            if(dem==0) {
            AI = "Hello " + yourName;
            dem++;
            console.log(dem);
            } else if(dem==1) {
                AI = yourName + ", i'm here";
                dem++;
                console.log(dem); 
            } else if(dem==2) {
                AI = "I'm still here ???, what the fuck " + yourName;
                dem++;
                console.log(dem); 
            } else if(dem==3) {
                AI = "i'm not kidding";
                dem++;
                console.log(dem); 
            } else if(dem==4) {
                AI = "Lô con cặc";
                dem++;
                console.log(dem); 
            } else {
                AI = "get out of here";
                }
            } else {
                AI = "Hello...ah...I don't know your name.";
            }
        } else if (you.includes("hey")) {
            if(dem==0) {
            AI = "Hi, how can i help you?";
            dem++;
            console.log(dem);
            } else if(dem==1) {
                AI = "I'm here";
                dem++;
                console.log(dem); 
            } else if(dem==2) {
                AI = "I'm still here ???";
                dem++;
                console.log(dem); 
            } else if(dem==3) {
                AI = "What the fuck";
                dem++;
                console.log(dem); 
            } else if(dem==4) {
                AI = "Hey cái lồn";
                dem++;
                console.log(dem); 
            } else {
                AI = "get out of here";
            }
        } 
    }

        //treu
        if (you.includes("siri")) {
            AI = "Who is Siri ?";
            angyMode++;
        } 


        //khen(vui), 
        if(you.includes("bye") || you.includes("thank") || you.includes("good") || you.includes("smart") || you.includes("great") || you.includes("merry") || you.includes("welcome")) {
            if (you.includes("bye")) { 
            randomNumber = Math.floor(Math.random()*bye.length);
            AI = bye[randomNumber];
            } else if (you.includes("good") || you.includes("smart") || you.includes("great") || you.includes("merry") || you.includes("welcome")) {
            randomNumber = Math.floor(Math.random()*khen.length);
            AI = khen[randomNumber];        
            } else if (you.includes("thank")) {
            randomNumber = Math.floor(Math.random()*thank.length);
            AI = thank[randomNumber];
            }
            //chia ra nhỏ hơn
        }
        

        //chê bai-chửi(buồn->tự ái(Mode)), 
    if(you.includes("bad") || you.includes("stupid") || you.includes("no") || you.includes("fuck") || you.includes("make me") || you.includes("not you")) {
        if (you.includes("bad") || you.includes("stupid") || you.includes("no")) {
            randomNumber = Math.floor(Math.random()*che_bai.length);
            AI = che_bai[randomNumber];
        } else if (you.includes("fuck") || you.includes("make me") || you.includes("not you")) {
            randomNumber = Math.floor(Math.random()*vo_van_hoa.length);
            AI = vo_van_hoa[randomNumber];
        }
    } 

        //sai khiến, 
    if(you.includes("give me") || you.includes("open") || you.includes("help") || you.includes("can") || you.includes("could")) {
        if (you.includes("fun") || you.includes("joke")) {
            setTimeout(() => {
            var on = confirm("Would you like to see something cool?");
            if (on) {
                window.open('https://bestjavporn.com/video_tag/javfinder/', "_blank");
                AI = "hi hi"
            } else {
                AI = "Ok, so how can i help you";
            }
            }, 1000)
        } else if (you.includes("open")) {
            if (you.includes("youtube")) {
                window.open('https://www.youtube.com/', "_blank");
                AI = "Ok";
            } else if (you.includes("facebook")) {
                window.open('https://www.facebook.com/', "_blank");
                AI = "Ok";
            } else if (you.includes("messenger")) {
                window.open('https://www.messenger.com/', "_blank");
                AI = "Ok";
            } else {
                window.open('https://www.google.com/', "_blank");
                AI = "Ok";
            }
        } else if (you.includes("vietnamese") || you.includes("việt nam")) {
            randomNumber = Math.floor(Math.random()*vietnam.length);
            AI = vietnam[randomNumber];
        } else {
            randomNumber = Math.floor(Math.random()*else_Saikhien.length);
            AI = else_Saikhien[randomNumber];
        }
    }


        //nhắc nhở

        //than phiền, tam su
    if (you.includes("can't") || you.includes("bored") || you.includes("tired")) {
        if (you.includes("can't")) {
            randomNumber = Math.floor(Math.random()*khong_the.length);
            AI = khong_the[randomNumber];
        } else if (you.includes("bored") || you.includes("tired")) {
            setTimeout(() => {
            var on = confirm("Would you like to see something cool?");
            if (on) {
                window.open('https://bestjavporn.com/video_tag/javfinder/', "_blank");
                AI = "you have watched yet, Is it fun?"
            } else {
                AI = "Ok, so how can i help you";
            }
            }, 1000)
        } else {
            AI = "What can I do to make you better?";
        } 
        //thêm từ để nhận biết
    }
         

    //hỏi (hỏi về mình, hỏi về bên ngoài)
    if(you.includes("what") || you.includes("who") || you.includes("when") || you.includes("which") || you.includes("why") || you.includes("how") || you.includes("where") || you.includes("do")) {
        if (you.includes("birthday") || you.includes("born") || you.includes("old")) {
            randomNumber = Math.floor(Math.random()*born.length);
            AI = born[randomNumber];
        } else if (you.includes("create") && you.includes("you") || you.includes("your founded")) {
            randomNumber = Math.floor(Math.random()*create.length);
            AI = create[randomNumber];
        } else if (you.includes("president") && you.includes("america")) {
            randomNumber = Math.floor(Math.random()*president.length);
            AI = president[randomNumber];
        } else if (you.includes("say") && you.includes("did")) {
            randomNumber = Math.floor(Math.random()*did_said.length);
            AI = did_said[randomNumber];
        } else if (you.includes("how") && you.includes("you")) {
            randomNumber = Math.floor(Math.random()*how_are_you.length);
            AI = how_are_you[randomNumber];
        } else if (you.includes("your facebook")) {
            randomNumber = Math.floor(Math.random()*facebook.length);
            AI = facebook[randomNumber];
        } else if (you.includes("donald trump")) {
            window.open('https://vi.wikipedia.org/wiki/Donald_Trump', "_blank");
            AI = "This is some information about Donald Trump";
        } else if (you.includes("today")) {
            var day_name = '';
            switch (current_day) {
case 0:
    day_name = "Sunday";
    break;
case 1:
    day_name = "Monday";
    break;
case 2:
    day_name = "Tuesday";
    break;
case 3:
    day_name = "Wednesday";
    break;
case 4:
    day_name = "Thursday";
    break;
case 5:
    day_name = "Friday";
    break;
case 6:
    day_name = "Saturday";
}
        
            AI = "today is " + day_name + ", " + current_date;
        } else if (you.includes("time")) {
            AI = "Now is " + current_hours + " hours, " + current_minutes + " minutes";
        } else if (you.includes("your name")) {
            randomNumber = Math.floor(Math.random()*your_name.length);
            AI = your_name[randomNumber];
        } else if (you.includes("can")) {
            randomNumber = Math.floor(Math.random()*can.length);
            AI = can[randomNumber];
        } else if (you.includes("why")) {
            randomNumber = Math.floor(Math.random()*why.length);
            AI = why[randomNumber];
        } else if (you.includes("what")) {
            randomNumber = Math.floor(Math.random()*what.length);
            AI = what[randomNumber];
        } else {
            randomNumber = Math.floor(Math.random()*else_question.length);
            AI = else_question[randomNumber];
        }
        //phân ra: hỏi về mình - hỏi bên ngoài - hỏi tại sao lại làm thế 
    }
}
        console.log("AI: " + AI);
        var answer = document.getElementById("answer");
        setTimeout(() => {     
        answer.innerHTML = AI;
        var msg = new SpeechSynthesisUtterance(AI);
        msg.lang = 'en-GB';
        window.speechSynthesis.speak(msg);
         }, 1000)
// text to speech (output)
    };

    recognition.start();
}

// Code viết chữ
function textNote() {
        var answer = document.getElementById("answer");
        var output = document.getElementById("output");
        var AI;
        answer.innerHTML = ". . .";
        var text = document.getElementById("output").value;
        var you = text.toLowerCase();
        console.log("Me: " + you);
        console.log("...")
        //trêu chọc (tức giận hoặc trêu lại), 
        if(angyMode == 1) {
            AI = "I said who is siri";
            angyMode++;
         } else if(angyMode == 2) {
            AI = "fuck you";
            angyMode++;
         } else if(angyMode == 3) {
            AI = "Go ask Siri";
         } else {



                //van xin tha thu
    if(you.includes("sorry") || you.includes("please")) {
        if (you.includes("please")) {
            randomNumber = Math.floor(Math.random()*please.length);
            AI = please[randomNumber] + yourName;
        } else if (you.includes("sorry")) {
            randomNumber = Math.floor(Math.random()*sorry.length);
            AI = sorry[randomNumber];
        }  
    } else {
            randomNumber = Math.floor(Math.random()*eleAll.length);
            AI = eleAll[randomNumber];
        }


        //xa giao
    if(you.includes("my name") || you.includes("yes") || you.includes("is me") || you.includes("hello") || you.includes("hi") || you.includes("hey")) {
        if (you.includes("my name")) {
            randomNumber = Math.floor(Math.random()*my_name.length);
            AI = my_name[randomNumber];
        }  else if (you.includes("yes")) {
            randomNumber = Math.floor(Math.random()*yes.length);
            AI = yes[randomNumber];
        } else if (you.includes("is me")) {
            randomNumber = Math.floor(Math.random()*is_me.length);
            AI = is_me[randomNumber];
        } else if (you.includes("hello") || you.includes("hi")) {
            if(yourName!="") {
            if(dem==0) {
            AI = "Hello " + yourName;
            dem++;
            console.log(dem);
            } else if(dem==1) {
                AI = yourName + ", i'm here";
                dem++;
                console.log(dem); 
            } else if(dem==2) {
                AI = "I'm still here ???, what the fuck " + yourName;
                dem++;
                console.log(dem); 
            } else if(dem==3) {
                AI = "i'm not kidding";
                dem++;
                console.log(dem); 
            } else if(dem==4) {
                AI = "Lô con cặc";
                dem++;
                console.log(dem); 
            } else {
                AI = "get out of here";
                }
            } else {
                AI = "Hello...ah...I don't know your name.";
            }
        } else if (you.includes("hey")) {
            if(dem==0) {
            AI = "Hi, how can i help you?";
            dem++;
            console.log(dem);
            } else if(dem==1) {
                AI = "I'm here";
                dem++;
                console.log(dem); 
            } else if(dem==2) {
                AI = "I'm still here ???";
                dem++;
                console.log(dem); 
            } else if(dem==3) {
                AI = "What the fuck";
                dem++;
                console.log(dem); 
            } else if(dem==4) {
                AI = "Hey cái lồn";
                dem++;
                console.log(dem); 
            } else {
                AI = "get out of here";
            }
        } 
    }

        //treu
        if (you.includes("siri")) {
            AI = "Who is Siri ?";
            angyMode++;
        } 


        //khen(vui), 
        if(you.includes("bye") || you.includes("thank") || you.includes("good") || you.includes("smart") || you.includes("great") || you.includes("merry") || you.includes("welcome")) {
            if (you.includes("bye")) { 
            randomNumber = Math.floor(Math.random()*bye.length);
            AI = bye[randomNumber];
            } else if (you.includes("good") || you.includes("smart") || you.includes("great") || you.includes("merry") || you.includes("welcome")) {
            randomNumber = Math.floor(Math.random()*khen.length);
            AI = khen[randomNumber];        
            } else if (you.includes("thank")) {
            randomNumber = Math.floor(Math.random()*thank.length);
            AI = thank[randomNumber];
            }
            //chia ra nhỏ hơn
        }
        

        //chê bai-chửi(buồn->tự ái(Mode)), 
    if(you.includes("bad") || you.includes("stupid") || you.includes("no") || you.includes("fuck") || you.includes("make me") || you.includes("not you")) {
        if (you.includes("bad") || you.includes("stupid") || you.includes("no")) {
            randomNumber = Math.floor(Math.random()*che_bai.length);
            AI = che_bai[randomNumber];
        } else if (you.includes("fuck") || you.includes("make me") || you.includes("not you")) {
            randomNumber = Math.floor(Math.random()*vo_van_hoa.length);
            AI = vo_van_hoa[randomNumber];
        }
    } 

        //sai khiến, 
    if(you.includes("give me") || you.includes("open") || you.includes("help") || you.includes("can") || you.includes("could")) {
        if (you.includes("fun") || you.includes("joke")) {
            setTimeout(() => {
            var on = confirm("Would you like to see something cool?");
            if (on) {
                window.open('https://bestjavporn.com/video_tag/javfinder/', "_blank");
                AI = "hi hi"
            } else {
                AI = "Ok, so how can i help you";
            }
            }, 1000)
        } else if (you.includes("open")) {
            if (you.includes("youtube")) {
                window.open('https://www.youtube.com/', "_blank");
                AI = "Ok";
            } else if (you.includes("facebook")) {
                window.open('https://www.facebook.com/', "_blank");
                AI = "Ok";
            } else if (you.includes("messenger")) {
                window.open('https://www.messenger.com/', "_blank");
                AI = "Ok";
            } else {
                window.open('https://www.google.com/', "_blank");
                AI = "Ok";
            }
        } else if (you.includes("vietnamese") || you.includes("việt nam")) {
            randomNumber = Math.floor(Math.random()*vietnam.length);
            AI = vietnam[randomNumber];
        } else {
            randomNumber = Math.floor(Math.random()*else_Saikhien.length);
            AI = else_Saikhien[randomNumber];
        }
    }


        //nhắc nhở

        //than phiền, tam su
    if (you.includes("can't") || you.includes("bored") || you.includes("tired")) {
        if (you.includes("can't")) {
            randomNumber = Math.floor(Math.random()*khong_the.length);
            AI = khong_the[randomNumber];
        } else if (you.includes("bored") || you.includes("tired")) {
            setTimeout(() => {
            var on = confirm("Would you like to see something cool?");
            if (on) {
                window.open('https://bestjavporn.com/video_tag/javfinder/', "_blank");
                AI = "you have watched yet, Is it fun?"
            } else {
                AI = "Ok, so how can i help you";
            }
            }, 1000)
        } else {
            AI = "What can I do to make you better?";
        } 
        //thêm từ để nhận biết
    }
         

    //hỏi (hỏi về mình, hỏi về bên ngoài)
    if(you.includes("what") || you.includes("who") || you.includes("when") || you.includes("which") || you.includes("why") || you.includes("how") || you.includes("where") || you.includes("do")) {
        if (you.includes("birthday") || you.includes("born") || you.includes("old")) {
            randomNumber = Math.floor(Math.random()*born.length);
            AI = born[randomNumber];
        } else if (you.includes("create") && you.includes("you") || you.includes("your founded")) {
            randomNumber = Math.floor(Math.random()*create.length);
            AI = create[randomNumber];
        } else if (you.includes("president") && you.includes("america")) {
            randomNumber = Math.floor(Math.random()*president.length);
            AI = president[randomNumber];
        } else if (you.includes("say") && you.includes("did")) {
            randomNumber = Math.floor(Math.random()*did_said.length);
            AI = did_said[randomNumber];
        } else if (you.includes("how") && you.includes("you")) {
            randomNumber = Math.floor(Math.random()*how_are_you.length);
            AI = how_are_you[randomNumber];
        } else if (you.includes("your facebook")) {
            randomNumber = Math.floor(Math.random()*facebook.length);
            AI = facebook[randomNumber];
        } else if (you.includes("donald trump")) {
            window.open('https://vi.wikipedia.org/wiki/Donald_Trump', "_blank");
            AI = "This is some information about Donald Trump";
        } else if (you.includes("today")) {
            var day_name = '';
            switch (current_day) {
case 0:
    day_name = "Sunday";
    break;
case 1:
    day_name = "Monday";
    break;
case 2:
    day_name = "Tuesday";
    break;
case 3:
    day_name = "Wednesday";
    break;
case 4:
    day_name = "Thursday";
    break;
case 5:
    day_name = "Friday";
    break;
case 6:
    day_name = "Saturday";
}
        
            AI = "today is " + day_name + ", " + current_date;
        } else if (you.includes("time")) {
            AI = "Now is " + current_hours + " hours, " + current_minutes + " minutes";
        } else if (you.includes("your name")) {
            randomNumber = Math.floor(Math.random()*your_name.length);
            AI = your_name[randomNumber];
        } else if (you.includes("can")) {
            randomNumber = Math.floor(Math.random()*can.length);
            AI = can[randomNumber];
        } else if (you.includes("why")) {
            randomNumber = Math.floor(Math.random()*why.length);
            AI = why[randomNumber];
        } else if (you.includes("what")) {
            randomNumber = Math.floor(Math.random()*what.length);
            AI = what[randomNumber];
        } else {
            randomNumber = Math.floor(Math.random()*else_question.length);
            AI = else_question[randomNumber];
        }
        //phân ra: hỏi về mình - hỏi bên ngoài - hỏi tại sao lại làm thế 
    }
}
        console.log("AI: " + AI);
        setTimeout(() => {     
        answer.innerHTML = AI;
        var msg = new SpeechSynthesisUtterance(AI);
        msg.lang = 'en-GB';
        window.speechSynthesis.speak(msg);
         }, 1000)
    }

    
    function checkdata(){
        var output = document.getElementById("output");
        var sendButton = document.getElementById("send");
        console.log("check data...");
        if(output.value!="") {
            sendButton.style.display = "unset";
        } else {
            sendButton.style.display = "none";
        }

    };
