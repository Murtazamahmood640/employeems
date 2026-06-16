import { createFileRoute, Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";



export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container-x py-16 lg:py-24">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary transition">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Terms of Service</span>
        </div>

        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
          <p className="text-muted-foreground mb-12">Last updated: June 2024</p>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Terms</h2>
              <p>
                By accessing and using the Ceedrs website and service, you accept and agree to be bound by the terms
                and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on
                Ceedrs for personal, non-commercial transitory viewing only. This is the grant of a license, not a
                transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Disclaimer</h2>
              <p>
                The materials on Ceedrs&apos;s website are provided on an &apos;as is&apos; basis. Ceedrs makes no
                warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without
                limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Limitations</h2>
              <p>
                In no event shall Ceedrs or its suppliers be liable for any damages (including, without limitation,
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability to
                use the materials on Ceedrs&apos;s website, even if Ceedrs or an authorized representative has
                been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Accuracy of Materials</h2>
              <p>
                The materials appearing on Ceedrs&apos;s website could include technical, typographical, or photographic
                errors. Ceedrs does not warrant that any of the materials on the website are accurate, complete, or
                current. Ceedrs may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Links</h2>
              <p>
                Ceedrs has not reviewed all of the sites linked to its website and is not responsible for the contents
                of any such linked site. The inclusion of any link does not imply endorsement by Ceedrs of the site. Use
                of any such linked website is at the user&apos;s own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. Modifications</h2>
              <p>
                Ceedrs may revise these terms of service for its website at any time without notice. By using this
                website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in
                which the service is provided, and you irrevocably submit to the exclusive jurisdiction of the courts in that
                location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">9. Contact Information</h2>
              <p>If you have any questions about these Terms, please contact us at legal@Ceedrs.com</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
