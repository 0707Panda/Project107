function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    var classifer=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/l-5XD4mCj//model.json",modelReady);
}

function modelReady(){
    classifer.Classify(gotResults);
}

function gotResults(errors, result){
    if(errors){
        console.log(errors);
    }else{
        console.log(result);
    }
}