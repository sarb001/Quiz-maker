
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card"

export const  CardSection = () => {

    const QuizData = [
        { id : 1 , title : " Choose your quiz type " , content : "Built for both students, lead capture and leisure, you can make your own trivia quiz, personality tests, polls, and surveys. Assign grades, certificates and more." },
        { id : 2 , title : " Write your questions " , content : "  Add your question from more than 40 types, tick the correct answer and repeat. Hit the Themes tab to change the look and feel of your quiz." },
        { id : 3 , title : " Share with your network" , content : " Send out your quiz via a direct link, embed on your website or share on social and start getting responses right away." },
    ]

    return (
        <>
         {QuizData?.map(i => {
            return (
                <div className="my-4" key = {i?.id}>
                    <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle className="font-bold text-2xl"> {i?.id}) {i?.title} </CardTitle>
                    </CardHeader>
                        <CardContent>
                            <div>
                                {i?.content}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )
         })}
        </>
    )
}