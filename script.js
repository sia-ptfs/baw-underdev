

document.addEventListener('DOMContentLoaded', function () {
    console.log('ok the page loaded i think');
    
    
    const highlightsBtn = document.getElementById("highlightsToggle");
    const highlightsSection = document.getElementById("highlightsSection"); 
    const aboutBtn = document.getElementById("aboutToggle");
    const servicesBtn = document.getElementById("servicesToggle");
    const staffBtn = document.getElementById("staffToggle");
    const homeBtn = document.getElementById("homeToggle");
    const bookFlightBtn = document.getElementById("bookFlightToggle");

    const aboutSection = document.getElementById("aboutSection");
    const servicesSection = document.getElementById("servicesSection");
    const staffSection = document.getElementById("staffSection");
    const bookingSection = document.getElementById("bookingSection");
    const heroSection = document.getElementById("home");
    const featuresSection = document.getElementById("features");

    const aboutDropdownItem = document.getElementById("aboutDropdownItem");
    const servicesDropdownItem = document.getElementById("servicesDropdownItem");
    const staffDropdownItem = document.getElementById("staffDropdownItem");

    const aboutDropdown = document.getElementById("aboutDropdown");
    const servicesDropdown = document.getElementById("servicesDropdown");
    const staffDropdown = document.getElementById("staffDropdown");
    const adminBtn = document.getElementById("adminToggle");
    const adminSection = document.getElementById("adminSection");
    const navToghgle = document.getElementById("navToggle"); 
    const navLinks = document.querySelector(".nav-links");

    
    const whoSelect = document.getElementById("whoSelect");
    const meField = document.getElementById("meField");
    const otherField = document.getElementById("otherField");
    const flightSelect = document.getElementById("flightSelect");
    const classSelect = document.getElementById("classSelect");
    const myRoblox = document.getElementById("myRoblox");
    const otherRoblox = document.getElementById("otherRoblox");
    const discordId = document.getElementById("discordId");
    const bookingForm = document.getElementById("bookingForm");
    const bookingResult = document.getElementById("bookingResult");

    
    function hideHero() {
        heroSection.classList.add("hidden");
    }
    
    function showHero() {
        heroSection.classList.remove("hidden");
    }

    function closeAllSections() {
        
        aboutSection.classList.remove("open");
        servicesSection.classList.remove("open");
        staffSection.classList.remove("open");
        bookingSection.classList.remove("open");
        aboutDropdownItem.classList.remove("open");
        servicesDropdownItem.classList.remove("open");
        staffDropdownItem.classList.remove("open");
        adminSection.classList.remove("open");
        highlightsSection.classList.remove("open");
    }

    
    navToghgle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });

    
    highlightsBtn.addEventListener("click", e => {
        e.preventDefault();
        closeAllSections();
        hideHero();
        featuresSection.classList.add("hidden");
        highlightsSection.classList.add("open");
        setTimeout(() => highlightsSection.scrollIntoView({ behavior: "smooth" }), 120);
    });

    
    aboutBtn.addEventListener("click", e => {
        e.preventDefault();
        aboutDropdownItem.classList.toggle("open");
        servicesDropdownItem.classList.remove("open");
        staffDropdownItem.classList.remove("open");
    });

    servicesBtn.addEventListener("click", e => {
        e.preventDefault();
        servicesDropdownItem.classList.toggle("open");
        aboutDropdownItem.classList.remove("open");
        staffDropdownItem.classList.remove("open");
    });

    staffBtn.addEventListener("click", e => {
        e.preventDefault();
        staffDropdownItem.classList.toggle("open");
        aboutDropdownItem.classList.remove("open");
        servicesDropdownItem.classList.remove("open");
    });

    // BOOK FLIGHT BUTTON
    bookFlightBtn.addEventListener("click", e => {
        e.preventDefault();
        closeAllSections();
        hideHero();
        featuresSection.classList.add("hidden");
        bookingSection.classList.add("open");
        setTimeout(() => bookingSection.scrollIntoView({ behavior: "smooth" }), 120);
    });

    
    homeBtn.addEventListener("click", e => {
        e.preventDefault();
        closeAllSections();
        featuresSection.classList.remove("hidden");
        showHero();
        heroSection.scrollIntoView({ behavior: "smooth" });
    });

    
    document.addEventListener("click", e => {
        if (!aboutDropdownItem.contains(e.target)) aboutDropdownItem.classList.remove("open");
        if (!servicesDropdownItem.contains(e.target)) servicesDropdownItem.classList.remove("open");
        if (!staffDropdownItem.contains(e.target)) staffDropdownItem.classList.remove("open");
    });

    // ABOUT SECTION LINKS -
    aboutDropdown.querySelectorAll('a[data-section]').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            closeAllSections();
            hideHero();
            featuresSection.classList.add('hidden');
            aboutSection.classList.add('open');
            
            document.querySelectorAll('.about-content').forEach(c => c.classList.add('hidden'));
            
            const section = e.target.getAttribute('data-section');
            
            if (section === 'summary') document.getElementById('summaryContent').classList.remove('hidden');
            if (section === 'history') document.getElementById('historyContent').classList.remove('hidden');
            
            aboutDropdownItem.classList.remove('open');
            setTimeout(() => aboutSection.scrollIntoView({ behavior: 'smooth' }), 120);
        });
    });

    
    servicesDropdown.querySelectorAll('a[data-service]').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            closeAllSections();
            hideHero();
            featuresSection.classList.add('hidden');
            servicesSection.classList.add('open');
            
            document.querySelectorAll('.service-content').forEach(c => c.classList.add('hidden'));
            
            const service = e.target.getAttribute('data-service');
            
            if (service === 'experience') document.getElementById('experienceContent').classList.remove('hidden');
            if (service === 'classes') document.getElementById('classesContent').classList.remove('hidden');
            if (service === 'crew') document.getElementById('crewContent').classList.remove('hidden');
            if (service === 'community') document.getElementById('communityContent').classList.remove('hidden');
            if (service === 'executive') document.getElementById('executiveContent').classList.remove('hidden');
            if (service === 'professional') document.getElementById('professionalContent').classList.remove('hidden');
            
            servicesDropdownItem.classList.remove('open');
            setTimeout(() => servicesSection.scrollIntoView({ behavior: 'smooth' }), 120);
        });
    });

    
    staffDropdown.querySelectorAll('a[data-staff]').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            closeAllSections();
            hideHero();
            featuresSection.classList.add('hidden');
            staffSection.classList.add('open');
            
            document.querySelectorAll('.staff-content').forEach(c => c.classList.add('hidden'));
            
            const staff = e.target.getAttribute('data-staff');
            if (staff === 'senior') document.getElementById('seniorContent').classList.remove('hidden');
            if (staff === 'board') document.getElementById('boardContent').classList.remove('hidden');
            if (staff === 'moderation') document.getElementById('moderationContent').classList.remove('hidden');
            
            staffDropdownItem.classList.remove('open');
            setTimeout(() => staffSection.scrollIntoView({ behavior: 'smooth' }), 120);
        });
    });

    
    adminBtn.addEventListener("click", e => {
        e.preventDefault();
        closeAllSections();
        hideHero();
        featuresSection.classList.add("hidden");
        adminSection.classList.add("open");
        setTimeout(() => adminSection.scrollIntoView({ behavior: "smooth" }), 120);
    });

    
    whoSelect.addEventListener("change", () => {
        meField.classList.add("hidden");
        otherField.classList.add("hidden");

        
        if (whoSelect.value === "me") meField.classList.remove("hidden");
        if (whoSelect.value === "other") otherField.classList.remove("hidden");
    });

    
    bookingForm.addEventListener("submit", e => {
        e.preventDefault();
        console.log('form submitted');

        
        if (!flightSelect.value || !classSelect.value || !whoSelect.value) {
            alert("Please complete all required fields.");
            return;
        }

        let robloxUser = "";
        let discordUser = "N/A";

        
        if (whoSelect.value === "me") {
            if (!/^[a-zA-Z0-9_]{3,20}$/.test(myRoblox.value)) {
                alert("Invalid Roblox username.");
                return;
            }
            robloxUser = myRoblox.value;
        }

        if (whoSelect.value === "other") {
            // basic confirmation 
            if (!/^\d{17,20}$/.test(discordId.value)) {
                alert("Invalid Discord User ID.");
                return;
            }
            if (!/^[a-zA-Z0-9_]{3,20}$/.test(otherRoblox.value)) {
                alert("Invalid Roblox username.");
                return;
            }
            robloxUser = otherRoblox.value;
            discordUser = discordId.value;
        }

        // confirm
        const [route, aircraft] = flightSelect.value.split("|");
        const flightNumber = "BA" + Math.floor(1000 + Math.random() * 9000);
        const bookingCode = Math.random().toString(36).substring(2, 8).toUpperCase();
        const departureTime = new Date().toLocaleTimeString();

        
        bookingResult.innerHTML = `
            <h3>Booking Confirmed</h3>
            <p><b>Route:</b> ${route}</p>
            <p><b>Aircraft:</b> ${aircraft}</p>
            <p><b>Departure:</b> ${departureTime}</p>
            <p><b>Cabin Class:</b> ${classSelect.value}</p>
            <p><b>Flight Number:</b> ${flightNumber}</p>
            <p><b>Booking Code:</b> ${bookingCode}</p>
        `;
        bookingResult.classList.remove("hidden");

        // send to google sheets (still fixing )
        fetch("https://script.google.com/macros/s/AKfycbwS8t-lsIwBMxnsuJzl9aUcmbG3u97dxBtXd5cf2FLH8KtZe3s6VL13ZTLG8kc1BYSn/exec", {
            method: "POST",
            body: JSON.stringify({
                route,
                aircraft,
                cabin: classSelect.value,
                roblox: robloxUser,
                discord: discordUser,
                flightNumber,
                bookingCode,
                time: departureTime
            })
        }).then(r => console.log('sheets worked maybe')).catch(err => console.log('sheets probably failed lol', err));
    });

});



