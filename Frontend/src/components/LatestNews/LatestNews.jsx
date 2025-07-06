const LatestNews = () => {
  const news = [
    {
     id: 1,
      title: "Dr. Ahmedul Kabir Presents at IMLI Seminar",
      date: "2025-06-01",
      category: "Conference",
      summary: 'Our Co-Director Dr. Ahmedul Kabir presented an article on "Using AI for the preservation of indigenous languages and culture" at the International Mother Language Institute (IMLI).'
    },
    {
      id: 2,
      title: "Collaboration with International Mother Language Institute (IMLI)",
      date: "2025-05-01",
      category: "Collaboration",
      summary:
        "BARTA Lab is working in collaboration with International Mother Language Institute (IMLI) on developing an innovative app to show the trending words used in Bangla print and social media.",
    },
    {
      id: 3,
      title: "Collaboration with Physically-challenged Development Foundation (PDF)",
      date: "2025-05-01",
      category: "Collaboration",
      summary:
        "BARTA Lab is working with Physically-challenged Development Foundation (PDF) to develop training programs and software for physically-challenged university students.",
    },
    {
      id: 4,
      title: "BARTA Alumni Mashiat Amin Farin Accepted to UT Dallas",
      date: "2025-03-01",
      category: "Alumni",
      summary:
        "BARTA alumni Mashiat Amin Farin has been accepted to University of Texas, Dallas. *Get more info on her program/work/dept*",
    },
    {
      id: 5,
      title: 'Dr. Ahmedul Kabir Presents at IMLI National Seminar',
      date: "2025-02-01",
      category: "Conference",
      summary:
        'Our Co-Director Dr. Ahmedul Kabir presented an article on "The use of technology for mother tongue-based multilingual learning" at the National Seminar of International Mother Language Institute (IMLI).',
    }
  ];

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section className="">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-medium text-gray-800">Latest News</h2>
        
        <ul className="divide-y divide-gray-200">
          {news.map((item) => (
            <li key={item.id} className="py-2 lg:py-4">
              <div className="flex flex-col">
                <div className="flex items-center text-sm mb-1">
                  <span className="text-green-secondary font-bold mr-2">
                    {item.category}
                  </span>
                  <span>•</span>
                  <span className="ml-2 text-gray-800">{formatDate(item.date)}</span>
                </div>
                
                <h3 className="text-md font-semibold text-green-primary mb-1">
                  {item.title}
                </h3>
                
                <p className="text-sm text-gray-700 mb-1">
                  {item.summary}
                </p>
              </div>
            </li>
          ))}
        </ul>
        
        <div className="mt-6 text-center hidden">
          <a 
            href="/news" 
            className="text-xs text-blue-primary hover:text-green-primary transition-colors"
          >
            View all news →
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;