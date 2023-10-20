import * as tagsAPI from './tags-api'

export async function getTags(){
    try {
        const data = await tagsAPI.index()
        return data
    }catch(err){
        return err
    }
}