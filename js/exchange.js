$(function () {
    $.get('http://data.fixer.io/api/latest', {
            'access_key': '58f59983555cc7902e5be5299676056d'
        },
        function (response) {
            $('.usd').text(("USD: ") + (response.rates.RUB / response.rates.USD).toFixed(2));
            $('.euro').text(("EUR: ") + (response.rates.RUB / response.rates.EUR).toFixed(2));
        });
});