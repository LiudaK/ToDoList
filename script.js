/**
 * Created by liudmilak on 8/2/18.
 */
var list =[
    {title: "First" , done: false},
    {title: "Second", done: false},
    {title: "Third" , done: true}
]

var currentItem = -1;
var currentFilter = "all";

if (localStorage.todoList)
    list = JSON.parse(localStorage.todoList);

if (localStorage.filter)
    currentFilter = localStorage.getItem('filter');


renderList();

function addTodo(){
    const todoInputValue = document.getElementById("input").value;
    if (todoInputValue != "")
    {
        list.push({title: todoInputValue, done: false});
        todoInputValue.value ="";
        //console.log(list);
        localStorage.setItem('todoList', JSON.stringify(list));
        renderList();
    }
}

function delTodo(e)
{
    //console.log("delTodo");
    currentItem = e.target.getAttribute('idx');
    if (currentItem > -1)
    {
        list.splice(currentItem, 1);
     //   list.forEach((el,i) => {
     //       list[i].value = i;
     //   });
        localStorage.setItem('todoList', JSON.stringify(list));
        renderList();
    }
}

function editTodo(e)
{
    //console.log("editTodo");
    currentItem = e.target.getAttribute('idx');
    const todoInputValue = document.getElementById("input").value;
    if (currentItem > -1)
        if (todoInputValue != "")
        {
            list[currentItem].title = todoInputValue;
            renderList();
        }
}

function cleanTodo()
{
    list = [];
    renderList();
}

function showDoneTodo()
{
    currentFilter = "done";
    localStorage.setItem('filter', currentFilter);
    renderList();
}

function showNotDoneTodo()
{
    currentFilter = "notdone";
    localStorage.setItem('filter', currentFilter);
    renderList();
}

function showAllTodo()
{
    currentFilter = "all";
    localStorage.setItem('filter', currentFilter);
    renderList();
}

function changeStatus(e)
{
    //console.log("changeStatus, value = ", e.target.getAttribute('idx'));
    currentItem = e.target.getAttribute('idx');
    if (currentItem > -1)
    {
        list[currentItem].done = !list[currentItem].done;
        renderList();
    }
}


function renderList() {

    const ul = document.getElementById("list");

    ul.innerHTML = "";
    // let li = document.createElement("li");
    // let textForList = document.createTextNode("Four")
    // li.appendChild(textForList);
    // list.appendChild(li);

    list.forEach((el,i) =>{
        /*
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
*/
        /*
         const table = document.getElementById('list');
         table.innerHTML = '';
         alteredList.forEach((item) => {
         */
        var itemVisible = false;

        if ((currentFilter == "done") && (el.done))
            itemVisible = true;
         else
            if ((currentFilter == "notdone") && (!el.done))
                itemVisible = true;
            else
                if (currentFilter == "all")
                    itemVisible = true;

        if (itemVisible)
        {

            let tr = document.createElement('tr');
            let checkbox = document.createElement('i');
            checkbox.setAttribute('idx', i.toString());
            checkbox.className = 'far fa-square';
            checkbox.onclick = changeStatus;
            if (el.done) 
            {
                tr.className = 'done';
                checkbox.className = 'fa fa-check-square';
            }
            
            let td1 = document.createElement('td');

            td1.appendChild(checkbox);
            tr.appendChild(td1);
            let td2 = document.createElement('td');
            td2.innerText = el.title;
            tr.appendChild(td2);
            
            let edit = document.createElement('i');
            edit.className = 'fa fa-book';
            edit.setAttribute('idx', i.toString());
            edit.onclick = editTodo;
            let td3 = document.createElement('td');
            td3.appendChild(edit);
            tr.appendChild(td3);
            
            let del = document.createElement('i');
            del.className = 'fa fa-trash';
            del.setAttribute('idx', i.toString());
            del.onclick = delTodo;
            let td4 = document.createElement('td');
            td4.appendChild(del);
            tr.appendChild(td4);
            ul.appendChild(tr);
        }
    })
}