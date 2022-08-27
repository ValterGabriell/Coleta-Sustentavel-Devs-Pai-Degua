import {db} from '../SQLite'

export function criaTabela(){
    db.transaction((transaction) =>{
        transaction.executeSql(
            ("CREATE TABLE IF NOT EXISTS " + "Tokens " + "(id INTEGER PRIMARY KEY AUTOINCREMENT, token TEXT, user TEXT);")
        )
    })
}


export function adicionaToken(token, user){
    return new Promise((resolve)=>{
        db.transaction((transaction)=>{
            transaction.executeSql("INSERT INTO (token, user) VALUES (?,?,?);",[token, user],()=>{
                resolve("Token adicionado com sucesso")
            })
        })
      
    })
}

export async function buscarTokenPorUsuario(user){
    return new Promise((resolve)=>{
        db.transaction((transaction)=>{
            transaction.executeSql("SELECT token FROM Tokens;",[],(_, resultados)=>{
                resolve(resultados.rows._array)
            })
        })
    })  
}