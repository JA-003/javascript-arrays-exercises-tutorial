let parking_state = [
	[1,1,1],
	[0,0,0],
	[1,1,2]
]
  
function getParkingLotState(arrayOfParkingState) {
	let notSlot = 0;
	let availableSlots = 0;
	let occupiedSlots = 0;

	for (row of arrayOfParkingState) {
		for (state of row) {
			if (state == 0) {notSlot++}
			else if (state == 1) {occupiedSlots++}
			else {availableSlots++}
		}
	}

	let totalSlots = availableSlots + occupiedSlots;

	let State = {
		"availableSlots": availableSlots,
		"occupiedSlots": occupiedSlots,
		"totalSlots": totalSlots
	}
	return State;
}

console.log(getParkingLotState(parking_state));