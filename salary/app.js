function solution () {
    let hours = document.getElementById('hours').value;
    let days = document.getElementById('days').value;
    let zp = document.getElementById('zp').value;
    document.getElementById('sum').innerText = ( +hours * +days * +zp * +4 )
}