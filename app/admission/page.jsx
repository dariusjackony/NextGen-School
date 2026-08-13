export default function Admission() {
  return (
    <section className="px-4 py-20 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="max-w-2xl mb-12">
          <span className="text-sm font-semibold tracking-widest uppercase text-[#8C1515]">
            Admissions
          </span>

          <h2 className="mt-3 text-2xl font-bold text-gray-900">
            Start Your Child&apos;s Journey
          </h2>

          <p className="mt-5 text-gray-600 text-base md:text-lg leading-relaxed">
            Interested in joining NextGen Academy? Fill in the form below
            and our admissions team will get back to you with the next steps.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white border border-gray-200 p-6 md:p-10">

          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>
                <label
                  htmlFor="parentName"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                >
                  Parent&apos;s Name <span className="text-[#8C1515]">*</span>
                </label>

                <input
                  id="parentName"
                  type="text"
                  placeholder="Enter parent's name"
                  required
                  className="w-full px-4 py-3.5 rounded-lg border border-gray-300 bg-gray-50 outline-none transition focus:border-[#8C1515] focus:ring-2 focus:ring-[#8C1515]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="childName"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                >
                  Child&apos;s Name <span className="text-[#8C1515]">*</span>
                </label>

                <input
                  id="childName"
                  type="text"
                  placeholder="Enter child's name"
                  required
                  className="w-full px-4 py-3.5 rounded-lg border border-gray-300 bg-gray-50 outline-none transition focus:border-[#8C1515] focus:ring-2 focus:ring-[#8C1515]/10"
                />
              </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                >
                  Your Email <span className="text-[#8C1515]">*</span>
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3.5 rounded-lg border border-gray-300 bg-gray-50 outline-none transition focus:border-[#8C1515] focus:ring-2 focus:ring-[#8C1515]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="telephone"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                >
                  Telephone <span className="text-[#8C1515]">*</span>
                </label>

                <input
                  id="telephone"
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                  className="w-full px-4 py-3.5 rounded-lg border border-gray-300 bg-gray-50 outline-none transition focus:border-[#8C1515] focus:ring-2 focus:ring-[#8C1515]/10"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>
                <label
                  htmlFor="class"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                >
                  Student&apos;s Class <span className="text-[#8C1515]">*</span>
                </label>

                <select
                  id="class"
                  required
                  className="w-full px-4 py-3.5 rounded-lg border border-gray-300 bg-gray-50 outline-none transition focus:border-[#8C1515] focus:ring-2 focus:ring-[#8C1515]/10 text-gray-600"
                >
                  <option value="">Select student&apos;s class</option>
                  <option>Primary One</option>
                  <option>Primary Two</option>
                  <option>Primary Three</option>
                  <option>Primary Four</option>
                  <option>Primary Five</option>
                  <option>Primary Six</option>
                  <option>Primary Seven</option>
                  <option>Senior One</option>
                  <option>Senior Two</option>
                  <option>Senior Three</option>
                  <option>Senior Four</option>
                  <option>Senior Five</option>
                  <option>Senior Six</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="dob"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                >
                  Student&apos;s Date of Birth{" "}
                  <span className="text-[#8C1515]">*</span>
                </label>
                <input
                  id="dob"
                  type="date"
                  required
                  className="w-full px-4 py-3.5 rounded-lg border border-gray-300 bg-gray-50 outline-none transition focus:border-[#8C1515] focus:ring-2 focus:ring-[#8C1515]/10 text-gray-600"
                />
              </div>

            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-800 mb-2"
              >
                Your Message
              </label>

              <textarea
                id="message"
                rows="5"
                placeholder="Tell us anything else you would like us to know..."
                className="w-full px-4 py-3.5 rounded-lg border border-gray-300 bg-gray-50 outline-none transition resize-none focus:border-[#8C1515] focus:ring-2 focus:ring-[#8C1515]/10"
              />
            </div>
            <div className="pt-2">
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3.5 bg-[#8C1515] text-white font-semibold"
              >
                Submit Admission Enquiry
              </button>

              <p className="mt-3 text-xs text-gray-500">
                By submitting this form, you agree to be contacted by our
                admissions team.
              </p>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}