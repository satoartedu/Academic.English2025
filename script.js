const phrases = {
  "Giving Opinion": [
    "I believe that...",
    "In my opinion...",
    "From my perspective..."
  ],
  "Disagreeing": [
    "I see your point, but...",
    "I respectfully disagree because...",
    "However, I would like to challenge that by saying..."
  ],
  "Responding to Questions": [
    "That's an interesting question.",
    "Thank you for your question.",
    "I would be happy to answer that."
  ],
  "Asking for Explanation": [
    "Could you clarify what you mean by...?",
    "Could you elaborate on that?",
    "Can you explain further?"
  ]
};

const vocabulary = {
  "Analyze": "to examine something in detail to understand it better",
  "Synthesize": "to combine different ideas into a new whole",
  "Methodology": "a system of methods used in a study",
  "Comprehend": "to understand something fully",
  "Interpret": "to explain the meaning of something",
  "Hypothesis": "a proposed explanation for further investigation",
  "Data": "facts or information used to support a conclusion",
  "Theory": "a system of ideas intended to explain something"
};

function showPhrases() {
  let output = '';
  for (const category in phrases) {
    output += `<h3>${category}</h3><ul>`;
    phrases[category].forEach(p => output += `<li>${p}</li>`);
    output += `</ul>`;
  }
  document.getElementById("output").innerHTML = output;
}

function showVocabulary() {
  let output = '<h3>Vocabulary List</h3><ul>';
  for (const word in vocabulary) {
    output += `<li><strong>${word}</strong>: ${vocabulary[word]}</li>`;
  }
  output += '</ul>';
  document.getElementById("output").innerHTML = output;
}

function quizPhrases() {
  const categories = Object.keys(phrases);
  const category = categories[Math.floor(Math.random() * categories.length)];
  const phrase = phrases[category][Math.floor(Math.random() * phrases[category].length)];
  document.getElementById("output").innerHTML = `
    <p><strong>Category:</strong> ${category}</p>
    <p><strong>Phrase:</strong> ${phrase}</p>
    <p>What situation would you use this phrase in?</p>
  `;
}

function quizVocabulary() {
  const words = Object.keys(vocabulary);
  const word = words[Math.floor(Math.random() * words.length)];
  document.getElementById("output").innerHTML = `
    <p><strong>Word:</strong> ${word}</p>
    <p>What is the meaning of this word?</p>
  `;
}
