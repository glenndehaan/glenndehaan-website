import {h, Component} from 'preact';

export default class Score extends Component {
    /**
     * Constructor
     */
    constructor() {
        super();

        this.state = {
            color: 'transparent',
            percentage: 0,
            length: 0
        };

        this.grades = [
            {
                color: 'red',
                range: [0, 49]
            },
            {
                color: 'orange',
                range: [50, 89]
            },
            {
                color: 'green',
                range: [90, 100]
            }
        ];
    }

    /**
     * Runs then component mounts
     */
    componentDidMount() {
        const {value} = this.props;
        this.getColor(value);
        this.getLength(value);
    }

    /**
     * Get the color based on the grade
     *
     * @param value
     */
    getColor(value) {
        this.grades.forEach(grade => {
            if (value >= grade.range[0] && value <= grade.range[1]) this.setState({color: grade.color})
        });
    }

    /**
     * Calculate the path length
     *
     * @param value
     */
    getLength(value) {
        const length = this.path.getTotalLength();

        this.setState({
            length: length,
            percentage: length - (length * (value * 0.01))
        })
    }

    /**
     * Preact render function
     *
     * @returns {*}
     */
    render() {
        const {value, label} = this.props;
        const {color, percentage, length} = this.state;

        return (
            <p className="score">
                <figure className="score-graph">
                    {value &&
                        <svg className="score-circle" stroke={color} style={{'stroke-dashoffset': percentage, 'stroke-dasharray': length}} viewBox="0 0 100 100">
                            <path ref={c => this.path = c} d="M50,6.324c24.122,0,43.676,19.555,43.676,43.676S74.122,93.676,50,93.676S6.324,74.122,6.324,50 S25.878,6.324,50,6.324"/>
                        </svg>
                    }
                    {value && <span className="score-value">{value}</span>}
                </figure>
                {label && <span className="score-label">{label}</span>}
            </p>
        )
    }
}
