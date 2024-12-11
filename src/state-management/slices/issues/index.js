import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { db } from "../../../services/firebase";
import { getDocs,collection } from "firebase/firestore";
import { FIRESTORE_PATH_NAMES } from "../../../core/utils/constants";
import { transformIssueData } from "../../../core/helpers/transformIssueData";

const initialState = {
    data:[],
    isLoading:false,
    error:null
}

export const fetchIssueData = createAsyncThunk('data/fetchData',async()=>{
    const querryData = await getDocs(collection(db,FIRESTORE_PATH_NAMES.ISSUES));
    
    const resultData =  querryData.docs.map((doc)=>{
        return doc.data();
    })
    transformIssueData(resultData)
    return resultData
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
        .addCase(fetchIssueData.rejected,(state,action)=>{
            state.isLoading = false;
            state.data = [];
            state.error = action.payload;
        })
    }
}) 
export default issueSlice.reducer;