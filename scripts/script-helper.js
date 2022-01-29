let key = require('../config/keys')
const {spawn} = require('child_process');

module.exports.chatwithBot = (text, callback)=>{
    const childPython = spawn('python',['scripts/chat.py',key.KEY, key.X_RAPIDAPI_HOST, key.X_RAPIDAPI_KEY, text])

    childPython.stdout.on('data',(data)=>{
        //console.log(`stddata: ${data}`)
        callback(`${data}`)
    })
    childPython.stderr.on('data',(data)=>{
        console.log(`stderr: ${data}`)
    })
    childPython.on('close',(code)=>{
        console.log(`exited code: ${code}`)
    })
}