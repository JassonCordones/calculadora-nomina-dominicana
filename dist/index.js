function calculateDominicanPayroll(monthlySalary) {
    if (typeof monthlySalary !== 'number') {
        return null;
    }

    const sfs = monthlySalary * 0.0304;
    const afp = monthlySalary * 0.0287;
    const monthlyDeductionsBeforeIsr = sfs + afp;
    const netMonthlySalaryBeforeIsr = monthlySalary - monthlyDeductionsBeforeIsr;
    let isr = 0;

    const isrScales = {
        first: 34685,
        second: 52027.4167,
        third: 72260.25
    };

    if (netMonthlySalaryBeforeIsr >= isrScales.first && netMonthlySalaryBeforeIsr <= isrScales.second) {
        const exceeding = netMonthlySalaryBeforeIsr - isrScales.first;
        const fifteenPercent = exceeding * 0.15;
        isr = fifteenPercent;
    } else if (netMonthlySalaryBeforeIsr >= isrScales.second && netMonthlySalaryBeforeIsr <= isrScales.third) {
        const exceeding = netMonthlySalaryBeforeIsr - isrScales.second;
        const twentyPercent = exceeding * 0.20;
        const fixedAmount = 2601.33;
        isr = fixedAmount + twentyPercent;
    } else if (netMonthlySalaryBeforeIsr >= isrScales.third) {
        const exceeding = netMonthlySalaryBeforeIsr - isrScales.third;
        const twentyFivePercent = exceeding * 0.25;
        const fixedAmount = 6648;
        isr = fixedAmount + twentyFivePercent;
    }

    const deductions = monthlyDeductionsBeforeIsr + isr;
    const netMonthlySalary = monthlySalary - deductions;

    return {
        monthlySalary,
        netMonthlySalary,
        sfs,
        afp,
        isr,
        deductions
    };
}

export default calculateDominicanPayroll;
