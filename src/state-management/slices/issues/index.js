import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { db } from "../../../services/firebase";
import { getDocs,collection } from "firebase/firestore";
import { FIRESTORE_PATH_NAMES } from "../../../core/utils/constants";

const initialState = {
    data:[],
    isLoading:false
}

export const fetchIssueData = createAsyncThunk('data/fetchData',async()=>{
    const querryData = await getDocs(collection(db,FIRESTORE_PATH_NAMES.ISSUES));
    
    return querryData.docs.map((doc)=>{
        return doc.data();
    })
})

const issueSlice = createSlice({
    name:'ISSUES',
    initialState,
    reducers:{
        
    },
    extraReducers:(promise)=>{
        promise.addCase(fetchIssueData.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(fetchIssueData.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.data = action.payload;
        })
    }
}) 
export default issueSlice.reducer;