
import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"
import OptimizedImage from './OptimizedImage';
import { cn } from '@/lib/utils';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const [openDropdown, setOpenDropdown] = useState(null);


  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const conditionsLinks = [
    { name: 'Anxiety Disorders', href: '/conditions/anxiety-disorders' },
    { name: 'Mood Disorders', href: '/conditions/mood-disorders' },
    { name: 'Neurodevelopmental Disorders', href: '/conditions/neurodevelopmental-disorders' },
    { name: 'Personality Disorders', href: '/conditions/personality-disorders' },
    { name: 'Psychotic Disorders', href: '/conditions/psychotic-disorders' },
    { name: 'Obsessive-Compulsive & Related', href: '/conditions/ocd-related-disorders' },
    { name: 'Substance-Related Disorders', href: '/conditions/substance-related-disorders' },
    { name: 'Trauma & Stress-Related', href: '/conditions/trauma-stress-disorders' },
  ];

  const servicesLinks = [
    { name: 'Comprehensive Assessment', href: '/services/comprehensive-psychiatric-assessment' },
    { name: 'Genetic Testing', href: '/services/genetic-testing' },
    { name: 'ADHD Testing & Management', href: '/services/adhd-testing-and-management' },
    { name: 'Autism Assessment & Management', href: '/services/autism-assessment-and-management' },
    { name: 'Therapy & Counseling', href: '/services/therapy-and-counseling' },
    { name: 'Medication Management', href: '/services/medication-management' },
    { name: 'Substance Use Disorder Treatment', href: '/services/substance-use-disorder-treatment' },
    { name: 'Spravato® Treatment', href: '/services/spravato' },
    { name: 'Remote Patient Monitoring', href: '/services/remote-patient-monitoring' },
    { name: 'Telehealth & Digital Care', href: '/services/telehealth' },
  ];

  const aboutSublinks = [
    { name: 'Our Story', href: '/about' },
    { name: 'Blog', href: '/blog' },
  ];

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about', sublinks: aboutSublinks },
    { name: 'Conditions', href: '/conditions', sublinks: conditionsLinks },
    { name: 'Services', href: '/services', sublinks: servicesLinks },
    { name: 'Patients', href: '/patients' },
    { name: 'Providers', href: '/providers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Shop', href: 'http://shop.oasishealthservices.com/', external: true },
  ];

  const isActive = (path) => currentPath === path;
  const isServicesActive = () => currentPath.startsWith('/services');
  const isConditionsActive = () => currentPath.startsWith('/conditions');
  const isAboutActive = () => currentPath.startsWith('/about') || currentPath.startsWith('/blog');

  const getActiveState = (item) => {
    if (item.name === 'About') return isAboutActive();
    if (item.name === 'Conditions') return isConditionsActive();
    if (item.name === 'Services') return isServicesActive();
    return isActive(item.href);
  }

  const MobileNavLink = ({ href, children, onClick }) => (
    <a
      href={href}
      onClick={onClick}
      className={`block py-3 text-base font-medium transition-colors hover:text-[#2D6762] ${isActive(href) ? 'text-[#2D6762]' : 'text-[#4A5455]'
        }`}
    >
      {children}
    </a>
  );

  // Hover open/close timers to reduce flicker when moving between dropdowns
  const hoverOpenTimer = useRef(null);
  const hoverCloseTimer = useRef(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // detect coarse pointers (touch) and also listen for touchstart as a fallback
    const mq = typeof window !== 'undefined' && window.matchMedia ? window.matchMedia('(pointer: coarse)') : null;
    if (mq && mq.matches) setIsTouch(true);
    const onTouch = () => setIsTouch(true);
    window.addEventListener('touchstart', onTouch, { passive: true });
    return () => {
      window.removeEventListener('touchstart', onTouch);
      if (hoverOpenTimer.current) clearTimeout(hoverOpenTimer.current);
      if (hoverCloseTimer.current) clearTimeout(hoverCloseTimer.current);
    };
  }, []);

  // const scheduleOpen = (name) => {
  //   // Note: Removed isTouch check here to allow hover on devices that report touch 
  //   // but also have a mouse (like MacBooks). The delay helps prevent accidental opens.

  //   if (hoverCloseTimer.current) {
  //     clearTimeout(hoverCloseTimer.current);
  //     hoverCloseTimer.current = null;
  //   }

  //   if (openMenu === name) return;

  //   if (hoverOpenTimer.current) clearTimeout(hoverOpenTimer.current);
  //   hoverOpenTimer.current = setTimeout(() => {
  //     setOpenMenu(name);
  //     hoverOpenTimer.current = null;
  //   }, 100);
  // };

  // const scheduleClose = () => {
  //   // Note: Removed isTouch check here to keep hover & touch logic consistent
  //   if (hoverOpenTimer.current) {
  //     clearTimeout(hoverOpenTimer.current);
  //     hoverOpenTimer.current = null;
  //   }
  //   if (hoverCloseTimer.current) clearTimeout(hoverCloseTimer.current);
  //   hoverCloseTimer.current = setTimeout(() => {
  //     setOpenMenu(null);
  //     hoverCloseTimer.current = null;
  //   }, 200);
  // };

  return (
    //    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">

      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
          <a href="/" className="flex items-center">
            <OptimizedImage
              src="https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/2245c4f857f206a62cf1e8d030229d5c.png"
              alt="Oasis Health Services Logo"
              className="h-12 w-auto"
              priority={true}
              loading="eager"
            />
          </a>

          <div className="hidden lg:flex lg:items-center lg:gap-1"
          // onMouseLeave={() => scheduleClose()}
          >
            {navigation.map((item) => {
              if (item.sublinks) {
                return (

                  <div key={item.name} className="relative">

                    <Button
                      variant="ghost"
                      onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                      className={`flex items-center text-sm font-medium transition-colors hover:bg-gray-100 hover:text-[#2D6762] px-3 py-2 ${getActiveState(item) ? 'text-[#2D6762]' : 'text-[#4A5455]'}`}
                    >
                      <span className="animated-underline">{item.name}</span>
                      <ChevronDown className={cn("h-4 w-4 transition-transform", openDropdown === item.name && "rotate-180")} />
                    </Button>

                    {openDropdown === item.name && (
                      <div className="absolute left-0 top-full mt-1 w-56 rounded-lg border border-border bg-card p-1 shadow-lg">
                        {item.sublinks.map((subItem) => (
                          <a
                            key={subItem.href}
                            href={subItem.href}
                            className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100 transition-colors hover:text-[#2D6762]"
                            target={subItem.external ? "_blank" : undefined}
                            rel={subItem.external ? "noopener noreferrer" : undefined}>
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>



                  // <div key={item.name}
                  // // onMouseEnter={() => scheduleOpen(item.name)} 
                  // // onMouseLeave={() => scheduleClose()}
                  // >
                  //   <DropdownMenu
                  //   // open={openMenu === item.name}
                  //   // onOpenChange={(isOpen) => setOpenMenu(isOpen ? item.name : null)}
                  //   >
                  //     <DropdownMenuTrigger asChild>
                  //       <Button
                  //         variant="ghost"
                  //         onClick={(e) => {
                  //           // Toggle on click for all devices to ensure accessibility
                  //           // e.preventDefault();
                  //           // setOpenMenu(openMenu === item.name ? null : item.name);
                  //           { }
                  //         }}
                  //         className={`flex items-center text-sm font-medium transition-colors hover:bg-gray-100 hover:text-[#2D6762] px-3 py-2 ${getActiveState(item) ? 'text-[#2D6762]' : 'text-[#4A5455]'}`}
                  //       >
                  //         <span className="animated-underline">{item.name}</span>
                  //         <ChevronDown className="ml-1 h-4 w-4" />
                  //       </Button>
                  //     </DropdownMenuTrigger>
                  //     <DropdownMenuContent
                  //       // onMouseEnter={() => scheduleOpen(item.name)}
                  //       // onMouseLeave={() => scheduleClose()}
                  //       // onCloseAutoFocus={(e) => e.preventDefault()}
                  //       align="start"
                  //       sideOffset={4}
                  //       className="mt-1"
                  //     >
                  //       {(item.name === 'Services' || item.name === 'Conditions') && (
                  //         <DropdownMenuItem asChild>
                  //           <a href={item.href}>All {item.name}</a>
                  //         </DropdownMenuItem>
                  //       )}
                  //       {item.sublinks.map((sublink) => (
                  //         <DropdownMenuItem key={sublink.name} asChild>
                  //           <a href={sublink.href} target={sublink.external ? "_blank" : undefined} rel={sublink.external ? "noopener noreferrer" : undefined}>{sublink.name}</a>
                  //         </DropdownMenuItem>
                  //       ))}
                  //     </DropdownMenuContent>
                  //   </DropdownMenu>
                  // </div>
                )
              }
              return (

                <Button asChild variant="ghost" key={item.name} className="px-3 py-2">
                  <a
                    key={item.name}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className={`text-sm font-medium transition-colors hover:text-[#2D6762] ${isActive(item.href) ? 'text-[#2D6762]' : 'text-[#4A5455]'}`}
                  >
                    <span className="animated-underline">{item.name}</span>
                  </a>
                </Button>
                // <Button
                //   asChild
                //   variant="ghost"
                //   key={item.name}
                //   className="px-3 py-2"
                //   onMouseEnter={() => setOpenMenu(null)}
                // >
                //   <a
                //     href={item.href}
                //     target={item.external ? "_blank" : undefined}
                //     rel={item.external ? "noopener noreferrer" : undefined}
                //     className={`text-sm font-medium transition-colors hover:text-[#2D6762] ${isActive(item.href) ? 'text-[#2D6762]' : 'text-[#4A5455]'
                //       }`}
                //   >
                //     <span className="animated-underline">{item.name}</span>
                //   </a>
                // </Button>
              );
            })}
            <div className="pl-2" onMouseEnter={() => setOpenMenu(null)}>
              <a href="/start">
                <Button className="gradient-button">
                  <span>Start Now</span>
                </Button>
              </a>
            </div>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-[#2D6762]" />
            ) : (
              <Menu className="h-6 w-6 text-[#2D6762]" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1">
                <Accordion type="multiple" className="w-full">
                  {navigation.map((item) => {
                    if (item.sublinks) {
                      return (
                        <AccordionItem value={item.name} key={item.name} className="border-b-0 py-0">
                          <AccordionTrigger className={`py-3 text-base font-medium hover:no-underline ${getActiveState(item) ? 'text-[#2D6762]' : 'text-[#4A5455]'}`}>
                            {item.name}
                          </AccordionTrigger>
                          <AccordionContent className="pl-4 pb-0">
                            <div className="flex flex-col space-y-2">
                              {(item.name === 'Services' || item.name === 'Conditions') && (
                                <MobileNavLink href={item.href} onClick={() => setMobileMenuOpen(false)}>All {item.name}</MobileNavLink>
                              )}
                              {item.sublinks.map((sublink) => (
                                <MobileNavLink key={sublink.name} href={sublink.href} onClick={() => setMobileMenuOpen(false)}>
                                  {sublink.name}
                                </MobileNavLink>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      );
                    }
                    if (item.external) {
                      return (
                        <div key={item.name} className="py-3">
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-base font-medium text-[#4A5455] transition-colors hover:text-[#2D6762]"
                          >
                            {item.name}
                          </a>
                        </div>
                      );
                    }
                    return (
                      <div key={item.name} className="py-3">
                        <MobileNavLink href={item.href} onClick={() => setMobileMenuOpen(false)}>{item.name}</MobileNavLink>
                      </div>
                    );
                  })}
                </Accordion>
                <div className="pt-4">
                  <a href="/start" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full gradient-button">
                      <span>Start Now</span>
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;