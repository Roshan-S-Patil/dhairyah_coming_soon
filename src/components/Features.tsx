
import { Calendar, Users, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: "Personal Task Calendar",
      description: "Track your daily tasks and build a visual history of your progress over time."
    },
    {
      icon: Users,
      title: "Social Motivation",
      description: "Connect with friends, share your streaks, and send custom motivational reminders."
    },
    {
      icon: Clock,
      title: "Daily Streak Tracking",
      description: "Build momentum with consistent daily habits and watch your streaks grow."
    }
  ];

  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Dhairyah?
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine personal productivity with social accountability to help you achieve your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`text-center p-8 rounded-2xl bg-background border hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in animate-delay-${(index + 1) * 200}`}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
