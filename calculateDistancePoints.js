const calculateDistancePoints = (distance, hillSize, kPoint) => {
    let normal = 60 + (2 * (distance - kPoint));
    let high =  60 + (1.8 * (distance - kPoint));
    let mammoth =  120 + (1.2 * (distance - kPoint));
    
    //conditional in case of wrong value
   if (normal < 0) {
      normal = 0;
    } else if (typeof normal != 'number') {
        normal = Number(normal);
        
        if (isNaN(normal) == true) {
          normal = 0;
        }
    };

    if (high < 0) {
      high = 0;
    } else if (typeof high != 'number') {
        high = Number(high);
        
        if (isNaN(high) == true) {
          high = 0;
        }
    };

    if (mammoth < 0) {
        mammoth = 0;
      } else if (typeof mammoth != 'number') {
          high = Number(mammoth);
          
          if (isNaN(mammoth) == mammoth) {
            mammoth = 0;
          }
      };
    
   // hillSize: normal is 98m, high is 120m and mammoth is 200m,
    (hillSize >= 98 && hillSize < 120) ? normal : ((hillSize >= 120 && hilSize < 200) ? high : mammoth);
  };

  module.exports = calculateDistancePoints;