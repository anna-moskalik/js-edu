/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      return 0;
  };
  
  module.exports = function getTimeForEducation(
    focus,
    knowsProgramming,
    config
    ) {
      let hours = 0;
      knowsProgramming ? (hours = 800) : (hours = 800 + 500);
      return Math.ceil (hours/config[focus]);
  }