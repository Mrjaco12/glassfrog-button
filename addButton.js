var parent = document.getElementById("js-agenda-input-component");
var input = document.getElementById("new_agenda_item");
var btn = document.createElement("BUTTON");
var text = document.createTextNode("Submit Tension To Triage");

btn.onclick = function () {
  var e = new KeyboardEvent("keypress", {
    bubbles: true, cancelable: true, keyCode: 13
  });

  input.dispatchEvent(e);
};

btn.style.width = "100%";
btn.style.padding = "0.25rem 0.5rem";
btn.style.marginTop = "1rem";
btn.style.color = "#fff";
btn.style.backgroundColor = "#3F9BB2";
btn.style.borderColor = "#3F9BB2";
btn.style.borderRadius = "0.1rem";
btn.style.fontSize = "0.875rem";

btn.appendChild(text);

if(parent) {
  parent.appendChild(btn)
}
