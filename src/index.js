
//la linea de @ts-check hace que el valor que inserté en mi variable coincida con el tipo de dato que escribí
//los comentarios simples de dos slach no los los toma jsdoc, jsdoc toma los que son tipo /** */
//con los arroba doy el tipo de dato y los encierro con llaves
//si no quiero colocar el comentario @ts-check entonces presiono f1 y luego escribo en el buscador
//workspace settings y le doy click a la opción que diga JSON
//luego aparece la carpeta .vscode y dentro de ella un archivo llamado settings.json
//luego en ese archivo coloco lo siguiente  "js/ts.implicitProjectConfig.checkJs":true
//y así para el proyecto en particular que esté programando no tendré que escribir en ningún lado el
//comentario  @ts-check, pero la funcionalidad de ese comentario estará implementada gracias al archivo settings.json
/**
 * This is the fullname of the user
 * @type {string}
 */
let fullName = "Rick Ray"


