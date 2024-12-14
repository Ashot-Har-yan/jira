import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { db } from "../../../services/firebase";
import { getDocs,collection } from "firebase/firestore";
import { FIRESTORE_PATH_NAMES } from "../../../core/utils/constants";
import { transformIssueData } from "../../../core/helpers/transformIssueData";

const initialState = {
    data:{},
    isLoading:false,
    error:null
}

export const fetchIssueData = createAsyncThunk('data/fetchData',async()=>{
    const querryData = await getDocs(collection(db,FIRESTORE_PATH_NAMES.ISSUES));
    
    const resultData =  querryData.docs.map((doc)=>{
        return doc.data();
    })
    
    return transformIssueData(resultData)
})

const issueSlice = createSlice({
    name:'ISSUES',
    initialState,
    reducers:{
        changeIssueColumns:(state,action)=>{
            const columns = state.data;
            const {source,destination} = action.payload;
            const sourceColumnItems = [...columns[source.droppableId]];
            const destinationColumnItems = [...columns[destination.droppableId]];
            const [ removedItem ] = sourceColumnItems.splice(source.index,1);
           destinationColumnItems.splice(destination.index,0,removedItem);

           let changedColumns = {};
           if(source.droppableId !== destination.droppableId){
                changedColumns = {
                    ...columns,
                    [source.droppableId]:sourceColumnItems,
                    [destination.droppableId]:destinationColumnItems
                }
            }else{
                sourceColumnItems.splice(destination.index,0,removedItem)
                changedColumns = {
                    ...columns,
                    [source.droppableId]:sourceColumnItems
                }
            }
            state.data = changedColumns;
        }
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
export const { changeIssueColumns } = issueSlice.actions;