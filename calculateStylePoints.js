const calculateStylePoints = (styleNotes) => {
    let minS = Math.min(...styleNotes);
    let maxS = Math.max(...styleNotes);
    let sumStyleNotes = 0;

    for ( i = 0; i < styleNotes.length; i++) {
        sumStyleNotes = sumStyleNotes + styleNotes[i];
    }
      return sumStyleNotes - (maxS + minS);
  };
  
  module.exports = calculateStylePoints;