// ***************************************************
// Shopping Cart functions

// price of livraison
var priceLiv = 2; // 2$

var shoppingCart = (function () {
    // Private methods and properties
    var cart = [];

    function Item(img, name, price, count) {
        this.name = name
        this.price = price
        this.count = count
        this.img = img
    }

    function saveCart() {
        localStorage.setItem("shoppingCart", JSON.stringify(cart));
    }

    function loadCart() {
        cart = JSON.parse(localStorage.getItem("shoppingCart"));
        if (cart === null) {
            cart = []
        }
    }

    loadCart();



    // Public methods and properties
    var obj = {};

    obj.addItemToCart = function (img, name, price, count) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count += count;
                saveCart();
                return;
            }
        }

        console.log("addItemToCart:", name, price, count);

        var item = new Item(img, name, price, count);
        cart.push(item);
        saveCart();
    };

    obj.setCountForItem = function (name, count) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count = count;
                break;
            }
        }
        saveCart();
    };


    obj.removeItemFromCart = function (name) { // Removes one item
        for (var i in cart) {
            if (cart[i].name === name) { // "3" === 3 false
                cart[i].count--; // cart[i].count --
                if (cart[i].count === 0) {
                    cart.splice(i, 1);
                }
                break;
            }
        }
        saveCart();
    };


    obj.removeItemFromCartAll = function (name) { // removes all item name
        for (var i in cart) {
            if (cart[i].name === name) {
                cart.splice(i, 1);
                break;
            }
        }
        saveCart();
    };


    obj.clearCart = function () {
        cart = [];
        saveCart();
    }


    obj.countCart = function () { // -> return total count
        var totalCount = 0;
        for (var i in cart) {
            totalCount += cart[i].count;
        }

        return totalCount;
    };

    obj.totalCart = function () { // -> return total cost
        var totalCost = 0;
        for (var i in cart) {
            totalCost += cart[i].price * cart[i].count;
        }
        return totalCost.toFixed(2);
    };

    obj.totalCartWhithLivraisonPrice = function () { // -> return total cost + price livraison
        var totalCost = 0;
        for (var i in cart) {
            totalCost += cart[i].price * cart[i].count;
        }
        return (totalCost + + priceLiv).toFixed(2);
    };

    obj.listCart = function () { // -> array of Items
        var cartCopy = [];
        console.log("Listing cart");
        console.log(cart);
        for (var i in cart) {
            console.log(i);
            var item = cart[i];
            var itemCopy = {};
            for (var p in item) {
                itemCopy[p] = item[p];
            }
            itemCopy.total = (item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy);
        }
        return cartCopy;
    };

    obj.AfficherArray = function (data) {
        var elem = document.getElementById("item");
        var str = '';
        for (var i = 0; i < data.length; i++) {
            var item = `
            <div class="item">
            <div class="div_image_item" ">
            <img src="${data[i].img}" class="image_item">
            </div>
            <div class="div_Num_item"><img src="./images/up-arrow.png" style="height: 10px;width: 10px;"> <br> ${data[i].quantity}
            <br><img src="./images/down-arrow.png" style="height: 10px;width: 10px;"></div>
            <div class="div_Nom_item">${data[i].Nom}</div>
            <div class="div_Price_item">€${data[i].price}</div>
            <div class="div_Remove_item"><img src="./images/remove.png" class="icon_remove_item"></div> </div>
            `
            elem.innerHTML += item;
        }
        console.log('data :', data);
    }

    // ----------------------------
    return obj;
})();




