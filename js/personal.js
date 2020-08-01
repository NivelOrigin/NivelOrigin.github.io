let name = document.querySelector("input[name='name']").value;
let address = document.querySelector("input[name='address']").value;
let city = document.querySelector("input[name='city']").value;
let postcode = document.querySelector("input[name='postcode']").value;

function securityCheck() {
    Boolean(name, address, city, postcode)
    if (name == false) {
        document.getElementsByName("name").className = "form-control is-invalid";
    } else {}
        
}