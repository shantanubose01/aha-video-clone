const loginAuth=(payload)=>{
    return{
        type:"LOGIN",
        payload: payload
    }
    }
    const otpPage=(payload)=>{
        return{
            type:"OTP",
            payload: payload
        }
    }
    const logout=(payload)=>{
        return{
            type:"LOGOUT",
            payload: payload
        }
    }
    export {loginAuth,otpPage,logout};