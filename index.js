document.addEventListener('DOMContentLoaded', function() {
    const bgm1Audio = document.getElementById('bgm1');
    const bgm2Audio = document.getElementById('bgm2');
    const bgm3Audio = document.getElementById('bgm3');

    // Function to start audio playback
    function startAudio() {
        // Play bgm1.mp3 once
        bgm1Audio.play().then(() => {
            console.log('bgm1.mp3 started playing.');

            // Once bgm1 completes, start playing bgm2 and bgm3 in a loop simultaneously
            bgm1Audio.onended = function() {
                console.log('bgm1.mp3 ended. Starting bgm2.mp3 and bgm3.mp3 loop.');
                bgm2Audio.play();
                bgm3Audio.play();
            };
        }).catch(error => {
            console.error('Error playing bgm1.mp3:', error);
        });
    }

    // Call startAudio function when the page is loaded
    startAudio();
});
