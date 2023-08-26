class Instractor{
    name;
    designation ='web course'
    team = 'web team'
    location;
    constructor(name, location){
        this.name = name;
        this.name = location;
    }
    startSupportSession(time){
        console.log(`start the support session ${time}`)
    }
    createQuiz(module){
        console.log(`please create the  module ${module}`)

    }
}

const amir = new Instractor('amikr', 'mumbai')
console.log(amir);
amir.startSupportSession('9:00');
amir.createQuiz(60);
