function selectId() {
let uniqueId = document.querySelector("input[name='unique-id']").value;    
    Boolean(uniqueId)
    if (uniqueId == false) {
        alert("Kérlek add meg az azonosítót!");
    } else {
        alert("Köszönjük a rendelést!");
    }
}