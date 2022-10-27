const initialState = {
    BarbershopForBoys :false,
    BeautySalonForGirls:false,
    BeautySalonForGirlsAndBoys:false,
    WeddingMakeUpArtist:false,
    MakeUpArtist:false,
    Massage:false,
    HomeServices:false
}

const handleCheckReducer = (state = initialState,action)=>{
    switch (action.type) {
        case "handleCheckBoxBarberShopForBoys":
            return {
                ...state,
                BarbershopForBoys:action.payload
            }
        case "handleCheckBoxBeautySaloonForGirls":
            return {
                ...state,
                BeautySalonForGirls:action.payload
            }    
        case "handleCheckBoxBeautySaloonForBoysAndGirls":
            return {
                ...state,
                BeautySalonForGirlsAndBoys:action.payload
            }
        case "handleCheckBoxWeddingMakeUpArtist":
            return {
                ...state,
                WeddingMakeUpArtist:action.payload
            }  
       case "handleCheckBoxMakeUpArtist":
        return {
            ...state,
            MakeUpArtist:action.payload
        }     
        case "handleCheckBoxMassage":
            return {
                ...state,
                Massage:action.payload
            }
        case "handleCheckBoxYES":
            return{
                ...state,
                HomeServices:action.payload
            }
        case "handleCheckBoxNO":
            return{
                ...state,
                HomeServices:action.payload
                }               
        default:
            return state;
    }
}

export default handleCheckReducer;