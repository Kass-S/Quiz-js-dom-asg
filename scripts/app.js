

//Id Section
let boxNumberInput = document.getElementById('boxNumber');
let boxColorInput = document.getElementById('changeColors');

let changeColorBtn = document.getElementById('changeColorBtn');
let resetColorsBtn = document.getElementById('resetColorsBtn');

let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let box4 = document.getElementById('box4');
let box5 = document.getElementById('box5');
let box6 = document.getElementById('box6');
let box7 = document.getElementById('box7');
let box8 = document.getElementById('box8');

//Variable Section
let boxInput = '';
let colorInput = '';


changeColorBtn.addEventListener('click', function(){
    boxInput = boxNumberInput.value;
    colorInput = boxColorInput.value;

    boxColor(); 
});

resetColorsBtn.addEventListener('click', function(){
    box1.className = 'boxSize ' + 'text-center';
    box2.className = 'boxSize ' + 'text-center';
    box3.className = 'boxSize ' + 'text-center';
    box4.className = 'boxSize ' + 'text-center';
    box5.className = 'boxSize ' + 'text-center';
    box6.className = 'boxSize ' + 'text-center';
    box7.className = 'boxSize ' + 'text-center';
    box8.className = 'boxSize ' + 'text-center';
});



function boxColor(){
    switch(boxInput.toLowerCase()){
        case 'one':
        case '1':
            switch(colorInput.toLowerCase()){
                case 'red':
                    box1.className = 'boxRed' + ' boxSize ' + 'text-center';
                    break;
                
                case 'blue': 
                    box1.className = 'boxBlue' + ' boxSize ' + 'text-center';
                    break;
        
                case 'purple': 
                    box1.className = 'boxPurple' + ' boxSize ' + 'text-center';
                    break;
        
                case 'brown': 
                    box1.className = 'boxBrown' + ' boxSize ' + 'text-center';
                    break;
        
                case 'yellow': 
                    box1.className = 'boxYellow' + ' boxSize ' + 'text-center';
                    break;

                default:
                    alert('That is not a valid color. Please enter a valid color.');
                    break;
            }
            break;

        case 'two':
        case '2':
            switch(colorInput.toLowerCase()){
                case 'red':
                    box2.className = 'boxRed' + ' boxSize ' + 'text-center';
                    break;
                
                case 'blue': 
                    box2.className = 'boxBlue' + ' boxSize ' + 'text-center';
                    break;
        
                case 'purple': 
                    box2.className = 'boxPurple' + ' boxSize ' + 'text-center';
                    break;
        
                case 'brown': 
                    box2.className = 'boxBrown' + ' boxSize ' + 'text-center';
                    break;
        
                case 'yellow': 
                    box2.className = 'boxYellow' + ' boxSize ' + 'text-center';
                    break;
    
                default:
                    alert('That is not a valid color. Please enter a valid color.');
            }
            break;

        case 'three':
        case '3':
            switch(colorInput.toLowerCase()){
                case 'red':
                    box3.className = 'boxRed' + ' boxSize ' + 'text-center';
                    break;
                
                case 'blue': 
                    box3.className = 'boxBlue' + ' boxSize ' + 'text-center';
                    break;
        
                case 'purple': 
                    box3.className = 'boxPurple' + ' boxSize ' + 'text-center';
                    break;
        
                case 'brown': 
                    box3.className = 'boxBrown' + ' boxSize ' + 'text-center';
                    break;
        
                case 'yellow': 
                    box3.className = 'boxYellow' + ' boxSize ' + 'text-center';
                    break;
    
                default:
                    alert('That is not a valid color. Please enter a valid color.');
            }
            break;

        case 'four':
        case '4':
            switch(colorInput.toLowerCase()){
                case 'red':
                    box4.className = 'boxRed' + ' boxSize ' + 'text-center';
                    break;
                
                case 'blue': 
                    box4.className = 'boxBlue' + ' boxSize ' + 'text-center';
                    break;
        
                case 'purple': 
                    box4.className = 'boxPurple' + ' boxSize ' + 'text-center';
                    break;
        
                case 'brown': 
                    box4.className = 'boxBrown' + ' boxSize ' + 'text-center';
                    break;
        
                case 'yellow': 
                    box4.className = 'boxYellow' + ' boxSize ' + 'text-center';
                    break;
    
                default:
                    alert('That is not a valid color. Please enter a valid color.');
            }
            break;

        case 'five':
        case '5':
            switch(colorInput.toLowerCase()){
                case 'red':
                    box5.className = 'boxRed' + ' boxSize ' + 'text-center';
                    break;
                
                case 'blue': 
                    box5.className = 'boxBlue' + ' boxSize ' + 'text-center';
                    break;
        
                case 'purple': 
                    box5.className = 'boxPurple' + ' boxSize ' + 'text-center';
                    break;
        
                case 'brown': 
                    box5.className = 'boxBrown' + ' boxSize ' + 'text-center';
                    break;
        
                case 'yellow': 
                    box5.className = 'boxYellow' + ' boxSize ' + 'text-center';
                    break;
    
                default:
                    alert('That is not a valid color. Please enter a valid color.');
            }
            break;

        case 'six':
        case '6':
            switch(colorInput.toLowerCase()){
                case 'red':
                    box6.className = 'boxRed' + ' boxSize ' + 'text-center';
                    break;
                
                case 'blue': 
                    box6.className = 'boxBlue' + ' boxSize ' + 'text-center';
                    break;
        
                case 'purple': 
                    box6.className = 'boxPurple' + ' boxSize ' + 'text-center';
                    break;
        
                case 'brown': 
                    box6.className = 'boxBrown' + ' boxSize ' + 'text-center';
                    break;
        
                case 'yellow': 
                    box6.className = 'boxYellow' + ' boxSize ' + 'text-center';
                    break;
    
                default:
                    alert('That is not a valid color. Please enter a valid color.');
            }
            break;

        case 'seven':
        case '7':
            switch(colorInput.toLowerCase()){
                case 'red':
                    box7.className = 'boxRed' + ' boxSize ' + 'text-center';
                    break;
                
                case 'blue': 
                    box7.className = 'boxBlue' + ' boxSize ' + 'text-center';
                    break;
        
                case 'purple': 
                    box7.className = 'boxPurple' + ' boxSize ' + 'text-center';
                    break;
        
                case 'brown': 
                    box7.className = 'boxBrown' + ' boxSize ' + 'text-center';
                    break;
        
                case 'yellow': 
                    box7.className = 'boxYellow' + ' boxSize ' + 'text-center';
                    break;
    
                default:
                    alert('That is not a valid color. Please enter a valid color.');
            }
            break;

        case 'eight':
        case '8':
            switch(colorInput.toLowerCase()){
                case 'red':
                    box8.className = 'boxRed' + ' boxSize ' + 'text-center';
                    break;
                
                case 'blue': 
                    box8.className = 'boxBlue' + ' boxSize ' + 'text-center';
                    break;
        
                case 'purple': 
                    box8.className = 'boxPurple' + ' boxSize ' + 'text-center';
                    break;
        
                case 'brown': 
                    box8.className = 'boxBrown' + ' boxSize ' + 'text-center';
                    break;
        
                case 'yellow': 
                    box8.className = 'boxYellow' + ' boxSize ' + 'text-center';
                    break;
    
                default:
                    alert('That is not a valid color. Please enter a valid color.');
            }
            break;
            
    }

}