function calculateDominicanPayroll(monthlySalary) {
    if (typeof monthlySalary !== 'number') {
        return null;
    }

    const isrScales = {
        first:  { 
            threshold: 34685, 
            rate: 0.15, 
            fixedAmount: 0
        },
        second: { 
            threshold: 52027.4167, 
            rate: 0.20, 
            fixedAmount: 2601.33 
        },
        third:  { 
            threshold: 72260.25, 
            rate: 0.25,
            fixedAmount: 6648
        }
    };

    const sfsRate = 0.0304;
    const afpRate = 0.0287;
    const sfs = sfsRate * monthlySalary;
    const afp = afpRate * monthlySalary;
    const netMonthlySalaryBeforeIsr = monthlySalary - (sfs + afp);
    let isr = 0;

    if (netMonthlySalaryBeforeIsr >= isrScales.third.threshold) {
        const exceeding = netMonthlySalaryBeforeIsr - isrScales.third.threshold;
        isr = isrScales.third.fixedAmount + (exceeding * isrScales.third.rate);
    } else if (netMonthlySalaryBeforeIsr < isrScales.third.threshold && netMonthlySalaryBeforeIsr >= isrScales.second.threshold) {
        const exceeding = netMonthlySalaryBeforeIsr - isrScales.second.threshold;
        isr = isrScales.second.fixedAmount + (exceeding * isrScales.second.rate);
    } else if (netMonthlySalaryBeforeIsr < isrScales.second.threshold && netMonthlySalaryBeforeIsr >= isrScales.first.threshold) {
        const exceeding = netMonthlySalaryBeforeIsr - isrScales.first.threshold;
        isr = isrScales.first.fixedAmount + exceeding * isrScales.first.rate;
    }

    const deductions = sfs + afp + isr
    const netMonthlySalary = netMonthlySalaryBeforeIsr - isr;

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
