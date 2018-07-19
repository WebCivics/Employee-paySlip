import React from 'react';
import EmployeeTable from '../PaySlipTable/employeeTable';

const calculatetaxes = (props) => {
    let empData = props.location.employeeData;

    const newFormData = {};
    for (let formElementIdentifier in empData) {
        newFormData[formElementIdentifier] = empData[formElementIdentifier].value;
    }

    const annualSalary = newFormData.annualSalary;
    const fullName = `${newFormData.firstName} ${newFormData.lastName}`;
    const grossIncome = Math.round(newFormData.annualSalary / 12);

    const incomeTax = (annualSalary) => {
        let tax = 0;
        if (annualSalary > 0 && annualSalary < 18200) {
            tax = 0;
        } else if (annualSalary > 18200 && annualSalary < 37000) {
            tax = Math.round(((grossIncome - 18200) * 0.19) / 12);
        } else if (annualSalary > 37000 && annualSalary < 87000) {
            tax = Math.round(((annualSalary - 37000) * 0.325 + 3572) / 12);
        } else if (annualSalary > 87000 && annualSalary < 180000) {
            tax = Math.round(((annualSalary - 87000) * 0.37 + 19822) / 12);
        } else if (annualSalary > 180000) {
            tax = Math.round(((annualSalary - 180000) * 0.45 + 54232) / 12);
        }
        return tax;
    }
    const employeeIncomeTax = incomeTax(annualSalary);
    const netIncome = grossIncome - incomeTax(annualSalary);
    const superAmount = Math.round((grossIncome * newFormData.superRate) / 100);
    let newDate = new Date(newFormData.startDate);
    let months_name = ["Jan", "Feb", "Mar",
        "Apr", "May", "Jun", "Jul", "Aug", "Sep",
        "Oct", "Nov", "Dec"];
    let month = months_name[newDate.getMonth()];
    let date = `${newDate.getDate()} ${month}`;
    let lastDay = new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0);
    let lastDate = `${lastDay.getDate()} ${month}`;

    const tableData = [
        {
            name: fullName,
            payperiod: `${date}-${lastDate}`,
            grossIncome: grossIncome,
            incomeTax: employeeIncomeTax,
            netIncome: netIncome,
            superAmount: superAmount
        }
    ]

    return (
        <EmployeeTable data={tableData} />
    )

};

export default calculatetaxes;
