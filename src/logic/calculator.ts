export const calculateInterestPerMonth = ({
    monthlyInvestment,
    yearlyPercentReturn,
    yearsInTheMarket,
}: {
    monthlyInvestment: number;
    yearlyPercentReturn: number;
    yearsInTheMarket: number;
}): number[] => {
    var monthlyReturnCoeficient = yearlyPercentReturn / 12 / 100;
    var monthsInTheMarket = yearsInTheMarket * 12;

    var investmentPerMonth: number[] = [monthlyInvestment];

    for (var i = 0; i < monthsInTheMarket; i++) {
        var previousWithInterest =
            investmentPerMonth[i] * (1 + monthlyReturnCoeficient);
        investmentPerMonth[i + 1] = previousWithInterest + monthlyInvestment;
    }

    return investmentPerMonth;
};
