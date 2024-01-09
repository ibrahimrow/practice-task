import { LineChart, Line, XAxis, YAxis } from 'recharts';
import { Audio } from 'react-loader-spinner'
const Chart = () => {



    const mathMarksData = [
        { student: 'Student 1', marks: 85, mathMarks: 94 },
        { student: 'Student 2', marks: 78, mathMarks: 77 },
        { student: 'Student 3', marks: 92, mathMarks: 67 },
        { student: 'Student 4', marks: 65, mathMarks: 88 },
        { student: 'Student 5', marks: 70, mathMarks: 98 },
        { student: 'Student 6', marks: 88, mathMarks: 70 },
        { student: 'Student 7', marks: 76, mathMarks: 77 },
        { student: 'Student 8', marks: 95, mathMarks: 90 },
        { student: 'Student 9', marks: 81, mathMarks: 79 },
        { student: 'Student 10', marks: 72, mathMarks: 75 },
    ];
    return (
        <div>


            <Audio
                height="80"
                width="80"
                radius="9"
                color='green'
                ariaLabel='three-dots-loading'
                wrapperStyle
                wrapperClass
            />
            <LineChart width={1200} height={500} data={mathMarksData}>

                <XAxis dataKey={'student'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="marks" stroke='violet'></Line>
                <Line dataKey={'mathMarks'} stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default Chart;