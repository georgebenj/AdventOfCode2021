function readFile4(input){
    var gamma = 0 ; var epsilon = 0; var binaryString = ""; var binaryString2 = "";
    const r = new FileReader();
    r.readAsText(input.files[0]);
    r.onload = () =>{
        let input = r.result.split(/\n/);
        for(j = 0; j < input[0].length - 1; j++){
            for(i = 0; i < input.length; i++){
                input[i][j] === "1" ? gamma++ : epsilon++;
            };
            gamma > epsilon ? (binaryString += "1") : (binaryString += "0");
            gamma > epsilon ? (binaryString2 += "0") : (binaryString2 += "1");
            gamma = 0; epsilon = 0;
        }
        console.log(parseInt(binaryString, 2), parseInt(binaryString2, 2))
    }
}
