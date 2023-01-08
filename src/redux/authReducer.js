let init={
    loginPage:true,
    otpSection:false,
    auth:false
}
const AuthReducer= (state=init,{type,payload})=>{ 
    switch(type){
        case "LOGIN":{
            return{
                ...state, auth:true,loginPage:false,otpSection:false
            }
        }
        case "OTP":{
            return{
                ...state,loginPage:false,otpSection:true
            }
        }
        case "LOGOUT":{
            return{
                ...state, auth:false,loginPage:true,otpSection:false
            }
        }
        default:
            return state;
    }

}

export default AuthReducer; 