import Image from "next/image";

export default function Message({data}){
    return(
        <li className="w-[50%] mx-auto flex items-start gap-x-4">
            {data.my && (
                <>
                    <div className="w-11 h-11 bg-transparent text-transparent">x</div>
                    <div className="py-5 px-4 bg-gray-200 flex-1 rounded-2xl rounded-tr-none">
                        {data.message}
                    </div>
                    <div className="rounded-full overflow-hidden w-11 h-11">
                        <Image src={data.pp} alt="12312312" width={44} height={44} />
                    </div>
                </>
            )}

            {!data.my && (
                <>
                    <div className="rounded-full overflow-hidden w-11 h-11">
                        <Image src={data.pp} alt="12312312" width={44} height={44} />
                    </div>
                    <div className="py-5 px-4 bg-white flex-1 rounded-2xl rounded-tl-none">
                        {data.message}
                    </div>
                    <div className="w-11 h-11 bg-transparent text-transparent">x</div>
                </>
            )}
        </li>
    )
}