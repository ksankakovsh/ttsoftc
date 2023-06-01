//webp
export function isWebp(){
    function testWebP(callback) {

        var webP = new Image();
        webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        
        testWebP(function (support) {
        
            if (support == true) {
            document.querySelector('body').classList.add('webp');
            }else{
            document.querySelector('body').classList.add('no-webp');
            }
        });

}
// custom select
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
    selected.classList.toggle("selected-hover")
    optionsContainer.classList.toggle("active");
    });

    optionsList.forEach(o => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
    });
});
// input range
function rangeValue() {
	const rangeInput = document.getElementById('percent'); 
	let value = document.getElementById('value'); 
	value.innerHTML = rangeInput.value;
}
// input file
let inputs = document.querySelectorAll('.input_file');
        Array.prototype.forEach.call(inputs, function (input) {
        let label = input.nextElementSibling,
            labelVal = label.querySelector('.input_file-text').innerText;
        input.addEventListener('change', function (e) {
            let countFiles = '';
            if (this.files && this.files.length >= 1)
            countFiles = this.files.length;
    
            if (countFiles)
            label.querySelector('.input_file-text').innerText = 'Выбрано файлов: ' + countFiles;
            else
            label.querySelector('.input_file-text').innerText = labelVal;
        });
        });