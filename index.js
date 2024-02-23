var pomodoroStr = "25:00";
var shortbreakStr = "05:00";
var longbreakStr = "15:00";


setInterval(function(){
    let data = new Date();
    let horario = data.getHours()
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();
    //AJUSTAR MINUTOS                                                    
    if (horario < 10){
        if(segundos < 10){
            document.getElementById("hora").innerHTML ="0" + horario + ":" + minutos +":" + "0" + segundos;    

        }else{
            document.getElementById("hora").innerHTML ="0" + horario + ":" + minutos +":" + segundos;    

        }
        
    }else{
        document.getElementById("hora").innerHTML = horario + ":" + minutos +":" + "0" + segundos;
        if(segundos < 10){
            document.getElementById("hora").innerHTML = horario + ":" + minutos +":" + "0" + segundos;    

        }else{
            document.getElementById("hora").innerHTML = horario + ":" + minutos +":" + segundos;    

        }

    }
    
}, 1000)

function pomodoro(){
    document.getElementById("tempo").innerHTML = pomodoroStr;
}
function shortbreak(){
    document.getElementById("tempo").innerHTML = shortbreakStr
}
function longbreak(){
    document.getElementById("tempo").innerHTML = longbreakStr;
}

//BOTÕES DE ACÕES
var timer;

function begin() {
    var tempo = document.getElementById("tempo").innerHTML;

    switch (tempo) {
        case pomodoroStr:
            let minutes = 25 - 1;
            let seconds = 60;
            timer = setInterval(function () {
                seconds -= 1;

                if (seconds < 10) {
                    document.getElementById("tempo").innerHTML = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
                } else {
                    document.getElementById("tempo").innerHTML = `${minutes}:${seconds}`;
                }

                if (seconds == 0) {
                    if (minutes == 0) {
                        clearInterval(timer); // Para o intervalo quando o tempo acabar
                        alert("Terminado!");
                        return;
                    } else {
                        minutes -= 1;
                        seconds = 60;
                    }
                }
            }, 1000);
            break;

            case shortbreakStr:
                let shortMinutes = 5; // Defina os minutos para o short break
                let shortSeconds = 0; // Defina os segundos para o short break
                let shortTimer = setInterval(function () {
                    if (shortSeconds < 10) {
                        document.getElementById("tempo").innerHTML = `${shortMinutes < 10 ? '0' + shortMinutes : shortMinutes}:${shortSeconds < 10 ? '0' + shortSeconds : shortSeconds}`;
                    } else {
                        document.getElementById("tempo").innerHTML = `${shortMinutes < 10 ? '0' + shortMinutes : shortMinutes}:${shortSeconds}`;
                    }
            
                    shortSeconds -= 1;
                    if (shortSeconds < 0) {
                        if (shortMinutes == 0) {
                            clearInterval(shortTimer); // Para o intervalo quando o tempo acabar
                            alert("Descanso curto terminado!");
                            return;
                        } else {
                            shortMinutes -= 1;
                            shortSeconds = 59;
                        }
                    }
                }, 1000);
                break;

                case longbreakStr:
                    let longMinutes = 15; // Defina os minutos para o long break
                    let longSeconds = 0; // Defina os segundos para o long break
                    let longTimer = setInterval(function () {
                        if (longSeconds < 10) {
                            document.getElementById("tempo").innerHTML = `${longMinutes < 10 ? '0' + longMinutes : longMinutes}:${longSeconds < 10 ? '0' + longSeconds : longSeconds}`;
                        } else {
                            document.getElementById("tempo").innerHTML = `${longMinutes < 10 ? '0' + longMinutes : longMinutes}:${longSeconds}`;
                        }
                
                        longSeconds -= 1;
                        if (longSeconds < 0) {
                            if (longMinutes == 0) {
                                clearInterval(longTimer); // Para o intervalo quando o tempo acabar
                                alert("Descanso longo terminado!");
                                return;
                            } else {
                                longMinutes -= 1;
                                longSeconds = 59;
                            }
                        }
                    }, 1000);
                    break;
                
            
    }
}

function stopCont(){
    clearInterval(timer);
}

function reboot(){
    stopCont();
    document.getElementById("tempo").innerHTML = "00:00";
}
