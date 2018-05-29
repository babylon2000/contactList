const item = document.querySelector('#list p');
const btn = document.querySelector('.btn');
const form = document.forms.mainForm;
const table = document.querySelector('#list .table .tbl .bodyTable');
const socket = new WebSocket('ws://localhost:8081');

btn.onclick = function () {

    socket.send(JSON.stringify({
        firstname: form.name.value,
        number: form.number.value
    }));
};

socket.onopen = function () {
    item.innerHTML = 'ONLINE';
};

socket.onmessage = function (p1) {
    var s = JSON.parse(p1.data);
    for(var i = 0; i < s.length; i++){
        table.innerHTML += '<tr><td>' + s[i].firstname + '</td>' + '<td>' + s[i].phonenumber +  '</td></tr>'
    }
};

socket.onclose = function (p1) {

};