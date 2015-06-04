function grab(props, config) {
  var utc = config && config.utc || false;
  return Array.isArray(props) ? function(date) {
    var d = new Date(date);
    return props.reduce(function(ret, prop) { 
      ret[prop] = get(d, prop, utc);
      return ret;
    }, {});
  } : props !== undefined ? function(date) {
    return get(new Date(date), props, utc);
  } : grab(Object.keys(hash), config);
}

function get(date, prop, utc) {
  var run = hash[prop];
  return date['get' + (utc && run[1]? 'UTC' : '') + run[0]]();
}

// second element flags if there is 
// a UTC version of that function
var hash = {
  time: ['Time', false],
  timezone: ['TimezoneOffset', false],
  year: ['FullYear', true],
  month: ['Month', true],
  date: ['Date', true],
  day: ['Day', true],
  hours: ['Hours', true],
  minutes: ['Minutes', true],
  seconds: ['Seconds', true],
  milliseconds: ['Milliseconds', true],
};

module.exports = grab;
