/**
 * Created by liudmilak on 8/2/18.
 */
const list =[
    {title: "First", done: false},
    {title: "Second", done: false},
    {title: "Third", done: false},
]
renderList();

function addTodo(){
    const todoInputValue = document.getElementById("input").value;
    //todoInputValue = todoInputValue.value;
    list.push({title: todoInputValue, done:false});
    todoInputValue.value ="";
    console.log(list);
    renderList();
}

function renderList() {
    const ul = document.getElementById("list");
    let li;
    let textForList;

    let button;
    let buttonText;

    ul.innerHTML = "";
    // let li = document.createElement("li");
    // let textForList = document.createTextNode("Four")
    // li.appendChild(textForList);
    // list.appendChild(li);

    list.forEach((el, i) =>{
        li = document.createElement(("li"));
        li.innerHTML = el.title;

        button = document.createElement("button");
        button.setAttribute("order", i);
        button.innerHTML = "Done"+i;

        button.addEventListener("click", (e) =>{
            console.log("!!!", e.target);
        })

        if (el.done) li.className = "done";
        li.appendChild(button);
        ul.appendChild(li);
    })


    button.addEventListener("click", () =>{

    })
}