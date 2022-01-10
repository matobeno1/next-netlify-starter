// exports.handler = function(event, context, callback) {
//     const body = JSON.parse(event.body).payload
//
//     fetch('/', {
//         method: 'POST',
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: new URLSearchParams(formData).toString()
//     }).then(() => {
//         console.log('saved')
//         return callback(null, {
//             statusCode: 200,
//             body: "Beep, boop, you just got serverless."
//         })
//     }).catch((error) =>
//         alert(error))
//
// }

exports.handler = async function(event, context) {
    console.log(JSON.parse(event.body))
    return {
        statusCode: 200,
        body: event.body
    };
};
