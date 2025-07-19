document.addEventListener("DOMContentLoaded", () => {
    // FAQ Accordion dropdown behavior
     //const faqs = document.querySelectorAll('.faqbox');
    //faqs.forEach((faq) => {
        //faq.addEventListener('click', () => {
           // const isOpen = faq.classList.contains('open');
//
            //faqs.forEach(f => {
               // f.classList.remove('open');
             //   f.querySelector('.answer')?.remove();
           // });

           // if (!isOpen) {
               // faq.classList.add('open');
           //     const answer = document.createElement('div');
            //    answer.classList.add('answer');
               // answer.innerText = " Tis is the answer to your question. (Customize this text) Tis is the answer to your question. (Customize this text)Tis is the answer to your question. (Customize this text)Tis is the answer to your question. (Customize this text)Tis is the answer to your question. (Customize this text)";
            //    faq.appendChild(answer);
          //  }//
      //  });
  //  });

    // Email validation & match with registration
    const joinBtn = document.querySelector('.btn-red');
    const emailInput = document.querySelector('input[type="text"]');

    if (joinBtn && emailInput) {
        joinBtn.addEventListener('click', () => {
            const email = emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            const storedUser = JSON.parse(localStorage.getItem("streamflixUser"));

            if (!storedUser || storedUser.email !== email) {
                alert('Email not found. Please register first.');
                window.open('register.html', 'Register', 'width=400,height=500');
            } else {
                alert(`Welcome back, ${storedUser.name}!`);
            }
        });
    }

    // Sign In opens registration form
    const signInBtn = document.querySelector('.btn-red-sm');
    if (signInBtn) {
        signInBtn.addEventListener('click', () => {
            window.open('register.html', 'Register', 'width=400,height=500');
        });
    }

    // Optional: Greet user if already registered
    const user = JSON.parse(localStorage.getItem("streamflixUser"));
    if (user) {
        const banner = document.createElement('div');
        banner.textContent = `👋 Welcome, ${user.name}!`;
        banner.style.color = 'white';
        banner.style.textAlign = 'center';
        banner.style.marginTop = '20px';
        document.body.insertBefore(banner, document.body.firstChild);
    }
    function toggleChat() {
        const chatPopup = document.getElementById('chatPopup');
        chatPopup.style.display = chatPopup.style.display === 'block' ? 'none' : 'block';
      }
      
});



