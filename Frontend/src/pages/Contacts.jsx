import Navbar from "../compo/Navbar";
import Footer from "../compo/Footer";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const contacts = [
    { id: 1, name: "Admissions & Scholarships", email: "ar.academic@nituk.ac.in, academics@nituk.ac.in", phone: "01346-257422/404" },
    { id: 2, name: "Accounts", email: "ar_accounts@nituk.ac.in, accounts.nituk@gov.in", phone: "01346-257426" },
    { id: 3, name: "Hostel & Mess", email: "ar_hostel@nituk.ac.in, hostel@nituk.ac.in", phone: "01346-257654" },
    { id: 4, name: "Tender & Purchase", email: "arstore@nituk.ac.in, stores@nituk.ac.in", phone: "01346-257436" },
    { id: 5, name: "Library", email: "assistant_librarian@nituk.ac.in, library@nituk.ac.in", phone: "01346-257436" },
    { id: 6, name: "Dispensary", email: "coordinator.dispensary@nituk.ac.in, dispensary.nituk@gov.in", phone: "01346-257655" },
    { id: 7, name: "Sports", email: "saso@nituk.ac.in, saso.nit-uk@gov.in", phone: "01346-257668, 9557750908" },
    { id: 8, name: "Career & Placement", email: "c2p@nituk.ac.in", phone: "9557750906" },
    { id: 9, name: "Civil Maintenance", email: "dean.pd@nituk.ac.in, jecivil.nit-uk@gov.in", phone: "01346-257425" },
    { id: 10, name: "Electrical Maintenance", email: "dean.pd@nituk.ac.in, jeeee.nit-uk@gov.in", phone: "01346-257425" },
    { id: 11, name: "Recruitment", email: "nitukrecruitmentcell@gmail.com", phone: "01346-251249" },
    { id: 12, name: "Legal", email: "ar_legal@nituk.ac.in, legal@nituk.ac.in" },
  ];

  return (
    <>
      <Navbar />

      <div className="bg-gradient-to-b from-[#C0D9E6] via-[#F5EFE8] to-[#ffffff] min-h-screen px-6 pt-28 pb-16 flex flex-col items-center">
        <h1 className="text-5xl font-bold text-[#2F4156] drop-shadow-md mb-10 text-center font-serif">
          📞 Contact Us
        </h1>

        <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="bg-white/80 border border-[#576C8D] backdrop-blur-xl p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_30px_rgba(0,0,0,0.2)] transition-all duration-300 ease-in-out"
            >
              <h3 className="text-xl font-semibold text-[#2F4156] mb-3 font-serif">{contact.name}</h3>
              <div className="flex flex-col items-start space-y-2 text-base">
                <div className="flex items-start gap-2 text-[#576C8D]">
                  <FaEnvelope className="mt-1" />
                  <div className="flex flex-col">
                    {contact.email.split(", ").map((email, index) => (
                      <a key={index} href={`mailto:${email}`} className="hover:underline hover:text-[#2F4156] transition">
                        📧 {email}
                      </a>
                    ))}
                  </div>
                </div>
                {contact.phone && (
                  <p className="flex items-center gap-2 text-[#2F4156]">
                    <FaPhone className="text-[#576C8D]" /> {contact.phone}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Address Section */}
        <div className="mt-16 bg-white/90 border border-[#576C8D] rounded-xl shadow-md p-6 w-fit text-center backdrop-blur-lg">
          <h2 className="text-2xl font-bold text-[#2F4156] mb-2 font-serif">🏛 Institute Address</h2>
          <p className="flex items-center justify-center gap-2 text-[#2F4156]">
            <FaMapMarkerAlt className="text-red-500" />
            NIT Uttarakhand, Srinagar, Pauri (Garhwal)-246174
          </p>
          <p className="flex items-center justify-center gap-2 mt-1 text-[#2F4156]">
            <FaPhone className="text-green-600" /> 01346-257400 (EPABX)
          </p>
          <p className="flex items-center justify-center gap-2 mt-1 text-[#2F4156]">
            <FaEnvelope className="text-blue-600" />
            <a href="mailto:nituttarakhand@nituk.ac.in" className="text-[#576C8D] hover:underline">
              📧 nituttarakhand@nituk.ac.in
            </a>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
