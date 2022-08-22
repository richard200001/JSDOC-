//si de parámetro queremos colocar un objeto que hayamos creado y personalizados como la clase User, simplemente lo colocamos dentro del paréntesis
/**
 * Class to create a Programmer
 * @example
 * const programmerOne = new Programmer({Name: "Rayn", id:1, age:18, isActive:false},'JavaScript');
 * programmerOne.getInfo();
 * 
 * @see https://docs.github.com/es/rest/repos/repos#get-a-repository
 * @tutorial first-tutorial
 */

class Programmer {

    /**
     * @param {User} user user's information
     * @param {string} language A programmer language
     */
    constructor(user,language){
        this.Name = user.Name;
        this.language = language;
    }
    /**
     * Get Programmer Information
     * @returns {void}
     */
    getInfo(){
        console.log(`I am ${this.Name} and my favorite language of programming is ${this.language}`)
    }

}
//instancio un objeto
/**
 * Know more in {@link Programmer}
 */
const programmerOne = new Programmer({Name: "Rayn", id:1, age:18, isActive:false},'JavaScript');
const programmerTwo = new Programmer({Name: "Joe", id:2, age:28, isActive:false},'Java');
programmerOne.getInfo();