"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  MapPin,
  Award,
  Star,
  Briefcase,
  Wallet,
  ShoppingBag,
  FileText,
  Luggage,
  Package,
  CheckCircle,
  MessageCircle,
  Menu,
  X,
  Hammer,
  Users,
  Truck,
  GraduationCap,
  Building,
  Laptop,
  Shield,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function MasterLeatherWorks() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const whatsappNumber = "919309878475"
  const whatsappMessage = "Hello! I'm interested in Master Leather Works products. Please provide more information."

  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(url, "_blank")
  }

  const products = [
    {
      name: "Delivery & Logistics Bags",
      icon: Truck,
      description: "Professional delivery bags and logistics solutions for food delivery and courier services",
      image: "/images/delivery-bag-scooter.jpeg",
    },
    {
      name: "Executive Portfolios",
      icon: Briefcase,
      description: "Premium leather portfolios and document cases for business professionals",
      image: "/images/executive-leather-portfolio.jpeg",
    },
    {
      name: "Tool Bags",
      icon: Hammer,
      description: "Heavy-duty canvas and leather tool bags with organized compartments",
      image: "/images/professional-tool-bag-interior.jpeg",
    },
    {
      name: "Corporate Merchandise",
      icon: Building,
      description: "Custom branded caps, bags and promotional items for corporate clients",
      image: "/images/corporate-cap-asm.jpeg",
    },
    {
      name: "School & Educational Bags",
      icon: GraduationCap,
      description: "Durable school backpacks and educational institution bags",
      image: "/images/school-backpack-petals.jpeg",
    },
    {
      name: "Travel & Duffel Bags",
      icon: Luggage,
      description: "Canvas travel bags and duffel bags for all your travel needs",
      image: "/images/travel-duffel-bag.jpeg",
    },
    {
      name: "Executive Wallets",
      icon: Wallet,
      description: "Sophisticated wallets with premium craftsmanship",
      image: "/images/executive-leather-wallet.jpeg",
    },
    {
      name: "Milk Delivery Bags",
      icon: ShoppingBag,
      description: "Professional insulated milk delivery bags for dairy distribution services",
      image: "/images/milk-delivery-bags-scooter.jpeg",
    },
    {
      name: "Branded Delivery Solutions",
      icon: Truck,
      description: "Custom branded delivery bags for businesses and e-commerce platforms",
      image: "/images/branded-delivery-bag-visakha.jpeg",
    },
    {
      name: "Professional Briefcases",
      icon: Briefcase,
      description: "Corporate briefcases with custom branding for executives",
      image: "/images/corporate-briefcase-abhinav.jpeg",
    },
    {
      name: "Laptop & Tech Bags",
      icon: Laptop,
      description: "Modern laptop backpacks and tech accessories for professionals",
      image: "/images/modern-laptop-backpack.jpeg",
    },
    {
      name: "Utility Gear",
      icon: Shield,
      description: "Utility equipments and gears for all industries",
      image: "/images/tactical-utility-belt.jpeg",
    },
    {
      name: "Surgical kit Organization Cases",
      icon: Package,
      description: "Professional organizer cases for pens, tools, and precision instruments",
      image: "/images/pen-tool-organizer-case.jpeg",
    },
    {
      name: "Instrument Pouch",
      icon: Wallet,
      description: "Custom pouches for various industrial and non industrial instruments",
      image: "/images/premium-leather-wallets.jpeg",
    },
    {
      name: "Equipment & Sample Cases",
      icon: Package,
      description: "Professional equipment cases and sample kits for technical use",
      image: "/images/professional-equipment-case.jpeg",
    },
    {
      name: "Insuation covers",
      icon: Package,
      description: "Insulation covers for industries and machineries",
      image: "/images/leather-waist-bag.jpeg",
    },
    {
      name: "Pet Travel Carriers",
      icon: Package,
      description: "Comfortable and secure pet travel carriers for your furry friends",
      image: "/images/pet-travel-carrier.jpeg",
    },
    {
      name: "Thermal Insulation jackets",
      icon: Package,
      description: "Specialized industrial covers and technical equipment protection",
      image: "/images/industrial-insulation-covers.jpeg",
    },
    {
      name: "Electronic Equipment Cases",
      icon: Package,
      description: "Protective cases for Electronic equipments and communication equipment",
      image: "/images/walkie-talkie-case.jpeg",
    },
    {
      name: "Outdoor & Camping Gear",
      icon: Package,
      description: "Durable camping equipment and outdoor adventure gear",
      image: "/images/outdoor-camping-tent.jpeg",
    },
  ]

  const clientele = [
    "INDIAN Railways",
    "Kone Cranes",
    "Symbiosis Intl University",
    "Allscripts India Pvt Ltd",
    "Mahindra Vehicle Mfg. Ltd.",
    "Seed Infotech",
    "BMCC & Fergusson College",
    "MIT School",
    "SS Engineers",
    "College of Military Engg. Pune",
    "Mont Vert Constructions",
    "Wipro Ltd.",
    "University of Pune (Sports Dept)",
    "Nichrome India",
    "Zuari India Ltd",
    "D Y Patil College",
    "Pathfinder Intl.",
    "Honeywell Automation India Ltd",
    "Polybond",
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF7F2" }}>
      {/* Header */}
      <header
        className="sticky top-0 z-50 backdrop-blur-sm border-b-2 shadow-lg"
        style={{
          backgroundColor: "#2C1810",
          borderColor: "#B8860B",
        }}
      >
        <div className="container mx-auto px-3 py-2 sm:px-4 sm:py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="relative flex-shrink-0">
                <Image
                  src="/images/mlw-logo.png"
                  alt="Master Leather Works Logo"
                  width={45}
                  height={45}
                  className="object-contain sm:w-[60px] sm:h-[60px]"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h1
                  className="text-lg sm:text-2xl lg:text-3xl font-bold leading-tight truncate"
                  style={{ color: "#B8860B", fontFamily: "serif" }}
                >
                  Master Leather Works
                </h1>
                <p className="text-sm sm:text-base lg:text-lg font-semibold" style={{ color: "#D4AF37" }}>
                  Since 1973
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6 xl:space-x-8">
              <Link
                href="#about"
                className="text-base xl:text-lg font-semibold hover:underline transition-colors"
                style={{ color: "#B8860B" }}
              >
                About
              </Link>
              <Link
                href="#products"
                className="text-base xl:text-lg font-semibold hover:underline transition-colors"
                style={{ color: "#B8860B" }}
              >
                Products
              </Link>
              <Link
                href="#craftsmanship"
                className="text-base xl:text-lg font-semibold hover:underline transition-colors"
                style={{ color: "#B8860B" }}
              >
                Craftsmanship
              </Link>
              <Link
                href="#contact"
                className="text-base xl:text-lg font-semibold hover:underline transition-colors"
                style={{ color: "#B8860B" }}
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg flex-shrink-0"
              style={{ backgroundColor: "#8B1538" }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-3 pb-3 border-t-2" style={{ borderColor: "#B8860B" }}>
              <nav className="flex flex-col space-y-3 pt-3">
                <Link
                  href="#about"
                  className="text-base font-semibold hover:underline transition-colors py-1"
                  style={{ color: "#B8860B" }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#products"
                  className="text-base font-semibold hover:underline transition-colors py-1"
                  style={{ color: "#B8860B" }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Products
                </Link>
                <Link
                  href="#craftsmanship"
                  className="text-base font-semibold hover:underline transition-colors py-1"
                  style={{ color: "#B8860B" }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Craftsmanship
                </Link>
                <Link
                  href="#contact"
                  className="text-base font-semibold hover:underline transition-colors py-1"
                  style={{ color: "#B8860B" }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-8 sm:py-12 lg:py-16 xl:py-24 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: "#FAF7F2" }}>
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
        </div>
        <div className="container mx-auto px-3 sm:px-4 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              <div className="text-center lg:text-left">
                <div
                  className="inline-flex items-center px-3 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-8"
                  style={{ backgroundColor: "#B8860B" }}
                >
                  <Award className="w-4 h-4 mr-2" style={{ color: "#2C1810" }} />
                  <span className="font-bold text-xs sm:text-base lg:text-lg" style={{ color: "#2C1810" }}>
                    ISO Certified Company
                  </span>
                </div>

                <h1
                  className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-6 leading-tight"
                  style={{ color: "#2C1810", fontFamily: "serif" }}
                >
                  Manufacturers of Genuine Products
                  <span
                    className="block text-xl sm:text-3xl lg:text-4xl xl:text-5xl mt-2 sm:mt-4"
                    style={{ color: "#8B1538" }}
                  >
                    Since 1973
                  </span>
                </h1>

                <div className="space-y-2 sm:space-y-4 mb-4 sm:mb-8 text-sm sm:text-lg" style={{ color: "#5D4037" }}>
                  <div className="flex items-center space-x-2 sm:space-x-3 justify-center lg:justify-start">
                    <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6 flex-shrink-0" style={{ color: "#8B1538" }} />
                    <span className="font-semibold">Leather accessories & bags</span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 justify-center lg:justify-start">
                    <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6 flex-shrink-0" style={{ color: "#8B1538" }} />
                    <span className="font-semibold">Corporate Gift articles</span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 justify-center lg:justify-start">
                    <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6 flex-shrink-0" style={{ color: "#8B1538" }} />
                    <span className="font-semibold">Delivery & logistics solutions</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-bold rounded-lg border-2 hover:scale-105 transition-transform"
                    style={{
                      backgroundColor: "#8B1538",
                      borderColor: "#B8860B",
                      color: "white",
                    }}
                    onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    View Products
                  </Button>
                  <Button
                    size="lg"
                    className="px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-bold rounded-lg border-2 hover:scale-105 transition-transform bg-transparent"
                    style={{
                      borderColor: "#8B1538",
                      color: "#8B1538",
                      backgroundColor: "transparent",
                    }}
                    onClick={openWhatsApp}
                  >
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Get Custom Quote
                  </Button>
                </div>
              </div>

              <div className="relative mt-6 lg:mt-0">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/professional-briefcase-interior.jpeg"
                    alt="Professional Briefcase Interior"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white">
                    <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                      <Image
                        src="/images/mlw-logo.png"
                        alt="Master Leather Works Logo"
                        width={32}
                        height={32}
                        className="object-contain sm:w-[40px] sm:h-[40px]"
                      />
                      <div>
                        <h3 className="text-base sm:text-xl font-bold" style={{ fontFamily: "serif" }}>
                          {""}
                        </h3>
                        <p className="text-xs sm:text-sm opacity-90">{""}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
                      <div>
                        <div className="text-lg sm:text-2xl font-bold" style={{ color: "#B8860B" }}>
                          {""}
                        </div>
                        <div className="text-xs">{""}</div>
                      </div>
                      <div>
                        <div className="text-lg sm:text-2xl font-bold" style={{ color: "#B8860B" }}>
                          {""}
                        </div>
                        <div className="text-xs">{""}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
                style={{ color: "#2C1810", fontFamily: "serif" }}
              >
                Our Product Range
              </h2>
              <p className="text-lg sm:text-xl" style={{ color: "#5D4037" }}>
                Comprehensive collection of premium products crafted with precision for diverse industries
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {products.map((product, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 border-2 overflow-hidden"
                  style={{
                    borderColor: "#B8860B",
                    backgroundColor: index % 2 === 0 ? "#FAF7F2" : "white",
                  }}
                >
                  <CardContent className="p-0">
                    <div className="relative h-48 sm:h-56 overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: "#8B1538" }}
                        >
                          <product.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3
                        className="text-lg sm:text-xl font-bold mb-2 sm:mb-3"
                        style={{ color: "#2C1810", fontFamily: "serif" }}
                      >
                        {product.name}
                      </h3>
                      <p className="text-sm sm:text-base" style={{ color: "#5D4037" }}>
                        {product.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 sm:mt-16 text-center">
              <div
                className="inline-block px-6 sm:px-8 py-6 sm:py-8 rounded-2xl"
                style={{ backgroundColor: "#2C1810" }}
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: "#B8860B", fontFamily: "serif" }}>
                  We are specialist in providing Customised solutions in bags / cases
                </h3>
                <p className="text-white text-base sm:text-lg mb-6">
                  From delivery logistics to corporate merchandise - we provide 'Value for Money' experience
                </p>
                <Button
                  className="px-6 sm:px-8 py-3 text-base sm:text-lg font-bold rounded-lg border-2"
                  style={{
                    backgroundColor: "#B8860B",
                    borderColor: "white",
                    color: "#2C1810",
                  }}
                  onClick={openWhatsApp}
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Request Custom Solutions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section id="craftsmanship" className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
                style={{ color: "#2C1810", fontFamily: "serif" }}
              >
                Artisan Craftsmanship
              </h2>
              <p className="text-lg sm:text-xl" style={{ color: "#5D4037" }}>
                Every piece is meticulously handcrafted using traditional techniques and premium materials
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/canvas-tool-bag-side.jpeg"
                    alt="Professional Tool Bag Craftsmanship"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start space-x-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#B8860B" }}
                  >
                    <Award className="w-6 h-6" style={{ color: "#2C1810" }} />
                  </div>
                  <div>
                    <h3
                      className="text-xl sm:text-2xl font-bold mb-3"
                      style={{ color: "#2C1810", fontFamily: "serif" }}
                    >
                      Premium Materials
                    </h3>
                    <p className="text-base sm:text-lg" style={{ color: "#5D4037" }}>
                      We source only the finest genuine leather, heavy-duty canvas, and premium hardware to ensure
                      durability and elegance in every product.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#B8860B" }}
                  >
                    <Users className="w-6 h-6" style={{ color: "#2C1810" }} />
                  </div>
                  <div>
                    <h3
                      className="text-xl sm:text-2xl font-bold mb-3"
                      style={{ color: "#2C1810", fontFamily: "serif" }}
                    >
                      Master Artisans
                    </h3>
                    <p className="text-base sm:text-lg" style={{ color: "#5D4037" }}>
                      Our skilled craftsmen bring decades of experience, combining traditional techniques with modern
                      precision for diverse applications.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#B8860B" }}
                  >
                    <Star className="w-6 h-6" style={{ color: "#2C1810" }} />
                  </div>
                  <div>
                    <h3
                      className="text-xl sm:text-2xl font-bold mb-3"
                      style={{ color: "#2C1810", fontFamily: "serif" }}
                    >
                      Attention to Detail
                    </h3>
                    <p className="text-base sm:text-lg" style={{ color: "#5D4037" }}>
                      Every stitch, edge, and finish is carefully executed to meet our exacting standards of quality and
                      functionality.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Products Showcase */}
            <div className="mt-16 lg:mt-20">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="order-2 lg:order-1 space-y-6">
                  <h3
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold"
                    style={{ color: "#2C1810", fontFamily: "serif" }}
                  >
                    Professional Solutions
                  </h3>
                  <p className="text-base sm:text-lg" style={{ color: "#5D4037" }}>
                    From delivery logistics to corporate merchandise, our diverse product range serves various
                    industries with customized solutions that meet specific requirements.
                  </p>
                  <Button
                    className="px-6 py-3 text-base font-bold rounded-lg border-2"
                    style={{
                      backgroundColor: "#8B1538",
                      borderColor: "#B8860B",
                      color: "white",
                    }}
                    onClick={openWhatsApp}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Explore Collection
                  </Button>
                </div>
                <div className="order-1 lg:order-2 relative">
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/large-delivery-box.jpeg"
                      alt="Professional Delivery Solutions"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clientele Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
                style={{ color: "#2C1810", fontFamily: "serif" }}
              >
                Our Clients
              </h2>
              <p className="text-lg sm:text-xl" style={{ color: "#5D4037" }}>
                Trusted by leading organizations across industries
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {clientele.map((client, index) => (
                <div
                  key={index}
                  className="bg-white p-3 sm:p-4 rounded-lg border-2 text-center hover:shadow-lg transition-shadow"
                  style={{ borderColor: "#B8860B" }}
                >
                  <p className="font-semibold text-sm sm:text-base" style={{ color: "#2C1810" }}>
                    {client}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 sm:mt-12">
              <p className="text-lg sm:text-xl font-semibold" style={{ color: "#5D4037" }}>
                and many more...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <h2
                  className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8"
                  style={{ color: "#2C1810", fontFamily: "serif" }}
                >
                  Additional Services
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#B8860B" }}
                    >
                      <Package className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: "#2C1810" }} />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: "#2C1810" }}>
                        Repair Works
                      </h3>
                      <p className="text-sm sm:text-base" style={{ color: "#5D4037" }}>
                        We also undertake repair works for all kinds of bags and leather goods, ensuring your products
                        last longer.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#B8860B" }}
                    >
                      <Star className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: "#2C1810" }} />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: "#2C1810" }}>
                        Custom Manufacturing
                      </h3>
                      <p className="text-sm sm:text-base" style={{ color: "#5D4037" }}>
                        Specialized in creating bespoke products for delivery services, corporate branding, and
                        professional use.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#B8860B" }}
                    >
                      <Award className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: "#2C1810" }} />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: "#2C1810" }}>
                        Quality Assurance
                      </h3>
                      <p className="text-sm sm:text-base" style={{ color: "#5D4037" }}>
                        ISO 9001:2008 certified processes ensuring the highest quality standards in every product
                        category.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative mt-8 lg:mt-0">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/delivery-bag-red-black.jpeg"
                    alt="Professional Delivery Solutions"
                    width={500}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "serif" }}>
                      Delivery & Logistics Solutions
                    </h3>
                    <p className="text-sm opacity-90">
                      Custom delivery bags and logistics equipment for modern businesses
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
                style={{ color: "#2C1810", fontFamily: "serif" }}
              >
                Get In Touch
              </h2>
              <p className="text-lg sm:text-xl" style={{ color: "#5D4037" }}>
                Ready to discuss your product requirements? We're here to help.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
              <div>
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-2" style={{ borderColor: "#B8860B" }}>
                  <h3 className="text-xl sm:text-2xl font-bold mb-6" style={{ color: "#2C1810", fontFamily: "serif" }}>
                    Contact Information
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "#B8860B" }}
                      >
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: "#2C1810" }} />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1 text-sm sm:text-base" style={{ color: "#2C1810" }}>
                          Address
                        </h4>
                        <p className="text-sm sm:text-base" style={{ color: "#5D4037" }}>
                          C/o. D. Chaganlal & Co.
                          <br />
                          1250, Dharmveer Dhavare Chowk,
                          <br />
                          Near Burudi Pul Chowk,
                          <br />
                          Pune - 411002
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "#B8860B" }}
                      >
                        <Phone className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: "#2C1810" }} />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1 text-sm sm:text-base" style={{ color: "#2C1810" }}>
                          Phone Numbers
                        </h4>
                        <div className="text-sm sm:text-base" style={{ color: "#5D4037" }}>
                          <p>
                            <strong>Sunil:</strong> +91 9309878475 / +91 9822211069
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "#B8860B" }}
                      >
                        <FileText className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: "#2C1810" }} />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1 text-sm sm:text-base" style={{ color: "#2C1810" }}>
                          GST Number
                        </h4>
                        <p className="font-mono text-sm sm:text-base" style={{ color: "#5D4037" }}>
                          27AIDPK2466M2ZX
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button
                      className="w-full py-3 text-base sm:text-lg font-bold rounded-lg border-2"
                      style={{
                        backgroundColor: "#8B1538",
                        borderColor: "#B8860B",
                        color: "white",
                      }}
                      onClick={openWhatsApp}
                    >
                      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Chat on WhatsApp
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-2" style={{ borderColor: "#B8860B" }}>
                  <h3 className="text-xl sm:text-2xl font-bold mb-6" style={{ color: "#2C1810", fontFamily: "serif" }}>
                    Send us a Message
                  </h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold mb-2" style={{ color: "#2C1810" }}>
                          Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:outline-none focus:ring-2 text-sm sm:text-base"
                          style={{
                            borderColor: "#B8860B",
                            focusRingColor: "#8B1538",
                          }}
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-2" style={{ color: "#2C1810" }}>
                          Phone
                        </label>
                        <input
                          type="tel"
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:outline-none focus:ring-2 text-sm sm:text-base"
                          style={{
                            borderColor: "#B8860B",
                            focusRingColor: "#8B1538",
                          }}
                          placeholder="Your Phone"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2" style={{ color: "#2C1810" }}>
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:outline-none focus:ring-2 text-sm sm:text-base"
                        style={{
                          borderColor: "#B8860B",
                          focusRingColor: "#8B1538",
                        }}
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2" style={{ color: "#2C1810" }}>
                        Product Interest
                      </label>
                      <select
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:outline-none focus:ring-2 text-sm sm:text-base"
                        style={{
                          borderColor: "#B8860B",
                          focusRingColor: "#8B1538",
                        }}
                      >
                        <option>Select Product Category</option>
                        <option>Delivery & Logistics Bags</option>
                        <option>Executive Portfolios</option>
                        <option>Professional Tool Bags</option>
                        <option>Corporate Merchandise</option>
                        <option>School & Educational Bags</option>
                        <option>Travel & Duffel Bags</option>
                        <option>Premium Leather Bags</option>
                        <option>Executive Wallets</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2" style={{ color: "#2C1810" }}>
                        Message
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:outline-none focus:ring-2 text-sm sm:text-base"
                        style={{
                          borderColor: "#B8860B",
                          focusRingColor: "#8B1538",
                        }}
                        placeholder="Tell us about your requirements..."
                      ></textarea>
                    </div>

                    <Button
                      className="w-full py-3 text-base sm:text-lg font-bold rounded-lg border-2"
                      style={{
                        backgroundColor: "#8B1538",
                        borderColor: "#B8860B",
                        color: "white",
                      }}
                      onClick={openWhatsApp}
                    >
                      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Send via WhatsApp
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12" style={{ backgroundColor: "#2C1810" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Image
                    src="/images/mlw-logo.png"
                    alt="Master Leather Works Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold" style={{ color: "#B8860B", fontFamily: "serif" }}>
                      Master Leather Works™
                    </h3>
                    <p className="text-white text-xs sm:text-sm">Since 1973</p>
                  </div>
                </div>
                <p className="text-white mb-4 text-sm sm:text-base">
                  Premium craftsmanship with over 50 years of expertise. ISO certified quality you can trust.
                </p>
                <div
                  className="inline-block px-3 sm:px-4 py-1 sm:py-2 rounded-full"
                  style={{ backgroundColor: "#B8860B" }}
                >
                  <span className="font-bold text-xs sm:text-sm" style={{ color: "#2C1810" }}>
                    ISO 9001:2008 Certified
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-bold mb-4" style={{ color: "#B8860B" }}>
                  Quick Links
                </h4>
                <ul className="space-y-2 text-white text-sm sm:text-base">
                  <li>
                    <Link href="#about" className="hover:underline">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#products" className="hover:underline">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link href="#craftsmanship" className="hover:underline">
                      Craftsmanship
                    </Link>
                  </li>
                  <li>
                    <Link href="#contact" className="hover:underline">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-bold mb-4" style={{ color: "#B8860B" }}>
                  Contact Info
                </h4>
                <div className="space-y-2 text-white text-sm sm:text-base">
                  <p>Pune - 411002, India</p>
                  <p>Sunil: +91 9309878475</p>
                  <p className="text-xs sm:text-sm">GST: 27AIDPK2466M2ZX</p>
                </div>
                <Button
                  className="mt-4 px-4 py-2 text-sm font-bold rounded-lg border-2"
                  style={{
                    backgroundColor: "#B8860B",
                    borderColor: "white",
                    color: "#2C1810",
                  }}
                  onClick={openWhatsApp}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>

            <div className="border-t border-white/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-white">
              <p className="text-xs sm:text-sm mb-2">
                &copy; {new Date().getFullYear()} Master Leather Works™. All rights reserved. | Proudly Made in Pune,
                India
              </p>
              <p className="text-xs">
                Developed by{" "}
                <a
                  href="https://nexturex.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                  style={{ color: "#B8860B" }}
                >
                  NextureX
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <Button
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow-2xl hover:scale-110 transition-transform"
          style={{
            backgroundColor: "#25D366",
            borderColor: "white",
          }}
          onClick={openWhatsApp}
        >
          <MessageCircle className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
        </Button>
      </div>
    </div>
  )
}
