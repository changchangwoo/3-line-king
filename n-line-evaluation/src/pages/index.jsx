import { useState } from "react"
import API from "../utils/api"

function index () {
    const [value, setValue] = useState('')
    const buttonHandler = () => {
        API.post('/test/', {
            value : value
        }
    ).then(response => console.log(response.data)).catch(err => console.log(err))
    }
    return  (
        <>
        <form>
            <input value={value} onChange={(e) => setValue(e.target.value)}>
            </input>
        </form>
        <button style={{width: "50px", height: "30px"}}onClick={buttonHandler}></button>

        </>
    )
}

export default index