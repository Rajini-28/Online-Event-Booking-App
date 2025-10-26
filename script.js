// Event data
const events = [
  {
    id: 1,
    name: "Cultural Fest",
    date: "2025-10-31",
    time: "6:00 PM",
    place: "City Hall",
    description: "A cultural fest to showcase the talents of local artists",
    booked: false
  },
  {
    id: 2,
    name: "Award Ceremony",
    date: "2025-12-25",
    time: "8:00 PM",
    place: "Grand Ballroom",
    description: "An award ceremony to recognize outstanding achievements",
    booked: false
  },
  {
    id: 3,
    name: "Team Building Event",
    date: "2025-10-28",
    time: "9:00 AM",
    place: "Outdoor Activities Center",
    description: "A team building event to foster collaboration and teamwork",
    booked: false
  }
];

let bookedEventsCount = 0;
let notBookedEventsCount = events.length;

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
    <button class="book-now-btn" style="background-color: #007bff; color: #fff; border: none; padding: 10px 20px; border-radius: 5px;">View Details</button>
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
    <h2 style="color: #007bff;">${event.name}</h2>
    <p>Date: ${event.date}</p>
    <p>Time: ${event.time}</p>
    <p>Place: ${event.place}</p>
    <p>${event.description}</p>
    <button class="book-now-btn" style="background-color: #007bff; color: #fff; border: none; padding: 10px 20px; border-radius: 5px;">Book Now</button>
  `;

  // Add event listener to book now button
  eventDetails.querySelector("button").addEventListener("click", () => {
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
    event.booked = true;
    bookedEventsCount++;
    notBookedEventsCount--;
    document.getElementById("booked-events-count").textContent = bookedEventsCount;
    document.getElementById("not-booked-events-count").textContent = notBookedEventsCount;
    showConfirmationMessage(event, name, email, phone);
  });
}

// Show confirmation message
function showConfirmationMessage(event, name, email, phone) {
  const confirmationMessage = document.getElementById("confirmation-message");
  confirmationMessage.innerHTML = `
    <h2 style="color: #007bff;">Booking Confirmation</h2>
    <p>Event: ${event.name}</p>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
  `;
  confirmationMessage.style.display = "block";
}

document.getElementById("booked-events-count").textContent = bookedEventsCount;
document.getElementById("not-booked-events-count").textContent = notBookedEventsCount;
