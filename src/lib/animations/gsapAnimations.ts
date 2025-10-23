import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registra ScrollTrigger si lo usas
gsap.registerPlugin(ScrollTrigger);

// Función para animar la primera imagen (fade in y slide desde la izquierda al hacer scroll)
export const animateFirstImage = (imageRef: HTMLElement) => {
  gsap.fromTo(imageRef,
    { opacity: 0, x: -100, scale: 0.9 },
    {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: imageRef,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    }
  );
};

// Función para animar la segunda imagen (fade in y slide desde la derecha al hacer scroll)
export const animateSecondImage = (imageRef: HTMLElement) => {
  gsap.fromTo(imageRef,
    { opacity: 0, x: 100, scale: 0.9 },
    {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: imageRef,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    }
  );
};

// Función para animar el texto de la primera sección (fade in y slide desde la derecha)
export const animateFirstText = (textRef: HTMLElement) => {
  gsap.fromTo(textRef,
    { opacity: 0, x: 100 },
    {
      opacity: 1,
      x: 0,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: textRef,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    }
  );
};

// Función para animar el texto de la segunda sección (fade in y slide desde la izquierda)
export const animateSecondText = (textRef: HTMLElement) => {
  gsap.fromTo(textRef,
    { opacity: 0, x: -100 },
    {
      opacity: 1,
      x: 0,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: textRef,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    }
  );
};