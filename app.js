const atom = document.querySelector('.atom');
const ticket = document.querySelector('.ticket');
const button = document.querySelector('#draw-button');

button.addEventListener('click', () => {
    // The atom is spinning by default
    
    // Delay for the ticket pop-out animation
    setTimeout(() => {
        // Hide the atom
        atom.classList.add('hidden');
        
        // Show the ticket at the center
        ticket.classList.add('show');
    }, 3000); // Delay matches the spin duration
});
