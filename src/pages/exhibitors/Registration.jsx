import React from "react";
import UpPages from "../../components/UpPages";

export default function Registration() {
  return (
    <div>
      <UpPages title="Exhibit 2025" />
      <section className="bg-white relative">
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
          <div className="w-full max-w-4xl bg-white rounded-2xl shadow-md p-8">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div className="flex flex-col">
                <label
                  htmlFor="firstName"
                  className="text-lg font-medium text-gray-700 mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="border border-gray-300 rounded-xl px-5 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col">
                <label
                  htmlFor="lastName"
                  className="text-lg font-medium text-gray-700 mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="border border-gray-300 rounded-xl px-5 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-lg font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border border-gray-300 rounded-xl px-5 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Mobile */}
              <div className="flex flex-col">
                <label
                  htmlFor="mobile"
                  className="text-lg font-medium text-gray-700 mb-2"
                >
                  Mobile
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  className="border border-gray-300 rounded-xl px-5 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Job Title */}
              <div className="flex flex-col">
                <label
                  htmlFor="jobTitle"
                  className="text-lg font-medium text-gray-700 mb-2"
                >
                  Job Title
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  className="border border-gray-300 rounded-xl px-5 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Company Name */}
              <div className="flex flex-col">
                <label
                  htmlFor="companyName"
                  className="text-lg font-medium text-gray-700 mb-2"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  className="border border-gray-300 rounded-xl px-5 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Submit Button - full width on all devices */}
              <div className="md:col-span-2 pt-4">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-200 text-lg"
                >
                  Submit Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
