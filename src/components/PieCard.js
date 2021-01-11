import * as d3 from "d3";
import Style from 'styled-components';
import Card from './Card';

const Div = Style.div`
    -webkit-transform: scaleX(-1) scale(0.5);
    transform: scaleX(-1) scale(0.5);
    display: grid;
    justify-content: center;
    height: 175px;
    align-content: center;
`;

export const SimplePieChart = (props) => {
    const height = 200;
    const width = 200;

    let pie = d3.pie()(props.data);

    return (
        <svg height={height} width={width}>
        <g transform={`translate(${width / 2},${height / 2})`}>
            <Slice pie={pie} />
        </g>
        </svg>
    );
};

const Slice = props => {
    let { pie } = props;

    let arc = d3
        .arc()
        .innerRadius(0)
        .outerRadius(100);

    let interpolate = d3.interpolateRgb( "#E8ECEC", "#5285EC" );

    return pie.map((slice, index) => {
        let sliceColor = interpolate(index / (pie.length - 1));

        return <path d={arc(slice)} fill={sliceColor} />;
    });
};


export default function PieCard ( props ) {
    return (
        <Card>
            <Div>
                <SimplePieChart data={props.data}/>
            </Div>
        </Card>
    )
}