const { format } = require ('date-fns') 
const { v4 :uuid } = require ('uuid')

const fs = require ('fs') ;
const path = require ('path') ;
const fsPromises = require('fs').promises 

const logEvents = async (message) => {
    const datatime = `${format(new Date(), 'ddMMyyyy\tHH:mm:ss')}`
    const logItem = `${datatime}\t${uuid()}\t${message}\n}`
    console.log(logItem)
    try {  
        if(!fs.existsSync(path.join(__dirname,'logs'))){
            await  fsPromises.mkdir(path.join(__dirname,'logs'))
        }
        await fsPromises.appendFile(path.join(__dirname, 'logs','eventFile.txt' ), logItem)
        
    } catch(err) {
         console.error(err);
    }
}
 
//console.log(format(new Date(), 'ddMMyyyy\tHH:mm:ss'));
module.exports = logEvents