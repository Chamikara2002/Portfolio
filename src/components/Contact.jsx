import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Linkedin, Github, Twitter, Youtube, Facebook, CheckCircle, MessageCircle, ArrowUpRight, Loader2 } from 'lucide-react';
import TiltCard from './TiltCard';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    const recipientEmail = "vilochanabandara25@gmail.com";

    try {
      // Send form data asynchronously via FormSubmit service direct to user's inbox
      const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `New Portfolio Message from ${formData.name}: ${formData.subject}`,
          _template: "table",
          _captcha: "false",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => {
          setSubmitted(false);
        }, 6000);
      } else {
        // Fallback: Trigger direct mailto client if API response was not 200
        const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        window.location.href = mailtoUrl;
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (err) {
      console.error("Email submission error:", err);
      // Fallback: Mailto trigger
      const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoUrl;
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/chamikara-arambepola-9aa4122a4', icon: Linkedin },
    { name: 'GitHub', href: 'https://github.com/Chamikara2002', icon: Github },
    { name: 'Twitter/X', href: 'https://x.com/ChamikaraViloch', icon: Twitter },
    { name: 'YouTube', href: 'https://www.youtube.com/@CHAMI_G', icon: Youtube },
    { name: 'Facebook', href: 'https://www.facebook.com/chamikara.vilochana.2025', icon: Facebook },
  ];

  return (
    <section id="contact" className="py-10 sm:py-14 lg:py-16 scroll-mt-20 lg:scroll-mt-24 relative z-10 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading with ScrollReveal */}
        <ScrollReveal direction="up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#64FFDA]/10 border border-[#64FFDA]/30 rounded-full text-[#64FFDA] text-xs font-mono shadow-neon-teal animate-pulse-glow">
              <MessageSquare className="w-4 h-4 text-[#64FFDA] animate-bounce" />
              <span className="uppercase tracking-widest font-bold">GET IN TOUCH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-extrabold text-white tracking-tight">
              Contact <span className="text-gradient-teal">Me</span>
            </h2>
            <div className="h-1.5 w-32 bg-gradient-architectural mx-auto rounded-full shadow-neon-teal" />
          </div>
        </ScrollReveal>

        {/* Dedicated 3D WhatsApp Featured Banner Card */}
        <ScrollReveal direction="up" delay={100}>
          <div className="mb-6 lg:mb-8">
            <TiltCard maxTilt={8} glowColor="rgba(37, 211, 102, 0.25)" className="p-5 sm:p-6 lg:p-7 bg-[#112240] border-emerald-500/40">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">

                <div className="flex items-center gap-4">
                  <div className="p-3.5 bg-emerald-500/15 border border-emerald-500/40 rounded-2xl text-emerald-400 shadow-[0_0_20px_rgba(37,211,102,0.3)] animate-pulse">
                    <MessageCircle className="w-7 h-7 sm:w-9 sm:h-9" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold block">INSTANT MESSAGING</span>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-headline font-extrabold text-white">Chat Directly on WhatsApp</h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-mono mt-0.5">+94 76 199 1008 • Fast response within minutes</p>
                  </div>
                </div>

                <a
                  href="https://wa.me/94761991008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-extrabold text-sm rounded-xl shadow-[0_0_25px_rgba(37,211,102,0.4)] transition-all transform hover:scale-105 active:scale-95 shrink-0"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  <span>Start WhatsApp Chat</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

              </div>
            </TiltCard>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-5">
            <ScrollReveal direction="right" delay={150}>
              <TiltCard maxTilt={10} className="p-6 lg:p-6 xl:p-8 space-y-5 bg-[#112240] border-[#64FFDA]/30">
                <h3 className="text-xl sm:text-2xl font-headline font-extrabold text-white tracking-tight">
                  Let's discuss your next project!
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  Have a software project, UI/UX design requirement, or agency collaboration in mind? Reach out via WhatsApp, email, or social channels.
                </p>

                <div className="space-y-3 pt-1">

                  {/* Direct Email */}
                  <div className="flex items-center gap-3.5 p-3 bg-[#0A192F]/80 rounded-xl border border-[#233554]">
                    <div className="p-2 bg-[#64FFDA]/10 text-[#64FFDA] rounded-lg">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-mono block">Direct Email</span>
                      <a href="mailto:vilochanabandara25@gmail.com" className="text-xs sm:text-sm font-bold text-white hover:text-[#64FFDA] transition-colors">
                        vilochanabandara25@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3.5 p-3 bg-[#0A192F]/80 rounded-xl border border-[#233554]">
                    <div className="p-2 bg-[#FFD700]/10 text-[#FFD700] rounded-lg">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-mono block">Phone & Whatsapp</span>
                      <a href="tel:+94704086226" className="text-xs sm:text-sm font-bold text-white hover:text-[#64FFDA] transition-colors">
                        +94 70 408 6226
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-3.5 p-3 bg-[#0A192F]/80 rounded-xl border border-[#233554]">
                    <div className="p-2 bg-[#38BDF8]/10 text-[#38BDF8] rounded-lg">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-mono block">Location</span>
                      <span className="text-xs sm:text-sm font-bold text-white">
                        Galigamuwa Town, Kegalle District, Sri Lanka
                      </span>
                    </div>
                  </div>

                </div>

                {/* Social Channels */}
                <div className="pt-3 border-t border-[#233554]">
                  <span className="text-xs font-mono text-slate-400 block mb-2.5">CONNECT ACROSS PLATFORMS:</span>
                  <div className="flex items-center gap-2 flex-wrap">
                    {socialLinks.map((s) => {
                      const IconComp = s.icon;
                      return (
                        <a
                          key={s.name}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-[#0A192F] hover:bg-[#64FFDA]/20 border border-[#233554] hover:border-[#64FFDA]/40 rounded-xl text-slate-300 hover:text-[#64FFDA] transition-all"
                          title={s.name}
                        >
                          <IconComp className="w-4 h-4" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delay={200}>
              <TiltCard maxTilt={8} className="p-6 lg:p-6 xl:p-8 bg-[#112240] border-[#64FFDA]/30">

                {submitted ? (
                  <div className="py-10 text-center space-y-4 animate-fadeIn">
                    <div className="p-4 bg-[#64FFDA]/10 text-[#64FFDA] border border-[#64FFDA]/30 rounded-2xl w-fit mx-auto animate-bounce">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-headline font-bold text-white">Message Delivered to Inbox!</h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you! Your message has been sent directly to <strong className="text-[#64FFDA]">vilochanabandara25@gmail.com</strong>. Chamikara will respond to your inquiry shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <h3 className="text-lg sm:text-xl font-headline font-bold text-white mb-2">Send a Direct Message</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="space-y-1">
                        <label className="text-[11px] font-mono text-slate-400">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          className="w-full bg-[#0A192F] border border-[#233554] focus:border-[#64FFDA] rounded-xl p-2.5 sm:p-3 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-mono text-slate-400">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          className="w-full bg-[#0A192F] border border-[#233554] focus:border-[#64FFDA] rounded-xl p-2.5 sm:p-3 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-mono text-slate-400">Subject *</label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Project Inquiry / UI/UX Design"
                        className="w-full bg-[#0A192F] border border-[#233554] focus:border-[#64FFDA] rounded-xl p-2.5 sm:p-3 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-mono text-slate-400">Message *</label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your project requirement or idea..."
                        className="w-full bg-[#0A192F] border border-[#233554] focus:border-[#64FFDA] rounded-xl p-2.5 sm:p-3 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-gradient-to-r from-[#64FFDA] via-[#38BDF8] to-[#FFD700] animate-gradient-slow disabled:bg-slate-700 text-[#0A192F] font-extrabold text-xs sm:text-sm rounded-xl shadow-[0_10px_25px_-5px_rgba(100,255,218,0.5)] hover:shadow-[0_15px_30px_-5px_rgba(100,255,218,0.7)] transition-all transform hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2 cursor-pointer mt-1"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-[#0A192F]" />
                          <span>Sending Message to Inbox...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}

              </TiltCard>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
