function fetchData() {
    return window.productData;
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

const categorySelect = document.getElementById("categories")
const table = document.getElementById("product-table")
const tableBody = document.getElementById("table-body")

function fillTable(data, currentCategory) {
    let productList = data.products;
    tableBody.innerHTML = ""

    for (const product of productList) {
        if (currentCategory !== "all" && product.category !== currentCategory) continue

        let row = tableBody.insertRow();

        row.insertCell().textContent = product.name;
        row.insertCell().textContent = capitalize(product.category);
        row.insertCell().textContent = product.price;
        row.insertCell().textContent = product.stock;
        row.insertCell().textContent = product.available ? "Yes" : "No";

        table.insertRow(row)
    }
}

function init() {
    let data = fetchData();

    categorySelect.addEventListener("change", (event) => {
        let category = event.target.value.toLowerCase()
        fillTable(data, category)
    })

    if (data) {
        let categoryList = data.categories;
        for (const category of categoryList) {
            categorySelect.appendChild(new Option(capitalize(category)))
        }
        fillTable(data, "all")
    }
}

init();