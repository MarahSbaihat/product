//https://fakestoreapi.com/docs

var products = document.getElementById('products');
var result ;
function getData(){
    var httpRequest = new XMLHttpRequest ();
    httpRequest.open('GET',`https://fakestoreapi.com/products`);
    httpRequest.send();
    var data = [];
    httpRequest.addEventListener('readystatechange', function(){
    if(httpRequest.readyState==4 && httpRequest.status==200){
        data = JSON.parse(httpRequest.response);
        displayData(data);
    }
    });
}

getData();

function displayData(data){
    for(var i=0; i<data.length; i++){
        // console.log(data[i]);
        result+=`
            <div class="col-md-2">
                <img src="${data[i].image}" class="w-100 h-90" alt=""/>
                <h5>${data[i].title}</h5>
                <p>${data[i].category}</p>
            </div>
        `;
    }
    products.innerHTML = result;
}