import { useEffect, useRef } from 'react';

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    const currentRef = contactRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={contactRef}
      className="opacity-0 transform translate-y-10 transition-all duration-1000 ease-in-out flex flex-col items-center justify-center text-center p-5 bg-customBackground"
    >
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="text-xl mb-8 max-w-2xl">If you have any questions, feel free to reach out.</p>
      <div className="flex flex-col items-center space-y-4">
        <div>
          <p className="text-lg">
            Email:{' '}
            <a href="mailto:joshuafoti64@gmail.com" className="text-blue-500 hover:underline">
              joshuafoti64@gmail.com
            </a>
          </p>
        </div>
        <div>
          <p className="text-lg">
            Phone:{' '}
            <a href="tel:+14042100657" className="text-blue-500 hover:underline">
              (404) 210-0657
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
