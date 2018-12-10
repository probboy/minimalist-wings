var wings = axios.get("https://www.redbullshopus.com/products.json");


wings.then((res) => {
    if (res.status === 200) {
        console.log("connection successful.");
        console.dir(res.data.products[0].images[0].src);
        var imgSrc = res.data.products[0].images[0].src;
        var product = document.createElement('img');
        product.src = imgSrc;
        var frame = document.querySelector('#productframe');
        console.log("frame:", frame);
        frame.appendChild(product);
    } else {
        console.log("connection problems.")
    }
});