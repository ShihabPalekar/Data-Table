import React, { Component } from "react"
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';


class AddNew extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    cityOptions = () => {

        const { updateCurrDataObj, state, city, errCity, hlptxtCity } = this.props;

        if(state === "Maharashtra"){
            return(
                <FormControl>
                    <InputLabel>City</InputLabel>
                    <Select
                        onChange = {updateCurrDataObj("city")} 
                        defaultValue = {city}
                        error = {errCity}       
                        helperText = {hlptxtCity}             
                    >
                        <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
                        <MenuItem value={"Navi Mumbai"}>Navi Mumbai</MenuItem>
                        <MenuItem value={"Pune"}>Pune</MenuItem>
                    </Select>
                </FormControl>
            )
        } else if(state === "Gujarat"){
            return(
                <FormControl>
                    <InputLabel>City</InputLabel>
                    <Select
                        onChange = {updateCurrDataObj("city")} 
                        defaultValue = {city}
                        error = {errCity}      
                        helperText = {hlptxtCity}              
                    >
                        <MenuItem value={"Ahmedabad"}>Ahmedabad</MenuItem>
                        <MenuItem value={"Surat"}>Surat</MenuItem>
                        <MenuItem value={"Gandhinagar"}>Gandhinagar</MenuItem>
                    </Select>
                </FormControl>
            )
        } else if(state === "Punjab"){
            return(
                <FormControl>
                    <InputLabel>City</InputLabel>
                    <Select
                        onChange = {updateCurrDataObj("city")} 
                        defaultValue = {city}
                        error = {errCity}      
                        helperText = {hlptxtCity}              
                    >
                        <MenuItem value={"Chnadigarh"}>Chnadigarh</MenuItem>
                        <MenuItem value={"Panchkula"}>Panchkula</MenuItem>
                        <MenuItem value={"Mohali"}>Mohali</MenuItem>
                    </Select>
                </FormControl>
            )
        }
    }


    render(){

        const { updateCurrDataObj, handleSubmit, state, errName, errDesc, errContact, errEmail, 
                errState, hlptxtName, hlptxtDesc, hlptxtContact, hlptxtEmail, hlptxtState } = this.props;
        return(
            <div>
                <MuiThemeProvider>
                    <Card className="form-container">
                        <TextField 
                            fullWidth
                            name= "companyName"
                            label= "Company's Name"
                            onChange= {updateCurrDataObj("companyName")}
                            error = {errName}
                            helperText = {hlptxtName}
                        />
                        <br />
                        <TextField 
                            fullWidth
                            multiline
                            name= "description"
                            label= "Description"
                            onChange= {updateCurrDataObj("description")}
                            error = {errDesc}
                            helperText = {hlptxtDesc}
                        />
                        <br />
                        <TextField 
                            fullWidth
                            type= "number"
                            name= "contact"
                            label= "Contact No"
                            onInput = {(e) => {
                                e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,10)}}
                                onChange= {updateCurrDataObj("contact")}
                            error = {errContact}
                            helperText = {hlptxtContact}
                        />
                        <br />
                        <TextField 
                            fullWidth
                            type= "email"
                            name= "email"
                            label= "Email Id"
                            onChange= {updateCurrDataObj("email")}
                            error = {errEmail}
                            helperText = {hlptxtEmail}
                        />
                        <br />
                        <FormControl>
                            <InputLabel>State</InputLabel>
                            <Select
                                onChange = {updateCurrDataObj("state")} 
                                defaultValue = {state}
                                error = {errState}   
                                helperText = {hlptxtState}               
                            >
                                <MenuItem value={"Maharashtra"}>Maharashtra</MenuItem>
                                <MenuItem value={"Gujarat"}>Gujarat</MenuItem>
                                <MenuItem value={"Punjab"}>Punjab</MenuItem>
                            </Select>
                        </FormControl>
                        <br />
                        {this.cityOptions()}
                        <br />
                        <br />
                        <div className="submit-btn">
                            <Button
                                color= "primary"
                                variant= "contained"
                                onClick= {handleSubmit}
                            >
                                Submit
                            </Button>
                        </div>
                    </Card>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default AddNew