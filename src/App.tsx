import { useState } from "react"  
import { Card, CardContent } from "@/components/ui/card"  
import { Button } from "@/components/ui/button"  
import { Input } from "@/components/ui/input"  
import { Textarea } from "@/components/ui/textarea"  
import { Phone, MapPin, Clock, Star, ChevronDown, ChevronUp } from "lucide-react"  
  
// Data produk  
const products = [  
{  
id: 1,  
name: "Ayam Potong Segar",  
desc: "Ayam langsung dari peternakan, sehat & higienis.",  
price: "Rp 45.000 / ekor",  
img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCmSrwn3PXo2roPyPZAWZjEzzlDvaQ9KkuGkO6pVPuZQ&s=10",  
},  
{  
id: 2,  
name: "Nugget Ayam",  
desc: "Olahan sehat tanpa pengawet, cocok untuk keluarga.",  
price: "Rp 25.000 / pack",  
img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ46rYj2B-yUNKatPq7bUgnwaE4HUKgu4sxCnkJZQEIvg&s=10",  
},  
{  
id: 3,  
name: "Telur Ayam",  
desc: "Telur segar dengan kualitas terbaik.",  
price: "Rp 28.000 / kg",  
img: "https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=400",  
},  
{  
id: 4,  
name: "Ayam Kampung",  
desc: "Ayam kampung asli dengan rasa gurih alami.",  
price: "Rp 70.000 / ekor",  
img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9kvm56SomI4e7uBldsUlJg1ciyCpg5e-Wmaepeju0Cg&s=10",  
},  
{  
id: 5,  
name: "Bakso Ayam",  
desc: "Bakso ayam kenyal, tanpa borax & bahan berbahaya.",  
price: "Rp 20.000 / pack",  
img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0imDCrYE_BaBqOR3n21AaNT4aoVq7C3e64hJB3uvi0Q&s=10",  
},  
]  
  
// Data testimoni  
const testimonials = [  
{  
name: "Budi Santoso",  
location: "Jakarta Selatan",  
rating: 5,  
feedback:  
"Nuggetnya enak banget, anak-anak suka. Pasti langganan terus di Rasya Farm!",  
},  
{  
name: "Rina Putri",  
location: "Depok",  
rating: 5,  
feedback:  
"Ayam potong segar dan bersih, beda banget sama di pasar biasa. Recomended!",  
},  
{  
name: "Andi Saputra",  
location: "Tangerang",  
rating: 5,  
feedback: "Telurnya fresh, kuningnya oranye banget. Kualitas top!",  
},  
]  
  
// Data FAQ  
const faqs = [  
{  
q: "Apakah produk bisa dikirim keluar kota?",  
a: "Saat ini kami melayani pengiriman sekitar Jabodetabek. Untuk luar kota bisa diskusi via WhatsApp.",  
},  
{  
q: "Apakah produk menggunakan bahan pengawet?",  
a: "Tidak, semua produk olahan kami sehat tanpa pengawet dan bahan kimia berbahaya.",  
},  
{  
q: "Bagaimana cara order?",  
a: "Bisa langsung isi form pemesanan di website ini atau chat via WhatsApp untuk konsultasi lebih lanjut.",  
},  
{  
q: "Berapa minimum order?",  
a: "Minimum order Rp 50.000 untuk area Jakarta dan sekitarnya, diluar area bisa diskusi.",  
},  
{  
q: "Apakah ada garansi kualitas?",  
a: "Ya, kami berikan garansi 100% fresh. Jika tidak sesuai, bisa dikomplain dan akan kami ganti.",  
},  
]  
  
function FAQItem({ question, answer }: { question: string; answer: string }) {  
const [isOpen, setIsOpen] = useState(false)  
  
return (  
<div className="border border-gray-200 rounded-xl overflow-hidden">  
<button  
className="w-full p-6 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"  
onClick={() => setIsOpen(!isOpen)}  
>  
<h4 className="font-semibold text-lg pr-4">{question}</h4>  
{isOpen ? (  
<ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />  
) : (  
<ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />  
)}  
</button>  
{isOpen && (  
<div className="px-6 pb-6 bg-yellow-50">  
<p className="text-gray-700 leading-relaxed">{answer}</p>  
</div>  
)}  
</div>  
)  
}  
  