let flights = JSON.parse(localStorage.getItem("flights")) || [
  { route: "LHR → JFK", aircraft: "B777", dep: "18:30", arr: "22:10" },
  { route: "LHR → DXB", aircraft: "A380", dep: "14:00", arr: "23:00" }
];

const flightSelect = document.getElementById("flightSelect");
const flightList = document.getElementById("flightList");

function saveFlights() {
  localStorage.setItem("flights", JSON.stringify(flights));
  renderFlights();
  updateBookingFlights();
}

function renderFlights() {
  flightList.innerHTML = "";
  flights.forEach((f, i) => {
    flightList.innerHTML += `
      <div class="admin-flight">
        <span>${f.route} (${f.aircraft}) | ${f.dep} → ${f.arr}</span>
        <button onclick="deleteFlight(${i})">Delete</button>
      </div>
    `;
  });
}

function updateBookingFlights() {
  flightSelect.innerHTML = `<option value="">Choose flight</option>`;
  flights.forEach(f => {
    flightSelect.innerHTML += `
      <option value="${f.route}|${f.aircraft}|${f.dep}|${f.arr}">
        ${f.route} (${f.aircraft}) | ${f.dep} → ${f.arr}
      </option>
    `;
  });
}

function deleteFlight(index) {
  flights.splice(index, 1);
  saveFlights();
}

