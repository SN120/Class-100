var Speech_Recognisation = window.webkitSpeechRecognition;
var Recognisation = new Speech_Recognisation();

var x = 0;
var speechData2;

var camera = document.getElementById("camera");

function Start() {
    document.getElementById("textbox").innerHTML = "";
    Recognisation.start();
}
Recognisation.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
    if (content == "take my selfie") {
        speak();
    }
}
function speak() {
    var synth = window.speechSynthesis;
    var speechData = "Taking Your Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speechData);
    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function () {
        synth2 = window.speechSynthesis;
        speechData2 = 5;
        utterThis2 = new SpeechSynthesisUtterance(speechData2);
        synth2.speak(utterThis2);

        x++;
        console.log(x);
    }, 1000);

    setTimeout(function () {
        synth2 = window.speechSynthesis;
        speechData2 = 4;
        utterThis2 = new SpeechSynthesisUtterance(speechData2);
        synth2.speak(utterThis2);

        x++;
        console.log(x);
    }, 1000);

    setTimeout(function () {
        synth2 = window.speechSynthesis;
        speechData2 = 3;
        utterThis2 = new SpeechSynthesisUtterance(speechData2);
        synth2.speak(utterThis2);

        x++;
        console.log(x);
    }, 1000);

    setTimeout(function () {
        synth2 = window.speechSynthesis;
        speechData2 = 2;
        utterThis2 = new SpeechSynthesisUtterance(speechData2);
        synth2.speak(utterThis2);

        x++;
        console.log(x);
    }, 1000);

    setTimeout(function () {
        synth2 = window.speechSynthesis;
        speechData2 = 1;
        utterThis2 = new SpeechSynthesisUtterance(speechData2);
        synth2.speak(utterThis2);

        x++;
        console.log(x);
    }, 1000);
    setTimeout(function () {
        take_snapshot();
        Save();
    }, 8000)
}
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
});


function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id = "selfie_img" src = "' + data_uri + '"/>';
    });
}
function Save() {
    link = document.getElementById("link");
    img = document.getElementById("selfie_img").src;
    link.href = img;
    link.click();
}