//así podemos documentar nuestro objetos personalizados, es decir os objetos que ya hemos creado
//ejemplo que creemos un objeto usuario, y hay varios objetos usuarios con las mismas características
//creamos un documento general y luego en cada objeto le decimos que pertence a el objeto general
//en la primera línea se coloca el nombre del tipo de dato, en este caso será User, luego en la otra línea 
//se coloca el tipo de dato, en este caso el objeto es un tipo de dato Object, y seguidamente se coloca el nombre del objeto general, después se colocan en
//las demás líneas las propiedades del objeto, entre llaves se coloca el tipo de dato de la propiedad
// después de las llaves se coloca la clave del objeto y seguidamente una descripción
//para decir que un campo del objeto es opcional se coloca entre corchetes
/**
 * User
 * @typedef {object} User
 * @property {number} id User id
 * @property {string} Name User's name
 * @property {number | string} [age] User's age (Optional)
 * @property {boolean} isActive User state
 */
/**
 * @type {User}
 */
const myNewUser = {
        id: 1,
        Name:'Ryan',
        age:18,
        isActive:true
}

/**
 * @type {User}
 */
 const myNewUserTwo = {
    id: 1,
    Name:'RyanII',
    age:'30',
    isActive:false
}

/**
 * @type {User}
 */
 const myNewUserThree = {
    id: 1,
    Name:'Ryan',
    isActive:true
}