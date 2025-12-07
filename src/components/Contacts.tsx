import { MapPin, Phone, MessageCircle, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const Contacts = () => {
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  // Координати офісу: вул. Космонавтів, 17, Одеса
  const officeLat = 46.428838;
  const officeLng = 30.712592;

  const phones = [
    "+38 (097) 483-78-88",
    "+38 (099) 196-58-88",
  ];

  // OpenStreetMap iframe з правильними координатами
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${officeLng - 0.01}%2C${officeLat - 0.005}%2C${officeLng + 0.01}%2C${officeLat + 0.005}&layer=mapnik&marker=${officeLat}%2C${officeLng}`;
  
  // Посилання на повну карту OpenStreetMap
  const fullMapUrl = `https://www.openstreetmap.org/?mlat=${officeLat}&mlon=${officeLng}#map=17/${officeLat}/${officeLng}`;
  
  // Посилання на Google Maps
  const googleMapsUrl = `https://www.google.com/maps?q=${officeLat},${officeLng}`;

  const copyToClipboard = (phone: string) => {
    navigator.clipboard.writeText(phone.replace(/[\s()-]/g, ""));
    setCopiedPhone(phone);
    toast.success("Номер скопійовано!");
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  return (
    <section id="contacts" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Контакти</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  Наша адреса
                </h3>
                <p className="text-muted-foreground">
                  м. Одеса, вул. Космонавтів, 17<br />
                  (офіс страхування з фасада)
                </p>
                <div className="mt-3 space-x-4">
                  <a 
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    <MapPin className="w-4 h-4 mr-1" />
                    Відкрити в Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Phones */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  Телефони
                </h3>
                <div className="space-y-2">
                  {phones.map((phone) => (
                    <div key={phone} className="flex items-center gap-2">
                      <a
                        href={`tel:${phone.replace(/[\s()-]/g, "")}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {phone}
                      </a>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => copyToClipboard(phone)}
                      >
                        {copiedPhone === phone ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4 text-muted-foreground" />
                        )}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Messengers */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  Месенджери
                </h3>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="viber://chat?number=+380974837888"
                    className="px-4 py-2 bg-[#7360f2] text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Viber
                  </a>
                  <a
                    href="https://wa.me/380974837888"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#25D366] text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                  <a
                    href="https://t.me/insurancerr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#0088cc] text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Telegram
                  </a>
                </div>
                <a
                  href="https://invite.viber.com/?g2=AQBEUtIBpF3fy092FJdOqnlFDUvTNEwXy2VUxUCbGBF06To87HD13rvW3Kr8GeOP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-primary hover:text-primary/80 font-medium transition-colors gap-1"
                >
                  Стати частиною спільноти
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px] relative group">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="Карта розташування офісу INSURANCE RR за адресою вул. Космонавтів, 17, Одеса"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              aria-label="Інтерактивна карта з розташуванням офісу INSURANCE RR"
            />
            
            {/* Overlay з кнопками для відкриття повної карти */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex gap-2">
                <a
                  href={fullMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-foreground px-3 py-2 rounded-lg text-sm font-medium shadow-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  OpenStreetMap
                </a>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-medium shadow-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  Google Maps
                </a>
              </div>
            </div>
            
            {/* Маркер на карті */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-8 h-8 bg-primary rounded-full border-4 border-white shadow-lg animate-pulse"></div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1">
                  <div className="bg-primary text-primary-foreground px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
                    INSURANCE RR
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;