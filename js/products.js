var products = [
    {
        name: 'Normal, Boring Potato',
        img: 'img/potatoes.jpg',
        price: 2,
        desc: 'Porttitor rhoncus et quis natoque amet elementum pulvinar? Porta eros odio dictumst adipiscing augue sit! Placerat, elementum! Aliquam ac odio tortor cursus auctor eu.',
    },
    {
        name: 'Red Potato',
        img: 'img/red-potato.jpeg',
        price: .49,
        desc: 'Ultricies elementum! Arcu proin arcu lectus porttitor dis nec placerat? Tempor lundium porttitor dis enim est duis ac! Lectus platea montes! Urna aliquam lorem, porta urna ac.' 
    },
    {
        name: 'Purple Potato',
        img: 'img/purple-potato.jpeg',
        price: .89,
        desc: 'Massa augue in, diam in, integer, nunc! Dapibus porta proin nascetur adipiscing rhoncus tincidunt pulvinar sed ridiculus massa auctor rhoncus pellentesque!'
    },
    {
        name: 'Pink Potato',
        img: 'img/pink.jpg',
        price: 4,
        desc: 'Porttitor rhoncus et quis natoque amet elementum pulvinar? Porta eros odio dictumst adipiscing augue sit! Placerat, elementum! Aliquam ac odio tortor cursus auctor eu.'
    },
    {
        name: 'King Edward Potato',
        img: 'img/edward.jpg',
        price: 6,
        desc: 'Porttitor rhoncus et quis natoque amet elementum pulvinar? Porta eros odio dictumst adipiscing augue sit! Placerat, elementum! Aliquam ac odio tortor cursus auctor eu.'
    },
    {
        name: 'Buttato',
        img: 'img/buttato.jpeg',
        price: 4,
        desc: 'Porttitor rhoncus et quis natoque amet elementum pulvinar? Porta eros odio dictumst adipiscing augue sit! Placerat, elementum! Aliquam ac odio tortor cursus auctor eu.'
    },
    {
        name: 'Mr. Potato Head',
        img: 'img/mr-potato-head.jpg',
        price: 10,
        desc: 'Lacus turpis sed? Lectus cursus! Placerat, vel et! Cum. Non integer nunc velit, turpis rhoncus ridiculus, tincidunt in! Sociis proin ac lectus cum tristique vut odio?'
    },
    {
        name: 'Tomato Potato',
        img: 'img/tomato.jpg',
        price: .79,
        desc: 'This is a tomato.'
    },
    {
        name: 'Mystery Product',
        img: 'img/mystery.jpg',
        price: 1,
        desc: 'Receive a random product, value ranging from 49&cent; to $10.00, for 1 simple price!'
    }
];

function card(product) {
    var content = "<article class='card'>";
    content += "<h2>"+product.name+"</h2>";
    content += "<img src='"+product.img+"'>";
    content += "<p class='desc'><span class='price'>$"+product.price.toFixed(2)+"</span>";
    content += product.desc+"</p></article>";
    return content;
}

for (var i=0; i<products.length; i++) {
    document.getElementById('products').innerHTML += card(products[i]);
}