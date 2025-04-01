   export interface QuizOptions {
       id : number,
       value :  string     
   }

   export interface SingleMcqProps {
     id : number,
     question : string,
     ansoptions : QuizOptions[]
   }