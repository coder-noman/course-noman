const addToDb = name =>{
    const stored_cart = getDb();
    if (name in stored_cart){
        stored_cart[name] += 1;
    }
    else{
        stored_cart[name] = 1;
    }
    updateDb(stored_cart)
}
const updateDb = cart =>{
    localStorage.setItem('course_Cart', JSON.stringify(cart));
}


const getDb = () => {
    const exist = localStorage.getItem('course_Cart')
    return exist ? JSON.parse(exist) : {}
}
export {addToDb}