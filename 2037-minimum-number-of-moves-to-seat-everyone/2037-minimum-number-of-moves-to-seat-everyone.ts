function minMovesToSeat(seats: number[], students: number[]): number {
    let count = 0;
    const sortedSeats = [...seats].sort((a, b) => a - b);
    const sortedStudents = [...students].sort((a, b) => a - b);
    sortedSeats.forEach((ele, idx) => {
        const val = Math.abs(ele - sortedStudents[idx]);
        if(val) {
            count = val + count;
        }
    })
    return count;
};