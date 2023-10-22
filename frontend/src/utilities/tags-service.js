import * as tagsAPI from './tags-api'

export async function getTags(){
    try {
        const response = await tagsAPI.index()
        return response
    }catch(err){
        return err
    }
}

export async function createTag(data){
    try {
        const response = await tagsAPI.create(data)
        return response
    }catch(err){
        return err
    }
}

export async function getNewestTag() {
    try {
        const response = await tagsAPI.getNewestTag()
        return response
    }catch(err) {
        return err
    }
}