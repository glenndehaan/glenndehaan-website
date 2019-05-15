import {h, Component} from 'preact';
import cc from 'classcat';

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
                color: '#FF8A65',
                range: [0, 49]
            },
            {
                color: '#FFB74D',
                range: [50, 89]
            },
            {
                color: '#66BB6A',
                range: [90, 100]
            }
        ];
    }

    /**
     * Runs before render()
     */
    componentWillMount() {
        if(this.props.label === 'PWA') {
            this.setState({
                pwa: true,
                pwaValue: this.props.value
            });
        }
    }

    /**
     * Runs then component mounts
     * Runs after render()
     */
    componentDidMount() {
        const {value} = this.props;

        if(typeof this.state.pwa === 'undefined') {
            this.getColor(value);
            this.getLength(value);
        }
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
        const {color, percentage, length, pwa, pwaValue } = this.state;

        return (
            <p className="score">
                <figure className={cc(['score-graph', pwa && 'pwa', pwaValue && 'is-pwa'])}>
                    {value && !pwa &&
                        <svg className="score-circle" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="43.676"/>
                            <path stroke={color} style={{'stroke-dashoffset': percentage, 'stroke-dasharray': length}} ref={c => this.path = c} d="M50,6.324c24.122,0,43.676,19.555,43.676,43.676S74.122,93.676,50,93.676S6.324,74.122,6.324,50 S25.878,6.324,50,6.324"/>
                        </svg>
                    }
                    {pwa && (
                        <svg className={cc(['score-pwalogo', pwaValue && 'is-pwa'])} viewBox="0 0 100 100">
                            <g>
                                <path fill="#3D3D3D" d="M65.793,37.587l1.566-3.961h4.522l-2.146-6.008l2.684-6.788l7.688,20.412h-5.669l-1.314-3.656H65.793z"/>
                                <path fill={pwaValue ? '#5A0FC8' : '#3D3D3D'} d="M60.956,41.243l8.23-20.412l-5.456,0L58.1,34.022l-4.003-13.191h-4.194l-4.299,13.191l-3.031-6.011
                                    l-2.743,8.452l2.785,4.78h5.37l3.884-11.829l3.704,11.829H60.956z"/>
                                <path fill="#3D3D3D" d="M31.072,34.236h3.361c1.018,0,1.925-0.114,2.72-0.341l0.869-2.678l2.429-7.484
                                    c-0.185-0.293-0.396-0.571-0.634-0.832c-1.247-1.38-3.072-2.071-5.474-2.071h-8.449v20.412h5.179V34.236z M35.52,25.527c0.487,0.49,0.731,1.146,0.731,1.968c0,0.828-0.214,1.485-0.643,1.971c-0.47,0.54-1.334,0.809-2.594,0.809h-1.942v-5.484h1.956C34.202,24.792,35.033,25.037,35.52,25.527z"/>
                            </g>
                            {pwaValue && (
                                <g>
                                    <circle fill="#ffffff" cx="50" cy="66.778" r="14.577"/>
                                    <polygon fill="#66BB6A" points="59.478,63.323 45.268,75.054 39.371,67.911 42.498,65.329 45.813,69.346 56.897,60.196 	"/>
                                </g>
                            )}
                        </svg>
                    )}
                    {value && !pwa && <span className="score-value copy copy-grey">{value}</span>}
                </figure>
                {label && <span className="score-label copy-grey copy-small v-caps">{label}</span>}
            </p>
        )
    }
}
