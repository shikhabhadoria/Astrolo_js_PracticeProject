const zodiacsigns = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces"
];

const compliments = [
    "You are amazing!",
    "You have a great sense of humor!",
    "You are incredibly talented!",
    "You have a heart of gold!",
    "You are a great friend!",
    "You are a wonderful listener!",
    "You have a beautiful smile!",
    "You are so creative!",
    "You are a great problem solver!",
    "You have a positive attitude!",
    "You are very kind!",
    "You are a great leader!",
    "You are a great team player!"
];

const victimCardCompliments = [
    "You are a survivor!",
    "You are stronger than you think!",
    "You have overcome so much!",
    "You are resilient!",
    "You are brave!",
    "You are a fighter!",
    "You have a beautiful soul!",
    "You are a beacon of hope!",
    "You are an inspiration to others!",
    "You are a warrior!",
    "You are a survivor!",
    "You are stronger than you think!",
    "You have overcome so much!",
    "You are resilient!",
    "You are brave!",
    "You are a fighter!",
    "You have a beautiful soul!",
    "You are a beacon of hope!",
    "You are an inspiration to others!",
    "You are a warrior!"
];

const recommendations = [
    "Try meditation to find inner peace.",
    "Take a walk in nature to clear your mind.",
    "Practice gratitude to improve your mood.",
    "Set small goals to achieve big things.",
    "Spend time with loved ones to boost your happiness.",
    "Try a new hobby to discover hidden talents.",
    "Read a book to expand your knowledge.",
    "Exercise regularly to improve your physical and mental health.",
    "Get enough sleep to recharge your body and mind.",
    "Eat a balanced diet to nourish your body.",
    "Practice mindfulness to stay present in the moment.",
    "Take breaks from technology to reduce stress.",
    "Volunteer your time to help others and feel good about yourself.",
    "Learn a new skill to boost your confidence.",
    "Travel to new places to broaden your horizons.",
    "Listen to music to lift your spirits.",
    "Write in a journal to express your thoughts and feelings.",
    "Practice deep breathing to calm your mind.",
    "Spend time with pets to reduce stress and increase happiness.",
    "Laugh often to improve your mood and overall well-being."
];

const prediction = [
    "You will have a great day today!",
    "You will meet someone new and interesting soon!",
    "You will achieve your goals if you stay focused and determined!",  
    "You will find happiness in the little things in life!",
    "You will have a positive impact on those around you!",
    "You will overcome any challenges that come your way!",
    "You will discover new opportunities for growth and success!",
    "You will find love and happiness in unexpected places!",
    "You will have a breakthrough in your personal or professional life!",
    "You will experience a moment of clarity that leads to positive change!",
    "You will be surrounded by supportive and loving people!",
    "You will have a day filled with joy and laughter!",
    "You will find beauty in the world around you and appreciate it more!",
    "You will have a great day today!",
    "You will meet someone new and interesting soon!",
    "You will achieve your goals if you stay focused and determined!",
    "You will find happiness in the little things in life!",
    "You will have a positive impact on those around you!",
    "You will overcome any challenges that come your way!",
    "You will discover new opportunities for growth and success!",
    "You will find love and happiness in unexpected places!",
    "You will have a breakthrough in your personal or professional life!",
];


const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    const text = `Hi ${name} ${surname}, your zodiac sign is ${zodiacsigns[month-1]}. ${compliments[day-1]} Your victim card compliment is: ${victimCardCompliments[year%20]}, Here is a recommendation for you: ${recommendations[(day*month)%20]}. And finally, here is your prediction: ${prediction[name.length % prediction.length]}.`;

    document.getElementById("result").textContent = text;
});