const quotes = {
  motivational: [
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
    },

    {
      quote: "Your time is limited, don't waste it living someone else's life.",
      author: "Steve Jobs",
    },
    {
      quote:
        "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson",
    },
    {
      quote: "It seems always impossible until it's done.",
      author: "Nelson Mandala",
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
    },
  ],
  wisdom: [
    {
      quote: "The only true wisdom is in knowing you know nothing.",
      author: "Socrates",
    },
    {
      quote: "Knowing yourself is the beginning of all wisdom.",
      author: "Aristotle",
    },
    {
      quote: "Turn your wounds into wisdom.",
      author: "Oprah Winfrey",
    },
    {
      quote:
        "The wise man learns more from his enemies than the fool from his friends.",
      author: "Baltasar Gracián",
    },
    {
      quote:
        "Wisdom is not a product of schooling but of the lifelong attempt to acquire it.",
      author: "Albert Einstein",
    },
    {
      quote:
        "The harder you work for something, the greater you'll feel when you achieve it.",
      author: "Dwayne Johnson",
    },
    {
      quote: "Your dream has to be bigger than your fear.",
      author: "Steve Harvey",
    },
    {
      quote:
        "It is during our darkest moments that we must focus to see the light.",
      author: "Aristotle",
    },
    {
      quote:
        "In the end, we will remember not the words of our enemies, but the silence of our friends.",
      author: "Martin Luther King Jr.",
    },
    {
      quote:
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      author: "Albert Einstein",
    },
    {
      quote: "A room without books is like a body without a soul.",
      author: "Marcus Tullius Cicero",
    },
    {
      quote:
        "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
      author: "J.K. Rowling",
    },
  ],
  happiness: [
    {
      quote:
        "Happiness is not something ready made. It comes from your own actions.",
      author: "Dalai Lama",
    },
    {
      quote:
        "The happiness of your life depends upon the quality of your thoughts.",
      author: "Marcus Aurelius",
    },
    {
      quote:
        "Happiness is when what you think, what you say, and what you do are in harmony.",
      author: "Mahatma Gandhi",
    },
    {
      quote:
        "The secret of happiness is not in doing what one likes, but in liking what one does.",
      author: "James M. Barrie",
    },
    {
      quote:
        "Happiness is not the absence of problems, it's the ability to deal with them.",
      author: "Steve Maraboli",
    },
  ],
  success: [
    {
      quote:
        "Success is walking from failure to failure with no loss of enthusiasm.",
      author: "Winston Churchill",
    },
    {
      quote:
        "Success usually comes to those who are too busy to be looking for it.",
      author: "Henry David Thoreau",
    },
    {
      quote: "The secret of success is to do the common thing uncommonly well.",
      author: "John D. Rockefeller",
    },
    {
      quote:
        "Success is not the key to happiness. Happiness is the key to success.",
      author: "Albert Schweitzer",
    },
    {
      quote:
        "Success is getting what you want, happiness is wanting what you get.",
      author: "W.P. Kinsella",
    },
    {
      quote: "I have not failed. I've just found 10,000 ways that won't work.",
      author: "Thomas A. Edison",
    },
    {
      quote:
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
  ],
  life: [
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    {
      quote:
        "In the end, it's not the years in your life that count. It's the life in your years.",
      author: "Abraham Lincoln",
    },
    {
      quote: "Life is really simple, but we insist on making it complicated.",
      author: "Confucius",
    },
    {
      quote: "The purpose of our lives is to be happy.",
      author: "Dalai Lama",
    },
    {
      quote: "Life is 10% what happens to us and 90% how we react to it.",
      author: "Charles R. Swindoll",
    },
    {
      quote:
        "To live is the rarest thing in the world. Most people just exist.",
      author: "Oscar Wilde",
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "Mae West",
    },
  ],
  change: [
    {
      quote:
        "It is better to be hated for what you are than to be loved for what you are not.",
      author: "Andre Gide, Autumn Leaves",
    },
    {
      quote: "Be the change that you wish to see in the world.",
      author: "Mahatma Gandhi",
    },
    {
      quote: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde",
    },
  ],
  courage: [
    {
      quote:
        "You can't swim for new horizons until you have courage to lose sight of the shore.",
      author: "William Faulkner",
    },
    {
      quote: "The only thing we have to fear is fear itself.",
      author: "Franklin D. Roosevelt",
    },
    {
      quote: "Everything you've ever wanted is on the other side of fear.",
      author: "George Addair",
    },
  ],
  inspirational: [
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      quote: "The only impossible journey is the one you never begin.",
      author: "Tony Robbins",
    },
    {
      quote:
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela",
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
    },
  ],
  love: [
    {
      quote: "Love is composed of a single soul inhabiting two bodies.",
      author: "Aristotle",
    },
    {
      quote:
        "Don't walk in front of me… I may not follow. Don't walk behind me… I may not lead. Walk beside me… just be my friend.",
      author: "Albert Camus",
    },
    {
      quote: "A friend is someone who knows all about you and still loves you.",
      author: "Elbert Hubbard",
    },
  ],
};

const allQuotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    quote: "It seems always impossible until it's done.",
    author: "Nelson Mandala",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    quote: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
  },
  {
    quote: "Knowing yourself is the beginning of all wisdom.",
    author: "Aristotle",
  },
  {
    quote: "Turn your wounds into wisdom.",
    author: "Oprah Winfrey",
  },
  {
    quote:
      "The wise man learns more from his enemies than the fool from his friends.",
    author: "Baltasar Gracián",
  },
  {
    quote:
      "Wisdom is not a product of schooling but of the lifelong attempt to acquire it.",
    author: "Albert Einstein",
  },
  {
    quote:
      "The harder you work for something, the greater you'll feel when you achieve it.",
    author: "Dwayne Johnson",
  },
  {
    quote: "Your dream has to be bigger than your fear.",
    author: "Steve Harvey",
  },
  {
    quote:
      "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
  },
  {
    quote:
      "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King Jr.",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
  },
  {
    quote: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
  },
  {
    quote:
      "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    author: "J.K. Rowling",
  },
  {
    quote:
      "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    quote:
      "The happiness of your life depends upon the quality of your thoughts.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "Happiness is when what you think, what you say, and what you do are in harmony.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "The secret of happiness is not in doing what one likes, but in liking what one does.",
    author: "James M. Barrie",
  },
  {
    quote:
      "Happiness is not the absence of problems, it's the ability to deal with them.",
    author: "Steve Maraboli",
  },
  {
    quote:
      "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill",
  },
  {
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    quote: "The secret of success is to do the common thing uncommonly well.",
    author: "John D. Rockefeller",
  },
  {
    quote:
      "Success is not the key to happiness. Happiness is the key to success.",
    author: "Albert Schweitzer",
  },
  {
    quote:
      "Success is getting what you want, happiness is wanting what you get.",
    author: "W.P. Kinsella",
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas A. Edison",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote:
      "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln",
  },
  {
    quote: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
  },
  {
    quote: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
  },
  {
    quote: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll",
  },
  {
    quote: "To live is the rarest thing in the world. Most people just exist.",
    author: "Oscar Wilde",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote:
      "It is better to be hated for what you are than to be loved for what you are not.",
    author: "Andre Gide, Autumn Leaves",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "You can't swim for new horizons until you have courage to lose sight of the shore.",
    author: "William Faulkner",
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "Everything you've ever wanted is on the other side of fear.",
    author: "George Addair",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "Love is composed of a single soul inhabiting two bodies.",
    author: "Aristotle",
  },
  {
    quote:
      "Don't walk in front of me… I may not follow. Don't walk behind me… I may not lead. Walk beside me… just be my friend.",
    author: "Albert Camus",
  },
  {
    quote: "A friend is someone who knows all about you and still loves you.",
    author: "Elbert Hubbard",
  },
];

let selector = document.getElementById("categorySelect");
let newQuoteGenerator = document.getElementById("newQuoteGenerator");
let option = document.getElementsByTagName("option");
let quoteTxt = document.getElementById("quote");
let quoteAuth = document.getElementById("author");
let toastEl = document.getElementById("toast");
let x = selector.value;

