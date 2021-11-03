function calculateDominicanPayroll(monthlySalary) {
  if (typeof monthlySalary !== 'number') {
    return null;
  }

  // const minimumMonthlySalary = 16262.50;
  const sfsRate = 0.0304;
  const sfsThreshold = 156000;
  const afpRate = 0.0287;
  const afpThreshold = 312000;
  const isrScales = {
    first: {
      threshold: 34685,
      rate: 0.15,
      fixedAmount: 0
    },
    second: {
      threshold: 52027.4167,
      rate: 0.20,
      fixedAmount: 2601.33
    },
    third: {
      threshold: 72260.25,
      rate: 0.25,
      fixedAmount: 6648
    }
  };

  const sfs = (monthlySalary > sfsThreshold ? sfsThreshold : monthlySalary) * sfsRate;
  const afp = (monthlySalary > afpThreshold ? afpThreshold : monthlySalary) * afpRate;
  let isr = 0;
  const netMonthlySalaryBeforeIsr = monthlySalary - (sfs + afp);

  if (netMonthlySalaryBeforeIsr > isrScales.first.threshold && netMonthlySalaryBeforeIsr <= isrScales.second.threshold) {
    const exceeding = netMonthlySalaryBeforeIsr - isrScales.first.threshold;
    isr = isrScales.first.fixedAmount + exceeding * isrScales.first.rate;
  } else if (netMonthlySalaryBeforeIsr > isrScales.second.threshold && netMonthlySalaryBeforeIsr <= isrScales.third.threshold) {
    const exceeding = netMonthlySalaryBeforeIsr - isrScales.second.threshold;
    isr = isrScales.second.fixedAmount + (exceeding * isrScales.second.rate);
  } else if (netMonthlySalaryBeforeIsr > isrScales.third.threshold) {
    const exceeding = netMonthlySalaryBeforeIsr - isrScales.third.threshold;
    isr = isrScales.third.fixedAmount + (exceeding * isrScales.third.rate);
  }

  const deductions = sfs + afp + isr;
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
