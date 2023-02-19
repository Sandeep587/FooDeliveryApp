export const SET_SELECTED_TAB='SET_SELCTED_TAB';

export const setSelectedTabSuccess=(seletedTab)=>({
    type:SET_SELECTED_TAB,
    payload:{seletedTab}
})

export function setSelectedTab(seletedTab){
    return dispatch=>{
        dispatch(setSelectedTabSuccess(seletedTab))
    }
}