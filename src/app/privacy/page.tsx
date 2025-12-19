import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Last updated: December 19, 2025</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray dark:prose-invert max-w-none">
          <p>
            Welcome to 3D E-Commerce Store. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we collect, use, and protect your personal information when you visit our website and use our services.
          </p>
          
          <h2 className="text-2xl font-bold mt-6 mb-4">Information We Collect</h2>
          <p>
            We may collect, use, store and transfer different types of personal information about you in connection with your use of our services. This includes:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Identity Data: including first name, maiden name, last name, username or similar identifier</li>
            <li>Contact Data: including billing address, delivery address, email address and telephone numbers</li>
            <li>Financial Data: including payment card data, bank account details</li>
            <li>Transaction Data: details about payments to and from you and other details of products and services you have purchased from us</li>
            <li>Technical Data: including internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website</li>
            <li>Profile Data: your username and password, purchases or orders made by you, your interests, preferences, feedback and survey responses</li>
            <li>Usage Data: about how you use our website, products and services</li>
            <li>Marketing and Communications Data: your preferences in receiving marketing from us and our third parties and your communication preferences</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-6 mb-4">How We Use Your Information</h2>
          <p>
            We use your personal information for the following purposes:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>To provide and maintain our service, including to monitor the usage of our service</li>
            <li>To manage your account and provide customer care and support</li>
            <li>To process transactions and send you related information, including purchase confirmations</li>
            <li>To send administrative information to you, such as changes to our terms, conditions and policies</li>
            <li>To respond to your comments, questions and provide customer service</li>
            <li>To send you marketing communications, with your consent</li>
            <li>To monitor and analyze trends, usage and activities in connection with our service</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-6 mb-4">Data Security</h2>
          <p>
            We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. We also limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
          </p>
          
          <h2 className="text-2xl font-bold mt-6 mb-4">Your Data Protection Rights</h2>
          <p>
            Depending on your location, you may have the following rights regarding your personal data:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>The right to access, update or delete your information</li>
            <li>The right to rectification</li>
            <li>The right to object</li>
            <li>The right to restriction</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-6 mb-4">Third-Party Services</h2>
          <p>
            We may use third-party services that collect, monitor and analyze your interactions with our website. These services may include analytics providers such as Google Analytics.
          </p>
          
          <h2 className="text-2xl font-bold mt-6 mb-4">Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
          
          <h2 className="text-2xl font-bold mt-6 mb-4">Contact Us</h2>
          <p>
            If you have questions about this privacy policy, please contact us at: info@3decommerce.com
          </p>
        </CardContent>
      </Card>
    </div>
  );
}