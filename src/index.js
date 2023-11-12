const $app = document.getElementById("app");
const API = "https://api.escuelajs.co/api/v1/products?offset=0&limit=10";

const main = async () => {
    const response = await fetch(API);
    const products = await response.json();

    const output = products?.map((product, idx) => {
        return `
        <article class="Card">
            <img src="https://picsum.photos/id/${247 + idx}/600/400">
            <h2>
            ${product.title} <small>Precio $ ${product.price}</small>
            </h2>
        </article>
        `;
    }).join('');

    let newItem = document.createElement("section");
    newItem.classList.add("Items");
    newItem.innerHTML = output;
    $app.appendChild(newItem);
}

main();