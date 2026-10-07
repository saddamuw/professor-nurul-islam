/**
 * Prof. Dr. Md. Nurul Islam - Data Module
 * Vice-Chancellor, Jahangirnagar University
 */

const SITE_DATA = {
  profile: {
    name: "Prof. Dr. Md. Nurul Islam",
    title: "Vice-Chancellor",
    institution: "Jahangirnagar University",
    location: "Savar, Dhaka-1342, Bangladesh",
    email: "vc@juniv.edu",
    registrarEmail: "registrar@juniv.edu",
    phone: "+880 2 224491045-51",
    pabxExt: "1201 (Secretary to VC)",
    fax: "+880 2 224491052",
    birthDate: "20 December 1971",
    birthPlace: "Rajshahi, Bangladesh",
    appointmentDate: "26 September 2026",
    governingAct: "Section 11(1) of the Jahangirnagar University Act, 1973",
    scholarProfile: "https://scholar.google.com",
    researchGateProfile: "https://www.researchgate.net",
    uniProfile: "https://juniv.edu"
  },

  stats: [
    { value: 25, label: "Years in Academia", suffix: "+" },
    { value: 4, label: "Universities Served", suffix: "" },
    { value: 50, label: "Research Papers", suffix: "+" },
    { value: 4, label: "Years Tenure as VC", suffix: " Yrs" }
  ],

  vcVision: [
    {
      icon: "fa-graduation-cap",
      title: "Academic Excellence & Ranking",
      description: "Adopting an inclusive, technology-driven academic framework to elevate Jahangirnagar University's research impact and global rankings."
    },
    {
      icon: "fa-microscope",
      title: "Research Funding & Infrastructure",
      description: "Actively securing national and international research grants, enhancing modern lab facilities, and supporting doctoral scholars."
    },
    {
      icon: "fa-seedling",
      title: "Sustainable & Regional Planning",
      description: "Advocating for region-specific environmental and agricultural planning to tackle climate vulnerability across Bangladesh."
    },
    {
      icon: "fa-users-gear",
      title: "Inclusive Campus Governance",
      description: "Fostering open dialogue with students, faculty, and administration to maintain an inclusive, peaceful, and progressive academic environment."
    }
  ],

  timeline: [
    {
      year: "26 Sep 2026 – Present",
      role: "Vice-Chancellor",
      institution: "Jahangirnagar University",
      badge: "Current Role",
      logo: "images/juniv-logo.webp",
      desc: "Appointed by the President & Chancellor under Section 11(1) of the JU Act 1973. Leading academic innovation, research elevation, and administrative excellence."
    },
    {
      year: "16 Mar 2026 – 26 Sep 2026",
      role: "Vice-Chancellor (2nd VC)",
      institution: "Dhaka Central University",
      badge: "Executive Leadership",
      logo: "images/dcu-logo.webp",
      desc: "Guided institutional development, academic consolidation of central colleges, and digital transformation for DCU."
    },
    {
      year: "03 Nov 2024 – 16 Mar 2026",
      role: "Pro-Vice-Chancellor",
      institution: "National University of Bangladesh",
      badge: "Higher Education Mgmt",
      logo: "images/nu-logo.webp",
      desc: "Overseeing nation-wide affiliated college curriculum, examination integrity, and administrative reforms."
    },
    {
      year: "2011 – Present",
      role: "Professor, Dept. of Geography & Environment",
      institution: "Jahangirnagar University",
      badge: "Professorship",
      logo: "images/juniv-logo.webp",
      desc: "Teaching advanced hydrology, GIS, remote sensing, and floodplain geomorphology; supervising PhD & MSc researchers."
    },
    {
      year: "2011",
      role: "Doctor of Philosophy (PhD) in Geography",
      institution: "University of Nottingham, UK",
      badge: "Doctorate",
      logo: "images/nottingham-logo.svg",
      desc: "Specialized doctoral research in fluvial geomorphology, river channel dynamics, and floodplain management."
    },
    {
      year: "Earlier Academic Career",
      role: "Lecturer & Assistant Professor",
      institution: "Univ. of Rajshahi & Univ. of Chittagong",
      badge: "Foundational Career",
      logo: "images/cu-logo.webp",
      desc: "Started university teaching career in Rajshahi and Chittagong before moving to Jahangirnagar University."
    }
  ],

  researchAreas: [
    {
      icon: "fa-water",
      title: "Fluvial Geomorphology & Hydrology",
      desc: "Channel pattern dynamics, erosion-accretion modeling, and trans-boundary river bankline changes in major deltaic rivers like Padma and Jamuna."
    },
    {
      icon: "fa-cloud-sun-rain",
      title: "Climate Change & Adaptation",
      desc: "Assessing climate impacts on agricultural land-use, coastal vulnerabilities, and regional resilience frameworks across Bangladesh."
    },
    {
      icon: "fa-earth-asia",
      title: "GIS & Remote Sensing",
      desc: "Multi-temporal satellite imagery application, watershed mapping, spatial land cover analysis, and environmental hazards monitoring."
    },
    {
      icon: "fa-shield-halved",
      title: "Floodplain & Disaster Management",
      desc: "Charland dynamics, community flood vulnerability, river water quality assessment (Buriganga/Dhaleshwari), and disaster risk reduction."
    }
  ],

  publications: [
    {
      category: "journal",
      year: 2020,
      title: "Bank Line Dynamics of Trans-Boundary River: A Case Study on the Padma River",
      authors: "Towfiqul Islam Khan, Shoriful Kabir Shamim, Md. Nurul Islam",
      journal: "International Journal of Innovative Research in Science, Engineering and Technology (IJIRSET)",
      vol: "Vol. 9, Issue 4",
      link: "https://www.researchgate.net",
      badge: "Peer Reviewed"
    },
    {
      category: "journal",
      year: 2014,
      title: "Charland Dynamics of the Brahmaputra-Jamuna River in Bangladesh",
      authors: "Hedaet Ullah, Md. Abdul Malak, Md. Nurul Islam",
      journal: "The Jahangirnagar Review, Part II: Social Sciences",
      vol: "Vol. XXXIV",
      link: "https://juniv.edu",
      badge: "Peer Reviewed"
    },
    {
      category: "report",
      year: 2018,
      title: "Environmental Impact Assessment & Watershed Planning in Bangladesh Rivers",
      authors: "Md. Nurul Islam",
      journal: "Department of Geography & Environment Technical Series, JU",
      vol: "Monograph",
      link: "https://juniv.edu",
      badge: "Monograph"
    }
  ],

  newsEvents: [
    {
      title: "JU VC greets teachers on World Teachers' Day",
      outlet: "BSS News",
      date: "06 Oct 2026",
      lang: "EN",
      category: "ju-vc",
      desc: "Prof. Dr. Md. Nurul Islam extended warm greetings to teachers across the university, describing teaching as a noble mission for building tomorrow's Bangladesh.",
      link: "https://www.bssnews.net/news/284561"
    },
    {
      title: "Region-specific planning key to sustainable agricultural development: JU VC",
      outlet: "Dainik Amader Barta",
      date: "04 Oct 2026",
      lang: "EN",
      category: "ju-vc",
      desc: "Addressing an academic workshop, VC Prof. Nurul Islam highlighted the necessity of localized spatial planning and climate adaptation in agriculture.",
      link: "https://www.amaderbarta.net"
    },
    {
      title: "JU to adopt inclusive, technology-driven vision for global ranking: VC",
      outlet: "BSS News",
      date: "30 Sep 2026",
      lang: "EN",
      category: "ju-vc",
      desc: "Vice-Chancellor Prof. Md. Nurul Islam outlined strategic reforms focused on quality research, technological integration, and faculty support.",
      link: "https://www.bssnews.net/news/283112"
    },
    {
      title: "Prof. Dr. Md. Nurul Islam appointed Vice-Chancellor of Jahangirnagar University",
      outlet: "The Daily Star",
      date: "26 Sep 2026",
      lang: "EN",
      category: "ju-vc",
      desc: "Ministry of Education issues notification appointing Prof. Nurul Islam as the VC of JU under Section 11(1) of the JU Act 1973.",
      link: "https://www.thedailystar.net"
    },
    {
      title: "জাহাঙ্গীরনগর বিশ্ববিদ্যালয়ে ভিসি পদে ড. মো. নুরুল ইসলাম নিযুক্ত",
      outlet: "Prothom Alo / BSS",
      date: "26 Sep 2026",
      lang: "BN",
      category: "ju-vc",
      desc: "রাষ্ট্রপতি ও আচার্যের অনুমোদনক্রমে জাহাঙ্গীরনগর বিশ্ববিদ্যালয়ের নতুন উপাচার্য হিসেবে নিযুক্ত হলেন অধ্যাপক ড. মো. নুরুল ইসলাম।",
      link: "https://www.prothomalo.com"
    },
    {
      title: "JU Prof Nurul Islam made new VC of Dhaka Central University",
      outlet: "Dhaka Tribune",
      date: "16 Mar 2026",
      lang: "EN",
      category: "past-roles",
      desc: "Prof. Nurul Islam was appointed as the 2nd VC of Dhaka Central University to steer its academic setup.",
      link: "https://www.dhakatribune.com"
    },
    {
      title: "JU Prof Nurul Islam appointed Pro-VC of National University",
      outlet: "BSS News / UNB",
      date: "03 Nov 2024",
      lang: "EN",
      category: "past-roles",
      desc: "Appointed Pro-Vice-Chancellor of the National University of Bangladesh overseeing nationwide college education.",
      link: "https://www.bssnews.net"
    }
  ],

  gallery: [
    {
      slug: "vc-official-portrait",
      cat: "leadership",
      title: "Prof. Dr. Md. Nurul Islam (Official Portrait)",
      desc: "Vice-Chancellor of Jahangirnagar University delivering executive address.",
      src: "images/gallery/vc-official-portrait.webp",
      thumb: "images/gallery/vc-official-portrait-sm.webp",
      license: "CC BY 4.0",
      artist: "Syedsadi387681",
      page: "https://commons.wikimedia.org/wiki/File:Md._Nurul_Islam_VC_DCU.png"
    },
    {
      slug: "vc-in-office",
      cat: "leadership",
      title: "Vice-Chancellor in Executive Office",
      desc: "Prof. Dr. Md. Nurul Islam engaged in university administrative duties.",
      src: "images/gallery/vc-in-office.webp",
      thumb: "images/gallery/vc-in-office-sm.webp",
      license: "CC0",
      artist: "Syedsadi387681",
      page: "https://commons.wikimedia.org/wiki/File:Nurul_Islam_in_his_office.png"
    },
    {
      slug: "vc-portrait-speaking",
      cat: "leadership",
      title: "Academic Exchange & Media Address",
      desc: "Addressing academic members and journalists during campus interactions.",
      src: "images/gallery/vc-portrait-speaking.webp",
      thumb: "images/gallery/vc-portrait-speaking-sm.webp",
      license: "CC0",
      artist: "Syedsadi387681",
      page: "https://commons.wikimedia.org/wiki/File:VC_Md._Nurul_Islam_at_Dhaka_College_Campus.jpg"
    },
    {
      slug: "exchange-meeting-01",
      cat: "leadership",
      title: "Interaction with University Scholars",
      desc: "Prof. Nurul Islam exchanging views during an academic orientation meeting.",
      src: "images/gallery/exchange-meeting-01.webp",
      thumb: "images/gallery/exchange-meeting-01-sm.webp",
      license: "CC0",
      artist: "Syedsadi387681",
      page: "https://commons.wikimedia.org/wiki/File:Md._Nurul_Islam_at_the_exchange_meeting_at_Dhaka_College_campus_01.jpg"
    },
    {
      slug: "ju-admin-building",
      cat: "campus",
      title: "Jahangirnagar University Administrative Building",
      desc: "The central executive administrative building of JU campus at Savar.",
      src: "images/gallery/ju-admin-building.webp",
      thumb: "images/gallery/ju-admin-building-sm.webp",
      license: "CC BY-SA 4.0",
      artist: "Syed Sajidul Islam",
      page: "https://commons.wikimedia.org/wiki/File:Administrative_building_of_Jahangirnagar_University,Bangladesh.jpg"
    },
    {
      slug: "ju-new-arts-building",
      cat: "campus",
      title: "JU New Arts Building & Shaheed Minar Square",
      desc: "Architectural view of the New Arts Building at Jahangirnagar University.",
      src: "images/gallery/ju-new-arts-building.webp",
      thumb: "images/gallery/ju-new-arts-building-sm.webp",
      license: "CC BY-SA 4.0",
      artist: "Syed Sajidul Islam",
      page: "https://commons.wikimedia.org/wiki/File:New_arts_building,_Jahangirnagar_University.jpg"
    },
    {
      slug: "ju-lake-view",
      cat: "campus",
      title: "Scenic Lake & Sanctuary Campus View",
      desc: "Jahangirnagar University's iconic serene lakes and greenery in Savar.",
      src: "images/gallery/ju-lake-view.webp",
      thumb: "images/gallery/ju-lake-view-sm.webp",
      license: "CC BY-SA 4.0",
      artist: "Afrida Nurain",
      page: "https://commons.wikimedia.org/wiki/File:Jahangirnagar_University_Lake_View.webp"
    },
    {
      slug: "ju-migratory-birds",
      cat: "campus",
      title: "Winter Migratory Birds Sanctuary",
      desc: "JU lakes serving as a famous sanctuary for winter migratory birds.",
      src: "images/gallery/ju-migratory-birds.webp",
      thumb: "images/gallery/ju-migratory-birds-sm.webp",
      license: "CC BY-SA 4.0",
      artist: "Syed Sajidul Islam",
      page: "https://commons.wikimedia.org/wiki/File:Migratory_birds_at_Jahangirnagar_University_Lake,Bangladesh.jpg"
    },
    {
      slug: "ju-omor-ekushe",
      cat: "campus",
      title: "Amar Ekushey Monument at JU",
      desc: "The historic monument honoring Language Movement martyrs on campus.",
      src: "images/gallery/ju-omor-ekushe.webp",
      thumb: "images/gallery/ju-omor-ekushe-sm.webp",
      license: "CC BY-SA 4.0",
      artist: "Frameofashik",
      page: "https://commons.wikimedia.org/wiki/File:Omor_Ekuse_at_JahangirNagar_University.jpg"
    },
    {
      slug: "ju-convocation",
      cat: "campus",
      title: "JU Academic Convocation Assembly",
      desc: "Historic convocation ceremony awarding academic excellence at JU.",
      src: "images/gallery/ju-convocation.webp",
      thumb: "images/gallery/ju-convocation-sm.webp",
      license: "Public domain",
      artist: "Press Information Department",
      page: "https://commons.wikimedia.org/wiki/File:2015-02-05_President_Abdul_Hamid_Awards_Gold_Medals_at_Jahangirnagar_University_5th_Convocation_Ceremony_(PID-0060749).jpg"
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = SITE_DATA;
}
