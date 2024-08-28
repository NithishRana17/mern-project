import { useNavigate } from "react-router-dom"

export default function Home(){
    const navigate = useNavigate()
    const moveToAbout = () => {
        navigate("/About")
    }
    const moveToContact = () => {
        navigate("/Contact")
    }

    return(
        <>
        <h1>This Is Home Component</h1>
        <button onClick={moveToAbout}>About</button>
        <button onClick={moveToContact}>Contact</button>

        </>
    )
}