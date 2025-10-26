// Event data
const events = [
  {
    id: 1,
    name: "Cultural Fest",
    date: "2024-09-20",
    time: "6:00 PM",
    place: "City Hall",
    description: "A cultural fest to showcase the talents of local artists"
  },
  {
    id: 2,
    name: "Award Ceremony",
    date: "2024-09-25",
    time: "8:00 PM",
    place: "Grand Ballroom",
    description: "An award ceremony to recognize outstanding achievements"
  },
  {
    id: 3,
    name: "Team Building Event",
    date: "2024-09-22",
    time: "9:00 AM",
    place: "Outdoor Activities Center",
    description: "A team building event to foster collaboration and teamwork"
  }
];

// Generate event list
const eventList = document.getElementById("event-list");
events.forEach(event => {
  const eventItem = document.createElement("li");
  eventItem.classList.add("event-item");
  eventItem.innerHTML = `
    <h3>${event.name}</h3>
    <p>Date: ${event.date}</p>
    <p>Time: ${event.time}</p>
    <p>Place: ${event.place}</p>
    <button>View Details</button>
  `;
  eventList.appendChild(eventItem);

  // Add event listener to view details button
  eventItem.querySelector("button").addEventListener("click", () => {
    showEventDetails(event);
  });
});

// Show event details
function showEventDetails(event) {
  const eventDetails = document.getElementById("event-details");
  eventDetails.innerHTML = `
    <h2>${event.name}</h2>
    <p>Date: ${event.date}</p>
    <p>Time: ${event.time}</p>
    <p>Place: ${event.place}</p>
    <p>${event.description}</p>
    <button id="book-now-btn">Book Now</button>
  `;

  // Add event listener to book now button
  document.getElementById("book-now-btn").addEventListener("click", () => {
    showBookingForm(event);
  });
}

// Show booking form
function showBookingForm(event) {
  const bookingForm = document.getElementById("booking-form");
  bookingForm.style.display = "block";

  // Add event listener to booking form
  document.getElementById("booking-form-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    showConfirmationMessage(event, name, email, phone);
  });
}

// Show confirmation message
function showConfirmationMessage(event, name, email, phone) {
  const confirmationMessage = document.getElementById("confirmation-message");
  confirmationMessage.innerHTML = `
    <h2>Booking Confirmation</h2>
    <p>Event: ${event.name}</p>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
  `;
  confirmationMessage.style.display = "block";
}
