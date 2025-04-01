   export interface QuizOptions {
       id : number,
       value :  string,
       placeholder? : string     
   }

   export interface SingleMcqProps {
     id : number,
     question : string,
     ansoptions : QuizOptions[]
   }