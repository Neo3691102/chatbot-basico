const responses = {
  "hola": "¡Hola! ¿Cómo estás?",

  "adios": "¡Adiós! Que tengas un buen día.",

  "como estas": "Estoy bien, gracias por preguntar.",

  "que puedes hacer": "Puedo responder a tus preguntas básicas.",
};

const responsesAvanzadas = {
    "cuando cambiar el aceite": "Se recomienda cambiar el aceite de la moto cada 3,000 a 5,000 kilómetros, dependiendo del uso y el tipo de aceite.",
    "como revisar la presion de las llantas": "Utiliza un manómetro para medir la presión y compárala con la recomendada por el fabricante, normalmente indicada en el manual o en la llanta.",
    "cada cuanto hacer mantenimiento general": "El mantenimiento general se recomienda cada 6 meses o cada 5,000 kilómetros, lo que ocurra primero."
};

function generarRespuesta(mensaje)  {
    const mensajeMinusculas = mensaje.toLowerCase();
    const chatbotmessages = document.getElementById("chatbotmessages");

    // Div para el mensaje del usuario
    const userMessageDiv = document.createElement("div");
    userMessageDiv.classList.add("bot-message", "user-message");
    userMessageDiv.innerHTML = `<i class="bx bx-user"></i><p>${mensaje}</p>`;
    chatbotmessages.appendChild(userMessageDiv);

    // Div para la respuesta del bot
    const botMessageDiv = document.createElement("div");
    botMessageDiv.classList.add("bot-message");
    if(responses[mensajeMinusculas]) {
        const respuesta = responses[mensajeMinusculas];
        botMessageDiv.innerHTML = `<i class="bx bx-robot"></i><p>${respuesta}</p>`;
    } else {
        botMessageDiv.innerHTML = `<i class="bx bx-robot"></i><p>Lo siento, no entiendo tu pregunta.</p>`;
    }
    chatbotmessages.appendChild(botMessageDiv);
    chatbotmessages.scrollTop = chatbotmessages.scrollHeight;
}

function respuestaAvanzada(mensaje) {
    const mensajeMinusculas = mensaje.toLowerCase();
    const chatbotmessages = document.getElementById("chatbotmessages");

    // Div para el mensaje del usuario
    const userMessageDiv = document.createElement("div");
    userMessageDiv.classList.add("bot-message", "user-message");
    userMessageDiv.innerHTML = `<i class="bx bx-user"></i><p>${mensaje}</p>`;
    chatbotmessages.appendChild(userMessageDiv);

    // Div para la respuesta del bot
    const botMessageDiv = document.createElement("div");
    botMessageDiv.classList.add("bot-message");
    if (responsesAvanzadas[mensajeMinusculas]) {
        const respuesta = responsesAvanzadas[mensajeMinusculas];
        botMessageDiv.innerHTML = `<i class="bx bx-robot"></i><p>${respuesta}</p>`;
    } else {
        botMessageDiv.innerHTML = `<i class="bx bx-robot"></i><p>Lo siento, no tengo información sobre esa pregunta.</p>`;
    }
    chatbotmessages.appendChild(botMessageDiv);
    chatbotmessages.scrollTop = chatbotmessages.scrollHeight;
}

const chatbotdialog = document.getElementById("chatbot");
const chatbutton = document.getElementById("chatbotbutton");
const closebutton = document.getElementById("closebutton");
const sendbutton = document.getElementById("send-button");

chatbutton.addEventListener("click", () => {
  chatbotdialog.style.display = "block";
});

closebutton.addEventListener("click", () => {
  chatbotdialog.style.display = "none";
});

sendbutton.addEventListener("click", () => {
    const userinput = document.getElementById("userinput");
    const usermessage = userinput.value.trim();
    if (usermessage !== "") {
        const mensajeMinusculas = usermessage.toLowerCase();
        if (responses[mensajeMinusculas]) {
            generarRespuesta(usermessage);
        } else if (responsesAvanzadas[mensajeMinusculas]) {
            respuestaAvanzada(usermessage);
        } else {
            generarRespuesta(usermessage); // Para mostrar el mensaje de "no entiendo tu pregunta"
        }
        userinput.value = "";
    }
});

// También detecta Enter en el input
const userinput = document.getElementById("userinput");
userinput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const usermessage = userinput.value.trim();
        if (usermessage !== "") {
            const mensajeMinusculas = usermessage.toLowerCase();
            if (responses[mensajeMinusculas]) {
                generarRespuesta(usermessage);
            } else if (responsesAvanzadas[mensajeMinusculas]) {
                respuestaAvanzada(usermessage);
            } else {
                generarRespuesta(usermessage);
            }
            userinput.value = "";
        }
    }
});