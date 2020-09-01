class Product {
    title = 'DEFAULT';
    imageUrl;
    price;
    description;

    constructor(title, image, price, desc){
        this.title = title;
        this.imageUrl = image;
        this.price = price;
        this.description = desc;
    }
}
const productList = { 
    products: [
        new Product(
            'title1',
            'https://st3.depositphotos.com/7839720/37160/i/1600/depositphotos_371609044-stock-photo-couple-laying-in-the-trunk.jpg',
             11,
            'description1'
        ),
        // {
        //     title: 'title1',
        //     imageUrl: 'https://st3.depositphotos.com/7839720/37160/i/1600/depositphotos_371609044-stock-photo-couple-laying-in-the-trunk.jpg',
        //     price: 11,
        //     description: 'description1'
        // },
        new Product(
            'title2',
            'https://st4.depositphotos.com/37076758/39447/i/1600/depositphotos_394472276-stock-photo-sliced-smoked-meat-wooden-cutting.jpg',
            12,
            'description2'
        )
        // {
        //     title: 'title2',
        //     imageUrl: 'https://st4.depositphotos.com/37076758/39447/i/1600/depositphotos_394472276-stock-photo-sliced-smoked-meat-wooden-cutting.jpg',
        //     price: 12,
        //     description: 'description2'
        // }
    ],
    render(){
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for(const prod of this.products){
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
                <div>
                    <img src="${prod.imageUrl}" alt="${prod.title}" />
                    <div class="product-item__content">
                        <h2>${prod.title}</h2>
                        <h3>\$${prod.price}</h3>
                        <p>${prod.description}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            `;
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }

};
productList.render();

