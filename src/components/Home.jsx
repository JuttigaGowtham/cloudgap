import React from 'react';
import { Cloud, CloudRain, CloudSnow, Zap } from 'lucide-react';

// Local Button component
const Button = ({ children, size = 'md', variant = 'default', className = '', ...props }) => {
  let base = 'rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200';
  let sizeClass = size === 'lg' ? 'py-3 px-8 text-lg' : 'py-2 px-4 text-base';
  let variantClass =
    variant === 'outline'
      ? 'border border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50'
      : 'bg-blue-600 text-white hover:bg-blue-700';
  return (
    <button className={`${base} ${sizeClass} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
};


const CloudHero = () => {
  const [activeCloud, setActiveCloud] = React.useState(0);
  
  const clouds = [
    { Icon: Cloud, color: 'text-blue-400', delay: 0 },
    { Icon: CloudRain, color: 'text-blue-500', delay: 0.2 },
    { Icon: CloudSnow, color: 'text-cyan-400', delay: 0.4 },
    { Icon: Zap, color: 'text-yellow-400', delay: 0.6 },
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveCloud((prev) => (prev + 1) % clouds.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [clouds.length]);

  return (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8 order-2 lg:order-1 flex flex-col items-center text-center">
            <div className="space-y-4 w-full">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200">
                <Cloud className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">
                  Cloud Computing Platform
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight text-center w-full mx-auto animate-fade-in-up">
                SECURING YOUR DIGITAL TRANSFORMATION WITH
                <span className="block mt-2">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent font-extrabold">CLOUD</span>,{' '}
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-400 bg-clip-text text-transparent font-extrabold">DATA</span> &amp;{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent font-extrabold">CYBERSECURITY</span> EXPERTISE
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-600 max-w-xl animate-fade-in-up animation-delay-600 mx-auto text-center">
                Deploy, manage, and scale your applications with enterprise-grade cloud infrastructure. 
                Experience unmatched performance, security, and reliability.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-800 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                View Demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 animate-fade-in-up animation-delay-1000 justify-center">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-foreground">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime SLA</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Right Side - Animated Cloud Image */}
          <div className="relative order-1 lg:order-2 animate-fade-in-up animation-delay-400">
            <div className="relative w-full aspect-square max-w-2xl mx-auto">
              {/* Background Gradient Orbs */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse animation-delay-1000" />
              </div>

              {/* Floating Cloud Icons */}
              <div className="absolute inset-0">
                {clouds.map((cloud, index) => {
                  const Icon = cloud.Icon;
                  const positions = [
                    { top: '10%', left: '20%' },
                    { top: '30%', right: '15%' },
                    { bottom: '30%', left: '15%' },
                    { bottom: '15%', right: '25%' },
                  ];
                  
                  return (
                    <div
                      key={index}
                      className={`absolute transition-all duration-1000 ${
                        activeCloud === index ? 'scale-125 opacity-100' : 'scale-100 opacity-60'
                      }`}
                      style={{
                        ...positions[index],
                        animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                        animationDelay: `${cloud.delay}s`,
                      }}
                    >
                      <div className="relative">
                        <div className={`absolute inset-0 ${cloud.color} blur-xl opacity-50`}>
                          <Icon className="w-16 h-16" />
                        </div>
                        <Icon className={`w-16 h-16 ${cloud.color} relative`} />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Central Cloud Server Illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-64 h-64 rounded-3xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-200/20 dark:border-blue-700/20 flex items-center justify-center animate-float">
                    <div className="space-y-4">
                      <Cloud className="w-32 h-32 text-blue-500 dark:text-blue-400 mx-auto animate-pulse" />
                      <div className="flex gap-2 justify-center">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className="w-2 h-2 rounded-full bg-blue-500"
                            style={{
                              animation: `pulse 1.5s ease-in-out infinite`,
                              animationDelay: `${i * 0.2}s`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Connection Lines */}
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-px h-20 bg-gradient-to-b from-blue-500/50 to-transparent"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${i * 90}deg) translateY(-100%)`,
                        transformOrigin: 'bottom center',
                        animation: `pulse 2s ease-in-out infinite`,
                        animationDelay: `${i * 0.3}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
          opacity: 0;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
          opacity: 0;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CloudHero;
