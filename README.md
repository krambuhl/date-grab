# Date Grab

Date grab provides a thin functional wrapper for getting Date object properties.

## Useage

```js
var grab = require('date-grab');
var countdown = new Date('July 1, 2015');

var year = grab('year')
  // year(countdown) === 2015

var date = grab('date')
  // date('December 22, 2015') === 22 

var utcHours = grab('hours', { utc: true })
  // utcHours(countdown) === 7(PST)

var monthYear = grab(['month', 'year'])
  // monthYear(countdown) === { month: 6, year: 2015 }
```

## grab(property, options)

Date grab creates a function that gets date property, wraps standard `Date` object functions. __property__ should be a _String_ or _String Array_ and __config__ should be an _Object_.

More thorough documentation on Dates can be found at [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date), but here is a basic conversion chart.

grab | date
--- | ---
`grab('time')(date)` | `date.getTime()`
`grab('timezone')(date)` | `date.getTimezoneOffset()`
`grab('year')(date)` | `date.getYear()`
`grab('month')(date)` | `date.getMonth()`
`grab('date')(date)` | `date.getDate()`
`grab('day')(date)` | `date.getDay()`
`grab('hours')(date)` | `date.getHours()`
`grab('minutes')(date)` | `date.getMinutes()`
`grab('seconds')(date)` | `date.getSeconds()`
`grab('milliseconds')(date)` | `date.getMilliseconds()`

### options

####utc

Setting `utc` to `true` will use UTC instead of local date functions.

```js
var now = new Date()
var utcHours = grab('hours', { utc: true })

utcHours(now) === now.getHours() // true
```
