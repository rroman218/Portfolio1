import { forwardRef, useState } from "react"
import { Div } from "./ui/Div"
import { Mail, MessageCircle, Send } from "lucide-react"
import { socialLinks } from "../const"

export const Contact = forwardRef<HTMLDivElement>((_, ref) => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: ""
  })

  return (
    <Div variant="section" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-600 mb-4 tracking-wide">Get in Touch</p>
          <h2 className="mb-6">Ready to collaborate?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Write me about your project, and I will respond within 24 hours
          </p>
        </div>
        {/* Contact Form */}
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <form className="space-y-6" action="">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="">
                  <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                    Name *
                  </label>
                  <input type="text" id="name" name="name"
                    value={formData.name}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm mb-2 text-gray-700">
                  Project Type *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                >
                  <option value="">Select project type</option>
                  <option value="website">Website Design</option>
                  <option value="mobile">Mobile App Design</option>
                  <option value="branding">Branding</option>
                  <option value="audit">UI/UX Audit</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-2xl">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="mb-2">Email</h3>
              <a href="mailto:hello@alexivanov.design" className="text-gray-600 hover:text-blue-600 transition-colors">
                hello@alexivanov.design
              </a>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="mb-4">Social Media</h3>
              <div className="space-y-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <span className="text-xl">{link.icon}</span>
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Div>
  )
}
)
