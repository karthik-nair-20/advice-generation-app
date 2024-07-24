import React from "react";
import Dice from './Dice';
import divider from "../images/pattern-divider-desktop.svg"

export default function Advise() {
    const [value, setValue] = React.useState({
        advise: '',
        id: null
    });
    const[click, setClick] = React.useState(false)

    React.useEffect(() => {
        fetch('https://api.adviceslip.com/advice', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setValue({
                    advise:data.slip.advice,
                    id:data.slip.id
                })
            });
    }, [click]);

    function newVal() {
        setClick((prev) => prev = !prev)
    }

    return (
        <div className="w-1/3 min-h-1/3 min-w-1/4 bg-slate-800 rounded-md">
            <p className="text-lime-400 text-xxl py-4 mx-auto block w-max">Advice #{value.id}</p>
            <h3 className="text-white text-2xl mx-auto text-center p-6">"{value.advise}"</h3>
            <img className="block mx-auto my-4" src={divider} alt="divider" />
            <Dice new={newVal} />
        </div>
    );
}
