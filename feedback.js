import { db } from "./firebase-config.js";

import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
async function submitFeedback() {

    const params = new URLSearchParams(window.location.search);
    const userId = params.get("id");
    const text = document.getElementById("feedbackText").value.trim();


    if (text === "") {
        alert("Please enter feedback");
        return;
    }

    // Replace with the logged-in user's ID later

   await addDoc(collection(db, "feedbacks"), {
    userId: userId,
    message: text,
    createdAt: new Date()
});

    alert("Feedback Sent Successfully!");

    window.location.href = "dashboard.html";
    
}
window.submitFeedback = submitFeedback;