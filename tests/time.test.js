var grab = require('../index.js');
var test = require('tape');

var d = new Date();

test('grab("time")', function (t) {
  t.plan(1);
  t.equal(grab('time')(d), d.getTime());
});

test('grab("timezone")', function (t) {
  t.plan(1);
  t.equal(grab('timezone')(d), d.getTimezoneOffset());
});

test('grab(["time", "timezone"])', function (t) {
  t.plan(2);
  var getTimeAndZone = grab(['time', 'timezone']);
  t.equal(getTimeAndZone(d).time, grab('time')(d));
  t.equal(getTimeAndZone(d).timezone, grab('timezone')(d));
});

test('grab()', function (t) {
  t.plan(3);
  var getTimeAndZone = grab();
  t.equal(getTimeAndZone(d).year, grab('year')(d));
  t.equal(getTimeAndZone(d).time, grab('time')(d));
  t.equal(getTimeAndZone(d).timezone, grab('timezone')(d));
});

test('grab(undefined, { utc: true })', function (t) {
  t.plan(3);
  var getTimeAndZone = grab(undefined, { utc: true });
  t.equal(getTimeAndZone(d).year, grab('year', { utc: true })(d));
  t.equal(getTimeAndZone(d).time, grab('time', { utc: true })(d));
  t.equal(getTimeAndZone(d).timezone, grab('timezone', { utc: true })(d));
});

test('grab("year")', function (t) {
  t.plan(1);
  t.equal(grab('year')(d), d.getFullYear());
});

test('grab("year", { utc: true })', function (t) {
  t.plan(1);
  t.equal(grab('year', { utc: true })(d), d.getUTCFullYear());
});

test('grab("month")', function (t) {
  t.plan(1);
  t.equal(grab('month')(d), d.getMonth());
});

test('grab("month", { utc: true })', function (t) {
  t.plan(1);
  t.equal(grab('month', { utc: true })(d), d.getUTCMonth());
});

test('grab("date")', function (t) {
  t.plan(1);
  t.equal(grab('date')(d), d.getDate());
});

test('grab("date", { utc: true })', function (t) {
  t.plan(1);
  t.equal(grab('date', { utc: true })(d), d.getUTCDate());
});

test('grab("day")', function (t) {
  t.plan(1);
  t.equal(grab('day')(d), d.getDay());
});

test('grab("day", { utc: true })', function (t) {
  t.plan(1);
  t.equal(grab('day', { utc: true })(d), d.getUTCDay());
});

test('grab("hours")', function (t) {
  t.plan(1);
  t.equal(grab('hours')(d), d.getHours());
});

test('grab("hours", { utc: true })', function (t) {
  t.plan(1);
  t.equal(grab('hours', { utc: true })(d), d.getUTCHours());
});

test('grab("minutes")', function (t) {
  t.plan(1);
  t.equal(grab('minutes')(d), d.getMinutes());
});

test('grab("minutes", { utc: true })', function (t) {
  t.plan(1);
  t.equal(grab('minutes', { utc: true })(d), d.getUTCMinutes());
});

test('grab("seconds")', function (t) {
  t.plan(1);
  t.equal(grab('seconds')(d), d.getSeconds());
});

test('grab("seconds", { utc: true })', function (t) {
  t.plan(1);
  t.equal(grab('seconds', { utc: true })(d), d.getUTCSeconds());
});

test('grab("milliseconds")', function (t) {
  t.plan(1);
  t.equal(grab('milliseconds')(d), d.getMilliseconds());
});

test('grab("milliseconds", { utc: true })', function (t) {
  t.plan(1);
  t.equal(grab('milliseconds', { utc: true })(d), d.getUTCMilliseconds());
});
