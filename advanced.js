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