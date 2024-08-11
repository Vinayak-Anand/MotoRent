import { fadeIn } from "./motion";

export const links = [
  {
    link: "/",
    text: "Home",
    exact: true,
  },
  {
    link: "/booking?index=1",
    text: "Transfers",
    exact: true,
  },
  {
    link: "/local",
    text: "Local Transfers",
    exact: true,
  },
  {
    link: "/services",
    text: "Services",
  },
  {
    link: "/our-fleet",
    text: "Our Fleet",
    keyword: true,
  },
  {
    link: "/about-us",
    text: "About Us",
  },
];

// carousel array
export const profile = [
  {
    title: "Profile",
    img: "/banner-1.jpg",
    text: "Select your favored vehicle, timetable, and objective effortlessly. Secure your booking on the web now for a consistent encounter.",
    icon: "paint-brush",
  },
  {
    title: "Quotes",
    text: "Your definitive decision for lavish or high-limit transport, whenever, anyplace in Andhra Pradesh.",
    icon: "quote-left",
    img: "/banner-2.jpg",
  },
  {
    title: "Inspiration",
    text: "Find our spic and span MotoLux vehicle administration, conveying unmatched class and accommodation.",
    img: "/banner-3.jpg",
    icon: "lightbulb",
  },
];

export const exploreWorlds = [
  {
    id: "world-1",
    imgUrl: "/planet-01.jpg",
    title: "Secure, Dependable, and Opulent",
    description:
      "At MotoLux, we understand your desires – a seasoned chauffeur behind the wheel, complemented by a flawlessly stylish ride.",
  },
  {
    id: "world-2",
    imgUrl: "/planet-02.jpg",
    title: "Vehicles For Any Occasion",
    description:
      "From Unmatched Luxury to Spacious Comfort: MotoLux Awaits Your Selection!",
  },
  {
    id: "world-3",
    imgUrl: "/planet-03.jpg",
    title: "Need Wedding Transportation?",
    description:
      "On your wedding day, MotoLux delivers the ultimate luxury ride for an unforgettable journey.",
  },
];

export const homeCards = [
  {
    img: "/home-car-1.jpg",
    title: "Our Vision",
    description:
      "Transforming transportation with real-time vehicle tracking for peak efficiency and minimal downtime.",
  },
  {
    img: "/car-6.jpg",
    title: "Our Mission",
    description:
      "Empowering progress through innovative solutions and cutting-edge technology, our mission is to drive efficiency, enhance experiences, and create lasting value for our stakeholders.",
  },
  {
    img: "/car-7.jpg",
    title: "Our Approach",
    description:
      "Crafting success through a strategic and adaptive approach, we navigate challenges with creativity, innovation, and a commitment to excellence.",
  },
];

