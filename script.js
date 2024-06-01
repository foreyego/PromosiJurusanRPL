let currentContainer = 1;
    const totalContainers = 3;

    function scrollToNext() {
        currentContainer++;
        if (currentContainer > totalContainers) {
            currentContainer = 1;
        }

        // Sembunyikan semua kontainer
        document.querySelectorAll('.container').forEach(container => {
            container.style.display = 'none';
        });

        // Tampilkan kontainer yang sesuai
        document.getElementById(`container${currentContainer}`).style.display = 'flex';
    }

