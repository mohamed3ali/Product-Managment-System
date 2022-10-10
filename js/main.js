var productName = document.getElementById('productNameInput');
var productPrice = document.getElementById('productProductPriceInput');
var productCategory = document.getElementById('productProductCategoryInput');
var productDescription = document.getElementById('productProductDescriptionInput');
var btnProduct = document.getElementById('btnProduct');
var curttentInd =0;
 var productContainer = [];
if(localStorage.getItem('products') != null){
    productContainer = JSON.parse(localStorage.getItem('products'))
    displayProduct();
}
 console.log( localStorage.getItem("name"));
function addProduct(){
    if(validateProductName() == true){
        var product = {
            name: productName.value,
            price: productPrice.value,
            category: productCategory.value,
            description: productDescription.value
        }
        productContainer.push(product);
        localStorage.setItem('products', JSON.stringify(productContainer))
        displayProduct();
        clearSite()
    }
    else
    {
        window.alert('Invalid ProductName')
    }


}
function displayProduct(){
var cartoon = ``;
    for(var i=0 ; i<productContainer.length ; i++){
cartoon += `<tr>
<td>${i+1}</td>
<td>${productContainer[i].name}</td>
<td>${productContainer[i].price}</td>
<td>${productContainer[i].category}</td>
<td>${productContainer[i].description}</td>
<td><button class="btn btn-sm btn-outline-danger" onclick="deleteProduct(${i})">Delete</button></td>

<td><button class="btn btn-sm btn-outline-warning" onclick="updateProduct(${i})">Update</button></td>
</tr>`
    }
    document.getElementById('tableBody').innerHTML = cartoon;
}

function deleteProduct(deleteIndex){
    productContainer.splice(deleteIndex,1);
    localStorage.setItem('products', JSON.stringify(productContainer))
    displayProduct();
}

function searchProduct(term){
    var cartoon = ``;
    for(var i=0 ; i<productContainer.length ; i++){
    if(productContainer[i].name.toLowerCase().includes(term.toLowerCase()) == true){
        cartoon += `<tr>
        <td>${i+1}</td>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].category}</td>
        <td>${productContainer[i].description}</td>
        <td><button class="btn btn-sm btn-outline-danger" onclick="deleteProduct(${i})">Delete</button></td>
        <td><button class="btn btn-sm btn-outline-warning">Update</button></td>
        </tr>`
    }
    }
    document.getElementById('tableBody').innerHTML = cartoon;
}


function updateProduct  (i){
    curttentInd = i ;
productName.value = productContainer[i].name;
productPrice.value = productContainer[i].price;
productCategory.value = productContainer[i].category;
productDescription.value = productContainer[i].description
btnProduct.innerHTML ='updateProduct'
}

function upData(){
    alert('update')
}
btnProduct.onclick = function(){
if(btnProduct.innerHTML == 'Add Product'){
    addProduct()
}else{
    var product = {
        name: productName.value,
        price: productPrice.value,
        category: productCategory.value,
        description: productDescription.value
    }
    productContainer[curttentInd]= product;
    btnProduct.innerHTML ='Add Product';
    localStorage.setItem('products', JSON.stringify(productContainer));
    displayProduct();
    clearSite()
}
}
function validateProductName (){
    var regex = /^[A-Z][a-z]{3,8}$/;
    if(regex.test(productName.value) == true)
    {
        return true;
    }else
    {
        return false;
    }
}
function clearSite(){
    productName.value = ''
    productPrice.value= ''
     productCategory.value= ''
     productDescription.value= ''
 
}