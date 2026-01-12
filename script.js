/**
 * Birthday Card Interactive Script
 * Handles the 3D folding card animations, interactions, and audio control
 * 
 * Card States:
 * - 0 (closed): Cover front visible
 * - 1 (open): Inside left + Inside right visible (book is open)
 * - 2 (back): Cover back visible
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // ==========================================================================
    // Element Selection
    // ==========================================================================
    const cardContainer = document.querySelector('.card-container');
    const cardBody = document.querySelector('.card-body');
    const coverFront = document.querySelector('.cover-front');
    const insideLeft = document.querySelector('.inside-left');
    const insideRight = document.querySelector('.inside-right');
    const coverBack = document.querySelector('.cover-back');
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');

    // ==========================================================================
    // State Management
    // ==========================================================================
    // Card states: 0 = closed, 1 = open (showing inside pages), 2 = back cover
    let cardState = 0;
    let isMusicPlaying = false;
    let hasUserInteracted = false;

    // ==========================================================================
    // Initialization
    // ==========================================================================
    
    /**
     * Initialize the card application
     */
    function init() {
        // Verify all elements exist
        if (!cardBody) {
            console.error('Card body element not found');
            return;
        }
        
        if (!musicToggle) {
            console.warn('Music toggle button not found');
        }
        
        if (!bgMusic) {
            console.warn('Audio element not found');
        }

        // Set up event listeners
        setupEventListeners();
        
        // Log successful initialization
        console.log('🎂 Birthday card initialized successfully');
    }

    /**
     * Set up all event listeners
     */
    function setupEventListeners() {
        // Individual click handlers for each card face
        if (coverFront) {
            coverFront.addEventListener('click', handleCoverFrontClick);
        }
        
        if (insideLeft) {
            insideLeft.addEventListener('click', handleInsideLeftClick);
        }
        
        if (insideRight) {
            insideRight.addEventListener('click', handleInsideRightClick);
        }
        
        if (coverBack) {
            coverBack.addEventListener('click', handleCoverBackClick);
        }

        // Music toggle button
        if (musicToggle) {
            musicToggle.addEventListener('click', handleMusicToggle);
        }

        // Handle audio events
        if (bgMusic) {
            bgMusic.addEventListener('play', () => {
                isMusicPlaying = true;
                updateMusicButtonState();
            });
            
            bgMusic.addEventListener('pause', () => {
                isMusicPlaying = false;
                updateMusicButtonState();
            });
            
            bgMusic.addEventListener('ended', () => {
                isMusicPlaying = false;
                updateMusicButtonState();
            });
        }

        // Keyboard accessibility
        document.addEventListener('keydown', handleKeyboard);
    }

    // ==========================================================================
    // Card State Management
    // ==========================================================================

    /**
     * Set the card to a specific state
     * @param {number} newState - 0: closed, 1: open, 2: back
     */
    function setCardState(newState) {
        const oldState = cardState;
        cardState = newState;
        
        // Remove all state classes
        cardBody.classList.remove('open', 'show-back');
        
        // Apply appropriate classes based on state
        switch (cardState) {
            case 0: // Closed - show cover front
                console.log('📕 Card closed - showing cover');
                break;
            case 1: // Open - show inside pages
                cardBody.classList.add('open');
                console.log('📖 Card opened - showing inside pages');
                break;
            case 2: // Back - show cover back
                cardBody.classList.add('open', 'show-back');
                console.log('📚 Card flipped - showing back cover');
                break;
        }
        
    }

    // ==========================================================================
    // Click Handlers for Each Card Face
    // ==========================================================================

    /**
     * Handle click on cover front
     * Action: Open the card to show inside pages
     */
    function handleCoverFrontClick(event) {
        event.stopPropagation();
        markInteraction();
        
        if (cardState === 0) {
            setCardState(1); // Open to inside pages
        }
    }

    /**
     * Handle click on inside left page
     * Action: Close the card back to cover front
     */
    function handleInsideLeftClick(event) {
        event.stopPropagation();
        markInteraction();
        
        if (cardState === 1) {
            setCardState(0); // Close to cover front
        }
    }

    /**
     * Handle click on inside right page
     * Action: Flip to show back cover
     */
    function handleInsideRightClick(event) {
        event.stopPropagation();
        markInteraction();
        
        if (cardState === 1) {
            setCardState(2); // Flip to back cover
        }
    }

    /**
     * Handle click on cover back
     * Action: Return to inside pages
     */
    function handleCoverBackClick(event) {
        event.stopPropagation();
        markInteraction();
        
        if (cardState === 2) {
            setCardState(1); // Return to inside pages
        }
    }

    /**
     * Mark that user has interacted and hide hint
     */
    function markInteraction() {
        hasUserInteracted = true;
    }

    // ==========================================================================
    // Music Control
    // ==========================================================================

    /**
     * Handle music toggle button click
     * @param {Event} event - Click event
     */
    function handleMusicToggle(event) {
        // Prevent event from reaching the card
        event.stopPropagation();
        
        // Mark user interaction
        hasUserInteracted = true;
        
        // Toggle music
        toggleMusic();
    }

    /**
     * Toggle music play/pause
     */
    function toggleMusic() {
        if (!bgMusic) {
            console.warn('Audio element not available');
            return;
        }

        if (isMusicPlaying) {
            pauseMusic();
        } else {
            attemptPlayMusic();
        }
    }

    /**
     * Attempt to play music (handles autoplay policies)
     */
    function attemptPlayMusic() {
        if (!bgMusic) return;

        // Try to play - may be blocked by autoplay policies
        const playPromise = bgMusic.play();

        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    console.log('🎵 Music started playing');
                    isMusicPlaying = true;
                    updateMusicButtonState();
                })
                .catch((error) => {
                    console.warn('🔇 Autoplay blocked:', error.message);
                    // Music will play on next user interaction
                    isMusicPlaying = false;
                    updateMusicButtonState();
                });
        }
    }

    /**
     * Pause the music
     */
    function pauseMusic() {
        if (!bgMusic) return;
        
        bgMusic.pause();
        console.log('⏸️ Music paused');
        isMusicPlaying = false;
        updateMusicButtonState();
    }

    /**
     * Update the music button visual state
     */
    function updateMusicButtonState() {
        if (!musicToggle) return;

        if (isMusicPlaying) {
            musicToggle.classList.add('playing');
            musicToggle.setAttribute('aria-label', 'Pause background music');
        } else {
            musicToggle.classList.remove('playing');
            musicToggle.setAttribute('aria-label', 'Play background music');
        }
    }

    // ==========================================================================
    // Keyboard Accessibility
    // ==========================================================================

    /**
     * Handle keyboard navigation
     * @param {KeyboardEvent} event - Keyboard event
     */
    function handleKeyboard(event) {
        switch (event.key) {
            case 'ArrowRight':
                // Go forward through states
                event.preventDefault();
                hasUserInteracted = true;
                if (cardState < 2) {
                    setCardState(cardState + 1);
                }
                break;
            case 'ArrowLeft':
                // Go backward through states
                event.preventDefault();
                hasUserInteracted = true;
                if (cardState > 0) {
                    setCardState(cardState - 1);
                }
                break;
            case 'Enter':
            case ' ':
                // Toggle between closed and open
                event.preventDefault();
                hasUserInteracted = true;
                if (cardState === 0) {
                    setCardState(1);
                } else {
                    setCardState(0);
                }
                break;
            case 'm':
            case 'M':
                // Toggle music with 'M' key
                event.preventDefault();
                hasUserInteracted = true;
                toggleMusic();
                break;
            case 'Escape':
                // Close card with Escape
                if (cardState !== 0) {
                    setCardState(0);
                }
                break;
        }
    }

    // ==========================================================================
    // Start Application
    // ==========================================================================
    init();
});
