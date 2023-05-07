const employee = ({
    name: 'Jason',
    streetAddress: '1797 Atlantic Avenue',
});

function updateEmployeeWithKeyAndValue(obj, key, value){
    return {
        ...obj,[key]: value,
    }
};

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
employee[key] = value
return employee
}

function deleteFromEmployeeByKey(employee, key){
 const newObj = {...employee}
 delete newObj[key]
 return newObj
};

function destructivelyDeleteFromEmployeeByKey(employee, key){
   delete employee[key]
    return employee
};