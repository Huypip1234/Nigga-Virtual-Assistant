var dem=0;
var angyMode=0;
var yourName = prompt('Enter your name: ')

function runSpeechRecognition() {
    //date and time
        var d = new Date();
        var current_day = d.getDay();
        var current_date = d.getDate();
        var current_hours = d.getHours();
        var current_minutes = d.getMinutes();
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

        if(angyMode == 1) {
            AI = "I said who is siri";
            angyMode++;
         } else if(angyMode == 2) {
            AI = "fuck you";
            angyMode++;
         } else if(angyMode == 3) {
            AI = "Go ask Siri";
         } else {
        if (you.includes("create") && you.includes("you")) {
            AI = "That is Huy handsome";
        } else if (you.includes("fun") || you.includes("joke")) {
            setTimeout(() => {
            var on = confirm("Would you like to see something cool?");
            if (on) {
                window.open('https://bestjavporn.com/video_tag/javfinder/', "_blank");
                AI = "hi hi"
            } else {
                AI = "Ok, so how can i help you";
            }
            }, 1000)
        } else if (you.includes("president") && you.includes("america")) {
            AI = "Donald Trump";
        } else if (you.includes("say") && you.includes("did")) {
            AI = "I said you are very good";
        } else if (you.includes("birthday") || you.includes("born") || you.includes("old")) {
            AI = "I was born in 19/7/2020";
        } else if (you.includes("good") || you.includes("smart") || you.includes("great") || you.includes("merry") || you.includes("welcome")) {
            AI = "Oh, thank you";
        } else if (you.includes("bad") || you.includes("stupid") || you.includes("no")) {
            AI = "I'm so sorry";
        } else if (you.includes("fuck") || you.includes("make me") || you.includes("not you")) {
            AI = "hihi, i'm sorry";
        } else if (you.includes("how") && you.includes("you")) {
            AI = "I'm fine thank you";
        } else if (you.includes("your facebook")) {
            AI = "yes, i have";
        } else if (you.includes("siri")) {
            AI = "Who is Siri ?";
            angyMode++;
        } else if (you.includes("bye")) {
            AI = "Ok see you again";
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
        } else if (you.includes("thank")) {
            AI = "No problem";
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
            AI = "My name is Pussy, i fucking hate this name";
        } else if (you.includes("my name")) {
            AI = "ah, I knew you, are you my old friend?";
        } else if (you.includes("vietnamese") || you.includes("việt nam")) {
            AI = "Rít điếu thuốc lào nâng cao sức khỏe";
        } else if (you.includes("sorry")) {
            AI = "No way";
        } else if (you.includes("help")) {
            AI = "I can't, because i just a robot, why don't you search google";
        } else if (you.includes("please")) {
            AI = "Ok, this time only " + yourName;
        } else if (you.includes("yes")) {
            AI = "I know it";
        } else if (you.includes("why")) {
            AI = "that is secret";
        } else if (you=="what") {
            AI = "are you deaf ?";
        } else if (you.includes("can't")) {
            AI = "Have you tried everything?";
        } else if (you.includes("can")) {
            AI = "oh, amazing";
        } else if (you.includes("is me")) {
            AI = "oh, I'm very honored";
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
        } else {
            AI = "ha ha ha ha ha ha ha ha, it so fun";
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
        //date and time
            var d = new Date();
            var current_day = d.getDay();
            var current_date = d.getDate();
            var current_hours = d.getHours();
            var current_minutes = d.getMinutes();
        var answer = document.getElementById("answer");
        var output = document.getElementById("output");
        var AI;
        answer.innerHTML = ". . .";
        var text = document.getElementById("output").value;
        var you = text.toLowerCase();
        console.log("Me: " + you);
        console.log("...")
        if(angyMode == 1) {
            AI = "I said who is siri";
            angyMode++;
         } else if(angyMode == 2) {
            AI = "fuck you";
            angyMode++;
         } else if(angyMode == 3) {
            AI = "Go ask Siri";
         } else {
        if (you.includes("create") && you.includes("you")) {
            AI = "That is Huy handsome";
        } else if (you.includes("fun") || you.includes("joke")) {
            setTimeout(() => {
            var on = confirm("Would you like to see something cool?");
            if (on) {
                window.open('https://bestjavporn.com/video_tag/javfinder/', "_blank");
                AI = "hi hi"
            } else {
                AI = "Ok, so how can i help you";
            }
            }, 1000)
        } else if (you.includes("president") && you.includes("america")) {
            AI = "Donald Trump";
        } else if (you.includes("say") && you.includes("did")) {
            AI = "I said you are very good";
        } else if (you.includes("birthday") || you.includes("born") || you.includes("old")) {
            AI = "I was born in 19/7/2020";
        } else if (you.includes("good") || you.includes("smart") || you.includes("great") || you.includes("merry") || you.includes("welcome")) {
            AI = "Oh, thank you";
        } else if (you.includes("bad") || you.includes("stupid") || you.includes("no")) {
            AI = "I'm so sorry";
        } else if (you.includes("fuck") || you.includes("make me") || you.includes("not you")) {
            AI = "hihi, i'm sorry";
        } else if (you.includes("how") && you.includes("you")) {
            AI = "I'm fine thank you";
        } else if (you.includes("your facebook")) {
            AI = "yes, i have";
        } else if (you.includes("siri")) {
            AI = "Who is Siri ?";
            angyMode++;
        } else if (you.includes("bye")) {
            AI = "Ok see you again";
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
        } else if (you.includes("thank")) {
            AI = "No problem";
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
            AI = "My name is Pussy, i fucking hate this name";
        } else if (you.includes("my name")) {
            AI = "ah, I knew you, are you my old friend?";
        } else if (you.includes("vietnamese") || you.includes("việt nam")) {
            AI = "Rít điếu thuốc lào nâng cao sức khỏe";
        } else if (you.includes("sorry")) {
            AI = "No way";
        } else if (you.includes("help")) {
            AI = "I can't, because i just a robot, why don't you search google";
        } else if (you.includes("please")) {
            AI = "Ok, this time only " + yourName;
        } else if (you.includes("yes")) {
            AI = "I know it";
        } else if (you.includes("why")) {
            AI = "that is secret";
        } else if (you=="what") {
            AI = "are you deaf ?";
        } else if (you.includes("can't")) {
            AI = "Have you tried everything?";
        } else if (you.includes("can")) {
            AI = "oh, amazing";
        } else if (you.includes("is me")) {
            AI = "oh, I'm very honored";
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
        } else {
            AI = "ha ha ha ha ha ha ha ha, it so fun";
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

// thu gọn if else
