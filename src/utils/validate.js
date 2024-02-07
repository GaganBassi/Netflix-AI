
export const checkValidateForm=(email,password)=>{

    const IsEmailId=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const IsPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    return(IsEmailId===false && "Email Id is not valid");
    return(IsPasswordValid===false && "Password is not valid");

    return null;// if both are true then return null.


}