export const serviceList = [
  {
    id: 1,
    text: "Experience top-level unwavering quality and extravagance with our Andhra Pradesh Airport transfers. Whether you're an independent traveler or with family, we offer a warm meet-and-greet service, baggage assistance, and continuous traffic and flight tracking for reliable arrivals. Sit back, relax, and arrive refreshed, day or night.",
    title: "Airport transfers",
    img: "/airport-transfer-update.jpg",
    variant1: fadeIn("right", "tween", 0.2, 1),
    variant2: fadeIn("left", "tween", 0.2, 1),
  },
  {
    id: 2,
    text: "Elevate the memories of your upcoming special occasion with MotoLux. Whether it's a wedding, hen's party, or birthday celebration, add a touch of luxury with our impeccable vehicles. Need space for a large group? Arrive in ultimate style, day or night, with our 15-seater Mercedes Benz Sprinter at your service. It's not just transportation; it's an experience tailored to ensure you and your guests make a grand entrance.",
    title: "Weddings and parties",
    img: "/parties.jpg",
    variant1: fadeIn("left", "tween", 0.2, 1),
    variant2: fadeIn("right", "tween", 0.2, 1),
  },
  {
    id: 3,
    text: "MotoLux excels in corporate, executive, and celebrity transportation, ensuring a serene and seamless journey on every ride. Whether you're meeting a valued client or attending a pivotal business appointment, our service ensures you arrive in a state of relaxation and rejuvenation, allowing you to concentrate on what truly matters. We take pride in delivering smooth, expert, and dependable experiences, without fail.",
    title: "Corporate transfers",
    img: "/blog-3.jpg",
    variant1: fadeIn("right", "tween", 0.2, 1),
    variant2: fadeIn("left", "tween", 0.2, 1),
  },
  {
    id: 4,
    text: "From a quick parent-and-child getaway to a full-scale family adventure, let us enhance your family travel experience. Traveling with an infant? We'll handle the pre-installation of any necessary seats before we arrive. MotoLux offers a safe, reliable, and luxurious solution for all your family transportation needs. When planning your next family vacation, remember to book an airport transfer with MotoLux to ensure a peaceful and comfortable start to your journey.",
    title: "Family transfers",
    img: "/family-transfer.jpg",
    variant1: fadeIn("left", "tween", 0.2, 1),
    variant2: fadeIn("right", "tween", 0.2, 1),
  },
  {
    id: 5,
    text: "Andhra Pradesh ranks among India's top tourist destinations, and MotoLux offers you the ultimate freedom to explore the state's iconic attractions. Allow us to guide you along the scenic routes in sheer luxury, enabling you to enjoy the views and experiences at your own leisurely pace.",
    title: "Sightseeing",
    img: "/sightseeing.jpg",
    variant1: fadeIn("right", "tween", 0.2, 1),
    variant2: fadeIn("left", "tween", 0.2, 1),
  },
  {
    id: 6,
    text: "Explore Andhra Pradesh's premier wineries and boutique breweries, spanning from the Godavari River to the Eastern Ghats. Travel seamlessly and safely between these exceptional destinations in our luxurious chauffeur-driven vehicles. Whether it's a romantic occasion with a partner or a group adventure, elevate your experience with MotoLux, and do it with unparalleled style.",
    title: "Wine tours",
    img: "/wine-tour.jpg",
    variant1: fadeIn("left", "tween", 0.2, 1),
    variant2: fadeIn("right", "tween", 0.2, 1),
  },
  {
    id: 7,
    text: "For those who demand nothing but the best, indulge yourself with our top-tier cars, ensuring your arrival exudes luxury and sophistication. Our premium fleet proudly showcases esteemed models like the BMW 7 Series, Mercedes Benz S-Class, and Audi A8, among others, renowned for their unparalleled comfort and performance in today's market. Paired with our expert drivers, you're in for a luxurious and elevated experience.",
    title: "Limo service",
    img: "/limo-service.jpg",
    variant1: fadeIn("right", "tween", 0.2, 1),
    variant2: fadeIn("left", "tween", 0.2, 1),
  },
];

