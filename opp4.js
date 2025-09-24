function visNavn() {
    alert('Dana');
}
function skrivNavn1000() {
    for (let i = 0; i < 1000; i++) {
        document.write('Dana ');
    }
}

function square(i) {
    return i * i;
}

function third(i) {
    return i * i * i;
}

function getRow(i) {
    let s = '<tr>';                    
    s += '<td>' + i + '</td>';         
    s += '<td>' + square(i) + '</td>'; 
    s += '<td>' + third(i) + '</td>';  
    s += '</tr>';
    return s;
}

function writeTable() {
    document.write('<table border="1">');
    document.write('<tr><th>Tall</th><th>Kvadrat</th><th>Kubikk</th></tr>');
    for (let i = 0; i < 100; i++) {
        document.write(getRow(i));
    }
    document.write('</table>');
}