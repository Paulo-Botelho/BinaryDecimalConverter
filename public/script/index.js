function decToBinary(event){
    const dec = parseInt(document.querySelector('[name=dec]').value);

    if(isNaN(dec)){
        alert('Please enter a decimal number');
        document.querySelector('[name=binary]').value = '';
        return
    }

    document.querySelector('[name=binary]').value = dec.toString(2);
}



function binaryToDec(event){
    const binary = document.querySelector('[name=binary]').value;
    let cont = 0;
    const binaryString = binary.toString();
    console.log(binaryString);
    console.log(binaryString.length);
    while(cont < binaryString.length){
        if(binaryString[cont] != '0' && binaryString[cont] != '1'){
            alert('Binary invalid, just "0" or "1" please');
            document.querySelector('[name=dec]').value = '';
            return
        }
        cont++;
    }
    document.querySelector('[name=dec]').value = parseInt(binary, 2) ;
}