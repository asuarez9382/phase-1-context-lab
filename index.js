/* Your Code Here */

function createEmployeeRecord(employeeArr) {
    const employee = {
        firstName: employeeArr[0],
        familyName: employeeArr[1],
        title: employeeArr[2],
        payPerHour: employeeArr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employee
}

function createEmployeeRecords(inputArrs) {
    const newRecord = inputArrs.map(createEmployeeRecord)
    return newRecord
}


function createTimeInEvent(dateStamp) {
    const [datePart, timePart] = dateStamp.split(' ');
    const hours = parseInt(timePart.substring(0, 4), 10);
    const timeInEvent = {
        type: "TimeIn",
        hour: hours,
        date: datePart
    }
    this.timeInEvents.push(timeInEvent)
    return this
}

function createTimeOutEvent(dateStamp) {
    const [datePart, timePart] = dateStamp.split(' ');
    const hours = parseInt(timePart.substring(0, 4), 10);
    const timeOutEvent = {
        type: "TimeOut",
        hour: hours,
        date: datePart
    }
    this.timeOutEvents.push(timeOutEvent)
    return this
}

function hoursWorkedOnDate(dateStamp) {
    const timeInEvent = this.timeInEvents.find(event => event.date === dateStamp);
    const timeOutEvent = this.timeOutEvents.find(event => event.date === dateStamp);
    
    const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
    
    return hoursWorked
}

function wagesEarnedOnDate(dateStamp) {
    const hours = hoursWorkedOnDate.call(this, dateStamp)
    const wages = hours* this.payPerHour
    return wages
}

function findEmployeeByFirstName(srcArray, firstName) {
    const foundEmployee = srcArray.find(employee => employee.firstName === firstName )
    return foundEmployee
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}





function calculatePayroll(employeeRecords) {
    const totalPayroll = employeeRecords.reduce((acc, employeeRecord) => {
      const totalWages = allWagesFor.call(employeeRecord);
  
      return acc + totalWages;
    }, 0);
  
    return totalPayroll;
  }


