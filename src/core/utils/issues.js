import {
    BugOutlined,
    FlagOutlined,
    CheckSquareOutlined,
    ArrowUpOutlined,
    ArrowDownOutlined 
} from '@ant-design/icons';


const ISSUE_TYPES = {
    BUG:'bug',
    TASK:'task',
    STORY:'story'
}

const ISSUE_PRIORITY = {
    HIGHEST:'highest',
    HIGH:'high',
    LOWEST:'lowest',
    LOW:'low',
    MEDIUM:'medium'
}


export const ISSUE_OPTIONS = {
   [ ISSUE_TYPES.BUG]:{
    label:'Bug',
    value:ISSUE_TYPES.BUG,
    icon:<BugOutlined style={{color:'#e44d42'}} />
   },
   [ISSUE_TYPES.TASK]:{
    label:'Task',
    value:ISSUE_TYPES.TASK,
    icon:<CheckSquareOutlined style={{color:'#4fade6'}}/>
   },
   [ISSUE_TYPES.STORY]:{
    label:'Story',
    value:ISSUE_TYPES.STORY,
    icon:<FlagOutlined style={{color:'#65a43'}}/>
   }
}

export const ISSUE_PRIORITY_OPTIONS = {
    [ISSUE_PRIORITY.HIGHEST]:{
        label:'Highest',
        value:ISSUE_PRIORITY.HIGHEST,
        icon:<ArrowUpOutlined style={{color:'#8B0000'}} />
    },
    [ISSUE_PRIORITY.HIGH]:{
        label:'High',
        value:ISSUE_PRIORITY.HIGH,
        icon:<ArrowUpOutlined style={{color:'#FF0000'}} />
    },
    [ISSUE_PRIORITY.LOWEST]:{
        label:'Lowest',
        value:ISSUE_PRIORITY.LOWEST,
        icon:<ArrowDownOutlined style={{color:'#008000'}} />

    },
    [ISSUE_PRIORITY.LOW]:{
        label:'Low',
        value:ISSUE_PRIORITY.LOW,
        icon:<ArrowDownOutlined style={{color:'#32CD32'}} />
    },
    [ISSUE_PRIORITY.MEDIUM]:{
        label:'Medium',
        value:ISSUE_PRIORITY.MEDIUM,
        icon:<ArrowUpOutlined style={{color:'#FFA500'}} />
    },
}