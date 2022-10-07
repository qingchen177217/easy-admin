import  dayjs from 'dayjs'

export default (val:any,format='YYYY-MM-DD')=>{
     if(isNull(val)){
         val=parseInt(val)*1000
         return dayjs(val).format(format)//格式化时间
     }else{
        return '-----------'
     }
}

export const isNull=(date:any)=>{
    if(!date)return true
    if(JSON.stringify(date==='{}'))return true
    if(JSON.stringify(date==='[]'))return true
}























