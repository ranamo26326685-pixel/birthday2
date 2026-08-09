function openSurprise() {

    // نجيب قسم الرسالة
    const messageSection = document.getElementById("message");

    // ننزل لقسم الرسالة
    messageSection.scrollIntoView({
        behavior: "smooth"
    });

    // نظهر الكارت بعد شوية
    setTimeout(function () {

        const card = document.querySelector(".message-card");

        card.classList.add("show");

        // نبدأ كتابة الرسالة
        startTyping();

    }, 700);
}


// الرسالة
const message =
    "كل سنة وإنتي طيبة يا أجمل واحدة ❤️ " +
    "أتمنى السنة الجديدة من عمرك تكون مليانة فرحة ونجاح وضحك وحاجات حلوة كتير. " +
    "مبسوطة جدًا إنك في حياتي، وممتنة لكل ذكرى وكل ضحكة وكل لحظة حلوة اتشاركناها سوا. " +
    "يارب دايمًا أشوفك مبسوطة وناجحة وتحققي كل حاجة نفسك فيها. " +
    "عيد ميلاد سعيد يا أحلى دكتورة🎂💕✨";


let index = 0;
let started = false;




function startTyping() {

    if (started) {
        return;
    }

    started = true;

    const textElement = document.getElementById("typing-text");
    const typingSound = document.getElementById("typing-sound");

    // تشغيل الصوت مرة واحدة
    typingSound.loop = true;
    typingSound.volume = 0.25;

    typingSound.play().catch(() => {});


    function type() {

        if (index < message.length) {

            textElement.textContent += message.charAt(index);

            index++;

            setTimeout(type, 50);

        } else {

            // لما الكتابة تخلص نوقف الصوت
            typingSound.pause();
            typingSound.currentTime = 0;
        }
    }

    type();
}


function toggleSong() {

    const song = document.getElementById("ourSong");
    const player = document.getElementById("audioPlayer");
    const hearts = document.getElementById("musicHearts");
    const button = document.querySelector(".play-song-btn");

    // إظهار مشغل الصوت
    player.classList.add("show");

    if (song.paused) {

        song.play()
            .then(function () {

                button.innerHTML = "⏸ إيقاف الأغنية";

                // تشغيل القلوب والنجوم
                hearts.classList.remove("animate");

                // إعادة تشغيل الـ animation
                void hearts.offsetWidth;

                hearts.classList.add("animate");

            })
            .catch(function (error) {

                console.log("مشكلة في تشغيل الأغنية:", error);

            });

    } else {

        song.pause();

        button.innerHTML = "▶ تشغيل أغنيتنا 🎶";
    }
}




// ==================================================
// المفاجأة الأخيرة
// ==================================================

function showFinalSurprise() {

    const content =
        document.getElementById("finalContent");

    const button =
        document.querySelector(".final-surprise-btn");

    // إظهار الرسالة والـ QR

    content.classList.add("show");


    // تغيير الزر

    button.innerHTML = "❤️ Surprise Unlocked ❤️";

    button.disabled = true;


    // تشغيل الـ Confetti

    createConfetti();
}


// ==================================================
// Confetti
// ==================================================

function createConfetti() {

    const container =
        document.getElementById("confettiContainer");


    for (let i = 0; i < 100; i++) {

        const confetti =
            document.createElement("span");


        confetti.classList.add("confetti");


        // مكان عشوائي

        confetti.style.left =
            Math.random() * 100 + "%";


        // حركة عشوائية

        confetti.style.setProperty(
            "--move",
            (Math.random() * 300 - 150) + "px"
        );


        // تأخير عشوائي

        confetti.style.animationDelay =
            Math.random() * 1.5 + "s";


        // حجم عشوائي

        const size =
            Math.random() * 8 + 6;

        confetti.style.width =
            size + "px";

        confetti.style.height =
            size * 1.5 + "px";


        container.appendChild(confetti);


        setTimeout(function () {

            confetti.remove();

        }, 5000);
    }
}

// ==================================================
// صندوق الذكريات
// ==================================================


const memories = [

    // صورة

    {
        type: "image",

        content: "1c4da962-a700-466b-a32f-8ce37a578c1f.jfif",

        text: "🤍"
    },


    // صورة

    {
        type: "image",

        content: "10e24e34-ca2e-40a2-b919-13001c13fb04.jfif",

        text: "  😂😂😂"
    },


    // صورة

    {
        type: "image",

        content: "91c36b00-e7ad-470f-9c51-21dc4c3c849a.jfif",

        text: "😂😂"
    },


    // صورة

    {
        type: "image",

        content: "8466e90f-2d21-4532-b33a-43a41867ef95.jfif",

        text: " ❤️"
    },


    // صورة

    {
        type: "image",

        content:"d7d1ef5e-a4f9-40ed-8369-dd756f3c6378.jfif",

         text: "  "
    },


    

   
];


// ==================================================
// فتح الصندوق
// ==================================================

function openMemoryBox() {

    const box =
        document.getElementById("memoryBox");

    const button =
        document.getElementById("openMemoryBtn");


    // منع فتح الصندوق أكثر من مرة

    if (box.classList.contains("opened")) {

        return;

    }


    box.classList.add("open");

    box.classList.add("opened");


    // تغيير الزر

    button.innerHTML =
        "ذكرياتنا بتطلع... ❤️";

    button.disabled = true;


    // بدء إخراج الذكريات

    showMemories();
}


// ==================================================
// عرض الذكريات
// ==================================================

function showMemories() {

    const area =
        document.getElementById("memoryArea");


    // نعمل نسخة من الذكريات

    const shuffled =
        [...memories].sort(
            () => Math.random() - 0.5
        );


    // نعرض كل الذكريات

    shuffled.forEach(
        (memory, index) => {

            setTimeout(
                function () {

                    createMemory(
                        memory,
                        area
                    );

                },
                index * 700
            );

        }
    );


    // بعد انتهاء الذكريات

    setTimeout(
        function () {

            const ending =
                document.getElementById(
                    "memoryEnding"
                );

            ending.classList.add("show");

        },
        shuffled.length * 700 + 1000
    );
}


// ==================================================
// إنشاء ذكرى
// ==================================================

function createMemory(memory, area) {

    const item =
        document.createElement("div");


    item.classList.add(
        "memory-item"
    );


    // مكان عشوائي

    const left =
        Math.random() * 70 + 15;


    const top =
        Math.random() * 60 + 15;


    // دوران عشوائي

    const rotation =
        Math.random() * 20 - 10;


    item.style.left =
        left + "%";


    item.style.top =
        top + "%";


    item.style.setProperty(
        "--rotation",
        rotation + "deg"
    );


    // ==========================================
    // لو صورة
    // ==========================================

    if (memory.type === "image") {

        item.innerHTML = `

            <img
                src="${memory.content}"
                alt="ذكرى"
            >

            <div class="memory-text">
                ${memory.text}
            </div>

        `;

    }


    // ==========================================
    // لو رسالة
    // ==========================================

    else if (memory.type === "text") {

        item.innerHTML = `

            <div class="memory-text">

                <strong>
                    ${memory.content}
                </strong>

                <br><br>

                ${memory.text}

            </div>

        `;

    }


    // ==========================================
    // لو WhatsApp
    // ==========================================

    else if (memory.type === "chat") {

        item.innerHTML = `

            <div class="memory-chat">

                <div class="chat-message">
                    ${memory.content}
                </div>

                <div class="chat-message">
                    😂😂😂
                </div>

            </div>

            <div class="memory-text">
                ${memory.text}
            </div>

        `;

    }


    // إضافة الذكرى للصفحة

    area.appendChild(item);

}






