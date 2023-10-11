export const isLogin = ()=>{

    if(document.cookie === "username=Admin") return true
    return false
}