document.getElementById("addFlightBtn").addEventListener("click", () => {
  const route = document.getElementById("adminRoute").value;
  const aircraft = document.getElementById("adminAircraft").value;
  const dep = document.getElementById("adminDeparture").value;
  const arr = document.getElementById("adminArrival").value;

  
  if (!route || !aircraft || !dep || !arr) {
    alert("Fill all fields!");
    return;
  }

  flights.push({ route, aircraft, dep, arr });
  saveFlights();
  
  
  document.getElementById("adminRoute").value = "";
  document.getElementById("adminAircraft").value = "";
  document.getElementById("adminDeparture").value = "";
  document.getElementById("adminArrival").value = "";
});

renderFlights();
updateBookingFlights();



let highlights = JSON.parse(localStorage.getItem("highlights")) || [];

const highlightsCarousel = document.getElementById("highlightsCarousel");
const highlightsList = document.getElementById("highlightsList");
let currentSlide = 0; // which slide we on

function saveHighlights() {
    localStorage.setItem("highlights", JSON.stringify(highlights));
    renderHighlights();
    renderAdminHighlights();
}

function renderHighlights() {
    // if no highlights show placeholder
    if (highlights.length === 0) {
        highlightsCarousel.innerHTML = `
            <div class="highlight-item active">
                <img src="https://via.placeholder.com/800x400/0b1f3a/ffffff?text=No+Highlights+Yet" alt="Highlight">
                <p>No highlights added yet. Admins can add highlights from the Admin Panel.</p>
            </div>
        `;
        return;
    }

    highlightsCarousel.innerHTML = "";
    highlights.forEach((h, i) => {
        // add active class to current slide for animation
        highlightsCarousel.innerHTML += `
            <div class="highlight-item ${i === currentSlide ? 'active' : ''}">
                <img src="${h.image}" alt="Flight Highlight">
                <p>${h.text}</p>
            </div>
        `;
    });
}

function renderAdminHighlights() {
    highlightsList.innerHTML = "";
    highlights.forEach((h, i) => {
        highlightsList.innerHTML += `
            <div class="highlight-admin-item">
                <div style="display: flex; align-items: center; flex: 1;">
                    <img src="${h.image}" alt="Highlight">
                    <span>${h.text.substring(0, 50)}...</span>
                </div>
                <button onclick="deleteHighlight(${i})">Delete</button>
            </div>
        `;
    });
}

function deleteHighlight(index) {
    highlights.splice(index, 1);
    if (currentSlide >= highlights.length) currentSlide = 0;
    saveHighlights();
}

document.getElementById("addHighlightBtn").addEventListener("click", () => {
    const image = document.getElementById("highlightImageUrl").value;
    const text = document.getElementById("highlightText").value;

    if (!image || !text) {
        alert("Please fill all fields!");
        return;
    }

    highlights.push({ image, text });
    saveHighlights();

    // clear inputs
    document.getElementById("highlightImageUrl").value = "";
    document.getElementById("highlightText").value = "";
});

// carousel navigation buttons
document.getElementById("prevBtn").addEventListener("click", () => {
    if (highlights.length === 0) return;
    // go backwards but wrap around
    currentSlide = (currentSlide - 1 + highlights.length) % highlights.length;
    renderHighlights();
});

document.getElementById("nextBtn").addEventListener("click", () => {
    if (highlights.length === 0) return;
    // go forwards and wrap around
    currentSlide = (currentSlide + 1) % highlights.length;
    renderHighlights();
});

renderHighlights();
renderAdminHighlights();