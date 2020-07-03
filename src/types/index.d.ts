declare function calculateDominicanPayroll(monthlySalary: number): {
    monthlySalary: number,
    netMonthlySalary: number,
    sfs: number,
    afp: number,
    isr: number,
    deductions: number
};
export default calculateDominicanPayroll;