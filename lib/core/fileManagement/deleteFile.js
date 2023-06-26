import fs from 'fs'
import getSafePath from './getSafePath.js'

const deleteFile = (path) => {
    path = getSafePath(path)
    if (fs.existsSync(path)) {
        fs.unlinkSync(path)
    } else {
        console.error("Invalid delete path")
    }
}

export default deleteFile
