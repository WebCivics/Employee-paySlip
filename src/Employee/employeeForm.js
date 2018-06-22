import React, { Component } from 'react';
import Input from './formInput';
import { withRouter } from 'react-router-dom';

class EmpForm extends Component {


    state = {
        formData: {
            firstName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'First Name',
                    required: true
                },
                value: '',
            },
            lastName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Last Name',
                    required: true
                },
                value: '',
            },
            annualSalary: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Salary',
                    required: true
                },
                value: '',
            },
            superRate: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Super Rate (0-12%)',
                    min: '0',
                    max: '12',
                    required: true
                },
                value: '',
            },
            startDate: {
                elementType: 'input',
                elementConfig: {
                    type: 'date',
                    placeholder: 'Salary',
                    required: true
                },
                value: '',
            }
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.history.push({
            pathname: '/pay-slip',
            employeeData: this.state.formData
        });
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.formData
        };
        const updatedFormElement = { 
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        this.setState({formData: updatedOrderForm});
    }

    render(){
        const formElementsArray = [];
        for (let key in this.state.formData) {
            formElementsArray.push({
                id: key,
                config: this.state.formData[key]
            });
        }

        let form = (
            <form onSubmit={this.handleSubmit}>
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
               <button style={{
                   cursor: 'pointer',
                   font: 'inherit',
                   padding: '10px',
                   margin: '10px 100px',
                   fontweight: 'bold'
               }}>Submit</button>
            </form>
        );

        return(
            <div style={{
                
                margin: '20px auto',
                width: '80%',
                textalign: 'center',
                boxshadow: '0 2px 3px #ccc',
                border: '2px solid #eee',
                padding: '40px',
                boxsizing: 'border-box',
            }}>
                <h3 style={{color: 'brown', padding:'20px', margin:'auto 50px'}}>Employee Payslip:</h3>
                {form}  
            </div>
        );
      
    }
}

export default withRouter(EmpForm);