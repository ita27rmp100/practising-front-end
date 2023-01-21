const opperation = [
    7,
    8,
    9,
    4,
    5,
    6,
    1,
    2,
    3,
    0,
    '.',
    '**2'
]
for(let i=0;i<12;i++){
    document.getElementsByClassName('CalcTool')[0].innerHTML += `<input type="button" value="${opperation[i]}" class="tool" onclick="new Functions().Add('${opperation[i]}')">`
 }
class Functions{
    constructor(){}
    Add(x){
        document.getElementById('resault').innerHTML += x
    }
    calc() {
        try {
            document.getElementById('resault').innerHTML = String(eval(document.getElementById('resault').innerHTML)).slice(0,6)
        } catch (error) {
            document.getElementById('resault').innerHTML = 'error'
        }
    }
    clean() {
        document.getElementById('resault').innerHTML = ''
    }
    cleanLast(){
        document.getElementById('resault').innerHTML = (document.getElementById('resault').innerHTML).slice(0,-1)
    }
}
document.body.onkeyup = function(e){
    x = e.key
    if(x in opperation){
        new Functions().Add(x)
    }
    else if(x=='/'){
        new Functions().Add(x)
    }
    else if(x=='=' || x=='Enter'){
        new Functions().calc()
    }
    else if(x==' '){
        new Functions().clean()
    }
    else if(x=='Backspace'){
        new Functions().cleanLast()
    }
    console.log(e.key)
}