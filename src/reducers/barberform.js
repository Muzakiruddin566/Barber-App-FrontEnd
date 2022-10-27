const initialState = {
    BusinessName :"",
    BarberName:"",
    PhoneNumber:"",
    Email:"",
    Password:"",
    ConfirmPassword:"",
    ShopImage:""
}

const handleFormReducer = (state = initialState,action)=>{
    switch (action.type) {
        case "BusinessName":
            return {
                ...state,
                BusinessName:action.payload
            }
        case "BarberNAME":
            return {
                ...state,
                BarberName:action.payload
            }    
        case "PhoneNumber":
            return {
                ...state,
                PhoneNumber:action.payload
            }
        case "Email":
            return {
                ...state,
                Email:action.payload
            }  
       case "Password":
        return {
            ...state,
            Password:action.payload
        }     
        case "ConfirmPassword":
            return {
                ...state,
                ConfirmPassword:action.payload
            }
        case "handleShopPicture":
            return{
                ...state,
                ShopImage:action.payload
            }

        default:
            return state;
    }
}

export default handleFormReducer;