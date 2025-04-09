const LatestNews = () => {
  const news = [
    {
      id: 1,
      title: "New Research Publication in Computational Linguistics",
      date: "2025-04-01",
      category: "Publication",
      summary: "Our team's research on advanced natural language processing techniques has been accepted at ACL 2025.",
    },
    {
      id: 2,
      title: "Research Collaboration with Stanford NLP Group",
      date: "2025-03-22",
      category: "Collaboration",
      summary: "New international collaboration with Stanford's NLP research team, focusing on cross-lingual representation learning.",
    },
    {
      id: 3,
      title: "New Grant Awarded for Multilingual NLP Research",
      date: "2025-03-15",
      category: "Funding",
      summary: "Our research group has secured $1.2M in funding to develop new approaches to multilingual natural language understanding.",
    },
    {
      id: 4,
      title: "Dr. Rahman Presents Keynote at NLP Summit",
      date: "2025-02-28",
      category: "Conference",
      summary: "Our principal investigator delivered the keynote address on the future of NLP in multilingual contexts.",
    },
    {
      id: 5,
      title: "New PhD Positions Available",
      date: "2025-02-15",
      category: "Opportunity",
      summary: "Recruiting PhD students with interests in computational linguistics, machine learning, and natural language processing.",
    }
  ];

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section className="">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-medium text-gray-700 mb-2">Latest News</h2>
        
        <ul className="divide-y divide-gray-200">
          {news.map((item) => (
            <li key={item.id} className="py-2 lg:py-4">
              <div className="flex flex-col">
                <div className="flex items-center text-xs text-gray-500 mb-1">
                  <span className="text-green-primary font-medium mr-2">
                    {item.category}
                  </span>
                  <span>•</span>
                  <span className="ml-2">{formatDate(item.date)}</span>
                </div>
                
                <h3 className="text-md font-semibold text-blue-primary mb-1">
                  {item.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-1">
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