newQuoteGenerator.addEventListener("click", () => {
  if (x == "motivational") {
    const randomQuote =
      quotes.motivational[
        Math.floor(Math.random() * quotes.motivational.length)
      ];
    localStorage.setItem("selectedQuote", `"${randomQuote.quote}."`);
    localStorage.setItem("selectedAuthor", `-- ${randomQuote.author}`);
    let getSelectedQuote = localStorage.getItem("selectedQuote");
    let getSelectedAuthor = localStorage.getItem("selectedAuthor");
    if (
      (getSelectedQuote === `"${randomQuote.quote}."`) &
      (getSelectedAuthor === `-- ${randomQuote.author}`)
    ) {
      quoteTxt.innerHTML = getSelectedQuote;
      quoteAuth.innerHTML = getSelectedAuthor;
      console.log("YES!");
    }
    // quoteTxt.innerHTML = `"${randomQuote.quote}."`;
    // quoteAuth.innerHTML = ` -- ${randomQuote.author}`;
    console.log(getSelectedQuote + " " + getSelectedAuthor);
  } else if (x == "wisdom") {
    const randomQuote =
      quotes.wisdom[Math.floor(Math.random() * quotes.wisdom.length)];
    localStorage.setItem("selectedQuote", `"${randomQuote.quote}."`);
    localStorage.setItem("selectedAuthor", `-- ${randomQuote.author}`);
    let getSelectedQuote = localStorage.getItem("selectedQuote");
    let getSelectedAuthor = localStorage.getItem("selectedAuthor");
    if (
      (getSelectedQuote === `"${randomQuote.quote}."`) &
      (getSelectedAuthor === `-- ${randomQuote.author}`)
    ) {
      quoteTxt.innerHTML = getSelectedQuote;
      quoteAuth.innerHTML = getSelectedAuthor;
      console.log("YES!");
    }
    // quoteTxt.innerHTML = `"${randomQuote.quote}."`;
    // quoteAuth.innerHTML = ` -- ${randomQuote.author}`;
  } else if (x == "happiness") {
    const randomQuote =
      quotes.happiness[Math.floor(Math.random() * quotes.happiness.length)];
    localStorage.setItem("selectedQuote", `"${randomQuote.quote}."`);
    localStorage.setItem("selectedAuthor", `-- ${randomQuote.author}`);
    let getSelectedQuote = localStorage.getItem("selectedQuote");
    let getSelectedAuthor = localStorage.getItem("selectedAuthor");
    if (
      (getSelectedQuote === `"${randomQuote.quote}."`) &
      (getSelectedAuthor === `-- ${randomQuote.author}`)
    ) {
      quoteTxt.innerHTML = getSelectedQuote;
      quoteAuth.innerHTML = getSelectedAuthor;
      console.log("YES!");
    }
    // quoteTxt.innerHTML = `"${randomQuote.quote}."`;
    // quoteAuth.innerHTML = ` -- ${randomQuote.author}`;
  } else if (x == "success") {
    const randomQuote =
      quotes.success[Math.floor(Math.random() * quotes.success.length)];
    localStorage.setItem("selectedQuote", `"${randomQuote.quote}."`);
    localStorage.setItem("selectedAuthor", `-- ${randomQuote.author}`);
    let getSelectedQuote = localStorage.getItem("selectedQuote");
    let getSelectedAuthor = localStorage.getItem("selectedAuthor");
    if (
      (getSelectedQuote === `"${randomQuote.quote}."`) &
      (getSelectedAuthor === `-- ${randomQuote.author}`)
    ) {
      quoteTxt.innerHTML = getSelectedQuote;
      quoteAuth.innerHTML = getSelectedAuthor;
      console.log("YES!");
    }
    // quoteTxt.innerHTML = `"${randomQuote.quote}."`;
    // quoteAuth.innerHTML = ` -- ${randomQuote.author}`;
  } else if (x == "life") {
    const randomQuote =
      quotes.life[Math.floor(Math.random() * quotes.life.length)];
    localStorage.setItem("selectedQuote", `"${randomQuote.quote}."`);
    localStorage.setItem("selectedAuthor", `-- ${randomQuote.author}`);
    let getSelectedQuote = localStorage.getItem("selectedQuote");
    let getSelectedAuthor = localStorage.getItem("selectedAuthor");
    if (
      (getSelectedQuote === `"${randomQuote.quote}."`) &
      (getSelectedAuthor === `-- ${randomQuote.author}`)
    ) {
      quoteTxt.innerHTML = getSelectedQuote;
      quoteAuth.innerHTML = getSelectedAuthor;
      console.log("YES!");
    }
    // quoteTxt.innerHTML = `"${randomQuote.quote}."`;
    // quoteAuth.innerHTML = ` -- ${randomQuote.author}`;
  } else if (x == "change") {
    const randomQuote =
      quotes.change[Math.floor(Math.random() * quotes.change.length)];
    localStorage.setItem("selectedQuote", `"${randomQuote.quote}."`);
    localStorage.setItem("selectedAuthor", `-- ${randomQuote.author}`);
    let getSelectedQuote = localStorage.getItem("selectedQuote");
    let getSelectedAuthor = localStorage.getItem("selectedAuthor");
    if (
      (getSelectedQuote === `"${randomQuote.quote}."`) &
      (getSelectedAuthor === `-- ${randomQuote.author}`)
    ) {
      quoteTxt.innerHTML = getSelectedQuote;
      quoteAuth.innerHTML = getSelectedAuthor;
      console.log("YES!");
    }
    // quoteTxt.innerHTML = `"${randomQuote.quote}."`;
    // quoteAuth.innerHTML = ` -- ${randomQuote.author}`;
  } else if (x == "courage") {
    const randomQuote =
      quotes.courage[Math.floor(Math.random() * quotes.courage.length)];
    localStorage.setItem("selectedQuote", `"${randomQuote.quote}."`);
    localStorage.setItem("selectedAuthor", `-- ${randomQuote.author}`);
    let getSelectedQuote = localStorage.getItem("selectedQuote");
    let getSelectedAuthor = localStorage.getItem("selectedAuthor");
    if (
      (getSelectedQuote === `"${randomQuote.quote}."`) &
      (getSelectedAuthor === `-- ${randomQuote.author}`)
    ) {
      quoteTxt.innerHTML = getSelectedQuote;
      quoteAuth.innerHTML = getSelectedAuthor;
      console.log("YES!");
    }
    // quoteTxt.innerHTML = `"${randomQuote.quote}."`;
    // quoteAuth.innerHTML = ` -- ${randomQuote.author}`;
  } else if (x == "inspirational") {
    const randomQuote =
      quotes.inspirational[
        Math.floor(Math.random() * quotes.inspirational.length)
      ];
    localStorage.setItem("selectedQuote", `"${randomQuote.quote}."`);
    localStorage.setItem("selectedAuthor", `-- ${randomQuote.author}`);
    let getSelectedQuote = localStorage.getItem("selectedQuote");
    let getSelectedAuthor = localStorage.getItem("selectedAuthor");
    if (
      (getSelectedQuote === `"${randomQuote.quote}."`) &
      (getSelectedAuthor === `-- ${randomQuote.author}`)
    ) {
      quoteTxt.innerHTML = getSelectedQuote;
      quoteAuth.innerHTML = getSelectedAuthor;
      console.log("YES!");
    }
    // quoteTxt.innerHTML = `"${randomQuote.quote}."`;
    // quoteAuth.innerHTML = ` -- ${randomQuote.author}`;
  } else if (x == "love") {
    const randomQuote =
      quotes.love[Math.floor(Math.random() * quotes.love.length)];
    localStorage.setItem("selectedQuote", `"${randomQuote.quote}."`);
    localStorage.setItem("selectedAuthor", `-- ${randomQuote.author}`);
    let getSelectedQuote = localStorage.getItem("selectedQuote");
    let getSelectedAuthor = localStorage.getItem("selectedAuthor");
    if (
      (getSelectedQuote === `"${randomQuote.quote}."`) &
      (getSelectedAuthor === `-- ${randomQuote.author}`)
    ) {
      quoteTxt.innerHTML = getSelectedQuote;
      quoteAuth.innerHTML = getSelectedAuthor;
      console.log("YES!");
    }
    // quoteTxt.innerHTML = `"${randomQuote.quote}."`;
    // quoteAuth.innerHTML = ` -- ${randomQuote.author}`;
  } else if (x == "allCategories") {
    const randomQuote = allQuotes[Math.floor(Math.random() * allQuotes.length)];
    localStorage.setItem("selectedQuote", `"${randomQuote.quote}."`);
    localStorage.setItem("selectedAuthor", `-- ${randomQuote.author}`);
    let getSelectedQuote = localStorage.getItem("selectedQuote");
    let getSelectedAuthor = localStorage.getItem("selectedAuthor");
    if (
      (getSelectedQuote === `"${randomQuote.quote}."`) &
      (getSelectedAuthor === `-- ${randomQuote.author}`)
    ) {
      quoteTxt.innerHTML = getSelectedQuote;
      quoteAuth.innerHTML = getSelectedAuthor;
      console.log("YES!");
    }
    // quoteTxt.innerHTML = `"${randomQuote.quote}."`;
    // quoteAuth.innerHTML = ` -- ${randomQuote.author}`;
    console.log(randomQuote);
  } else {
    quoteTxt.innerHTML = `“Find out who you are and do it on purpose.”`;
    quoteAuth.innerHTML = `-- Dolly Parton.`;
  }
});

