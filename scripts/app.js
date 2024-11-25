

//Id Section
let boxNumberInput = document.getElementById('boxNumber');
let boxColorInput = document.getElementById('changeColor');

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

    box1Color();
    box2Color();
    box3Color();
    box4Color();
    box5Color();
    box6Color();
    box7Color();
    box8Color();
    
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

function box1Color(){
    if(boxInput.toLowerCase() == '1' || boxInput.toLowerCase() == 'one' || boxInput.toLowerCase() == 'box 1'){
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
        }
    }
}

function box2Color(){
    if(boxInput.toLowerCase() == '2' || boxInput.toLowerCase() == 'two' || boxInput.toLowerCase() == 'box 2'){
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
        }
    }
}

function box3Color(){
    if(boxInput.toLowerCase() == '3' || boxInput.toLowerCase() == 'three' || boxInput.toLowerCase() == 'box 3'){
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
        }
    }
}

function box4Color(){
    if(boxInput.toLowerCase() == '4' || boxInput.toLowerCase() == 'four' || boxInput.toLowerCase() == 'box 4'){
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
        }
    }
}

function box5Color(){
    if(boxInput.toLowerCase() == '5' || boxInput.toLowerCase() == 'five' || boxInput.toLowerCase() == 'box 5'){
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
        }
    }
}

function box6Color(){
    if(boxInput.toLowerCase() == '6' || boxInput.toLowerCase() == 'six' || boxInput.toLowerCase() == 'box 6'){
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
        }
    }
}

function box7Color(){
    if(boxInput.toLowerCase() == '7' || boxInput.toLowerCase() == 'seven' || boxInput.toLowerCase() == 'box 7'){
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
        }
    }
}

function box8Color(){
    if(boxInput.toLowerCase() == '8' || boxInput.toLowerCase() == 'eight' || boxInput.toLowerCase() == 'box 8'){
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
        }
    }
}