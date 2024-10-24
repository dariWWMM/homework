var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
  };

  services['Розбити скло'] = "200 грн";
   function price(){
    var total = 0
    for (var service in services) {
        total += parseInt(services[service]);
    }
    return total;
   }
   function minPrice(){
    var min = Infinity;
    for (var service in services) {
        var servicePrice = parseInt(services[service]);
        if (servicePrice < min) {
            min = servicePrice;
        }    
    }
    return min;
   }
   function maxPrice(){
    var max = -Infinity;
    for (var service in services){
        var servicePrice = parseInt(services[service]);
        if (servicePrice > max) {
            max = servicePrice;
        }
    }
    return max;
   }
   console.log(price())
   console.log(minPrice())
   console.log(maxPrice())
  