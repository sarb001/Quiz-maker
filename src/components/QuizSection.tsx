import { Button } from "./ui/button"

export const QuizSection = () => {
    return (
        <div className="px-12 py-2">
          <div className="grid justify-center items-center">
             <div className="font-medium text-4xl"> Create an awesome quiz in minutes </div>
             <p className="flex justify-center py-4"> Quiz Maker is the easiest way to make quizzes FREE </p>
             <div className="flex justify-center my-4">
             <Button className="bg-orange-500 px-8 py-8 font-bold"> Generate Quiz Automatically (AI) </Button>
             </div>
          </div>
        </div>
    )
}