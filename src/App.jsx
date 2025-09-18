import React from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Phone, Mail, MapPin, Clock, Star, Users, Award, Heart } from 'lucide-react';
import clinicInterior from './assets/clinic-interior.jpg';
import modernClinic from './assets/modern-clinic.jpg';
import clinicDesign from './assets/clinic-design.jpg';
import './App.css';

function App() {
  const services = [
    {
      title: "جراحة الفم والوجه والفكين",
      description: "تخصص متقدم في جراحة الفم والوجه والفكين مع أحدث التقنيات",
      icon: "🦷"
    },
    {
      title: "علاج الأسنان العام",
      description: "خدمات شاملة لعلاج جميع مشاكل الأسنان واللثة",
      icon: "⚕️"
    },
    {
      title: "تجميل الأسنان",
      description: "حلول تجميلية متطورة للحصول على ابتسامة مثالية",
      icon: "✨"
    },
    {
      title: "طب أسنان الأطفال",
      description: "رعاية خاصة ومتخصصة لأسنان الأطفال",
      icon: "👶"
    }
  ];

  const features = [
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "خبرة متخصصة",
      description: "دكتور محمد عبدالوهاب الجوبي - ماجستير جراحة الفم والوجه والفكين"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "فريق طبي متكامل",
      description: "فريق من الأطباء المتخصصين بما في ذلك طبيبة أسنان مؤهلة"
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: "رعاية شاملة",
      description: "خدمات طبية متكاملة لجميع أفراد العائلة"
    },
    {
      icon: <Star className="h-8 w-8 text-blue-600" />,
      title: "جودة عالية",
      description: "أحدث التقنيات والمعدات الطبية المتطورة"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="bg-blue-600 text-white p-3 rounded-full">
                <span className="text-2xl">🦷</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">عيادة ماجستيك</h1>
                <p className="text-sm text-gray-600">لطب وجراحة الأسنان</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8 rtl:space-x-reverse">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">الرئيسية</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">الخدمات</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">عن العيادة</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">اتصل بنا</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-right">
              <h2 className="text-5xl font-bold mb-6">
                ابتسامتك تستحق الأفضل
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                في عيادة ماجستيك، نقدم أفضل الخدمات الطبية لأسنانك مع فريق من الأطباء المتخصصين
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  احجز موعدك الآن
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  تعرف على خدماتنا
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={clinicInterior} 
                alt="عيادة ماجستيك الداخلية" 
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-semibold text-gray-800">خدمة متميزة</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">خدماتنا الطبية</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              نقدم مجموعة شاملة من الخدمات الطبية المتخصصة لضمان صحة أسنانك
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-800 mb-6">عن عيادة ماجستيك</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-blue-600 mb-3">الدكتور محمد عبدالوهاب الجوبي</h4>
                  <p className="text-gray-700">
                    ماجستير جراحة الفم والوجه والفكين، يتمتع بخبرة واسعة في مجال طب الأسنان والجراحة التخصصية
                  </p>
                  <Badge className="mt-3 bg-blue-100 text-blue-800">استشاري جراحة الفم والفكين</Badge>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-pink-600 mb-3">فريق طبي متكامل</h4>
                  <p className="text-gray-700">
                    يضم فريقنا طبيبة أسنان مؤهلة لتقديم رعاية شاملة لجميع أفراد العائلة
                  </p>
                  <Badge className="mt-3 bg-pink-100 text-pink-800">رعاية نسائية متخصصة</Badge>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={modernClinic} 
                alt="عيادة حديثة" 
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
              <img 
                src={clinicDesign} 
                alt="تصميم العيادة" 
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">لماذا تختار عيادة ماجستيك؟</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">تواصل معنا</h3>
            <p className="text-xl text-blue-100">نحن هنا لخدمتك في أي وقت</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader className="text-center">
                <Phone className="h-8 w-8 mx-auto mb-4 text-blue-200" />
                <CardTitle>أرقام التواصل</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-2">774484736</p>
                <p>101056957</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader className="text-center">
                <Mail className="h-8 w-8 mx-auto mb-4 text-blue-200" />
                <CardTitle>البريد الإلكتروني</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="break-all">majesticdentalclinic1@gmail.com</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader className="text-center">
                <MapPin className="h-8 w-8 mx-auto mb-4 text-blue-200" />
                <CardTitle>العنوان</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>صنعاء، جدر، سوق جدر</p>
                <p>خلف سوبر الشارقة</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader className="text-center">
                <Clock className="h-8 w-8 mx-auto mb-4 text-blue-200" />
                <CardTitle>ساعات العمل</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>السبت - الخميس</p>
                <p>9:00 ص - 9:00 م</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50"
              onClick={() => window.open('https://maps.app.goo.gl/Qsg9iSLzSCobkRXq5', '_blank')}
            >
              <MapPin className="h-5 w-5 ml-2" />
              عرض الموقع على الخريطة
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4">
                <div className="bg-blue-600 text-white p-2 rounded-full">
                  <span className="text-xl">🦷</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold">عيادة ماجستيك</h4>
                  <p className="text-gray-400">لطب وجراحة الأسنان</p>
                </div>
              </div>
              <p className="text-gray-400">
                نقدم أفضل الخدمات الطبية لأسنانك مع فريق من الأطباء المتخصصين
              </p>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">خدماتنا</h5>
              <ul className="space-y-2 text-gray-400">
                <li>جراحة الفم والوجه والفكين</li>
                <li>علاج الأسنان العام</li>
                <li>تجميل الأسنان</li>
                <li>طب أسنان الأطفال</li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">معلومات التواصل</h5>
              <div className="space-y-2 text-gray-400">
                <p>📞 774484736 / 101056957</p>
                <p>✉️ majesticdentalclinic1@gmail.com</p>
                <p>📍 صنعاء، جدر، سوق جدر، خلف سوبر الشارقة</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 عيادة ماجستيك لطب وجراحة الأسنان. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

