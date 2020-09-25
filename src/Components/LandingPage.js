import React, { Component } from "react"
import AddNew from "./AddNew"
import tableData from "../tableData"
import MaterialTable from "material-table"

class LandingPage extends Component{
    constructor(){
        super();
        this.state = {
            step: 1,
            data: [],
            companyName: "",description: "", contact: "", email: "", state: "", city: "", 
            errName: false , errDesc: false, errContact: false, errEmail: false, errState: false, errCity: false,
            hlptxtName: "", hlptxtDesc: "", hlptxtContact: "", hlptxtEmail: "", hlptxtState: "", hlptxtCity: "",  
        }
    }

    componentDidMount(){
        this.setState({ data: tableData })
    }

    stepIncrement = () => {
        const {step} = this.state
        this.setState({ step: step + 1 })
    }

    updateCurrDataObj = input => e => {
        const { data, step } = this.state;
        this.setState({ [input] : e.target.value })
    }

    handleSubmit = () => {
        const { step, companyName, description, contact, email, state, city } = this.state;
        if (companyName === ""){
            this.setState({ 
                errName: true,
                hlptxtName: "Please add a valid name"
            })
        } else if (description === ""){
            this.setState({ 
                errDesc: true,
                hlptxtDesc: "Please add a valid description"
            })
        } else if (contact === ""){
            this.setState({ 
                errContact: true,
                hlptxtContact: "Please add a valid contact number"
            })
        } else if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
            this.setState({ 
                errEmail: true,
                hlptxtName: "Please add a valid email id"
            })
        } else if (state === ""){
            this.setState({ 
                errState: true,
                hlptxtState: "Please select a state"
            })
        } else if (city === ""){
            this.setState({ 
                errCity: true,
                hlptxtName: "Please select a city"
            })
        } else {
            tableData.push({companyName, description, contact, email, state, city })
            this.setState({ 
                step: step - 1,
                companyName: "", description: "", contact: "", email: "", state: "", city: "",
                errName: false , errDesc: false, errContact: false, errEmail: false,
                errState: false, errCity: false, hlptxtName: "", hlptxtDesc: "",
                hlptxtContact: "", hlptxtEmail: "", hlptxtState: "", hlptxtCity: "",
            })    
        }
    }

    render(){
        const { data, step } = this.state;
        const columns = [
            {title: "Company Name", field: "companyName"},
            {title: "Description", field: "description"},
            {title: "Contact No", field: "contact" },
            {title: "Email", field: "email"},
            {title: "State", field: "state"},
            {title: "City", field: "city"}
        ]
        switch(step){
            case 1:
            return(
                <div className="table-container">
                    <MaterialTable 
                        title="Data Table"
                        data= {this.state.data}
                        columns = {columns}
                        actions={[
                            {
                                icon: 'add',
                                tooltip: 'Add User',
                                isFreeAction: true,
                                onClick: (this.stepIncrement)
                            }
                        ]}                
                    />
                </div>    
            )
            case 2:
            return(
                <div>
                    <AddNew 
                        updateCurrDataObj = {this.updateCurrDataObj}
                        companyName = {this.state.companyName}
                        description = {this.state.description}
                        contact = {this.state.contact}
                        email = {this.state.email}
                        state = {this.state.state}
                        city = {this.state.city} 
                        errName = {this.state.errName}
                        errDesc = {this.state.errDesc}
                        errContact = {this.state.errContact}
                        errEmail = {this.state.errEmail}
                        errState = {this.state.errState}
                        errCity = {this.state.errContact}
                        hlptxtName = {this.state.hlptxtName}
                        hlptxtDesc = {this.state.hlptxtDesc}
                        hlptxtContact = {this.state.hlptxtContact}
                        hlptxtEmail = {this.state.hlptxtEmail}
                        hlptxtState = {this.state.hlptxtState}
                        hlptxtCity = {this.state.hlptxtContact}
                        handleSubmit = {this.handleSubmit}
                    />
                </div>
            )
        }
    }
}

export default LandingPage
