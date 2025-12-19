import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center">About Electronic Sales</h1>

      <div className="space-y-12">
        <Card>
          <CardHeader>
            <CardTitle>Our Story</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">
              Founded in 2023, Electronic Sales began with a simple mission: to revolutionize electronics shopping through cutting-edge 3D technology and immersive visualization.
            </p>
            <p className="text-lg mb-4">
              We believe that every customer deserves to experience electronic products in a way that feels as close to real life as possible. Our platform leverages the latest in 3D rendering and visualization technology to bridge the gap between digital browsing and physical interaction.
            </p>
            <p className="text-lg">
              Today, we serve customers worldwide with our innovative approach to electronics e-commerce, making online shopping for gadgets, devices, and tech accessories more engaging, intuitive, and satisfying than ever before.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">
              To transform how people discover, explore, and purchase electronic products online by providing immersive 3D experiences that enhance decision-making and build confidence in purchases.
            </p>
            <p className="text-lg">
              We're committed to pushing the boundaries of what's possible in digital retail, combining beautiful design with powerful technology to create memorable electronics shopping experiences.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Why Choose Us?</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <li className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-3 mr-4">
                  <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Immersive 3D Product Views</h3>
                  <p className="text-gray-600 dark:text-gray-400">Experience electronics like never before with our interactive 3D models</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-3 mr-4">
                  <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Premium Electronics</h3>
                  <p className="text-gray-600 dark:text-gray-400">Curated collection of the latest gadgets, devices, and tech accessories</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-3 mr-4">
                  <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Advanced Visualization</h3>
                  <p className="text-gray-600 dark:text-gray-400">Cutting-edge 3D technology to explore products in detail</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-3 mr-4">
                  <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Secure Shopping</h3>
                  <p className="text-gray-600 dark:text-gray-400">Enterprise-grade security to protect your personal and payment information</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}