let isOpen = false;

        function openEnvelope() {
            if (isOpen) return;
            
            const wrapper = document.getElementById('envelopeWrapper');
            const video = document.getElementById('videoPlayer');
            
            wrapper.classList.add('open');
            isOpen = true;
            
            // Reproducir el video después de que se abra la carta
            setTimeout(() => {
                video.play().catch(err => {
                    console.log('Autoplay puede estar bloqueado');
                });
            }, 1000);
            
            createFloatingHearts();
        }

        function closeEnvelope() {
            if (!isOpen) return;
            
            const wrapper = document.getElementById('envelopeWrapper');
            const video = document.getElementById('videoPlayer');
            
            wrapper.classList.remove('open');
            isOpen = false;
            
            // Pausar y reiniciar el video
            video.pause();
            video.currentTime = 0;
        }

        function createFloatingHearts() {
            const container = document.getElementById('floatingHearts');
            
            for (let i = 0; i < 10; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.className = 'heart-float';
                    heart.textContent = ['❤️', '💕', '💖', '💗', '💝'][Math.floor(Math.random() * 5)];
                    heart.style.left = Math.random() * 100 + '%';
                    heart.style.animationDelay = Math.random() * 2 + 's';
                    heart.style.fontSize = (Math.random() * 1.2 + 1) + 'rem';
                    container.appendChild(heart);
                    
                    setTimeout(() => {
                        heart.remove();
                    }, 6000);
                }, i * 200);
            }
        }

        // Crear corazones cuando está abierto
        setInterval(() => {
            if (isOpen) {
                createFloatingHearts();
            }
        }, 5000);

        // Corazones de fondo iniciales
        window.addEventListener('load', () => {
            setInterval(() => {
                if (!isOpen) {
                    const container = document.getElementById('floatingHearts');
                    const heart = document.createElement('div');
                    heart.className = 'heart-float';
                    heart.textContent = '💕';
                    heart.style.left = Math.random() * 100 + '%';
                    heart.style.animationDelay = '0s';
                    heart.style.fontSize = '1.2rem';
                    container.appendChild(heart);
                    
                    setTimeout(() => {
                        heart.remove();
                    }, 6000);
                }
            }, 3000);
        });

// Crear estrellas en el fondo
        function createStars() {
            const starsContainer = document.getElementById('stars');
            const numStars = 100;
            
            for (let i = 0; i < numStars; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.width = Math.random() * 3 + 1 + 'px';
                star.style.height = star.style.width;
                star.style.animationDelay = Math.random() * 3 + 's';
                starsContainer.appendChild(star);
            }
        }

        // Crear hierba
        function createGrass() {
            const grassContainer = document.getElementById('grassContainer');
            const numGrass = 50;
            
            for (let i = 0; i < numGrass; i++) {
                const grass = document.createElement('div');
                grass.className = 'grass';
                grass.style.left = Math.random() * 100 + '%';
                grass.style.height = (Math.random() * 30 + 20) + 'px';
                grass.style.animationDelay = Math.random() * 3 + 's';
                grass.style.animationDuration = (Math.random() * 2 + 2) + 's';
                grassContainer.appendChild(grass);
            }
        }

        // Crear planta individual
        function createPlant(index, total) {
            const plant = document.createElement('div');
            plant.className = 'plant';
            
            // Tallo
            const stem = document.createElement('div');
            stem.className = 'stem';
            stem.style.animationDelay = (index * 0.3) + 's';
            
            // Hojas en diferentes alturas
            const leafPositions = [30, 60, 90];
            leafPositions.forEach(pos => {
                const leafLeft = document.createElement('div');
                leafLeft.className = 'leaf left';
                leafLeft.style.top = pos + '%';
                leafLeft.style.animationDelay = (Math.random() * 2) + 's';
                stem.appendChild(leafLeft);
                
                const leafRight = document.createElement('div');
                leafRight.className = 'leaf right';
                leafRight.style.top = (pos + 10) + '%';
                leafRight.style.animationDelay = (Math.random() * 2) + 's';
                stem.appendChild(leafRight);
            });
            
            // Flor
            const flower = document.createElement('div');
            flower.className = 'flower';
            flower.style.animationDelay = (index * 0.2) + 's';
            
            // Pétalos
            for (let i = 0; i < 5; i++) {
                const petal = document.createElement('div');
                petal.className = 'petal';
                petal.style.animationDelay = (i * 0.1) + 's';
                flower.appendChild(petal);
            }
            
            // Centro de la flor
            const center = document.createElement('div');
            center.className = 'flower-center';
            flower.appendChild(center);
            
            stem.appendChild(flower);
            plant.appendChild(stem);
            
            // Partículas brillantes
            createParticles(plant, index);
            
            // Interactividad al hover
            plant.addEventListener('mouseenter', () => {
                // Aumentar brillo temporalmente
                const leaves = plant.querySelectorAll('.leaf');
                const petals = plant.querySelectorAll('.petal');
                
                leaves.forEach(leaf => {
                    leaf.style.filter = 'brightness(1.5)';
                });
                
                petals.forEach(petal => {
                    petal.style.filter = 'brightness(1.5)';
                });
                
                // Crear más partículas
                createBurstParticles(plant);
            });
            
            plant.addEventListener('mouseleave', () => {
                const leaves = plant.querySelectorAll('.leaf');
                const petals = plant.querySelectorAll('.petal');
                
                leaves.forEach(leaf => {
                    leaf.style.filter = 'brightness(1)';
                });
                
                petals.forEach(petal => {
                    petal.style.filter = 'brightness(1)';
                });
            });
            
            return plant;
        }

        // Crear partículas brillantes alrededor de la planta
        function createParticles(plant, index) {
            setInterval(() => {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = (Math.random() * 60 - 30) + 'px';
                particle.style.bottom = Math.random() * 100 + 'px';
                particle.style.animationDuration = (Math.random() * 2 + 3) + 's';
                plant.appendChild(particle);
                
                setTimeout(() => {
                    particle.remove();
                }, 4000);
            }, 1000 + Math.random() * 2000);
        }

        // Crear ráfaga de partículas al hover
        function createBurstParticles(plant) {
            for (let i = 0; i < 10; i++) {
                setTimeout(() => {
                    const particle = document.createElement('div');
                    particle.className = 'particle';
                    particle.style.left = (Math.random() * 80 - 40) + 'px';
                    particle.style.bottom = Math.random() * 120 + 'px';
                    particle.style.animationDuration = (Math.random() + 1) + 's';
                    plant.appendChild(particle);
                    
                    setTimeout(() => {
                        particle.remove();
                    }, 2000);
                }, i * 50);
            }
        }

        // Inicializar escena
        function init() {
            createStars();
            createGrass();
            
            const plantsContainer = document.getElementById('plants');
            const numPlants = 5;
            
            for (let i = 0; i < numPlants; i++) {
                const plant = createPlant(i, numPlants);
                plantsContainer.appendChild(plant);
            }
        }

        // Ejecutar cuando cargue la página
        window.addEventListener('load', init);
/*carta dos */
function openFlowerEnvelope() {
    const envelope = document.getElementById("flowerEnvelope");
    const video = document.getElementById("flowerVideo");

    envelope.classList.add("open");
    video.currentTime = 0;
    video.play();
}

function closeFlowerEnvelope() {
    const envelope = document.getElementById("flowerEnvelope");
    const video = document.getElementById("flowerVideo");

    envelope.classList.remove("open");
    video.pause();
}
