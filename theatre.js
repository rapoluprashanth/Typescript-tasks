var seats = [
    { seatNumber: "A1", isAvailable: true },
    { seatNumber: "A2", isAvailable: true },
    { seatNumber: "A3", isAvailable: false },
    { seatNumber: "B1", isAvailable: true },
    { seatNumber: "B2", isAvailable: false },
    { seatNumber: "B3", isAvailable: true },
];
var users = [];
function displayAvailableSeats() {
    console.log("Available Seats:");
    seats.forEach(function (seat) {
        if (seat.isAvailable) {
            console.log(seat.seatNumber);
        }
    });
}
function chooseSeat(user, seatNumber) {
    var seat = seats.find(function (s) { return s.seatNumber === seatNumber; });
    if (seat && seat.isAvailable) {
        seat.isAvailable = false;
        user.chosenSeat = seatNumber;
        console.log("".concat(user.name, " has chosen seat ").concat(seatNumber, "."));
    }
    else {
        console.log("Sorry, seat ".concat(seatNumber, " is not available."));
    }
}
var currentUser = { name: "John Doe" };
users.push(currentUser);
displayAvailableSeats();
chooseSeat(currentUser, "A1");
chooseSeat(currentUser, "A3");
displayAvailableSeats();
