import React from 'react';

const ServicesOverlapSection = () => {
  const services = [
    {
      number: '01',
      tag: 'Custom Design',
      title: 'Beautiful Dental Websites That Convert',
      description: "We craft bespoke dental websites that don't just look stunning — they're engineered to turn visitors into booked appointments.",
      features: [
        'Mobile-First, Lightning Fast',
        'HIPAA-Compliant Online Forms',
        'Custom Brand Identity',
        'Patient Journey Optimization'
      ],
      image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&q=80',
      dark: false
    },
    {
      number: '02',
      tag: 'SEO & Marketing',
      title: 'Dominate Local Search Results',
      description: 'Get found by patients actively searching for dentists in your area. Our dental SEO strategies have helped practices achieve top Google rankings.',
      features: [
        'Local SEO & Google Business',
        'Content Marketing Strategy',
        'Paid Ads (Google & Meta)',
        'Monthly Analytics Reports'
      ],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
      dark: true
    },
    {
      number: '03',
      tag: 'Reputation',
      title: 'Build 5-Star Reputation Automatically',
      description: 'Our automated review system helps your practice collect more glowing reviews on Google and Yelp while you focus on patient care.',
      features: [
        'Automated Review Requests',
        'Review Response Management',
        'Reputation Monitoring Dashboard',
        'Negative Review Handling'
      ],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80',
      dark: false
    },
    {
      number: '04',
      tag: 'Patient Experience',
      title: 'Smart Patient Communication Tools',
      description: 'From online booking to automated appointment reminders, we give your practice the tools to deliver a seamless, modern patient experience.',
      features: [
        'Online Booking Integration',
        'SMS & Email Reminders',
        'Virtual Consultation Widgets',
        'Patient Portal Integration'
      ],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
      dark: true
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase mb-4 sm:mb-6">
            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse"></span>
            What We Do
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4 sm:mb-6 px-4">
            Everything Your Dental Practice<br className="hidden sm:block" /> Needs to Grow Online
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4">
            From stunning websites to full-funnel marketing — we cover it all.
          </p>
        </div>

        {/* Overlapping Cards Stack */}
        <div className="relative space-y-4 sm:space-y-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`sticky ${
                index === 0 ? 'top-20 sm:top-24' : 
                index === 1 ? 'top-24 sm:top-28' : 
                index === 2 ? 'top-28 sm:top-32' : 
                'top-32 sm:top-36'
              } ${
                service.dark 
                  ? 'bg-slate-900 text-white' 
                  : 'bg-white text-slate-900'
              } rounded-2xl sm:rounded-3xl shadow-xl border ${
                service.dark ? 'border-slate-800' : 'border-slate-100'
              } p-6 sm:p-8 lg:p-12 transition-transform hover:scale-[1.01] min-h-[400px] sm:min-h-[420px]`}
              style={{ zIndex: index + 1 }}
            >
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                {/* Content */}
                <div>
                  <div className={`font-serif text-6xl sm:text-7xl lg:text-8xl font-black mb-3 sm:mb-4 ${
                    service.dark ? 'text-teal-500/20' : 'text-teal-500/15'
                  }`}>
                    {service.number}
                  </div>
                  <div className="text-xs sm:text-sm font-bold tracking-wider uppercase text-teal-500 mb-2 sm:mb-3">
                    {service.tag}
                  </div>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4">
                    {service.title}
                  </h3>
                  <p className={`text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 ${
                    service.dark ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {service.description}
                  </p>
                  <ul className="space-y-2 sm:space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base font-medium">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <span className={service.dark ? 'text-slate-200' : 'text-slate-800'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div className="rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] bg-slate-200">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverlapSection;