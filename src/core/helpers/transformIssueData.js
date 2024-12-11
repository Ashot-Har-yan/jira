import { taskStatuses } from "../utils/issues"


export const transformIssueData = (data)=>{
   const container = {};
   for(let i  in taskStatuses){
    container[taskStatuses[i].key] = []
   }
   data.forEach((item)=>{
    if(container.hasOwnProperty(item.status)){
        container[item.status].push(item) 
    }
   })
   return container
}
