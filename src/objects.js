//de la siguiente forma se documenta un objeto
/**
 * Person object
 * @type {{id: number, firstName: string, lastName: string, age: number}}
 */
const objectPerson = {
    id: 1,
    firstName:'Ryan',
    lastName: 'Ray',
    age:18
}

/**
 * Person object Two
 * @type {{id: number | string, firstName: string, lastName: string, age: number | string}}
 */
 const objectPersonTwo = {
    id: 'a',
    firstName:'Ryan2',
    lastName: 'Ray2',
    age:20
}