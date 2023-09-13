function inputNo(n){
    
    if(n==='00')
        n='00';

     document.getElementById('input').value+=n;
    
}

function calculate() {
    document.getElementById('otpt').textContent='Result:'
    
    
    try {
        let calc = document.getElementById('input').value;
        let Result = document.getElementById('otpt').textContent = eval(calc);
        localStorage.setItem('result', JSON.stringify(Result));
        let fetchedRslt = localStorage.getItem('result');
    } catch (err) {
        document.getElementById('otpt').textContent='Syntax Error';
    }
}


document.getElementById('equals').addEventListener('click', function() {
    calculate();
});




function clearScreen(){
    document.getElementById('input').value=''
    document.getElementById('otpt').textContent='Result:'
}

function backspace(){
    let valueI=document.getElementById('input').value;
    valueI=String(valueI.slice(0,-1));
    document.getElementById('input').value=valueI
    

}

function insertText(){
    let cursor = document.getElementById('input');
    let startPos = cursor.selectionStart;
    let endPos = cursor.selectionEnd;
    let textBeforeCursor = cursor.value.substring(0,startPos);
    let textAfterCursor = cursor.value.substring(endPos,cursor.value.length);
    let text = document.getElementById('input').value
    cursor.value = textBeforeCursor +`${text}` +textAfterCursor;
    cursor.selectionStart = startPos + text.length;
    cursor.selectionEnd = startPos + text.length

}
const keyb = document.getElementById('input');

keyb.addEventListener('keydown', function(event){
    if(document.activeElement === keyb){
        if(event.key ==="Enter"){
            calculate();
        }
        
        
        else if(event.ctrlKey && event.key==="z"){
            document.getElementById('otpt').textContent=fetchedRslt;
            
        }
    }
});