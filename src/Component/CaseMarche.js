import { Component } from "react";

export default class CaseMarche extends Component {

    constructor(props) {
        super(props)

        this.state = {
            day: "",
            text: "",
            adresse: "",
            date: null
        }


        this.Papier = this.Papier.bind(this)
    }

    Papier() {
        return ""
    }


    render() {
        const jour = this.state.day
        return (

            <div>
                <label>{jour}</label>
                {this.Papier()}
            </div>
        )
    }
}