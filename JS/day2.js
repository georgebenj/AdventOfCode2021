function readFile2(input){
    const r = new FileReader();
    r.readAsText(input.files[0]);
    r.onload = () =>{
        let input = r.result.split(/\n/);
        input = input.map(str =>{
            str = str.split(' ');
            return{
                direction: str[0],
                magnitude: Number(str[1])
            }
        });
        const sub = {
            horizontal: 0,
            depth: 0
        };
        input.forEach(instruction => {
            switch(instruction.direction){
                case 'forward':
                    sub.horizontal += instruction.magnitude;
                    break;
                case 'down':
                    sub.depth += instruction.magnitude;
                    break;
                case 'up':
                    sub.depth -= instruction.magnitude;
                    if (sub.depth < 0) sub.depth = 0;
                    break;
            }
        })
        console.log(`Answer: ${sub.horizontal * sub.depth}`);
    }
}
 function readFile3(input){
    const r = new FileReader();
    r.readAsText(input.files[0]);
    r.onload = () =>{
        let input = r.result.split(/\n/);
        input = input.map(str =>{
            str = str.split(' ');
            return{
                direction: str[0],
                magnitude: Number(str[1])
            }
        });
        const sub = {
            horizontal: 0,
            depth: 0,
            aim: 0
        };
        input.forEach(instruction => {
            switch(instruction.direction){
                case 'forward':
                    sub.horizontal += instruction.magnitude;
                    sub.depth += instruction.magnitude * sub.aim;
                    if (sub.depth < 0) sub.depth = 0;
                    break;
                case 'down':
                    sub.aim += instruction.magnitude;
                    break;
                case 'up':
                    sub.aim -= instruction.magnitude;
                    break;
            }
        })
        console.log(`Answer: ${sub.horizontal * sub.depth}`);
    }
 }