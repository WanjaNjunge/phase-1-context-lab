/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  const payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};

function createEmployeeRecord(array) {
  return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
}

function createEmployeeRecords(arrayOfArrays) {
  return arrayOfArrays.map(createEmployeeRecord);
}

function createTimeInEvent(dateStamp) {
  const [date, hour] = dateStamp.split(" ");
  const timeInEvent = {
    type: "TimeIn",
    hour: parseInt(hour),
    date: date,
  };
  this.timeInEvents.push(timeInEvent);
  return this;
}

function createTimeOutEvent(dateStamp) {
  const [date, hour] = dateStamp.split(" ");
  const timeOutEvent = {
    type: "TimeOut",
    hour: parseInt(hour),
    date: date,
  };
  this.timeOutEvents.push(timeOutEvent);
  return this;
}
z;
function hoursWorkedOnDate(date) {
  const timeIn = this.timeInEvents.find((event) => event.date === date);
  const timeOut = this.timeOutEvents.find((event) => event.date === date);
  return (timeOut.hour - timeIn.hour) / 100;
}

function wagesEarnedOnDate(date) {
  const hoursWorked = hoursWorkedOnDate.call(this, date);
  const payRate = this.payPerHour;
  const wagesEarned = hoursWorked * payRate;
  return wagesEarned;
}

function findEmployeeByFirstName(collection, firstNameString) {
  return collection.find((employee) => employee.firstName === firstNameString);
}

function calculatePayroll(employeeRecords) {
  return employeeRecords.reduce((totalPay, employeeRecord) => {
    return totalPay + allWagesFor.call(employeeRecord);
  }, 0);
}