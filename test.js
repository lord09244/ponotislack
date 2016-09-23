var config = require('./config.json');
var acc = require('./acc.json');
console.log(acc.password);
var lnw02 = [{"location": {
    type: "coords",
    coords: {
        latitude: config.location.coords.latitude,
        longitude: config.location.coords.longitude,
        altitude: config.location.coords.altitude
    }
  }
}];

var longg = lnw02[0].location.coords.longitude + 0.00022725

for(var ff = 1;ff<=15;ff++){

    for(var ss = 1;ss<=15;ss++){
      if(ff == 1){
        lnw02.push({"location": {
            type: "coords",
            coords: {
                latitude: lnw02[ss-1].location.coords.latitude + 0.0004545,
                longitude: longg,
                altitude: config.location.coords.altitude
            }
          }
        });
      }else{
        lnw02.push({"location": {
            type: "coords",
            coords: {
                latitude: lnw02[ss-1].location.coords.latitude + 0.0004545,
                longitude: longg,
                altitude: config.location.coords.altitude
            }
          }
        });
      }

    }

      longg += 0.0004545

}


for(var ff = 0;ff<lnw02.length;ff++){

      console.log("['"+ff+"',"+lnw02[ff].location.coords.latitude+","+lnw02[ff].location.coords.longitude+","+ff+"],")

    //  console.log(lnw02[ff].coords.longitude)
}
