function start_recognising(){
    navigator.mediaDevices.getUserMedia({ audio:true })
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/xerw8jlYQ/model.json",modelLoaded)
}
   function modelLoaded(){
    classifier.classify(gotResult)
   }
function gotResult(error,result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        r=Math.floor(Math.random()*255)+1;
        g=Math.floor(Math.random()*255)+1;
        b=Math.floor(Math.random()*255)+1;

        document.getElementById("sound").innerHTML="I can hear-"+result[0].label;
        document.getElementById("accuracy").innerHTML="Accuracy-"+(result[0].confidence*100).toFixed(2)+"%";
        document.getElementById("sound").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("accuracy").style.color="rgb("+r+","+g+","+b+")"

        animal=document.getElementById('animal')
        
        if(result[0].label=="dog"){
            animal.src="dog.jpg"
        }
        else if(result[0].label=="cat"){
            animal.src="cat.jpg"
        }
        else if(result[0].label=="sheep"){
            animal.src="sheep.jpg"
        }
        else{
            animal.src="unnamed.png"
        }
    }
}