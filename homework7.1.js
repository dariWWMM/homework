const house ={
    window: 'big', 
    door: 'brown',
    rooms: 4,
    getInfo: function(){
        for (let key in house){
            if (typeof house[key]!== 'function'){
                console.log(key + ": " + this [key]);
            }
    }
}
}
house.newProperty = 'big!'; 
house.getInfo(); 