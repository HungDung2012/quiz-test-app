import { useEffect, useState } from "react";
import { getAnswersByUserId } from "../../services/answersService";
import { getListTopic } from "../../services/topicService";
import { Link } from "react-router-dom";
import "./Answer.scss";

function Answer() {
    const [dataAnswers, setDataAnswers] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const answersByUserId = await getAnswersByUserId();
            const topics = await getListTopic();
            console.log(topics);
            
            let result = [];

            for(let i = 0; i < answersByUserId.length; i++){
                result.push({
                    ...topics.find(item => item.id === answersByUserId[i].topicId),
                    ...answersByUserId[i]
                });
            }

            setDataAnswers(result.reverse());
        }
        fetchApi();
    }, [])


    return (
        <div className="Answer-container">
            <div>
                <h2>Danh sách bài đã luyện tập</h2>

                {dataAnswers.length > 0 && (
                    <table className="Answer-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Tên chủ đề</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataAnswers.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>
                                        <Link to={"/result/" + item.id}>Xem chi tiết</Link>
                                    </td>
                                </tr>
                            ))}
                            
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    )
}

export default Answer;