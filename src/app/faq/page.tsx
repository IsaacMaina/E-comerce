import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function FAQPage() {
  const faqs = [
    {
      question: "How does the 3D product visualization work?",
      answer: "Our 3D visualization technology allows you to view products from all angles, zoom in on details, and even customize colors and features in real-time. Simply select a product and use your mouse to rotate, pan, and zoom for an immersive experience."
    },
    {
      question: "Is the 3D experience available on all devices?",
      answer: "Our 3D technology works best on modern desktops and laptops with updated browsers. While we support mobile devices, the experience is optimized for larger screens for the best interaction."
    },
    {
      question: "How accurate are the 3D models to the real products?",
      answer: "Our 3D models are created using precise measurements and high-quality textures to accurately represent the real products. However, actual colors may vary slightly depending on your screen settings."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards including Visa, Mastercard, American Express, and Discover. We also support PayPal and Apple Pay for your convenience."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy on all unopened items. Items must be in the original packaging with all accessories included. Please note that return shipping costs may apply."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping typically takes 3-5 business days within the continental US. Express shipping options are available for faster delivery. International shipping times vary by destination."
    },
    {
      question: "Can I track my order?",
      answer: "Yes, you can track your order using the tracking number provided in your shipping confirmation email. You can also access tracking information from your account order history."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to most countries worldwide. International shipping costs and delivery times vary depending on the destination. Import duties and taxes may apply and are the responsibility of the customer."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
      
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg">{faq.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{faq.answer}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
        <p className="mb-4">
          Can't find the answer you're looking for? Feel free to reach out to our customer support team.
        </p>
        <a 
          href="/contact" 
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
}