// todo: Share Btn ========//
let shareQuote = document.getElementById("shareQuote");

shareQuote.addEventListener("click", () => {
  const quoteToShare = `${quoteTxt.textContent} ${quoteAuth.textContent}`;

  if (navigator.share) {
    navigator
      .share({
        title: "Inspirational Quote",
        text: quoteToShare,
      })
      .then(() => {
        showToast("Quote shared successfully!");
        console.log("Quote shared successfully!");
      })
      .catch((err) => {
        showToast("Sharing cancelled");
        console.error("Error sharing: ", err);
        console.log("Sharing cancelled");
      });
  } else {
    // Fallback for browsers that don't support Web Share API
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      quoteToShare
    )}`;
    window.open(shareUrl, "_blank");
    showToast("Opened sharing options");
  }
});

// Show toast notification
function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("show");

  setTimeout(() => {
    toastEl.classList.remove("show");
  }, 3000);
}
// todo: Share Btn ========//

// * Light-Dark Mode ====== //

let themeToggleBtn = document.querySelector("#themeToggle");
let darkModeToggle = document.querySelector("#darkModeToggle");
let themeText = document.querySelector("#themeText");
let savedMode = localStorage.getItem("mode");
let themeIconSun = document.querySelector("#themeIconSun");
let themeIconMoon = document.querySelector("#themeIconMoon");

themeToggleBtn.addEventListener("click", () => {
  if (darkModeToggle.checked) {
    document.body.classList.add("dark");
    themeText.innerHTML = "Light";
    localStorage.setItem("mode", "dark");
    themeIconMoon.classList.add("clear");
    themeIconSun.classList.remove("clear");
  } else {
    document.body.classList.remove("dark");
    themeText.innerHTML = "Dark";
    localStorage.setItem("mode", "light");
    themeIconSun.classList.add("clear");
    themeIconMoon.classList.remove("clear");
  }
});

if (savedMode === "dark") {
  document.body.classList.add("dark");
  themeText.innerHTML = "Light";
  themeIconMoon.classList.add("clear");
  themeIconSun.classList.remove("clear");
  darkModeToggle.checked = true;
  console.log("Dark");
} else {
  document.body.classList.remove("dark");
  themeText.innerHTML = "Dark";
  themeIconSun.classList.add("clear");
  themeIconMoon.classList.remove("clear");
  darkModeToggle.checked = false;
}

// & CopyBtn ============= :

document.getElementById("copyBtn").addEventListener("click", async function () {
  const button = this;
  const quoteElement = quoteTxt.innerHTML;
  const quoteText = quoteElement ? quoteElement : "";
  const icon = document.getElementById("CopyIcon");
  if (!quoteText) {
    alert("No quote to copy!");
    return;
  }

  // Clear any previous feedback
  icon.className = "fa-regular fa-copy";
  button.disabled = true; // Disable button to avoid multiple clicks

  try {
    await navigator.clipboard.writeText(quoteText);
    console.log(quoteText);

    // Change icon to check mark on success
    icon.className = "fa-solid fa-check";
    button.insertBefore(icon, button.firstChild); // Reinsert icon
    button.textContent = "Copied!";

    setTimeout(() => {
      icon.className = "fa-regular fa-copy";
      button.textContent = " Copy";
      button.insertBefore(icon, button.firstChild);
      button.disabled = false;
    }, 2000);
  } catch (error) {
    button.disabled = false;
    console.error("Copy error:", error);
  }
});

// & CopyBtn ============= .
