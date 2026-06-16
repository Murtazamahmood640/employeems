import { createFileRoute, Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";



export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container-x py-16 lg:py-24">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary transition">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Privacy Policy</span>
        </div>

        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-12">Last updated: June 2024</p>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
              <p>
                Employee Zen (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates the employe-zen platform
                (&quot;Service&quot;). This page informs you of our policies regarding the collection, use, and
                disclosure of personal data when you use our Service and the choices you have associated with that
                data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Information Collection and Use</h2>
              <p>We collect several different types of information for various purposes to provide and improve our Service.</p>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Personal Data</h3>
              <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (&quot;Personal Data&quot;). This may include, but is not limited to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Address, State, Province, ZIP/Postal code, City</li>
                <li>Cookies and Usage Data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Use of Data</h2>
              <p>Employee Zen uses the collected data for various purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features of our Service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our Service</li>
                <li>To monitor the usage of our Service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Security of Data</h2>
              <p>
                The security of your data is important to us, but remember that no method of transmission over the Internet
                or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect
                your Personal Data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the &quot;Last updated&quot; date at the top of this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>By email: privacy@employeezen.com</li>
                <li>By visiting this page: <Link to="/contact" className="text-purple-600 hover:underline">Contact Us</Link></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
