Webcam.set({
    height: 592,
    width: 592,
    image_format: "png",
    png_quality: 99
})

Webcam.attach("#Webcam")
function captureImg() {
    Webcam.snap(function (data_uri) {
        document.getElementById("snapshot").innerHTML = "<img id='capturedPic'src=" + data_uri + "></img>"
    })
}

console.log(ml5.vertion)
classifier = ml5.imageClassifier("                             ", modelLoaded)

function modelLoaded() {
    console.log("don!:)")
}

function identifyImg() {
    pic = document.getElementById("capturedPic")
    classifier.classify(pic, gotResults)
}

function gotResults(error, results) {
    if (error) { console.log(error) }
    else { console.log(results) 
        document.getElementById("personOutput").ineerHTML=results[0].label}
}