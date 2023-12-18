import React from 'react';
import ScreenTemplate from "../components/ScreenTemplate";

function FormResponseScreen(props) {
    const responses = [
        {
            question: "q1",
            userAnswer: "khkjk",
            correctAnswer: "tyrty",
            weight: 2
        },
        {
            question: "q1",
            userAnswer: "qeqe",
            correctAnswer: "opoipoi",
            weight: 2
        },
        {
            question: "q1",
            userAnswer: "dwqe",
            correctAnswer: "qweqweWW",
            weight: 2
        },
    ]
    return (
        <ScreenTemplate>
            <div className="container mt-5">
                <div className="row mt-5 justify-content-center">
                    <h2 className="col-12 display-6 my-5">Response from: Username</h2>
                    <ul className="col-10 list-group justify-content-content-start" style={{listStyle: "none"}}>
                        {responses.map((response) =>
                            <li className="mb-5">
                                <div className="list-group-item list-group-item-action" style={{textAlign: "start"}}>
                                    Question: {response.question}
                                </div>
                                <div className="list-group-item list-group-item-action list-group-item-secondary"
                                     style={{textAlign: "start"}}>
                                    User answer: {response.userAnswer}
                                </div>
                                {response.correctAnswer &&
                                    <div className="list-group-item list-group-item-action list-group-item-success"
                                         style={{textAlign: "start"}}>
                                        Correct answer: {response.correctAnswer}
                                    </div>
                                }
                                {response.weight &&
                                    <div className="ps-4 mt-2"
                                         style={{textAlign: "start"}}>
                                        Points got: {response.weight}
                                    </div>
                                }
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </ScreenTemplate>
    );
}

export default FormResponseScreen;