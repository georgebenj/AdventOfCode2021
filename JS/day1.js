function readFile1(input){
    let count = 0;
    let reader = new FileReader();
    reader.readAsText(input.files[0]);
    reader.onload = () =>{
        let lines = reader.result.split(/\n/);
        for(let i = 3; i < lines.length; i++){
            const last = lines[i-1] + lines[i-2] + lines[i-3];
            const current = lines[i] + lines[i-1] + lines[i-2];
            if(current > last){
                count++
            }
        }
        console.log(count)
    }
}



