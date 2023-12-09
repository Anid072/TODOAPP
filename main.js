let form = document.querySelector('form')
let input = document.querySelector('input')
let ul = document.querySelector('ul')

const savatodo =(e) => {
    e.preventDefault();
    let li = document.createElement('li')
    li.className = "list-group-item";
    li.innerText = input.value;
    let button = document.createElement("button")
    button.innerText = "Remove";
    button.className = "btn";
    li.appendChild(button);
    ul.appendChild(li);
    form.reset();
};

form.addEventListener("submit", savatodo)



const deletetodo = (e) => {
   
    if(e.target.className.includes("btn"))
    {
        let li = e.target.parentElement;
        if(window.confirm("Are You Sure ?")){
            ul.removeChild(li);
        }
    }
};

ul.addEventListener('click', deletetodo);