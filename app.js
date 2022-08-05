var list = [];
var inp = document.getElementById("inp");
var parent = document.getElementById("parent");

function renderList() {
    parent.innerHTML = "";
    for (var i = 0; i < list.length; i++) {
        parent.innerHTML += `<li>
       <p>${list[i].text}</p>
       <button onclick="editItem(this)">edit</button>
        <button onclick="deleteItem(this)">delete<button>
        <span>${list[i].time}</span>
        </li>`;
    }
}

function add() {
    var obj = {
        text: inp.value,
        time: new Date().getHours() + ":" + new Date().getMinutes(),
    };
    list.push(obj);
    renderList();
    inp.value = "";
}

function deleteAll() {
    parent.innerHTML = "";
}

function editItem(e) {
    var val = prompt("Update Chore/Routine... " + e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val;
    inp.value = ""
}

function deleteItem(e) {
    e.parentNode.remove()
}