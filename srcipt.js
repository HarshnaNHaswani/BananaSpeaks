const txtInput = document.querySelector("#txt-input");
const btnTranslate = document.querySelector("#btn-translate");
const divOutput = document.querySelector("#div-output");

var apiSource = "https://api.funtranslations.com/translate/minion.json";
function constructUrl(input){
    return apiSource + "?" + "text=" + input;
}

function errorHandler(error){
    console.log("error occured. try again later");
    divOutput.innerText = "error occured. try again later";
}

function clickHandler(){
    var input = txtInput.value;
    var url = constructUrl(input);
     fetch(url)
    .then(response => response.json())
    .then(json => {
        divOutput.innerText = json.contents.translated
    })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)