import LogIn from "../components/Login"
import { useChat } from "./hooks/useChat";
import AppTitle from "../components/Title"

const SignIn = () =>{
    const { me, setMe, setSignedIn, displayStatus } = useChat();
    const handleLogin = (name) => {
        if (!name)
        displayStatus({
            type: "error",
            msg: "Missing user name",
        });
        else {
            setSignedIn(true);
            console.log("set sign in true",name, me)
        }
    }
    return ( 
    <>
        <AppTitle />
        <LogIn me={me} setName={setMe} onLogin={handleLogin} />
    </>
    );
}

export default SignIn;