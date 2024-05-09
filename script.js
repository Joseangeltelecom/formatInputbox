document.getElementById('amount').addEventListener('input', function (e) {
    e.target.value = parseFloat(e.target.value.replace(/,/g, '')).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    if(e.target.value.split('.')[0].length > 9 || e.target.value.split('.')[1].length > 2){
        alert('Maximum limit exceeded');
        e.target.value = '0.00';
    }
});

