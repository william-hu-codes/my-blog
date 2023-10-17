import * as postsAPI from './posts-api'


export async function getPosts(){
    try {
        const data = await postsAPI.index()
        return data
    }catch(err){
        return err
    }
}

export async function createPost(newCaseData){
    try {
        const data = await postsAPI.create(newCaseData)
        return data
    }catch(err){
        return err
    }
}

export async function getPost(id){
    try{
       const data = await postsAPI.detail(id)
       return data
    }catch(err){
        return err
    }
}
// export async functionPostsaseSummary(id){
//     try{
//        const data = await postsAPIPostsaseSummary(id)
//        return data
//     }catch(err){
//         return err
//     }
// }


export async function getMostRecentPost(id){
    try{
       const data = await postsAPI.getMostRecentPost(id)
       return data
    }catch(err){
        return err
    }
}

export async function deletePost(id){
    try{
       const data = await postsAPI.destroy(id)
       return data
    }catch(err){
        return err
    }
}

export async function getS3Url() {
    try {
        const response = await postsAPI.getS3Url()
        return response
    }catch(err) {
        console.log(err)
        return err
    }
}