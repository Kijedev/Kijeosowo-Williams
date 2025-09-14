import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import Week3 from "../Image/Week_3new.png";
import Footer from "../components/Footer";

const Thirdweek = () => {
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
            Month 1, Week 3
          </h1>
          <p className="text-gray-500 mt-2">Published Jan 15, 2025 · 2 min read</p>
        </div>

        <img
          src={Week3 || "/placeholder.svg"}
          alt="cover image"
          className="w-full rounded-lg transition-transform duration-300"
        />

        {/* Article Content */}
        <div className="space-y-6 py-10 text-gray-700 dark:text-gray-300 leading-relaxed">
          <h2 className="text-2xl font-semibold">Week 3 Highlights ✨</h2>

          <p className="text-xl">
            This week, I decided to put my learnings into practice by styling
            React Native components to design a Twitter (X) news feed page! 🖌️
          </p>

          <p>
            I made use of the{" "}
            <code className="bg-white/10 p-2 rounded">map()</code> method to
            traverse and display a list of similar tweet post objects, making
            the components reusable and efficient. This approach streamlined my
            workflow and reinforced the importance of writing clean code. 🙌
          </p>

          <p>
            While I didn’t focus on functionality just yet, I dedicated my
            efforts to mastering the design aspect — and I must say, it was such
            an exciting process! 🎉
          </p>

          <p>
            This project deepened my understanding of{" "}
            <code className="bg-white/10 p-2 rounded">Flexbox</code>,{" "}
            <code className="bg-white/10 p-2 rounded">Grid</code>, and other
            styling techniques in React Native. I’m thrilled about the progress
            so far and can’t wait to continue building even more impressive
            projects. 🚀
          </p>

          <p className="text-xl">
            Stay tuned for Week 4 updates — I’m just getting started! 🙌
          </p>

          {/* Example Tweet Card Code */}
          <pre className="bg-white/5 text-green-400 p-10 rounded-lg overflow-x-auto">
            <code>{`import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";

const tweets = [
  { id: "1", user: "Kijewilliams", text: "Just finished styling a Twitter feed in React Native! 🚀", avatar: "https://via.placeholder.com/50" },
  { id: "2", user: "DevMate", text: "Reusable components with map() are life-saving 🙌", avatar: "https://via.placeholder.com/50" },
];

export default function App() {
  return (
    <FlatList
      style={styles.container}
      data={tweets}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.avatar }} style={styles.avatar} />
          <View style={styles.content}>
            <Text style={styles.user}>@{item.user}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 20 },
  card: { flexDirection: "row", padding: 15, borderBottomWidth: 1, borderColor: "#222" },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  content: { flex: 1 },
  user: { color: "#1DA1F2", fontWeight: "bold", marginBottom: 5 },
  text: { color: "white" },
});`}</code>
          </pre>
        </div>

        {/* Footer Section */}
        <div className="border-t border-white/20 mt-12 pt-6 flex justify-between text-sm text-gray-500">
          <Link to="/Secondweek" className="hover:text-white/80">
            ← Previous Article
          </Link>
          <Link to="/Fourthweek" className="hover:text-white/80">
            Next Article →
          </Link>
        </div>
      </article>

      <Footer />
    </motion.div>
  );
};

export default Thirdweek;
