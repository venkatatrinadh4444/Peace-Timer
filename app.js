let twentySecondTimerEl=document.getElementById('twentySecondsBtn')
let thirtySecondTimerEl=document.getElementById('thirtySecondsBtn')
let fortySecondTimerEl=document.getElementById('fortySecondsBtn')
let oneMinBtnEl=document.getElementById('oneMinuteBtn')
let textEl=document.getElementById('timerText')

function IntervalMethod(num) {
    let value=num;
    textEl.textContent=value+" seconds left";
    let setIntervalEl=setInterval(()=> {
        value-=1;
        textEl.textContent=value+" seconds left"
        if(value===0) {
            clearInterval(setIntervalEl)
            textEl.textContent='Your moment is complete.'
        }
    },1000)
}

twentySecondTimerEl.onclick=function() {
    IntervalMethod(20)
}

thirtySecondTimerEl.onclick=function() {
    IntervalMethod(30)
}

fortySecondTimerEl.onclick=function() {
    IntervalMethod(40)
}

oneMinBtnEl.onclick=function() {
    IntervalMethod(60)
}