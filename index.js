const convTemp = () =>{

    const numberTemp = document.getElementById('numeric').value;
    // console.log(numberTemp);
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
    // console.log(valueTemp);
    
    const celTofer = (cel) => {
        let ferenhit =  (cel * 9/5)+32;
        return ferenhit.toFixed(2);
    }

    const ferTocel = (fer) => {
        let celcius = (fer - 32)*5/9;
        return celcius.toFixed(2);
    }

    let result;

    if(valueTemp=='cel'){
        result = celTofer(numberTemp);
        document.getElementById('resultCont').innerHTML = `=${result}°Ferenhit`;
    }else{
        result = ferTocel(numberTemp);
        document.getElementById('resultCont').innerHTML = `=${result}°Celcius`;
    }
}

