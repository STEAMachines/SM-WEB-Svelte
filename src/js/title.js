const originalTitle = document.getElementById("title"); // Add a space at the end for smooth scrolling
    let currentIndex = 0;

    function scrollTitle() {
        document.title = originalTitle.substring(currentIndex) + originalTitle.substring(0, currentIndex);
        currentIndex++;
        if (currentIndex > originalTitle.length) {
            currentIndex = 0;
        }
    }

    setInterval(scrollTitle, 250    ); // Adjust the interval (milliseconds) for speed