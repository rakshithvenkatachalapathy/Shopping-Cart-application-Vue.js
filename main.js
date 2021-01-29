const app = Vue.createApp({
    data : function(){
        return {
            cart:0,
            product : "Socks",
            brand: 'Tiger',
            description : "used during the winter",
            image: './assets/images/socks_green.jpg',
            selectedVariant : 0,
            inStock : false,
            inventory : 9,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity :50 },
                { id: 2235, color: 'blue' , image: './assets/images/socks_blue.jpg' ,quantity:0  }, 
              ],
            sizes: ['S' , 'M', 'L']
        }
    },
    methods : {
        addToCart(){
            this.cart = this.cart+1
        },
        updateImage(variantImage){
            this.image = variantImage
        },
        updateVariant(index){
            this.selectedVariant = index
            console.log(index)
        },
        removeFromCart(){
            if (this.cart>0) {
            this.cart = this.cart-1
            }
            else if (this.cart == 0){
                this.cart = 0
            }
        }
    },
    computed:{
        title(){
            return this.brand +' '+this.product
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        }
    }
})
