const input = document.getElementById('input');
const prompt = document.getElementById('prompt');
const responseDiv = document.getElementById('response');

// Replace this with your actual API key
const OPENAI_API_KEY = "your-openai-api-key";

async function askCoach() {
  const userScript = input.value.trim();
  const userPrompt = prompt.value.trim();

  if (!userScript || !userPrompt) {
    responseDiv.textContent = "Please enter both your script and a question.";
    return;
  }

  const fullPrompt = `Here is a scene or dialogue from a script:\n\n"${userScript}"\n\nUser request: ${userPrompt}\n\nGive helpful, creative, professional feedback.`;

  responseDiv.textContent = "🧠 Thinking...";

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: fullPrompt }],
      temperature: 0.8,
      max_tokens: 500
    })
  });

  const data = await res.json();
  responseDiv.textContent = data.choices?.[0]?.message?.content || "⚠️ No response.";
}
