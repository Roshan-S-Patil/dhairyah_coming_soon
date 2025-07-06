
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address to join the waitlist.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "You're in! 🎉",
      description: "Thanks for joining the waitlist. We'll notify you when Dhairyah launches!",
    });
    
    setEmail('');
    setIsSubmitting(false);
  };

  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo Placeholder */}
        <div className="mb-8 animate-fade-in">
          <div className="w-16 h-16 mx-auto bg-primary rounded-2xl flex items-center justify-center mb-4 shadow-lg">
            <span className="text-2xl font-bold text-primary-foreground">D</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-2">
            Dhairyah
          </h1>
        </div>

        {/* Main Headline */}
        <div className="mb-8 animate-fade-in animate-delay-200">
          <h2 className="text-2xl md:text-4xl font-semibold text-foreground mb-4 leading-tight">
            Be the person who finishes what they start.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Dhairyah is where discipline meets community. Set daily tasks, build streaks, 
            and help your friends stay on track — together.
          </p>
        </div>

        {/* CTA Form */}
        <div className="mb-12 animate-fade-in animate-delay-400">
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 text-base bg-card border-2 focus:border-primary transition-colors"
                disabled={isSubmitting}
              />
              <Button 
                type="submit" 
                className="h-12 px-8 font-semibold text-base bg-primary hover:bg-primary/90 transition-all duration-200 transform hover:scale-105"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Joining...' : 'Notify Me'}
              </Button>
            </div>
          </form>
        </div>

        {/* Launch Badge */}
        <div className="animate-fade-in animate-delay-600">
          <div className="inline-flex items-center px-4 py-2 bg-card rounded-full shadow-sm border">
            <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium text-muted-foreground">
              Launching Soon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
