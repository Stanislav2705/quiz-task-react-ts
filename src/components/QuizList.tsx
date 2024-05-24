import React from "react";
import {Quiz} from '../types';

interface QuizListProps {
    quizzes: Quiz[];
    onEdit: (id: string) => void;
    onDelete: (id:string) => void;
    onRun: (id:string) => void;
}

const QuizList: React.FC<QuizListProps> = ({quizzes, onEdit, onDelete, onRun}) =>{
    return (
        <div>
            {quizzes.map((quiz) => (
                <div key={quiz.id} className="p-4 border-b">
                    <h3 className="text-xl font-bold">{quiz.title}</h3>
                    <button onClick={() => onEdit(quiz.id)} className="mr-2">Edit</button>
                    <button onClick={() => onDelete(quiz.id)} className="mr-2">Delete</button>
                    <button onClick={() => onRun(quiz.id)}>Run</button>
                </div>
            ))}
        </div>
    )
}

export default QuizList;