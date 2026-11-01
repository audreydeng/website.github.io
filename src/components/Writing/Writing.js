import React from "react";

// title: link text; url: optional; by: "by Author" (book reviews);
// venue: publication (italicized); italic: italicize the title itself.
const sections = [
  {
    heading: "Book Reviews",
    items: [
      { title: "Now, Now, Louison", italic: true, by: "Jean Frémon", url: "https://www.columbiajournal.org/archive/2019-review-now-now-louison-by-jean-fremon-translated-by-cole-swensen" },
      { title: "Interior", italic: true, by: "Thomas Clerc", url: "https://bookmarks.reviews/reviews/interior/" },
      { title: "Transcription", italic: true, by: "Kate Atkinson", url: "https://www.columbiajournal.org/archive/2018-review-transcription-by-kate-atkinson" },
      { title: "Serious Noticing", italic: true, by: "James Wood", url: "https://www.columbiajournal.org/archive/2020-review-serious-noticing-by-james-wood" },
    ],
  },
  {
    heading: "Publishers Weekly",
    items: [
      { title: "Mediterranean Wall", venue: "Publishers Weekly", url: "https://www.publishersweekly.com/9781943156979" },
      { title: "Love in the Big City", venue: "Publishers Weekly", url: "https://www.publishersweekly.com/9780802158789" },
    ],
  },
  {
    heading: "Interviews",
    items: [
      { title: "Art in Conversation", venue: "fields magazine (editor)", url: "https://www.fieldsmagazine.com/art-in-conversation" },
      { title: "Stipan Tadić", venue: "Columbia University School of the Arts", url: "https://arts.columbia.edu/news/conversations-artists-art-getting-art-stipan-tadic" },
      { title: "Susan MB Chen", venue: "Columbia University School of the Arts", url: "https://arts.columbia.edu/news/recent-alumna-susan-mb-chen-20-first-solo-exhibition-meredith-rosen-gallery" },
      { title: "Farah Mohammad", venue: "Columbia University School of the Arts", url: "https://arts.columbia.edu/news/conversations-artists-art-getting-art-farah-mohammad-21" },
      { title: "Esme Weijun Wang", venue: "Columbia Journal", url: "https://www.columbiajournal.org/archive/2019-reaping-the-blooms-an-interview-with-esm-weijun-wang" },
      { title: "Kiyomi Quinn Taylor", venue: "Columbia University School of the Arts", url: "https://arts.columbia.edu/news/conversations-artists-art-getting-art-kiyomi-quinn-taylor-20" },
    ],
  },
  {
    heading: "News",
    items: [
      { title: "Undergraduate Spring Show 2020", venue: "Columbia University School of the Arts", url: "https://arts.columbia.edu/news/undergraduate-spring-show-2020" },
      { title: "Professor Sarah Sze Commissioned for Public Art Fund Exhibition Laguardia Group", venue: "Columbia University School of the Arts", url: "https://arts.columbia.edu/news/professor-sarah-sze-commissioned-public-art-fund-exhibition-laguardia-group" },
      { title: "Undergraduate Writing Alumna Morgan Parker '10 Wins National Book Critic Award", venue: "Columbia University School of the Arts", url: "https://arts.columbia.edu/news/undergraduate-writing-alumna-morgan-parker-10-wins-national-book-critic-award" },
      { title: "Alumna and Professor Adama Delphine Fawundu '18 Featured in Several Winter Exhibits", venue: "Columbia University School of the Arts", url: "https://arts.columbia.edu/news/alumna-and-professor-adama-delphine-fawundu-18-featured-several-winter-exhibits" },
      { title: "Professor Susanna Coffey in Solo Exhibit Opening this Month", venue: "Columbia University School of the Arts", url: "https://arts.columbia.edu/news/professor-susanna-coffey-solo-exhibit-opening-month" },
    ],
  },
  {
    heading: "Fiction",
    items: [
      { title: "Porn addition", venue: "Psychology Today", url: "https://www.psychologytoday.com/us/blog/sex-esteem/202101/is-porn-addiction-really-a-disorder" },
      { title: "Does more sex lead to more happiness", venue: "Psychology Today", url: "https://www.psychologytoday.com/us/blog/sex-esteem/202012/does-more-sex-lead-feeling-happier" },
      { title: "the crown as a sex therapist", venue: "Psychology Today", url: "https://www.psychologytoday.com/us/blog/sex-esteem/202012/watching-the-crown-s-portrayal-bulimia-sex-therapist" },
      { title: "Party at the Get Down Jones", venue: "RECLINER", url: "https://reclinermag.com/issue/2/reruns/audrey-deng-party-at-the-get-down-jones" },
      { title: "Not My Fault!", venue: "RECLINER", url: "https://reclinermag.com/issue/3/5-oclock-news/audrey-deng-not-my-fault" },
    ],
  },
  {
    heading: "Essays",
    items: [
      { title: "Betta Fish Blues", venue: "Mr. Beller’s Neighborhood", url: "https://mrbellersneighborhood.com/2020/04/betta-fish-blues" },
      { title: "Cosmonauts Avenue", venue: "Cosmonauts Avenue" },
      { title: "Academy of American Poets", venue: "Judith Lobel Arkin Prize", url: "https://poets.org/academy-american-poets/judith-lobel-arkin-prize" },
    ],
  },
];

function Entry({ item }) {
  const title = item.italic ? <em>{item.title}</em> : item.title;
  return (
    <li>
      {item.url ? (
        <a href={item.url} target="_blank" rel="noreferrer">
          {title}
        </a>
      ) : (
        title
      )}
      {item.by && <> by {item.by}</>}
      {item.venue && <>, <em>{item.venue}</em></>}
    </li>
  );
}

function Writing() {
  return (
    <section className="writing">
      {sections.map((s) => (
        <div key={s.heading} className="writing-section">
          <h4>{s.heading}</h4>
          <ul>
            {s.items.map((item) => (
              <Entry key={item.title} item={item} />
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Writing;
