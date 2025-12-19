import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>
              Have questions or feedback? We'd love to hear from you. Fill out the form and our team will get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" name="firstName" required />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" name="lastName" required />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required />
              </div>
              
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" required />
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" rows={5} required />
              </div>
              
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">General Inquiries:</p>
              <p className="font-medium">mainaisaacwachira2000@gmail.com</p>

              <p className="mb-2 mt-4">Customer Support:</p>
              <p className="font-medium">mainaisaacwachira2000@gmail.com</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium">+254 758 302725</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Monday-Friday: 8:00 AM - 6:00 PM EAT
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                Visit Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium">123 Technology Plaza</p>
              <p className="font-medium">Nairobi, Kenya</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Our flagship experience center is open to the public
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}