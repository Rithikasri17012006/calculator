const display=document.getElementById("display")
function appendtodisplay(input){
    display.value+=input;
}
function cleardisplay(){
       display.value=""
}
function result(){
    try{
    display.value=eval(display.value)
    }
    catch
    {
        display.value="Error"
    }
}
function clearlastelement(){
    display.value=display.value.slice(0,-1)
}