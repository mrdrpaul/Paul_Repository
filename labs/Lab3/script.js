let selectedBreed= document.getElementById("breed_select")
let breedValue = selectedBreed.value;
const BASEURL = "https://dog.ceo/api/breed"
let breedRoute = breedValue;
console.log(breedRoute);
let route = "images"
let endpoint = `${BASEURL}/${breedRoute}/${route}`
let img = document.querySelector("img")
let currentImage = 0

selectedBreed.addEventListener("change", () =>{
    breedValue = selectedBreed.value;
    breedRoute = breedValue;
    endpoint = `${BASEURL}/${breedRoute}/${route}`
    currentImage = 0;

    // gets first image
    if(breedRoute == "Select a dog breed"){
        img.setAttribute("src","")
        img.setAttribute("style","display:none")
    }else{
        fetch(endpoint)
            .then(data => {
                console.log(data)
                if(data.ok){
                    let result = data.json()
                    return result
                }else{
                    throw Error("Its Broken")
                }
            }) // get data, if ok then parse else error handle
            .then(parsedData => {
                let imageArray = parsedData.message;
                img.setAttribute("src",imageArray[currentImage])
                img.setAttribute("style","display:block")
            }) // deal with parsed data
            .catch(error => {
                console.log(error)
            })
    }
})

let previousButton = document.getElementById("previous")
let nextButton = document.getElementById("next")

nextButton.addEventListener("click", ()=>{
    currentImage++
    fetch(endpoint)
        .then(data => {
            console.log(data)
            if(data.ok){
                let result = data.json()
                return result
            }else{
                throw Error("Its Broken")
            }
        }) // get data, if ok then parse else error handle
        .then(parsedData => {
            let imageArray = parsedData.message;
            if(currentImage >= imageArray.length || currentImage == 10){
                img.setAttribute("src",imageArray[0])
                currentImage = 0
            } else{
                img.setAttribute("src",imageArray[currentImage])
            }
        }) // deal with parsed data
        .catch(error => {
            console.log(error)
        }) // error handling
})

previousButton.addEventListener("click", ()=>{
    currentImage--
    fetch(endpoint)
        .then(data => {
            console.log(data)
            if(data.ok){
                let result = data.json()
                return result
            }else{
                throw Error("Its Broken")
            }
        }) // get data, if ok then parse else error handle
        .then(parsedData => {
            let imageArray = parsedData.message;
            if(currentImage < 0){
                if(imageArray.length<10) {
                    img.setAttribute("src", imageArray[imageArray.length - 1])
                    currentImage = imageArray.length-1
                }else{
                    img.setAttribute("src",imageArray[9])
                    currentImage = 9
                }
            }else{
                img.setAttribute("src",imageArray[currentImage])
            }
        }) // deal with parsed data
        .catch(error => {
            console.log(error)
        }) // error handling
})
