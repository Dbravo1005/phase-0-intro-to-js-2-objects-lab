const employee = {
    name: "Paul",
    streetAddress: "23 Broadway"
};

// console.log(employee)

function updateEmployeeWithKeyAndValue(employee, key, value){
    
    // const employeeCopy = {...employee, [key] : value};
    const employeeCopy = {...employee};
    
    employeeCopy[key] = value;
    
    return employeeCopy
}

// console.log(updateEmployeeWithKeyAndValue(employee, 'age', 30))

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value

    return employee
}

function deleteFromEmployeeByKey(employee, key){ 
    const newObj = {...employee}
    delete newObj[key]
   return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee [key]
    return employee
}
