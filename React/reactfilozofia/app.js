const btn = document.createElement('button');

btn.onclick = function()
{
    alert ("Ezegy natív kód");
}

btn.innerHTML = "Natív gomb";

document.getElementById("react-button-containre").appendChild(btn);