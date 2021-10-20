function sumTable() {
    const table = document.querySelectorAll('table tr');
    let sum = 0;

    for(let i = 1; i < table.length -1; i++ ){
        const cell = table[i].lastElementChild;
        sum += Number(cell.textContent);
    }
    
    document.getElementById('sum').textContent = sum;

}