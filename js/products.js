function fetchData() {
    return window.productData;
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function hideCard(current) {
    current.parentElement.classList.add("hidden")
}

function showCard(element) {
    let currentElement = document.getElementById(element)
    currentElement.classList.remove("hidden")
}

const categorySelect = document.getElementById("categories")
const table = document.getElementById("product-table")
const tableBody = document.getElementById("table-body")

function fillTable(data, currentCategory) {
    let productList = data.products;
    tableBody.innerHTML = ''

    for (const product of productList) {
        if (currentCategory !== "all" && product.category !== currentCategory) continue

        let row = tableBody.insertRow();

        row.insertCell().textContent = product.name;
        row.insertCell().textContent = capitalize(product.category);
        row.insertCell().textContent = "₩" + product.price;
        row.insertCell().textContent = product.stock;
        row.insertCell().textContent = product.available ? "Yes" : "No";

        tableBody.insertRow(row)
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

        let totalStockCard = document.getElementById("total-stock")
        let lowStockCard = document.getElementById("low-stock")
        let inventoryValueCard = document.getElementById("inventory-value")
        let totalIngredientsCard = document.getElementById("total-ingredients")

        let totalStock = 0
        let lowStock = 0
        let inventoryValue = 0
        let totalIngredients = 0

        for (const product of data.products) {
            totalStock += product.stock
            inventoryValue += product.price
            totalIngredients ++
            if (product.stock <= 5) lowStock ++
        }

        totalStockCard.innerHTML = `${totalStock} Kg`
        lowStockCard.innerHTML = `${lowStock} ingredients`
        inventoryValueCard.innerHTML = `₩${inventoryValue}`
        totalIngredientsCard.innerHTML = `${totalIngredients} ingredients`
    }
}

init();