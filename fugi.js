/**
 * Initializes a tooltip with the given options.
 * 
 * @param {Object} options - Tooltip options.
 * @param {string} options.text - The text to display inside the tooltip.
 * @param {string} [options.position='top'] - The position of the tooltip (e.g., 'top', 'bottom', 'left', 'right').
 * @param {number} [options.delay=0] - Delay in milliseconds before showing the tooltip.
 */
function initializeTooltip(options) {
    // Set default values for optional properties
    const { text, position = 'top', delay = 0 } = options;

    // Implementation for initializing the tooltip
    console.log(`Text: ${text}, Position: ${position}, Delay: ${delay}`);
}

// Example usage
initializeTooltip({ text: 'This is a tooltip', position: 'bottom', delay: 200 });
