function selectId() {
let uniqueId = document.querySelector("input[name='unique-id']").value;    
    Boolean(uniqueId)
    if (uniqueId == false) {
        alert("Kérlek add meg az azonosítót!");
    } else {
        alert("Köszönjük a rendelést!");
    }
}

/*let myNodeList = document.querySelectorAll("input");
for (let element in myNodeList) {
    if ("input" == null) {
        element.setAttribute("class" , "form-control is-valid");
    }
}*/

/*let myNodeList = document.querySelectorAll("input");
for (let i = 0; i < myNodeList.length; i++) {
    myNodeList[i].setAttribute("class" , "form-control is-valid");
} MUKODIK*/

//tomeges modositas fuggveny

/*
function massModify(selector, attribute, value) {
    let nodeList = document.querySelectorAll(selector);
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i][attribute] = value;
    }
}
*/