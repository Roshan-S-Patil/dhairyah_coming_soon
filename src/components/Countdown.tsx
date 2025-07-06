
import { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set launch date to 30 days from now
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4 hero-gradient">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Coming Very Soon
          </h3>
          
          <div className="grid grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl p-4 md:p-6 shadow-lg border">
              <div className="text-2xl md:text-4xl font-bold text-primary mb-2">
                {timeLeft.days}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                Days
              </div>
            </div>
            
            <div className="bg-card rounded-2xl p-4 md:p-6 shadow-lg border">
              <div className="text-2xl md:text-4xl font-bold text-primary mb-2">
                {timeLeft.hours}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                Hours
              </div>
            </div>
            
            <div className="bg-card rounded-2xl p-4 md:p-6 shadow-lg border">
              <div className="text-2xl md:text-4xl font-bold text-primary mb-2">
                {timeLeft.minutes}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                Minutes
              </div>
            </div>
            
            <div className="bg-card rounded-2xl p-4 md:p-6 shadow-lg border">
              <div className="text-2xl md:text-4xl font-bold text-primary mb-2">
                {timeLeft.seconds}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                Seconds
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
