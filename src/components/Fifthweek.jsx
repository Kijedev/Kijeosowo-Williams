import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import Week5 from "../Image/Week_5new.png";
import Footer from "../components/Footer";

const Fifthweek = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gradient-to-br from-[#111] via-[#000] to-black"
    >
      <article className="prose prose-lg dark:prose-invert mx-auto px-4 py-28 max-w-3xl">
        {/* Breadcrumb */}
        <Link to="/" className="text-white flex gap-3">
          <ArrowLeft className="text-1xl bg-white/20 p-2 rounded-full w-8 h-8 flex items-center justify-center" />
          Back to Home
        </Link>

        {/* Hero */}
        <div className="my-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Month 2, Week 1
          </h1>
          <p className="text-gray-500 mt-2">Published Jan 29, 2025 · 2 min read</p>
        </div>

        <img
          src={Week5 || "/placeholder.svg"}
          alt="cover image"
          className="w-full rounded-lg transition-transform duration-300"
        />

        {/* Article Content */}
        <div className="space-y-6 py-10 text-gray-700 dark:text-gray-300 leading-relaxed">
          <h2 className="text-2xl font-semibold">Month 2, Week 1 Highlights! 🚀</h2>

          <p className="text-xl">
            It’s been over a month since I started learning React Native, and
            I’m excited to share my progress so far. This week, I built a{" "}
            <span className="font-bold">Pokémon Card App</span> featuring
            characters like Charmander, Bulbasaur, Squirtle, and Pikachu!
          </p>

          <p className="text-lg font-medium">Here’s how I approached it:</p>
          <ul className="space-y-3">
            <li>
              ~ I created an object to store the Pokémon’s properties, including
              their name, image, moves, weakness, and HP.
            </li>
            <li>
              ~ I used{" "}
              <code className="bg-white/10 p-2 rounded">props</code> to pass this
              data around, ensuring it to be reusable and scalable.
            </li>
          </ul>

          <p className="text-xl">
            This project really helped me strengthen my understanding of{" "}
            <code className="bg-white/10 p-2 rounded">props</code>, data
            structures, and reusability in React Native. ⚡
          </p>

          {/* Example Pokémon Card Code */}
          <pre className="bg-white/5 text-green-400 p-10 rounded-lg overflow-x-auto">
            <code>{`import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const PokemonCard = ({ name, image, hp, moves, weakness }) => (
  <View style={styles.card}>
    <Image source={{ uri: image }} style={styles.image} />
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.hp}>HP: {hp}</Text>
    <Text style={styles.section}>Moves: {moves.join(", ")}</Text>
    <Text style={styles.section}>Weakness: {weakness}</Text>
  </View>
);

export default function App() {
  const pokemons = [
    { name: "Charmander", image: "https://img.pokemondb.net/sprites/home/normal/charmander.png", hp: 39, moves: ["Scratch", "Ember"], weakness: "Water" },
    { name: "Bulbasaur", image: "https://img.pokemondb.net/sprites/home/normal/bulbasaur.png", hp: 45, moves: ["Tackle", "Vine Whip"], weakness: "Fire" },
    { name: "Squirtle", image: "https://img.pokemondb.net/sprites/home/normal/squirtle.png", hp: 44, moves: ["Tackle", "Water Gun"], weakness: "Grass" },
    { name: "Pikachu", image: "https://img.pokemondb.net/sprites/home/normal/pikachu.png", hp: 35, moves: ["Quick Attack", "Thunderbolt"], weakness: "Ground" },
  ];

  return (
    <ScrollView style={styles.container}>
      {pokemons.map((poke, index) => (
        <PokemonCard key={index} {...poke} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#111", padding: 20 },
  card: { backgroundColor: "#222", padding: 15, borderRadius: 12, marginBottom: 20 },
  image: { width: 100, height: 100, alignSelf: "center" },
  name: { color: "#FFD700", fontSize: 20, fontWeight: "bold", textAlign: "center", marginTop: 10 },
  hp: { color: "#fff", fontSize: 16, textAlign: "center", marginBottom: 5 },
  section: { color: "#aaa", fontSize: 14, textAlign: "center" },
});`}</code>
          </pre>
        </div>

        {/* Footer Section */}
        <div className="border-t border-white/20 mt-12 pt-6 flex justify-between text-sm text-gray-500">
          <Link to="/Fourthweek" className="hover:text-white/80">
            ← Previous Article
          </Link>
          <Link to="/Sixthweek" className="hover:text-white/80">
            Next Article →
          </Link>
        </div>
      </article>

      <Footer />
    </motion.div>
  );
};

export default Fifthweek;
