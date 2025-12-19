import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Terms and Conditions</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Last updated: December 19, 2025</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray dark:prose-invert max-w-none">
          <p>
            Welcome to 3D E-Commerce Store. These terms and conditions outline the rules and regulations for the use of our website and services.
          </p>
          
          <h2 className="text-2xl font-bold mt-6 mb-4">Interpretation and Definitions</h2>
          <p>
            The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
          </p>
          
          <h2 className="text-2xl font-bold mt-6 mb-4">Eligibility</h2>
          <p>
            By using our services, you represent and warrant that you are at least 18 years of age, or are acting with the consent and supervision of a parent or legal guardian if you are under 18. You also represent that you have the full right and authority to enter into this agreement.
          </p>
          
          <h2 className="text-2xl font-bold mt-6 mb-4">Product Information</h2>
          <p>
            We strive to provide accurate descriptions and images of our products. While we use our 3D visualization technology to give you the most accurate view of products possible, actual colors, sizes, and appearances may vary slightly from what is displayed on your screen.
          </p>
          <p className="mt-2">
            All product descriptions are subject to change without notice. We reserve the right to modify or discontinue any product at any time.
          </p>
          
          <h2 className="text-2xl font-bold mt-6 mb-4">Pricing and Payments</h2>
          <p>
            All prices are listed in US Dollars (USD) and are inclusive of all applicable taxes unless otherwise stated. We reserve the right to change prices at any time without prior notice.
          </p>
          <p className="mt-2">
            We accept various payment methods including credit cards, debit cards, and digital payment services. All payments are processed securely through our payment partners.
          </p>
          
          <h2 className="text-2xl font-bold mt-6 mb-4">Shipping and Delivery</h2>
          <p>
            Shipping times are estimates and not guaranteed. Actual delivery times may vary based on location, customs processing, and other factors beyond our control.
          </p>
          <p className="mt-2">
            Risk of loss and title for items purchased pass to you upon delivery of the items to the carrier.
          </p>
          
          <h2 className="text-2xl font-bold mt-6 mb-4">Returns and Refunds</h2>
          <p>
            We offer a 30-day return policy on most items. Items must be in new, unused condition with all original packaging. To initiate a return, please contact our customer service team.
          </p>
          <p className="mt-2">
            Refunds will be processed to the original payment method within 5-10 business days after we receive and inspect the returned items.
          </p>
          
          <h2 className="text-2xl font-bold mt-6 mb-4">Intellectual Property</h2>
          <p>
            The 3D models, website design, content, and other materials on this site are the property of 3D E-Commerce Store and are protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without express written permission.
          </p>
          
          <h2 className="text-2xl font-bold mt-6 mb-4">Limitation of Liability</h2>
          <p>
            In no event shall 3D E-Commerce Store, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
          </p>
          
          <h2 className="text-2xl font-bold mt-6 mb-4">Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
          </p>
          <p className="mt-2">
            Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
          </p>
          
          <h2 className="text-2xl font-bold mt-6 mb-4">Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.
          </p>
          
          <h2 className="text-2xl font-bold mt-6 mb-4">Contact Us</h2>
          <p>
            If you have any questions about these Terms and Conditions, please contact us at: info@3decommerce.com
          </p>
        </CardContent>
      </Card>
    </div>
  );
}