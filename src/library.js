
const currency = "€"
const books =  [
  {
    title: "L'écume des jours",
    author: "Boris Vian",
    cover: "images/Ecume_des_jours.jpg",
    summary: "Un titre léger et lumineux qui annonce une histoire d’amour drôle ou grinçante, tendre ou grave, fascinante et inoubliable, composée par un écrivain de vingt-six ans. C’est un conte de l’époque du jazz et de la science-fiction, à la fois comique et poignant, heureux et tragique, féerique et déchirant. Dans cette œuvre d’une modernité insolente, livre culte depuis plus de cinquante ans, Duke Ellington croise le dessin animé, Sartre devient une marionnette burlesque, la mort prend la forme d’un nénuphar, le cauchemar va jusqu’au bout du désespoir. Mais seules deux choses demeurent éternelles et triomphantes : le bonheur ineffable de l’amour absolu et la musique des Noirs américains…",
    price: `15 ${currency}`,
    genre: ["roman", "fiction", "tragédie"]
  },
  {
    title: "Les fleurs du mal",
    author: "Charles Baudelaire",
    cover: "images/Fleurs_du_mal.jpg",
    summary: "Les Fleurs du Mal est un recueil des poèmes de Baudelaire écrits entre 1840 et 1857, date de publication de ce dernier. C’est une œuvre majeure de la poésie moderne. Les poèmes rompent avec le « style convenu » de la poésie classique et de ses codes stricts en usage jusqu’alors. De nombreuses formules ont une forte dimension expressive et visuelle qui font qu’à la lecture, de nombreuses images apparaissent à l’esprit du lecteur. Sa poésie, lyrique, exprime le spleen, un mal de vivre formé d’un mélange d’ennui et d’angoisse existentielle ; elle traduit sa quête du Beau dans l’idéal, mais aussi le mal et le laid. Située au carrefour du romantisme et du symbolisme (voir la dernière partie de cet article), sa poésie est moderne. Elle met en œuvre les correspondances dans le sonnet éponyme (du même nom) où « Les parfums, les couleurs et les sons se répondent ».",
    price: `8 ${currency}`,
    genre: ["poésie", "poésie lyrique"]
  }
]

export default books;
