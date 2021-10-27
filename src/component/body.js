import React, { Component } from 'react';
import Tuile from './tuile';
const voisin = new Map();
const tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const tableau2 = [1, 2, 3, 6, 5, 4, 7, 8, 9];
voisin.set(0, [1, 4, 5]);
voisin.set(1, [0, 2, 3, 4, 5]);
voisin.set(2, [1, 4, 5]);
voisin.set(3, [0, 1, 4, 6, 7]);
voisin.set(4, [0, 1, 2, 3, 5, 6, 7, 8]);
voisin.set(5, [1, 2, 4, 7, 8]);
voisin.set(6, [3, 4, 7]);
voisin.set(7, [3, 4, 5, 6, 8]);
voisin.set(8, [4, 5, 7]);
const colors = ["#88BBDD",
    "#8891DD",
    "#C8DD88",
    "#889FDD",
    "#88DD88",
    "#DD88DB",
    "#D788DD",
    "#88DDD6",
    "#B1DD88",
]

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            tab1: [
                {
                    "numero": 1,
                    "bg": null

                },
                {
                    "numero": 2,
                    "bg": null

                },
                {
                    "numero": 3,
                    "bg": null

                },
                {
                    "numero": 4,
                    "bg": null

                },
                {
                    "numero": 5,
                    "bg": null

                },
                {
                    "numero": 6,
                    "bg": null

                },
                {
                    "numero": 7,
                    "bg": null

                },
                {
                    "numero": 8,
                    "bg": null

                },
                {
                    "numero": 9,
                    "bg": null

                }
            ],
            styleTuile: "tuile mr-4 mb-2",
            styleTuileSelected: "tuile mr-4 mb-2 selected",
            tabMatched: [1, 1, 1, 1, 1, 1, 1, 1, 1],
            numeroSelected: null,
            bgSelected: null,
            response: true,
            selected: false,
            loadColors: true,

        }
    };
    componentDidMount = () => {
        this.setState({
            tab1: this.state.tab1.map(tuile => {
                tuile.bg = this.getColor();
                return tuile

            })
        })
    }
    estVoisin = (i, j) => {
        console.log(i + " est voisin de " + j + " " + voisin.get(i).includes(j));
        return voisin.get(i).includes(j)
    }
    check = () => {
        const { tabMatched } = this.state;
        let response = true
        let i = 0;
        while (i < tabMatched.length - 1 && response) {

            response = this.estVoisin(tabMatched[i], tabMatched[i + 1]);
            i++;
        }
        this.setState({ response })
    }
    insereIndice = (indice) => {
        const { numeroSelected, tabMatched } = this.state;
        /*console.log(indice);
        console.log(numeroSelected);*/
        tabMatched[numeroSelected - 1] = indice
        //console.log(tabMatched);
        this.setState({
            tabMatched
        })
    }
    getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }
    getColor = () => {
        let c = this.getRandomInt(colors.length);
        console.log(c);
        console.log(colors[c]);
        return colors[c]
    }
    a = () => {
        const { numeroSelected, styleTuileSelected, styleTuile, tab } = this.state;

        return tab.map(numero =>

        (<div className={numeroSelected == numero ? styleTuileSelected : styleTuile}
            style={{ "background-color": this.state.loadColors ? this.getColor() : null }}
            onClick={(e) =>

                this.setState({
                    numeroSelected: numero,
                    selected: true
                })}

            /*onPointerEnter={(e) =>
                console.log("leave")
                //this.setState({numeroSelected:numero})
                }
           onPointerLeave={(e) => console.log("leave")}*/>
            {numero}

        </div>)

        )

    }
    a1 = () => {
        const { numeroSelected, styleTuileSelected, styleTuile, tab1 } = this.state;

        return tab1.map(tuile =>

        (<div className={numeroSelected == tuile.numero ? styleTuileSelected : styleTuile}
            style={{ "background-color": tuile.bg }}
            onClick={(e) =>

                this.setState({
                    numeroSelected: tuile.numero,
                    selected: true,
                    bgSelected: tuile.bg
                })}
            /*onPointerEnter={(e) =>
                console.log("leave")
                //this.setState({numeroSelected:numero})
                }
           onPointerLeave={(e) => console.log("leave")}*/>
            {tuile.numero}

        </div>)

        )

    }
    removeNumber = () => {
        const { tab, numeroSelected } = this.state;
        this.setState({
            tab: tab.filter(num => num != numeroSelected)
        }, () => {
            //console.log(this.state.tab);
            if (this.state.tab.length == 0) this.check();
        })
    }
    removeNumber1 = () => {
        const { tab1, numeroSelected } = this.state;
        this.setState({
            tab1: tab1.filter(tuile => tuile.numero != numeroSelected),
            numeroSelected: null,
            bgSelected: null,


        }, () => {
            //console.log(this.state.tab);
            if (this.state.tab1.length == 0) this.check();
        })
    }
    insereNumberRead = () => {
        return this.state.numeroSelected
    }
    setSelected = () => {
        this.setState({
            selected: false
        })
    }
    setBg = () => {
        return this.state.bgSelected
    }
    b = () => {
        return tableau2.map((numero, index) =>

        (
            <Tuile index={index} setBg={this.setBg} setSelected={this.setSelected} selected={this.state.selected} insereNumberRead={this.insereNumberRead} removeNumber={this.removeNumber1} insereIndice={this.insereIndice} />

        )
        )

    }
    test = () => {
        alert("i")
    }

    render() {
        const { tab1, response, ab } = this.state
        return (
            <div className='row'>
                <div className='col-md-6 col-12'>
                    {
                        tab1.length == 0 ?
                            response ? <div className="display-3 text-center">

                                💐
                                <br/>
                                You win

                            </div> : <div>
                                Game finished, You lose
                            </div>
                            : <>{this.a1()}
                                <div>

                                    {tab1.length} moves left.

                                </div>
                            </>
                    }
                </div>
                <div className='col-md-6 col-12'>
                    <div className="grille">
                        {this.b()}
                    </div>
                </div>
                {
                    tab1.length == 0 ?
                        response ? console.log("win") : console.log("lost")
                        : null
                }
            </div>
        )

    }
}
export default Body;