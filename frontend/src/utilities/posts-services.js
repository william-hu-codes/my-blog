import * as postsAPI from './posts-api'


export async function getCases(){
    try {
        const data = await postsAPI.index()
        return data
    }catch(err){
        return err
    }
}

export async function createCase(newCaseData){
    try {
        const data = await postsAPI.create(newCaseData)
        return data
    }catch(err){
        return err
    }
}

export async function getCase(id){
    try{
       const data = await postsAPI.detail(id)
       return data
    }catch(err){
        return err
    }
}
export async function getCaseSummary(id){
    try{
       const data = await postsAPI.getCaseSummary(id)
       return data
    }catch(err){
        return err
    }
}


export async function getMostRecentCase(id){
    try{
       const data = await postsAPI.getMostRecentCase(id)
       return data
    }catch(err){
        return err
    }
}

export async function deleteCase(id){
    try{
       const data = await postsAPI.destroy(id)
       return data
    }catch(err){
        return err
    }
}