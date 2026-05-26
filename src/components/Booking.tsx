import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Calendar } from 'lucide-react';
export function Booking() {
  return (
    <section id="booking" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="glass-card overflow-hidden">
          <div className="grid lg:grid-cols-5">
            {/* Contact Info Side */}
            <div className="lg:col-span-2 bg-purple-surface/80 p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-gold/10">
              <h3 className="text-3xl font-serif font-bold mb-2">Visit Us</h3>
              <p className="text-white/60 font-light mb-10">
                Experience the best hair in Charlotte.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Location</h4>
                    <p className="text-white/60 text-sm font-light">
                      123 Luxury Ave, Suite 100
                      <br />
                      Charlotte, NC 28202
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Contact</h4>
                    <p className="text-white/60 text-sm font-light">
                      (704) 555-0123
                      <br />
                      hello@rb3salon.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Hours</h4>
                    <p className="text-white/60 text-sm font-light">
                      Tue - Fri: 9am - 7pm
                      <br />
                      Saturday: 9am - 5pm
                      <br />
                      Sun - Mon: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-3 p-10 lg:p-12">
              <div className="mb-8">
                <h3 className="text-3xl font-serif font-bold mb-2">
                  Request Appointment
                </h3>
                <p className="text-white/60 font-light">
                  Fill out the form below and our concierge will contact you to
                  confirm.
                </p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                      placeholder="Jane Doe" />
                    
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                      placeholder="(704) 555-0000" />
                    
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">
                      Service Interested In
                    </label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors appearance-none">
                      <option value="" className="bg-purple-base">
                        Select a service...
                      </option>
                      <option value="cut" className="bg-purple-base">
                        Precision Cut
                      </option>
                      <option value="color" className="bg-purple-base">
                        Color & Highlights
                      </option>
                      <option value="balayage" className="bg-purple-base">
                        Balayage
                      </option>
                      <option value="styling" className="bg-purple-base">
                        Styling & Blowout
                      </option>
                      <option value="other" className="bg-purple-base">
                        Other / Consultation
                      </option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:w-full" />
                      
                      <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">
                    Additional Notes
                  </label>
                  <textarea
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
                    placeholder="Tell us about your hair goals..." />
                  
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-4 text-lg">
                  
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>);

}