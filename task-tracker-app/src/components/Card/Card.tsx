import React from 'react';

interface CardProps {
    title: string;
    description: string;
    status: 'pending' | 'completed';
}

const Card: React.FC<CardProps> = ({ title, description, status }) => {
    return (
        <div className={`bg-white shadow-md rounded-lg p-4 mb-4 ${status === 'completed' ? 'border-green-500' : 'border-red-500'} border`}>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-gray-700">{description}</p>
            <span className={`inline-block mt-2 px-2 py-1 text-xs font-bold text-white rounded-full ${status === 'completed' ? 'bg-green-500' : 'bg-red-500'}`}>
                {status}
            </span>
        </div>
    );
};

export default Card;