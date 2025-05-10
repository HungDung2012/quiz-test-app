import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnswer } from "../../services/answersService";
import { getListQuestion } from "../../services/questionService";
import "./Result.scss";

function Result() {
    const params = useParams();
    const [dataResult, setDataResult] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const dataAnswers = await getAnswer(params.id);
            const dataQuestions = await getListQuestion(dataAnswers.topicId);

            let result = [];

            console.log(dataAnswers.answers)
            console.log(dataQuestions)

            for (let i = 0; i < dataQuestions.length; i++) {
                result.push({
                    ...dataQuestions[i],
                    ...dataAnswers.answers.find(item => item.questionId = dataQuestions[i].id)
                });
            }
            setDataResult(result);
        }
        fetchApi();
    }, []);

    console.log(dataResult)


    return (
        <div className="Result-container">
            <div className="Result-main">
                <h1>Kết quả: </h1>
                <div className="result__list">
                    {dataResult.map((item, index) => (
                        <div className="result__item" key={item.id}>
                            <p>
                                Câu {index + 1}: {item.question}

                                {item.correctAnswer === item.answer ? (
                                    <span className="result__tag result__tag--true">Đúng</span>
                                ) : (
                                    <span className="result__tag result__tag--false">Sai</span>
                                )}
                            </p>
                            {item.answers.map((itemAns, indexAns) => {
                                let className = "";
                                let checked = false;


                                if(item.answer === indexAns){
                                    checked = true;
                                    className = "result__item--selected";
                                }

                                if(item.correctAnswer === indexAns){
                                    className += " result__item--result";
                                }

                                return (
                                    <div className="result__answer" key={indexAns}>
                                        <input type="radio" checked={checked} disabled />
                                        <label className={className}>{itemAns}</label>
                                    </div>
                                )
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Result;