export default function App() {  
// State untuk form  
const [name, setName] = useState("")  
const [phone, setPhone] = useState("")  
const [address, setAddress] = useState("")  
const [product, setProduct] = useState("")  
const [quantity, setQuantity] = useState("")  
const [notes, setNotes] = useState("")  
const [isSubmitting, setIsSubmitting] = useState(false)  
  
const handleSubmit = async (e: React.FormEvent) => {  
e.preventDefault()  
setIsSubmitting(true)  
  
// Simulate form submission    
setTimeout(() => {    
  const message = `*PESANAN BARU - RASYA FARM*\n\n` +    
    `👤 Nama: ${name}\n` +    
    `📱 No. HP: ${phone}\n` +    
    `📍 Alamat: ${address}\n` +    
    `🍗 Produk: ${product}\n` +    
    `📦 Jumlah: ${quantity}\n` +    
    `📝 Catatan: ${notes || 'Tidak ada'}\n\n` +    
    `Terima kasih sudah mempercayai Rasya Farm! 🙏`    
      
  const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`    
  window.open(whatsappUrl, '_blank')    
      
  // Reset form    
  setName("")    
  setPhone("")    
  setAddress("")    
  setProduct("")    
  setQuantity("")    
  setNotes("")    
  setIsSubmitting(false)    
}, 1000)  
  
}  
  
return (  
<div className="min-h-screen bg-white text-gray-900">  
{/* Navbar */}  
<header className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-4 shadow-lg sticky top-0 z-50">  
<div className="max-w-6xl mx-auto flex justify-between items-center">  
<div className="flex items-center space-x-2">  
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">  
🐔  
</div>  
<h1 className="text-2xl font-bold text-gray-900">Rasya Farm</h1>  
</div>  
<nav className="hidden md:flex space-x-6 font-medium">  
<a href="#produk" className="hover:underline transition-all duration-200">  
Produk  
</a>  
<a href="#tentang" className="hover:underline transition-all duration-200">  
Tentang  
</a>  
<a href="#pesan" className="hover:underline transition-all duration-200">  
Pesan  
</a>  
<a href="#testimoni" className="hover:underline transition-all duration-200">  
Testimoni  
</a>  
<a href="#faq" className="hover:underline transition-all duration-200">  
FAQ  
</a>  
<a href="#kontak" className="hover:underline transition-all duration-200">  
Kontak  
</a>  
</nav>  
</div>  
</header>  
  
{/* Hero Section */}  
<section className="bg-gradient-to-br from-yellow-100 via-yellow-50 to-white py-20 text-center px-4">  
<div className="max-w-4xl mx-auto">  
<div className="mb-6">  
<span className="inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">  
✨ Fresh from Farm to Your Table  
</span>  
</div>  
<h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">  
Ternak Ayam & Olahan  
<span className="text-yellow-600"> Sehat</span>  
</h2>  
<p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">  
Dari kandang langsung ke meja makanmu 🍗✨ Produk segar, sehat, dan  
higienis untuk keluarga tercinta.  
</p>  
<div className="flex flex-col sm:flex-row gap-4 justify-center">  
<Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 text-lg">  
<a href="#produk">Lihat Produk</a>  
</Button>  
<Button size="lg" variant="outline" className="border-yellow-500 text-yellow-700 hover:bg-yellow-50 px-8 py-3 text-lg">  
<a href="#pesan">Pesan Sekarang</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-yellow-600 mb-2">500+</div>
              <div className="text-gray-600">Pelanggan Puas</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-yellow-600 mb-2">5</div>
              <div className="text-gray-600">Produk Unggulan</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-yellow-600 mb-2">5+</div>
              <div className="text-gray-600">Tahun Pengalaman</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-yellow-600 mb-2">100%</div>
              <div className="text-gray-600">Tanpa Pengawet</div>
            </div>
          </div>
        </div>
      </section>

      {/* Produk */}
      <section id="produk" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Produk Unggulan Kami</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pilihan terbaik produk segar dan olahan sehat langsung dari peternakan kami
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((item) => (
              <Card key={item.id} className="shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-yellow-600">
                      Fresh
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">{item.name}</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">{item.desc}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-xl font-bold text-yellow-600">{item.price}</p>
                      <Button 
                        size="sm" 
                        className="bg-yellow-500 hover:bg-yellow-600 text-white"
                        onClick={() => {
                          const element = document.getElementById('pesan')
                          element?.scrollIntoView({ behavior: 'smooth' })
                        }}
                      >
                        Pesan
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tentang Kami */}
      <section id="tentang" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6">Tentang Rasya Farm</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Rasya Farm adalah usaha peternakan ayam yang berfokus pada produk
                segar dan olahan sehat seperti nugget. Kami mengutamakan kualitas,
                higienitas, dan rasa yang lezat untuk seluruh pelanggan kami.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Dengan pengalaman lebih dari 5 tahun, kami terus berkomitmen
                memberikan yang terbaik untuk keluarga Anda. Semua produk kami
                diproduksi dengan standar higienitas tinggi dan tanpa bahan pengawet.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4 text-yellow-600" />
                  <span>Jabodetabek</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4 text-yellow-600" />
                  <span>24/7 Service</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4 text-yellow-600" />
                  <span>Fast Response</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/Rasya.jpeg"
                alt="Foto Rasya"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-400 p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-gray-900">5+</div>
                <div className="text-sm text-gray-700">Tahun Pengalaman</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Pesan */}
      <section id="pesan" className="py-20 bg-gradient-to-br from-yellow-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Form Pemesanan</h3>
            <p className="text-gray-600">
              Isi form di bawah ini untuk memesan produk segar dari Rasya Farm
            </p>
          </div>
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nama Lengkap *
                    </label>
                    <Input
                      placeholder="Masukkan nama lengkap Anda"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nomor WhatsApp *
                    </label>
                    <Input
                      placeholder="08123456789"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Alamat Lengkap *
                  </label>
                  <Textarea
                    placeholder="Alamat lengkap untuk pengiriman"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    className="min-h-[100px]"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Produk yang Dipesan *
                    </label>
                    <Input
                      placeholder="Contoh: Ayam Potong Segar"
                      value={product}
                      onChange={(e) => setProduct(e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Jumlah *
                    </label>
                    <Input
                      placeholder="Contoh: 2 ekor / 3 pack"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Catatan Tambahan
                  </label>
                  <Textarea
                    placeholder="Catatan khusus untuk pesanan Anda (opsional)"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="min-h-[80px]"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="bg-green-500 hover:bg-green-600 text-white w-full h-12 text-lg font-semibold"
                >
                  {isSubmitting ? "Mengirim..." : "🚀 Kirim ke WhatsApp"}
                </Button>
                <p className="text-sm text-gray-500 text-center">
                  * Pesanan akan diteruskan ke WhatsApp untuk konfirmasi lebih lanjut
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimoni */}
      <section id="testimoni" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Apa Kata Pelanggan?</h3>
            <p className="text-gray-600">
              Kepuasan pelanggan adalah prioritas utama kami
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item, idx) => (
              <Card key={idx} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="italic text-gray-700 mb-6 leading-relaxed">
                    "{item.feedback}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <span className="text-yellow-600 font-bold">
                        {item.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.name}</h4>
                      <p className="text-sm text-gray-500">{item.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Pertanyaan Umum</h3>
            <p className="text-gray-600">
              Temukan jawaban untuk pertanyaan yang sering diajukan
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((item, idx) => (
              <FAQItem key={idx} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Kontak */}
      <section id="kontak" className="py-20 bg-gradient-to-r from-green-400 to-green-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">Hubungi Kami</h3>
          <p className="text-lg mb-8 opacity-90">
            Ingin pesan atau tanya-tanya? Hubungi kami di WhatsApp untuk respon cepat!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Chat via WhatsApp</span>
              </a>
            </Button>
            <div className="text-white/80">
              <p className="text-sm">Atau telepon langsung:</p>
              <p className="font-semibold">+62 895-1216-5434</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  🐔
                </div>
                <h4 className="text-xl font-bold">Rasya Farm</h4>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Ternak ayam dan olahan sehat terpercaya untuk keluarga Indonesia.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Produk Kami</h5>
              <ul className="space-y-2 text-gray-300">
                <li>Ayam Potong Segar</li>
                <li>Ayam Kampung</li>
                <li>Nugget Ayam</li>
                <li>Telur Segar</li>
                <li>Bakso Ayam</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Kontak</h5>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+62 895-1216-5434</span>
                </p>
                <p className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Jakarta, Indonesia</span>
                </p>
              </div>
            </div>
          </div>
          <hr className="my-8 border-gray-700" />
          <div className="text-center text-gray-400">
            <p>&copy; 2025 Rasya Farm. Semua Hak Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}