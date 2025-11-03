import { useState } from "react"

export default function Form() {
    let [formData, setFormData] = useState({
        fullName: "",
        userName: "",
        password: ""
    });

    let handleInputChange = (event) => {
        let fieldName = event.target.name;
        let newValue = event.target.value;

        setFormData((currData) => {
            currData[fieldName] = newValue;
            return {...currData};
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            userName: "",
            password: ""
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Full Name: </label>
            <input 
                placeholder="Enter full name..." 
                type="text" 
                value={formData.fullName} 
                onChange={handleInputChange} 
                id="fullname" //id is used to link the <input> with its <label>
                name="fullName"
            />

            <br /><br />

            <label htmlFor="username">Username: </label>
            <input 
                placeholder="Enter Username..." 
                type="text" 
                value={formData.userName} 
                onChange={handleInputChange}
                id="username"
                name="userName"
            />

            <br /><br />

            <label htmlFor="username">Password: </label>
            <input 
                placeholder="Enter Password..." 
                type="password" 
                value={formData.password} 
                onChange={handleInputChange}
                id="password"
                name="password"
            />

            <br /><br />

            <button>Submit</button>
        </form>
    )
}