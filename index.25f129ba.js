const t=document.getElementById("app"),e=async()=>{let e=await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10"),s=await e.json(),a=s?.map((t,e)=>`
        <article class="Card">
            <img src="https://picsum.photos/id/${247+e}/600/400">
            <h2>
            ${t.title} <small>Precio $ ${t.price}</small>
            </h2>
        </article>
        `).join(""),i=document.createElement("section");i.classList.add("Items"),i.innerHTML=a,t.appendChild(i)};e();//# sourceMappingURL=index.25f129ba.js.map

//# sourceMappingURL=index.25f129ba.js.map
