import React from 'react'
import '../pages/styles.css'
export default function Login() {
    return (
        <div>
            <form>
                   <div> <label for = "user"></label><input placeholder = "UserName"id="user"class= "user"type="text" /><br></br>
                   </div>
                   <div>
                    <label for = "user"></label><input placeholder = "PassWord"id="password"class= "user"type="text" /><br></br>
                    </div>
                    <button class="submit">Submit</button><button class="exit">Exit</button>
                </form>
        </div>
    )
}

