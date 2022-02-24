function getData(data){
    return `https://jsonplaceholder.typicode.com/users=${data}`;
}
function displayProducts(data) {
    data.data.products.forEach(data => displayProduct(product));

function displayTableData(data) {
    const table = document.createElement("table");
    table.setAttribute("border", 1);

    let index = 0;
    data.data.data.forEach(product => {
    table.insertRow(index).insertCell(0).innerText = product.name;
    index++;
        });

    const tableData = document.getElementById("table-data");
    tableData.appendChild(table);

function buttonClick() {
    getProducts(document.getElementById("id").value);

function getData(url,cb){   
    let xhr= new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.status == 200){
            return cb(JSON.parse(xhr.responseText));

        }
    };
    xhr.open("GET",url);
    xhr.send();
}

const data = getData ("https://jsonplaceholder.typicode.com/users",function (data){
    console.lohg(data);
});