const formatNumber = (number: number) => (
    new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number)
);

export default formatNumber;
