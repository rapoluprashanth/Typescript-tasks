interface Seat {
    seatNumber: string;
    isAvailable: boolean; 
}

interface User {
    name: string;
    chosenSeat?: string; 
}

const seats: Seat[] = [
    { seatNumber: "A1", isAvailable: true },
    { seatNumber: "A2", isAvailable: true },
    { seatNumber: "A3", isAvailable: false },
    { seatNumber: "B1", isAvailable: true },
    { seatNumber: "B2", isAvailable: false },
    { seatNumber: "B3", isAvailable: true },
];

const users: User[] = [];

function displayAvailableSeats() {
    console.log("Available Seats:");
    seats.forEach(seat => {
        if (seat.isAvailable) {
            console.log(seat.seatNumber);
        }
    });
}


function chooseSeat(user: User, seatNumber: string) {
    const seat = seats.find(s => s.seatNumber === seatNumber);
    if (seat && seat.isAvailable) {
        seat.isAvailable = false; 
        user.chosenSeat = seatNumber;
        console.log(`${user.name} has chosen seat ${seatNumber}.`);
    } else {
        console.log(`Sorry, seat ${seatNumber} is not available.`);
    }
}


const currentUser: User = { name: "John Doe" };
users.push(currentUser);


displayAvailableSeats();


chooseSeat(currentUser, "A1");
chooseSeat(currentUser, "A3");


displayAvailableSeats();
