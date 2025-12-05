document.addEventListener("DOMContentLoaded", function () {
    let photos = ["images/owner.webp", "images/girl1.webp", "images/man.webp", "images/girl2.webp"];
    let names = ["Alex Thompson", "Maria Garcia", "David Kim", "Lisa Anderson"];
    let roles = ["Founder & CEO", "Head of Product", "Lead Developer", "Customer Success"];
    let descs = [
        "Former catering manager with 15 years of industry experience",
        "Passionate about creating intuitive software solutions",
        "Building robust systems that scale with your business",
        "Ensuring every client gets the most out of CaterGo"
    ];

    let currentIndex = 0;

    const teamImg = document.getElementById("team-img");
    const teamName = document.getElementById("team-name");
    const teamRole = document.getElementById("team-role");
    const teamDesc = document.getElementById("team-desc");

    if (teamImg && teamName && teamRole && teamDesc) {
        function updateCard() {
            teamImg.src = photos[currentIndex];
            teamName.textContent = names[currentIndex];
            teamRole.textContent = roles[currentIndex];
            teamDesc.textContent = descs[currentIndex];
        }

        function nextMember() {
            currentIndex++;
            if (currentIndex >= photos.length) {
                currentIndex = 0;
            }
            updateCard();
        }

        function prevMember() {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = photos.length - 1;
            }
            updateCard();
        }

        function displayAllMembers() {
            let i = 0;
            while (i < photos.length) {
                console.log('Member ' + (i + 1) + ': ' + names[i] + ' - ' + roles[i]);
                i++;
            }
        }

        const nextBtn = document.getElementById("next-btn");
        const prevBtn = document.getElementById("prev-btn");

        nextBtn.addEventListener("click", function (e) {
            e.preventDefault();
            nextMember();
        });

        prevBtn.addEventListener("click", function (e) {
            e.preventDefault();
            prevMember();
        });

        updateCard();

        displayAllMembers();
    }

    var hamburgerBtn = document.querySelector('#hamburgerBtn');
    var closeBtn = document.querySelector('#closeBtn');
    var mobileMenu = document.querySelector('#mobileMenu');

    if (hamburgerBtn && closeBtn && mobileMenu) {
        function openMenu() {
            mobileMenu.classList.add('open');
        }

        function closeMenu() {
            mobileMenu.classList.remove('open');
        }

        hamburgerBtn.addEventListener('click', openMenu);
        closeBtn.addEventListener('click', closeMenu);

        mobileMenu.addEventListener('click', function (event) {
            if (event.target === mobileMenu) {
                closeMenu();
            }
        });
    }
});