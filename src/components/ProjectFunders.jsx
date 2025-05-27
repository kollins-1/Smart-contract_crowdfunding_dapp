import { truncate } from '../store'
import { useState, useEffect } from 'react';

const ProjectFunders = ({ backers }) => {
    return (
        <div className="flex flex-col justify-center items-start md:w-2/3 px-6 mx-auto">
            <div className="max-h-[calc(100vh_-_25rem)] overflow-y-auto shadow-md rounded-md w-full mb-10" >
                <table className="min-w-full">
                    <thead className="border-b">
                        <tr>
                            <th
                                scope="col"
                                className="text-sm font-medium
                                px-6 py-4 text-left"
                            >
                                Backer
                            </th>

                            <th
                                scope="col"
                                className="text-sm font-medium
                                px-6 py-4 text-left"
                            >
                                Donations
                            </th>

                            <th
                                scope="col"
                                className="text-sm font-medium
                                px-6 py-4 text-left"
                            >
                                Refunded
                            </th>

                            <th
                                scope="col"
                                className="text-sm font-medium
                                px-6 py-4 text-left"
                            >
                                Time
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {backers.map((backer, i) => (
                            <Backer key={i} backer={backer} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const Backer = ({ backer }) => {
    const [timeAgo, setTimeAgo] = useState('');

    useEffect(() => {
        const calculateTimeAgo = () => {
            const currentTime = new Date();
            const backerTime = new Date(backer.timestamp);
            const difference = currentTime.getTime() - backerTime.getTime();

            const seconds = Math.floor(difference / 1000);
            const minutes = Math.floor(seconds / 60);
            const hours = Math.floor(minutes / 60);
            const days = Math.floor(hours / 24);

            if (days > 0) {
                setTimeAgo(`${days} days ago`);
            } else if (hours > 0) {
                setTimeAgo(`${hours} hours ago`);
            } else if (minutes > 0) {
                setTimeAgo(`${minutes} minutes ago`);
            } else {
                setTimeAgo(`${seconds} seconds ago`);
            }
        };

        calculateTimeAgo();

        // Update time every minute
        const interval = setInterval(calculateTimeAgo, 60000);

        return () => clearInterval(interval);
    }, [backer.timestamp]);

    return (
        <tr className="border-b border-gray-200">
            <td className="text-sm font-light px-6 py-4 whitespace-nowrap" >
                <div className="flex justify-start items-center space-x-2">
                    <span>{truncate(backer.owner, 4, 4, 11)}</span>
                </div>
            </td>

            <td className="text-sm font-light px-6 py-4 whitespace-nowrap" >
                <small className="flex justify-start items-center space-x-1">
                    <span className="text-gray-700 font-medium">
                        {backer.contribution} ETH
                    </span>
                </small>
            </td>

            <td className="text-sm font-light px-6 py-4 whitespace-nowrap" >
                {backer.refunded ? 'Yes' : 'No'}
            </td>

            <td className="text-sm font-light px-6 py-4 whitespace-nowrap" >
                {timeAgo}
            </td>
        </tr>
    );
}

export default ProjectFunders;
