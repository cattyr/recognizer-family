Webcam.set({
width:350,
height:350,
image_formate:'png',
png_quality: 90,
})

camera=document.getElementById("camera")

Webcam.attach("camera")
function capture(){
    Webcam.snap(function(data_uri){
     document.getElementById("result").innerHTML='<img id="res" src="'+data_uri+'"/>'
    })
    
}
hi=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/_PRh2fCId/",model_loaded)