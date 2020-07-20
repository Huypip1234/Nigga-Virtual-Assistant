function runSpeechRecognition() {
	var output = document.getElementById("output");
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    //speech to text (voice reconized) (input)    
    recognition.onstart = function() {
    	//action.innerHTML = "<small>listening, please speak...</small>"
        answer.innerHTML = "Im listening...";
        console.log("Im listening...")
    };

    recognition.onspeechend = function() { 
        var answer = document.getElementById("answer");
        answer.innerHTML = ". . .";
    };


    //tra ve ket qua nghe dc
    recognition.onresult = function(event) {
        let transcript = event.results[0][0].transcript;
        output.innerHTML = transcript;
//xu li du lieu (processer)
        var you = transcript;
        console.log("Me: " + you);
        console.log("...")
        var AI;
        //date and time
        var d = new Date();
        var current_day = d.getDay();
        var current_date = d.getDate();
        var current_hours = d.getHours();
        var current_minutes = d.getMinutes();

        if (you.includes("your Facebook")) {
            AI = "yes, i have";
        } else if (you.includes("bye")) {
            AI = "Ok see you again";
        } else if (you.includes("hey")) {
            AI = "Hi, how can i help you?";
            var i=0;
            console.log(i+=1);
        } else if (you.includes("today")) {
            var day_name = '';
            switch (current_day) {
case 0:
    day_name = "Chủ nhật";
    break;
case 1:
    day_name = "Thứ hai";
    break;
case 2:
    day_name = "Thứ ba";
    break;
case 3:
    day_name = "Thứ tư";
    break;
case 4:
    day_name = "Thứ năm";
    break;
case 5:
    day_name = "Thứ sau";
    break;
case 6:
    day_name = "Thứ bảy";
}
        
            AI = "today is " + day_name + ", " + current_date;
        } else if (you.includes("Hello")) {
            AI = "Hello Huy";
        } else if (you.includes("time")) {
            AI = "Now is " + current_hours + " hours, " + current_minutes + " minutes";
        } else if (you.includes("your name")) {
            AI = "My name is Pussy, i fucking hate this name";
        } else {
            AI = "I'm fine thank you, and you?";
        }
        console.log("AI: " + AI);
        var answer = document.getElementById("answer");
        answer.innerHTML = AI;
        var msg = new SpeechSynthesisUtterance(AI);
        msg.lang = 'en-GB';
        window.speechSynthesis.speak(msg);  
// text to speech (output)
        if(you=="bye") {recognition.onend = null;}
        //gán onend bằng null để kết thúc sẽ ko có gì để gọi nữa
    };
  	recognition.onend = recognition.start;
    recognition.start();
}

// rut gon lai code sau
