import ChatInput from "@/components/Chat/ChatInput";
import Message from "@/components/Chat/Message";

export default function Chat(){
    const data = [
        {
            "message": "Merhaba, nasılsın?",
            "pp": "https://placehold.co/80x80.png",
            "my": false
        },
        {
            "message": "Ben de iyiyim, teşekkür ederim.",
            "pp": "https://placehold.co/80x80.png",
            "my": true
        },
        {
            "message": "Bugün hava nasıl orada?",
            "pp": "https://placehold.co/80x80.png",
            "my": true
        },
        {
            "message": "Hava oldukça güzel, güneşli bir gün.",
            "pp": "https://placehold.co/80x80.png",
            "my": false
        },
        {
            "message": "Harika, dışarıda bir şeyler yapabiliriz o zaman.",
            "pp": "https://placehold.co/80x80.png",
            "my": true
        },
        {
            "message": "Evet, belki bir kafeye gidebiliriz.",
            "pp": "https://placehold.co/80x80.png",
            "my": false
        },
        {
            "message": "Neden olmasın? Saat konusunda bir tercihin var mı?",
            "pp": "https://placehold.co/80x80.png",
            "my": true
        },
        {
            "message": "Öğleden sonra uygun olur.",
            "pp": "https://placehold.co/80x80.png",
            "my": false
        },
        {
            "message": "Tamam, öğleden sonra buluşalım o zaman.",
            "pp": "https://placehold.co/80x80.png",
            "my": true
        },
        {
            "message": "Harika, görüşmek üzere!",
            "pp": "https://placehold.co/80x80.png",
            "my": false
        },
        {
            "message": "Görüşmek üzere!",
            "pp": "https://placehold.co/80x80.png",
            "my": true
        },
        {
            "message": "İyi günler!",
            "pp": "https://placehold.co/80x80.png",
            "my": false
        },
        {
            "message": "Sana da iyi günler dilerim!",
            "pp": "https://placehold.co/80x80.png",
            "my": true
        },
        {
            "message": "Nasılsın bugün?",
            "pp": "https://placehold.co/80x80.png",
            "my": false
        },
        {
            "message": "Biraz yorgunum ama iyiyim, sen nasılsın?",
            "pp": "https://placehold.co/80x80.png",
            "my": true
        },
        {
            "message": "Ben de iyiyim, teşekkür ederim.",
            "pp": "https://placehold.co/80x80.png",
            "my": false
        },
        {
            "message": "Neler yapıyorsun bugün?",
            "pp": "https://placehold.co/80x80.png",
            "my": true
        },
        {
            "message": "Çalışıyorum ve akşam bir film izlemeyi düşünüyorum.",
            "pp": "https://placehold.co/80x80.png",
            "my": false
        },
        {
            "message": "Hangi filmi izleyeceksin?",
            "pp": "https://placehold.co/80x80.png",
            "my": true
        },
        {
            "message": "Henüz karar vermedim, bir önerin var mı?",
            "pp": "https://placehold.co/80x80.png",
            "my": false
        },
        {
            "message": "Belki de son çıkan bir aksiyon filmi izleyebilirsin.",
            "pp": "https://placehold.co/80x80.png",
            "my": true
        },
        {
            "message": "İyi fikir, ona bir bakayım o zaman.",
            "pp": "https://placehold.co/80x80.png",
            "my": false
        },
        {
            "message": "Evet, kesinlikle yapmalısın.",
            "pp": "https://placehold.co/80x80.png",
            "my": true
        },
        {
            "message": "Teşekkürler, önerin için.",
            "pp": "https://placehold.co/80x80.png",
            "my": false
        },
        {
            "message": "Rica ederim, iyi seyirler!",
            "pp": "https://placehold.co/80x80.png",
            "my": true
        },
        {
            "message": "Teşekkürler, iyi günler!",
            "pp": "https://placehold.co/80x80.png",
            "my": false
        },
        {
            "message": "Görüşmek üzere!",
            "pp": "https://placehold.co/80x80.png",
            "my": true
        },
        {
            "message": "Görüşmek üzere, hoşça kal!",
            "pp": "https://placehold.co/80x80.png",
            "my": false
        },
        {
            "message": "Nasılsın?",
            "pp": "https://placehold.co/80x80.png",
            "my": true
        },
        {
            "message": "İyiyim, teşekkür ederim. Sen nasılsın?",
            "pp": "https://placehold.co/80x80.png",
            "my": false
        },
        {
            "message": "Ben de iyiyim, teşekkür ederim.",
            "pp": "https://placehold.co/80x80.png",
            "my": true
        },
        {
            "message": "Bugün hava nasıl orada?",
            "pp": "https://placehold.co/80x80.png",
            "my": true
        },
        {
            "message": "Hava oldukça güzel, güneşli bir gün.",
            "pp": "https://placehold.co/80x80.png",
            "my": false
        },
        {
            "message": "Harika, dışarıda bir şeyler yapabiliriz o zaman.",
            "pp": "https://placehold.co/80x80.png",
            "my": true
        },
        {
            "message": "Evet, belki bir kafeye gidebiliriz.",
            "pp": "https://placehold.co/80x80.png",
            "my": false
        },
        {
            "message": "Neden olmasın? Saat konusunda bir tercihin var mı?",
            "pp": "https://placehold.co/80x80.png",
            "my": true
        },
        {
            "message": "Öğleden sonra uygun olur.",
            "pp": "https://placehold.co/80x80.png",
            "my": false
        },
        {
            "message": "Tamam, öğleden sonra buluşalım o zaman.",
            "pp": "https://placehold.co/80x80.png",
            "my": true
        },
        {
            "message": "Harika, görüşmek üzere!",
            "pp": "https://placehold.co/80x80.png",
            "my": false
        },
        {
            "message": "Görüşmek üzere!",
            "pp": "https://placehold.co/80x80.png",
            "my": true
        },
        {
            "message": "İyi günler!",
            "pp": "https://placehold.co/80x80.png",
            "my": false
        },
        {
            "message": "Sana da iyi günler dilerim!",
            "pp": "https://placehold.co/80x80.png",
            "my": true
        },
        {
            "message": "Nasılsın bugün?",
            "pp": "https://placehold.co/80x80.png",
            "my": false
        },
        {
            "message": "Biraz yorgunum ama iyiyim, sen nasılsın?",
            "pp": "https://placehold.co/80x80.png",
            "my": true
        },
        {
            "message": "Ben de iyiyim, teşekkür ederim.",
            "pp": "https://placehold.co/80x80.png",
            "my": false
        },
        {
            "message": "Neler yapıyorsun bugün?",
            "pp": "https://placehold.co/80x80.png",
            "my": true
        },
        {
            "message": "Çalışıyorum ve akşam bir film izlemeyi düşünüyorum.",
            "pp": "https://placehold.co/80x80.png",
            "my": false
        },
        {
            "message": "Hangi filmi izleyeceksin?",
            "pp": "https://placehold.co/80x80.png",
            "my": true
        },
        {
            "message": "Henüz karar vermedim, bir önerin var mı?",
            "pp": "https://placehold.co/80x80.png",
            "my": false
        },
        {
            "message": "Belki de son çıkan bir aksiyon filmi izleyebilirsin.",
            "pp": "https://placehold.co/80x80.png",
            "my": true
        },
        {
            "message": "İyi fikir, ona bir bakayım o zaman.",
            "pp": "https://placehold.co/80x80.png",
            "my": false
        },
        {
            "message": "Evet, kesinlikle yapmalısın.",
            "pp": "https://placehold.co/80x80.png",
            "my": true
        },
        {
            "message": "Teşekkürler, önerin için.",
            "pp": "https://placehold.co/80x80.png",
            "my": false
        },
        {
            "message": "Rica ederim, iyi seyirler!",
            "pp": "https://placehold.co/80x80.png",
            "my": true
        },
        {
            "message": "Teşekkürler, iyi günler!",
            "pp": "https://placehold.co/80x80.png",
            "my": false
        },
        {
            "message": "Görüşmek üzere!",
            "pp": "https://placehold.co/80x80.png",
            "my": true
        },
        {
            "message": "Görüşmek üzere, hoşça kal!",
            "pp": "https://placehold.co/80x80.png",
            "my": false
        }
    ]

    return (
        <div className="relative w-screen h-screen">
            <ul className="pt-10 pb-[152px] flex flex-col gap-y-6">
                {data.map((message, key) => (
                    <Message data={message} key={key}/>
                ))}
            </ul>
            <ChatInput />
        </div>
    )
}