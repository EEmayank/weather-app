import searchIcon from '../icons/search.png'
import {useState} from 'react'

export default function SearchBar ({handleWeatherData}) {

    const [input, setInput] = useState('');

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        if (e.key === 'Enter') {
            handleWeatherData(input)
        }
    }
    return (
        <div className="searchbar-container ">


            <div className="searchbar ">


                <input type="text" className="searchinput"  onChange={(e)=>handleInput(e)} onKeyDown={(e) => handleSubmit(e)}/>


                <div className="searchicon-container ">
                    <img src={searchIcon} alt="search Icon" className="searchicon" onClick={()=>handleWeatherData(input)}/>
                </div>


            </div>


        </div>
    )
}