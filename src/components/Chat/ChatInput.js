import {useState} from "react";

export default function ChatInput() {

    const [input, setInput] = useState('');

    const changeHandle = (e) => {
        setInput(e.target.value);
    }

    return (
        <>
            <div
                className="fixed bottom-10 z-50 right-2/4 translate-x-2/4 shadow-xl w-[50%] border border-zinc-300 overflow-hidden rounded-xl flex bg-white">
                <input type="text"
                       placeholder="Send a new Message"
                       className="w-full bg-transparent p-6 focus:outline-none"
                       onChange={changeHandle} value={input}/>
                <button className="p-6 hover:text-blue-700 text-black transition duration-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 12L3 20L6.563 12L3 4L22 12ZM22 12H6.5" stroke="currentColor" strokeWidth="1.5"
                              strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
            <div className="fixed bottom-0 z-20 h-[112px] right-2/4 translate-x-2/4 w-[50%] bg-zinc-100 rounded-t-xl"></div>
        </>
    )
}