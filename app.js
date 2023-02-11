
let usedTextTop = document.getElementById("top-text");
let usedTextBottom = document.getElementById("bottom-text");
let wrapper = document.querySelector('section');
let form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('clicked');
    let urlInput = document.getElementById('url').value;
    let topTextInput = document.getElementById("top-text").value;
    let bottomTextInput = document.getElementById('bottom-text').value;
    let mainDiv = document.createElement('div');
    let image = document.createElement('img');
    let textTop = document.createElement('div');
    let textBottom = document.createElement('div');
    let deleteBtn = document.createElement('button');
    let text = document.createTextNode('Delete');
        
            wrapper.appendChild(mainDiv);
            textTop.classList.add('top');
            textTop.innerText = topTextInput;
            mainDiv.appendChild(textTop);

            mainDiv.classList.add('mainDiv');
            image.src = urlInput;
            mainDiv.appendChild(image);
            
            textBottom.classList.add('bottom');
            textBottom.innerText = bottomTextInput;
            mainDiv.appendChild(textBottom);
            
            deleteBtn.appendChild(text);
            deleteBtn.classList.add('button');
            mainDiv.appendChild(deleteBtn);  
        
            form.reset();
        }
)

wrapper.addEventListener('click', function (event){
        if (event.target.tagName === "BUTTON"){
            console.log(event.target)
            event.target.parentElement.remove();
        }
    }
)