class Timer {
    timer;
    hr;
    min;
    sec;
    stoptime;

    constructor(timer) {
        this.timer = timer;
        this.hr = 0;
        this.min = 0;
        this.sec = 0;
        this.stoptime = true;
    }


    startTimer() {
        if (this.stoptime == true) {
            this.stoptime = false;
            this.timerCycle();
        }
    }

    timerCycle() {
        if (this.stoptime == false) {
            this.sec = parseInt(this.sec);
            this.min = parseInt(this.min);
            this.hr = parseInt(this.hr);

            this.sec = this.sec + 1;

            if (this.sec == 60) {
                this.min = this.min + 1;
                this.sec = 0;
            }
            if (this.min == 60) {
                this.hr = this.hr + 1;
                this.min = 0;
                this.sec = 0;
            }

            if (this.sec < 10 || this.sec == 0) {
                this.sec = '0' + this.sec;
            }
            if (this.min < 10 || this.min == 0) {
                this.min = '0' + this.min;
            }
            if (this.hr < 10 || this.hr == 0) {
                this.hr = '0' + this.hr;
            }

            this.timer.innerHTML = this.hr + ':' + this.min + ':' + this.sec;

            var that = this;
            setTimeout(function () {
                that.timerCycle();
            }, 1000);
        }
    }

    resetTimer() {
        this.timer.innerHTML = "00:00:00";
        this.stoptime = true;
        this.hr = 0;
        this.sec = 0;
        this.min = 0;
    }

}

const timer1 = new Timer(document.getElementById('stopwatch1'))
const timer2 = new Timer(document.getElementById('stopwatch2'))
const timer3 = new Timer(document.getElementById('stopwatch3'))
const timer4 = new Timer(document.getElementById('stopwatch4'))
const timer5 = new Timer(document.getElementById('stopwatch5'))
const timer6 = new Timer(document.getElementById('stopwatch6'))
const timer7 = new Timer(document.getElementById('stopwatch7'))
const timer8 = new Timer(document.getElementById('stopwatch8'))

function startTimer(num) {
    switch (num) {
        case '1':
            timer1.startTimer();
            break;
        case '2':
            timer2.startTimer();
            break;
        case '3':
            timer3.startTimer();
            break;
        case '4':
            timer4.startTimer();
            break;
        case '5':
            timer5.startTimer();
            break;
        case '6':
            timer6.startTimer();
            break;
        case '7':
            timer7.startTimer();
            break;
        case '8':
            timer8.startTimer();
            break;
    }
}

function resetTimer(num) {
    switch (num) {
        case '1':
            timer1.resetTimer();
            break;
        case '2':
            timer2.resetTimer();
            break;
        case '3':
            timer3.resetTimer();
            break;
        case '4':
            timer4.resetTimer();
            break;
        case '5':
            timer5.resetTimer();
            break;
        case '6':
            timer6.resetTimer();
            break;
        case '7':
            timer7.resetTimer();
            break;
        case '8':
            timer8.resetTimer();
            break;
    }
}

