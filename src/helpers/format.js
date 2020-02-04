const Format = {
    cleanNumber(number) {
        return number.toString().replace(/[$., -]/g, '');
    },
    currencyFormat(valor) {
        if (valor) {
            return `$${Format.cleanNumber(valor).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
        }
        return '$ 0';
    },
};

export default Format;
