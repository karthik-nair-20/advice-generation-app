import React from "react";

export default function Advise() {
    const [value, setValue] = React.useState({
        advise: '',
        id: null
    });

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
    }, []);

    return (
        <div className="w-1/3 h-1/3 bg-blue-200">
            <p className="text-black">{value.advise}</p>
        </div>
    );
}
