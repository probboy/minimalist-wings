var wings = axios.get("https://www.redbullshopus.com/products.json");

wings.then((res) => {
    var productData = res.data.products;
    console.log(productData);
    console.log(productData[1].images[0].src);
    var productFrames = document.querySelectorAll('.col');
    for (var i = 1; i < productFrames.length - 1; i++) {
        productFrames[i].innerHTML = ``;
        productFrames[i].innerHTML += `<div class="card">`;
        productFrames[i].innerHTML += `<img class="card-img-top" src="${productData[i-1].images[0].src}" alt="Card image cap">`;
        productFrames[i].innerHTML += `<div class="card-body">`;
        productFrames[i].innerHTML += `<h5 class="card-title">${productData[i-1].title}</h5>`;
        productFrames[i].innerHTML += `<a href="#" class="btn btn-primary">$${productData[i-1].variants[0].price}</a>`;
        productFrames[i].innerHTML += `<p class="card-text">${productData[i-1].body_html}</p>`;
        productFrames[i].innerHTML += `</div>`;
        productFrames[i].innerHTML += `</div>`;
    }
});
    

