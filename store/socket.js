// import io from 'socket.io-client';

// var socket = io('localhost:4000')


// export const state = () =>  ({
//     socket: socket,
// })

// export const actions= {
//     listenPing({state}){
//         state.socket.on("SERVER_PING", (value) => {
//             console.log(value)
//         })
//     },
//     listenFicheUpdate({state}){
//         state.socket.on("GET_TABLE_RETURN", (value) => {
//             console.log(value)
//         })
//     },
//     emitPing({state}, {data}){
//         state.socket.emit("PING", data)
//     },
//     getFichePersonnage({state}) {
//         state.socket.emit("GET_TABLE_DATA", "fiche_personnages")
//     },
//     tryToConnect({state}, loginData){
//         return new Promise ((resolve, reject) => {
//             if (!state.socket) {
//                 reject('No socket connection.');
//             } else {
                
//                 console.log(loginData)
//                 state.socket.emit("USER_CONNECT", loginData, (response) => {
//                     if (!response) {
//                         reject("No response from server");
//                     }
//                     else if (response.error) {
//                         reject(response.error);
//                     }
//                     else if (!response.id) {
//                         reject("User Id Invalide");
//                     }
//                     else {
//                         console.log("reponse de l'emit : ", response)
//                         resolve(response);
//                     }
//                 })
//             }
//         })
//     }
// }
// //   }

// //   export default module_socket;