export const insights = [
  {
    imgUrl: "/car-1.jpg",
    title: "Luxury Sedan",
    subtitle:
      "Experience the encapsulation of luxury with MotoLux's astonishing decision of premium vehicles. Whether you pick a Mercedes-Benz E-Class, BMW 5 Series, Lexus ES300, or a similar upscale model, our extent of lavishness vehicles is planned to lift every occasion. Lower yourself in the predictable blend of cutting edge development, unequaled comfort, and unparalleled sensibility all at a sensible expense. Find the allure of refinement as you set out on your cycle in style with MotoLux.",
  },
  {
    imgUrl: "/premium-sedan.jpg",
    title: "Premium Sedan",
    subtitle:
      "MotoLux presents a handpicked determination of the best extravagance vehicles for the individuals who request only awesome. Look over the lofty BMW 7 Series, the notorious Mercedes-Benz S-Class, the modern Audi A8, or practically identical tip top models. Our vehicles are not simply include pressed; they address the zenith of current extravagance cars. With MotoLux, you'll make a stupendous entry, blowing some people's minds and delighting in outright style and solace. Lift your appearance and have an enduring effect with our impeccable fleet of luxury automobiles.",
  },
  {
    imgUrl: "/car-3.jpg",
    title: "Luxury SUV",
    subtitle:
      "MotoLux offers an answer for those looking for both more than adequate baggage limit and positive extravagance. Investigate our determination of premium SUVs, including the Mercedes-Benz GLE, BMW X5, and comparable upscale models. These extravagance SUVs give similar remarkable elements tracked down in our extravagance cars while offering additional room for your possessions. Express farewell to splits the difference and raise your movement experience with MotoLux's sumptuous SUVs, where style and capacity flawlessly coincide.",
  },
  {
    imgUrl: "/car-4.jpg",
    title: "Van",
    subtitle:
      "Find the Mercedes-Benz V-Class, a top decision for obliging 5-6 travelers easily with more than adequate baggage space. This open extravagance individual’s mover flaunts enormous back seats and a liberal boot, guaranteeing a smooth and spacious excursion. Prestigious overall for its flexibility, the Mercedes V-Class sets the norm for moving travelers in style and refinement. Raise your gathering travel insight with this remarkable vehicle from MotoLux.",
  },
  {
    imgUrl: "/car-5.jpg",
    title: "Transporter",
    subtitle:
      "MotoLux gladly presents the Mercedes-Benz Runner and Renault Masterbus, ideal for obliging bigger gatherings of up to eleven individuals. These lofty vehicles are the favored decision for leaders, as well as those looking for consistent transportation for air terminal exchanges, weddings, and corporate occasions. Raise your gathering travel insight with MotoLux, where extravagance, solace, and style combine. For requests, if it's not too much trouble, connect with us today. Your excursion with us starts with a straightforward call.",
  },
];

export const steps = [
  {
    name: "Enter Ride Details",
  },
  {
    name: "Choose a Vahicle",
  },
  {
    name: "Enter Contact Details",
  },
  {
    name: "Booking Summary",
  },
];

export const pickupTime = [
  "12:00 am",
  "12:15 am",
  "12:30 am",
  "12:45 am",
  "1:00 am",
  "1:15 am",
  "1:30 am",
  "1:45 am",
  "2:00 am",
  "2:15 am",
  "2:30 am",
  "2:45 am",
  "3:00 am",
  "3:15 am",
  "3:30 am",
  "3:45 am",
  "4:00 am",
  "4:15 am",
  "4:30 am",
  "4:45 am",
  "5:00 am",
  "5:15 am",
  "5:30 am",
  "5:45 am",
  "6:00 am",
  "6:15 am",
  "6:30 am",
  "6:45 am",
  "7:00 am",
  "7:15 am",
  "7:30 am",
  "7:45 am",
  "8:00 am",
  "8:15 am",
  "8:30 am",
  "8:45 am",
  "9:00 am",
  "9:15 am",
  "9:30 am",
  "9:45 am",
  "10:00 am",
  "10:15 am",
  "10:30 am",
  "10:45 am",
  "11:00 am",
  "11:15 am",
  "11:30 am",
  "11:45 am",
  "12:00 pm",
  "12:15 pm",
  "12:30 pm",
  "12:45 pm",
  "1:00 pm",
  "1:15 pm",
  "1:30 pm",
  "1:45 pm",
  "2:00 pm",
  "2:15 pm",
  "2:30 pm",
  "2:45 pm",
  "3:00 pm",
  "3:15 pm",
  "3:30 pm",
  "3:45 pm",
  "4:00 pm",
  "4:15 pm",
  "4:30 pm",
  "4:45 pm",
  "5:00 pm",
  "5:15 pm",
  "5:30 pm",
  "5:45 pm",
  "6:00 pm",
  "6:15 pm",
  "6:30 pm",
  "6:45 pm",
  "7:00 pm",
  "7:15 pm",
  "7:30 pm",
  "7:45 pm",
  "8:00 pm",
  "8:15 pm",
  "8:30 pm",
  "8:45 pm",
  "9:00 pm",
  "9:15 pm",
  "9:30 pm",
  "9:45 pm",
  "10:00 pm",
  "10:15 pm",
  "10:30 pm",
  "10:45 pm",
  "11:00 pm",
  "11:15 pm",
  "11:30 pm",
  "11:45 pm",
];