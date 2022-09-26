const addItem =(id)=>{

    let shoppinCart = {};

    const getCart = localStorage.getItem('shopping-cart')

    if(getCart){
        shoppinCart = JSON.parse(getCart)
    }
    // else{
    //     shoppinCart={}
    // }

    let itemsOne = shoppinCart[id]
    if(itemsOne){
        shoppinCart[id]=itemsOne+1
    }
    else{
        shoppinCart[id]=1
    }
    // console.log(shoppinCart[id])
    localStorage.setItem('shopping-cart', JSON.stringify(shoppinCart))

    // const item = localStorage.getItem(id)
    // if(item){
    //     console.log('exists')
    //     const newitem = parseInt(item)+1
    //     localStorage.setItem(id, newitem)
    // }
    // else{
    //     localStorage.setItem(id, 1)
    // }
}

const removefromDB=(id)=>{
    // console.log(id)
    const storedCart = localStorage.getItem('shopping-cart')
    if(storedCart){
        const shpCart = JSON.parse(storedCart)
        if(id in shpCart){
            delete shpCart[id]
            localStorage.setItem('shopping-cart', JSON.stringify(shpCart))
        }
    }

}


const deleteShoppingCart=()=>{
    localStorage.removeItem('shopping-cart')
}
export {addItem, removefromDB, deleteShoppingCart}